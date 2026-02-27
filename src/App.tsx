import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import logo from "./logo.png";

// ✅ REMOVIDO: bgHero (não vamos mais usar fundo blur)
// import bgHero from "./assets/bg.jpg";

// ✅ Pragas / serviços (SEM mosquito/formiga/aranha)
import imgRato from "./assets/rato.jpg";
import imgBarata from "./assets/barata.jpg";
import imgPercevejo from "./assets/percevejo.jpg";
import imgCupim from "./assets/cupim.jpg";
import imgEscorpiao from "./assets/escorpiao.jpg";
import imgPombo from "./assets/pombo.jpg";
import imgMorcego from "./assets/morcego.jpg";
import imgPulga from "./assets/pulga.jpg";
import imgCarrapato from "./assets/carrapato.jpg";

type Service = {
  id: string;
  tag: string;
  title: string;
  image: string;
  text: string;
  disease: string;
  waMessage: string;
};

const EMPRESA = "BrasilPrag Dedetizadora";
const SUBTITULO = "Atendimento em toda São Paulo e ABC";
const CNPJ = "65.332.311/0001-01";

const WHATSAPP_NUMBER = "5511932782539";
const TEL_NUMBER_DISPLAY = "(11) 93278-2539";
const TEL_NUMBER_LINK = "+5511932782539";
const INSTAGRAM_URL = "https://www.instagram.com/brasilprag/";

// ✅ Banner completo que você já subiu (ajuste se seu caminho for outro)
const BANNER_SRC = "/assets/banner-topo.png";

