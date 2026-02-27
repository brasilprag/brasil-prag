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

// ✅ Seus dados do rodapé
const ENDERECO = "Av. Paulista, 1471 - Bela Vista - São Paulo - SP";
const EMAIL = "BrasilPragDedetizadora@gmail.com";
const CNPJ = "65.332.311/0001-01";
const DESDE = "2019";
const ATENDIMENTO = "Atendimento 24hrs";

const MAP = `https://www.google.com/maps?q=${encodeURIComponent(
  ENDERECO
)}&output=embed`;

const ROTA = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ENDERECO
)}`;

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
    "Baratas espalham ootecas (ovos) pelo local. Nosso tratamento tem efeito de choque que elimina as adultas e ação residual com barreira química. Também inibe o crescimento das ovas, evitando que cheguem à fase adulta. Garantia de 1 ano.",
  Cupins:
    "Tratamento com efeito dominó: o produto se espalha pela colônia, contaminando todos até atingir a rainha. Forma barreira química duradoura contra reinfestação. Garantia de 5 anos.",
  Percevejos:
    "Aplicação técnica em áreas de abrigo e circulação, com efeito de choque e ação residual para interromper o ciclo da infestação. Barreira química preventiva. Garantia de 1 ano.",
  "Escorpiões":
    "Tratamento direcionado em ralos, frestas e perímetro com ação residual e barreira química, reduzindo abrigo e circulação. Ajuda a controlar insetos que servem de alimento. Garantia de 1 ano.",
  Pombos:
    "Controle e manejo com medidas preventivas e barreiras, reduzindo pouso e permanência em áreas críticas. Solução segura e eficaz. Garantia de 1 ano.",
  Morcegos:
    "Serviço técnico com exclusão e vedação de acessos, evitando reentrada com segurança. Orientações para correção de pontos de abrigo conforme necessidade. Garantia de 1 ano.",
  Pulgas:
    "Aplicação com efeito de choque e ação residual para quebrar o ciclo de reinfestação. A barreira química reduz o risco de retorno. Garantia de 1 ano.",
  Carrapatos:
    "Tratamento em áreas de circulação e focos com ação de choque e residual. Cria barreira química preventiva e reduz reinfestação. Garantia de 1 ano.",
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
      {/* ✅ BOTÕES FLUTUANTES (MEIO DIREITA, VERTICAL) */}
      <div className="floatingButtons" aria-label="Atalhos flutuantes">
        <a
          className="floatingBtn"
          href={wa(msg)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.33-1.67a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.41Zm-8.46 18.22h-.01a9.89 9.89 0 0 1-5.04-1.38l-.36-.21-3.75.99 1-3.66-.23-.38a9.87 9.87 0 0 1-1.5-5.26c0-5.45 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Zm5.76-7.72c-.31-.16-1.84-.91-2.12-1.02-.28-.1-.49-.16-.7.16-.2.31-.8 1.02-.98 1.23-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.13-.64.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.31-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.08-.8.39-.28.31-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.16.2 2.12 3.25 5.13 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.84-.75 2.1-1.47.26-.72.26-1.33.18-1.47-.08-.14-.28-.23-.6-.39Z" />
          </svg>
        </a>

        <a
          className="floatingBtn"
          href={ROTA}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Maps"
          title="Maps"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
          </svg>
        </a>

        <a
          className="floatingBtn"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 12 5.51 5.51 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 10.5ZM18 6.8a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 6.8Z" />
          </svg>
        </a>
      </div>

      {/* MARCA FIXA - topo esquerdo */}
      <a href="#topo" className="brandFixed" aria-label="Voltar ao topo">
        <img src={logo} alt="BrasilPrag" className="brandLogo" />
        <div className="brandText">
          <div className="brandName">{EMPRESA}</div>
          <div className="brandSub">{SUBTITULO}</div>
        </div>
      </a>

      {/* AÇÕES FIXAS - topo direito */}
      <div className="actionsFixed" aria-label="Ações rápidas">
        <div className="actionsRow">
          <a className="btnGlass" href="#servicos">
            Serviços
          </a>
          <a className="btnGlass" href="#como">
            Como Funciona
          </a>
          <a className="btnGlass" href="#localizacao">
            Localização
          </a>
          <a
            className="btnGlass"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="btnGlassPrimary"
            href={wa(msg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="actionsIcons">
          <a
            className="iconGlass"
            href={wa(msg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            title="WhatsApp"
          >
            💬
          </a>

          <a
            className="iconGlass"
            href={ROTA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir rota no Maps"
            title="Como chegar"
          >
            🧭
          </a>

          <a
            className="iconGlass"
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
        <div className="heroOverlay" />
        <div className="heroInner">
          <div className="heroLeft">
            <div className="heroTag">ATENDIMENTO 24H</div>

            <h1 className="heroTitle">
              DEDETIZAÇÃO <br />
              <span>PROFISSIONAL</span>
            </h1>

            {/* ✅ (A) TEXTO ATUALIZADO */}
            <p className="heroDesc">
              Dedetização com atendimento ágil e seguro, com chegada em até 20
              minutos e liberação do local em apenas 1 hora. Eliminação eficaz de
              pragas sem odores, com nota fiscal, laudo técnico, garantia de 1 a
              5 anos e opção de parcelamento no cartão de crédito.
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

              {/* ✅ (B) TELEFONE REMOVIDO DO HERO (vai pro rodapé) */}
              {/* <a className="heroCtaGhost" href={`tel:${TEL}`}>📞 {TEL_VIEW}</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como" className="wrap">
        <div className="card glassCard">
          <div className="content">
            <div className="tag">COMO FUNCIONA</div>
            <h2 className="h2">Processo rápido e seguro</h2>
            <p className="sectionSub">
              Atendimento ágil, aplicação segura e garantia por escrito.
            </p>

            <div className="steps">
              <div className="step">
                <div className="stepN">1</div>
                Contato e diagnóstico
              </div>
              <div className="step">
                <div className="stepN">2</div>
                Orçamento rápido
              </div>
              <div className="step">
                <div className="stepN">3</div>
                Aplicação profissional
              </div>
              <div className="step">
                <div className="stepN">4</div>
                Garantia e suporte
              </div>
            </div>

            <div className="miniCtas">
              <a className="glassMini" href="#servicos">
                Ver serviços
              </a>
              <a
                className="glassMini"
                href={wa(msg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tirar dúvidas no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="wrap">
        <div className="sectionHeader">
          <h2 className="h2">Serviços</h2>
          <p className="sectionSub">
            Tratamento profissional com barreira química e garantia.
          </p>
        </div>

        <div className="servicesGrid">
          {services.map((s, i) => (
            <div key={i} className="serviceCard glassCard">
              <div className="serviceImgWrap">
                <img src={s.i} alt={s.t} className="serviceImg" />
                <div className="imgShine" />
              </div>

              <div className="serviceBody">
                <h3 className="serviceTitle">{s.t}</h3>

                <p className="serviceDescText">
                  {serviceDesc[s.t] ??
                    "Tratamento profissional com efeito de choque, ação residual e barreira química para evitar o retorno. Garantia de 1 ano."}
                </p>

                <div className="serviceActions">
                  <a
                    className="glassCta"
                    href={wa(
                      `Olá! Quero orçamento para ${s.t}.\n📍 Bairro:\n🏠 Tipo de local:\n`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Orçar agora
                  </a>
                  <a className="glassMini" href="#como">
                    Ver processo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="wrap pb120">
        <div className="card glassCard">
          <div className="content">
            <div className="tag">LOCALIZAÇÃO</div>
            <h2 className="h2">Atendimento em São Paulo e ABC</h2>
            <p className="sectionSub">{ENDERECO}</p>

            <div className="mapWrap">
              <iframe
                src={MAP}
                className="mapIframe"
                title="Mapa - BrasilPrag"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="mapBtns">
              <a
                className="glassCta"
                href={ROTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                Como Chegar
              </a>

              <a
                className="glassMini"
                href={wa(msg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ RODAPÉ */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <img src={logo} alt="BrasilPrag" className="footerLogo" />
            <div>
              <div className="footerTitle">{EMPRESA}</div>
              <div className="footerSub">{SUBTITULO}</div>
            </div>
          </div>

          <div className="footerGrid">
            <div className="footerCol">
              <div className="footerLabel">Contato</div>
              <a className="footerLink" href={`tel:${TEL}`}>
                📞 {TEL_VIEW}
              </a>
              <a className="footerLink" href={`mailto:${EMAIL}`}>
                ✉️ {EMAIL}
              </a>
            </div>

            <div className="footerCol">
              <div className="footerLabel">Atendimento</div>
              <div className="footerText">🕒 {ATENDIMENTO}</div>
              <div className="footerText">📄 CNPJ: {CNPJ}</div>
              <div className="footerText">🏆 Desde {DESDE}</div>
            </div>

            <div className="footerCol">
              <div className="footerLabel">Endereço</div>
              <div className="footerText">📍 {ENDERECO}</div>
              <a
                className="footerLink"
                href={ROTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                🧭 Ver rota no Maps
              </a>
            </div>
          </div>

          <div className="footerBottom">
            © {new Date().getFullYear()} {EMPRESA}
          </div>
        </div>
      </footer>
    </div>
  );
}
