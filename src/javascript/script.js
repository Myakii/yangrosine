document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = 0;
  let isScrolling = false;

  // Montre initialement la première section
  showSection(currentSectionIndex);

  function showSection(index) {
    sections.forEach((section, i) => {
      section.style.transform = `translateY(${100 * (i - index)}vh)`;
      section.classList.toggle('active', i === index);
    });
  }

  function handleScroll(event) {
    if (isScrolling) return;

    isScrolling = true;
    setTimeout(() => isScrolling = false, 1000); // Ajusté à 1000ms pour une meilleure fluidité

    if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    } else if (event.deltaY < 0 && currentSectionIndex > 0) {
      currentSectionIndex--;
    }

    showSection(currentSectionIndex);
  }

  function handleKeyDown(event) {
    if (isScrolling) return;

    if (event.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    } else if (event.key === 'ArrowUp' && currentSectionIndex > 0) {
      currentSectionIndex--;
    }

    isScrolling = true;
    setTimeout(() => isScrolling = false, 800); // Ajusté à 800ms pour synchronisation

    showSection(currentSectionIndex);
  }

  window.addEventListener('wheel', handleScroll);
  window.addEventListener('keydown', handleKeyDown);
});

// Fermer le menu
$(document).ready(function () {
  $('#toggle').click(function (event) {
    event.preventDefault();
    $('.overlay-nav').slideToggle(300);
  });
});

// Directions
$(document).ready(function () {
  let isManualScroll = false;

  // Fonction pour naviguer vers une section spécifique
  function navigateToSection(sectionIndex) {
    isManualScroll = true;
    setTimeout(() => isManualScroll = false, 1000); // Ajusté pour synchroniser avec l'animation de défilement

    $('html, body').animate({
      scrollTop: $(`.section`).eq(sectionIndex).offset().top
    }, 800);
  }

  // Cliquez sur Accueil
  $('.home').click(function (event) {
    event.preventDefault();
    navigateToSection(0);
  });

  // Cliquez sur A propos
  $('.about').click(function (event) {
    event.preventDefault();
    navigateToSection(1);
  });

  // Cliquez sur Projets
  $('.work').click(function (event) {
    event.preventDefault();
    navigateToSection(2);
  });

  // Cliquez sur Contact
  $('.contact-nav').click(function (event) {
    event.preventDefault();
    navigateToSection(3);
  });

  // Fermer le menu
  $('a').click(function () {
    $('.overlay-nav').fadeOut();
  });

  // Désactiver temporairement la gestion du défilement automatique lors de la navigation manuelle
  $(window).on('wheel keydown', function (event) {
    if (isManualScroll) {
      event.preventDefault();
    }
  });
});

// Figure animations
$(document).ready(function () {
  $('#one').on({
    mouseenter: function () {
      $('#img1').css("height", "75px")
      $('#img1').css("opacity", "1")
    }
  });
  $('#one, #two, #three, #four, #five, #six').on({
    mouseleave: function () {
      $('figcaption').css("height", "0px")
      $('figcaption').css("opacity", "0")
    }

  });
});

$(document).ready(function () {
  $('#two').on({
    mouseenter: function () {
      $('#img2').css("height", "75px")
      $('#img2').css("opacity", "1")
    }
  })
});

$(document).ready(function () {
  $('#three').on({
    mouseenter: function () {
      $('#img3').css("height", "75px")
      $('#img3').css("opacity", "1")
    }
  })
});

$(document).ready(function () {
  $('#four').on({
    mouseenter: function () {
      $('#img4').css("height", "75px")
      $('#img4').css("opacity", "1")
    }
  })
});

$(document).ready(function () {
  $('#five').on({
    mouseenter: function () {
      $('#img5').css("height", "75px")
      $('#img5').css("opacity", "1")
    }
  })
});

$(document).ready(function () {
  $('#six').on({
    mouseenter: function () {
      $('#img6').css("height", "75px")
      $('#img6').css("opacity", "1")
    }
  })
});

// Figuration
$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() < 960) {
      $('figcaption').css('display', 'none')
    }
    else {
      $('figcaption').css('display', 'block')
    }
  });
});

