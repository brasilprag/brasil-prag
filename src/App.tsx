import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="top">
        <h1 className="title">BrasilPrag Dedetizadora</h1>
        <p className="sub">Atendimento em toda São Paulo e ABC</p>
      </header>

      <main className="content">
        <a
          className="cta"
          href="https://wa.me/5511932782539?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20para%20dedetiza%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener noreferrer"
        >
          Chamar no WhatsApp
        </a>

        <p style={{ marginTop: 16 }}>
          Se você está vendo esta página, o deploy está funcionando ✅
        </p>
      </main>
    </div>
  );
}
