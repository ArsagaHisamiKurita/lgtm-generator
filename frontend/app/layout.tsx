import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Color_Emoji, Poppins } from "next/font/google";
import { BaseHeader } from "./components/BaseHeader";
import { BaseFooter } from "./components/BaseFooter";
import { FIX_EMOJI } from "./utils/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: "700",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: "700",
})

const notoColorEmoji = Noto_Color_Emoji({
  subsets: ['emoji'],
  variable: '--font-noto-color-emoji',
  weight: "400",
})

export const metadata: Metadata = {
  title: "LGTM GENERATOR WITH EMOJI",
  description: "LGTM GENERATOR WITH EMOJIはシンプルな操作で素早くLGTM（Looks Good To Me）画像を生成できる便利なツールです。手間なく高品質な画像を作成し、コミュニケーションをもっと楽しくスムーズに。"
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang="ja" className={`${notoSansJP.variable} ${poppins.variable} ${notoColorEmoji.variable}`}>
      <body className='font-sans fonr-sans-emoji font-bold tracking-wide'>
        <div className="min-h-screen w-[1128px] m-auto pt-[40px] pb-[140px]">
          {/* <span>😀</span> */}
          {/* <span>🙈</span>
          <span>💀</span> */}
          { FIX_EMOJI.map((data, index) => (
            <span key={index} className={`animation-name-emoji ${data.duration} ${data.delay} animation-timing-linear animation-itteration-count-infinite fixed bottom-0 ${data.position} ${data.size} filter ${data.blur}`}>
              <span className={`inline-block ${data.rotate}`}>
                {data.emoji}
              </span>
            </span>
          ))}
          {/* <span className="fixed bottom-0 right-0 text-[72px] filter blur-[2px] emoji">
            <span className="inline-block rotate-[20deg]">
              🐶
            </span>
          </span> */}
          <BaseHeader />
          {children}
          <div className="fixed bottom-0 left-0 w-full">
            <BaseFooter />
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;