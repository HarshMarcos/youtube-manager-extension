import { db } from "@/lib/db";
import type { Note } from "../types/note.types";

export class NoteRepository {
  async save(note: Note): Promise<void> {
    await db.notes.put(note);
  }

  async findByVideoId(videoId: string): Promise<Note[]> {
    return db.notes.where("videoId").equals(videoId).sortBy("timestamp");
  }

  async delete(id: string): Promise<void> {
    await db.notes.delete(id);
  }

  async update(note: Note): Promise<void> {
    await db.notes.put(note);
  }
}

export const noteRepository = new NoteRepository();
