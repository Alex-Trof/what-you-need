
window.onload = function() {
  const article = document.getElementById('articleInput');
  const city = document.getElementById('cityResearch');
  const cityInput = document.getElementById('cityInput');
  const button = document.getElementById('searchButton');

  const articleInputHandler = function(e) {
    if(this.value.length > 3) {
      city.style.opacity =  "1"
      city.style.top = "100%"
    }
    else if (this.value.length <= 3) {
      city.style.opacity =  "0"
      city.style.top = "50%"
      city.style.position = "absolute"
    }
  }

  const cityInputHandler = function(e) {
    if(this.value.length > 3) {
      button.style.opacity =  "1"
      button.style.top = "100%"
    }
    else {
      button.style.opacity =  "0"
      button.style.top = "70%"
      button.style.position = "absolute"
    }
  }

  article.addEventListener('input', articleInputHandler);
  cityInput.addEventListener('input', cityInputHandler);
}