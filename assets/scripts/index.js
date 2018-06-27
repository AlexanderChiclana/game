'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const config = require('./config')
const store = require('./store')
const ui = require('./auth/ui.js')


// array sections
let bank = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']

// let cells = ['', '', '', '', '', '', '', '', '']

// let currentIndex = null

// let currentValue = null

// horizontal arrays

let firstRow = []

let secondRow = []

let thirdRow = []


// vertical arrays

let firstCol = []

let secondCol = []

let thirdCol = []


// diagonal arrays

let diagTop = []

let diagBot = []
const tieCheck = function () {
  if (bank.length === 0) {
    $('#winBox').html('TIE_GAME')
    $('#newGame').click()

  } else {
    console.log('in game')
  }
}

// check for win
const winCheck = function () {
  // local variables to reassign after evrery invocation
  const firstRowStr = firstRow.toString()
  const secondRowStr = secondRow.toString()
  const thirdRowStr = thirdRow.toString()

  const firstColStr = firstCol.toString()
  const secondColStr = secondCol.toString()
  const thirdColStr = thirdCol.toString()

  const diagTopStr = diagTop.toString()
  const diagBotStr = diagBot.toString()

  const xWins = 'x,x,x'
  const oWins = 'o,o,o'

  // shorter logic attempt, checking if won condition met
  if (firstRowStr === xWins || secondRowStr === xWins || thirdRowStr === xWins || firstColStr === xWins ||
    secondColStr === xWins || thirdColStr === xWins || diagTopStr === xWins || diagBotStr === xWins) {


    bank = []
    $('#winBox').html('X WINS')
    $('#newGame').click()

  } else if (firstRowStr === oWins || secondRowStr === oWins || thirdRowStr === oWins || firstColStr ===
    oWins || secondColStr === oWins || thirdColStr === oWins || diagTopStr === oWins || diagBotStr === oWins) {



    bank = []
    $('#winBox').html('O WINS')
    $('#newGame').click()

  } else {

    tieCheck()
  }
}

