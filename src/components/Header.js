import React from 'react'

export const Header = () => {
  return (
    <header class="
      bg-blue-400
      pt-24
      pb-2
      bg-opacity-40
      overflow-hidden
    ">
    {/* ヘッダー・タイトル */}
    <div class="
      mb-24
    ">
      <h1 class="
        tracking-widest
        mb-2
        font-serif
        text-3xl
        sm:text-7xl
      ">
        YEN$CONVERSION
      </h1>
      <h3 class="
        mb-2
        text-xl
        sm:text-3xl
      ">
        輸入品の価格を円換算
      </h3>
    </div>
    {/* ヘッダー・メニュー */}
    <div class="
      font-bold
      space-x-12
      text-xl
      sm:text-3xl
    ">
      {/* 以下三つのspanタグはaタグに変える */}
      <span class="
        border-b-2
        border-transparent
        hover:border-white       
        transition-all
        duration-500
      ">
        ABOUT
      </span>
      <span class="
        border-b-2
        border-transparent
        hover:border-white       
        transition-all
        duration-500
      ">
        TWITTER
      </span>
      <span class="
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