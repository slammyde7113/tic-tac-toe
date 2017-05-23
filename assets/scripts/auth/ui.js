'use strict'
const events = require('./events')
const store = require('../store')
const api = require('./api')
store.play = false
const isXOrO = function (array, letter) {
  const results = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === letter) {
      results.push(i)
    }
  }
  return results
}
// make a get api for values on api
// pos0-9 can be an empty string === false
const winTest = function (array) {
  let pos0 = false
  let pos1 = false
  let pos2 = false
  let pos3 = false
  let pos4 = false
  let pos5 = false
  let pos6 = false
  let pos7 = false
  let pos8 = false
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      pos0 = true
    }
    if (array[i] === 1) {
      pos1 = true
    }
    if (array[i] === 2) {
      pos2 = true
    }
    if (array[i] === 3) {
      pos3 = true
    }
    if (array[i] === 4) {
      pos4 = true
    }
    if (array[i] === 5) {
      pos5 = true
    }
    if (array[i] === 6) {
      pos6 = true
    }
    if (array[i] === 7) {
      pos7 = true
    }
    if (array[i] === 8) {
      pos8 = true
    }
    if (pos0 && pos1 && pos2) {
      pos0 = false
      pos1 = false
      pos2 = false
      pos3 = false
      pos4 = false
      pos5 = false
      pos6 = false
      pos7 = false
      pos8 = false
      return true
    }
    if (pos3 && pos4 && pos5) {
      pos0 = false
      pos1 = false
      pos2 = false
      pos3 = false
      pos4 = false
      pos5 = false
      pos6 = false
      pos7 = false
      pos8 = false
      return true
    }
    if (pos6 && pos7 && pos8) {
      pos0 = false
      pos1 = false
      pos2 = false
      pos3 = false
      pos4 = false
      pos5 = false
      pos6 = false
      pos7 = false
      pos8 = false
      return true
    }
    if (pos0 && pos3 && pos6) {
      pos0 = false
      pos1 = false
      pos2 = false
      pos3 = false
      pos4 = false
      pos5 = false
      pos6 = false
      pos7 = false
      pos8 = false
      return true
    }
    if (pos1 && pos4 && pos7) {
      pos0 = false
      pos1 = false
      pos2 = false
      pos3 = false
      pos4 = false
      pos5 = false
      pos6 = false
      pos7 = false
      pos8 = false
      return true
    }
    if (pos2 && pos5 && pos8) {
      pos0 = false
      pos1 = false
      pos2 = false
      pos3 = false
      pos4 = false
      pos5 = false
      pos6 = false
      pos7 = false
      pos8 = false
      return true
    }
    if (pos0 && pos4 && pos8) {
      pos0 = false
      pos1 = false
      pos2 = false
      pos3 = false
      pos4 = false
      pos5 = false
      pos6 = false
      pos7 = false
      pos8 = false
      return true
    }
    if (pos2 && pos4 && pos6) {
      pos0 = false
      pos1 = false
      pos2 = false
      pos3 = false
      pos4 = false
      pos5 = false
      pos6 = false
      pos7 = false
      pos8 = false
      return true
    }
  }
}

