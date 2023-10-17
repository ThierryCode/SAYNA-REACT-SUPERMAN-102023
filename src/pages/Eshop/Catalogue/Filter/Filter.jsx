import React from 'react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

export function Filter({ShowCateg, setShowCateg}) {
    const [showCategCheck, setShowCategCheck] = useState(true);
 return (
  <div className='Filter'>
  <h2>Filtres</h2>

    <div className="dropDownTitle" onClick={()=>{
            setShowCategCheck(!showCategCheck);
            }}>        
        <p> Categories </p>
        {/* <MdKeyboardArrowRight/> */}
    </div>
    <div className="hrFilter"></div>
    {showCategCheck && <Checkbox ShowCateg={ShowCateg} setShowCateg={setShowCateg}/>}
  </div>
 );
}