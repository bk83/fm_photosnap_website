import 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';

$(document).ready(function () {

  updateImage();
  // Call the function when the window resizes

  $(window).resize(function () {
    // up date image based on the screen size
    updateImage();
    // close menu for tablet and desktop
    closeMenu();
  });

  // mobile menu open and close
  $('.header__nav.menu-open li, .header__menu-icon').on('click', toggleMenu);


  $(".social-media-links img").hover(function () {
    var currentSrc = $(this).attr("src");
    var newSrc = ""
    if (currentSrc.includes("-w")) {
      newSrc = currentSrc.replace("-w", "");
    } else {
      newSrc = currentSrc.replace(".svg", "-w.svg");
    }
    $(this).attr("src", newSrc);
  });

})

const updateImage = () => {
  const images = document.querySelectorAll('.responsive-image');
  const imagesMbDt = document.querySelectorAll('.responsive-image-mb-dt');
  const screensize = window.innerWidth;

  upDatePath(images, 3, screensize);
  upDatePath(imagesMbDt, 2, screensize);
};


const upDatePath = (images, responsiveDevices, screensize) => {

  images.forEach(image => {
    const tableSize = 768;
    const desktopSize = 960;
    const src = image.getAttribute('src');
    const device = src.match(/mobile|tablet|desktop/)[0];
    var newSrc = ""

    if (responsiveDevices === 3) {
      if (screensize < tableSize) {
        newSrc = src.replace(device, 'mobile');
      } else if (screensize < desktopSize) {
        newSrc = src.replace(device, 'tablet');
      } else {
        newSrc = src.replace(device, 'desktop');
      }
    }

    if (responsiveDevices === 2) {
      if (screensize < tableSize) {
        newSrc = src.replace(device, 'mobile');
      } else {
        newSrc = src.replace(device, 'desktop');
      }
    }

    image.setAttribute('src', newSrc);
  });

}

const toggleMenu = () => {
  $('.header__menu-icon img').toggleClass('none');
  $('body, .header, .header__nav').toggleClass('menu-open');
}

const closeMenu = () => {
  if ($(window).width() > 768 && $('body').hasClass('menu-open')) {
    toggleMenu();
  }
}