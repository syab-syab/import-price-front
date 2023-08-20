import React from 'react'

const About = ({func}) => {
  return (
    <div className='
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
        text-2xl
      '>
        <p>このサイトは終値を用いて計算しています。</p>
        <p>レートの値は正確性を保証できませんのでご理解ください。</p>
        <p>なお、レートの値はすべてALPHA VANTAGEのものを使用しております。</p>
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