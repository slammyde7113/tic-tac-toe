'use strict'
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
      return true
    }
    if (pos3 && pos4 && pos5) {
      return true
    }
    if (pos6 && pos7 && pos8) {
      return true
    }
    if (pos0 && pos3 && pos6) {
      return true
    }
    if (pos1 && pos4 && pos7) {
      return true
    }
    if (pos2 && pos5 && pos8) {
      return true
    }
    if (pos0 && pos4 && pos8) {
      return true
    }
    if (pos2 && pos4 && pos6) {
      return true
    }
  }
}

const isBoardFull = function (array) {
  let total = 0
  for (let i = 0; i < array.legnth; i++) {
    if (array[i]) {
      total++
    }
  }
  if (total === 9) {
    return true
  } else {
    return false
  }
}
const boardArray = ['index1', 'index2', 'index3', 'index4', 'index5', 'index6', 'index7', 'index8', 'index9']
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
  $('#prompt').text('Signout Successful')
}

const signOutFailure = (error) => {
  console.log(error)
  $('#prompt').text('Signout Unsuccessful')
}
const gamesPlayedSuccess = (data) => {
  console.log(data.games)
  let string = 'Game IDs: '
  for (let i = 0; i < data.games.length; i++) {
    string += data.games[i].id + ', '
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
}

const createGameFailure = (error) => {
  console.log(error)
  $('#prompt').text('Game Creation Failed')
}
const joinGameSuccess = (data) => {
  console.log(data)
}

const joinGameFailure = (error) => {
  console.log(error)
  $('#create-game').hide()
  $('.container').show()
  $('#join-game').hide()
  $('#prompt').text('Game Joined')
}
const box1ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[0] === 'index1') {
    boardArray[0] = store.boardValue
    $('#box1').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
}
const box2ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[1] === 'index2') {
    boardArray[1] = store.boardValue
    $('#box2').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
}
const box3ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[2] === 'index3') {
    boardArray[2] = store.boardValue
    $('#box3').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
}
const box4ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[3] === 'index4') {
    boardArray[3] = store.boardValue
    $('#box4').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
}
const box5ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[4] === 'index5') {
    boardArray[4] = store.boardValue
    $('#box5').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
}
const box6ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[5] === 'index6') {
    boardArray[5] = store.boardValue
    $('#box6').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
}
const box7ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[6] === 'index7') {
    boardArray[6] = store.boardValue
    $('#box7').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
}
const box8ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  // testWin9(boardArray)
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[7] === 'index8') {
    boardArray[7] = store.boardValue
    $('#box8').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
  }
}
const box9ClickSuccess = function () {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn")
  } else {
    $('#prompt').text("Player O's Turn")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if ((store.counter - 1) % 2) {
      $('#prompt').text('Winner is 0! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
      $('#change-pass').hide()
    } else {
      $('#prompt').text('Winner is X! Sign In To Play Again!')
      api.signOut()
      $('#sign-in').show()
      $('#games-over').hide()
      $('#create-game').hide()
      $('#sign-out').hide()
      $('#change-pass').hide()
    }
  }
  if (boardArray[8] === 'index9') {
    boardArray[8] = store.boardValue
    $('#box9').text(store.boardValue)
  } else {
    store.counter--
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  if (winTest(isXOrO(boardArray, 'X'))) {
    store.play = true
  }
  if (winTest(isXOrO(boardArray, 'O'))) {
    store.play = true
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
  $('#prompt').text('Sign In To Play Again')
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
