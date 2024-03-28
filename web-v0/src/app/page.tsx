'use client'

import React, { useState } from 'react';
import "./globals.css"
import { EyeClosedIcon, EyeOpenIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';

function Time() {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (time === '') {
    return null;
  }

  return `${time} – NEW HAVEN`;
}

function BL({ open }: { open: boolean}) {
  return (
     <h1 className={open ? 'h1-alt' : ''}>⠠⠠⠅⠁⠅⠁
    <br></br>
    COMING SOON
    <br></br>
    {Time()}
    </h1>
  );
}

function EyeToggle({ open, handleTrigger }: { open: boolean, handleTrigger: () => void }) {
  return (
    <div className={open? 'icon icon-bottom-right-alt' : `icon icon-bottom-right`}>
      <button onClick={handleTrigger}>
        {open ? <EyeOpenIcon onClick={handleTrigger} /> : <EyeClosedIcon onClick={handleTrigger} />}
      </button>
    </div>
  );
}


function Bio() {
  return <h2>
  Kris <em>Atteh</em> <em>Kojo</em> Aziabor is a software engineer, designer, and photographer.
  <br></br>
  Passionate to explore the intentional creation and concessions of institutional memory, Aziabor is also devoted to playing with minimalistic aesthetics alongside thought-provoking words and visuals.
  <br></br >He currently attends Yale University and is an incoming Full-Stack Software Engineering Intern at Fidelity Investments. 
  <br></br>While this website is under renovation, you can access his Linkedin, CV, and Github.
  </h2>
}

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleTrigger = () => {
    setOpen(!open);
  };

  return (
    <main className={`${open ? 'on-color' : 'off-color'}`}>
      <div>
        <BL open={open}/>
        <EyeToggle open={open} handleTrigger={handleTrigger} />
      </div>
    </main>
  );
}