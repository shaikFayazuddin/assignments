// import React, { useState, useMemo } from 'react';
// // You have been given a list of items you shopped from the grocery store
// // You need to calculate the total amount of money you spent

// export const Assignment3 = () => {
//     const [items, setItems] = useState([
//         { name: 'Chocolates', value: 10 },
//         { name: 'Chips', value: 20 },
//         { name: 'Onion', value: 30 },
//         { name: 'Tomato', value: 30 },
//         // Add more items as needed
//     ]);
//     const [newItem, setNewItem] = useState()
//     const [price,setPrice] = useState()

//     // Your code starts here
//     // const totalValue = 0;
//     let totalValue = useMemo(()=>{
//         let sum = 0
//         for(let i =0;i<items.length;i++){
//             sum = sum+items[i].value
//         }
//         return sum
//     },[items])

//     const handleChange = (change)=>{

//     }

//     const handleSubmit = (event) =>{
//         event.preventDefault()
//     }    // Your code ends here
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" 
//                     placeholder="Enter new Item" 
//                     value={newItem} 
//                     onChange={handleChange}/>
                
//                 <input type="number" 
//                     placeholder='Price'
//                     value={price}
//                     onChange={handleChange} />

//                 <button type='submit' >Add New Item</button>
//             </form>
            

//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item.name} - Price: ${item.value}</li>
//                 ))}
//             </ul>
//             <p>Total Value: {totalValue}</p>
//         </div>
//     );
// };

import React, { useState, useMemo } from 'react';

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    const [newItem, setNewItem] = useState('');
    const [price, setPrice] = useState('');

    const totalValue = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].value;
        }
        return sum;
    }, [items]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'newItem') {
            setNewItem(value);
        } else if (name === 'price') {
            setPrice(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem && price) {
            setItems([...items, { name: newItem, value: parseFloat(price) }]);
            setNewItem('');
            setPrice('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter new Item"
                    name="newItem"
                    value={newItem}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={price}
                    onChange={handleChange}
                />
                <button type="submit">Add New Item</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Price: ${item.value}
                    </li>
                ))}
            </ul>
            <p>Total Value: ${totalValue}</p>
        </div>
    );
};


