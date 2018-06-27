'use strict'

const store = require('../store')

const sendSuccess = function (data) {
  console.log('sendSuccess ran. Data is :', data)
}

const sendFailure = function (error) {
  console.error('sendFailure ran. Error is :', error)
}

const newGameSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('.modal-content').css('border-color', 'green')
  console.log('newGameSuccess ran. Data is :', data)
  store.game = data.game

  console.log('here is the store ', store)
}

const newGameFailure = function (error) {
  $('#message').text('Error on sign up')
  $('.modal-content').css('border-color', 'red')
  console.error('newGameFailure ran. Error is :', error)
}

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('.modal-content').css('border-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('.modal-content').css('border-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {

  $('#message').text('Signed in successfully')
  $('#myModal').css('display', 'none')
  $('#reset').trigger('click')
  $('#signIn').css('visibility','hidden')
  $('#signOut').css('visibility','visible')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
  $('#newGame').click()
  console.log('here is the store ', store)

}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('.modal-content').css('border-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#outState').css('display', 'none')
  $('#signIn').css('visibility','visible')
  $('#signOut').css('visibility','hidden')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  newGameSuccess,
  newGameFailure,
  sendSuccess,
  sendFailure
}
