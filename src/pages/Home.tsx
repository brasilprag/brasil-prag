import { useEffect, useMemo } from "react";
import logo from "../logo.png";

import {
  EMPRESA,
  SUBTITULO,
  INSTAGRAM,
  TEL,
  TEL_VIEW,
  BANNER,
  ENDERECO,
  MAP,
  ROTA,
  wa,
  services,
  serviceDesc,
} from "../App";

export default function Home() {
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
    setMetaDescription(
      "Dedetização em São Paulo e ABC com atendimento 24h. Controle de pragas com garantia, nota fiscal e laudo técnico."
    );
  }, []);

  return (
    <div className="page">
      <a href="#topo" className="brandFixed" aria-label="Voltar ao topo">
        <img src={logo} alt="BrasilPrag" className="brandLogo" />
        <div className="brandText">
          <div className="brandName">{EMPRESA}</div>
          <div className="brandSub">{SUBTITULO}</div>
        </div>
      </a>

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
      </div>

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
    </div>
  );
}

function setMetaDescription(content: string) {
  let meta = document.querySelector(
    'meta[name="description"]'
  ) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }

  meta.content = content;
}
