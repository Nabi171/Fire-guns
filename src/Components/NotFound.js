import React from 'react';
import { useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate();
    return (

        <div className='mx-auto justify-content-center align-items-center card shadow-lg p-5 mt-5'>
            <h1 className='text-danger'>This page is err</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et excepturi, sed cum voluptas illum saepe eveniet iure laudantium sunt ad at modi magnam consectetur nostrum! Ducimus deserunt quas nam.</p>
            {/* <Button className='btn btn-danger' onClick={navigate("/home")}>Home</Button> */}
            <button className='btn btn-danger' onClick={() => navigate("/home")}>Home</button>
        </div>
    );
};

export default NotFound;