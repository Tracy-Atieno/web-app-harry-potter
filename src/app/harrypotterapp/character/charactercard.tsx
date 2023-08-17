
import React from 'react';
import Link from 'next/link';

interface Character {
  name: string;
  dateOfBirth: string;
}

interface CharacterCardProps {
  character: Character;
}
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Link href={`/characters/${encodeURIComponent(character.name)}`}>

      <button>
      <div className="grid gap-4 grid-cols-3 grid-rows-3"></div>
      <div
         className="bg-yellow-300 rounded shadow p-4"></div>

      
      
      
        <div>
          <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
          <p className="text-sm text-grey-500">Date of Birth: {character.dateOfBirth}</p>
        </div>

      </button>
    </Link>
  );
};

export default CharacterCard;

