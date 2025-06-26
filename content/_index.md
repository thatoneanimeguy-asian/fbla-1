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

<div class="card-container">
  <div class="card">
    <img src="images/BMS4.jpg" alt="Card Image">
    <div class="overlay-text">BMS theatre group after a play.</div>
  </div>



  <div class="card">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_4/v1743437065/mcpsorg/w7hu0u7jc5lzak9ztbnz/BaseballMarch2025.jpg" alt="Card Image">
    <div class="overlay-text">The BMS baseball team.</div>
  </div>


  


  <div class="card">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1690389009/mcpsorg/hyzt3aygytdob2skqbzt/footballforwebsite.jpg" alt="Card Image">
    <div class="overlay-text">The BMS football team during a game.</div>
  </div>
</div>
</div>
<style>
.audio-button {
  font-size: 30px;
  padding: 10px 12px;
  background-color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.audio-button:hover {
  background-color: #3498db; /* blue on hover */
  transform: scale(1.15);     /* slight grow */
  color: white;               /* icon/text turns white */
}
</style>
  <div style="
  display: flex;
  gap: 285px;
  align-items: center;
  justify-content: center;
">
  <div>
    <button class="audio-button" onclick="readText('BMS theatre group after a play.')">🔊</button>
  </div>
  <div>
    <button class="audio-button" onclick="readText('The BMS baseball team.')">🔊</button>
  </div>
  <div>
    <button class="audio-button" onclick="readText('The BMS football team during a game.')">🔊</button>
  </div>
</div>

<script>
  function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
</script>