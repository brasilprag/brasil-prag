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
const EMAIL = "BrasilPragDedetizadora@gmail.com";

const TEL = "+5511932782539";
const TEL_VIEW = "(11) 93278-2539";

const CNPJ = "65.332.311/0001-01";
const DESDE = "2019";
const RESPONSAVEL_TEC = "FERNANDA MENEZES DE OLIVEIRA";
const CREA = "5069805663";

const BANNER = "/assets/banner-topo.png";

/** Endereço “de referência” (mostrado no site + usado no maps embed) */
const ENDERECO = "Av. Paulista, 1471 - Bela Vista - São Paulo - SP";
const CEP = "01311-200";

// ✅ corrigido: template strings
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

const CIDADES: Array<{ slug: string; nome: string }> = [
  // ABC
  { slug: "santo-andre", nome: "Santo André" },
  { slug: "sao-bernardo-do-campo", nome: "São Bernardo do Campo" },
  { slug: "sao-caetano-do-sul", nome: "São Caetano do Sul" },
  { slug: "diadema", nome: "Diadema" },
  { slug: "maua", nome: "Mauá" },
  { slug: "ribeirao-pires", nome: "Ribeirão Pires" },
  { slug: "rio-grande-da-serra", nome: "Rio Grande da Serra" },

  // Grande SP
  { slug: "osasco", nome: "Osasco" },
  { slug: "guarulhos", nome: "Guarulhos" },
  { slug: "mogi-das-cruzes", nome: "Mogi das Cruzes" },
  { slug: "suzano", nome: "Suzano" },
  { slug: "itaquaquecetuba", nome: "Itaquaquecetuba" },
  { slug: "poa", nome: "Poá" },
  { slug: "ferraz-de-vasconcelos", nome: "Ferraz de Vasconcelos" },
  { slug: "franco-da-rocha", nome: "Franco da Rocha" },
  { slug: "caieiras", nome: "Caieiras" },

  // Oeste
  { slug: "barueri", nome: "Barueri" },
  { slug: "carapicuiba", nome: "Carapicuíba" },
  { slug: "itapevi", nome: "Itapevi" },
  { slug: "jandira", nome: "Jandira" },
  { slug: "cotia", nome: "Cotia" },
  { slug: "taboao-da-serra", nome: "Taboão da Serra" },
  { slug: "embu-das-artes", nome: "Embu das Artes" },
  { slug: "lapa", nome: "Lapa" },
  { slug: "pinheiros", nome: "Pinheiros" },
  { slug: "butanta", nome: "Butantã" },
  { slug: "vila-sonia", nome: "Vila Sônia" },

  // Leste
  { slug: "itaquera", nome: "Itaquera" },
  { slug: "sao-miguel-paulista", nome: "São Miguel Paulista" },
  { slug: "guaianases", nome: "Guaianases" },
  { slug: "penha", nome: "Penha" },
  { slug: "mooca", nome: "Mooca" },
  { slug: "vila-prudente", nome: "Vila Prudente" },
  { slug: "sapopemba", nome: "Sapopemba" },
  { slug: "cidade-tiradentes", nome: "Cidade Tiradentes" },
  { slug: "ermelino-matarazzo", nome: "Ermelino Matarazzo" },
  { slug: "tatuape", nome: "Tatuapé" },
  { slug: "itaim-paulista", nome: "Itaim Paulista" },

  // Sul
  { slug: "santo-amaro", nome: "Santo Amaro" },
  { slug: "campo-limpo", nome: "Campo Limpo" },
  { slug: "capao-redondo", nome: "Capão Redondo" },
  { slug: "morumbi", nome: "Morumbi" },
  { slug: "jabaquara", nome: "Jabaquara" },
  { slug: "ipiranga", nome: "Ipiranga" },
  { slug: "sacoma", nome: "Sacomã" },

  // Norte
  { slug: "santana", nome: "Santana" },
  { slug: "tucuruvi", nome: "Tucuruvi" },
  { slug: "casa-verde", nome: "Casa Verde" },
  { slug: "jacana", nome: "Jaçanã" },
  { slug: "mandaqui", nome: "Mandaqui" },
];

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

    // ✅ Ativa os ícones do Lucide (carregados via script no index.html)
    requestAnimationFrame(() => {
      const lucide = (window as any).lucide;
      if (lucide?.createIcons) lucide.createIcons();
    });
  }, []);

  return (
    <div className="page">
      {/* MARCA FIXA - topo esquerdo */}
      <a href="#topo" className="brandFixed" aria-label="Voltar ao topo">
        <img src={logo} alt="BrasilPrag" className="brandLogo" />
        <div className="brandText">
          <div className="brandName">{EMPRESA}</div>
          <div className="brandSub">{SUBTITULO}</div>
        </div>
      </a>

      {/* AÇÕES FIXAS - canto direito (vertical) */}
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
            <i data-lucide="message-circle"></i>
          </a>

          <a
            className="iconGlass"
            href={ROTA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir rota no Google Maps"
            title="Como chegar"
          >
            <i data-lucide="map-pin"></i>
          </a>

          <a
            className="iconGlass"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram"
            title="Instagram"
          >
            <i data-lucide="instagram"></i>
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

      {/* RODAPÉ SEO + INFO */}
      <footer className="footerSeo" aria-label="Rodapé">
        <div className="wrap">
          <h3>Atendemos em toda Grande São Paulo e ABC</h3>

          <div className="footerCities" aria-label="Cidades atendidas">
            {CIDADES.map((c) => (
              <a key={c.slug} href={`/cidades/${c.slug}/`}>
                {c.nome}
              </a>
            ))}
          </div>

          <p className="footerInfo">
            <strong>{EMPRESA}</strong> • Atendimento 24h • Desde {DESDE} <br />
            CNPJ: {CNPJ} <br />
            Responsável Técnico: {RESPONSAVEL_TEC} • CREA {CREA} <br />
            Endereço: {ENDERECO} • CEP {CEP} <br />
            Telefone/WhatsApp:{" "}
            <a href={`tel:${TEL}`} style={{ color: "inherit" }}>
              {TEL_VIEW}
            </a>{" "}
            • E-mail:{" "}
            <a
              href={`mailto:${EMAIL}`}
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
  }
