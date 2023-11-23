"use client";
import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      {loading ? (
        <p className="waiting-text">API is loading...</p>
      ) : judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <li key={idx}>
              <div className="diary-container">
                <h1>{judul[idx]}</h1>
                <p className="p-diary">{isiDiary[idx]}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="waiting-text">API cannot load</p>
      )}
    </div>
  );
}