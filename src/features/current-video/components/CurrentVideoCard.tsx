import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import QuickNoteForm from "@/features/notes/components/QuickNoteForm";
import NotesList from "@/features/notes/components/NotesList";

import { useCurrentVideo } from "../hooks/useCurrentVideo";

export default function CurrentVideoCard() {
  const { video, loading, error } = useCurrentVideo();

  if (loading) {
    return (
      <Card>
        <p className="text-center py-6">Loading video...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <p className="text-center py-6 text-red-500">{error}</p>
      </Card>
    );
  }

  if (!video) {
    return (
      <Card>
        <div className="py-6 text-center">
          <h2 className="font-semibold">No YouTube Video Detected</h2>

          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Open a YouTube video to start taking notes.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
          Current Video
        </p>

        <h2 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
          {video.title}
        </h2>

        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          {video.channelName}
        </p>
      </div>

      <QuickNoteForm videoId={video.id} />

      <NotesList videoId={video.id} />
    </Card>
  );
}
