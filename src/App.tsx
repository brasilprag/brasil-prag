import React, { useEffect, useMemo } from "react";
import "./App.css";
import logo from "./logo.png";

import imgRato from "./assets/rato.jpg";
import imgBarata from "./assets/barata.jpg";
import imgPercevejo from "./assets/percevejo.jpg";
import imgCupim from "./assets/cupim.jpg";
import imgEscorpiao from "./assets/escorpiao.jpg";
import imgPombo from "./assets/pombo.jpg";
import imgMorcego from "./assets/morcego.jpg";
import imgPulga from "./assets/pulga.jpg";
import imgCarrapato from "./assets/carrapato.jpg";

const EMPRESA = "BrasilPrag Dedetizadora";
const SUBTITULO = "Atendimento em toda São Paulo e ABC";

const WHATSAPP = "5511932782539";
const INSTAGRAM = "https://www.instagram.com/brasilprag/";
const TEL = "+5511932782539";
const TEL_VIEW = "(11) 93278-2539";

const BANNER = "/assets/banner-topo.png";

const ENDERECO = "Av. Paulista, 1471 - São Paulo - SP";
const MAP = `https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`;
const ROTA = `https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1471,+São+Paulo`;

function wa(msg:string){
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

const services = [
  {t:"Ratos",i:imgRato},
  {t:"Baratas",i:imgBarata},
  {t:"Percevejos",i:imgPercevejo},
  {t:"Cupins",i:imgCupim},
  {t:"Escorpiões",i:imgEscorpiao},
  {t:"Pombos",i:imgPombo},
  {t:"Morcegos",i:imgMorcego},
  {t:"Pulgas",i:imgPulga},
  {t:"Carrapatos",i:imgCarrapato},
];

export default function App() {

  const msg = useMemo(()=>`Olá! Quero orçamento com a ${EMPRESA}.`,[]);

  useEffect(()=>{
    document.title="BrasilPrag Dedetizadora";
  },[]);

  return (
  <div className="page">

<header className="topbar">
<div className="topbarInner">

<a href="#topo" className="brand">
<img src={logo} className="brandLogo"/>
<div>
<div className="brandName">{EMPRESA}</div>
<div className="brandSub">{SUBTITULO}</div>
</div>
</a>

<nav className="nav">
<a className="btnOutline" href={INSTAGRAM} target="_blank">📷 Instagram</a>
<a className="btnOutline" href={ROTA} target="_blank">🧭 Como chegar</a>
<a className="btnPrimary" href={wa(msg)} target="_blank">💬 WhatsApp</a>
<a className="btnOutline" href="#orcamento">🧾 Orçamento</a>
</nav>

</div>
</header>

<section id="topo" className="wrap">
<div className="bannerCard">
<img src={BANNER} className="bannerImg"/>

<a className="bannerTopRightBtn" href={wa(msg)} target="_blank">
💬 WhatsApp
</a>

<a className="bannerMainCta" href={wa(msg)} target="_blank">
FALE CONOSCO AGORA
</a>

</div>
</section>

<section id="orcamento" className="wrap">
<div className="card">
<div className="content">
<div className="tag">ORÇAMENTO</div>
<h2 className="h2">Solicite seu orçamento</h2>

<a className="ctaBig" href={wa(msg)} target="_blank">
💬 Pedir orçamento no WhatsApp
</a>

<a className="ctaSoft" href={`tel:${TEL}`}>
📞 {TEL_VIEW}
</a>

</div>
</div>
</section>

{services.map((s,i)=>(
<section key={i} className="wrap">
<div className="card">
<div className="imgWrap">
<img src={s.i} className="serviceImg"/>
</div>
<div className="content">
<div className="tag">CONTROLE</div>
<h2 className="h2">{s.t}</h2>
<a className="ctaBig" href={wa(msg)} target="_blank">
Atendimento via WhatsApp
</a>
</div>
</div>
</section>
))}

<section className="wrap pb120">
<div className="card">
<div className="content">
<div className="tag">LOCALIZAÇÃO</div>
<h2 className="h2">São Paulo</h2>

<div className="mapWrap">
<iframe src={MAP} className="mapIframe"/>
</div>

</div>
</div>
</section>

<div className="mobileBar">
<a className="mobileBtnSoft" href={`tel:${TEL}`}>📞</a>
<a className="mobileBtnSoft" href={INSTAGRAM} target="_blank">📷</a>
<a className="mobileBtnSoft" href={ROTA} target="_blank">🧭</a>
</div>

</div>
  );
}
