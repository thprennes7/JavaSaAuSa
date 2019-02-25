function functionality1() {
  let footer = document.querySelector('footer');
  let onClickFooter = function() {
    console.log("clique");
  }
  footer.addEventListener("click", onClickFooter);
}

function functionality1Bis() {
  let footer = document.getElementsByTagName('footer')[0];
  let x = 0;
  let onClickFooterBis = function() {
      if ( onClickFooterBis) {
        x++;
      }
      console.log(`clique numéro ${x}`);
    }
  footer.addEventListener("click", onClickFooterBis);
}

function functionality2() {
  let navBarClick = document.getElementById('navbarHeader');
  let burger = document.getElementsByClassName('navbar-toggler')[0];
  let onClickBurger = function() {

    navBarClick.classList.toggle("collapse");
}
  burger.addEventListener('click', onClickBurger);
}
// functionality1();
functionality1Bis();
functionality2();
