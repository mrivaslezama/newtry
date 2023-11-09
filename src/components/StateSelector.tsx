import {FC} from 'react';

const possibleStates = ['Web development', 'Desing thinking', 'UX/UI-research', 'Project development & management'];

interface Props {
    selectedState: string;
    onStateChange: ( state:string ) => void;
}

export const StateSelector:FC <Props> = ({selectedState, onStateChange }) => {
  return (
    <div style={{display: 'flex'}}>{
     possibleStates.map( state =>(
     <button 
     key={state}
     className={selectedState === state ? 'active': ""}
     onClick = { () => onStateChange(state)}
     >
        {state}
     </button>
     ))   
    }</div>
  )
}
