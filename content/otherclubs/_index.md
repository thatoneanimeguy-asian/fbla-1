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
    border-radius: 12px;
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
    <img src="https://static.wixstatic.com/media/9ca844_6b81b4fec8404ec3bad10c94f9b89ad2~mv2.png" alt="Card Image">
    <div class="overlay-text">COAST (Community Outreach Actively  Supporting Task force) is a club that helps the local community, and also allows for students to participate in events that require teamwork and collaboration skills.</div>
  </div>





  <div class="card">
    <img src="https://yearbookforever.com/images/Products/product_id_01.png" alt="Card Image">
    <div class="overlay-text">In yearbook club, students can help construct this year's yearbook.</div>
  </div>





  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-faVDn0W3AieipaxmNd5ZP5J0iW04jj5w&s" alt="Card Image">
    <div class="overlay-text">Pride club is for people that are LGBTQ+ to feel at home.</div>
  </div>
 




  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSkEbE4eQXLCOPlixqoxMcPinhSFbLX7nZg&s" alt="Card Image">
    <div class="overlay-text">If you like field trips and traveling, TICKET club (Travel, International, Cultures, Knowledge, Education, Tourism) is something that you would enjoy.</div>
  </div>





  <div class="card">
    <img src="https://lirp.cdn-website.com/5f4b8e70/dms3rep/multi/opt/FCAlogo-CircleColr-01-1920w.png" alt="Card Image">
    <div class="overlay-text">FCA (Fellowship of Christian Athletes) is for people to meet and work as a team in various activities, while following biblical principles.</div>
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