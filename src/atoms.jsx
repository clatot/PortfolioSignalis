import { atom } from "jotai";

// Lightbox Active
const lightboxActive = atom(false);
export { lightboxActive };

// Lightbox Content
const focusItem = atom("texte");
export { focusItem };

// Category Navigation
const categorySelection = atom("HOME");
export { categorySelection };
