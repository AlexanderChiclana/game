'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// const indexJs = require('../index')

// const index = require('../index')


// game info section

// creates a new board after reset and login
const onNewGame = function (event) {
  event.preventDefault()

  console.log('new game created')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// for sending moves
// const onSend = function (event) {

//   event.preventDefault()
//   console.log(indexJs.currentValue)
//   console.log(indexJs.currentIndex)
//   console.log('new game created')



//   api.sendGame(index, value)
//     .then(ui.sendSuccess)
//     .catch(ui.sendFailure)
// }




const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#newGame').on('click', onNewGame)
  // $('#reset').on('click', index.visualReset)
}

module.exports = {
  addHandlers,
  onNewGame
  // onReset
}
