import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LGTM Generator | 簡単・高速LGTM画像生成ツール 😇🐶😺👍🫶😀🐭👶🙌🤟",
  description: "LGTM Generatorは、シンプルな操作で素早くLGTM（Looks Good To Me）画像を生成できる便利なツールです。手間なく高品質な画像を作成し、コミュニケーションをもっと楽しく、スムーズに。😇🐶😺👍🫶😀🐭👶🙌🤟",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;