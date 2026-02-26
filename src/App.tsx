import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import logo from "./logo.png";

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
const SUBTITULO = "Atendimento em toda São Paulo e ABC";
const CNPJ = "65.332.311/0001-01";

const WHATSAPP_NUMBER = "5511932782539";
const TEL_NUMBER_DISPLAY = "(11) 93278-2539";
const TEL_NUMBER_LINK = "+5511932782539";

// ✅ Instagram já incluído
const INSTAGRAM_URL = "https://www.instagram.com/brasilprag/";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function safeText(s: string, fallback: string, max = 140) {
  const t = (s || "").trim();
  if (!t) return fallback;
  if (t.length <= max) return t;
  return t.slice(0, max).trim() + "…";
}

/** ====== ÍCONES (SVG) EMBUTIDOS — SEM UPLOAD ====== */
function IconCockroach() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" style={S.iconSvg}>
      <path d="M18 25c4-8 24-8 28 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 28c-6 5-9 12-9 18 0 7 7 12 19 12s19-5 19-12c0-6-3-13-9-18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 24v34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M20 34l-8-6M20 42l-9 0M44 34l8-6M44 42l9 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      <path d="M24 16c-7-6-12-6-16-3M40 16c7-6 12-6 16-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      <circle cx="27" cy="30" r="1.6" fill="currentColor" />
      <circle cx="37" cy="30" r="1.6" fill="currentColor" />
    </svg>
  );
}

function IconRat() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" style={S.iconSvg}>
      <path d="M16 40c0-10 8-18 18-18h6c8 0 14 6 14 14v3c0 9-7 16-16 16H30c-8 0-14-6-14-15z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M22 22c-4-6-12-8-16-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      <path d="M50 46c5 2 8 5 10 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      <circle cx="40" cy="34" r="1.8" fill="currentColor" />
      <path d="M44 38c2 0 4 1 5 2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M30 36l-8 2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function IconTermite() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" style={S.iconSvg}>
      <path d="M22 20c3-6 17-6 20 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 30c0-6 6-10 12-10h0c6 0 12 4 12 10v2c0 7-6 12-12 12h0c-6 0-12-5-12-12v-2z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M18 42c0 9 6 14 14 14s14-5 14-14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      <path d="M16 28l-8-4M48 28l8-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M26 12c-5-3-10-2-14 1M38 12c5-3 10-2 14 1" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M32 20v36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function IconMosquito() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" style={S.iconSvg}>
      <path d="M34 18c-6 0-10 5-10 11 0 8 5 14 10 14s10-6 10-14c0-6-4-11-10-11z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M34 14v36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M24 24c-8-6-16-6-20-2M24 34c-8 2-16 6-20 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M44 24c8-6 16-6 20-2M44 34c8 2 16 6 20 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M28 44l-10 12M40 44l10 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M34 44c2 6 3 10 3 14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function IconAnt() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" style={S.iconSvg}>
      <circle cx="22" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="34" cy="34" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="48" cy="38" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 24c-5-4-10-5-14-2M16 36c-5 2-10 5-14 9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M26 22c-2-6 0-10 5-12M26 38c-2 6 0 10 5 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M56 28c4-4 8-5 12-2M56 46c4 2 8 5 12 9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M22 20c-6-8-12-9-18-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

