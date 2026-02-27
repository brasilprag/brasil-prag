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
    "Ratos deixam feromônios no ambiente que atraem outros roedores. Aplicamos calda química que neutraliza esses sinais, desaloja e elimina a infestação, e cria uma barreira química residual para impedir o retorno. Garantia de 1 ano.",
  Baratas:
    "Baratas espalham ootecas (ovos) pelo local. Nosso tratamento tem efeito de choque que desalojam e eliminam as baratas, além de ação residual com barreira química. Também atua como inibidor de crescimento, impedindo que as ovas cheguem à fase adulta. Garantia de 1 ano.",
  Cupins:
    "Tratamento com efeito dominó: o produto se espalha pela colônia, contaminando os indivíduos até alcançar a rainha. Forma barreira química protetora e evita reinfestação. Garantia de 5 anos.",
  Percevejos:
    "Aplicação técnica nos pontos de abrigo e circulação, com ação de choque e residual para interromper o ciclo da infestação. A barreira química reduz o risco de retorno. Garantia de 1 ano.",
  "Escorpiões":
    "Tratamento direcionado em ralos, frestas e perímetro, com ação residual e barreira química para reduzir abrigo e circulação. Também ajuda a controlar insetos que servem de alimento. Garantia de 1 ano.",
  Pombos:
    "Manejo e controle com orientações e barreiras preventivas, reduzindo pouso e permanência. Foco em eliminar atrativos e proteger áreas críticas, com solução segura e eficaz. Garantia de 1 ano.",
  Morcegos:
    "Serviço técnico com medidas de exclusão e vedação de acessos, evitando reentrada com segurança. Orientação para correção de pontos de abrigo e limpeza conforme necessidade. Garantia de 1 ano.",
  Pulgas:
    "Aplicação com efeito de choque para eliminar pulgas ativas e ação residual para quebrar o ciclo de reinfestação. A barreira química ajuda a impedir o retorno. Garantia de 1 ano.",
  Carrapatos:
    "Tratamento em áreas de circulação e focos, com ação de choque e residual. Forma barreira química e reduz significativamente o risco de reinfestação. Garantia de 1 ano.",
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
      {/* ✅ BRAND FIXO NO TOPO ESQUERDO (sem faixa) */}
      <a href="#topo" className="brandFixed" aria-label="Voltar ao topo">
        <img src={logo} alt="BrasilPrag" className="brandLogo" />
        <div>
          <div className="brandName">{EMPRESA}</div>
          <div className="brandSub">{SUBTITULO}</div>
        </div>
      </a>

      {/* ✅ BOTÕES FLUTUANTES NO TOPO DIREITO (junto com ícones) */}
      <div className="actionsFixed" aria-label="Ações rápidas">
        <div className="actionsRow">
          <a className="btnOutline" href="#servicos">
            Serviços
          </a>
          <a className="btnOutline" href="#como">
            Como Funciona
          </a>
          <a className="btnOutline" href="#localizacao">
            Localização
          </a>
          <a
            className="btnOutline"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="btnPrimary"
            href={wa(msg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="actionsIcons">
          <a
            className="floatBtnTop"
            href={wa(msg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            title="WhatsApp"
          >
            💬
          </a>

          <a
            className="floatBtnTop"
            href={ROTA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir rota no Maps"
            title="Como chegar"
          >
            🧭
          </a>

          <a
            className="floatBtnTop"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram"
            title="Instagram"
          >
            📷
          </a>
        </div>
      </div>

      {/* HERO */}
      <section
        id="topo"
        className="hero"
        style={{ backgroundImage: `url(${BANNER})` }}
      >
        <div className="heroInner">
          <div className="heroLeft">
            <div className="heroTag">ATENDIMENTO 24H</div>

            <h1 className="heroTitle">
              DEDETIZAÇÃO <br />
              <span>PROFISSIONAL</span>
            </h1>

            <p className="heroDesc">
              Atendimento em São Paulo e ABC com garantia de 1 a 5 anos, nota
              fiscal e laudo técnico.
            </p>

            <div className="heroBtns">
              <a
                className="heroCta"
                href={wa(msg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                SOLICITAR ORÇAMENTO
              </a>
              <a className="heroCtaGhost" href={`tel:${TEL}`}>
                📞 {TEL_VIEW}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como" className="wrap">
        <div className="card">
          <div className="content">
            <div className="tag">COMO FUNCIONA</div>
            <h2 className="h2">Processo rápido e seguro</h2>

            <div className="steps">
              <div className="step">
                <div className="stepN">1</div>Contato
              </div>
              <div className="step">
                <div className="stepN">2</div>Orçamento
              </div>
              <div className="step">
                <div className="stepN">3</div>Aplicação
              </div>
              <div className="step">
                <div className="stepN">4</div>Garantia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="wrap">
        <div className="servicesGrid">
          {services.map((s, i) => (
            <div key={i} className="serviceCard">
              <div className="serviceImgWrap">
                <img src={s.i} alt={s.t} className="serviceImg" />
              </div>

              {/* ✅ texto do tratamento abaixo da imagem */}
              <p className="serviceDescText">
                {serviceDesc[s.t] ??
                  "Tratamento profissional com efeito de choque, ação residual e barreira química para evitar o retorno. Garantia de 1 ano."}
              </p>

              <div className="serviceBody">
                <h3 className="serviceTitle">{s.t}</h3>
                <a
                  className="ctaBig"
                  href={wa(`Olá! Quero orçamento para ${s.t}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Orçar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAPA */}
      <section id="localizacao" className="wrap pb120">
        <div className="card">
          <div className="content">
            <h2 className="h2">Localização</h2>

            <div className="mapWrap">
              <iframe
                src={MAP}
                className="mapIframe"
                title="Mapa - BrasilPrag"
                loading="lazy"
              />
            </div>

            <div className="mapBtns">
              <a
                className="ctaBig"
                href={ROTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                Como Chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ removidos os botões flutuantes antigos de baixo */}
    </div>
  );
}
