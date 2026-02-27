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
