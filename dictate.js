const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

class Dictate {
  constructor() {
    this.recognition = new SpeechRecognition();
    this.recognition.lang = "en-US";
    this.recognition.interimResults = true;
    this.recognition.continuous = false; // stop automatically after pause
    this.transcript = "";

    this.recognition.onresult = (event) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const chunk = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          this.transcript += chunk + " ";
        } else {
          interimTranscript = chunk; // replace previous interim
        }
      }

      document.getElementById("userInput").value = (this.transcript + interimTranscript).trim();
    };

    this.recognition.onerror = (event) => {
      console.error("Recognition error:", event.error);
    };
  }

  start() {
    this.transcript = ""; // clear previous
    this.recognition.start();
    console.log("🎙️ Dictation started");
  }
}
