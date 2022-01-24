import React, { useState } from "react";
import ToDOLists from "./ToDOLists";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");

  };

  const deleteItems = (id) => {
    console.log('deleted');

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) =>{
        return index !== id;
      })
    })

}


  return(
    <>
    <div className="main_div" >
      <div className="center_div">
        <br />
        <h1> My Daily Activity </h1>
        <br />
        <input type="text" placeholder="Add a Activity"
        value={inputList}
        onChange={itemEvent} />
        <button onClick={listofItems}> + </button>
        

        <ol>
          {/* <li> {inputList} </li> */}

         {Items.map( (itemval, index) => {
           return <ToDOLists key={index} id={index} text={itemval} onSelect={deleteItems} />;
          })}


        </ol>

      </div>
    </div>
    </>

  );



  
};
export default App;
