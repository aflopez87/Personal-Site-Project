// This is a JavaScript file for the personal website
console.log('Hello World!')

// This is part of the form submission process for the form page
const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})