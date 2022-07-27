import React, { useState, useEffect } from 'react';
import ShowGuns from './ShowGuns';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const Guns = () => {
    const [guns, setGuns] = useState([]);
    const [cart, setCart] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleAddTocart = (gun) => {
        const newcart = [...cart, gun];
        setCart(newcart);
        alert('cart added')
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json').then(res => res.json()).then(data => setGuns(data));
    }, []
    )

    return (
        <div>
            <h3 className='text-center fw-bold text-danger'>The Total guns are {guns.length} </h3>

            <hr className='text-white' />
            <div className='text-center'>
                <button className='btn btn-danger' onClick={openModal}>Open Modal</button>
            </div>

            <div className='row'>
                {guns.map(gun => <ShowGuns
                    gun={gun.id} gun={gun} handleAddTocart={handleAddTocart}
                ></ShowGuns>
                )
                }
            </div>
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <button className='btn btn-danger' onClick={closeModal}>Close</button> <br /><br />
                <h5 className='text-danger text-center fw-bold'>Gun</h5> <hr />
                <div>
                    {
                        cart.map(item => <p className='text-dark fw-bold'>{item.name}</p>)
                    }
                </div>
            </Modal>
        </div>
    );
};

export default Guns;