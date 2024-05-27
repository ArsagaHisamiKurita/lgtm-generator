"use client";

import { useUuid } from "../hooks/useUuid";
import { useState, useEffect } from "react";
import { setCookie, parseCookies } from 'nookies';
import { CardThumbnail } from "../components/CardThumbnail";
import { THUMBNAIL_SIZE } from '../utils/constants';

const Create = () => {
    // ユーザーIDをセット
    useUuid()

    const [data, setData] = useState("");
    const cookies = parseCookies();

    // お気に入り一覧取得
    const getData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_FAVORITE}?userId=${cookies.uuid}` || '');
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

export default Create;