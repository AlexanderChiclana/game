'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + 'sign-in',
    method: 'POST',
    data
    // data: data
  })
}

// game
const newGame = function () {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + 'games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sendGame = function () {


  console.log('made it this far')
  console.log('ok')

  console.log(store)
  return $.ajax({
    url: config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    data: {
      "game": {
        "cell": {
          "index": 0,
          "value": "x"
        },
        "over": false
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  console.log(store)
}


//
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame,
  sendGame
}
