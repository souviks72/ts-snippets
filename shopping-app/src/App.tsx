import React, {useState} from 'react';
import {v4} from "uuid";

import './App.css';
import ShoppingList from './components/Shopping';
import ShoppingListForm from './components/ShoppingListForm';
import Item from "./models/item";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const AddItem = (product: string, quantity: number) => {
    console.log("Made it to the app component");
    setItems([...items, {id: v4(), product: product, quantity: quantity}])
  }
  // const items = [
  //       {id: 1, product: "Lemons", quantity: 4},
  //       {id: 2, product: "Chicken", quantity: 2}
  //   ]
  return (
    <div>
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={AddItem}/>
    </div>
  );
}

export default App;
