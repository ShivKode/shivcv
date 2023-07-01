document.addEventListener("DOMContentLoaded", function() {
    var profilePic = document.querySelector(".profile-pic");
    var body = document.querySelector("body");
  
    setInterval(function() {
      body.style.backgroundColor = getRandomColor();
    }, 100); // Change color every 3 seconds
  
    profilePic.addEventListener("mouseenter", function() {
      profilePic.classList.add("hovered");
    });
  
    profilePic.addEventListener("mouseleave", function() {
      profilePic.classList.remove("hovered");
    });
  });
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
  
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }

  var bee = document.querySelector('.bee');
  var body = document.querySelector('body');
  var beeWidth = bee.offsetWidth;
  var beeHeight = bee.offsetHeight;
  
  function getRandomPosition() {
    var x = Math.random() * (body.offsetWidth - beeWidth);
    var y = Math.random() * (body.offsetHeight - beeHeight);
    return { x: x, y: y };
  }
  
  function moveBee() {
    var position = getRandomPosition();
    var currentX = parseFloat(getComputedStyle(bee).left);
    var currentY = parseFloat(getComputedStyle(bee).top);
  
    var deltaX = position.x - currentX;
    var deltaY = position.y - currentY;
    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    var duration = Math.min(10000, distance * 2);
  
    bee.style.transitionDuration = duration + 'ms';
    bee.style.left = position.x + 'px';
    bee.style.top = position.y + 'px';
  }
  
  setInterval(moveBee, 100);

  var profilePic = document.querySelector('.profile-pic');
  var backgroundMusic = document.getElementById('backgroundMusic');
  
  profilePic.addEventListener('mouseenter', function() {
    backgroundMusic.play();
  });
  
  profilePic.addEventListener('mouseleave', function() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
  });
  
  

  
  
  
  
  
  

  