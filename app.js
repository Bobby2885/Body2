function xmark(cardId) {
  var card = document.getElementById(cardId);
  console.log(card.classList);
  card.classList.remove("card-display");
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('area[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function () {
      const targetID = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);
      console.log(targetElement.classList);
      if (targetElement) {
        targetElement.classList.add("card-display");
      }
    });
  });
});
