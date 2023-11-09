'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  const [Like, setLike] = useState(0)

  function handlerTambahLike(){
    setLike(Like + 1)
  }
  
  return (
    <div className='body'>
      <div className='background-effect'>
        <div className="banner-container">
          <div className="header-banner-wrapper">
            <div className="profile-header-banner">
              <Image
                src="/assets/assets.png"
                alt="Picture of the author"
                fill
                objectFit='contain'
              />
            </div>
            <div className="content-header-banner">
              <h1>JavierAMPJ</h1>
              <div className="bio-nim-header-banner">
              <p>D121211006</p>
              <p>"Today is a Present"</p>
              </div>
            </div>
          </div>
          <div className="cta-banner-wrapper">
            <div className='cta-button' onClick={handlerTambahLike}>
              <p>Like! ({Like})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}