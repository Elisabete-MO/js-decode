const copyMessage = document.getElementsByClassName('copy__content__message')[0];
const copyText = document.getElementsByClassName('copy__content__text')[0];
const textRea1 = document.getElementsByClassName('input__text')[0];
const contentDisplay = document.getElementsByClassName('copy__text')[0];
const cripto = document.getElementsByClassName('cripto')[0];
const descripto = document.getElementsByClassName('descripto')[0];

textRea1.addEventListener('input', () => {
  cripto.classList.remove('disabled');
  cripto.classList.add('enabled');
  descripto.classList.remove('disabled');
  descripto.classList.add('enabled');
});


cripto.addEventListener('click', () => {
  copyMessage.setAttribute('hidden', true);
  copyText.removeAttribute('hidden');
  if (textRea1.value !== '') {
    contentDisplay.value = textRea1.value;
  }
  textRea1.value = '';
});


// cripto.addEventListener('click', () => {
//     var text = cripto.value;
//     switch (text) {
//         case 'cripto':
//             cripto.value = 'descripto';
//             break;
//         case 'descripto':
//             cripto.value = 'cripto';
//             break;
//     }
// });



// desabilitar o link

// botoes.forEach(botao => {
//   botao.addEventListener('click', function(event) {
//       botoes.forEach(outroBotao => {
//           outroBotao.classList.add('disabled');
//       });
      
//       this.classList.remove('disabled');
//   });
// });
