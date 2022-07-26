import React, { useState, useEffect } from 'react';
import ShowGuns from './ShowGuns';

const Guns = () => {
    const [guns, setGuns] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddTocart = (gun) => {
        const newcart = [...cart, gun];
        setCart(newcart);
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json').then(res => res.json()).then(data => setGuns(data));
    }, []
    )

    return (
        <div>
            <h3 className='text-center fw-bold text-danger'>The Total guns are {guns.length} </h3>

            <hr className='text-white' />
            <div>
                {
                    cart.map(item => <p className='text-white fw-bold'>{item.name}</p>)
                }
            </div>
            <div className='row'>
                {guns.map(gun => <ShowGuns
                    gun={gun.id} gun={gun} handleAddTocart={handleAddTocart}
                ></ShowGuns>
                )
                }
            </div>
        </div>
    );
};

export default Guns;