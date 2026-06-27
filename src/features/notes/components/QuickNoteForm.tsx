import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { useNotes } from "../hooks/useNotes";

interface QuickNoteFormProps {
  videoId: string;
  timestamp: number;
}

export default function QuickNoteForm({
  videoId,
  timestamp,
}: QuickNoteFormProps) {
  const [content, setContent] = useState("");

  const { saveNote } = useNotes();

  async function handleSubmit() {
    if (!content.trim()) {
      return;
    }

    await saveNote({
      videoId,
      content,
      timestamp,
    });

    setContent("");
  }

  return (
    <div className="space-y-3">
      <Input
        placeholder="Write a quick note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button className="w-full" onClick={handleSubmit}>
        Save Note
      </Button>
    </div>
  );
}
