import { useEffect } from "react";

type Props = {
  cidade: string;
};

export default function CityPage({ cidade }: Props) {

  useEffect(() => {
    document.title = `Dedetização em ${cidade} | BrasilPrag Dedetizadora`;

    const desc = `Serviço de dedetização profissional em ${cidade}. Atendimento rápido, garantia de até 5 anos e orçamento gratuito.`;

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [cidade]);

  return (
    <div style={{padding: "120px 20px"}}>
      <h1>Dedetização em {cidade}</h1>
      <p>
        A BrasilPrag Dedetizadora oferece serviços profissionais de dedetização em {cidade}.
        Atendimento rápido, seguro e com garantia.
      </p>
    </div>
  );
}
