"use client";

import { useState, ChangeEventHandler } from 'react';
import { Card } from './Card';

export const InputFile = () => {
    const [images, setImages] = useState<string[]>([]);

    const handleFiles: ChangeEventHandler<HTMLInputElement> = (e) => {
        if(!e.target.files) return

        // バイナリデータを取得
        const file = e.target.files[0] as Blob;

        // BASE64にエンコード
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            if(!e.target) return
            
            setImages([...images, e.target.result as string]);
        }
      };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFiles}></input>
            {images.length > 0 &&
                <ul>
                    {images.map((image, index) => (
                        <li key={index}>
                            <Card image={image} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
};