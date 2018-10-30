const testimonialLeftArrowBtn = document.querySelector('.testimonial-left-arrow-btn'),
      testimonialRightArrowBtn = document.querySelector('.testimonial-right-arrow-btn'),
      testimonialsList = document.querySelector('.testimonials-list')

Array.from(testimonialsList.children).forEach(function(item) {
  testimonialsList.appendChild(item.cloneNode(true))
})

let index = 0,
    step = 100 / testimonialsList.childElementCount

const transformTestimonialsList = function(direction = 'left') {
  let sign = direction === 'left' ? 1 : -1
  index += sign

  if (index === sign * 3) {
    index = sign * -2
    testimonialsList.classList.add('testimonials-list-active')
    testimonialsList.style.transform = `translateX(calc((100% - 100vw) / -2 + ${index * step}%))`
    setTimeout(() => {
      this.click()
    }, 20)
  } else {
    testimonialsList.classList.remove('testimonials-list-active')
    testimonialsList.style.transform = `translateX(calc((100% - 100vw) / -2 + ${index * step}%))`
  }
}

testimonialLeftArrowBtn.addEventListener('click', function() {
  transformTestimonialsList.call(this, 'left')
})

testimonialRightArrowBtn.addEventListener('click', function() {
  transformTestimonialsList.call(this, 'right')
})