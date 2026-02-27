import { useEffect, useMemo } from "react";
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
} from "../siteData";

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
  }, []);

  return (
    <div className="page">
      <section
        id="topo"
        className="hero"
        style={{ backgroundImage: `url(${BANNER})` }}
      >
        <div className="heroInner">
          <div className="heroLeft">
            <h1 className="heroTitle">
              DEDETIZAÇÃO <br />
              <span>PROFISSIONAL</span>
            </h1>

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

      <section id="servicos" className="wrap">
        <div className="servicesGrid">
          {services.map((s, i) => (
            <div key={i} className="serviceCard glassCard">
              <div className="serviceBody">
                <h3>{s.t}</h3>

                <p>{serviceDesc[s.t]}</p>

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
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="localizacao" className="wrap">
        <p>{ENDERECO}</p>

        <iframe
          src={MAP}
          className="mapIframe"
          title="Mapa"
          loading="lazy"
        />

        <a
          className="glassCta"
          href={ROTA}
          target="_blank"
          rel="noopener noreferrer"
        >
          Como Chegar
        </a>
      </section>
    </div>
  );
              }
