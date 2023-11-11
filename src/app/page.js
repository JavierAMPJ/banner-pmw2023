'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  const [nama, setNama] = useState('JavierAMPJ')
  const [inputNama, setInputNama] = useState('')

  function handlerInputNama(event){
    setInputNama(event.target.namaBaru)
  }

  function handlerUbahNama(){
    setNama(inputNama)
  }
  
  return (
    <div className='body'>
      <div className="background-effect">
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
              <h1>{nama}</h1>
              <div className="bio-nim-header-banner">
              <p>D121211006</p>
              <p>"Today is a Present..."</p>
              </div>
            </div>
          </div>
          <div className="cta-banner-wrapper">
            <input type='text' placeholder='Nama Baru...' className='cta-input' onInput={handlerInputNama} namaBaru={inputNama} />
            <div className='cta-button' onClick={handlerUbahNama}>
              <p>Ganti Nama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}