function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function () {
  $(".show_img").hide();
  $(".show_hide").show();

  $(".show_hide").click(function () {
    //$(".slidingDiv").slideToggle();
    var isvisible = $(this).next(".show_img").is(":visible");

    if (isvisible) {
      $(this).next(".show_img").hide();
    } else {
      $(this).next(".show_img").show();
    }
  });
});

$(document).ready(function () {
  $(".show_img1").hide();
  $(".show_hide1").show();

  $(".show_hide1").click(function () {
    //$(".slidingDiv").slideToggle();
    var isvisible = $(this).next(".show_img1").is(":visible");

    if (isvisible) {
      $(this).next(".show_img1").hide();
    } else {
      $(this).next(".show_img1").show();
    }
  });
});

$(document).ready(function () {
  $(".show_img2").hide();
  $(".show_hide2").show();

  $(".show_hide2").click(function () {
    //$(".slidingDiv").slideToggle();
    var isvisible = $(this).next(".show_img2").is(":visible");

    if (isvisible) {
      $(this).next(".show_img2").hide();
    } else {
      $(this).next(".show_img2").show();
    }
  });
});

$(document).ready(function () {
  $(".show_img3").hide();
  $(".show_hide3").show();

  $(".show_hide3").click(function () {
    //$(".slidingDiv").slideToggle();
    var isvisible = $(this).next(".show_img3").is(":visible");

    if (isvisible) {
      $(this).next(".show_img3").hide();
    } else {
      $(this).next(".show_img3").show();
    }
  });
});

$(document).ready(function () {
  $(".show_img4").hide();
  $(".show_hide4").show();

  $(".show_hide4").click(function () {
    //$(".slidingDiv").slideToggle();
    var isvisible = $(this).next(".show_img4").is(":visible");

    if (isvisible) {
      $(this).next(".show_img4").hide();
    } else {
      $(this).next(".show_img4").show();
    }
  });

  $("show_hide").click(function () {
    var isvisible = $(this).next("show_img").is(":visible");

    if (isvisible) {
      $(this).next(".show_img").show();
    } else {
      $(this).next(".show_img4").hide();
    }
  });
});

function ShowAndHide(show, hide) {
  document.getElementById(show).className = "show";
  document.getElementById(hide).className = "hide";
}

function validateEmail(email) {
  // a very simple email validation checking.
  // you can add more complex email checking if it helps
  if (email.length <= 0) {
    return true;
  }
  var splitted = email.match("^(.+)@(.+)$");
  if (splitted == null) return false;
  if (splitted[1] != null) {
    var regexp_user = /^\"?[\w-_\.]*\"?$/;
    if (splitted[1].match(regexp_user) == null) return false;
  }
  if (splitted[2] != null) {
    var regexp_domain = /^[\w-\.]*\.[A-Za-z]{2,4}$/;
    if (splitted[2].match(regexp_domain) == null) {
      var regexp_ip = /^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
      if (splitted[2].match(regexp_ip) == null) return false;
    } // if
    return true;
  }
  return false;
}
function isInteger(s) {
  var i;
  for (i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (c < "0" || c > "9") return false;
  }
  // All characters are numbers.
  return true;
}
// function validateFrme() {
//   document.getElementById("nameErr").innerHTML = "";
//   document.getElementById("phoneErr").innerHTML = "";
//   document.getElementById("emailErr").innerHTML = "";

//   var nm = document.getElementById("nm").value;
//   var no = document.getElementById("no").value;
//   var em = document.getElementById("em").value;

//   document.getElementById("url").value = document.URL;

//   //var googleResponse = jQuery('#g-recaptcha-response').val();
//   var letters = /^[A-Za-z ]+$/;

//   if (nm == "") {
//     document.getElementById("nameErr").innerHTML = " (Please Enter Name) ";
//     document.getElementById("nm").value = "";
//     document.getElementById("nm").focus();
//     return false;
//   } else if (!document.getElementById("nm").value.match(letters)) {
//     document.getElementById("nameErr").innerHTML = " (Name must be Alphabetic)";
//     document.getElementById("nm").focus();
//     return false;
//   } else if (!isInteger(no)) {
//     document.getElementById("phoneErr").innerHTML =
//       " (Contact No. should be Numeric.)";
//     document.getElementById("no").value = "";
//     document.getElementById("no").focus();
//     return false;
//   } else if (no.length != 10) {
//     document.getElementById("phoneErr").innerHTML =
//       "*Mobile Number must be 10 digits";
//     document.getElementById("no").value = "";
//     document.getElementById("no").focus();
//     return false;
//   } else if (
//     no == "1111111111" ||
//     no == "2222222222" ||
//     no == "3333333333" ||
//     no == "1234567890" ||
//     no == "4444444444" ||
//     no == "5555555555" ||
//     no == "6666666666" ||
//     no == "9999999999" ||
//     no == "8888888888" ||
//     no == "1234567891"
//   ) {
//     document.getElementById("phoneErr").innerHTML = "* Mobile Number is Wrong";
//     document.getElementById("no").value = "";
//     document.getElementById("no").focus();
//     return false;
//   }

//   if (em == "") {
//     document.getElementById("emailErr").innerHTML = " (Please Enter Email)";
//     document.getElementById("em").value = "";
//     document.getElementById("em").focus();
//     return false;
//   } else if (!validateEmail(em)) {
//     document.getElementById("emailErr").innerHTML =
//       " (Please Enter your Valid Email)";
//     document.getElementById("em").value = "";
//     document.getElementById("em").focus();
//     return false;
//   }
//   return true;
// }

var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    stopOnLast: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".gallery a").simpleLightbox();

jQuery(function () {
  amazonmenu.init({
    menuid: "mysidebarmenu",
  });
});

$(document).ready(function () {
  //toggle the component with class accordion_body
  $(".accordion_head").click(function () {
    if ($(".accordion_body").is(":visible")) {
      $(".accordion_body").slideUp(300);
      $(".plusminus").text("+");
    }
    if ($(this).next(".accordion_body").is(":visible")) {
      $(this).next(".accordion_body").slideUp(300);
      $(this).children(".plusminus").text("+");
    } else {
      $(this).next(".accordion_body").slideDown(300);
      $(this).children(".plusminus").text("-");
    }
  });
});

next();

$("#button").click(function () {
  $("#box form").toggle("slow");
  return false;
});

$("#btn").click(function () {
  $("#box form").toggle("heide");
  return false;
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// contact form
