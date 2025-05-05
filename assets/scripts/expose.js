// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  let audioplay = document.querySelector("audio");
  let inputVolume = document.getElementById("volume");
  let inputSound = document.getElementById("horn-select");
  let volumeIcon = document.querySelector('img[alt="Volume level 2"]');
  let play = document.querySelector("button");
  let hornimg = document.querySelector("img");
  


  inputVolume.addEventListener("input", function(){
    if(inputVolume.value == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    if(inputVolume.value > 0  && inputVolume.value < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    if(inputVolume.value >= 33  && inputVolume.value < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    if(inputVolume.value >= 67){
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }})
    inputSound.addEventListener("change", function(){
      if(inputSound.value == 'air-horn'){
        audioplay.src = 'assets/audio/air-horn.mp3';
        hornimg.src = 'assets/images/air-horn.svg';
      }
      if(inputSound.value == 'car-horn'){
        hornimg.src = 'assets/images/car-horn.svg';
        audioplay.src = 'assets/audio/car-horn.mp3';
      }
      if(inputSound.value == 'party-horn'){
        hornimg.src = 'assets/images/party-horn.svg';
        audioplay.src = 'assets/audio/party-horn.mp3';
      }})
     


  play.addEventListener("click", function(){
    if(inputSound.value == 'air-horn'){
     
      audioplay.volume = inputVolume.value/100;
      audioplay.play();
    }
    if(inputSound.value == 'car-horn'){
      
      audioplay.volume = inputVolume.value/100;
      audioplay.play();
    }
    if(inputSound.value == 'party-horn'){
      
      audioplay.volume = inputVolume.value/100;
      audioplay.play();
      jsConfetti.addConfetti();
    }})
  

  



  // TODO
}