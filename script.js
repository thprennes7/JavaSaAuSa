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

function functionality3() {
  let firstCardText = document.getElementsByClassName('card-text')[0];
  let edit = document.querySelectorAll('div.btn-group > button')[1];
  let changeColor = function() {
    firstCardText.style.color = 'red';
  }
  edit.addEventListener('click', changeColor);
}

function functionality4() {
  let secondCardText = document.getElementsByClassName('card-text')[1];
  let edit = document.querySelectorAll('div.btn-group > button')[3];
  let changeColor = function() {
    if (secondCardText.style.color === 'green') {
      secondCardText.style.color = 'black';
    } else {
      secondCardText.style.color = 'green';
    }
  }
  edit.addEventListener('click', changeColor);
}
// functionality1();
// functionality1Bis();
// functionality2();
// functionality3();
functionality4();
