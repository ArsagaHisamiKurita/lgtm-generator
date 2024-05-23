"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { CardThumbnail } from "./components/CardThumbnail";
import { THUMBNAIL_SIZE } from './utils/constants';

const Index = () => {
  const [data, setData] = useState("");

  // 一覧取得
  const getData = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_IMAGES || '');
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []); 

  return (
    <main className="min-h-screen w-[1128px] m-auto py-[40px]">
      <Header />
      {data && (
        <ul className='grid grid-cols-3 gap-[24px] mt-[60px]'>
          {data.map((image, index) => (
            <li key={index} className={`w-[${THUMBNAIL_SIZE.width}px] h-[${THUMBNAIL_SIZE.height}px]`}>
              <CardThumbnail image={image} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Index;