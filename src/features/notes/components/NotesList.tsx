import { useEffect } from "react";
import Card from "@/components/ui/Card";
import { useNotes } from "../hooks/useNotes";
import NoteCard from "./NoteCard";

interface NotesListProps {
  videoId: string;
}

export default function NotesList({ videoId }: NotesListProps) {
  const { notes, loading, loadNotes, deleteNote } = useNotes();

  useEffect(() => {
    if (videoId) {
      loadNotes(videoId);
    }
  }, [videoId, loadNotes]);

  if (loading) {
    return (
      <Card>
        <p className="text-center text-sm text-[var(--muted-foreground)]">
          Loading notes...
        </p>
      </Card>
    );
  }

  if (notes.length === 0) {
    return (
      <Card>
        <p className="text-center text-sm text-[var(--muted-foreground)]">
          No notes yet.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      <div className="space-y-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
