"use client";

import { useState, useRef, ChangeEventHandler } from 'react';
import { useAtom } from 'jotai';
import { PREVIEW_DATA } from '../jotai/atom';
import { THUMBNAIL_SIZE } from '../utils/constants';
import { IS_UPLOAD, IS_CHANGE, IS_CURSOR_CHANGE } from '../jotai/atom';

export const ButtonChangeEmoji = () => {
    const [upload] = useAtom(IS_UPLOAD);
    const [change, setChange] = useAtom(IS_CHANGE);
    const [cursorChange, setCursorChange] = useAtom(IS_CURSOR_CHANGE);

    const handleClick = () => {
        setChange(!change);
    }

    const handleMouseEnter = () => {
        setCursorChange(true);
    }

    const handleMouseLeave = () => {
        setCursorChange(false);
    }

    return (
        <div className='flex items-center justify-center tracking-wider'>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className={`flex items-center justify-center gap-[10px] w-[260px] h-[54px] font-poppins text-[20px] shadow-2xl rounded-full ${upload ? 'bg-green-500 text-white pointer-events-auto' : 'bg-gray-500 text-gray-300 pointer-events-none'}`}>
                CHANGE EMOJI
                <svg viewBox="0 0 512 512" className="w-[19px] h-[19px]">
                    <path d="M509.86,267.434c-2.785-4.717-7.858-7.613-13.338-7.613h-43.677v-108.21
                        c0.014-19.402-7.962-37.293-20.698-49.971c-12.678-12.738-30.57-20.721-49.973-20.699l-194.482-0.007
                        c-6.088,0-11.731,3.222-14.818,8.472c-3.089,5.243-3.178,11.738-0.222,17.062l17.55,31.65c3.792,6.828,10.99,11.072,18.795,11.072
                        h173.178c0.786,0.014,1.17,0.214,1.71,0.703c0.49,0.548,0.696,0.933,0.711,1.718v108.21h-43.678c-5.48,0-10.553,2.896-13.338,7.613
                        c-2.777,4.74-2.858,10.575-0.199,15.374l77.802,140.29c2.726,4.918,7.91,7.969,13.538,7.969s10.812-3.051,13.537-7.969
                        l77.802-140.29C512.719,278.009,512.637,272.174,509.86,267.434z" className="fill-current"></path>
                    <path d="M321.791,373.873c-3.792-6.835-10.983-11.071-18.796-11.071h-173.17c-0.785-0.014-1.17-0.214-1.711-0.703
                        c-0.488-0.541-0.696-0.926-0.71-1.71v-108.21h43.678c5.473,0,10.553-2.896,13.337-7.613c2.778-4.74,2.859-10.575,0.201-15.374
                        l-77.802-140.29c-2.733-4.918-7.91-7.969-13.537-7.969c-5.629,0-10.805,3.051-13.538,7.969L1.94,229.192
                        c-2.658,4.798-2.577,10.634,0.2,15.374c2.785,4.717,7.865,7.613,13.338,7.613h43.678v108.21
                        c-0.015,19.402,7.961,37.294,20.698,49.972c12.678,12.737,30.57,20.714,49.972,20.69l194.476,0.008
                        c6.086,0,11.73-3.222,14.818-8.472c3.087-5.251,3.177-11.738,0.222-17.07L321.791,373.873z" className="fill-current"></path>
                </svg>
            </button>
        </div>
    )
};