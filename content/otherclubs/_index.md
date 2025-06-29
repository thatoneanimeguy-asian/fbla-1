---
title: "Other Clubs"
featured_image: ''
description: ""
---

<p>Hover over or click on an image to learn about the respective club.</p>
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
    <img src="https://static.wixstatic.com/media/9ca844_6b81b4fec8404ec3bad10c94f9b89ad2~mv2.png" alt="Card Image">
    <div class="overlay-text">COAST (Community Outreach Actively  Supporting Task force) is a club that helps the local community, and also allows for students to participate in events that require teamwork and collaboration skills.</div>
    </div>
      <button class="audio-button" onclick="readText('COAST (Community Outreach Actively  Supporting Task force) is a club that helps the local community, and also allows for students to participate in events that require teamwork and collaboration skills.')">🔊</button>
  </div>





  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://yearbookforever.com/images/Products/product_id_01.png" alt="Card Image">
    <div class="overlay-text">In yearbook club, students can help construct this years yearbook.</div>
    </div>
      <button class="audio-button" onclick="readText('In yearbook club, students can help construct this years yearbook.')">🔊</button>
  </div>





  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-faVDn0W3AieipaxmNd5ZP5J0iW04jj5w&s" alt="Card Image">
    <div class="overlay-text">Pride club is for people that are LGBTQ+ to feel at home.</div>
    </div>
      <button class="audio-button" onclick="readText('Pride club is for people that are LGBTQ+ to feel at home.')">🔊</button>
  </div>
 




  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSkEbE4eQXLCOPlixqoxMcPinhSFbLX7nZg&s" alt="Card Image">
    <div class="overlay-text">If you like field trips and traveling, TICKET club (Travel, International, Cultures, Knowledge, Education, Tourism) is something that you would enjoy.</div>
    </div>
      <button class="audio-button" onclick="readText('If you like field trips and traveling, TICKET club (Travel, International, Cultures, Knowledge, Education, Tourism) is something that you would enjoy.')">🔊</button>
  </div>






  <div class="card">
    <div class="card-image-wrapper">
    <img src="https://lirp.cdn-website.com/5f4b8e70/dms3rep/multi/opt/FCAlogo-CircleColr-01-1920w.png" alt="Card Image">
    <div class="overlay-text">FCA (Fellowship of Christian Athletes) is for people to meet and work as a team in various activities, while following biblical principles.</div>
    </div>
      <button class="audio-button" onclick="readText('FCA (Fellowship of Christian Athletes) is for people to meet and work as a team in various activities, while following biblical principles.')">🔊</button>
  </div>
</div>  

<script>
  function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
</script>
