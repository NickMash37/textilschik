// jQuery slider script

$(".single-item").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });

  // JS scripts

  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  const prevFixtures = document.querySelector('.previous-fixture')
  const upcomingFixtures = document.querySelector('.upcoming-fixtures')

  prevBtn.addEventListener('click', () => {
    prevFixtures.classList.remove('disabled')
    upcomingFixtures.classList.add('disabled')
  })

  nextBtn.addEventListener('click', () => {
    upcomingFixtures.classList.remove('disabled')
    prevFixtures.classList.add('disabled')
  })