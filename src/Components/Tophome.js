import React from 'react';
import img from '../Components/images/gun.png'
const Tophome = () => {
    return (
        <div className='row align-items-center'>
            <div className='col-lg-6'>
                <img className='img-fluid img-container-home' src={img} alt="" />
            </div>
            <div className='col-lg-6 '>
                <h1 className='text-danger'>Wellcome to E-fire Gun</h1>
                <p className='text-white'>Here you get idea about fire guns,A gun is a ranged weapon designed to use a shooting tube (gun barrel) to launch projectiles.[1] The projectiles are typically solid, but can also be pressurized liquid (e.g. in water guns/cannons, spray guns for painting or pressure washing, projected water disruptors, and technically also flamethrowers), gas (e.g. light-gas gun) or even charged particles (e.g. plasma gun).</p>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dolore molestiae laborum nesciunt reiciendis. Itaque mollitia totam ex perferendis dolores doloremque ullam! Nam amet quisquam ipsa ex, dignissimos cumque!</p>
            </div>
        </div>
    );
};

export default Tophome;