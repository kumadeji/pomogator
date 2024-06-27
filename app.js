const textArea = document.getElementById("text");
var wordCount = 0;
var charCount = 0;
textArea.oninput = () => updateCounts();

function updateCounts() {
  // Split the text by spaces and filter out empty strings
  let words = textArea.value
    .split(" ")
    .filter((word) => word.length > 0 && RegExp(/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu).test(word));
  wordCount = words.length;
  charCount = textArea.value.length;

  // Update the DOM
  document.documentElement.style.setProperty("--word-count", wordCount);
  document.documentElement.style.setProperty("--char-count", charCount);
}

// Удаление сносок
$('a#replace').click(function(e) {
    e.preventDefault();
    updateCounts();
    
    var value = $('textarea[name="text"]').val();
    value = value.replace(/\s*\[[^\]]*\]/g, '');
    $('textarea[name="text"]').val(value);
});

// Функция для копирования текста
function copyTextToClipboard(text) {
    const textArea2 = document.createElement('textarea');
    textArea2.value = text;
    document.body.appendChild(textArea2);
    textArea2.select();
    document.execCommand('copy');
    document.body.removeChild(textArea2);
}

// Добавляем обработчик события клика к кнопке
document.getElementById('replace').addEventListener('click', function() {
    updateCounts();
    copyTextToClipboard(wordCount);
});