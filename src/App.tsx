import { useEffect, useMemo } from "react";
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

// banner em public/assets/banner-topo.png
const BANNER = "/assets/banner-topo.png";

// Mapa
const ENDERECO = "Av. Paulista, 1471 - São Paulo - SP";
const MAP = `https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`;
const ROTA = `https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1471,+S%C3%A3o+Paulo+-+SP`;
const MAPS = `https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+1471,+S%C3%A3o+Paulo+-+SP`;

function wa(msg: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

const services = [
  { t: "Ratos", i: imgRato },
  { t: "Baratas", i: imgBarata },
  { t: "Percevejos", i: imgPercevejo },
  { t: "Cupins", i: imgCupim },
  { t: "Escorpiões", i: imgEscorpiao },
  { t: "Pombos", i: imgPombo },
  { t: "Morcegos", i: imgMorcego },
  { t: "Pulgas", i: imgPulga },
  { t: "Carrapatos", i: imgCarrapato },
];

export default function App() {
  const msg = useMemo(() => `Olá! Quero orçamento com a ${EMPRESA}.`, []);

  useEffect(() => {
    document.title = "BrasilPrag Dedetizadora | São Paulo e ABC";
  }, []);

  return (
    <div className="page">
      {/* TOPO FIXO (por cima do hero) */}
      <header className="topbar topbarOverlay">
        <div className="topbarInner">
          <a href="#topo" className="brand">
            <img src={logo} alt="BrasilPrag" className="brandLogo" />
            <div>
              <div className="brandName">{EMPRESA}</div>
              <div className="brandSub">{SUBTITULO}</div>
            </div>
          </a>

          <nav className="nav">
            <a className="btnOutline" href="#topo">
              Início
            </a>
            <a className="btnOutline" href="#servicos">
              Serviços
            </a>
            <a className="btnOutline" href="#orcamento">
              Orçamento
            </a>
            <a className="btnPrimary" href={wa(msg)} target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* HERO FULL */}
      <section id="topo" className="hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <div className="heroInner">
          <div className="heroLeft">
            <div className="heroTag">CONTROLE DE PRAGAS</div>

            <h1 className="heroTitle">
              DEDETIZAÇÃO <br />
              <span>PROFISSIONAL</span>
            </h1>

            <p className="heroDesc">
              Eliminamos pragas com segurança e eficiência. Atendimento rápido em São Paulo e ABC.
            </p>

            <div className="heroBtns">
              <a className="heroCta" href={wa(msg)} target="_blank" rel="noreferrer">
                SOLICITAR ORÇAMENTO
              </a>
              <a className="heroCtaGhost" href={`tel:${TEL}`}>
                📞 {TEL_VIEW}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ORÇAMENTO */}
      <section id="orcamento" className="wrap">
        <div className="card">
          <div className="content">
            <div className="tag">ORÇAMENTO</div>
            <h2 className="h2">Solicite seu orçamento agora</h2>
            <p className="text">
              Clique no WhatsApp e informe o tipo de praga e o local. Atendimento rápido em São Paulo e ABC.
            </p>

            <a className="ctaBig" href={wa(msg)} target="_blank" rel="noreferrer">
              💬 Pedir orçamento no WhatsApp
            </a>

            <a className="ctaSoft" href={`tel:${TEL}`}>
              📞 {TEL_VIEW}
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <div id="servicos" />
      {services.map((s, i) => (
        <section key={i} className="wrap">
          <div className="card">
            <div className="imgWrap">
              <img src={s.i} alt={s.t} className="serviceImg" />
            </div>

            <div className="content">
              <div className="tag">CONTROLE</div>
              <h2 className="h2">{s.t}</h2>

              <a className="ctaBig" href={wa(msg)} target="_blank" rel="noreferrer">
                Atendimento via WhatsApp
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* MAPA */}
      <section className="wrap pb120">
        <div className="card">
          <div className="content">
            <div className="tag">LOCALIZAÇÃO</div>
            <h2 className="h2">São Paulo</h2>
            <p className="text">
              Endereço: <strong>{ENDERECO}</strong>
            </p>

            <div className="mapWrap">
              <iframe title="Mapa BrasilPrag" src={MAP} className="mapIframe" loading="lazy" />
            </div>

            <div className="mapBtns">
              <a className="ctaBig" href={ROTA} target="_blank" rel="noreferrer">
                🧭 Como chegar
              </a>
              <a className="ctaSoft" href={MAPS} target="_blank" rel="noreferrer">
                📍 Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BARRA MOBILE */}
      <div className="mobileBar">
        <a className="mobileBtnSoft" href={`tel:${TEL}`}>
          📞 Ligar
        </a>
        <a className="mobileBtnSoft" href={INSTAGRAM} target="_blank" rel="noreferrer">
          📷 Insta
        </a>
        <a className="mobileBtnSoft" href={ROTA} target="_blank" rel="noreferrer">
          🧭 Rota
        </a>
      </div>
    </div>
  );
}
