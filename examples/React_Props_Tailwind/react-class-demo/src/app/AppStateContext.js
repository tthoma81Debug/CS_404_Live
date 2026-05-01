"use client";

import { createContext, useContext, useReducer } from "react";

const AppStateContext = createContext(null);
const AppDispatchContext = createContext(null);

const initialState = {
  notes: [],
  loadingNotes: false,
  notesError: null,
};

function appReducer(state, action) {
  switch (action.type) {
    case "notes/load-start":
      return { ...state, loadingNotes: true, notesError: null };

    case "notes/load-success":
      return { ...state, loadingNotes: false, notes: action.notes };

    case "notes/load-error":
      return { ...state, loadingNotes: false, notesError: action.error };

    case "notes/add":
      return { ...state, notes: [action.note, ...state.notes] };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

// Convenience hooks
export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) {
    throw new Error("useAppState must be used within AppProvider");
  }
  return ctx;
}

export function useAppDispatch() {
  const ctx = useContext(AppDispatchContext);
  if (!ctx) {
    throw new Error("useAppDispatch must be used within AppProvider");
  }
  return ctx;
}