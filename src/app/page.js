'use client'

import { useState } from 'react'
import Image from 'next/image'
import '@styles/home.css'

export default function Home() {
  const [nama, setNama] = useState('JavierAMPJ')
  const [inputNama, setInputNama] = useState('')
  const [placeholder, setPlaceholder] = useState('Nama baru (3-20 karakter)')
  const [border, setBorder] = useState(false)
  const [shake, setShake] = useState(false)

  function handlerTekanEnter(event) {
    if (event.key === 'Enter') {
      handlerUbahNama();
    }
  }

  function handlerInputNama(event) {
    setInputNama(event.target.value)
  }

  function handlerUbahNama() {
    if (inputNama.trim() !== '' && inputNama.length >= 3) {
      setNama(inputNama)
      setInputNama('')
      setPlaceholder('Nama Baru (3-20 karakter)');
      setBorder(false)
      setShake(false)
    } else if (inputNama.trim() !== '' && inputNama.length <= 2) {
      setInputNama('')
      setPlaceholder('Nama Minimal 3 Karakter!');
      setBorder(true)
      setShake(true)
    } else {
      setInputNama('')
      setPlaceholder('Nama Tidak Boleh Kosong!');
      setBorder(true)
      setShake(true)
    }
  }
  
  return (
    <>
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
          <input
            className={`cta-input ${border ? 'border-change' : ''} ${shake ? 'shake-placeholder' : ''}`}
            type='text'
            placeholder={placeholder}
            onInput={handlerInputNama}
            value={inputNama}
            onKeyDown={handlerTekanEnter}
            maxLength={20}
          /> 
            {/* {inputNama.trim() !== '' && inputNama.length <= 2 && (
              <div className="error-message">Nama Minimal 3 Karakter!</div>
            )}
            {inputNama.trim() === '' && (
              <div className="error-message">Nama Tidak Boleh Kosong!</div>
            )}  */}
          <div className='cta-button' onClick={handlerUbahNama}>
            <p>Ganti Nama</p>
            <p>tes</p>
          </div>
        </div>
      </div>
    </>
  )
}