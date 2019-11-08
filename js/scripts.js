console.log('Hello from js/scripts.js!');


document.getElementById("get-some")
        .addEventListener("click", function() {
  document.getElementById("emtpy-start").hidden = true;
  document.getElementById("reveal-some").hidden = false;
}, false);
