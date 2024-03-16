'use client'

import React from 'react';

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

  return <h1 style={{ fontSize: '4em'}}>{time}</h1>;
}

export default function Home() {
  return (
    <main className= "font-Neue-Haas text-gray-600" style={{ backgroundColor: '#000000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', textAlign: 'left', padding: '1em' }}>
      <h1 style={{ fontSize: '4em' }}>KAKA</h1>
      <h1 style={{ fontSize: '4em' }}>⠠⠠⠅⠁⠅⠁</h1>
      <h1 style={{ fontSize: '4em' }}>COMING SOON</h1>
      <Time />
    </main>
  );
}