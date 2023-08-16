import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className="
        bg-black
        text-white
        text-sm
      ">
        {/* フッター・注意書き */}
        <span className="
          red
        ">
          *レートの正確性は保証いたしかねます。あくまで娯楽としてお楽しみください。
        </span>
        <br />
        {/* フッター・コピーライト */}
        <span className="
          copyright
        ">
          ©YEN$CONVERSION
        </span>
      </footer>
    </>
    )
}

export default Footer