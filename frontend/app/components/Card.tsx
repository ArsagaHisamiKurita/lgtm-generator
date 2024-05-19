"use client";

import { useRef, useEffect } from 'react';
import { getCoverImageSize } from '../utils/cover';
import { THUMBNAIL_SIZE } from '../utils/constants';

type CardProps = {
    image: string;
};

export const Card = ({image} : CardProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const icons = ['😇', '🐶', '😺', '👍', '🫶', '😀', '🐭', '👶', '🙌', '🤟'];

    const buffer = {
        x: 12,
        y: 24,
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        const img = new Image();
        img.src = image;

        const rand = Math.floor( Math.random() * 11 );

        img.onload = () => {
            // Retina対応
            canvas.width = THUMBNAIL_SIZE.width * 2;
            canvas.height = THUMBNAIL_SIZE.height * 2;

            // キャンバスを初期化
            context.clearRect(0, 0, canvas.width, canvas.height);

            // 画像を描画
            const { width, height, offsetX, offsetY } = getCoverImageSize(img);
            context.drawImage(img, offsetX * 2, offsetY * 2, width * 2, height * 2);
            // 黒い背景を描画
            context.fillStyle = 'rgba(0, 0, 0, 0.5)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // テキストを描画
            context.font = `bold ${32 * 2}px Arial`;
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.letterSpacing = "10px";
            context.fillText(`LGTM${icons[rand]}`, canvas.width / 2 + buffer.x, canvas.height / 2 + buffer.y);

            context.scale(0.5, 0.5);
        };
    }, [image]);

    return (
        <canvas ref={canvasRef} style={{width: THUMBNAIL_SIZE.width, height: THUMBNAIL_SIZE.height}} />
    )
};