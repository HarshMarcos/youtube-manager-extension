import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { useNotes } from "../hooks/useNotes";
import { playerService } from "@/features/current-video/services/player.service";
import { formatTime } from "@/utils/formatTime";
import Textarea from "@/components/ui/Textarea/Textarea";

interface QuickNoteFormProps {
  videoId: string;
}

export default function QuickNoteForm({ videoId }: QuickNoteFormProps) {
  const [content, setContent] = useState("");
  const [capturedTimestamp, setCapturedTimestamp] = useState<number | null>(
    null,
  );

  const { saveNote } = useNotes();

  async function handleFocus() {
    // Don't overwrite if we're already writing a note
    if (capturedTimestamp !== null) {
      return;
    }

    const currentTime = await playerService.getCurrentTime();

    setCapturedTimestamp(currentTime);
  }

  async function handleSave() {
    if (!content.trim()) {
      return;
    }

    const timestamp =
      capturedTimestamp ?? (await playerService.getCurrentTime());

    await saveNote({
      videoId,
      content,
      timestamp,
    });

    setContent("");
    setCapturedTimestamp(null);
  }

  return (
    <div className="space-y-3">
      {capturedTimestamp !== null && (
        <div className="text-xs text-[var(--muted-foreground)]">
          📍 Note for{" "}
          <span className="font-medium">{formatTime(capturedTimestamp)}</span>
        </div>
      )}
      <Textarea
        placeholder="Write a quick note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onFocus={handleFocus}
      />

      <Button className="w-full" onClick={handleSave}>
        Save Note
      </Button>
    </div>
  );
}
