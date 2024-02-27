const copyMessage = document.getElementsByClassName('copy__content__message')[0];
const copyContainer = document.getElementsByClassName('copy__content__text')[0];
const textRea1 = document.getElementsByClassName('input__text')[0];
const errorMensage = document.getElementsByClassName('input__content__message')[0];
const copyText = document.getElementsByClassName('copy__text')[0];
const cripto = document.getElementsByClassName('cripto')[0];
const descripto = document.getElementsByClassName('descripto')[0];
const copy = document.querySelector('.button.copy');

// função para abilitar os botões
function enabledButtons() {
  cripto.classList.remove('disabled');
  cripto.classList.add('enabled');
  descripto.classList.remove('disabled');
  descripto.classList.add('enabled');
};

// função para desabilitar os botões
function disabledButtons() {
  cripto.classList.remove('enabled');
  cripto.classList.add('disabled');
  descripto.classList.remove('enabled');
  descripto.classList.add('disabled');
};

// função para criptografar o texto
function crypt(text) {
  const matriz = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  const result = [];

  for (let i = 0; i < matriz.length; i++) {
    if (text.includes(matriz[i][0])) {
      text = text.replaceAll(matriz[i][0], matriz[i][1]);
    }
  }

  return text;
}

// função para descriptografar o texto
function decrypt(text) {
  text = text.replace(/ai/g, 'a');
  text = text.replace(/enter/g, 'e');
  text = text.replace(/imes/g, 'i');
  text = text.replace(/ober/g, 'o');
  text = text.replace(/ufat/g, 'u');
  return text;
};

// esconde a div do copyMessage e apresenta a div do copyText e copia o conteudo do textarea input para o textarea copyText e criptografa o texto
cripto.addEventListener('click', () => {
  if (cripto.classList.contains('enabled')) {
    copyMessage.setAttribute('hidden', true);
    copyContainer.removeAttribute('hidden');
    if (textRea1.value !== '') {
      const text = textRea1.value;
      const criptoText = crypt(text);
      copyText.value = criptoText;
      textRea1.value = '';
      disabledButtons();
    }
  }   
});

// esconde a div do copyMessage e apresenta a div do copyText e copia o conteudo do textarea input para o textarea copyText e descriptografa o texto
descripto.addEventListener('click', () => {
  if (descripto.classList.contains('enabled')) {
    copyMessage.setAttribute('hidden', true);
    copyContainer.removeAttribute('hidden');
    if (textRea1.value !== '') {
      const text = textRea1.value;
      const descriptoText = decrypt(text);
      copyText.value = descriptoText;
      textRea1.value = '';
      disabledButtons();
    }
  }   
});

// habilita os botoes assim que o usuario digitar um caracter minusculo
textRea1.addEventListener('input', function(event) {
  const text = textRea1.value;
  const regex = /^[a-z\s]*$/;

  if (text !== '' && !regex.test(text)) {
    disabledButtons();
    errorMensage.classList.add('alert');
  } else {
    enabledButtons();
    errorMensage.classList.remove('alert');
  };
});

// função para copiar o texto
function updateClipboard(copyContent) {
  navigator.clipboard.writeText(copyContent);
};

copy.addEventListener('click', () => {
  updateClipboard(copyText.value);
  copyContainer.setAttribute('hidden', true);
  copyMessage.removeAttribute('hidden');
  disabledButtons();
});
