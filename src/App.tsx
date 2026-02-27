import { useEffect, useMemo } from "react";
import "./App.css";
import logo from "./logo.png";

const EMPRESA = "BrasilPrag Dedetizadora";
const SUBTITULO = "Atendimento em toda São Paulo e ABC";

const WHATSAPP = "5511932782539";
const INSTAGRAM = "https://www.instagram.com/brasilprag/";
const TEL = "+5511932782539";
const TEL_VIEW = "(11) 93278-2539";

const ENDERECO = "Av. Paulista, 1471 - Bela Vista - São Paulo - SP";

const ROTA = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ENDERECO
)}`;

function wa(msg: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

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
      {/* ================= BOTÕES FLUTUANTES ================= */}
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
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.33-1.67a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.41Z" />
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
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" />
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
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
          </svg>
        </a>
      </div>

      {/* ================= HERO ================= */}
      <section className="hero" id="topo">
        <div className="heroInner">
          <div className="heroLeft">
            <h1 className="heroTitle">
              DEDETIZAÇÃO <br />
              <span>PROFISSIONAL</span>
            </h1>

            <p className="heroDesc">
              Dedetização com atendimento ágil e seguro, com chegada em até 20
              minutos e liberação do local em apenas 1 hora. Eliminação eficaz
              de pragas sem odores, com nota fiscal, laudo técnico, garantia de
              1 a 5 anos e opção de parcelamento no cartão de crédito.
            </p>

            <a
              className="heroCta"
              href={wa(msg)}
              target="_blank"
              rel="noopener noreferrer"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <img src={logo} className="footerLogo" alt="BrasilPrag" />
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
              <a
                className="footerLink"
                href="mailto:BrasilPragDedetizadora@gmail.com"
              >
                ✉️ BrasilPragDedetizadora@gmail.com
              </a>
            </div>

            <div className="footerCol">
              <div className="footerLabel">Atendimento</div>
              <div className="footerText">🕒 Atendimento 24hrs</div>
              <div className="footerText">📄 CNPJ: 65.332.311/0001-01</div>
              <div className="footerText">🏆 Desde 2019</div>
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
