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

// banner em public/assets/banner-topo.png (vertical)
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
  {
    t: "Ratos",
    i: imgRato,
    d: "Controle e barreira química para reduzir o retorno e evitar novas entradas.",
  },
  {
    t: "Baratas",
    i: imgBarata,
    d: "Tratamento com foco em ninhos e pontos críticos, ajudando a interromper o ciclo reprodutivo.",
  },
  {
    t: "Percevejos",
    i: imgPercevejo,
    d: "Identificação de focos e aplicação dirigida com segurança para ambientes residenciais e comerciais.",
  },
  {
    t: "Cupins",
    i: imgCupim,
    d: "Inspeção técnica e controle conforme o tipo de infestação (madeira seca/subterrâneo).",
  },
  {
    t: "Escorpiões",
    i: imgEscorpiao,
    d: "Controle integrado com orientação preventiva e foco em áreas de risco.",
  },
  {
    t: "Pombos",
    i: imgPombo,
    d: "Orientação e soluções para reduzir abrigo e acesso, com medidas preventivas.",
  },
  {
    t: "Morcegos",
    i: imgMorcego,
    d: "Avaliação do local e orientação para controle seguro e medidas de vedação.",
  },
  {
    t: "Pulgas",
    i: imgPulga,
    d: "Tratamento do ambiente com foco em pontos de permanência e prevenção de reinfestação.",
  },
  {
    t: "Carrapatos",
    i: imgCarrapato,
    d: "Controle em áreas internas/externas com recomendações para rotina de prevenção.",
  },
];

