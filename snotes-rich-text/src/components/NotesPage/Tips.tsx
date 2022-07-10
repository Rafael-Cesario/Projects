import React, { useContext } from "react";
import { NotesContext } from "../../context/notesContext";
import { TipsStyle } from "../../styles/NotesPage/TipsStyle";

const Tips = () => {
  const { tips, setTips } = useContext(NotesContext)

  return (
    <TipsStyle>
      <div className="head">
        <h1>Dicas</h1>
        <button onClick={e => setTips(false)}>X</button>
      </div>

      <div className="tip">
        <h1>Salvamento</h1>
        <p>Suas notas são salvas a cada 1 minuto, mas você pode salvar elas apertando [ ALT+ S ] , você vera uma notificação confirmando que suas notas foram salvas.</p>
      </div>

      <div className="tip">
        <h1>Teclas de atalho</h1>
        <p>Todas as teclas de atalho são combinadas com a tecla alt. Use [ ALT + (tecla de atalho) ] para executar um comando.</p>
        <ul>
          <li><b>S</b> : Salva suas notas</li>
          <li><b>B</b> : Ativa ou desativa a fonte em negrito</li>
          <li><b>I</b> : Ativa ou desativa a fonte em italico</li>
          <li><b>U</b> : Ativa ou desativa o sublinhado</li>
          <li><b>L</b> : Ativa ou desativa a fonte rasurada</li>
          <li><b>Z</b> : Desfaz uma ação</li>
          <li><b>R</b> : Refaz uma ação</li>
          <li><b>P</b> : Muda o tamanho da fonte para 3</li>
          <li><b>N</b> : Muda o tamanho da fonte para 4</li>
          <li><b>T</b> : Muda o tamanho da fonte para 5</li>
        </ul>
      </div>


    </TipsStyle>
  )
}

export { Tips }