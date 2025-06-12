function speakText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";  // Change the language if needed
  window.speechSynthesis.speak(speech);
}