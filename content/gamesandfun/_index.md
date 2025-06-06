---
title: "Games and Fun"
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
    margin: 20px;
  }

  .card {
    position: relative;
    background-color: #f0f0f0;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;
    max-width: 320px;
    width: 100%;
  }

  .card:hover {
    transform: scale(1.02);
  }

  .card img {
    width: 100%;
    border-radius: 0px;
  }

  .description {
    display: none;
    margin-top: 12px;
    background-color: yellow;
    color: black;
    padding: 10px;
    border-radius: 8px;
    font-size: 16px;
  }

  .card:hover .description {
    display: block;
  }

  .card.show-description .description {
    display: block;
  }
</style>

<div class="card-container">
  <div class="card">
    <img src="https://cdn.prod.website-files.com/5ef533ae985e4ec69badc014/66dbbd9f65f6e9a2483e6274_dnd-explained.jpg" alt="Card Image" onclick="toggleDescription(this)">
    <div class="overlay-text">In D&D club, students can play Dungeons and Dragons, while allowing them to have a good time talking to others.</div>
  </div>

  <div class="card">
    <img src="https://aaregistry.org/wp-content/uploads/2021/03/stepping-afrika.jpg" alt="Card Image" onclick="toggleDescription(this)">
    <div class="overlay-text">Theta Sigma Theta step team. If you enjoy step dancing, this is the club for you! 7th and 8th graders only.</div>
  </div>

  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7hWXwervcgK_KZZrFp-LjpElQq6lV7ZmNg&s" alt="Card Image" onclick="toggleDescription(this)">
    <div class="overlay-text">Art club. A place where you can use your imagination and create beautiful drawings, art, sketches, etc.</div>
  </div>
  <div class="card">
    <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_6/v1687442295/mcpsorg/sxiswcea7gegoo1eokev/BMS4.jpg" alt="Card Image" onclick="toggleDescription(this)">
    <div class="overlay-text">In Drama Club, students have a chance to pursue acting careers, and can participate in the playing of Elf The Musical, Jr.</div>
  </div>
  <div class="card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/640px-ChessSet.jpg" alt="Card Image" onclick="toggleDescription(this)">
    <div class="overlay-text">Chess club is a place to hang out, talk, and play chess. Chess also helps develop your intellectual capabilities.</div>
  </div>
</div>

  <script>
  function toggleDescription(card) {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      card.classList.toggle('show-description');
    }
  }
</script>