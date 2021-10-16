import { atom } from "jotai";

// Create your atoms and derivatives
export const textAtom = atom("hello");
export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());
