import React from 'react'

export const Header = () => {
  return (
    <header className="
      bg-black
      pt-24
      pb-2
      text-white
      bg-opacity-50
      overflow-hidden
    ">
    {/* ヘッダー・タイトル */}
    <div className="
      mb-24
    ">
      <h1 className="
        tracking-widest
        mb-2
        font-serif
        text-3xl
        sm:text-7xl
      ">
        YEN$CONVERSION
      </h1>
      <h3 className="
        mb-2
        text-xl
        sm:text-3xl
      ">
        輸入品の価格を円換算
      </h3>
    </div>
    {/* ヘッダー・メニュー */}
    <div className="
      font-bold
      space-x-12
      text-xl
      sm:text-3xl
    ">
      {/* 以下三つのspanタグはaタグに変える */}
      <span className="
        border-b-2
        border-transparent
        hover:border-white       
        transition-all
        duration-500
      ">
        ABOUT
      </span>
      <span className="
        border-b-2
        border-transparent
        hover:border-white       
        transition-all
        duration-500
      ">
        TWITTER
      </span>
      <span className="
        border-b-2
        border-transparent
        hover:border-white       
        transition-all
        duration-500
      ">
        YOUTUBE
      </span>
    </div>
  </header>
  )
}

export default Header