import React, {useState, useEffect} from "react";

const getTimeString= () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const getLATimeString= () => {
    const ladate = new Date(Date.now()).toLocaleDateString('en-US',{timeZone:'America/Los_Angeles'});
    return ladate;
}


const ClockApp = () => {
    const [time, setTime] = useState(getTimeString);
    const [latime, setLATime] = useState(getLATimeString);
    return(
        <div>
            <h1 className='section-title'>React Clock</h1>
            <div>Indianapolis Time: {time}</div>
            <div>LA Time: {latime}</div>
        </div>
    );
}

export default ClockApp;