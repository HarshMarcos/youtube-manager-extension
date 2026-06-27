import { useEffect } from "react";

import Card from "@/components/ui/Card";
import { useNotes } from "../hooks/useNotes";

interface NotesListProps {
  videoId: string;
}

export default function NotesList({ videoId }: NotesListProps) {
  const { notes, loadNotes } = useNotes();

  useEffect(() => {
    loadNotes(videoId);
  }, [videoId, loadNotes]);

  if (notes.length === 0) {
    return (
      <Card>
        <p className="text-sm text-[var(--muted-foreground)]">No notes yet.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <Card key={note.id}>
          <p className="text-xs text-[var(--primary)]">{note.timestamp}s</p>

          <p className="mt-2 text-sm">{note.content}</p>
        </Card>
      ))}
    </div>
  );
}
