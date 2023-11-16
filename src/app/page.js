'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  const [nama, setNama] = useState('JavierAMPJ')
  const [inputNama, setInputNama] = useState('')
  const [placeholder, setPlaceholder] = useState('Nama baru (3-20 karakter)')

  function handlerTekanEnter(event){
    if (event.key === 'Enter'){
      handlerUbahNama(event)
    }
  }

  function handlerInputNama(event){
    setInputNama(event.target.value)
  }

  function handlerUbahNama(){
    if (inputNama.trim() !== '' && inputNama.length > 2){
      setNama(inputNama)
      setInputNama('')
      setPlaceholder('Nama Baru (3-20 karakter)')
    } else if (inputNama.trim() !== '' && inputNama.length <= 2){
      setInputNama('')
      setPlaceholder('Nama Minimal 3 Karakter!')
    } else {
      setPlaceholder('Nama Tidak Boleh Kosong!')
    }
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
            <input type='text' placeholder={placeholder} className='cta-input' onInput={handlerInputNama} value={inputNama} onKeyDown={handlerTekanEnter} minLength={3} maxLength={20}/>
            <div className='cta-button' onClick={handlerUbahNama}>
              <p>Ganti Nama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}