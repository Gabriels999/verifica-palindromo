function VerificaPalindromo() {
  let input_txt = document.querySelector('#texto')
  let palavra = []
  let palavracontrario = []

  if (!input_txt.value == true) {
    res.innerHTML = 'Por favor, insira uma palavra.'
    console.log('errou')
    return
  }
  for (i = 0; i < input_txt.value.length; i++) {
    palavra.push(input_txt.value[i].toLowerCase())
  }
  palavra.reverse()
  for (i = 0; i < palavra.length; i++) {
    palavracontrario.push(palavra[i])
  }
  palavra.reverse()
  for (i = 0; i < palavra.length; i++) {
    console.log(palavra[i], palavracontrario[i])
    if (palavra[i] == palavracontrario[i]) {
      res.innerHTML = `'${input_txt.value}' é um palíndromo de ${input_txt.value.length} caracteres.`
    } else {
      res.innerHTML = `'${input_txt.value}' não é um palíndromo.`
    }
  }
}