const isBoardFull = function (array) {
  let total = 0
  for (let i = 0; i < array.legnth; i++) {
    if (array[i] != '') {
      total++
    }
  }
  if (total === 8) {
    return true
  } else {
    return false
  }
}
let boardArray = ['', '', '', '', '', '', '', '', '']
const testWin1 = function (array) {
  if (array[1] === array[2] === array[3]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
    } else {
      console.log('winner is X')
      store.play = false
    }
  } else {
    console.log(store.counter)
    console.log('not over yet')
    // console.log(isBoardFull(boardArray))
  }
  console.log(store.play)
}
const testWin2 = function (array) {
  if (array[1] === array[2] === array[3]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
      // console.log(boardArray)
    } else {
      console.log('winner is X')
      store.play = false
      // console.log(boardArray)
    }
  } else {
    console.log('not over yet')
    // console.log(boardArray)
  }
  console.log(store.play)
}
const testWin3 = function (array) {
  if (array[4] === array[5] === array[6]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
      // console.log(boardArray)
    } else {
      console.log('winner is X')
      store.play = false
      // console.log(boardArray)
    }
  } else {
    console.log('not over yet')
    // console.log(boardArray)
  }
  console.log(store.play)
}
const testWin4 = function (array) {
  if (array[7] === array[8] === array[9]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
      // console.log(boardArray)
    } else {
      console.log('winner is X')
      store.play = false
      // console.log(boardArray)
    }
  } else {
    console.log('not over yet')
    // console.log(boardArray)
  }
  console.log(store.play)
}
const testWin5 = function (array) {
  if (boardArray[1] === boardArray[4] === boardArray[7]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
      // console.log(boardArray)
    } else {
      console.log('winner is X')
      store.play = false
      // console.log(boardArray)
    }
  } else {
    console.log('not over yet')
    // console.log(boardArray)
  }
  console.log(store.play)
}
const testWin6 = function (array) {
  if (boardArray[2] === boardArray[5] === boardArray[8]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
      // console.log(boardArray)
    } else {
      console.log('winner is X')
      store.play = false
      // console.log(boardArray)
    }
  } else {
    console.log('not over yet')
    // console.log(boardArray)
  }
  console.log(store.play)
}
const testWin7 = function (array) {
  if (boardArray[3] === boardArray[6] === boardArray[9]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
      // console.log(boardArray)
    } else {
      console.log('winner is X')
      store.play = false
      // console.log(boardArray)
    }
  } else {
    console.log('not over yet')
    // console.log(boardArray)
  }
  console.log(store.play)
}
const testWin8 = function (array) {
  if (boardArray[7] === boardArray[5] === boardArray[3]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
      // console.log(boardArray)
    } else {
      console.log('winner is X')
      store.play = false
      // console.log(boardArray)
    }
  } else {
    console.log('not over yet')
    // console.log(boardArray)
  }
  console.log(store.play)
}
const testWin9 = function (array) {
  if (boardArray[1] === boardArray[5] === boardArray[9]) {
    if (store.counter % 2) {
      console.log('winner is O')
      store.play = false
      // console.log(boardArray)
    } else {
      console.log('winner is X')
      store.play = false
      // console.log(boardArray)
    }
  } else {
    console.log('not over yet')
    // console.log(boardArray)
  }
  console.log(store.play)
}

const signUpSuccess = (data) => {
  console.log(data)
  $('#prompt').text('You Have Signed Up')
}

const signUpFailure = (error) => {
  console.log(error)
  $('#prompt').text('Sign up Failed')
}
const signInSuccess = (data) => {
  console.log(data)
  $('#change-pass').show()
  $('#create-game').show()
  $('#games-over').show()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#prompt').text('Sign In Successful')
}

const signInFailure = (error) => {
  console.log(error)
  $('#prompt').text('Sign In Failed')
}
const changePasswordSuccess = (data) => {
  console.log(data)
  $('#prompt').text('Password Changed')
}

const changePasswordFailure = (error) => {
  console.log(error)
  $('#prompt').text('Password Change Failed')
}
const signOutSuccess = (data) => {
  console.log(data)
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-pass').hide()
  $('.sign-in-field').show()
  $('.sign-in-button').show()
  $('.sign-in-button').val('Sign in')
  $('#prompt').text('Signout Successful')
}

const signOutFailure = (error) => {
  console.log(error)
  $('#prompt').text('Signout Unsuccessful')
}
const gamesPlayedSuccess = (data) => {
  console.log(data.games)
  let string = ''
  for (let i = 0; i < data.games.length; i++) {
    console.log(data.games)
    string += 'Game ID: ' + data.games[i].id + ' is over? ' + data.games[i].over +'______'
  }
  $('#prompt').text(string)
}

const gamesPlayedFailure = (error) => {
  console.log(error)
  $('#prompt').text('No Game History')
}
const createGameSuccess = (data) => {
  $('#game-id').text('Game ID: ' + data.game.id)
  $('#join-game').show()
  console.log(data.game.id)
  $('#prompt').text('Game Created: ID ' + data.game.id)
  $('#clear-board').text('X goes first')
}

const createGameFailure = (error) => {
  console.log(error)
  $('#prompt').text('Game Creation Failed')
}
const joinGameSuccess = (data) => {
  console.log(data)
  store.counter = 0
}

