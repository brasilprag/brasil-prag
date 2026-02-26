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
