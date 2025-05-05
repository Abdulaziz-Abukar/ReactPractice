import React, {useState} from 'react';

export function MiniShoppingCart() {
    
    const mockItems = [
        "Wireless Mouse",
        "Bluetooth Headphones",
        "Mechanical Keyboard",
        "Gaming Monitor",
        "USB-C Charger",
        "Laptop Stand",
        "Webcam",
        "HDMI Cable",
        "Portable SSD",
        "Smartphone Tripod"
      ];

    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState('');

    const addItems = (item) => {
        setCart(prev => [...prev, item]);
    }

    const removeItem = (targetIndex) => {
        
        setCart(cart.filter((item, index) => {
            return index !== targetIndex;
        }));
    }

    const filteredItems = mockItems.filter(item => item.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <h1>Mini Shopping Cart!</h1>
            <input type="text" name="itemSearch" id="itemSearch" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search...'/>
            {filteredItems.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item} <span><button onClick={() => addItems(item)}>Add</button></span></p>
                        
                    </div>
                )
            })}
            {cart.length === 0 && <p>🛒 Your cart is empty</p>}
            <ul>
                {cart.map((cartItem, index) => (
                    <li key={index}>
                        {cartItem}
                        <span>
                            <button onClick={() => removeItem(index)}>Remove</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}