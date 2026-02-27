import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { EMPRESA, SUBTITULO, wa } from "../App";

type CityInfo = {
  city: string;
  title: string;
  description: string;
  h1: string;
};

const CITY_MAP: Record<string, CityInfo> = {
  "dedetizacao-santo-andre": {
    city: "Santo André",
    title: "Dedetização em Santo André | BrasilPrag Dedetizadora",
    description:
      "Dedetização em Santo André com atendimento 24h. Controle de pragas com garantia, nota fiscal e laudo técnico.",
    h1: "Dedetização em Santo André com Garantia de até 5 anos",
  },
  "dedetizacao-sao-bernardo": {
    city: "São Bernardo do Campo",
    title: "Dedetização em São Bernardo | BrasilPrag Dedetizadora",
    description:
      "Dedetização em São Bernardo com atendimento 24h. Controle de pragas com garantia, nota fiscal e laudo técnico.",
    h1: "Dedetização em São Bernardo com Garantia de até 5 anos",
  },
  "dedetizacao-sao-caetano": {
    city: "São Caetano do Sul",
    title: "Dedetização em São Caetano | BrasilPrag Dedetizadora",
    description:
      "Dedetização em São Caetano com atendimento 24h. Controle de pragas com garantia, nota fiscal e laudo técnico.",
    h1: "Dedetização em São Caetano com Garantia de até 5 anos",
  },
};

function getCityInfo(slug: string): CityInfo | null {
  return CITY_MAP[slug] ?? null;
}

export default function CityPage({ slug }: { slug: string }) {
  const info = useMemo(() => getCityInfo(slug), [slug]);

  useEffect(() => {
    if (!info) return;

    document.title = info.title;
    setMetaDescription(info.description);
  }, [info]);

  // Se alguém entrar numa rota que não existe, manda de volta pra Home
  if (!info) {
    return (
      <div className="page">
        <div className="wrap">
          <div className="card glassCard">
            <div className="content">
              <div className="tag">{EMPRESA}</div>
              <h1 className="h2" style={{ marginTop: 10 }}>
                Página não encontrada
              </h1>
              <p className="sectionSub">
                Volte para a página principal e solicite um orçamento.
              </p>

              <div className="mapBtns" style={{ marginTop: 14 }}>
                <Link className="glassCta" to="/">
                  Ir para o site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const msg =
    `Olá! Quero um orçamento de dedetização em ${info.city}.\n` +
    "📍 Bairro:\n" +
    "🏠 Tipo de local:\n" +
    "🐜 Praga:\n";

  return (
    <div className="page">
      <div className="wrap">
        <div className="card glassCard">
          <div className="content">
            <div className="tag">ATENDIMENTO 24H</div>

            <h1 className="h2" style={{ marginTop: 10 }}>
              {info.h1}
            </h1>

            <p className="sectionSub" style={{ marginTop: 10 }}>
              {EMPRESA} — {SUBTITULO}. Atendimento em <strong>{info.city}</strong>{" "}
              com produtos seguros, <strong>nota fiscal</strong> e{" "}
              <strong>laudo técnico</strong>. Garantia de 1 a 5 anos conforme o
              serviço.
            </p>

            <ul style={{ marginTop: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.86)" }}>
              <li>Controle de baratas, ratos, formigas, cupins, escorpiões e mais</li>
              <li>Atendimento rápido na região</li>
              <li>Aplicação profissional e segura</li>
            </ul>

            <div className="mapBtns" style={{ marginTop: 16 }}>
              <a
                className="glassCta"
                href={wa(msg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento no WhatsApp
              </a>

              <Link className="glassMini" to="/" style={{ textAlign: "center" }}>
                Voltar para o site
              </Link>
            </div>

            {/* Links extras prontos pra SEO (você pode criar mais depois) */}
            <div style={{ marginTop: 18 }}>
              <p className="sectionSub" style={{ marginBottom: 8 }}>
                Outras regiões:
              </p>
              <div className="miniCtas">
                <Link className="glassMini" to="/dedetizacao-santo-andre">
                  Santo André
                </Link>
                <Link className="glassMini" to="/dedetizacao-sao-bernardo">
                  São Bernardo
                </Link>
                <Link className="glassMini" to="/dedetizacao-sao-caetano">
                  São Caetano
                </Link>
              </div>
            </div>

            {/* Se você quiser, depois a gente adiciona FAQ com perguntas e respostas (ajuda no Google). */}
          </div>
        </div>
      </div>

      {/* OBS: os botões 💬🧭📷 já ficam na lateral via App.tsx */}
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
