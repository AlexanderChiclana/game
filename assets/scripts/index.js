'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // array sections
  let bank = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']


  // click handlers section for each square
  $('#B0').on('click', function () {
    event.preventDefault()
    // code for already placed
    if ($('#B0').is(':empty')) {
      // code for valid move

      $('#B0').html(bank[0])
      bank.shift()
      console.log('sq 0 clicked')
      console.log(bank)

      // code for invalid
    } else {
      console.log('full')
    }

  })

  $('#B1').on('click', function () {
    event.preventDefault()

    if ($('#B1').is(':empty')) {

      $('#B1').html(bank[0])
      bank.shift()
      console.log('sq 1 clicked')
      console.log(bank)

    } else {
      console.log('full')
    }
  })

  $('#B2').on('click', function () {
    event.preventDefault()


    if ($('#B2').is(':empty')) {

      $('#B2').html(bank[0])
      bank.shift()
      console.log('sq 2 clicked')

    } else {
      console.log('full')
    }

  })

  $('#B3').on('click', function () {
    event.preventDefault()

    if ($('#B3').is(':empty')) {

      $('#B3').html(bank[0])
      bank.shift()
      console.log('sq 3 clicked')

    } else {
      console.log('full')
    }
  })

  $('#B4').on('click', function () {
    event.preventDefault()

    if ($('#B4').is(':empty')) {

      $('#B4').html(bank[0])
      bank.shift()
      console.log('sq 4 clicked')

    } else {
      console.log('full')
    }
  })

  $('#B5').on('click', function () {
    event.preventDefault()

    if ($('#B5').is(':empty')) {

      $('#B5').html(bank[0])
      bank.shift()
      console.log('sq 5 clicked')

    } else {
      console.log('full')
    }
  })

  $('#B6').on('click', function () {
    event.preventDefault()

    if ($('#B6').is(':empty')) {

      $('#B6').html(bank[0])
      bank.shift()
      console.log('sq 6 clicked')


    } else {
      console.log('full')
    }
  })

  $('#B7').on('click', function () {
    event.preventDefault()

    if ($('#B7').is(':empty')) {

      $('#B7').html(bank[0])
      bank.shift()
      console.log('sq 7 clicked')

    } else {
      console.log('full')
    }

  })

  $('#B8').on('click', function () {
    event.preventDefault()

    if ($('#B8').is(':empty')) {

      $('#B8').html(bank[0])
      bank.shift()
      console.log('sq 8 clicked')

    } else {
      console.log('full')
    }
  })
  //end of handlers
})
