import React, { useState, useEffect } from 'react';
import './consulta.css';

export default function App(){

  const [brawlers, setBrawlers] = useState([
    {
        "brawlerId": 1,
        "nomeBrawler": "Griff",
        "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Griff.png",
        "detalhesBrawler": "https://brawlify.com/brawlers/detail/Griff",
        "raridadeBrawler": "Cromático"
    },
    {
        "brawlerId": 2,
        "nomeBrawler": "Edgar",
        "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Edgar.png",
        "detalhesBrawler": "https://brawlify.com/brawlers/detail/Edgar",
        "raridadeBrawler": "Épico"
    },
    {
        "brawlerId": 3,
        "nomeBrawler": "8-Bit",
        "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/8-Bit.png",
        "detalhesBrawler": "https://brawlify.com/brawlers/detail/8-Bit",
        "raridadeBrawler": "Caminho dos Troféus"
    },
    {
        "brawlerId": 4,
        "nomeBrawler": "Tick",
        "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Tick.png",
        "detalhesBrawler": "https://brawlify.com/brawlers/detail/Tick",
        "raridadeBrawler": "Caminho dos Troféus"
    },
    {
        "brawlerId": 5,
        "nomeBrawler": "Rosa",
        "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Rosa.png",
        "detalhesBrawler": "https://brawlify.com/brawlers/detail/Rosa",
        "raridadeBrawler": "Raro"
    },
    {
        "brawlerId": 6,
        "nomeBrawler": "Carl",
        "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Carl.png",
        "detalhesBrawler": "https://brawlify.com/brawlers/detail/Carl",
        "raridadeBrawler": "Super Raro"
    },
    {
        "brawlerId": 7,
        "nomeBrawler": "Tara",
        "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Tara.png",
        "detalhesBrawler": "https://brawlify.com/brawlers/detail/Tara",
        "raridadeBrawler": "Mistico"
    },
    {
        "brawlerId": 8,
        "nomeBrawler": "Dynamike",
        "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Dynamike.png",
        "detalhesBrawler": "https://brawlify.com/brawlers/detail/Dynamike",
        "raridadeBrawler": "Super Raro"
    }
      

  ]);
  const [titulo, setTitulo] = ('Brawler');
  const [brawlerId, setBrawlerId] = useState('');
  const [nomeBrawler, setNomeBrawler] = useState('');
  const [imagemUrlBrawler, setImagemUrlBrawler] = useState('');
  const [detalhesBrauler, setDetalhesBrauler] = useState('');
  const [raridadeBrawler, setRaridadeBrawler] = useState('');

  return(
      <>
        <h1>Brawler's</h1>
        <ul>
            {brawlers.map((brawler) =>(
                <li key={brawler.id}>
                    <img src={brawler.imagemUrlBrawler} alt={brawler.nomeBrawler} />
                    <h3>{brawler.nomeBrawler}</h3>
                </li>
            ))}
        </ul>
      </>
  )

}