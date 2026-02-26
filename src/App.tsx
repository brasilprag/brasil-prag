import React, { useMemo, useState } from "react";
import "./App.css";

type TipoImovel = "Apartamento" | "Casa" | "Comércio" | "Condomínio";
type Urgencia = "Hoje" | "24h" | "Esta semana" | "Sem pressa";
type Tamanho = "Pequeno" | "Médio" | "Grande";

type FormState = {
  nome: string;
  praga: string;
  bairro: string;
  tipo: TipoImovel;
  tamanho: Tamanho;
  urgencia: Urgencia;
};

const EMPRESA = "BrasilPrag Dedetizadora";
const TAGLINE = "Prevent, Protect & Eliminate Pests — SP e ABC";
const SUBTITULO = "Atendimento em toda São Paulo e ABC";
const CNPJ = "65.332.311/0001-01";

const WHATSAPP_NUMBER = "5511932782539";
const TEL_NUMBER_DISPLAY = "(11) 93278-2539";
const TEL_NUMBER_LINK = "+5511932782539";
const INSTAGRAM_URL = "https://www.instagram.com/brasilprag/";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function safeText(s: string, fallback: string, max = 160) {
  const t = (s || "").trim();
  if (!t) return fallback;
  if (t.length <= max) return t;
  return t.slice(0, max).trim() + "…";
}

/** LOGO PROFISSIONAL (SEM UPLOAD) — estilo corporativo */
function BrandLogo({ size = 44 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        aria-hidden="true"
        style={{ flex: "0 0 auto" }}
      >
        {/* Shield */}
        <path
          d="M32 6c10 6 18 6 22 8v18c0 14-9 22-22 26C19 54 10 46 10 32V14c4-2 12-2 22-8z"
          fill="#0F3D2E"
        />
        <path
          d="M32 10c9 5 16 5 19 7v15c0 12-8 19-19 23C21 51 13 44 13 32V17c3-2 10-2 19-7z"
          fill="#16A34A"
          opacity="0.9"
        />
        {/* Simple “pest” mark */}
        <path
          d="M24 30c2-4 14-4 16 0"
          stroke="#EAFBF0"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 33c-4 4-6 8-6 12 0 5 6 9 16 9s16-4 16-9c0-4-2-8-6-12"
          stroke="#EAFBF0"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="none"
          opacity="0.95"
        />
        <path
          d="M32 28v24"
          stroke="#EAFBF0"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>

      <div style={{ lineHeight: 1.05 }}>
        <div style={{ fontWeight: 900, letterSpacing: -0.2 }}>BrasilPrag</div>
        <div style={{ fontSize: 12, color: "rgba(15,61,46,0.78)" }}>
          Dedetizadora
        </div>
      </div>
    </div>
  );
}