const joinGameFailure = (error) => {
  console.log(error)
  $('#create-game').hide()
  $('.container').show()
  $('#join-game').hide()
  $('#prompt').text('Game Joined')
}
const box1ClickSuccess = function () {
  console.log('counter: ' + store.counter)
  if ((store.counter > -1) && (store.counter < 9)) {
  if (store.counter % 2) {
    $('#prompt').text("Player O's Turn")
  } else {
    $('#prompt').text("Player X's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if (store.counter % 2 === 0) {
      console.log(store.counter)
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      boardCleared()
    }
    if (store.counter % 2 === 1) {
      $('#prompt').text('Winner is O! Sign In To Play Again!')
      boardCleared()
    }
  }
  console.log(boardArray)
  if (boardArray[0] === '') {
    boardArray[0] = store.boardValue
    $('#box1').text(store.boardValue)
    store.counter++
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  // wrap this in a conditional to check is board is full
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
      boardCleared()
      $('#prompt').text('Winner is X! Sign In To Play Again!')
    }
    if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
      boardCleared()
      $('#prompt').text('Winner is O! Sign In To Play Again!')
    }
  } else {
  console.log("board is full")
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
    store.winCondition = true
    store.counter = 0
  } else if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
    store.winCondition = true
    store.counter = 0
  } else {
    store.play = true
    store.counter = 0
    $('#prompt').text('Tie')
    $('#clear-board').text('Click any tile to restart')
    boardCleared()
  }
}
}
const box2ClickSuccess = function () {
  console.log('counter: ' + store.counter)
    if ((store.counter > -1) && (store.counter < 9)) {
    if (store.counter % 2) {
      $('#prompt').text("Player O's Turn")
    } else {
      $('#prompt').text("Player X's Turn")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X! Sign In To Play Again!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O! Sign In To Play Again!')
        boardCleared()
      }
    }
    console.log(boardArray)
   if (boardArray[1] === '') {
      boardArray[1] = store.boardValue
      $('#box2').text(store.boardValue)
      store.counter++
    } else {
      store.counter--
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X! Sign In To Play Again!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O! Sign In To Play Again!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      store.play = true
      store.counter = 0
      $('#prompt').text('Tie')
      $('#clear-board').text('Click any tile to restart')
      boardCleared()
    }
  }
  }
const box3ClickSuccess = function () {
  console.log('counter: ' + store.counter)
    if ((store.counter > -1) && (store.counter < 9)) {
    if (store.counter % 2) {
      $('#prompt').text("Player O's Turn")
    } else {
      $('#prompt').text("Player X's Turn")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X! Sign In To Play Again!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O! Sign In To Play Again!')
        boardCleared()
      }
    }
    console.log(boardArray)
   if (boardArray[2] === '') {
     boardArray[2] = store.boardValue
      $('#box3').text(store.boardValue)
      store.counter++
    } else {
      store.counter--
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X! Sign In To Play Again!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O! Sign In To Play Again!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      store.play = true
      store.counter = 0
      $('#prompt').text('Tie')
      $('#clear-board').text('Click any tile to restart')
      boardCleared()
    }
  }
  }
const box4ClickSuccess = function () {
  console.log('counter: ' + store.counter)
    if ((store.counter > -1) && (store.counter < 9)) {
    if (store.counter % 2) {
      $('#prompt').text("Player O's Turn")
    } else {
      $('#prompt').text("Player X's Turn")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X! Sign In To Play Again!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O! Sign In To Play Again!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[3] === '') {
      boardArray[3] = store.boardValue
      $('#box4').text(store.boardValue)
      store.counter++
    } else {
      store.counter--
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X! Sign In To Play Again!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O! Sign In To Play Again!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      store.play = true
      store.counter = 0
      $('#prompt').text('Tie')
      $('#clear-board').text('Click any tile to restart')
      boardCleared()
    }
  }
  }
const box5ClickSuccess = function () {
  console.log('counter: ' + store.counter)
    if ((store.counter > -1) && (store.counter < 9)) {
    if (store.counter % 2) {
      $('#prompt').text("Player O's Turn")
    } else {
      $('#prompt').text("Player X's Turn")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X! Sign In To Play Again!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O! Sign In To Play Again!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[4] === '') {
      boardArray[4] = store.boardValue
      $('#box5').text(store.boardValue)
      store.counter++
    } else {
      store.counter--
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X! Sign In To Play Again!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O! Sign In To Play Again!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      store.play = true
      store.counter = 0
      $('#prompt').text('Tie')
      $('#clear-board').text('Click any tile to restart')
      boardCleared()
    }
  }
  }
