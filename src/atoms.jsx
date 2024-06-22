import { atom } from "jotai";

// Lightbox Active
const lightboxActive = atom(false);
export { lightboxActive };

// Lightbox Content
const focusItem = atom("texte");
export { focusItem };