/** ÍCONES “IMAGEM DA PRAGA” (SVG) — sem upload */
function PestIcon({ type }: { type: "barata" | "rato" | "cupim" | "mosquito" | "formiga" }) {
  const common = { width: 34, height: 34, viewBox: "0 0 64 64", style: { display: "block" } as React.CSSProperties };
  const stroke = "#0F3D2E";
  const sw = 3;

  if (type === "barata") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M18 25c4-8 24-8 28 0" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        <path d="M22 28c-6 5-9 12-9 18 0 7 7 12 19 12s19-5 19-12c0-6-3-13-9-18" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        <path d="M32 24v34" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.5" />
        <path d="M20 34l-8-6M20 42l-9 0M44 34l8-6M44 42l9 0" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.85" />
        <path d="M24 16c-7-6-12-6-16-3M40 16c7-6 12-6 16-3" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.75" />
      </svg>
    );
  }

  if (type === "rato") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M16 40c0-10 8-18 18-18h6c8 0 14 6 14 14v3c0 9-7 16-16 16H30c-8 0-14-6-14-15z" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        <path d="M22 22c-4-6-12-8-16-4" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.75" />
        <path d="M50 46c5 2 8 5 10 10" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.75" />
        <circle cx="40" cy="34" r="1.8" fill={stroke} />
      </svg>
    );
  }

  if (type === "cupim") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M22 20c3-6 17-6 20 0" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        <path d="M20 30c0-6 6-10 12-10h0c6 0 12 4 12 10v2c0 7-6 12-12 12h0c-6 0-12-5-12-12v-2z" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        <path d="M18 42c0 9 6 14 14 14s14-5 14-14" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.85" />
        <path d="M16 28l-8-4M48 28l8-4" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.8" />
      </svg>
    );
  }

  if (type === "mosquito") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M34 18c-6 0-10 5-10 11 0 8 5 14 10 14s10-6 10-14c0-6-4-11-10-11z" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        <path d="M34 14v36" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.55" />
        <path d="M24 24c-8-6-16-6-20-2M24 34c-8 2-16 6-20 10" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.8" />
        <path d="M44 24c8-6 16-6 20-2M44 34c8 2 16 6 20 10" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.8" />
      </svg>
    );
  }

  // formiga
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="22" cy="30" r="6" fill="none" stroke={stroke} strokeWidth={sw} />
      <circle cx="34" cy="34" r="7" fill="none" stroke={stroke} strokeWidth={sw} />
      <circle cx="48" cy="38" r="8" fill="none" stroke={stroke} strokeWidth={sw} />
      <path d="M16 24c-5-4-10-5-14-2M16 36c-5 2-10 5-14 9" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.8" />
      <path d="M56 28c4-4 8-5 12-2M56 46c4 2 8 5 12 9" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function Card({
  icon,
  title,
  desc,
  ctaMsg,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  ctaMsg: string;
}) {
  return (
    <div className="card">
      <div className="cardTop">
        <div className="iconPill">{icon}</div>
        <div>
          <div className="cardTitle">{title}</div>
          <div className="cardDesc">{desc}</div>
        </div>
      </div>

      <div className="cardActions">
        <a className="btnSoft" href={waLink(ctaMsg)} target="_blank" rel="noreferrer">
          Pedir orçamento
        </a>
        <a className="link" href="#orcamento">
          Orçamento automático →
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [baMode, setBaMode] = useState<"antes" | "depois">("depois");
  const [form, setForm] = useState<FormState>({
    nome: "",
    praga: "",
    bairro: "",
    tipo: "Apartamento",
    tamanho: "Médio",
    urgencia: "24h",
  });

  const baseMessage = useMemo(
    () => `Olá! Quero um orçamento com a ${EMPRESA}. Atendimento em São Paulo/ABC.`,
    []
  );

  const budgetMessage = useMemo(() => {
    const nome = safeText(form.nome, "Cliente", 60);
    const praga = safeText(form.praga, "controle de pragas", 160);
    const bairro = safeText(form.bairro, "São Paulo", 160);
    return `Olá! Meu nome é ${nome}. Gostaria de um orçamento para ${praga}. Local: ${bairro}. Tipo: ${form.tipo}. Tamanho: ${form.tamanho}. Urgência: ${form.urgencia}.`;
  }, [form]);

  return (
    <div className="page">
      {/* Topbar clean (Instagram bem visível) */}
      <header className="topbar">
        <div className="topbarInner">
          <a href="#topo" className="brand" aria-label="Ir para o topo">
            <BrandLogo />
          </a>

          <div className="topActions">
            <a className="btnOutline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              📷 Instagram
            </a>
            <a className="btnOutline" href={`tel:${TEL_NUMBER_LINK}`}>
              📞 Ligar agora
            </a>
            <a className="btnPrimary" href={waLink(baseMessage)} target="_blank" rel="noreferrer">
              💬 Orçar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO estilo “empresa grande” */}
      <section id="topo" className="wrap hero">
        <div className="heroGrid">
          <div className="heroLeft">
            <div className="kicker">✅ {SUBTITULO} • CNPJ {CNPJ}</div>
            <h1 className="h1">
              {TAGLINE}
            </h1>
            <p className="lead">
              Dedetização e controle de pragas com visual corporativo e foco em conversão:
              atendimento rápido, orçamento no WhatsApp e orientação completa.
            </p>

            <div className="heroBadges">
              <span className="pill">Baratas</span>
              <span className="pill">Ratos</span>
              <span className="pill">Cupins</span>
              <span className="pill">Mosquitos</span>
              <span className="pill">Formigas</span>
            </div>

            <div className="heroCtas">
              <a className="btnPrimary" href={waLink(baseMessage)} target="_blank" rel="noreferrer">
                💬 Solicitar orçamento
              </a>
              <a className="btnOutline" href="#orcamento">
                🧾 Orçamento automático
              </a>
            </div>

            <div className="trustRow">
              <div className="trust">
                <div className="trustNum">24h</div>
                <div className="trustText">Resposta rápida no WhatsApp</div>
              </div>
              <div className="trust">
                <div className="trustNum">SP+ABC</div>
                <div className="trustText">Cobertura ampla</div>
              </div>
              <div className="trust">
                <div className="trustNum">Pro</div>
                <div className="trustText">Padrão profissional</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroPanel">
              <div className="panelTitle">Contato rápido</div>
              <a className="btnPrimary w100" href={waLink(baseMessage)} target="_blank" rel="noreferrer">
                💬 WhatsApp
              </a>
              <div className="panelRow">
                <a className="btnOutline w100" href={`tel:${TEL_NUMBER_LINK}`}>📞 {TEL_NUMBER_DISPLAY}</a>
                <a className="btnOutline w100" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">📷 Instagram</a>
              </div>

              <div className="panelNote">
                Atendimento: São Paulo Capital • ABC Paulista • Santo André • São Bernardo • São Caetano • Diadema • Mauá
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços com “imagens” das pragas */}
      <section id="servicos" className="wrap">
        <div className="sectionHead">
          <h2 className="h2">Tratamentos</h2>
          <p className="p">Cards com ícones (SVG) — não precisa subir imagens.</p>
        </div>

        <div className="grid">
          <Card
            icon={<PestIcon type="barata" />}
            title="Dedetização (Baratas)"
            desc="Controle e prevenção com aplicação estratégica e recomendações."
            ctaMsg="Olá! Quero orçamento para Dedetização contra baratas em São Paulo/ABC."
          />
          <Card
            icon={<PestIcon type="rato" />}
            title="Desratização (Ratos)"
            desc="Controle seguro de roedores com orientação de prevenção."
            ctaMsg="Olá! Quero orçamento para Desratização (ratos) em São Paulo/ABC."
          />
          <Card
            icon={<PestIcon type="cupim" />}
            title="Descupinização (Cupins)"
            desc="Tratamento especializado para proteger estruturas e madeira."
            ctaMsg="Olá! Quero orçamento para Descupinização (cupins) em São Paulo/ABC."
          />
          <Card
            icon={<PestIcon type="mosquito" />}
            title="Controle de Mosquitos"
            desc="Redução de focos e barreiras de proteção para ambientes."
            ctaMsg="Olá! Quero orçamento para Controle de Mosquitos em São Paulo/ABC."
          />
          <Card
            icon={<PestIcon type="formiga" />}
            title="Controle de Formigas"
            desc="Aplicação técnica para eliminar e prevenir reinfestações."
            ctaMsg="Olá! Quero orçamento para Controle de Formigas em São Paulo/ABC."
          />
          <Card
            icon={<BrandLogo size={34} />}
            title="Residencial e Comercial"
            desc="Casa, apartamento, comércio e condomínio — SP e ABC."
            ctaMsg="Olá! Quero orçamento para atendimento Residencial/Comercial em São Paulo/ABC."
          />
        </div>
      </section>

      {/* Antes e Depois */}
      <section className="wrap">
        <div className="sectionHead">
          <h2 className="h2">Antes e Depois</h2>
          <p className="p">Vitrine premium (você pode pedir exemplos reais pelo WhatsApp).</p>
        </div>

        <div className="beforeAfter">
          <div className="toggle">
            <button
              className={"toggleBtn " + (baMode === "antes" ? "active" : "")}
              onClick={() => setBaMode("antes")}
              type="button"
            >
              Antes
            </button>
            <button
              className={"toggleBtn " + (baMode === "depois" ? "active" : "")}
              onClick={() => setBaMode("depois")}
              type="button"
            >
              Depois
            </button>
          </div>

          <div className="baCanvas">
            <div className={"baPanel " + (baMode === "antes" ? "show" : "hide")}>
              <div className="baLabel">ANTES</div>
              <div className="baArt before" />
              <div className="baText">
                Ambiente com sinais e pontos de risco. Identificação e estratégia.
              </div>
            </div>

            <div className={"baPanel " + (baMode === "depois" ? "show" : "hide")}>
              <div className="baLabel">DEPOIS</div>
              <div className="baArt after" />
              <div className="baText">
                Ambiente protegido com orientação de prevenção e barreiras.
              </div>
            </div>
          </div>

          <a className="btnPrimary w100" href={waLink(`Olá! Pode me enviar exemplos de ANTES e DEPOIS de serviços da ${EMPRESA}?`)} target="_blank" rel="noreferrer">
            💬 Pedir exemplos no WhatsApp
          </a>
        </div>
      </section>

      {/* Orçamento */}
      <section id="orcamento" className="wrap padBottom">
        <div className="sectionHead">
          <h2 className="h2">Orçamento automático</h2>
          <p className="p">Preencha e envie direto para o WhatsApp com mensagem pronta.</p>
        </div>

        <div className="formCard">
          <div className="formGrid">
            <input
              value={form.nome}
              onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
              placeholder="Seu nome"
              className="input"
            />
            <input
              value={form.praga}
              onChange={(e) => setForm((p) => ({ ...p, praga: e.target.value }))}
              placeholder="Qual praga? (barata, rato, cupim...)"
              className="input"
            />
            <input
              value={form.bairro}
              onChange={(e) => setForm((p) => ({ ...p, bairro: e.target.value }))}
              placeholder="Bairro / Cidade (ex: Mooca, São Paulo)"
              className="input"
            />

            <div className="row2">
              <select
                value={form.tipo}
                onChange={(e) => setForm((p) => ({ ...p, tipo: e.target.value as TipoImovel }))}
                className="input"
              >
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Comércio</option>
                <option>Condomínio</option>
              </select>
              <select
                value={form.tamanho}
                onChange={(e) => setForm((p) => ({ ...p, tamanho: e.target.value as Tamanho }))}
                className="input"
              >
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
              </select>
            </div>

            <select
              value={form.urgencia}
              onChange={(e) => setForm((p) => ({ ...p, urgencia: e.target.value as Urgencia }))}
              className="input"
            >
              <option>Hoje</option>
              <option>24h</option>
              <option>Esta semana</option>
              <option>Sem pressa</option>
            </select>

            <a className="btnPrimary w100" href={waLink(budgetMessage)} target="_blank" rel="noreferrer">
              📱 Enviar orçamento no WhatsApp
            </a>

            <div className="contactRow">
              <a className="btnOutline w100" href={`tel:${TEL_NUMBER_LINK}`}>📞 {TEL_NUMBER_DISPLAY}</a>
              <a className="btnOutline w100" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">📷 Instagram</a>
            </div>

            <div className="note">
              Atendimento: <b>SP e ABC</b> • CNPJ <b>{CNPJ}</b>
            </div>
          </div>

          <div className="map">
            <iframe
              title="Mapa - São Paulo"
              src="https://www.google.com/maps?q=S%C3%A3o%20Paulo%20SP&output=embed"
              width="100%"
              height="290"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerInner">
          <div>© {new Date().getFullYear()} <b>{EMPRESA}</b> • CNPJ {CNPJ}</div>
          <div className="footerLinks">
            <a className="footerLink" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">📷 Instagram</a>
            <a className="footerLink" href={`tel:${TEL_NUMBER_LINK}`}>📞 {TEL_NUMBER_DISPLAY}</a>
            <a className="footerLink" href={waLink(baseMessage)} target="_blank" rel="noreferrer">💬 WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Barra fixa mobile (super visível) */}
      <div className="mobileBar">
        <a className="btnOutline" href={`tel:${TEL_NUMBER_LINK}`}>📞 Ligar</a>
        <a className="btnOutline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">📷 Insta</a>
        <a className="btnPrimary" href={waLink(baseMessage)} target="_blank" rel="noreferrer">💬 Orçar</a>
      </div>

      {/* CSS (sem biblioteca) */}
      <style>{css}</style>
    </div>
  );
}

