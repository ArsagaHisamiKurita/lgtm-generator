"use client";

import { useRef, useEffect } from 'react';

type CardProps = {
    image: string;
};

export const Card = ({image} : CardProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const buffer = {
        x: 12,
        y: 10,
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        const img = new Image();
        img.src = image;
        img.onload = () => {
            // キャンバスを初期化
            context.clearRect(0, 0, canvas.width, canvas.height);

            // 画像を描画
            context.drawImage(img, 0, 0, canvas.width, canvas.height);

            // 黒い背景を描画
            context.fillStyle = 'rgba(0, 0, 0, 0.5)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // テキストを描画
            context.font = 'bold 32px Arial';
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.letterSpacing = "10px";
            context.fillText(`LGTM✌️`, canvas.width / 2 + buffer.x, canvas.height / 2 + buffer.y);
        };
    }, [image]);

    return (
        <canvas ref={canvasRef} className='w-full h-full' />
    )
};