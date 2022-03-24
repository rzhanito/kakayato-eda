'use strict'
const links = document.querySelectorAll('.tabs-link')

links.forEach((link) => {
   link.addEventListener('click', () => {
      links.forEach((btn) => {
         if (link.classList.contains('active')) {
            link.classList.remove('active')
         } else {
            link.classList.add('active')
         }
      })
   })
})