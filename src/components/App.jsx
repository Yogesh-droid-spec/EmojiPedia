import React from "react";
import Items from "../emojipedia"
import Item from "./Item";

function createItem(item) {
   return (<Item 
    key={item.id}
     emoji={item.emoji}
     name={item.name}
     meaning ={item.meaning}
   />);
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        
        {Items.map(createItem)}
       
      </dl>
    </div>
  );
}

export default App;
