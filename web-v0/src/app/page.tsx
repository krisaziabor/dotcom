'use client'

import React, { useState } from 'react';
import "./globals.css"
import { EyeClosedIcon, EyeOpenIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import AlertDialogSet from './components/radix/alertdialog';
import localFont from 'next/font/local'

const editorialNew = localFont({
    src: [
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
})

const neueMontreal = localFont({
  src: [
      {
          path: './fonts/neue-montreal/woff2/PPNeueMontreal-Medium.woff2',
          weight: '500',
          style: 'normal',
      },
  ]
})

function getESTTime() {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const hours_Offset = offset / 60;
  const est_Offset = -4; // this does consider daylight-savings time – may need to be adjusted in future
  const est_hours = hours_Offset + est_Offset;
  const estTime = new Date(date.getTime() + est_hours * 60 * 60 * 1000);
  return estTime.toLocaleTimeString();
}

function Time() {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    setTime(getESTTime());
    const interval = setInterval(() => {
      setTime(getESTTime());
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
    open ? (
      <h1 className='h1-alt'>KAKA
      <br></br>
      COMING SOON
      <br></br>
      {Time()}
      </h1>
    )
    
    :
    
    (
      <h1>⠠⠠⠅⠁⠅⠁
      <br></br>
      COMING SOON
      <br></br>
      {Time()}
      </h1>
    )
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

function Contact() {
  return (
    <div>
      <h3>
        FOR RESUME, 
        <br></br>
        PORTFOLIO, 
        <br></br>
        & OTHER INQUIRIES
        <div className="icon icon-top-right">
          <AlertDialogSet />
        </div>
      </h3>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleTrigger = () => {
    setOpen(!open);
  };

  return (
    <main className={`${open ? 'on-color' : 'off-color'} ${editorialNew.className}`}>
      <div>
        <BL open={open}/>
        <EyeToggle open={open} handleTrigger={handleTrigger} />
        {open && <Contact />}
      </div>
    </main>
  );
}