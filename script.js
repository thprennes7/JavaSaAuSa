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

function functionality5() {
  let navBarClick = document.getElementsByTagName('header')[0];
  console.log(navBarClick);
  let bootstrap = document.getElementsByTagName('link')[0];
  let deleteCdn = function() {
    if (bootstrap.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css') {
      bootstrap.href = " ";
    }
    else {
      bootstrap.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    }
  }
  console.log(bootstrap);
  navBarClick.addEventListener('dblclick', deleteCdn)
}

function functionality6() {
  let card = document.querySelectorAll(".col-md-4");
  let mousePass = document.getElementsByClassName("btn-success");
  let cardText = document.getElementsByClassName("card-text");
  let imgCard = document.getElementsByClassName("card-img-top");

  for (let i = 0; i < card.length; i++){
    mousePass[i].addEventListener('mouseover', function(){
      if(cardText[i].style.display == 'none'){
        cardText[i].style.display = 'block';
        imgCard[i].style.width = '100%';
      } else {
        cardText[i].style.display = 'none';
        imgCard[i].style.width = '20%'

      }
    });

  }
}

function functionality7() {
  let buttonSwitch = document.getElementsByClassName("btn")[1];
  let cards = document.querySelectorAll(".col-md-4");

  for (i = 0; i < cards.length; i++) {
    cards[i].style.order = i
  }
  let switchCards = function() {
    for (i = 0; i < cards.length; i++) {
      if (cards[i].style.order == (cards.length - 1)) {
        cards[i].style.order = 0;
      } else {
        cards[i].style.order = parseInt(cards[i].style.order) + 1;
        console.log(switchCards);
      }
    }
  }
  buttonSwitch.addEventListener("click", switchCards);
}

// functionality1();
// functionality1Bis();
// functionality2();
// functionality3();
// functionality4();
// functionality5();
// functionality6();
functionality7();