const css = `
:root{
  --green:#16a34a;
  --deep:#0f3d2e;
  --text:#0b1220;
  --muted:rgba(11,18,32,.72);
  --line:rgba(15,61,46,.14);
  --bg1:#f6fbf7;
  --bg2:#ffffff;
  --shadow: 0 18px 60px rgba(2,6,23,.10);
}

.page{
  background:
    radial-gradient(900px 420px at 15% 0%, rgba(22,163,74,.18), rgba(255,255,255,0) 55%),
    radial-gradient(900px 420px at 100% 20%, rgba(15,61,46,.10), rgba(255,255,255,0) 55%),
    linear-gradient(180deg, var(--bg1), var(--bg2));
  color: var(--text);
  min-height: 100vh;
}

/* Topbar */
.topbar{
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,.74);
  border-bottom: 1px solid var(--line);
}
.topbarInner{
  max-width: 1080px;
  margin: 0 auto;
  padding: 12px 14px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 12px;
}
.brand{ text-decoration:none; color:inherit; display:flex; align-items:center; }
.topActions{
  display:flex; gap:10px; align-items:center; flex-wrap:wrap;
}

/* Layout */
.wrap{ max-width: 1080px; margin: 0 auto; padding: 18px 14px; }
.hero{ padding-top: 18px; }
.heroGrid{ display:grid; gap:14px; }
.heroLeft{
  background: rgba(255,255,255,.82);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 18px;
  animation: fadeUp 520ms ease-out both;
}
.heroRight{ animation: fadeUp 680ms ease-out both; }
.heroPanel{
  background: rgba(255,255,255,.82);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 16px;
}
.panelTitle{ font-weight: 900; color: var(--deep); margin-bottom: 10px; }
.panelRow{ display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:10px; }
.panelNote{ margin-top: 12px; color: var(--muted); line-height: 1.45; font-size: 13px; }

/* Typography */
.kicker{
  display:inline-flex;
  gap:8px;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(22,163,74,.24);
  background: rgba(22,163,74,.08);
  color: var(--deep);
  font-weight: 800;
  font-size: 12px;
}
.h1{ margin: 12px 0 10px; font-size: 30px; line-height: 1.12; letter-spacing: -.4px; }
.lead{ margin: 0; color: var(--muted); line-height: 1.6; }

/* Buttons */
.btnPrimary{
  background: var(--green);
  color: #062415;
  border: 1px solid rgba(22,163,74,.35);
  padding: 12px 14px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 900;
  box-shadow: 0 14px 30px rgba(22,163,74,.18);
  transition: transform 160ms ease;
}
.btnPrimary:active{ transform: translateY(1px); }
.btnOutline{
  background: rgba(255,255,255,.92);
  color: var(--deep);
  border: 1px solid var(--line);
  padding: 12px 14px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 900;
}
.w100{ width: 100%; text-align:center; display:block; }

.heroCtas{ display:grid; gap:10px; margin-top: 14px; }
.heroBadges{ display:flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.pill{
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.85);
  color: rgba(15,61,46,.86);
  font-weight: 800;
  font-size: 12px;
}

.trustRow{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:10px;
  margin-top: 14px;
}
.trust{
  border: 1px solid var(--line);
  background: rgba(255,255,255,.86);
  border-radius: 16px;
  padding: 12px;
}
.trustNum{ font-weight: 950; color: var(--deep); }
.trustText{ color: var(--muted); font-size: 12px; margin-top: 4px; line-height: 1.35; }

/* Section */
.sectionHead{ margin: 6px 0 10px; }
.h2{ margin: 0; font-size: 22px; letter-spacing: -.2px; }
.p{ margin: 6px 0 0; color: var(--muted); line-height: 1.6; }

/* Grid cards */
.grid{ display:grid; gap: 12px; }
.card{
  background: rgba(255,255,255,.86);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 14px;
  transition: transform 180ms ease, box-shadow 180ms ease;
  animation: fadeUp 520ms ease-out both;
}
.card:hover{ transform: translateY(-2px); box-shadow: 0 22px 70px rgba(2,6,23,.12); }
.cardTop{ display:flex; gap: 12px; align-items: flex-start; }
.iconPill{
  width: 54px; height: 54px; border-radius: 18px;
  display:grid; place-items:center;
  background: rgba(22,163,74,.10);
  border: 1px solid rgba(22,163,74,.22);
}
.cardTitle{ font-weight: 950; color: var(--deep); }
.cardDesc{ margin-top: 6px; color: var(--muted); line-height: 1.5; font-size: 13px; }
.cardActions{ margin-top: 12px; display:flex; flex-wrap:wrap; gap: 10px; align-items:center; justify-content: space-between; }
.btnSoft{
  padding: 10px 12px; border-radius: 14px;
  background: rgba(22,163,74,.10);
  border: 1px solid rgba(22,163,74,.22);
  color: var(--deep);
  text-decoration:none;
  font-weight: 900;
}
.link{ color: rgba(15,61,46,.78); text-decoration:none; font-weight: 900; font-size: 13px; }

/* Before/After */
.beforeAfter{
  background: rgba(255,255,255,.86);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 14px;
  animation: fadeUp 560ms ease-out both;
}
.toggle{ display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.toggleBtn{
  padding: 12px 12px; border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.92);
  color: var(--deep);
  font-weight: 950;
  cursor: pointer;
}
.toggleBtn.active{
  border-color: rgba(22,163,74,.35);
  background: rgba(22,163,74,.10);
}
.baCanvas{ position: relative; min-height: 310px; margin: 12px 0; }
.baPanel{
  position:absolute; inset:0;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255,255,255,.92);
  padding: 14px;
  transition: opacity 240ms ease, transform 240ms ease;
}
.baPanel.show{ opacity: 1; transform: translateY(0); pointer-events:auto; }
.baPanel.hide{ opacity: 0; transform: translateY(8px); pointer-events:none; }
.baLabel{
  display:inline-block;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.95);
  font-weight: 950;
  color: var(--deep);
  font-size: 12px;
}
.baArt{
  margin-top: 12px;
  height: 175px;
  border-radius: 16px;
  border: 1px solid var(--line);
}
.baArt.before{
  background:
    radial-gradient(220px 120px at 20% 30%, rgba(239,68,68,.18), rgba(255,255,255,0) 60%),
    radial-gradient(240px 140px at 80% 60%, rgba(245,158,11,.18), rgba(255,255,255,0) 60%),
    linear-gradient(135deg, rgba(15,61,46,.05), rgba(255,255,255,.85));
}
.baArt.after{
  background:
    radial-gradient(240px 140px at 30% 40%, rgba(22,163,74,.18), rgba(255,255,255,0) 60%),
    radial-gradient(260px 160px at 80% 70%, rgba(59,130,246,.12), rgba(255,255,255,0) 60%),
    linear-gradient(135deg, rgba(22,163,74,.06), rgba(255,255,255,.85));
}
.baText{ margin-top: 12px; color: var(--muted); line-height: 1.5; }

/* Form */
.formCard{
  background: rgba(255,255,255,.86);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 14px;
  animation: fadeUp 560ms ease-out both;
}
.formGrid{ display:grid; gap:10px; }
.input{
  width: 100%;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.98);
  outline: none;
  color: var(--text);
}
.row2{ display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
.contactRow{ display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
.note{ font-size: 12px; color: rgba(11,18,32,.65); line-height: 1.35; }

.map{
  margin-top: 12px;
  border-radius: 16px;
  overflow:hidden;
  border: 1px solid var(--line);
}

/* Footer + mobile bar */
.footer{
  border-top: 1px solid var(--line);
  background: rgba(255,255,255,.72);
}
.footerInner{
  max-width: 1080px;
  margin: 0 auto;
  padding: 14px 14px 90px;
  color: rgba(11,18,32,.72);
  font-size: 12px;
}
.footerLinks{ margin-top: 8px; display:flex; gap: 12px; flex-wrap:wrap; }
.footerLink{ color: rgba(15,61,46,.86); text-decoration:none; font-weight: 900; }

.mobileBar{
  position: fixed;
  left: 0; right: 0; bottom: 0;
  z-index: 60;
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 10px;
  padding: 10px;
  background: rgba(255,255,255,.86);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--line);
}

.padBottom{ padding-bottom: 10px; }

/* Mobile-first -> desktop upgrade */
@media (min-width: 900px){
  .heroGrid{ grid-template-columns: 1.35fr .65fr; align-items: start; }
  .heroCtas{ grid-template-columns: 1fr 1fr; }
  .grid{ grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

/* Smooth animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;
