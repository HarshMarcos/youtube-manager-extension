import { create } from "zustand";

import { noteService } from "@/features/notes/services/note.service";
import type { SaveNoteRequest } from "@/features/notes/dto/saveNote.dto";
import type { Note } from "@/features/notes/types/note.types";

interface NotesStore {
  notes: Note[];

  loading: boolean;

  loadNotes: (videoId: string) => Promise<void>;

  saveNote: (request: SaveNoteRequest) => Promise<void>;

  deleteNote: (id: string) => Promise<void>;
}

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [],

  loading: false,

  loadNotes: async (videoId) => {
    set({ loading: true });

    const notes = await noteService.getNotes(videoId);

    set({
      notes,
      loading: false,
    });
  },

  saveNote: async (request) => {
    const note = await noteService.saveNote(request);

    set((state) => ({
      notes: [...state.notes, note].sort((a, b) => a.timestamp - b.timestamp),
    }));
  },

  deleteNote: async (id) => {
    await noteService.deleteNote(id);

    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }));
  },
}));
