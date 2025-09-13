// dictate.js
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

class Dictate {
  constructor(callback) {
    this.recognition = new SpeechRecognition();
    this.recognition.lang = "en-US";
    this.recognition.interimResults = true;
    this.recognition.continuous = false;

    this.callback = callback;

    this.recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      // send transcript to main.js
      this.callback(transcript, event.results[event.results.length - 1].isFinal);
    };

    this.recognition.onerror = (event) => {
      console.error("Recognition error:", event.error);
    };
  }

  start() {
    this.recognition.start();
  }
}
