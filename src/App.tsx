import React, { useMemo, useState } from "react";
import "./App.css";
import logo from "./logo.png";

type FormState = {
  nome: string;
  praga: string;
  bairro: string;
  tipo: "Apartamento" | "Casa" | "Comércio" | "Condomínio";
  urgencia: "Hoje" | "24h" | "Esta semana" | "Sem pressa";
};

const WHATSAPP_NUMBER = "5511932782539"; // BrasilPrag
const EMPRESA = "BrasilPrag Dedetizadora";
const SUBTITULO = "Atendimento em toda São Paulo e ABC";
const CNPJ = "65.332.311/0001-01";

function buildWaLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    praga: "",
    bairro: "",
    tipo: "Apartamento",
    urgencia: "24h",
  });

  const quickMessage = useMemo(() => {
    const nome = form.nome?.trim() || "Cliente";
    const praga = form.praga?.trim() || "controle de pragas";
    const bairro = form.bairro?.trim() || "São Paulo";
    return `Olá! Meu nome é ${nome}. Gostaria de um orçamento para ${praga}. Local: ${bairro}. Tipo de imóvel: ${form.tipo}. Urgência: ${form.urgencia}.`;
  }, [form]);

  const baseMessage = useMemo(() => {
    return `Olá! Quero um orçamento para dedetização/controle de pragas em São Paulo/ABC.`;
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% 0%, rgba(34,197,94,0.22), rgba(2,6,23,0) 60%), radial-gradient(900px 500px at 100% 20%, rgba(59,130,246,0.18), rgba(2,6,23,0) 55%), linear-gradient(180deg, #020617 0%, #050b1d 50%, #020617 100%)",
        color: "#e5e7eb",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(10px)",
          background: "rgba(2,6,23,0.55)",
          borderBottom: "1px solid rgba(148,163,184,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src={logo}
              alt="Logo BrasilPrag"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                objectFit: "cover",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              }}
            />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>
                {EMPRESA}
              </div>
              <div style={{ fontSize: 12, color: "rgba(226,232,240,0.75)" }}>
                {SUBTITULO}
              </div>
            </div>
          </div>

          <a
            href={buildWaLink(baseMessage)}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#22c55e",
              color: "#052e16",
              padding: "10px 14px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 800,
              boxShadow: "0 14px 30px rgba(34,197,94,0.25)",
              border: "1px solid rgba(34,197,94,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            💬 Orçamento no WhatsApp
          </a>
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "44px 18px 18px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 18,
        }}
      >
        <div
          style={{
            padding: 24,
            borderRadius: 22,
            border: "1px solid rgba(148,163,184,0.18)",
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.72), rgba(2,6,23,0.72))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              borderRadius: 999,
              border: "1px solid rgba(34,197,94,0.35)",
              background: "rgba(34,197,94,0.10)",
              color: "rgba(187,247,208,0.95)",
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            ✅ Atendimento rápido • SP Capital + ABC
          </div>

          <h1
            style={{
              margin: "14px 0 10px",
              fontSize: 40,
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: -0.5,
            }}
          >
            Controle de Pragas com padrão profissional em São Paulo
          </h1>

          <p style={{ margin: 0, color: "rgba(226,232,240,0.82)", fontSize: 16 }}>
            Soluções para <b>baratas</b>, <b>ratos</b>, <b>cupins</b>,{" "}
            <b>mosquitos</b> e <b>formigas</b>. Atendimento em toda Grande São
            Paulo com agendamento rápido.
          </p>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {[
              "✅ Orçamento rápido no WhatsApp",
              "✅ Atendimento SP e ABC",
              "✅ Para casa e comércio",
              "✅ Equipe profissional",
            ].map((t) => (
              <span
                key={t}
                style={{
                  padding: "8px 10px",
                  borderRadius: 12,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background: "rgba(2,6,23,0.45)",
                  color: "rgba(226,232,240,0.9)",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={buildWaLink(baseMessage)}
              target="_blank"
              rel="noreferrer"
              style={{
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
              📱 Solicitar orçamento agora
            </a>

            <a
              href="#orcamento"
              style={{
                background: "rgba(148,163,184,0.12)",
                color: "rgba(226,232,240,0.92)",
                padding: "14px 16px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 900,
                fontSize: 16,
                border: "1px solid rgba(148,163,184,0.18)",
              }}
            >
              🧾 Fazer orçamento automático
            </a>
          </div>

          <div style={{ marginTop: 16, fontSize: 12, color: "rgba(226,232,240,0.65)" }}>
            CNPJ: <b>{CNPJ}</b> • {SUBTITULO}
          </div>
        </div>

        {/* Side card */}
        <div
          style={{
            padding: 24,
            borderRadius: 22,
            border: "1px solid rgba(148,163,184,0.18)",
            background:
              "linear-gradient(180deg, rgba(2,6,23,0.62), rgba(15,23,42,0.55))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src={logo}
              alt="Logo BrasilPrag"
              style={{
                width: 78,
                height: 78,
                borderRadius: 18,
                objectFit: "cover",
                boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
              }}
            />
            <div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>{EMPRESA}</div>
              <div style={{ color: "rgba(226,232,240,0.7)", marginTop: 4 }}>
                Dedetização • Desratização • Descupinização
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 18,
              padding: 14,
              borderRadius: 18,
              border: "1px solid rgba(34,197,94,0.22)",
              background: "rgba(34,197,94,0.08)",
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: 6 }}>
              📍 Áreas atendidas
            </div>
            <div style={{ color: "rgba(226,232,240,0.78)", lineHeight: 1.5 }}>
              São Paulo Capital • ABC Paulista • Santo André • São Bernardo •
              São Caetano • Diadema • Mauá
            </div>
          </div>

          <div
            style={{
              marginTop: 14,
              display: "grid",
              gap: 10,
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {[
              { title: "Baratas", desc: "Controle e prevenção" },
              { title: "Ratos", desc: "Controle seguro" },
              { title: "Cupins", desc: "Tratamento especializado" },
              { title: "Mosquitos", desc: "Redução e barreiras" },
            ].map((it) => (
              <div
                key={it.title}
                style={{
                  padding: 12,
                  borderRadius: 16,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background: "rgba(2,6,23,0.35)",
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
