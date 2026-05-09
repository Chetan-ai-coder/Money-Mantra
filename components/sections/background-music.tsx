"use client"

import { useEffect, useRef } from "react"

export function BackgroundMusic(){
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(()=> {
        const startMusic = () => {
            if(audioRef.current){
                audioRef.current.volume = 0.15;

                audioRef.current.play().catch(() => {});
            }

            window.removeEventListener("click", startMusic);
        };

        window.addEventListener("click", startMusic);

        return () => {
            window.removeEventListener("click", startMusic)
        }
    }, []);

    return (
        <audio ref={audioRef} loop>
            <source src="music/Lose My Mind.wav" type="audio/mpeg" />
        </audio>
    )
}