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
    if (bootstrap.href === "") {
      bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    }
    else {
    bootstrap.remove("href");
  }
}
console.log(bootstrap);
  navBarClick.addEventListener('dblclick', deleteCdn)
}
// functionality1();
// functionality1Bis();
// functionality2();
// functionality3();
// functionality4();
functionality5();
