"use client";

import { ChangeEventHandler } from 'react';

export const InputFile = () => {
    const handleFiles: ChangeEventHandler<HTMLInputElement> = (e) => {
        if(!e.target.files) return

        const file = e.target.files[0];

        console.log(file);
      };

    return (
        <input type="file" accept="image/*" onChange={handleFiles}></input>
    )
};