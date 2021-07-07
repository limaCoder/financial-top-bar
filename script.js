async function getContent() {
  try {
    const taxaCDI = await fetch('https://bot-financial-data-collector.herokuapp.com/taxa-cdi')
    const dolar = await fetch('https://bot-financial-data-collector.herokuapp.com/dolar')
    const inflacao = await fetch('https://bot-financial-data-collector.herokuapp.com/inflacao')

    const dataTaxaCDI = await taxaCDI.json()
    const dataDolar = await dolar.json()
    const dataInflacao = await inflacao.json()

    console.log(dataTaxaCDI)
    console.log(dataDolar)
    console.log(dataInflacao)

    showTaxaCDI(dataTaxaCDI)
    showDolar(dataDolar)
    showInflacao(dataInflacao)

  } catch (error) {
    console.log(error)
  }
}

getContent()

function showTaxaCDI(value) {
  let output = `${value.response[0].cdi}`
  document.querySelector('.value.taxa-cdi').innerHTML = output;
}

function showDolar(value) {
  let output = `${value.response[0].resultado}`
  document.querySelector('.value.dolar').innerHTML = output;
}

function showInflacao(value) {
  let output = `${value.response[0].ipca}`
  document.querySelector('.value.inflation').innerHTML = output;
}