// ✅ Localização fixa (Google)
const ENDERECO = "Av. Paulista, 1471 - São Paulo - SP";
const MAPS_DESTINO = "Av.+Paulista,+1471,+S%C3%A3o+Paulo+-+SP";
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_DESTINO}`;
const MAPS_PLACE_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_DESTINO}`;
// iframe sem API key:
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ENDERECO
)}&output=embed`;

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, seen };
}

export default function App() {
  const baseMessage = useMemo(
    () => `Olá! Quero um orçamento com a ${EMPRESA}. Atendimento em São Paulo/ABC.`,
    []
  );

  // ✅ SEO básico (título + description) sem biblioteca
  useEffect(() => {
    document.title = "BrasilPrag Dedetizadora em São Paulo | Atendimento rápido";
    const desc =
      "BrasilPrag Dedetizadora em São Paulo e ABC. Chegamos a partir de 20 minutos, retorno em 1 hora, sem cheiro. Preço justo, 1 ano de garantia e parcelamento.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
  }, []);

  const services: Service[] = useMemo(
    () => [
      {
        id: "desratizacao",
        tag: "DESRATIZAÇÃO",
        title: "Chega de ratos e camundongos",
        image: imgRato,
        text:
          "Infestações de roedores podem causar danos e contaminação de alimentos. Aplicamos tratamento seguro e eficiente.",
        disease:
          "⚠️ Podem transmitir doenças como leptospirose através da urina e fezes.",
        waMessage:
          "Olá! Quero orçamento para DESRATIZAÇÃO (ratos/camundongos) em São Paulo/ABC. Pode me atender?",
      },
      {
        id: "dedetizacao-baratas",
        tag: "DEDETIZAÇÃO",
        title: "Baratas: eliminação rápida e sem cheiro",
        image: imgBarata,
        text:
          "Tratamento direcionado para eliminar focos e reduzir o retorno. Ideal para casas, apartamentos, comércios e condomínios.",
        disease:
          "⚠️ Podem contaminar superfícies e alimentos, aumentando risco de problemas gastrointestinais.",
        waMessage:
          "Olá! Quero orçamento para DEDETIZAÇÃO contra BARATAS em São Paulo/ABC. Pode me atender?",
      },
      {
        id: "percevejo-cama",
        tag: "CONTROLE DE PERCEVEJO DE CAMA",
        title: "Sem mais picadas e noites ruins",
        image: imgPercevejo,
        text:
          "Percevejos se escondem em colchões, rodapés e frestas. Controlamos a infestação e orientamos para evitar reinfestações.",
        disease:
          "ℹ️ Geralmente não são considerados transmissores de doenças, mas causam coceira, alergias e estresse.",
        waMessage:
          "Olá! Quero orçamento para CONTROLE DE PERCEVEJO DE CAMA em São Paulo/ABC. Pode me atender?",
      },
      {
        id: "cupins",
        tag: "DESCUPINIZAÇÃO",
        title: "Cupim de solo: eliminação da colônia",
        image: imgCupim,
        text:
          "Cupins de solo podem destruir madeira e estruturas silenciosamente. Tratamento profissional para eliminar a colônia e proteger o ambiente.",
        disease:
          "⚠️ Não transmitem doenças, mas causam grandes prejuízos estruturais em imóveis.",
        waMessage:
          "Olá! Quero orçamento para DESCUPINIZAÇÃO (cupim de solo) em São Paulo/ABC. Pode me atender?",
      },
      {
        id: "escorpioes",
        tag: "CONTROLE DE ESCORPIÕES",
        title: "Escorpiões: atenção máxima",
        image: imgEscorpiao,
        text:
          "Controle do ambiente, orientação de manejo e redução de abrigos. Atuação rápida e preventiva.",
        disease:
          "⚠️ Podem causar acidentes graves. A prevenção e o controle do ambiente são essenciais.",
        waMessage:
          "Olá! Quero orçamento para CONTROLE DE ESCORPIÕES em São Paulo/ABC. Pode me atender?",
      },
      {
        id: "pombos",
        tag: "MANEJO DE POMBOS",
        title: "Controle e manejo de pombos",
        image: imgPombo,
        text:
          "Soluções para reduzir pouso e permanência, com limpeza/orientação e medidas de exclusão.",
        disease:
          "⚠️ Fezes podem contaminar áreas e trazer riscos à saúde. Controle é importante.",
        waMessage:
          "Olá! Quero orçamento para CONTROLE/MANEJO DE POMBOS em São Paulo/ABC. Pode me atender?",
      },
      {
        id: "morcegos",
        tag: "MANEJO DE MORCEGOS",
        title: "Morcegos: controle com segurança",
        image: imgMorcego,
        text:
          "Medidas de exclusão e orientação para reduzir acesso e permanência, com foco em segurança do local.",
        disease:
          "⚠️ Podem representar risco (ex.: raiva). É essencial manejo correto e seguro.",
        waMessage:
          "Olá! Quero orçamento para MANEJO/CONTROLE DE MORCEGOS em São Paulo/ABC. Pode me atender?",
      },
      {
        id: "pulgas",
        tag: "CONTROLE DE PULGAS",
        title: "Pulgas: controle para casa e pets",
        image: imgPulga,
        text:
          "Pulgas se multiplicam rápido. Tratamos o ambiente e orientamos cuidados para quebrar o ciclo (ovo/larva/adulto).",
        disease:
          "⚠️ Podem causar alergias e, em alguns casos, transmitir doenças. Quanto antes tratar, melhor.",
        waMessage:
          "Olá! Quero orçamento para CONTROLE DE PULGAS em São Paulo/ABC. Pode me atender?",
      },
      {
        id: "carrapatos",
        tag: "CONTROLE DE CARRAPATOS",
        title: "Carrapatos: atenção redobrada",
        image: imgCarrapato,
        text:
          "Controle do ambiente e orientação preventiva, especialmente em áreas com pets e quintais.",
        disease:
          "⚠️ Podem transmitir doenças. Em áreas infestadas, o controle é essencial.",
        waMessage:
          "Olá! Quero orçamento para CONTROLE DE CARRAPATOS em São Paulo/ABC. Pode me atender?",
      },
    ],
    []
  );

  // ✅ Schema LocalBusiness (ajuda SEO local)
  const jsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: EMPRESA,
      url: typeof window !== "undefined" ? window.location.origin : undefined,
      telephone: TEL_NUMBER_LINK,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Paulista, 1471",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      areaServed: [
        "São Paulo - SP",
        "ABC Paulista",
        "Santo André",
        "São Bernardo do Campo",
        "São Caetano do Sul",
        "Diadema",
        "Mauá",
      ],
      sameAs: [INSTAGRAM_URL],
    };
  }, []);

  return (
    <div style={S.page}>
      {/* ✅ JSON-LD sem biblioteca */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ HEADER (menu novo) */}
      <header style={S.topbar}>
        <div style={S.topbarInner}>
          <a href="#topo" style={S.brand}>
            <img src={logo} alt="BrasilPrag" style={S.brandLogo} />
            <div>
              <div style={S.brandName}>{EMPRESA}</div>
              <div style={S.brandSub}>{SUBTITULO}</div>
            </div>
          </a>

          <nav style={S.actions}>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.btnOutline}>
              📷 Instagram
            </a>
            <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer" style={S.btnOutline}>
              🧭 Como chegar
            </a>
            <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.btnPrimary}>
              💬 WhatsApp
            </a>
            <a href="#orcamento" style={S.btnOutline}>
              🧾 Orçamento
            </a>
          </nav>
        </div>
      </header>

      {/* ✅ HERO: Banner completo (imagem) + botões funcionais por cima */}
      <section id="topo" style={S.wrap}>
        <div style={S.bannerCard} className="fadeUp">
          <img src={BANNER_SRC} alt="BrasilPrag Dedetizadora" style={S.bannerImg} />

          {/* Botão WhatsApp no canto superior direito (funcional) */}
          <a
            href={waLink(baseMessage)}
            target="_blank"
            rel="noreferrer"
            style={S.bannerTopRightBtn}
            aria-label="Chamar no WhatsApp"
          >
            💬 WhatsApp
          </a>

          {/* Botão “Fale Conosco Agora” (funcional) — ajuste as coordenadas se quiser */}
          <a
            href={waLink(baseMessage)}
            target="_blank"
            rel="noreferrer"
            style={S.bannerMainCta}
          >
            FALE CONOSCO AGORA
          </a>
        </div>
      </section>

      {/* ✅ ORÇAMENTO NA MESMA PÁGINA */}
      <section id="orcamento" style={S.wrap}>
        <div style={S.sectionCard} className="fadeUp">
          <div style={S.content}>
            <div style={S.smallTag}>ORÇAMENTO</div>
            <div style={S.titleBig}>Solicite seu orçamento agora</div>
            <div style={S.text}>
              Atendimento rápido em São Paulo e ABC. Clique no WhatsApp e informe o tipo de praga e o local.
            </div>

            <div style={S.orcamentoBtns}>
              <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.ctaBig}>
                💬 Pedir orçamento no WhatsApp
              </a>
              <a href={`tel:${TEL_NUMBER_LINK}`} style={S.ctaSoft}>
                📞 {TEL_NUMBER_DISPLAY}
              </a>
            </div>

            <div style={S.heroNote}>
              ✅ SP + ABC • CNPJ {CNPJ} • Retorno rápido • Sem cheiro • Preço justo
            </div>
          </div>
        </div>
      </section>

      {services.map((s) => (
        <ServiceSection key={s.id} service={s} />
      ))}

      <section style={{ ...S.wrap, paddingBottom: 40 }}>
        <div style={S.sectionCard} className="fadeUp">
          <div style={S.content}>
            <div style={S.smallTag}>ANTES E DEPOIS</div>
            <div style={S.titleBig}>Resultados e segurança</div>
            <div style={S.text}>
              Quer ver exemplos reais de antes e depois? A gente te envia no WhatsApp.
            </div>

            <div style={S.beforeAfterGrid}>
              <div style={S.beforeBox}>
                <div style={S.baLabel}>ANTES</div>
              </div>
              <div style={S.afterBox}>
                <div style={S.baLabel}>DEPOIS</div>
              </div>
            </div>

            <a
              href={waLink(`Olá! Pode me enviar exemplos de ANTES e DEPOIS da ${EMPRESA}?`)}
              target="_blank"
              rel="noreferrer"
              style={S.ctaBig}
            >
              💬 Pedir Antes e Depois no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ✅ MAPA MOVIDO PARA O FINAL */}
      <section id="localizacao" style={{ ...S.wrap, paddingBottom: 120 }}>
        <div style={S.sectionCard} className="fadeUp">
          <div style={S.content}>
            <div style={S.smallTag}>LOCALIZAÇÃO</div>
            <div style={S.titleBig}>Dedetizadora em São Paulo (SP)</div>
            <div style={S.text}>
              Endereço: <strong>{ENDERECO}</strong>
              <br />
              Se você buscou <strong>“dedetizadora perto de mim”</strong>, fale com a BrasilPrag:
              atendimento rápido em São Paulo e região do ABC.
            </div>

            <div style={S.mapWrap}>
              <iframe
                title="Mapa BrasilPrag - Av Paulista 1471"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={S.mapIframe}
              />
            </div>

            <div style={S.mapBtns}>
              <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer" style={S.ctaBig}>
                🧭 Como chegar
              </a>
              <a href={MAPS_PLACE_URL} target="_blank" rel="noreferrer" style={S.ctaSoft}>
                📍 Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <div style={S.mobileBar}>
        <a href={`tel:${TEL_NUMBER_LINK}`} style={S.mobileBtnSoft}>
          📞 Ligar
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.mobileBtnSoft}>
          📷 Insta
        </a>
        <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer" style={S.mobileBtnSoft}>
          🧭 Rota
        </a>
      </div>

      <style>{css}</style>
    </div>
  );
}

function ServiceSection({ service }: { service: Service }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.12);

  return (
    <section style={S.wrap}>
      <div
        ref={ref}
        style={{
          ...S.sectionCard,
          opacity: seen ? 1 : 0,
          transform: seen ? "translateY(0)" : "translateY(10px)",
        }}
      >
        <div style={S.imageWrap}>
          <img src={service.image} alt={service.title} style={S.heroImg} />
          <div style={S.imageFade} />
        </div>

        <div style={S.content}>
          <div style={S.smallTag}>{service.tag}</div>
          <div style={S.titleBig}>{service.title}</div>
          <div style={S.text}>{service.text}</div>

          <div style={S.disease}>{service.disease}</div>

          <a href={waLink(service.waMessage)} target="_blank" rel="noreferrer" style={S.ctaBig}>
            Atendimento via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#0b1220",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
  },

  topbar: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.90)",
    borderBottom: "1px solid rgba(2,6,23,0.08)",
    backdropFilter: "blur(10px)",
  },
  topbarInner: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "10px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  brand: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
  },
  brandLogo: { width: 44, height: 44, borderRadius: 14, objectFit: "cover" },
  brandName: { fontWeight: 950, fontSize: 14, lineHeight: 1.05 },
  brandSub: { fontSize: 11, color: "rgba(11,18,32,0.65)" },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  btnOutline: {
    padding: "10px 12px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 950,
    border: "1px solid rgba(2,6,23,0.12)",
    color: "#0b1220",
    background: "#fff",
    fontSize: 13,
  },
  btnPrimary: {
    padding: "10px 12px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 950,
    border: "1px solid rgba(34,197,94,0.30)",
    color: "#062415",
    background: "#22c55e",
    fontSize: 13,
    boxShadow: "0 14px 30px rgba(34,197,94,0.16)",
  },

  wrap: { maxWidth: 980, margin: "0 auto", padding: "14px 12px" },

  // ✅ Banner card
  bannerCard: {
    borderRadius: 22,
    border: "1px solid rgba(2,6,23,0.08)",
    background: "#fff",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 14px 45px rgba(2,6,23,0.08)",
  },
  bannerImg: { width: "100%", height: "auto", display: "block" },

  // ✅ Botão WhatsApp no topo direito (overlay)
  bannerTopRightBtn: {
    position: "absolute",
    right: 14,
    top: 14,
    padding: "10px 12px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 950,
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#062415",
    background: "#22c55e",
    boxShadow: "0 14px 30px rgba(34,197,94,0.16)",
  },

  // ✅ Botão principal em cima do banner (coordenadas ajustáveis)
  // Se quiser “encaixar” exatamente em cima do botão desenhado na imagem,
  // é só mexer em left/top/transform.
  bannerMainCta: {
    position: "absolute",
    left: "10%",
    top: "58%",
    transform: "translateY(-50%)",
    padding: "14px 18px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 950,
    color: "#ffffff",
    background: "rgba(230,126,34,0.95)",
    border: "1px solid rgba(0,0,0,0.10)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
    letterSpacing: 0.2,
  },

  sectionCard: {
    borderRadius: 22,
    border: "1px solid rgba(2,6,23,0.08)",
    background: "#fff",
    overflow: "hidden",
    transition: "opacity 360ms ease, transform 360ms ease",
    boxShadow: "0 14px 45px rgba(2,6,23,0.08)",
  },

  imageWrap: { width: "100%", background: "#f3f4f6", position: "relative" },
  heroImg: { width: "100%", height: 260, objectFit: "cover", display: "block" },
  imageFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    background: "linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,1))",
  },

  content: { padding: 14 },
  smallTag: {
    color: "#22c55e",
    fontWeight: 950,
    letterSpacing: 1,
    fontSize: 13,
    textTransform: "uppercase",
  },
  titleBig: {
    marginTop: 6,
    fontSize: 30,
    fontWeight: 950,
    letterSpacing: -0.4,
    lineHeight: 1.05,
  },
  text: { marginTop: 10, color: "rgba(11,18,32,0.75)", lineHeight: 1.75, fontSize: 16 },
  disease: {
    marginTop: 10,
    padding: 12,
    borderRadius: 16,
    border: "1px solid rgba(2,6,23,0.08)",
    background: "rgba(2,6,23,0.02)",
    fontWeight: 900,
    color: "rgba(11,18,32,0.80)",
    lineHeight: 1.5,
  },

  ctaBig: {
    display: "block",
    textAlign: "left",
    padding: "16px 16px",
    borderRadius: 18,
    background: "#22c55e",
    color: "#062415",
    border: "1px solid rgba(34,197,94,0.35)",
    textDecoration: "none",
    fontWeight: 950,
    fontSize: 
