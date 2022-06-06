/* ------------------------------- MENU HAMBERGER ------------------------------- */

var navigation = {
  init:function(){
      this.navigationResponsive();
  },
  navigationResponsive:function(){
      var listMenu = document.querySelector('.menu .menu__nav .nav');
      var buttonMenu = document.querySelector('.menu .button__menu');
      
      buttonMenu.addEventListener('click',function(){
      listMenu.style.setProperty("--childenNumber", listMenu.children.length);

      buttonMenu.classList.toggle("active");
      listMenu.classList.toggle('java');  /* click chuot 2 lan 'toggle' */
      });
  },
}
navigation.init();


// ================= HIDE AND SHOW FAQS
function showFaqs() {
  var display = document.getElementById("faqShow").style.display;
  if (display == "block")
    document.getElementById("faqShow").style.display = "none";
  else document.getElementById("faqShow").style.display = "block";
}
document.getElementById("myfaq").onclick = function (e) {
  showFaqs(); // call the function
};

document.addEventListener("DOMContentLoaded", function (event) {
  // <-- add this wrapper
  var chew = document.querySelectorAll(".chew");

  if (chew) {
    chew.forEach(function (el, key) {
      el.addEventListener("click", function () {
        console.log(key);

        el.classList.toggle("active");

        chew.forEach(function (ell, els) {
          if (key !== els) {
            ell.classList.remove("active");
          }
        });
      });
    });
  }
});
// click vao btn thi i dc add class
