"use client";

import { Header } from "../components/Header";
import { InputFile } from '../components/InputFile';

const Create = () => {
  return (
    <main className="min-h-screen w-[1128px] m-auto py-[40px]">
      <Header />
      <div className='mt-[24px]'><InputFile /></div>
    </main>
  );
}

export default Create;