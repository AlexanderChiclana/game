'use strict'

const store = require('../store')

const sendSuccess = function (data) {
  console.log('sendSuccess ran. Data is :', data)
}

const sendFailure = function (error) {
  console.error('sendFailure ran. Error is :', error)
}

const newGameSuccess = function (data) {
  console.log('newGameSuccess ran. Data is :', data)
  store.game = data.game
}

const newGameFailure = function (error) {
  $('#message').text('Error on sign up')
  $('.modal-content').css('border-color', 'red')
  console.error('newGameFailure ran. Error is :', error)
}

const signUpSuccess = function (data) {
  $('.modal-content').css('border-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('.modal-content').css('border-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {

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
  $('.modal-content').css('border-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

// for moves
const moveSuccess = function (data) {


  console.log('moveSuccess ran and heres the data: ', data)
}

const moveFailure = function (error) {
  console.error('moveFailure ran. Error is :', error)

}

const doneSuccess = function (data) {
  console.log('doneSuccess ran. Data is :', data)
}

const doneFailure = function (error) {
  console.error('doneFailure ran. Error is :', error)
}
//

const signOutSuccess = function () {
  $('#outState').css('display', 'none')
  $('#signIn').css('visibility','visible')
  $('#signOut').css('visibility','hidden')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('.out-modal-content').css('border-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('.out-modal-content').css('border-color', 'red')
  console.error('changePasswordFailure ran. Error is :', error)
}

const onGetSucess = function (data) {
  data.games.forEach(games => {
    const gameHTML = (`
      <h4> Game ${games.id} has a record of ${games.cells}</h4>
    `)
    $('#gameHistory').append(gameHTML)
  })
  console.table(data.games)
}

const onGetFailure = function (err) {
  console.error(err)
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
  sendFailure,
  moveSuccess,
  moveFailure,
  doneSuccess,
  doneFailure,
  onGetSucess,
  onGetFailure
}
