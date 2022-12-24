const textArea = document.getElementById("text");
var wordCount = 0;
var charCount = 0;
textArea.oninput = () => updateCounts();

function updateCounts() {
  // Split the text by spaces and filter out empty strings
  let words = textArea.value
    .split(" ")
    .filter((word) => word.length > 0 && RegExp(/[a-z]+/i).test(word));
  wordCount = words.length;
  charCount = textArea.value.length;

  // Update the DOM
  document.documentElement.style.setProperty("--word-count", wordCount);
  document.documentElement.style.setProperty("--char-count", charCount);
}
