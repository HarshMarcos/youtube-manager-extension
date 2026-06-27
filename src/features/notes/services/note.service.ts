import { noteRepository } from "../repositories/note.repository";
import type { SaveNoteRequest } from "../dto/saveNote.dto";
import type { Note } from "../types/note.types";

export class NoteService {
  async saveNote(request: SaveNoteRequest): Promise<Note> {
    const now = Date.now();

    const note: Note = {
      id: crypto.randomUUID(),
      videoId: request.videoId,
      content: request.content.trim(),
      timestamp: request.timestamp,
      createdAt: now,
      updatedAt: now,
    };

    await noteRepository.save(note);

    return note;
  }

  async getNotes(videoId: string): Promise<Note[]> {
    return noteRepository.findByVideoId(videoId);
  }

  async deleteNote(id: string): Promise<void> {
    await noteRepository.delete(id);
  }
}

export const noteService = new NoteService();
