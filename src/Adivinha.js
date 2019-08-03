import React, { useState } from "react";
import "./Adivinha.css";

const Adivinha = () => {
  // ENTRADA, JOGANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");
  // CHUTE 0 - 500
  const [numPalpites, setNumPalpites] = useState(1);
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(501);
  // PALPITE DA MÁQUINA
  const [palpite, setPalpite] = useState(250);

  const iniciarJogo = () => {
    setEstado("JOGANDO");
    reset();
  };

  const acertou = () => {
    setEstado("FIM");
  };

  const reset = () => {
    setNumPalpites(1);
    setMinimo(0);
    setMaximo(501);
    setPalpite(250);
  };

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMaximo(palpite);
    const proxPalpite = parseInt((palpite - minimo) / 2) + minimo;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMinimo(palpite);
    const proxPalpite = parseInt((maximo - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="start-page">
        <div>
          <h1>Jogo do Adivinha</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum
            deserunt vel excepturi unde voluptatibus quia, tempore ullam placeat
            ab nostrum, aliquam in et eligendi perferendis cum quaerat
            asperiores? Molestias.
          </p>
        </div>
        <div>
          <button className="start-button" onClick={iniciarJogo}>
            Começar o jogo
          </button>
        </div>
      </div>
    );
  }

  if (estado === "FIM") {
    return (
      <>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Jogar novamente</button>
      </>
    );
  }

  return (
    <>
      <p>O seu número é {palpite}</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </>
  );
};

export default Adivinha;
