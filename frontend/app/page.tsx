"use client";

import { useState, useEffect } from "react";
import { InputFile } from './components/InputFile';
import { THUMBNAIL_SIZE } from './utils/constants';
import { outputEmojis } from "./utils/output-emojis";
import { EMOJIS } from "./utils/constants";

const Index = () => {
  const [data, setData] = useState("");
  const [emojiIndex, setEmojiIndex] = useState(0);

  // 一覧取得
  const getData = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL || '');
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getData();

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
    <main className="min-h-screen w-[1128px] m-auto py-[40px]">
      <h1 className='text-[48px] text-center font-bold font-arial'>LGTM Generator {EMOJIS[emojiIndex]}</h1>
      <p className="mt-[24px] text-center">この LGTM Generator はシンプルな操作で素早くLGTM（Looks Good To Me）画像を生成できる便利なツールです。<br />手間なく高品質な画像を作成し、コミュニケーションをもっと楽しくスムーズに。{outputEmojis()}</p>
      <nav className="w-full">
        <ul className="grid grid-cols-3">
          <li><a href="">NEW !!!</a></li>
          <li><a href="">CREATE !!!</a></li>
          <li><a href="">FAVORITE !!!</a></li>
        </ul>
      </nav>
      <div className='mt-[24px]'><InputFile /></div>
      {data && (
        <ul className='grid grid-cols-3 gap-[24px]'>
          {data.map((image, index) => (
            <li key={index} className={`w-[${THUMBNAIL_SIZE.width}px] h-[${THUMBNAIL_SIZE.height}px]`}>
              <img src={image.image_url} width={THUMBNAIL_SIZE.width} height={THUMBNAIL_SIZE.height} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Index;