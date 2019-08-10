import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const proxPalpite = parseInt((maximo + minimo) / 2);
    setPalpite(proxPalpite);
  }, [maximo, minimo]);

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

  //   const menor = () => {
  //     setNumPalpites(numPalpites + 1);
  //     setMaximo(palpite);
  //     const proxPalpite = parseInt((palpite - minimo) / 2) + minimo;
  //     setPalpite(proxPalpite);
  //   };

  //   const maior = () => {
  //     setNumPalpites(numPalpites + 1);
  //     setMinimo(palpite);
  //     const proxPalpite = parseInt((maximo - palpite) / 2) + palpite;
  //     setPalpite(proxPalpite);
  //   };

  const proxPalpite = async acao => {
    setNumPalpites(numPalpites + 1);
    acao === "menor" ? setMaximo(palpite) : setMinimo(palpite);
    // const proxPalpite =
    //   acao === "menor"
    //     ? parseInt((palpite + minimo) / 2)
    //     : parseInt((maximo + palpite) / 2);
    // const proxPalpite = parseInt((maximo + minimo) / 2);
    // setPalpite(proxPalpite);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="start-page">
        <div>
          <h1>Jogo do Adivinha</h1>
          <p>
            Como funciona o jogo? O jogador pensa em um número entre 0 e 500, o
            computador dá um palpite. Caso sejá um número menor do que o
            palpite, o jogador aperta o botão "Menor", caso sejá maior, o botão
            "Maior" e se o computador acertou, o botão "Acertou". Simples assim!
          </p>
        </div>
        <div>
          <button className="start-button" onClick={iniciarJogo}>
            Começar o jogo
          </button>
          <img
            src="https://musatotech.co.za/wp-content/uploads/2018/04/machine-learning-Musato-Technologies-300x256.png"
            alt=""
          />
        </div>
      </div>
    );
  }

  if (estado === "FIM") {
    return (
      <div className="end-page">
        <h1>
          Acertei o número {palpite} com {numPalpites} chutes
        </h1>
        <button onClick={iniciarJogo}>Jogar novamente</button>
        <img
          className="balloons"
          src="https://notesonatheory.files.wordpress.com/2012/12/balloon-clipart-5.png"
          alt=""
        />
        <img
          className="balloons"
          src="https://notesonatheory.files.wordpress.com/2012/12/balloon-clipart-5.png"
          alt=""
        />
        <img
          className="balloons"
          src="https://notesonatheory.files.wordpress.com/2012/12/balloon-clipart-5.png"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="playing-page">
      <h1 className="cpu-answer">
        O seu número é <span className="guessed-number">{palpite}</span>?
      </h1>
      <span className="question-mark">?</span>
      <span className="question-mark">?</span>
      <span className="question-mark">?</span>
      <div>
        <button
          className="lower-btn"
          disabled={palpite === 0}
          onClick={() => proxPalpite("menor")}
        >
          Menor
        </button>
        <button className="correct-btn" onClick={acertou}>
          Acertou
        </button>
        <button
          className="higher-btn"
          disabled={palpite === 500}
          onClick={() => proxPalpite("maior")}
        >
          Maior
        </button>
      </div>
    </div>
  );
};

export default Adivinha;
