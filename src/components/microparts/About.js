import React from 'react'

const About = ({func}) => {
  return (
    <div className='
      m-4
      bg-black
      bg-opacity-50
      text-center
      p-0
      border-8
      border-white
      border-dashed
      text-white
    '>
      <div className='
        pt-16
        pb-12
        px-16
        text-left
        leading-10
        sm:text-2xl
      '>
        <p>このサイトは四本値のうち終値を用いて計算しています。</p>
        <p>外国からの輸入品を円から換算した額を示すのが当サイト趣旨です。</p>
        <p>Y(円)$(ドル)と銘打っていますがドル以外の外貨での換算もできます。</p>
        <p>fxやレートの分析には不向きだと思われます。</p>
        <div  className='
          text-center
          mt-3
        '>
          <button onClick={func} className='
            mt-4
            border-b-2
            border-transparent
            hover:text-black
            hover:border-white
            transition-all
          '>
            閉じる
          </button>
        </div>

      </div>

    </div>
  )
}

export default About