export default function App() {
  const msg = useMemo(() => {
    return (
      "Olá! Quero um orçamento para dedetização.\n" +
      "📍 Região/bairro:\n" +
      "🏠 Tipo de local (casa/apto/comércio):\n" +
      "🐜 Praga (ex.: baratas, ratos, cupins):\n" +
      "📸 Se tiver foto/vídeo, posso enviar aqui?"
    );
  }, []);

  useEffect(() => {
    document.title = "BrasilPrag Dedetizadora | São Paulo e ABC";
  }, []);

  return (
    <div className="page">
      {/* TOPBAR */}
      <header className="topbar topbarOverlay">
        <div className="topbarInner">
          <a href="#topo" className="brand" aria-label="Ir para o início">
            <img src={logo} alt="BrasilPrag" className="brandLogo" />
            <div>
              <div className="brandName">{EMPRESA}</div>
              <div className="brandSub">{SUBTITULO}</div>
            </div>
          </a>

          <nav className="nav" aria-label="Navegação">
            <a className="btnOutline" href="#topo">
              Início
            </a>
            <a className="btnOutline" href="#servicos">
              Serviços
            </a>
            <a className="btnOutline" href="#como-funciona">
              Como funciona
            </a>
            <a className="btnOutline" href="#localizacao">
              Localização
            </a>
            <a className="btnPrimary" href={wa(msg)} target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <div className="heroInner">
          <div className="heroLeft">
            <div className="heroTag">CONTROLE DE PRAGAS • RESIDENCIAL E COMERCIAL</div>

            <h1 className="heroTitle">
              DEDETIZAÇÃO <br />
              <span>PROFISSIONAL</span>
            </h1>

            <p className="heroDesc">
              Atendimento rápido em São Paulo e ABC, com orientação técnica e aplicação segura para a sua família,
              pets e ambiente.
            </p>

            <div className="heroProof">
              <div className="heroProofItem">✅ Atendimento com hora marcada</div>
              <div className="heroProofItem">✅ Produtos profissionais</div>
              <div className="heroProofItem">✅ Garantia por escrito*</div>
            </div>

            <div className="heroBtns">
              <a className="heroCta" href={wa(msg)} target="_blank" rel="noreferrer">
                SOLICITAR ORÇAMENTO
              </a>
              <a className="heroCtaGhost" href={`tel:${TEL}`}>
                📞 {TEL_VIEW}
              </a>
            </div>

            <p className="heroFineprint">
              *Garantia conforme o serviço contratado e as condições do ambiente (avaliadas na vistoria).
            </p>
          </div>
        </div>
      </section>

      {/* CONFIANÇA / DIFERENCIAIS */}
      <section className="wrap" aria-label="Diferenciais">
        <div className="card">
          <div className="content">
            <div className="tag">CREDIBILIDADE</div>
            <h2 className="h2">Padrão de atendimento que transmite segurança</h2>

            <div className="grid3">
              <div className="miniCard">
                <div className="miniTitle">Procedimento técnico</div>
                <p className="miniText">
                  Avaliamos o cenário, identificamos focos e aplicamos de forma dirigida para mais eficiência.
                </p>
              </div>

              <div className="miniCard">
                <div className="miniTitle">Transparência</div>
                <p className="miniText">
                  Explicamos o que será feito, tempo de reentrada e cuidados pós-serviço, sem “achismos”.
                </p>
              </div>

              <div className="miniCard">
                <div className="miniTitle">Pós-atendimento</div>
                <p className="miniText">
                  Orientações de prevenção e suporte para dúvidas. Garantia por escrito conforme o serviço.
                </p>
              </div>
            </div>

            <div className="twoCtas">
              <a className="ctaBig" href={wa(msg)} target="_blank" rel="noreferrer">
                💬 Falar com um técnico no WhatsApp
              </a>
              <a className="ctaSoft" href="#servicos">
                Ver serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="wrap" aria-label="Como funciona">
        <div className="card">
          <div className="content">
            <div className="tag">COMO FUNCIONA</div>
            <h2 className="h2">Processo simples, com orientação do início ao fim</h2>

            <div className="steps">
              <div className="step">
                <div className="stepN">1</div>
                <div>
                  <div className="stepT">Contato e diagnóstico inicial</div>
                  <p className="stepD">Você envia a praga e o local. Se tiver foto/vídeo, ajuda muito.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepN">2</div>
                <div>
                  <div className="stepT">Orçamento e agendamento</div>
                  <p className="stepD">Passamos valores e marcamos a visita no melhor dia/horário para você.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepN">3</div>
                <div>
                  <div className="stepT">Aplicação segura</div>
                  <p className="stepD">Execução com técnica e cuidados. Orientamos tempo de reentrada e pós-serviço.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepN">4</div>
                <div>
                  <div className="stepT">Suporte e garantia</div>
                  <p className="stepD">Você recebe orientações de prevenção e garantia por escrito conforme o serviço.</p>
                </div>
              </div>
            </div>

            <a className="ctaBig" href={wa(msg)} target="_blank" rel="noreferrer">
              💬 Quero fazer um orçamento agora
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="wrap" aria-label="Serviços">
        <div className="sectionHead">
          <div className="tag">SERVIÇOS</div>
          <h2 className="h2">Tratamentos mais procurados</h2>
          <p className="text">
            Selecione a praga e fale conosco. Indicamos o melhor tratamento conforme o tipo de infestação e ambiente.
          </p>
        </div>

        <div className="servicesGrid">
          {services.map((s, i) => (
            <div key={i} className="serviceCard">
              <div className="serviceImgWrap">
                <img src={s.i} alt={s.t} className="serviceImg" />
              </div>

              <div className="serviceBody">
                <h3 className="serviceTitle">{s.t}</h3>
                <p className="serviceDesc">{s.d}</p>

                <div className="serviceBtns">
                  <a className="ctaBig" href={wa(`Olá! Quero orçamento para ${s.t}.\n\n${msg}`)} target="_blank" rel="noreferrer">
                    💬 Orçar {s.t}
                  </a>
                  <a className="ctaSoft" href="#como-funciona">
                    Como funciona
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GARANTIA / SEGURANÇA */}
      <section className="wrap" aria-label="Garantia e segurança">
        <div className="card">
          <div className="content">
            <div className="tag">SEGURANÇA E GARANTIA</div>
            <h2 className="h2">O que você recebe ao contratar a BrasilPrag</h2>

            <div className="checkGrid">
              <div className="checkItem">✔️ Orientação de reentrada e cuidados pós-serviço</div>
              <div className="checkItem">✔️ Aplicação técnica e dirigida, conforme o ambiente</div>
              <div className="checkItem">✔️ Atendimento claro: explicamos o procedimento</div>
              <div className="checkItem">✔️ Garantia por escrito conforme o serviço contratado</div>
              <div className="checkItem">✔️ Atendimento residencial e comercial</div>
              <div className="checkItem">✔️ Agendamento com hora marcada</div>
            </div>

            <div className="twoCtas">
              <a className="ctaBig" href={wa(msg)} target="_blank" rel="noreferrer">
                💬 Falar no WhatsApp
              </a>
              <a className="ctaSoft" href={`tel:${TEL}`}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap" aria-label="Perguntas frequentes">
        <div className="card">
          <div className="content">
            <div className="tag">FAQ</div>
            <h2 className="h2">Dúvidas comuns</h2>

            <details className="faq">
              <summary>Preciso sair de casa durante a aplicação?</summary>
              <p>
                Depende do tipo de tratamento e do ambiente. Informamos antes do serviço e orientamos o tempo de reentrada.
              </p>
            </details>

            <details className="faq">
              <summary>É seguro para crianças e pets?</summary>
              <p>
                Trabalhamos com aplicação técnica e orientações de segurança. Seguimos recomendações de uso e cuidados pós-serviço.
              </p>
            </details>

            <details className="faq">
              <summary>Em quanto tempo vejo resultado?</summary>
              <p>
                Varia conforme a praga e o nível de infestação. Em muitos casos, o controle começa nas primeiras horas/dias.
              </p>
            </details>

            <details className="faq">
              <summary>A garantia é de 1 ano?</summary>
              <p>
                A garantia é fornecida por escrito e pode variar conforme o serviço, praga e condições do local. Confirmamos no orçamento.
              </p>
            </details>

            <a className="ctaBig" href={wa(msg)} target="_blank" rel="noreferrer">
              💬 Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="wrap pb120" aria-label="Localização">
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

            <div className="trustNote">
              Atendimento com agendamento • Suporte pós-serviço • Orientação preventiva
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <a className="floatBtn floatWhats" href={wa(msg)} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        💬
      </a>
      <a className="floatBtn floatRota" href={ROTA} target="_blank" rel="noreferrer" aria-label="Como chegar">
        🧭
      </a>

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
