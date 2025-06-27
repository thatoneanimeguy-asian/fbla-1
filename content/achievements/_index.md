---
title: "Achievements"
featured_image: ''
description: ""
---

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
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_6/v1689019814/mcpsorg/sgvky6zhwewlp1xskuik/MemberswithMedals.jpg" alt="Card Image">
    <div class="overlay-text">A few BMS FBLA students, shown winning in video game design.</div>
    </div>
      <button class="audio-button" onclick="readText('A few BMS FBLA students, shown winning in video game design.')">🔊</button>
  </div>




  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://mathcounts.godmar.me/assets/images/mc-2025-team-win-small-ce539f3561932a383062c9f6488a7759.jpg" alt="Card Image">
    <div class="overlay-text">The Blacksburg Middle School MATHCOUNTS team got first place in their chapter, and advanced to the state round.</div>
    </div>
      <button class="audio-button" onclick="readText('The Blacksburg Middle School MATHCOUNTS team got first place in their chapter, and advanced to the state round.')">🔊</button>
  </div>





  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyyzfYsmUpPN8-thecXKBDHFAqPzcs1wiWQ&s" alt="Card Image">
    <div class="overlay-text">BMS placed 51 Students into the all-district band.</div>
    </div>
      <button class="audio-button" onclick="readText('BMS placed 51 Students into the all-district band.')">🔊</button>
  </div>
</div>

<script>
  function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
</script>