const circles = document.querySelectorAll('.circle');

var noScrollElement = document.querySelector('body');
noScrollElement.addEventListener('scroll', function(event) {
  event.preventDefault();
});

let colors_list = [
    '#CC7C89ff',
    '#958A80ff',
    '#9D9D5Aff',
    '#C9C2B3ff',
    '#408A88ff',
    '#B4B775'
]

document.documentElement.style.cursor = 'none';

function getRandomColor() {
    let color = colors_list[Math.floor(Math.random() * colors_list.length)]
    return color;
}

circles.forEach(circle => {
    setTimeout(3000, circle.addEventListener('mouseenter', function() {
      this.style.backgroundColor = getRandomColor();    
    }));
    
  });

  function noscroll() {
    window.scrollTo(0, 0);
  }
  window.addEventListener("scroll", noscroll);  
