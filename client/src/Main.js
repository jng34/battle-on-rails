import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cube from './cubeblock.png';


function Main() {
    const [counter, setCounter] = useState(0)
    const history = useHistory();

    useEffect(() => {
        setInterval(() => {
        setCounter((count) => count + 1);
        }, 1000);
    }, []);

    function handleErrorClick() {
        setCounter(counter+100)
    }


    return (
        <div >
            <div className='container'>
                <div className='row ps-5 pe-4'>
                        <h2 className="text-start text-wrap">Once upon a time on Rails...<br/><br/>A <text className='fw-bolder text-success'>mad programmer</text> created a bunch of monsters and dropped a <b>HUGE</b> code block on your head and triggered an error counter.</h2> 
                </div>
                <br/>
                <div className='row align-items-center'>
                    <div className='col ms-5'>
                        <img src="https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg" className="rounded border border-danger border-3" alt="cube" style={{width: "25rem", margin: "auto"}} data-bs-toggle="tooltip" data-bs-placement="right" title="Click the Error button!"/>
                    </div>
                    <div className='col me-5'>
                        <button type='button' className="btn btn-danger btn-lg" onClick={handleErrorClick}>
                        Errors <span className="text-bg-secondary">{counter}</span>
                        </button><br/>
                        <img src={cube} alt="cube" style={{width: "18rem", margin: "auto"}} /> 
                    </div>
                </div>
                <br />
                <div className='row'>
                    <button type="button" className="btn btn-warning btn-lg fw-bold" onClick={() => history.push("/signup")}>
                        Fight back now!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;