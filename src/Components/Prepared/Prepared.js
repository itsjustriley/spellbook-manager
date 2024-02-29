import React from "react";
import SpellCard from "../SpellCard/SpellCard";
import useSpells from "../../Hooks/UseSpells";
import { useSelector } from 'react-redux';

const Prepared = () => {
  const spellList = useSpells();
  const preparedSpells = useSelector(state => state.spell.prepared);
  const preparedSpellList = spellList.filter(spell => preparedSpells.includes(spell.name));
  const knownSpells = useSelector(state => state.spell.known);
  
  return (
    <div>
      <h2 className="text-xl text-purple font-bold mb-4">Prepared Spells</h2>
      {preparedSpellList.length === 0 && <p className="text-grey-purple italic">No Spells Prepared</p>}
      {knownSpells.length === 0 ? 
        <button className="bg-purple hover:bg-light-purple text-white font-bold py-2 px-4 rounded mb-4" onClick={() => window.location.hash = "search"}>Learn Spells</button> :
        <button className="bg-purple hover:bg-light-purple text-white font-bold py-1 px-4 rounded mb-4" onClick={() => window.location.hash = "known"}>View Known Spells</button>
        }
      <ul>
        {preparedSpellList.map(spell => (
          <li key={spell.id}><SpellCard spell={spell} /></li>
        ))}
      </ul>
    </div>
  );
}

export default Prepared;