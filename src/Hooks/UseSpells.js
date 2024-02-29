import { useEffect, useState } from "react";
import { getAllSpells} from "../Data/api.js";

function useSpells() {
  const [spellList, setSpellList] = useState([]);

  useEffect(() => {
    const savedSpells = localStorage.getItem("spells");
    if (savedSpells) setSpellList(JSON.parse(savedSpells));
    getAllSpells().then((spells) => {
      setSpellList(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
    });
  }, []);

  return spellList; 
}

export default useSpells;