"use client";

import { useState, useEffect } from "react";
import { outputEmojis } from "../utils/output-emojis";
import { EMOJIS, URL_INDEX, URL_CREATE, URL_FAVORITE } from "../utils/constants";
import Link from 'next/link'

export const Header = () => {
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
        <div>
            <h1 className='text-[48px] text-center font-bold font-arial'>LGTM Generator {EMOJIS[emojiIndex]}</h1>
            <p className="mt-[24px] text-center">この LGTM Generator はシンプルな操作で素早くLGTM（Looks Good To Me）画像を生成できる便利なツールです。<br />手間なく高品質な画像を作成し、コミュニケーションをもっと楽しくスムーズに。{outputEmojis()}</p>
            <nav className="w-full mt-[24px]">
                <ul className="grid grid-cols-3 gap-[24px] text-[20px] font-bold font-arial">
                <li><Link href={URL_INDEX} className="flex justify-center py-[4px] bg-gray-500 text-white">NEW !!!</Link></li>
                <li><Link href={URL_CREATE} className="flex justify-center py-[4px] bg-gray-500 text-white">CREATE !!!</Link></li>
                <li><Link href={URL_FAVORITE} className="flex justify-center py-[4px] bg-gray-500 text-white">FAVORITE !!!</Link></li>
                </ul>
            </nav>
        </div>
    )
};