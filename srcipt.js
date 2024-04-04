const txtElement = ["Fresh Seafood, Delicious Food"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";
(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }
  currentTxt = txtElement[count];
  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;
  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }
  setTimeout(ngetik, 100);
})();

// FIXED
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").classList.add("fixed-navbar");
  } else {
    document.getElementById("navbar").classList.remove("fixed-navbar");
  }
}
