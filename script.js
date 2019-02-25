function functionality1() {
  let footer = document.querySelector('footer');
  let onClickFooter = function() {
    console.log("clique");
  }
  footer.addEventListener("click", onClickFooter);
}

function functionality1Bis() {
  let footer = document.querySelector('footer');
  let x = 0;
  let onClickFooterBis = function() {
      if ( onClickFooterBis) {
        x++;
      }
      console.log(`clique numéro ${x}`);
    }
  footer.addEventListener("click", onClickFooterBis);
}

// functionality1();
functionality1Bis();
