import { noteRepository } from "../repositories/note.repository";
import type { SaveNoteRequest } from "../dto/saveNote.dto";
import type { Note } from "../types/note.types";
import type { UpdateNoteRequest } from "../dto/updateNote.dto";

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

  async updateNote(request: UpdateNoteRequest): Promise<void> {
    const note = await noteRepository.findById(request.id);

    if (!note) {
      return;
    }

    await noteRepository.update({
      ...note,
      content: request.content.trim(),
      updatedAt: Date.now(),
    });
  }
}

export const noteService = new NoteService();
