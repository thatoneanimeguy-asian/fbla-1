---
title: "Home"
featured_image: ''
description: ""
---

<br>
<br>

<div style="background-color: blue; padding: 60px; border-radius: 32px; color: yellow;">
  <p style="text-align: center; font-size: 32px;">Welcome to the BMS Clubs Homepage.</p>
</div>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.card {
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 90%
}
.card img {
  width: 100%;
  display: block;
  height: 85%;
}
/* Hover overlay text */
.overlay-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 18px;
}
.card-image-wrapper:hover .overlay-text {
  opacity: 1;
}
/* Button styling */
.audio-button {
  font-size: 24px;
  padding: 10px 14px;
  margin: 12px 0;
  background-color: white;
  border: none;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease, color 0.2s ease;
}
.audio-button:hover {
  background-color: #3498db;
  color: white;
  transform: scale(1.15);
}
</style>

<div class="card-container">
  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_6/v1687442295/mcpsorg/sxiswcea7gegoo1eokev/BMS4.jpg" alt="Card Image">
    <div class="overlay-text">BMS theatre group after a play.</div>
    </div>
      <button class="audio-button" onclick="readText('BMS theatre group after a play.')">🔊</button>
  </div>



  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_4/v1743437065/mcpsorg/w7hu0u7jc5lzak9ztbnz/BaseballMarch2025.jpg" alt="Card Image">
    <div class="overlay-text">The BMS baseball team.</div>
    </div>
      <button class="audio-button" onclick="readText('The BMS baseball team.')">🔊</button>
  </div>


  


  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1690389009/mcpsorg/hyzt3aygytdob2skqbzt/footballforwebsite.jpg" alt="Card Image">
    <div class="overlay-text">The BMS football team during a game.</div>
    </div>
      <button class="audio-button" onclick="readText('The BMS football team during a game.')">🔊</button>
  </div>
</div>

<script>
  function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
</script>