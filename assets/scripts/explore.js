// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  
  const synth = window.speechSynthesis;
  const smile = document.querySelector("img");
  const selectVoices = document.getElementById("voice-select");
  const textinput = document.querySelector("textarea");
  const playbutton = document.querySelector("button");
  
  function populateVoiceList() {
    
    const voices = synth.getVoices();

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-name", voice.name);
      option.value = voice.name;
      selectVoices.appendChild(option);
    });
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

playbutton.addEventListener("click",function(){
  const voices = synth.getVoices();
  const inputValue = textinput.value;
  const utterThis = new SpeechSynthesisUtterance(inputValue);
  const selectedOption = selectVoices.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
      break;
    }
  }
  synth.cancel();
  synth.speak(utterThis);
  utterThis.onstart = function () {
    smile.src = "/assets/images/smiling-open.png";
  };

  
  utterThis.onend = function () {
    smile.src = "/assets/images/smiling.png";
  };
})

}

