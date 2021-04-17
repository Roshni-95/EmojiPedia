import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(image){
    return(
      <Entry
       key={image.id}
       img={image.emoji}
       name={image.name}
       meaning={image.meaning}
       />
    );
}

function App(){
    return (
      <div>
        <h1>
         <span>emojipedia</span>
        </h1>
        <dl className="dictionary">
        {/* <Entry 
            img={emojipedia[0].emoji}
            name={emojipedia[0].name}
            meaning={emojipedia[0].meaning}
        /> */}
        {emojipedia.map(createEntry)}
        </dl>
      </div>   

    );
}

export default App;