const box6ClickSuccess = function () {
  console.log('counter: ' + store.counter)
    if ((store.counter > -1) && (store.counter < 9)) {
    if (store.counter % 2) {
      $('#prompt').text("Player O's Turn")
    } else {
      $('#prompt').text("Player X's Turn")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X! Sign In To Play Again!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O! Sign In To Play Again!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[5] === '') {
     boardArray[5] = store.boardValue
     $('#box6').text(store.boardValue)
     store.counter++
    } else {
      store.counter--
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X! Sign In To Play Again!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O! Sign In To Play Again!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      store.play = true
      store.counter = 0
      $('#prompt').text('Tie')
      $('#clear-board').text('Click any tile to restart')
      boardCleared()
    }
  }
  }
const box7ClickSuccess = function () {
  console.log('counter: ' + store.counter)
    if ((store.counter > -1) && (store.counter < 9)) {
    if (store.counter % 2) {
      $('#prompt').text("Player O's Turn")
    } else {
      $('#prompt').text("Player X's Turn")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X! Sign In To Play Again!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O! Sign In To Play Again!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[6] === '') {
      boardArray[6] = store.boardValue
      $('#box7').text(store.boardValue)
      store.counter++
    } else {
      store.counter--
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X! Sign In To Play Again!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O! Sign In To Play Again!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      store.play = true
      store.counter = 0
      $('#prompt').text('Tie')
      $('#clear-board').text('Click any tile to restart')
      boardCleared()
    }
  }
  }
const box8ClickSuccess = function () {
  console.log('counter: ' + store.counter)
    if ((store.counter > -1) && (store.counter < 9)) {
    if (store.counter % 2) {
      $('#prompt').text("Player O's Turn")
    } else {
      $('#prompt').text("Player X's Turn")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X! Sign In To Play Again!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O! Sign In To Play Again!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[7] === '') {
      boardArray[7] = store.boardValue
      $('#box8').text(store.boardValue)
      store.counter++
    } else {
      store.counter--
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X! Sign In To Play Again!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O! Sign In To Play Again!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      store.play = true
      store.counter = 0
      $('#prompt').text('Tie')
      $('#clear-board').text('Click any tile to restart')
      boardCleared()
    }
  }
  }
const box9ClickSuccess = function () {
  console.log('counter: ' + store.counter)
    if ((store.counter > -1) && (store.counter < 9)) {
    if (store.counter % 2) {
      $('#prompt').text("Player O's Turn")
    } else {
      $('#prompt').text("Player X's Turn")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X! Sign In To Play Again!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O! Sign In To Play Again!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[8] === '') {
      boardArray[8] = store.boardValue
      $('#box9').text(store.boardValue)
      store.counter++
    } else {
      store.counter--
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X! Sign In To Play Again!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O! Sign In To Play Again!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      store.play = true
      store.counter = 0
      $('#prompt').text('Tie')
      $('#clear-board').text('Click any tile to restart')
      boardCleared()
    }
  }
}
const boardCleared = function () {
  api.signOut()
  $('.container').hide()
  $('#sign-in').show()
  $('#games-over').hide()
  $('#create-game').hide()
  $('#sign-out').hide()
  $('#change-pass').hide()
  $('#box1').text('')
  $('#box2').text('')
  $('#box3').text('')
  $('#box4').text('')
  $('#box5').text('')
  $('#box6').text('')
  $('#box7').text('')
  $('#box8').text('')
  $('#box9').text('')
  boardArray = ['', '', '', '', '', '', '', '', '']
  store.play = false
  $('.sign-in-field').hide()
  $('.sign-in-button').show()
  $('.sign-in-button').val('Play Again?')
  // $('#prompt').text('Sign In To Play Again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  gamesPlayedSuccess,
  gamesPlayedFailure,
  createGameSuccess,
  createGameFailure,
  joinGameSuccess,
  joinGameFailure,
  box1ClickSuccess,
  box2ClickSuccess,
  box3ClickSuccess,
  box4ClickSuccess,
  box5ClickSuccess,
  box6ClickSuccess,
  box7ClickSuccess,
  box8ClickSuccess,
  box9ClickSuccess,
  boardCleared
}
