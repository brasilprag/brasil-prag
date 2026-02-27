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
  { t: "Ratos", i: imgRato, d: "Controle e barreira química para reduzir o retorno e evitar novas entradas." },
  { t: "Baratas", i: imgBarata, d: "Tratamento com foco em ninhos e pontos críticos, ajudando a interromper o ciclo." },
  { t: "Percevejos", i: imgPercevejo, d: "Identificação de focos e aplicação dirigida com segurança." },
  { t: "Cupins", i: imgCupim, d: "Inspeção técnica e controle conforme o tipo de infestação." },
  { t: "Escorpiões", i: imgEscorpiao, d: "Controle integrado com orientação preventiva e foco em áreas de risco." },
  { t: "Pombos", i: imgPombo, d: "Soluções preventivas para reduzir abrigo e acesso." },
  { t: "Morcegos", i: imgMorcego, d: "Avaliação do local e medidas de vedação/orientação segura." },
  { t: "Pulgas", i: imgPulga, d: "Tratamento do ambiente e prevenção de reinfestação." },
  { t: "Carrapatos", i: imgCarrapato, d: "Controle em áreas internas/externas com recomendações preventivas." },
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
      {/* FAIXA DE CREDIBILIDADE */}
      <div className="trustBar" role="note" aria-label="Informações de credibilidade">
        <div className="trustBarInner">
          <div className="trustItems">
            <span className="trustPill">⏱️ Atendimento 24h</span>
            <span className="trustPill">🛡️ Garantia de 1 a 5 anos*</span>
            <span className="trustPill">🧾 Nota Fiscal</span>
            <span className="trustPill">📄 Laudo / Relatório técnico</span>
            <span className="trustPill">✅ Conformidade sanitária</span>
          </div>
          <a className="trustBarCta" href={wa(msg)} target="_blank" rel="noreferrer">
            💬 Orçamento rápido
          </a>
        </div>
      </div>

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
            <a className="btnOutline" href="#topo">Início</a>
            <a className="btnOutline" href="#servicos">Serviços</a>
            <a className="btnOutline" href="#como-funciona">Como funciona</a>
            <a className="btnOutline" href="#localizacao">Localização</a>
            <a className="btnPrimary" href={wa(msg)} target="_blank" rel="noreferrer">💬 WhatsApp</a>
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
              Atendimento 24h em São Paulo e ABC, com aplicação técnica, orientação completa e suporte pós-serviço.
            </p>

            <div className="heroProof">
              <div className="heroProofItem">✅ Agendamento com hora marcada</div>
              <div className="heroProofItem">✅ Produtos profissionais</div>
              <div className="heroProofItem">✅ Garantia por escrito*</div>
            </div>

            <div className="heroBtns">
              <a className="heroCta" href={wa(msg)} target="_blank" rel="noreferrer">SOLICITAR ORÇAMENTO</a>
              <a className="heroCtaGhost" href={`tel:${TEL}`}>📞 {TEL_VIEW}</a>
            </div>

            <p className="heroFineprint">
              *Garantia de 1 a 5 anos conforme o serviço contratado e condições do ambiente avaliadas na vistoria.
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="wrap" aria-label="Diferenciais">
        <div className="card">
          <div className="content">
            <div className="tag">CREDIBILIDADE</div>
            <h2 className="h2">Padrão de atendimento que transmite segurança</h2>

            <div className="grid3">
              <div className="miniCard">
                <div className="miniTitle">Atendimento 24h</div>
                <p className="miniText">Chamou, respondeu. Priorizamos urgências e agendamos rápido.</p>
              </div>

              <div className="miniCard">
                <div className="miniTitle">Nota Fiscal e relatório</div>
                <p className="miniText">Serviço documentado com orientação e registro do atendimento.</p>
              </div>

              <div className="miniCard">
                <div className="miniTitle">Garantia por escrito</div>
                <p className="miniText">Garantia de 1 a 5 anos conforme o tipo de tratamento contratado.</p>
              </div>
            </div>

            <div className="twoCtas">
              <a className="ctaBig" href={wa(msg)} target="_blank" rel="noreferrer">💬 Falar com um técnico</a>
              <a className="ctaSoft" href="#servicos">Ver serviços</a>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="wrap" aria-label="Como funciona">
        <div className="card">
          <div className="content">
            <div className="tag">COMO FUNCIONA</div>
            <h2 className="h2">Processo simples, com suporte do início ao fim</h2>

            <div className="steps">
              <div className="step">
                <div className="stepN">1</div>
                <div>
                  <div className="stepT">Contato e diagnóstico</div>
                  <p className="stepD">Você informa a praga e o local. Foto/vídeo ajuda a fechar o melhor tratamento.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepN">2</div>
                <div>
                  <div className="stepT">Orçamento e agendamento</div>
                  <p className="stepD">Passamos valores e marcamos a visita no melhor dia/horário.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepN">3</div>
                <div>
                  <div className="stepT">Aplicação técnica</div>
                  <p className="stepD">Execução segura, com instruções de reentrada e cuidados pós-serviço.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepN">4</div>
                <div>
                  <div className="stepT">Garantia e suporte</div>
                  <p className="stepD">Você recebe documentação e suporte para dúvidas conforme o serviço.</p>
                </div>
              </div>
            </div>

            <a className="ctaBig" href={wa(msg)} target="_blank" rel="noreferrer">💬 Quero orçamento agora</a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="wrap" aria-label="Serviços">
        <div className="sectionHead">
          <div className="tag">SERVIÇOS</div>
          <h2 className="h2">Tratamentos mais procurados</h2>
          <p className="text">
            Selecione a praga e fale conosco. Indicamos o melhor tratamento conforme a infestação e o ambiente.
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
                  <a
                    className="ctaBig"
                    href={wa(`Olá! Quero orçamento para ${s.t}.\n\n${msg}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    💬 Orçar {s.t}
                  </a>
                  <a className="ctaSoft" href="#como-funciona">Como funciona</a>
                </div>
              </div>
            </div>
          ))}
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
              <a className="ctaBig" href={ROTA} target="_blank" rel="noreferrer">🧭 Como chegar</a>
              <a className="ctaSoft" href={MAPS} target="_blank" rel="noreferrer">📍 Abrir no Google Maps</a>
            </div>

            <div className="trustNote">
              Atendimento 24h • Garantia 1 a 5 anos* • Nota Fiscal • Relatório técnico
            </div>

            <p className="heroFineprint" style={{ color: "#6b7280" }}>
              *A garantia varia conforme o serviço contratado e as condições do ambiente.
            </p>
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
        <a className="mobileBtnSoft" href={`tel:${TEL}`}>📞 Ligar</a>
        <a className="mobileBtnSoft" href={INSTAGRAM} target="_blank" rel="noreferrer">📷 Insta</a>
        <a className="mobileBtnSoft" href={ROTA} target="_blank" rel="noreferrer">🧭 Rota</a>
      </div>
    </div>
  );
 }
