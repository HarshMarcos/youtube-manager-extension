import type { Note } from "@/features/notes/types/note.types";
import Dexie, { type Table } from "dexie";

export class KnowledgeManagerDB extends Dexie {
  notes!: Table<Note, string>;

  constructor() {
    super("KnowledgeManagerDB");

    this.version(1).stores({
      notes: "id, videoId, timestamp, createdAt",
    });
  }
}

export const db = new KnowledgeManagerDB();
