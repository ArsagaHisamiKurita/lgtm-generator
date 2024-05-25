"use client";

import { InputFile } from '../components/InputFile';
import { useUuid } from "../hooks/useUuid";

const Create = () => {
    // ユーザーIDをセット
    useUuid()

    return (
        <div className='mt-[24px]'><InputFile /></div>
    );
}

export default Create;