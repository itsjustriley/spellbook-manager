import React from "react";
import SpellCard from "../SpellCard/SpellCard";
import useSpells from "../../Hooks/UseSpells";
import { useSelector } from 'react-redux';

const Known = () => {
  const spellList = useSpells();
  const knownSpells = useSelector(state => state.spell.known);
  const knownSpellList = spellList.filter(spell => knownSpells.includes(spell.name));

  return (
    <div>
      <h2 className="text-xl text-purple font-bold mb-4">Spells Known</h2>
      {knownSpellList.length === 0 && <p className="text-grey-purple italic">No Spells Known</p>}
      {knownSpells.length === 0 &&
        <button className="bg-purple hover:bg-light-purple text-white font-bold py-2 px-4 rounded mb-4" onClick={() => window.location.href = "/search"}>Learn Spells</button>}
      <ul>
        {knownSpellList.map(spell => (
          <li key={spell.id}><SpellCard spell={spell} /></li>
        ))}
      </ul>
    </div>
  );
}

export default Known;