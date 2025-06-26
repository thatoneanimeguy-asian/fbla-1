---
title: "Achievements"
featured_image: ''
description: ""
---

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  width: 100%;
}

.audio-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 24px;
  padding: 8px 10px;
  background-color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.audio-button:hover {
  transform: scale(1.3);
}
</style>

<div class="card-container">
  <div class="card">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_6/v1689019814/mcpsorg/sgvky6zhwewlp1xskuik/MemberswithMedals.jpg" alt="Card Image">
    <div class="overlay-text">A few BMS FBLA students, shown winning in video game design.</div>
</div>



  <div class="card">
    <img src="https://mathcounts.godmar.me/assets/images/mc-2025-team-win-small-ce539f3561932a383062c9f6488a7759.jpg" alt="Card Image">
    <div class="overlay-text">The Blacksburg Middle School MATHCOUNTS team got first place in their chapter, and advanced to the state round.</div>
</div>




  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyyzfYsmUpPN8-thecXKBDHFAqPzcs1wiWQ&s" alt="Description">
    <div class="overlay-text">BMS placed 51 Students into the all-district band.</div>
</div>
</div>


  <div style="
  display: flex;
  gap: 285px;
  align-items: center;
  justify-content: center;
">
  <div>
    <button style="font-size: 30px; padding: 10px 12px;" onclick="readText('A few BMS FBLA students, shown winning in video game design.')">🔊</button>
  </div>
  <div>
    <button style="font-size: 30px; padding: 10px 12px;" onclick="readText('The Blacksburg Middle School MATHCOUNTS team got first place in their chapter, and advanced to the state round.')">🔊</button>
  </div>
  <div>
    <button style="font-size: 30px; padding: 10px 12px;" onclick="readText('BMS placed 51 Students into the all-district band.')">🔊</button>
  </div>
</div>

<script>
  function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
</script>