const msgResultado = document.querySelector("p");

function calculo() {
  const rendaMensal = parseFloat(document.getElementById("mensal").value);
  const totalValor = parseFloat(document.getElementById("valor").value);
  const totalMeses = parseFloat(document.getElementById("meses").value);

  if (isNaN(rendaMensal)) {
    msgResultado.innerHTML = "Digite novamente a renda mensal";
    return;
    }

  if (isNaN(totalValor)) {
    msgResultado.innerHTML = "Digite novamente o valor do empréstimo";
    return;
  }

  if (isNaN(totalMeses)) {
    msgResultado.innerHTML = "Digite novamente a quantia de meses";
    return;
  }

  const anos = Math.floor(totalMeses / 12);
  const comJuros = totalValor + (totalValor * 0.02 * anos);
  const parcelas = comJuros / totalMeses;
  const porcentagem = parcelas / rendaMensal * 100;

  if(porcentagem <= 30) {
   msgResultado.innerHTML = "Condição considerada adequada";
  } else{
     msgResultado.innerHTML = "Risco de comprometimento da renda.";
  }


}

