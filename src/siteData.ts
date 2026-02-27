import imgRato from "./assets/rato.jpg";
import imgBarata from "./assets/barata.jpg";
import imgPercevejo from "./assets/percevejo.jpg";
import imgCupim from "./assets/cupim.jpg";
import imgEscorpiao from "./assets/escorpiao.jpg";
import imgPombo from "./assets/pombo.jpg";
import imgMorcego from "./assets/morcego.jpg";
import imgPulga from "./assets/pulga.jpg";
import imgCarrapato from "./assets/carrapato.jpg";

export const EMPRESA = "BrasilPrag Dedetizadora";
export const SUBTITULO = "Atendimento em toda São Paulo e ABC";

export const WHATSAPP = "5511932782539";
export const INSTAGRAM = "https://www.instagram.com/brasilprag/";
export const TEL = "+5511932782539";
export const TEL_VIEW = "(11) 93278-2539";

export const BANNER = "/assets/banner-topo.png";

export const ENDERECO = "Av. Paulista, 1471 - São Paulo - SP";

export const MAP = `https://www.google.com/maps?q=${encodeURIComponent(
  ENDERECO
)}&output=embed`;

export const ROTA = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ENDERECO
)}`;

export function wa(msg: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export const services = [
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

export const serviceDesc: Record<string, string> = {
  Ratos: "Tratamento profissional com barreira química e garantia de 1 ano.",
  Baratas: "Tratamento profissional com barreira química e garantia de 1 ano.",
  Cupins: "Tratamento profissional com efeito dominó. Garantia de 5 anos.",
  Percevejos: "Aplicação técnica com ação residual. Garantia de 1 ano.",
  "Escorpiões": "Tratamento direcionado em ralos e frestas.",
  Pombos: "Controle e manejo com barreiras preventivas.",
  Morcegos: "Serviço técnico com exclusão e vedação.",
  Pulgas: "Aplicação com efeito de choque e ação residual.",
  Carrapatos: "Tratamento com ação preventiva e residual.",
};
