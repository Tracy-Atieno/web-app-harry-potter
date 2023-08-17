// recoil/characterState.ts
import { atom } from 'recoil';

interface CharacterDetails {
  name: string;
  role: string;
  house: string;
  wand: string;
  
}

export const characterDetailsState = atom<CharacterDetails | null>({
  key: 'characterDetailsState',
  default: null,
});
