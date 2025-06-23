---
title: "Games and Fun"
featured_image: ''
description: ""
---

<p>Hover over or click on an image to learn about the respective club.</p>
</div>

<div class="card-container">
  <div class="card">
    <img src="https://cdn.prod.website-files.com/5ef533ae985e4ec69badc014/66dbbd9f65f6e9a2483e6274_dnd-explained.jpg" alt="Card Image">
    <div class="overlay-text">In D&D club, students can play Dungeons and Dragons, while allowing them to have a good time talking to others.</div>
  </div>

  <div class="card">
    <img src="https://aaregistry.org/wp-content/uploads/2021/03/stepping-afrika.jpg" alt="Card Image">
    <div class="overlay-text">Theta Sigma Theta step team. If you enjoy step dancing, this is the club for you! 7th and 8th graders only.</div>
  </div>

  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7hWXwervcgK_KZZrFp-LjpElQq6lV7ZmNg&s" alt="Card Image">
    <div class="overlay-text">Art club. A place where you can use your imagination and create beautiful drawings, art, sketches, etc.</div>
  </div>
  <div class="card">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_6/v1687442295/mcpsorg/sxiswcea7gegoo1eokev/BMS4.jpg" alt="Card Image">
    <div class="overlay-text">In Drama Club, students have a chance to pursue acting careers, and can participate in the playing of Elf The Musical, Jr.</div>
  </div>
  <div class="card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/640px-ChessSet.jpg" alt="Card Image">
    <div class="overlay-text">Chess club is a place to hang out, talk, and play chess. Chess also helps develop your intellectual capabilities.</div>
  </div>
</div>


 <div style="
  display: flex;
  gap: 285px;
  align-items: center;
  justify-content: center;
">
  <div>
    <button onclick="readText('In D&D club, students can play Dungeons and Dragons, while allowing them to have a good time talking to others.')">🔊</button>
  </div>
  <div>
    <button onclick="readText('Theta Sigma Theta step team. If you enjoy step dancing, this is the club for you! 7th and 8th graders only.')">🔊</button>
  </div>
  <div>
    <button onclick="readText('Art club. A place where you can use your imagination and create beautiful drawings, art, sketches, etc.')">🔊</button>
  </div>
  </div>
    <button onclick="readText('In Drama Club, students have a chance to pursue acting careers, and can participate in the playing of Elf The Musical, Jr.')">🔊</button>
  </div>
  </div>
    <button onclick="readText('Chess club is a place to hang out, talk, and play chess. Chess also helps develop your intellectual capabilities.')">🔊</button>
  </div>
</div>

<script>
  function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
</script>
