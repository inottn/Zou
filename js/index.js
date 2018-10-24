const testimonialLeftArrowBtn = document.querySelector('.testimonial-left-arrow-btn'),
      testimonialRightArrowBtn = document.querySelector('.testimonial-right-arrow-btn'),
      testimonialsList = document.querySelector('.testimonials-list')

let index = 0, f = 0;

Array.from(testimonialsList.children).forEach(function(item) {
  testimonialsList.appendChild(item.cloneNode(true))
})

testimonialLeftArrowBtn.addEventListener('click', function() {
  index += 1;

  if ((index > 0 && (index - 3) % 4 === 0) || (index < 0 && (index + 2) % 4 === 0)) {
    f -= 1;
    testimonialsList.style.transform = `translateX(calc((100% - 100vw) / -2 + ${f * 50}%))`
  }

  Array.from(testimonialsList.children).forEach(function(item) {
    item.style.transform = `translateX(${index * 110}%)`
  })
})

testimonialRightArrowBtn.addEventListener('click', function() {
  index -= 1;

  if ((index < 0 && (index + 3) % 4 === 0) || (index > 0 && (index - 2) % 4 === 0)) {
    f += 1;
    testimonialsList.style.transform = `translateX(calc((100% - 100vw) / -2 + ${f * 50}%))`
  }

  Array.from(testimonialsList.children).forEach(function(item) {
    item.style.transform = `translateX(${index * 110}%)`
  })
})