const sendGame = function (index, value) {
  bank.shift()
  winCheck()
  return $.ajax({
    url: config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    data: {
      "game": {
        "cell": {
          "index": `${index}`,
          "value": `${value}`
        },
        "over": false
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

$(() => {


  authEvents.addHandlers()





  // all of the boards moves for API



  // let moveCalc = function () {

  //   cells[0] = firstRow[0]
  //   cells[1] = firstRow[1]
  //   cells[2] = firstRow[2]
  //   cells[3] = secondRow[0]
  //   cells[4] = secondRow[1]
  //   cells[5] = secondRow[2]
  //   cells[6] = thirdRow[0]
  //   cells[7] = thirdRow[1]
  //   cells[8] = thirdRow[2]

  // }



  $('#reset').on('click', function () {
    // reset arrays

    bank = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
    firstRow = []
    secondRow = []
    thirdRow = []
    firstCol = []
    secondCol = []
    thirdCol = []
    diagTop = []
    diagBot = []
    $('.space').html('')
    $('#winBox').html('')
    // cells = []

  })


  // check for tie



  // click handlers section for each square
  $('#B0').on('click', function () {
    event.preventDefault()
    // code for already placed
    if ($('#B0').is(':empty')) {

      // code for valid move
      // places move, adds to row/col array, and takes away from bank
      $('#B0').html(bank[0])
      firstRow[0] = bank[0]
      firstCol[0] = bank[0]
      diagTop[0] = bank[0]



      // code for API
      sendGame(0, bank[0])
        .then(ui.moveSuccess)
        .catch(ui.moveFailure)
      // winCheck()
      // bank.shift()
    } else {
      console.log('full')
    }

  })

  $('#B1').on('click', function () {
    event.preventDefault()

    if ($('#B1').is(':empty')) {

      $('#B1').html(bank[0])
      firstRow[1] = bank[0]
      secondCol[0] = bank[0]

      // moveCalc()
      // console.log(cells)

      sendGame(1, bank[0])
      // winCheck()


    } else {
      console.log('full')
    }
  })

  $('#B2').on('click', function () {
    event.preventDefault()


    if ($('#B2').is(':empty')) {

      $('#B2').html(bank[0])
      firstRow[2] = bank[0]
      thirdCol[0] = bank[0]
      diagBot[2] = bank[0]

      // moveCalc()
      // console.log(cells)

      sendGame(2, bank[0])
      .then(ui.moveSuccess)
        .catch(ui.moveFailure)
      // winCheck()

      // bank.shift()

    } else {
      console.log('full')
    }

  })

  $('#B3').on('click', function () {
    event.preventDefault()

    if ($('#B3').is(':empty')) {

      $('#B3').html(bank[0])
      secondRow[0] = bank[0]
      firstCol[1] = bank[0]

      // moveCalc()
      // console.log(cells)

      sendGame(3, bank[0])
      .then(ui.moveSuccess)
        .catch(ui.moveFailure)
      // winCheck()

      // bank.shift()

    } else {
      console.log('full')
    }
  })

  $('#B4').on('click', function () {
    event.preventDefault()

    if ($('#B4').is(':empty')) {

      $('#B4').html(bank[0])

      secondRow[1] = bank[0]
      secondCol[1] = bank[0]
      diagBot[1] = bank[0]
      diagTop[1] = bank[0]

      // moveCalc()
      // console.log(cells)

      sendGame(4, bank[0])
      .then(ui.moveSuccess)
        .catch(ui.moveFailure)
      // winCheck()

      // bank.shift()

    } else {
      console.log('full')
    }
  })

  $('#B5').on('click', function () {
    event.preventDefault()

    if ($('#B5').is(':empty')) {

      $('#B5').html(bank[0])

      secondRow[2] = bank[0]
      thirdCol[1] = bank[0]

      // moveCalc()
      // console.log(cells)

      sendGame(5, bank[0])
      .then(ui.moveSuccess)
        .catch(ui.moveFailure)
      // winCheck()

      // bank.shift()

    } else {
      console.log('full')
    }
  })

  $('#B6').on('click', function () {
    event.preventDefault()

    if ($('#B6').is(':empty')) {

      $('#B6').html(bank[0])
      thirdRow[0] = bank[0]
      firstCol[2] = bank[0]
      diagBot[0] = bank[0]

      // moveCalc()
      // console.log(cells)

      sendGame(6, bank[0])
      .then(ui.moveSuccess)
        .catch(ui.moveFailure)
      // winCheck()

      // bank.shift()


    } else {
      console.log('full')
    }
  })

  $('#B7').on('click', function () {
    event.preventDefault()

    if ($('#B7').is(':empty')) {

      $('#B7').html(bank[0])

      thirdRow[1] = bank[0]
      secondCol[2] = bank[0]

      // moveCalc()
      // console.log(cells)

      sendGame(7, bank[0])
      .then(ui.moveSuccess)
        .catch(ui.moveFailure)
      // winCheck()

      // bank.shift()

    } else {
      console.log('full')
    }

  })

  $('#B8').on('click', function () {
    event.preventDefault()

    if ($('#B8').is(':empty')) {

      $('#B8').html(bank[0])

      thirdRow[2] = bank[0]
      thirdCol[2] = bank[0]
      diagTop[2] = bank[0]

      // moveCalc()
      // console.log(cells)

      sendGame(8, bank[0])
      .then(ui.moveSuccess)
        .catch(ui.moveFailure)
      // winCheck()

      // bank.shift()

    } else {
      console.log('full')
    }
  })
  //end of handlers



  // modal section, WORK ON LAST ONE

  // Get the modal


  let modal = document.getElementById('myModal')

  let outModal = document.getElementById('outState')
  // Get the button that opens the modal
  let btn = document.getElementById("signIn");

  let out = document.getElementById("signOut")
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  }

  out.onclick = function () {
    outModal.style.display = "block";
  }


  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  span.onclick = function () {
    outModal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal || event.target == outModal) {
      modal.style.display = "none";
      outModal.style.display = "none"
    }
  }









})

