'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + 'games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {

  return $.ajax({
    url: config.apiUrl + 'sign-in',
    method: 'POST',
    data
    // data: data
  })

}

// game

const newGame = function () {
  // console.log(store)
  return $.ajax({
    url: config.apiUrl + 'games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const sendGame = function (index, value) {
//   console.log('working')
//   return $.ajax({
//     url: config.apiUrl + 'games/' + store.game.id,
//     method: 'PATCH',
//     data: {
//       "game": {
//         "cell": {
//           "index": `${index}`,
//           "value": `${value}`
//         },
//         "over": false
//       }
//     },
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }


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
  // console.log('data is ', data)
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
  index
}
