"use client";
import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [isData, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [tulis, setTulis] = useState("")
  const [diary, setDiary] = useState([])

  const endpointAPI = "https://6555c2ed84b36e3a431e430b.mockapi.io/diary";
  
  async function getDiary() {
    try {
      const res = await axios.get(endpointAPI);
      const data = res.data;
      
      const judul = data.map((item) => item.judul);
      setJudul(judul);
      
      const isi_diary = data.map((item) => item.isi_diary);
      setIsiDiary(isi_diary);

      setLoading(false);
    } 
    
    catch (error) {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getDiary();
  }, []);
  
  function handlerTekanEnter(event) {
    if (event.key === 'Enter') {
      handlerSubmitDiary();
    }
  }
  
  function handlerInputDiary(event) {
    event.preventDefault();
    setTulis(event.target.value);
  }

  function handlerSubmitDiary(event) {
    setDiary(tulis);
    console.log('tes :'+ diary)
  }
  
  async function postDiary() {
    const updateDiary = [...isData, tulis]
    setData(updateDiary)
    setTulis('')
    try{
      const res = await axios.post(endpointAPI,{
        judul: tulis
      })
    }
    catch(error){
      alert('failed to POST API')
    }
  }
  
  return (
    <div>
      <div className="banner-container">
        <div className="cta-banner-wrapper">
          <input
            className={"cta-input"}
            type='text'
            placeholder="Tambahkan judul diary"
            onInput={handlerInputDiary}
            onKeyDown={handlerTekanEnter}
          /> 
          <div className='cta-button' onClick={handlerSubmitDiary}>
            <p>Tambahkan</p>
          </div>
        </div>
      </div>
      {loading ? (
        <p className="waiting-text">API is loading...</p>
      ) : judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <Link href={`/diary/${item}/${isiDiary[idx]}`}>
            <li key={idx}>
              <div className="diary-container">
                <h1>{judul[idx]}</h1>
                <p className="p-diary">{isiDiary[idx]}</p>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="waiting-text">API cannot load</p>
      )}
    </div>
  );
}