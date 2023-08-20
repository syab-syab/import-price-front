import React, { useState } from 'react'
import Modal from "react-modal";
// import About from './About';
import About from './microparts/About';


export const Header = () => {
  const [aboutIsOpen, setAboutIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
    },
  }

  const toggleModal = () => {
    setAboutIsOpen(!aboutIsOpen);
  }


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
      "
      onClick={toggleModal}
      >
        ABOUT
      </span>
        <Modal
          isOpen={aboutIsOpen}
          style={customStyles}
          onRequestClose={toggleModal}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <About func={toggleModal} />
          {/* <button onClick={toggleModal}>閉じる</button> */}
        </Modal>
      <a className="
        border-b-2
        border-transparent
        hover:border-white       
        transition-all
        duration-500
      "
      href='https://twitter.com/nomeatnolifeno1'
      target='blank'
      >
        TWITTER
      </a>
      <a className="
        border-b-2
        border-transparent
        hover:border-white       
        transition-all
        duration-500
      "
      href='https://www.youtube.com/channel/UCy1-DE9tWCWgQE82JYJGfLA'
      target='blank'
      >
        YOUTUBE
      </a>
    </div>
  </header>
  )
}

export default Header