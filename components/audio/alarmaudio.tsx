"use client";

import useSound from 'use-sound';

export function AlarmAudio(){
  const [play] = useSound('https://kaizentimer-assets.s3.amazonaws.com/alarm.mp3');

  return (<button onClick={() => play()}>Boop!</button>)
    
}