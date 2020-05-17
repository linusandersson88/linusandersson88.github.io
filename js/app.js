const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
   let message = []
   if (name.value === '' || name.value == null) {
      message.push('Name is reqierd')
   }

   if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join('')
   }

});