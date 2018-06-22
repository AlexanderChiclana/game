'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // array sections
  let bank = ['X','O','X','O','X','O','X','O','X']


  // click handlers section for each square
  $('#B0').on('click', function () {
    event.preventDefault()

    $('#B0').html(bank[0])
    bank.shift()
    console.log('sq 0 clicked')
    console.log(bank)
  })

  $('#B1').on('click', function () {
    event.preventDefault()

    $('#B1').html(bank[0])
    bank.shift()
    console.log('sq 1 clicked')
    console.log(bank)
  })

  $('#B2').on('click', function () {
    event.preventDefault()

    $('#B2').html(bank[0])
    bank.shift()
    console.log('sq 2 clicked')
  })

  $('#B3').on('click', function () {
    event.preventDefault()

    $('#B3').html(bank[0])
    bank.shift()
    console.log('sq 3 clicked')
  })

  $('#B4').on('click', function () {
    event.preventDefault()

    $('#B4').html(bank[0])
    bank.shift()
    console.log('sq 4 clicked')
  })

  $('#B5').on('click', function () {
    event.preventDefault()

    $('#B5').html(bank[0])
    bank.shift()
    console.log('sq 5 clicked')
  })

  $('#B6').on('click', function () {
    event.preventDefault()

    $('#B6').html(bank[0])
    bank.shift()
    console.log('sq 6 clicked')
  })

  $('#B7').on('click', function () {
    event.preventDefault()

    $('#B7').html(bank[0])
    bank.shift()
    console.log('sq 7 clicked')
  })

  $('#B8').on('click', function () {
    event.preventDefault()

    $('#B8').html(bank[0])
    bank.shift()
    console.log('sq 8 clicked')
  })
//end of handlers
})
