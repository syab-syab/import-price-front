import React from 'react'

export const Header = () => {
  return (
    <header class="
        bg-blue-400
        pt-24
        pb-2
      ">
      {/* ヘッダー・タイトル */}
      <div class="
        mb-24
      ">
        <h1 class="
          text-7xl
          tracking-widest
          mb-2
        ">
          YEN$CONVERSION
        </h1>
        <h3 class="
          text-3xl
          mb-2
        ">
          輸入品の価格を円換算
        </h3>
      </div>
      {/* ヘッダー・メニュー */}
      <div class="
        font-bold
        space-x-12
        text-3xl
      ">
        <a href="#" class="
          border-b-2
          border-transparent
          hover:border-white       
          transition-all
          duration-500
        ">
          ABOUT
        </a>
        <a href="#" class="
          border-b-2
          border-transparent
          hover:border-white       
          transition-all
          duration-500
        ">
          TWITTER
        </a>
        <a href="#" class="
          border-b-2
          border-transparent
          hover:border-white       
          transition-all
          duration-500
        ">
          YOUTUBE
        </a>
      </div>
    </header>
  )
}

export default Header