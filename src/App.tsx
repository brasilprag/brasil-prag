import './App.css'
import logo from './logo.png'
function App() {
  return (
    <div style={{textAlign:"center", padding:"40px", fontFamily:"Arial"}}>
<img src={logo} style={{width:"180px", marginBottom:"20px"}} />
      <h1>🪳 BrasilPrag Dedetizadora</h1>

      <h2>Atendimento em toda São Paulo e ABC</h2>

      <p>Especialistas em controle de pragas:</p>

      <ul style={{listStyle:"none", fontSize:"18px", padding:0}}>
        <li>✅ Baratas</li>
        <li>✅ Ratos</li>
        <li>✅ Cupins</li>
        <li>✅ Mosquitos</li>
        <li>✅ Formigas</li>
      </ul>

      <a
        href="https://wa.me/5511932782539"
        target="_blank"
        style={{
          background:"#25D366",
          color:"white",
          padding:"15px 25px",
          borderRadius:"10px",
          textDecoration:"none",
          fontSize:"20px",
          display:"inline-block",
          marginTop:"20px"
        }}
      >
        📱 Solicitar Orçamento no WhatsApp
      </a>

      <p style={{marginTop:"25px"}}>
        <hr style={{margin:"40px 0"}} />

<h2>🪳 Nossos Serviços</h2>

<div style={{display:"grid", gap:"10px", fontSize:"18px"}}>
  <p>✔ Dedetização contra baratas</p>
  <p>✔ Controle de ratos</p>
  <p>✔ Eliminação de cupins</p>
  <p>✔ Controle de mosquitos</p>
  <p>✔ Controle de formigas</p>
</div>

<hr style={{margin:"40px 0"}} />

<h2>⭐ O que nossos clientes dizem</h2>

<div style={{maxWidth:"600px", margin:"auto"}}>
  <p>"Atendimento rápido e muito profissional!" — Cliente Mooca</p>
  <p>"Acabou com os cupins da minha casa." — Cliente Santo André</p>
  <p>"Preço justo e serviço garantido." — Cliente São Bernardo</p>
</div>

<hr style={{margin:"40px 0"}} />

<h2>📍 Atendimento</h2>
<hr style={{margin:"40px 0"}} />

<h2>🧾 Solicitar Orçamento</h2>

<div style={{maxWidth:"400px", margin:"auto"}}>

  <input
    id="nome"
    placeholder="Seu nome"
    style={{
      width:"100%",
      padding:"12px",
      margin:"8px 0",
      borderRadius:"8px",
      border:"none"
    }}
  />

  <input
    id="servico"
    placeholder="Qual praga? (barata, rato, cupim...)"
    style={{
      width:"100%",
      padding:"12px",
      margin:"8px 0",
      borderRadius:"8px",
      border:"none"
    }}
  />

  <button
    onClick={() => {
      const nome = (document.getElementById('nome') as HTMLInputElement).value
      const servico = (document.getElementById('servico') as HTMLInputElement).value

      const mensagem =
        `Olá, meu nome é ${nome}. Gostaria de um orçamento para ${servico}.`

      window.open(
        `https://wa.me/5511932782539?text=${encodeURIComponent(mensagem)}`
      )
    }}
    style={{
      width:"100%",
      padding:"14px",
      background:"#22c55e",
      color:"white",
      border:"none",
      borderRadius:"10px",
      fontSize:"18px",
      marginTop:"10px",
      cursor:"pointer"
    }}
  >
    📱 Pedir Orçamento
  </button>

</div>
<p>
São Paulo Capital • ABC Paulista • Santo André • São Bernardo •
São Caetano • Diadema • Mauá
</p>
        ⭐ Atendimento rápido em toda Grande São Paulo
      </p>
<a
  href="https://wa.me/5511932782539"
  target="_blank"
  style={{
    position:"fixed",
    bottom:"20px",
    right:"20px",
    background:"#25D366",
    color:"white",
    padding:"15px 18px",
    borderRadius:"50px",
    textDecoration:"none",
    fontSize:"18px",
    boxShadow:"0 4px 10px rgba(0,0,0,0.3)"
  }}
>
  💬 WhatsApp
</a>
    </div>
  )
}

export default App
