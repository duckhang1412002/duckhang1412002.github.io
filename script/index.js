$('#lich-hoat-dong .owl-carousel').owlCarousel({
    dots: false,
    loop: true,
    margin: 32,
    padding: 16,
    nav: true,
    navText: [
      "<img src='./img/prev.png'>","<img src='./img/next.png'>"
    ],
    navContainer: '#lich-hoat-dong .custom-nav',
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 3
      }
    }

  });
  $('.banner .owl-carousel').owlCarousel({
    dots: true,
    stagePadding: 0,
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.banner .custom-nav',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }

  });
  $('.doi-tac-hoat-dong .owl-carousel').owlCarousel({
    dots: false,
    loop: false,
    margin: 132,
    nav: false,
    responsive: {
      0: {
        items: 1,
        loop: true,
        autoplay: 1000,
        smartSpeed: 2000
      },
      768: {
        items: 3
      }
    }

  });
  const mediaBTN = document.getElementById("mediaBTN");
  const birthdayBTN = document.getElementById("birthdayBTN");
  const memberBTN = document.getElementById("memberBTN");

  const media = document.getElementById("Media");
  const birthday = document.getElementById("Birthday");
  const member = document.getElementById("Member");

  birthdayBTN.addEventListener("click", function handleClick() {
    {
      media.style.display = "none";
      birthday.style.display = "block";
      member.style.display = "none";
      birthdayBTN.style.background = "#FE4600"
      birthdayBTN.style.color = "white";
      mediaBTN.style.background = ""
      mediaBTN.style.color = "";
      memberBTN.style.background = "";
      memberBTN.style.color = "";
    }
  });
  mediaBTN.addEventListener("click", function handleClick() {
    {
      media.style.display = "block";
      birthday.style.display = "none";
      member.style.display = "none";
      mediaBTN.style.background = "#FE4600"
      mediaBTN.style.color = "white";
      birthdayBTN.style.background = "";
      birthdayBTN.style.color = "";
      memberBTN.style.background = "";
      memberBTN.style.color = "";
    }
  });
  memberBTN.addEventListener("click", function handleClick() {
    {
      media.style.display = "none";
      birthday.style.display = "none";
      member.style.display = "block";
      memberBTN.style.background = "#FE4600"
      memberBTN.style.color = "white";
      birthdayBTN.style.background = "";
      birthdayBTN.style.color = "";
      mediaBTN.style.background = ""
      mediaBTN.style.color = "";
    }
  });

  const diamondBTN = document.getElementById("diamondBTN");
  const goldBTN = document.getElementById("goldBTN");
  const silverTN = document.getElementById("silverBTN");

  const diamond = document.getElementById("Diamond");
  const gold = document.getElementById("Gold");
  const silver = document.getElementById("Silver");
  diamondBTN.addEventListener("click", function handleClick() {
    {
      diamond.style.display = "block";
      gold.style.display = "none";
      silver.style.display = "none";
      diamondBTN.style.background = "#FE4600"
      diamondBTN.style.color = "white";
      goldBTN.style.background = ""
      goldBTN.style.color = "";
      silverBTN.style.background = "";
      silverBTN.style.color = "";
    }
  });
  goldBTN.addEventListener("click", function handleClick() {
    {
      diamond.style.display = "none";
      gold.style.display = "block";
      silver.style.display = "none";
      diamondBTN.style.background = ""
      diamondBTN.style.color = "";
      goldBTN.style.background = "#FE4600"
      goldBTN.style.color = "white";
      silverBTN.style.background = "";
      silverBTN.style.color = "";
    }
  });
  silverBTN.addEventListener("click", function handleClick() {
    {
      diamond.style.display = "none";
      gold.style.display = "none";
      silver.style.display = "block";
      diamondBTN.style.background = ""
      diamondBTN.style.color = "";
      goldBTN.style.background = ""
      goldBTN.style.color = "";
      silverBTN.style.background = "#FE4600";
      silverBTN.style.color = "white";
    }
  });