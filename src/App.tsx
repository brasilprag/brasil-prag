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

const BANNER = "/assets/banner-topo.png";

const ENDERECO = "Av. Paulista, 1471 - São Paulo - SP";
const MAP = `https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`;
const ROTA = `https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1471,+S%C3%A3o+Paulo+-+SP`;

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

const serviceDesc: Record<string, string> = {
  Ratos:
    "Ratos deixam feromônios no ambiente que atraem outros roedores. Aplicamos calda química que neutraliza esses sinais, desaloja e elimina a infestação, e cria uma barreira química residual impedindo o retorno. Garantia de 1 ano.",
  Baratas:
    "Baratas espalham ootecas (ovos) pelo local. Nosso tratamento tem efeito de choque que elimina as adultas e ação residual que cria uma barreira química. Também inibe o crescimento das ovas para que não cheguem à fase adulta. Garantia de 1 ano.",
  Cupins:
    "Tratamento com efeito dominó: o produto se espalha pela colônia, contaminando todos até atingir a rainha. Forma barreira química duradoura contra reinfestação. Garantia de 5 anos.",
  Percevejos:
    "Aplicação técnica com efeito de choque e ação residual, interrompendo o ciclo da infestação e formando barreira química preventiva. Garantia de 1 ano.",
  "Escorpiões":
    "Tratamento em ralos, frestas e perímetro com ação residual e barreira química, reduzindo abrigo e circulação. Garantia de 1 ano.",
  Pombos:
    "Controle com medidas preventivas e barreiras físicas, reduzindo pouso e permanência em áreas críticas. Garantia de 1 ano.",
  Morcegos:
    "Exclusão e vedação de acessos com solução segura, evitando retorno ao ambiente tratado. Garantia de 1 ano.",
  Pulgas:
    "Aplicação com efeito de choque e ação residual, quebrando o ciclo de reinfestação e formando barreira química. Garantia de 1 ano.",
  Carrapatos:
    "Tratamento com ação de choque e residual, eliminando focos e criando barreira química preventiva. Garantia de 1 ano.",
};

export default function App() {
  const msg = useMemo(() => {
    return (
      "Olá! Quero um orçamento para dedetização.\n" +
      "📍 Bairro:\n" +
      "🏠 Tipo de local:\n" +
      "🐜 Praga:\n"
    );
  }, []);

  useEffect(() => {
    document.title = "BrasilPrag Dedetizadora | São Paulo e ABC";
  }, []);

  return (
    <div className="page">

      <a href="#topo" className="brandFixed">
        <img src={logo} alt="BrasilPrag" className="brandLogo" />
        <div>
          <div className="brandName">{EMPRESA}</div>
          <div className="brandSub">{SUBTITULO}</div>
        </div>
      </a>

      <div className="actionsFixed">
        <div className="actionsRow">
          <a className="btnOutline" href="#servicos">Serviços</a>
          <a className="btnOutline" href="#como">Como Funciona</a>
          <a className="btnOutline" href="#localizacao">Localização</a>
          <a className="btnOutline" href={INSTAGRAM} target="_blank">Instagram</a>
          <a className="btnPrimary" href={wa(msg)} target="_blank">WhatsApp</a>
        </div>

        <div className="actionsIcons">
          <a className="floatBtnTop" href={wa(msg)} target="_blank">💬</a>
          <a className="floatBtnTop" href={ROTA} target="_blank">🧭</a>
          <a className="floatBtnTop" href={INSTAGRAM} target="_blank">📷</a>
        </div>
      </div>

      <section id="topo" className="hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <div className="heroInner">
          <div className="heroLeft">
            <div className="heroTag">ATENDIMENTO 24H</div>

            <h1 className="heroTitle">
              DEDETIZAÇÃO <br />
              <span>PROFISSIONAL</span>
            </h1>

            <p className="heroDesc">
              Atendimento em São Paulo e ABC com garantia de 1 a 5 anos, nota fiscal e laudo técnico.
            </p>

            <div className="heroBtns">
              <a className="heroCta" href={wa(msg)} target="_blank">
                SOLICITAR ORÇAMENTO
              </a>
              <a className="heroCtaGhost" href={`tel:${TEL}`}>
                📞 {TEL_VIEW}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="wrap">
        <div className="servicesGrid">
          {services.map((s, i) => (
            <div key={i} className="serviceCard">
              <div className="serviceImgWrap">
                <img src={s.i} alt={s.t} className="serviceImg" />
              </div>

              <p className="serviceDescText">{serviceDesc[s.t]}</p>

              <div className="serviceBody">
                <h3 className="serviceTitle">{s.t}</h3>
                <a className="ctaBig" href={wa(`Olá! Quero orçamento para ${s.t}`)} target="_blank">
                  Orçar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
