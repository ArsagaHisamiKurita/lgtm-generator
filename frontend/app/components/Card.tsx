"use client";

import { useRef, useEffect } from 'react';

type CardProps = {
    image: string;
};

export const Card = ({image} : CardProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        const img = new Image();
        img.src = image;
        img.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            context.font = 'bold 42px Arial';
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.letterSpacing = "10px";
            context.fillText(`LGTM`, canvas.width / 2, canvas.height / 2);
        };
    }, [image]);

    return (
        <canvas ref={canvasRef} width={500} height={500} />
    )
};