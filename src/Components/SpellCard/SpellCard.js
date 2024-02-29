import React, {useState} from "react";
import LearnPrepare from "../Buttons/LearnPrepare";
// TODO:
// Lift up state so Learn & Prepare states can be retained, referenced in other components. 
// Only render Prepare if Spell is Known
// Fix layout to accommodate flipcard style, or else create a second component for detail spell view and have it open separately
// When user settings for level/spell save dc/spell attack are implemented, pass that information into SpellCard to display

export default function SpellCard({spell}) {
  const [flipped, setFlipped] = useState(false);
  const {name, level, school, casting_time, range, components, duration, ritual, concentration, dc, damage, desc} = spell;
  if (!spell) return <div>Loading...</div>;

  return (
    <li className="spell-card block max-w-sm p-6 bg-purple border-2 border-brown text-light-purple rounded hover:bg-grey-purple">
      <div onClick={() => setFlipped(!flipped)} className="flip-div">
        <hgroup>
          <h4>{name}</h4>
          <small className="text-medium-purple">
            {level > 0 && `Level ${level} `}
            {school.name}
            {level === 0 && " cantrip"}
          </small>
        </hgroup>
        {!flipped && (
        <>
            <p>
              Casting Time: {casting_time}
            </p>
            <p>
              Range: {range}
            </p>
            <p>
              Components: {components.join(", ")}
            </p>
            <p>
              Duration: {duration}
            </p>
            <p className="text-medium-purple">
              {ritual && "R"}
              {concentration && "C"}
            </p>
            <p>
              {dc && `Save: ${dc.dc_type.name}`}
            </p>
            <p>
              {damage && `Damage: ${damage?.damage_type?.name}`}
            </p>
          </>
        )}
        {flipped && (
          <>
            <div className="description h-32 overflow-auto p-2">
              <p>{desc[0]}</p>
            </div>
          </>
          )}
      </div>
      <div className="flex justify-between">
        <LearnPrepare spellName={name}/>
      </div>
    </li>
  );
}