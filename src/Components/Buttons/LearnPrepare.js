import { useDispatch, useSelector } from 'react-redux';
import { toggleKnown, togglePrepared } from '../../spellSlice';

function LearnPrepare({spellName}) {
  const dispatch = useDispatch();
  const known = useSelector(state => state.spell.known);
  const prepared = useSelector(state => state.spell.prepared);
  const isKnown = known.includes(spellName);
  const isPrepared = prepared.includes(spellName);

  return (
    <div className="flex justify-between"> 
      <button onClick={() => dispatch(toggleKnown(spellName))} 
      className={`mr-4 prepare-button hover:bg-dark-purple hover:text-green ${isKnown ? 'text-medium-purple' : 'text-brown'}`}>
        {isKnown ? "Known" : "Learn"}
      </button>

      { isKnown &&  <button onClick={() => dispatch(togglePrepared(spellName))}
      className={`prepare-button hover:bg-dark-purple hover:text-green ${isPrepared ? 'text-medium-purple' : 'text-brown'}`}>
        {isPrepared ? "Prepared" : "Prepare"}
      </button>}
    </div> 
  );
}

export default LearnPrepare;

// if spell is known, reveal prepare button, else hide it