import React, { useRef } from "react";

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
    const quantRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        const newProduct = inputRef.current!.value;
        const quantity = parseInt(quantRef.current!.value);
        onAddItem(newProduct, quantity);
        inputRef.current!.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={inputRef}/>
            <input type="number" placeholder="Quantity" ref={quantRef}/>
            <button>Add Item</button>
        </form>
    );
}

export default ShoppingListForm;