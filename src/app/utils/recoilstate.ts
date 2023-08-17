import { atom } from 'recoil';

interface CharacterDetails {
  name: string;
  role: string;
  house: string;
  wand: string;
  
}

// Define the initial state
const initialCharacterDetails: CharacterDetails = {
  name: '',
  role: '',
  house: '',
  wand: '',
  
};

// Create an atom for character details
export const characterDetailsState = atom<CharacterDetails>({
  key: 'characterDetailsState', // unique ID (with respect to other atoms/selectors)
  default: initialCharacterDetails, // default value 
});
