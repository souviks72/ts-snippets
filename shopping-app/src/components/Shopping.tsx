import React from "react";
import Item from "../models/item";

interface ShoppingListProps {
    items: Item[]
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
    let items = props.items;
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.product} - {item.quantity}</li>
                    ))
                }
            </ul>
        </div>
    );
}