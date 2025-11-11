import { useState } from "react";
import { Note } from "../models/Note";
import { generateId } from "../services/utils";

export const useNotesViewModel = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    if (!text.trim()) return;
    const newNote: Note = { id: generateId(), text, timestamp: Date.now() };
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return {
    notes,
    addNote,
    deleteNote,
  };
};
