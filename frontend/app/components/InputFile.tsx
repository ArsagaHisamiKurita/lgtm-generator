"use client";

import { useState, ChangeEventHandler } from 'react';
import { CardPreview } from './CardPreview';
import { THUMBNAIL_SIZE } from '../utils/constants';

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
            
            console.log(e.target.result);
            setImages([...images, e.target.result as string]);
        }
      };

    return (
        <div>
            <div className='flex justify-center'><input type="file" accept="image/*" onChange={handleFiles}></input></div>
            {images.length > 0 &&
                <ul className='grid grid-cols-3 gap-[24px] w-[1128px] mt-[24px]'>
                    {images.map((image, index) => (
                        <li key={index} className={`w-[${THUMBNAIL_SIZE.width}px] h-[${THUMBNAIL_SIZE.height}px]`}>
                            <CardPreview image={image} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
};