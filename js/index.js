const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.navigationLink')
var id = null;
const animationDistanceX = 725;
const animationDistanceMinY = -100;
const animationDistanceMinX = 0;
const animationDistanceY = 430;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = animationDistanceMinY;
  clearInterval(id);
  id = setInterval(frame, 2);
  function frame() {
    if (pos == animationDistanceX ) {
      clearInterval(id);
      myMoveBottom();
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
}

function myMoveBottom() {
    var elem = document.getElementById("animate");   
    var pos = animationDistanceMinX;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos == animationDistanceY) {
        clearInterval(id);
        myMoveLeft();
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
      }
    }
  }

  function myMoveLeft() {
    var elem = document.getElementById("animate");   
    var pos = animationDistanceX ;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos == animationDistanceMinY) {
        clearInterval(id);
        myMoveTop();   
      } else {
        pos--; 
        elem.style.left = pos + "px"; 
      }
    }
  }

  function myMoveTop() {
    var elem = document.getElementById("animate");   
    var pos = animationDistanceY;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos == animationDistanceMinX) {
        clearInterval(id);
        myMove();   
      } else {
        pos--; 
        elem.style.top = pos + "px"; 
      }
    }
  }