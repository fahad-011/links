import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

const Apps=() => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return <Particles options={particlesOptions} init={particlesInit}/>
}

export default Apps;



// import React, { useCallback } from 'react';
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import './App.css';
// import particlesOptions from "./particles.json";

// function Apps() {
//     const particlesInit = useCallback(main => {
//         loadFull(main);
//     }, [])

//     return <Particles options={particlesOptions} init={particlesInit}/>
// }

// export default Apps;