let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  const links = document.querySelector('.project-links');
  if (prevScrollpos - currentScrollPos >= 0) {
    document.querySelector('.header').style.top = '0';
    if (links) {
      links.style.top = '0';
    }
  } else {
    document.querySelector('.header').style.top = '-20vh';
    if (links) {
      links.style.top = '-20vh';
    }
  }

  prevScrollpos = currentScrollPos;
};
