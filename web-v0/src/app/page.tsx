'use client'

import React from 'react';
import "./globals.css"

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

  return <h1>{time} – NEW HAVEN </h1>;
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
  return (
    <main>
      <h1>⠠⠠⠅⠁⠅⠁
      <br></br>
      COMING SOON</h1>
    </main>
  );
}