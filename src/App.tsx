/* ===== Botões flutuantes (meio da lateral direita) ===== */
.floatingButtons{
  position: fixed;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
}

.floatingBtn{
  width: 54px;
  height: 54px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  text-decoration: none;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.18);
}

.floatingBtn svg{
  width: 26px;
  height: 26px;
  fill: #fff;
  display: block;
}

/* ===== Rodapé ===== */
.footer{
  padding: 28px 16px 22px;
}

.footerInner{
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 18px;
  padding: 18px;
  background: rgba(0,0,0,0.35);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
}

.footerBrand{
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.footerLogo{
  width: 46px;
  height: 46px;
  object-fit: contain;
}

.footerTitle{
  font-weight: 700;
}

.footerSub{
  opacity: 0.85;
  font-size: 0.95rem;
}

.footerGrid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.footerCol{
  padding: 12px;
  border-radius: 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.10);
}

.footerLabel{
  font-weight: 700;
  margin-bottom: 8px;
}

.footerText{
  opacity: 0.9;
  margin: 6px 0;
}

.footerLink{
  display: block;
  color: inherit;
  text-decoration: none;
  margin: 6px 0;
}

.footerLink:hover{
  text-decoration: underline;
}

.footerBottom{
  margin-top: 14px;
  opacity: 0.75;
  font-size: 0.9rem;
  text-align: center;
}

@media (min-width: 860px){
  .footerGrid{
    grid-template-columns: 1fr 1fr 1fr;
  }
 }
