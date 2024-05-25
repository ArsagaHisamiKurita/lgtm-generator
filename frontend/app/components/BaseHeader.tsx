"use client";

import { useState, useEffect } from "react";
import { outputEmojis } from "../utils/output-emojis";
import { EMOJIS, URL_INDEX, URL_CREATE, URL_FAVORITE } from "../utils/constants";
import Link from 'next/link'

export const BaseHeader = () => {
    const [emojiIndex, setEmojiIndex] = useState(0);

    useEffect(() => {
        // ランダムな絵文字を返す
        let saveIndex = 0;
        let randIndex = 0;

        setInterval(() => {
        // 前回でた絵文字と同じ場合は再度ランダムを取得
        do {
            randIndex = Math.floor(Math.random() * EMOJIS.length);
        } while (randIndex === saveIndex);

        saveIndex = randIndex;
        setEmojiIndex(randIndex);
        }, 200)
    }, []); 

    return (
        <div className="relative">
            <h1 className='text-[60px] text-center font-poppins tracking-wider'>LGTM GENERATOR WITH <span className="bg-white px-[14px] rounded-lg"><span className="relative bottom-[-1px] right-[-2px]">{EMOJIS[emojiIndex]}</span></span></h1>
            <p className="mt-[24px] text-[20px] text-center leading-10">この LGTM GENERATOR WITH EMOJI はシンプルな操作で<br />素早くLGTM（Looks Good To Me）画像を生成できる便利なツールです。<br />手間なく高品質な画像を作成し、コミュニケーションをもっと楽しくスムーズに。</p>
            <nav className="w-full mt-[64px]">
                <ul className="grid grid-cols-3 gap-[24px] text-[20px] font-poppins text-white tracking-wider">
                    <li><Link href={URL_INDEX} className="flex justify-center py-[12px] bg-stone-900 shadow-2xl rounded-full">NEW !</Link></li>
                    <li><Link href={URL_CREATE} className="flex justify-center py-[12px] bg-stone-900 shadow-2xl rounded-full">CREATE !</Link></li>
                    <li><Link href={URL_FAVORITE} className="flex justify-center py-[12px] bg-stone-900 shadow-2xl rounded-full">FAVORITE !</Link></li>
                </ul>
            </nav>
        </div>
    )
};