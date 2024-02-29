import React, {useState} from "react";
import SpellCard from "../SpellCard/SpellCard";
import useSpells from "../../Hooks/UseSpells";

function Search() {
  const spellList = useSpells();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [includeLevels, setIncludeLevels] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [wizardsOnly, setWizardsOnly] = useState(true);
  const spellLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const filteredSpells = spellList.filter(spell => spell.name.toLowerCase().includes(search.toLowerCase()) && includeLevels.includes(spell.level) && (!wizardsOnly || spell.classes.some(c => c.name === "Wizard")));
  const sortedSpells = filteredSpells.sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "level") return a.level - b.level;
  });

  return (
    <div className="SpellSearch">
      <h2>Spell Search</h2>
      <div className="flex 	justify-evenly mt-4 mb-4">
        <div className="Search flex">
          <label className="mr-4" htmlFor="search">Search: </label>
          <input type="text" value={search} placeholder="acid arrow" onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div className="Sort">
          <label className="mr-4" htmlFor="sort">Sort by: </label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="name">Name</option>
            <option value="level">Level</option>
          </select>
        </div>
        <div className = "Filters flex">
          <p className="mr-4">Level:</p>
          {spellLevels.map((level, i) => (
              <label key={i} htmlFor={`level-${level}`}>
                <input type="checkbox" id={`level-${level}`} checked={includeLevels.includes(level)} onChange={(e) => {
                  if (e.target.checked) {
                    setIncludeLevels([...includeLevels, level]);
                  } else {
                    setIncludeLevels(includeLevels.filter(lvl => lvl !== level));
                  }
                }} />
                {level}
              </label>
            ))}
          </div>
          <div>
            <label htmlFor="wizards">Wizard Spells Only:
              <input className="ml-4" type="checkbox" id="wizards" 
              checked={wizardsOnly}
              onChange={(e) => setWizardsOnly(e.target.checked)
              }/>
            </label>
          </div>
        </div>
      <div className="SpellCards">
        {sortedSpells.length === 0 && <span className="loading">No Spells Found</span>}
        <ul className="spell-list grid grid-cols-2 md:grid-cols-4 gap-4">
          {sortedSpells.map((spell, i) => (
            <SpellCard key={i} spell={spell} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;