function App() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    praga: "",
    bairro: "",
    tipo: "Apartamento",
    tamanho: "Médio",
    urgencia: "24h",
  });

  const [scrolled, setScrolled] = useState(false);
  const [baMode, setBaMode] = useState<"antes" | "depois">("depois");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <div style={S.page}>
      {/* Topbar */}
      <header
        style={{
          ...S.topbar,
          background: scrolled ? "rgba(2,6,23,0.80)" : "rgba(2,6,23,0.45)",
          borderBottom: scrolled
            ? "1px solid rgba(148,163,184,0.18)"
            : "1px solid rgba(148,163,184,0.10)",
        }}
      >
        <div style={S.topbarInner}>
          <a href="#topo" style={S.brand} aria-label="Ir para o topo">
            <img src={logo} alt="Logo BrasilPrag" style={S.brandLogo} />
            <div style={{ lineHeight: 1.1 }}>
              <div style={S.brandName}>{EMPRESA}</div>
              <div style={S.brandSub}>{SUBTITULO}</div>
            </div>
          </a>

          <div style={S.topbarActions}>
            <a href={`tel:${TEL_NUMBER_LINK}`} style={S.iconBtn} aria-label="Ligar agora">
              📞
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.iconBtn} aria-label="Instagram">
              📷
            </a>
            <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.ctaSmall} aria-label="Orçar no WhatsApp">
              💬 Orçar
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" style={S.container}>
        <div style={S.heroCard} className="reveal">
          <div style={S.badges}>
            <span style={S.badgeGreen}>✅ SP + ABC</span>
            <span style={S.badgeDark}>⏱️ Atendimento rápido</span>
            <span style={S.badgeDark}>🏠 Residencial & Comercial</span>
          </div>

          <h1 style={S.h1} className="fadeUp">
            Dedetização premium em São Paulo com padrão profissional
          </h1>

          <p style={S.lead} className="fadeUpDelay">
            Controle de <b>baratas</b>, <b>ratos</b>, <b>cupins</b>, <b>mosquitos</b> e <b>formigas</b>.
            Atendimento em toda Grande São Paulo com orientação antes e depois do serviço.
          </p>

          <div style={S.heroActions} className="fadeUpDelay2">
            <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.primaryBtn}>
              📱 WhatsApp
            </a>
            <a href="#orcamento" style={S.secondaryBtn}>
              🧾 Orçamento automático
            </a>
            <a href={`tel:${TEL_NUMBER_LINK}`} style={S.ghostBtn}>
              📞 Ligar agora
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.ghostBtn}>
              📷 Instagram
            </a>
          </div>

          <div style={S.heroMini} className="fadeUpDelay3">
            <div style={S.miniItem}>
              <div style={S.miniTitle}>Empresa</div>
              <div style={S.miniText}>
                {EMPRESA} • <b>CNPJ {CNPJ}</b>
              </div>
            </div>
            <div style={S.miniItem}>
              <div style={S.miniTitle}>Áreas atendidas</div>
              <div style={S.miniText}>
                São Paulo Capital • ABC Paulista • Santo André • São Bernardo • São Caetano • Diadema • Mauá
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS (com imagens/ícones das pragas) */}
      <section id="servicos" style={S.container}>
        <div style={S.sectionHead}>
          <h2 style={S.h2}>🪳 Tratamentos e pragas</h2>
          <p style={S.p}>Cada card tem uma imagem (SVG) da praga — sem upload e sem links externos.</p>
        </div>

        <div style={S.cards} className="gridReveal">
          <ServiceCard
            title="Dedetização (Baratas)"
            desc="Controle e prevenção com aplicação estratégica e orientação para evitar retorno."
            icon={<IconCockroach />}
            quickMsg="Olá! Quero orçamento para Dedetização contra baratas em São Paulo/ABC."
          />
          <ServiceCard
            title="Desratização (Ratos)"
            desc="Controle de roedores com medidas de segurança e recomendações de prevenção."
            icon={<IconRat />}
            quickMsg="Olá! Quero orçamento para Desratização (ratos) em São Paulo/ABC."
          />
          <ServiceCard
            title="Descupinização (Cupins)"
            desc="Tratamento direcionado para cupins — proteção e orientação para preservar madeira."
            icon={<IconTermite />}
            quickMsg="Olá! Quero orçamento para Descupinização (cupins) em São Paulo/ABC."
          />
          <ServiceCard
            title="Controle de Mosquitos"
            desc="Redução de foco e barreiras de proteção para ambientes internos e externos."
            icon={<IconMosquito />}
            quickMsg="Olá! Quero orçamento para Controle de Mosquitos em São Paulo/ABC."
          />
          <ServiceCard
            title="Controle de Formigas"
            desc="Aplicação técnica para eliminar e prevenir reinfestações de forma eficiente."
            icon={<IconAnt />}
            quickMsg="Olá! Quero orçamento para Controle de Formigas em São Paulo/ABC."
          />
          <ServiceCard
            title="Residencial e Comercial"
            desc="Atendemos casa, apartamento, comércio e condomínio — SP e ABC."
            icon={
              <svg viewBox="0 0 64 64" aria-hidden="true" style={S.iconSvg}>
                <path d="M10 28l22-16 22 16v26H10V28z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M26 54V38h12v16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M18 34h8M38 34h8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
              </svg>
            }
            quickMsg="Olá! Quero orçamento para atendimento Residencial/Comercial em São Paulo/ABC."
          />
        </div>
      </section>

      {/* ANTES & DEPOIS */}
      <section id="antes-depois" style={S.container}>
        <div style={S.sectionHead}>
          <h2 style={S.h2}>📸 Antes e Depois</h2>
          <p style={S.p}>Uma vitrine premium: você pode pedir exemplos reais pelo WhatsApp.</p>
        </div>

        <div style={S.baWrap} className="reveal">
          <div style={S.baToggle}>
            <button
              type="button"
              onClick={() => setBaMode("antes")}
              style={{ ...S.baBtn, ...(baMode === "antes" ? S.baBtnActive : {}) }}
            >
              Antes
            </button>
            <button
              type="button"
              onClick={() => setBaMode("depois")}
              style={{ ...S.baBtn, ...(baMode === "depois" ? S.baBtnActive : {}) }}
            >
              Depois
            </button>
          </div>

          <div style={S.baCanvas}>
            <div
              style={{
                ...S.baPanel,
                opacity: baMode === "antes" ? 1 : 0,
                transform: baMode === "antes" ? "translateY(0)" : "translateY(8px)",
                pointerEvents: baMode === "antes" ? "auto" : "none",
              }}
            >
              <div style={S.baLabel}>ANTES</div>
              <div style={S.baArtBefore} />
              <div style={S.baText}>
                Ambiente com sinais de pragas e pontos de risco. Identificação e estratégia.
              </div>
            </div>

            <div
              style={{
                ...S.baPanel,
                opacity: baMode === "depois" ? 1 : 0,
                transform: baMode === "depois" ? "translateY(0)" : "translateY(8px)",
                pointerEvents: baMode === "depois" ? "auto" : "none",
              }}
            >
              <div style={S.baLabel}>DEPOIS</div>
              <div style={S.baArtAfter} />
              <div style={S.baText}>
                Ambiente protegido com orientação de prevenção e barreiras de segurança.
              </div>
            </div>
          </div>

          <a
            href={waLink(`Olá! Pode me enviar exemplos de ANTES e DEPOIS de serviços da ${EMPRESA}?`)}
            target="_blank"
            rel="noreferrer"
            style={S.baCta}
          >
            💬 Pedir exemplos no WhatsApp
          </a>
        </div>
      </section>

      {/* ORÇAMENTO AUTOMÁTICO + MAPA */}
      <section id="orcamento" style={{ ...S.container, paddingBottom: 96 }}>
        <div style={S.sectionHead}>
          <h2 style={S.h2}>🧾 Orçamento automático</h2>
          <p style={S.p}>Preencha e envie direto para o WhatsApp com mensagem pronta.</p>
        </div>

        <div style={S.formCard} className="reveal">
          <div style={S.formTitle}>Dados do orçamento</div>

          <div style={S.formGrid}>
            <input
              value={form.nome}
              onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
              placeholder="Seu nome"
              style={S.input}
            />
            <input
              value={form.praga}
              onChange={(e) => setForm((p) => ({ ...p, praga: e.target.value }))}
              placeholder="Qual praga? (barata, rato, cupim...)"
              style={S.input}
            />
            <input
              value={form.bairro}
              onChange={(e) => setForm((p) => ({ ...p, bairro: e.target.value }))}
              placeholder="Bairro / Cidade (ex: Mooca, São Paulo)"
              style={S.input}
            />

            <div style={S.twoCols}>
              <select
                value={form.tipo}
                onChange={(e) => setForm((p) => ({ ...p, tipo: e.target.value as TipoImovel }))}
                style={S.select}
              >
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Comércio</option>
                <option>Condomínio</option>
              </select>

              <select
                value={form.tamanho}
                onChange={(e) => setForm((p) => ({ ...p, tamanho: e.target.value as Tamanho }))}
                style={S.select}
              >
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
              </select>
            </div>

            <select
              value={form.urgencia}
              onChange={(e) => setForm((p) => ({ ...p, urgencia: e.target.value as Urgencia }))}
              style={S.select}
            >
              <option>Hoje</option>
              <option>24h</option>
              <option>Esta semana</option>
              <option>Sem pressa</option>
            </select>

            <a href={waLink(budgetMessage)} target="_blank" rel="noreferrer" style={S.primaryBtnFull}>
              📱 Enviar orçamento no WhatsApp
            </a>

            <div style={S.hint}>
              Atendimento: <b>SP Capital e ABC</b> • CNPJ <b>{CNPJ}</b>
            </div>
          </div>

          <div style={S.mapWrap}>
            <iframe
              title="Mapa - São Paulo"
              src="https://www.google.com/maps?q=S%C3%A3o%20Paulo%20SP&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div style={S.quickRow}>
            <a href={`tel:${TEL_NUMBER_LINK}`} style={S.quickBtnAlt}>
              📞 {TEL_NUMBER_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.quickBtnAlt}>
              📷 Instagram
            </a>
            <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.quickBtn}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={S.footer}>
        <div style={S.footerInner}>
          <div>
            © {new Date().getFullYear()} <b>{EMPRESA}</b> • CNPJ {CNPJ}
          </div>
          <div style={S.footerLinks}>
            <a href={`tel:${TEL_NUMBER_LINK}`} style={S.footerLink}>
              📞 {TEL_NUMBER_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.footerLink}>
              📷 Instagram
            </a>
            <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.footerLink}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.fab} aria-label="Abrir WhatsApp">
        💬 WhatsApp
      </a>

      {/* Mobile bottom CTA bar */}
      <div style={S.mobileBar}>
        <a href={`tel:${TEL_NUMBER_LINK}`} style={S.mobileBtnAlt} aria-label="Ligar agora">
          📞 Ligar
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.mobileBtnAlt} aria-label="Instagram">
          📷 Insta
        </a>
        <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.mobileBtn} aria-label="Orçar no WhatsApp">
          💬 Orçar no WhatsApp
        </a>
      </div>

      {/* CSS embutido: animações s  </div>
      </section>

      {/* SERVIÇOS (com imagens/ícones das pragas) */}
      <section id="servicos" style={S.container}>
        <div style={S.sectionHead}>
          <h2 style={S.h2}>🪳 Tratamentos e pragas</h2>
          <p style={S.p}>Cada card tem uma imagem (SVG) da praga — sem upload e sem links externos.</p>
        </div>

        <div style={S.cards} className="gridReveal">
          <ServiceCard
            title="Dedetização (Baratas)"
            desc="Controle e prevenção com aplicação estratégica e orientação para evitar retorno."
            icon={<IconCockroach />}
            quickMsg="Olá! Quero orçamento para Dedetização contra baratas em São Paulo/ABC."
          />
          <ServiceCard
            title="Desratização (Ratos)"
            desc="Controle de roedores com medidas de segurança e recomendações de prevenção."
            icon={<IconRat />}
            quickMsg="Olá! Quero orçamento para Desratização (ratos) em São Paulo/ABC."
          />
          <ServiceCard
            title="Descupinização (Cupins)"
            desc="Tratamento direcionado para cupins — proteção e orientação para preservar madeira."
            icon={<IconTermite />}
            quickMsg="Olá! Quero orçamento para Descupinização (cupins) em São Paulo/ABC."
          />
          <ServiceCard
            title="Controle de Mosquitos"
            desc="Redução de foco e barreiras de proteção para ambientes internos e externos."
            icon={<IconMosquito />}
            quickMsg="Olá! Quero orçamento para Controle de Mosquitos em São Paulo/ABC."
          />
          <ServiceCard
            title="Controle de Formigas"
            desc="Aplicação técnica para eliminar e prevenir reinfestações de forma eficiente."
            icon={<IconAnt />}
            quickMsg="Olá! Quero orçamento para Controle de Formigas em São Paulo/ABC."
          />
          <ServiceCard
            title="Residencial e Comercial"
            desc="Atendemos casa, apartamento, comércio e condomínio — SP e ABC."
            icon={
              <svg viewBox="0 0 64 64" aria-hidden="true" style={S.iconSvg}>
                <path d="M10 28l22-16 22 16v26H10V28z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M26 54V38h12v16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M18 34h8M38 34h8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
              </svg>
            }
            quickMsg="Olá! Quero orçamento para atendimento Residencial/Comercial em São Paulo/ABC."
          />
        </div>
      </section>

      {/* ANTES & DEPOIS */}
      <section id="antes-depois" style={S.container}>
        <div style={S.sectionHead}>
          <h2 style={S.h2}>📸 Antes e Depois</h2>
          <p style={S.p}>Uma vitrine premium: você pode pedir exemplos reais pelo WhatsApp.</p>
        </div>

        <div style={S.baWrap} className="reveal">
          <div style={S.baToggle}>
            <button
              type="button"
              onClick={() => setBaMode("antes")}
              style={{ ...S.baBtn, ...(baMode === "antes" ? S.baBtnActive : {}) }}
            >
              Antes
            </button>
            <button
              type="button"
              onClick={() => setBaMode("depois")}
              style={{ ...S.baBtn, ...(baMode === "depois" ? S.baBtnActive : {}) }}
            >
              Depois
            </button>
          </div>

          <div style={S.baCanvas}>
            <div
              style={{
                ...S.baPanel,
                opacity: baMode === "antes" ? 1 : 0,
                transform: baMode === "antes" ? "translateY(0)" : "translateY(8px)",
                pointerEvents: baMode === "antes" ? "auto" : "none",
              }}
            >
              <div style={S.baLabel}>ANTES</div>
              <div style={S.baArtBefore} />
              <div style={S.baText}>
                Ambiente com sinais de pragas e pontos de risco. Identificação e estratégia.
              </div>
            </div>

            <div
              style={{
                ...S.baPanel,
                opacity: baMode === "depois" ? 1 : 0,
                transform: baMode === "depois" ? "translateY(0)" : "translateY(8px)",
                pointerEvents: baMode === "depois" ? "auto" : "none",
              }}
            >
              <div style={S.baLabel}>DEPOIS</div>
              <div style={S.baArtAfter} />
              <div style={S.baText}>
                Ambiente protegido com orientação de prevenção e barreiras de segurança.
              </div>
            </div>
          </div>

          <a
            href={waLink(`Olá! Pode me enviar exemplos de ANTES e DEPOIS de serviços da ${EMPRESA}?`)}
            target="_blank"
            rel="noreferrer"
            style={S.baCta}
          >
            💬 Pedir exemplos no WhatsApp
          </a>
        </div>
      </section>

      {/* ORÇAMENTO AUTOMÁTICO + MAPA */}
      <section id="orcamento" style={{ ...S.container, paddingBottom: 96 }}>
        <div style={S.sectionHead}>
          <h2 style={S.h2}>🧾 Orçamento automático</h2>
          <p style={S.p}>Preencha e envie direto para o WhatsApp com mensagem pronta.</p>
        </div>

        <div style={S.formCard} className="reveal">
          <div style={S.formTitle}>Dados do orçamento</div>

          <div style={S.formGrid}>
            <input
              value={form.nome}
              onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
              placeholder="Seu nome"
              style={S.input}
            />
            <input
              value={form.praga}
              onChange={(e) => setForm((p) => ({ ...p, praga: e.target.value }))}
              placeholder="Qual praga? (barata, rato, cupim...)"
              style={S.input}
            />
            <input
              value={form.bairro}
              onChange={(e) => setForm((p) => ({ ...p, bairro: e.target.value }))}
              placeholder="Bairro / Cidade (ex: Mooca, São Paulo)"
              style={S.input}
            />

            <div style={S.twoCols}>
              <select
                value={form.tipo}
                onChange={(e) => setForm((p) => ({ ...p, tipo: e.target.value as TipoImovel }))}
                style={S.select}
              >
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Comércio</option>
                <option>Condomínio</option>
              </select>

              <select
                value={form.tamanho}
                onChange={(e) => setForm((p) => ({ ...p, tamanho: e.target.value as Tamanho }))}
                style={S.select}
              >
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
              </select>
            </div>

            <select
              value={form.urgencia}
              onChange={(e) => setForm((p) => ({ ...p, urgencia: e.target.value as Urgencia }))}
              style={S.select}
            >
              <option>Hoje</option>
              <option>24h</option>
              <option>Esta semana</option>
              <option>Sem pressa</option>
            </select>

            <a href={waLink(budgetMessage)} target="_blank" rel="noreferrer" style={S.primaryBtnFull}>
              📱 Enviar orçamento no WhatsApp
            </a>

            <div style={S.hint}>
              Atendimento: <b>SP Capital e ABC</b> • CNPJ <b>{CNPJ}</b>
            </div>
          </div>

          <div style={S.mapWrap}>
            <iframe
              title="Mapa - São Paulo"
              src="https://www.google.com/maps?q=S%C3%A3o%20Paulo%20SP&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div style={S.quickRow}>
            <a href={`tel:${TEL_NUMBER_LINK}`} style={S.quickBtnAlt}>
              📞 {TEL_NUMBER_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.quickBtnAlt}>
              📷 Instagram
            </a>
            <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.quickBtn}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={S.footer}>
        <div style={S.footerInner}>
          <div>
            © {new Date().getFullYear()} <b>{EMPRESA}</b> • CNPJ {CNPJ}
          </div>
          <div style={S.footerLinks}>
            <a href={`tel:${TEL_NUMBER_LINK}`} style={S.footerLink}>
              📞 {TEL_NUMBER_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.footerLink}>
              📷 Instagram
            </a>
            <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.footerLink}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.fab} aria-label="Abrir WhatsApp">
        💬 WhatsApp
      </a>

      {/* Mobile bottom CTA bar */}
      <div style={S.mobileBar}>
        <a href={`tel:${TEL_NUMBER_LINK}`} style={S.mobileBtnAlt} aria-label="Ligar agora">
          📞 Ligar
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={S.mobileBtnAlt} aria-label="Instagram">
          📷 Insta
        </a>
        <a href={waLink(baseMessage)} target="_blank" rel="noreferrer" style={S.mobileBtn} aria-label="Orçar no WhatsApp">
          💬 Orçar no WhatsApp
        </a>
      </div>

      {/* CSS embutido: animações s background: "rgba(2,6,23,0.35)",
                }}
              >
                <div style={{ fontWeight: 900 }}>{it.title}</div>
                <div style={{ fontSize: 12, color: "rgba(226,232,240,0.7)" }}>
                  {it.desc}
                </div>
              </div>
            ))}
          </div>

          <a
            href={buildWaLink(baseMessage)}
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: 14,
              display: "block",
              textAlign: "center",
              background: "rgba(148,163,184,0.12)",
              color: "rgba(226,232,240,0.92)",
              padding: "12px 14px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 900,
              border: "1px solid rgba(148,163,184,0.18)",
            }}
          >
            ⏱️ Atendimento rápido — chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 18px 4px" }}>
        <h2 style={{ margin: "20px 0 10px", fontSize: 26, fontWeight: 900 }}>
          🪳 Nossos serviços
        </h2>

        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          }}
        >
          {[
            {
              title: "Dedetização",
              desc: "Tratamento para baratas, formigas e insetos com foco em prevenção.",
            },
            {
              title: "Desratização",
              desc: "Controle de roedores com orientação e medidas de proteção.",
            },
            {
              title: "Descupinização",
              desc: "Tratamento direcionado para cupins de madeira e subterrâneos.",
            },
            {
              title: "Controle de Mosquitos",
              desc: "Ações para reduzir foco e criar barreiras de proteção.",
            },
            {
              title: "Controle de Formigas",
              desc: "Aplicação estratégica para eliminar e prevenir reinfestações.",
            },
            {
              title: "Atendimento Residencial e Comercial",
              desc: "Casa, apartamento, comércios e condomínios em SP e ABC.",
            },
          ].map((s) => (
            <div
              key={s.title}
              style={{
                padding: 16,
                borderRadius: 18,
                border: "1px solid rgba(148,163,184,0.16)",
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.55), rgba(2,6,23,0.35))",
                boxShadow: "0 18px 45px rgba(0,0,0,0.30)",
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 16 }}>{s.title}</div>
              <div style={{ marginTop: 8, color: "rgba(226,232,240,0.78)", lineHeight: 1.5 }}>
                {s.desc}
              </div>
              <a
                href={buildWaLink(`Olá! Quero um orçamento para ${s.title} em São Paulo/ABC.`)}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 12,
                  display: "inline-block",
                  background: "rgba(34,197,94,0.12)",
                  color: "rgba(187,247,208,0.95)",
                  padding: "10px 12px",
                  borderRadius: 14,
                  textDecoration: "none",
                  fontWeight: 900,
                  border: "1px solid rgba(34,197,94,0.22)",
                }}
              >
                Pedir orçamento
              </a>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 14,
            padding: 16,
            borderRadius: 18,
            border: "1px solid rgba(148,163,184,0.16)",
            background: "rgba(2,6,23,0.40)",
            color: "rgba(226,232,240,0.85)",
          }}
        >
          <b>Atendimento:</b> SP Capital e ABC • Santo André • São Bernardo • São Caetano • Diadema • Mauá
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 18px" }}>
        <h2 style={{ margin: "24px 0 10px", fontSize: 26, fontWeight: 900 }}>
          ⭐ O que nossos clientes dizem
        </h2>

        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          }}
        >
          {[
            {
              quote: "Atendimento rápido e muito profissional. Resolveram o problema de baratas no mesmo dia.",
              who: "Cliente — Mooca (SP)",
            },
            {
              quote: "Acabou com os cupins da minha casa. Explicaram tudo direitinho e passaram muita confiança.",
              who: "Cliente — Santo André (ABC)",
            },
            {
              quote: "Preço justo, capricho e serviço garantido. Recomendo para comércio também.",
              who: "Cliente — São Bernardo (ABC)",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                padding: 16,
                borderRadius: 18,
                border: "1px solid rgba(148,163,184,0.16)",
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.55), rgba(2,6,23,0.35))",
                boxShadow: "0 18px 45px rgba(0,0,0,0.30)",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>
                ⭐⭐⭐⭐⭐
              </div>
              <div style={{ color: "rgba(226,232,240,0.82)", lineHeight: 1.6 }}>
                “{t.quote}”
              </div>
              <div style={{ marginTop: 10, fontWeight: 900, color: "rgba(226,232,240,0.85)" }}>
                {t.who}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + Contact */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 18px 56px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
        }}
      >
        <div
          style={{
            padding: 18,
            borderRadius: 22,
            border: "1px solid rgba(148,163,184,0.18)",
            background: "rgba(2,6,23,0.40)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.30)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900 }}>❓ Dúvidas frequentes</h2>
          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            {[
              {
                q: "Quanto tempo leva para atender?",
                a: "Normalmente atendemos rápido em São Paulo e ABC. Chame no WhatsApp para verificar disponibilidade.",
              },
              {
                q: "Vocês atendem apartamento e comércio?",
                a: "Sim. Atendemos casa, apartamento, comércios e condomínios.",
              },
              {
                q: "Como funciona o orçamento?",
                a: "Você informa a praga, local e tipo de imóvel. Enviamos a melhor solução pelo WhatsApp.",
              },
              {
                q: "O serviço é seguro?",
                a: "Trabalhamos com aplicação orientada e medidas de segurança. Você recebe todas as recomendações antes e depois do serviço.",
              },
            ].map((f) => (
              <div
                key={f.q}
                style={{
                  padding: 12,
                  borderRadius: 16,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background: "rgba(15,23,42,0.45)",
                }}
              >
                <div style={{ fontWeight: 900 }}>{f.q}</div>
                <div style={{ marginTop: 6, color: "rgba(226,232,240,0.78)", lineHeight: 1.5 }}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 12,
              padding: 12,
              borderRadius: 16,
              border: "1px solid rgba(34,197,94,0.22)",
              background: "rgba(34,197,94,0.08)",
              color: "rgba(226,232,240,0.85)",
            }}
          >
            <b>Empresa:</b> {EMPRESA} <br />
            <b>CNPJ:</b> {CNPJ} <br />
            <b>Atendimento:</b> SP e ABC
          </div>
        </div>

        {/* Orçamento automático */}
        <div
          id="orcamento"
          style={{
            padding: 18,
            borderRadius: 22,
            border: "1px solid rgba(148,163,184,0.18)",
            background: "rgba(2,6,23,0.40)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.30)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900 }}>🧾 Orçamento automático</h2>
          <p style={{ marginTop: 10, marginBottom: 14, color: "rgba(226,232,240,0.78)" }}>
            Preencha e envie direto para o WhatsApp. Quanto mais detalhes, melhor o orçamento.
          </p>

          <div style={{ display: "grid", gap: 10 }}>
            <input
              value={form.nome}
              onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
              placeholder="Seu nome"
              style={inputStyle}
            />

            <input
              value={form.praga}
              onChange={(e) => setForm((p) => ({ ...p, praga: e.target.value }))}
              placeholder="Qual praga? (barata, rato, cupim...)"
              style={inputStyle}
            />

            <input
              value={form.bairro}
              onChange={(e) => setForm((p) => ({ ...p, bairro: e.target.value }))}
              placeholder="Bairro / Cidade (ex: Mooca, São Paulo)"
              style={inputStyle}
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <select
                value={form.tipo}
                onChange={(e) =>
                  setForm((p) => ({ ...p, tipo: e.target.value as FormState["tipo"] }))
                }
                style={selectStyle}
              >
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Comércio</option>
                <option>Condomínio</option>
              </select>

              <select
                value={form.urgencia}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    urgencia: e.target.value as FormState["urgencia"],
                  }))
                }
                style={selectStyle}
              >
                <option>Hoje</option>
                <option>24h</option>
                <option>Esta semana</option>
                <option>Sem pressa</option>
              </select>
            </div>

            <a
              href={buildWaLink(quickMessage)}
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: 2,
                textAlign: "center",
                background: "#22c55e",
                color: "#052e16",
                padding: "14px 16px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 900,
                fontSize: 16,
                boxShadow: "0 14px 30px rgba(34,197,94,0.25)",
                border: "1px solid rgba(34,197,94,0.35)",
              }}
            >
              📱 Enviar orçamento no WhatsApp
            </a>

            <div style={{ fontSize: 12, color: "rgba(226,232,240,0.65)", lineHeight: 1.4 }}>
              Ao enviar, você será direcionado ao WhatsApp com a mensagem pronta.
            </div>
          </div>

          {/* Mapa */}
          <div
            style={{
              marginTop: 14,
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(148,163,184,0.16)",
            }}
          >
            <iframe
              title="Mapa - São Paulo"
              src="https://www.google.com/maps?q=S%C3%A3o%20Paulo%20SP&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(148,163,184,0.15)",
          background: "rgba(2,6,23,0.55)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "18px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            color: "rgba(226,232,240,0.75)",
            fontSize: 13,
          }}
        >
          <div>
            © {new Date().getFullYear()} <b>{EMPRESA}</b> • CNPJ {CNPJ}
          </div>
          <div>
            Atendimento: São Paulo Capital e ABC •{" "}
            <a
              href={buildWaLink(baseMessage)}
              target="_blank"
              rel="noreferrer"
              style={{ color: "rgba(187,247,208,0.95)", textDecoration: "none", fontWeight: 900 }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={buildWaLink(baseMessage)}
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          background: "#22c55e",
          color: "#052e16",
          padding: "14px 16px",
          borderRadius: 999,
          textDecoration: "none",
          fontWeight: 900,
          boxShadow: "0 16px 40px rgba(34,197,94,0.28)",
          border: "1px solid rgba(34,197,94,0.35)",
        }}
      >
        💬 WhatsApp
      </a>

      {/* Mobile responsiveness */}
      <style>{`
        @media (max-width: 980px) {
          section { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 14,
  border: "1px solid rgba(148,163,184,0.18)",
  background: "rgba(15,23,42,0.55)",
  color: "rgba(226,232,240,0.92)",
  outline: "none",
};

const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 14,
  border: "1px solid rgba(148,163,184,0.18)",
  background: "rgba(15,23,42,0.55)",
  color: "rgba(226,232,240,0.92)",
  outline: "none",
};

export default App;
