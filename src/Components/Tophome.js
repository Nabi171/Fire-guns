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
                <p className='text-white'>Here you get idea about fire guns,A gun is a ranged weapon designed to use a shooting tube (gun barrel) to launch projectiles.[1] The projectiles are typically solid, but can also be pressurized liquid (e.g. in water guns/cannons, spray guns for painting or pressure washing, projected water disruptors, and technically also flamethrowers), gas (e.g. light-gas gun) or even charged particles (e.g. plasma gun). Solid projectiles may be free-flying (as with bullets and artillery shells) or tethered (as with Taser guns, spearguns and harpoon guns). A large-caliber gun is also called a cannon.</p>
            </div>
        </div>
    );
};

export default Tophome;