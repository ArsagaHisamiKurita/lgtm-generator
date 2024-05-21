"use client";

import { useState, useEffect } from "react";
import { InputFile } from './components/InputFile';

const Index = () => {
  const [data, setData] = useState("");

  // API を叩く
  const getData = async () => {
    const res = await fetch('http://localhost:8000/api/example-list');
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []); 

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-[48px] font-bold'>LGTM GENERATOR</h1>
      <div className='mt-[24px]'><InputFile /></div>
      {/* <img src= alt="" /> */}
    </main>
  );
}

export default Index;