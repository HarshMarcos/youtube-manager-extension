import { useState } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Textarea from "@/components/ui/Textarea";

import { Pencil, Trash2 } from "lucide-react";

import { playerService } from "@/features/current-video/services/player.service";
import { formatTime } from "@/utils/formatTime";

import type { UpdateNoteRequest } from "../dto/updateNote.dto";
import { useNotes } from "../hooks/useNotes";
import type { Note } from "../types/note.types";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const { deleteNote, updateNote } = useNotes();

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  async function handleSave() {
    const trimmed = content.trim();

    if (!trimmed) {
      return;
    }

    const request: UpdateNoteRequest = {
      id: note.id,
      content: trimmed,
    };

    await updateNote(request);

    setIsEditing(false);
  }

  function handleCancel() {
    setContent(note.content);
    setIsEditing(false);
  }

  return (
    <Card className="group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          {isEditing ? (
            <span className="text-xs font-medium text-[var(--primary)]">
              {formatTime(note.timestamp)}
            </span>
          ) : (
            <button
              onClick={() => playerService.seekTo(note.timestamp)}
              className="cursor-pointer text-xs font-medium text-[var(--primary)] transition hover:underline"
              aria-label="Jump to timestamp"
              title="Jump to timestamp"
            >
              {formatTime(note.timestamp)}
            </button>
          )}

          {isEditing ? (
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              autoFocus
            />
          ) : (
            <p className="break-words text-sm text-[var(--foreground)]">
              {note.content}
            </p>
          )}

          {isEditing && (
            <div className="mt-3 flex justify-end gap-2">
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>

              <Button onClick={handleSave}>Save</Button>
            </div>
          )}
        </div>

        {!isEditing && (
          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={() => setIsEditing(true)}
              className="cursor-pointer text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
              aria-label="Edit note"
              title="Edit note"
            >
              <Pencil size={18} />
            </button>

            <button
              onClick={() => deleteNote(note.id)}
              className="cursor-pointer text-[var(--muted-foreground)] transition hover:text-red-500"
              aria-label="Delete note"
              title="Delete note"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}
