---
title: "Achievements"
featured_image: ''
description: ""
---

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
    <button class="audio-button" onclick="readText('A few BMS FBLA students, shown winning in video game design.')">🔊</button>
  </div>
  <div>
    <button class="audio-button" onclick="readText('The Blacksburg Middle School MATHCOUNTS team got first place in their chapter, and advanced to the state round.')">🔊</button>
  </div>
  <div>
    <button class="audio-button" onclick="readText('BMS placed 51 Students into the all-district band.')">🔊</button>
  </div>
</div>

<script>
  function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
</script>