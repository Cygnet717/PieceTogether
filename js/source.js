
//register functionality
let registerUser = (e) => {
  e.preventDefault();
  //create new user in db and send on to bulk add events
  //for now send on to logged in user page
  window.location.replace('userPage.html')
}

//login functionality
let loginUser = (e) => {
  e.preventDefault()
  //validate user info using backend
  window.location.replace('userPage.html')
}

//main user page functionality
let userFName = 'Frodo'
let userLName = 'Baggins'
const greetingBox = document.getElementById('greetingBox')


greetingBox.append(`${userFName} ${userLName}`)

