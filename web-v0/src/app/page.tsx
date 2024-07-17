'use client'

import React, { useState } from 'react';
import "./globals.css"
import { EyeClosedIcon, EyeOpenIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import Bio from './components/radix/collapsible'
import localFont from 'next/font/local'

const editorialNew = localFont({
    src: [
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-Regular.woff2',
            weight: '500',
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

const pangramSans = localFont({
  src: [
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-CompactBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-CompactBoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-Medium.woff2',
      weight: '500',
      style: 'normal',      
    }
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

  return `${time} – EST`;
}

function BL({ open, handleTrigger }: { open: boolean, handleTrigger: () => void }) {
  return (
    <div>
      {open ? (
        <h1 className='h1-alt'>
          COMING SOON
          <br></br>
        </h1>
      ) : (
        <h1>
          COMING SOON
          <br></br>
        </h1>
      )}
      <div className={open? 'icon icon-bottom-right-alt' : `icon icon-bottom-right`}>
        <button onClick={handleTrigger}>
          {open ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </button>
      </div>
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
        <div className={`${pangramSans.className}`}>
          <BL open={open} handleTrigger={handleTrigger}/>
        </div>
        {open && <Bio />}
      </div>
    </main>
  );
}