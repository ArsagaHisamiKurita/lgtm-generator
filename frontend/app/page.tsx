"use client";

import { useState, useEffect } from "react";
import { CardThumbnail } from "./components/CardThumbnail";
import { THUMBNAIL_SIZE } from './utils/constants';
import { useUuid } from "./hooks/useUuid";
import { setCookie, parseCookies } from 'nookies';

const Index = () => {
  // ユーザーIDをセット
  useUuid()

  const [data, setData] = useState("");
  const cookies = parseCookies();

  // 一覧取得
  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_IMAGES}?userId=${cookies.uuid}` || '');
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []); 

  return (
    <div>
      {data && (
        <ul className='grid grid-cols-3 gap-[24px] mt-[60px]'>
          {data.map((image, index) => (
            <li key={index} className={`w-[${THUMBNAIL_SIZE.width}px] h-[${THUMBNAIL_SIZE.height}px]`}>
              <CardThumbnail image={image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Index;