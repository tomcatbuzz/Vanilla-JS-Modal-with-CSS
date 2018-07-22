var buttons = document.querySelectorAll('button');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');

var outputParagraph = document.querySelector('#quote');
var textEdit = document.querySelector('.modal textarea');

var quote = 'A Modal Component on a Webpage - how hard could it be?';
outputParagraph.textContent = quote;

function updateParagraph() {
  outputParagraph.textContent = quote;
}

function closeModal () {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

updateParagraph();

buttons[2].addEventListener('click', function() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
  textEdit.value = quote;
});

buttons[0].addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

buttons[1].addEventListener('click', function () {
  closeModal();
  if (editQuote.trim().length > 0) {
    quote = editQuote;
    updateParagraph();
  }
});

textEdit.addEventListener('input', function () {
  editQuote = textEdit.value;
})