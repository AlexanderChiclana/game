'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // array sections
  let bank = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']

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

  // reset

  $('#reset').on('click', function () {
    // reset arrays
    bank = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
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
    console.log('game reset ')
    console.log(bank)
  })


  // check for tie

  const tieCheck = function () {
    if (bank.length === 1) {
      $('#winBox').html('TIE GAME')
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

    const xWins = 'X,X,X'
    const oWins = 'O,O,O'

    // shorter logic attempt, checking if won condition met
    if (firstRowStr === xWins || secondRowStr === xWins || thirdRowStr === xWins || firstColStr === xWins ||
      secondColStr === xWins || thirdColStr === xWins || diagTopStr === xWins || diagBotStr === xWins) {

      console.log('x wins')

      bank = []
      $('#winBox').html('X WINS')

    } else if (firstRowStr === oWins || secondRowStr === oWins || thirdRowStr === oWins || firstColStr ===
      oWins || secondColStr === oWins || thirdColStr === oWins || diagTopStr === oWins || diagBotStr === oWins) {

      console.log('O wins')


      bank = []
      $('#winBox').html('O WINS')
    } else {

      tieCheck()
    }
  }


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

      //check for win
      winCheck()




      // will need function to check 3 in a row here
      // rowCheck()



      console.log('sq 0 clicked')
      console.log(bank)
      bank.shift()
      // code for invalid
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

      winCheck()

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
      firstRow[2] = bank[0]
      thirdCol[0] = bank[0]
      diagBot[2] = bank[0]


      winCheck()

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
      secondRow[0] = bank[0]
      firstCol[1] = bank[0]


      winCheck()

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

      secondRow[1] = bank[0]
      secondCol[1] = bank[0]
      diagBot[1] = bank[0]
      diagTop[1] = bank[0]

      winCheck()

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

      secondRow[2] = bank[0]
      thirdCol[1] = bank[0]


      winCheck()

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
      thirdRow[0] = bank[0]
      firstCol[2] = bank[0]
      diagBot[0] = bank[0]


      winCheck()

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

      thirdRow[1] = bank[0]
      secondCol[2] = bank[0]


      winCheck()

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

      thirdRow[2] = bank[0]
      thirdCol[2] = bank[0]
      diagTop[2] = bank[0]

      winCheck()

      bank.shift()
      console.log('sq 8 clicked')

    } else {
      console.log('full')
    }
  })
  //end of handlers

  //modal section

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("signIn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

})
