const copyMessage = document.getElementsByClassName('copy__content__message')[0];
const copyContainer = document.getElementsByClassName('copy__content__text')[0];
const textRea1 = document.getElementsByClassName('input__text')[0];
const errorMensage = document.getElementsByClassName('input__content__message')[0];
const copyText = document.getElementsByClassName('copy__text')[0];
const cripto = document.getElementsByClassName('cripto')[0];
const descripto = document.getElementsByClassName('descripto')[0];

// função para criptografar o texto
function criptografar(text) {
  text = text.replace(/e/g, 'enter');
  text = text.replace(/i/g, 'imes');
  text = text.replace(/a/g, 'ai');
  text = text.replace(/o/g, 'ober');
  text = text.replace(/u/g, 'ufat');
  return text;
}

// esconde a div do copyMessage e apresenta a div do copyText e copia o conteudo do textarea input para o textarea copyText e criptografa o texto
cripto.addEventListener('click', () => {
  if (cripto.classList.contains('enabled')) {
    copyMessage.setAttribute('hidden', true);
    copyContainer.removeAttribute('hidden');
    if (textRea1.value !== '') {
      const text = textRea1.value;
      const criptoText = criptografar(text);
      copyText.value = criptoText;
    }
  }   
});

// habilita os botoes assim que o usuario digitar um caracter minusculo
textRea1.addEventListener('input', function(event) {
  const text = textRea1.value;
  const regex = /^[a-z]*$/;

  if (text !== '' && !regex.test(text)) {
    cripto.classList.remove('enabled');
    cripto.classList.add('disabled');
    descripto.classList.remove('enabled');
    descripto.classList.add('disabled');
    errorMensage.classList.add('alert');
  } else {
    cripto.classList.remove('disabled');
    cripto.classList.add('enabled');
    descripto.classList.remove('disabled');
    descripto.classList.add('enabled');
    errorMensage.classList.remove('alert');
  };
});
