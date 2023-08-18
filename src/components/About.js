import React from 'react'

const About = ({func}) => {
  return (
    <div className='
      bg-black
      bg-opacity-50
      text-center
      p-0
      border-8
      border-black
      text-white
    '>
      <p>このサイトは終値を用いて計算しています。</p>
      <p>レートの値は正確性を保証できませんのでご理解ください。</p>
      <p>あくまで娯楽目的での利用を推奨します。</p>
      <p>なお、レートの値はすべてALPHA VANTAGEのものを使用しております。</p>
      <button
        onClick={func}
      >
        close
      </button>
    </div>
  )
}

export default About