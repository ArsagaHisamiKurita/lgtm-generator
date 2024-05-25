"use client";

import { useUuid } from "../hooks/useUuid";

const Notice = () => {
  // ユーザーIDをセット
  useUuid()

  return (
    <div className="relative mt-[60px]">
      <h1 className="text-[32px]">LGTM GENERATOR WITH EMOJI ご利用上の注意</h1>
      <p className="mt-[12px] text-[20px]">LGTM GENERATOR WITH EMOJI をご利用いただきありがとうございます。<br />以下の注意事項をよくお読みの上ご利用ください。</p>
      <ol className="grid gap-[24px] mt-[60px] text-[16px]">
        <li>
          <h2>1. 著作権とライセンス</h2>
          <ul className="mt-[8px]">
            <li>・使用する画像は著作権法に従って適切に使用してください。著作権を侵害する画像の使用はお控えください。</li>
            <li>・パブリックドメインまたは適切なライセンスの下で提供されている画像を使用することをお勧めします。</li>
          </ul>
        </li>
        <li>
          <h2>2. プライバシー</h2>
          <ul className="mt-[8px]">
            <li>・個人が特定できる画像（顔写真や個人情報が写っている画像）を使用する際は、必ずその本人の許可を得てください。</li>
            <li>・他者のプライバシーを侵害しないよう注意してください。</li>
          </ul>
        </li>
        <li>
          <h2>3. 内容に関する責任</h2>
          <ul className="mt-[8px]">
            <li>・サービスを利用して生成された画像に関する一切の責任はご利用者様に負担いただくものとします。ご利用者様が生成した画像に関し、第三者が損害を被った場合、運営者はご利用者様に代わっての責任は一切負いません。</li>
            <li>・公序良俗に反する内容や、他人を誹謗中傷するような内容の画像は作成しないでください。</li>
          </ul>
        </li>
        <li>
          <h2>4. 過剰なリクエストの禁止</h2>
          <ul className="mt-[8px]">
            <li>・過剰な数のリクエストを送信してサービスに負荷をかける行為はおやめください。</li>
            <li>・その他、悪質な利用方法が確認された場合、特定のご利用者様を予告無しにアクセス禁止にすることがあります。</li>
          </ul>
        </li>
        <li>
          <h2>5. サービスの利用目的</h2>
          <ul className="mt-[8px]">
            <li>・LGTMジェネレーターは、主に開発者間のコミュニケーションやチームビルディングを目的としています。</li>
            <li>・商業目的や営利目的での無断使用は禁止されています。</li>
          </ul>
        </li>
        <li>
          <h2>6. サービスの変更・中止</h2>
          <ul className="mt-[8px]">
            <li>・当サイトは、予告なくサービス内容を変更または中止することがあります。予めご了承ください。</li>
          </ul>
        </li>
      </ol>
      <p className="mt-[60px] text-[20px]">以上の注意事項を守って、安全で楽しいLGTM画像の作成をお楽しみください。<br />ご理解とご協力のほど、よろしくお願いいたします。</p>
    </div>
  );
}

export default Notice;