// src/recoil/atoms.ts
import { atom } from 'recoil';

interface Character {
  name: string;
  dateOfBirth: string;
  role:string;
  house:string;
  wand:string;
  
}

export const charactersState = atom<Character[]>({
  key: 'charactersState',
  default: [], // Initial empty array
});

