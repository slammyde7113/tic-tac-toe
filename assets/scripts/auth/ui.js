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

const signUpSuccess = (data) => {
  console.log(data)
  $('#prompt').text('You Have Signed Up')
}

const signUpFailure = (error) => {
  console.log(error)
  $('#prompt').text('Sign up Failed. Please Try Another Username Or Make Sure Your Username And Password Match')
}
const signInSuccess = (data) => {
  console.log(data)
  $('#change-pass').show()
  $('#create-game').show()
  $('#games-over').show()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#prompt').text('You Are Signed In! Ready To Play!')
}

const signInFailure = (error) => {
  console.log(error)
  $('#prompt').text('Sign In Failed. Please Make Sure You Have Double Checked Your Credentials And That You Have Correctly Signed Up')
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
  $('.container').hide()
  $('#games-over').hide()
  $('#sign-out').hide()
  $('#prompt').text('Signout Successful')
}

const signOutFailure = (error) => {
  console.log(error)
  $('#prompt').text('Signout Unsuccessful')
}
const gamesPlayedSuccess = (data) => {
  console.log(data.games)

  const gameArray = []
  for (let i = 0; i < data.games.length; i++) {
    console.log(data.games)
    gameArray.push(`Game ID: ${data.games[i].id} is over? ${data.games[i].over}`)
  }
  $('#prompt').empty()
  for (let i = 0; i < gameArray.length; i++) {
    $('#prompt').append('<br>' + gameArray[i] + '</br>')
  }
  // $('#prompt').html(gameArray)
}
const gamePlayedSuccess = (data) => {
  let currGame
  console.log(typeof store.currentGameId)
  for (let i = 0; i < data.games.length; i++) {
    //console.log(typeof data.games[1].id)
    if (data.games[i].id.toString() === store.currentGameId) {
      console.log(data.games[i].id)
      currGame = data.games[i]
    }
  }
  if (currGame.over) {
    gameIsOver()
    $('#prompt').text('Game has already been finished')
  } else {
    boardArray = currGame.cells
    console.log(boardArray)
  }
}
const gameOverrideFailsafe = (data) => {
  console.log(data.games)
}

const gamesPlayedFailure = (error) => {
  console.log(error)
  $('#prompt').text('No Game History')
  $('.container').hide()
  $('#join-game').show()
}
const createGameSuccess = (data) => {
  $('#game-id').text('Game ID: ' + data.game.id)
  $('#join-game').show()
  console.log(data.game.id)
  $('#prompt').text('Please Enter Game ID ' + data.game.id + ' Below To Play')
  $('#clear-board').text('X goes first')
  $('#join-field').attr('value', data.game.id)
}

const createGameFailure = (error) => {
  console.log(error)
  $('#prompt').text('Game Creation Failed')
}
const joinGameSuccess = (data) => {
  console.log(data)
  store.counter = 0
}

const joinGameFailure = (data) => {
  console.log(data)
  $('#create-game').hide()
  $('.container').show()
  $('#join-game').hide()
  $('#prompt').text('Game Joined')
}
const box1ClickSuccess = function () {
  console.log('counter: ' + store.counter)
  if ((store.counter > -1) && (store.counter < 9)) {
  if (store.counter % 2) {
    $('#prompt').text("Player X's Turn!")
  } else {
    $('#prompt').text("Player O's Turn!")
  }
  if (store.play) {
    $('.container').hide()
    $('#create-game').show()
    if (store.counter % 2 === 0) {
      console.log(store.counter)
      $('#prompt').text('Winner is X!')
      boardCleared()
    }
    if (store.counter % 2 === 1) {
      $('#prompt').text('Winner is O!')
      boardCleared()
    }
  }
  console.log(boardArray)
  if (boardArray[0] === '') {
    boardArray[0] = store.boardValue
    $('#box1').text(store.boardValue)
    store.counter++
  } else {
    $('#box1').off('click', event.onBox1)
  }
  console.log(isXOrO(boardArray, 'X'))
  console.log(winTest(isXOrO(boardArray, 'X')))
  console.log(winTest(isXOrO(boardArray, 'O')))
  // wrap this in a conditional to check is board is full
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
      boardCleared()
      $('#prompt').text('Winner is X!')
    }
    if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
      boardCleared()
      $('#prompt').text('Winner is O!')
    }
  } else {
  console.log("board is full")
  if (winTest(isXOrO(boardArray, 'X'))) {
    api.updateGame()
    store.play = true
    store.winCondition = true
    store.counter = 0
  } else if (winTest(isXOrO(boardArray, 'O'))) {
    api.updateGame()
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
      $('#prompt').text("Player X's Turn!")
    } else {
      $('#prompt').text("Player O's Turn!")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O!')
        boardCleared()
      }
    }
    console.log(boardArray)
   if (boardArray[1] === '') {
      boardArray[1] = store.boardValue
      $('#box2').text(store.boardValue)
      store.counter++
    } else {
      $('#box2').off('click', event.onBox2)
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
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
      $('#prompt').text("Player X's Turn!")
    } else {
      $('#prompt').text("Player O's Turn!")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O!')
        boardCleared()
      }
    }
    console.log(boardArray)
   if (boardArray[2] === '') {
     boardArray[2] = store.boardValue
      $('#box3').text(store.boardValue)
      store.counter++
    } else {
      $('#box3').off('click', event.onBox3)
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
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
      $('#prompt').text("Player X's Turn!")
    } else {
      $('#prompt').text("Player O's Turn!")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[3] === '') {
      boardArray[3] = store.boardValue
      $('#box4').text(store.boardValue)
      store.counter++
    } else {
      $('#box4').off('click', event.onBox4)
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      api.updateGame()
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
      $('#prompt').text("Player X's Turn!")
    } else {
      $('#prompt').text("Player O's Turn!")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        $('#prompt').text('Winner is X!')
        boardCleared()
      } else {
        $('#prompt').text('Winner is O!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[4] === '') {
      boardArray[4] = store.boardValue
      $('#box5').text(store.boardValue)
      store.counter++
    } else {
      $('#box5').off('click', event.onBox5)
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      api.updateGame()
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
      $('#prompt').text("Player X's Turn!")
    } else {
      $('#prompt').text("Player O's Turn!")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        api.updateGame()
        $('#prompt').text('Winner is X!')
        boardCleared()
      } else {
        api.updateGame()
        $('#prompt').text('Winner is O!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[5] === '') {
     boardArray[5] = store.boardValue
     $('#box6').text(store.boardValue)
     store.counter++
    } else {
      $('#box6').off('click', event.onBox6)
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      api.updateGame()
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
      $('#prompt').text("Player X's Turn!")
    } else {
      $('#prompt').text("Player O's Turn!")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        api.updateGame()
        $('#prompt').text('Winner is X!')
        boardCleared()
      } else {
        api.updateGame()
        $('#prompt').text('Winner is O!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[6] === '') {
      boardArray[6] = store.boardValue
      $('#box7').text(store.boardValue)
      store.counter++
    } else {
      $('#box7').off('click', event.onBox7)
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      api.updateGame()
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
      $('#prompt').text("Player X's Turn!")
    } else {
      $('#prompt').text("Player O's Turn!")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        api.updateGame()
        $('#prompt').text('Winner is X!')
        boardCleared()
      } else {
        api.updateGame()
        $('#prompt').text('Winner is O!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[7] === '') {
      boardArray[7] = store.boardValue
      $('#box8').text(store.boardValue)
      store.counter++
    } else {
      $('#box8').off('click', event.onBox8)
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else {
      api.updateGame()
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
      $('#prompt').text("Player X's Turn!")
    } else {
      $('#prompt').text("Player O's Turn!")
    }
    if (store.play) {
      $('.container').hide()
      $('#create-game').show()
      if ((store.counter) % 2) {
        api.updateGame()
        $('#prompt').text('Winner is X!')
        boardCleared()
      } else {
        api.updateGame()
        $('#prompt').text('Winner is O!')
        boardCleared()
      }
    }
    console.log(boardArray)
    if (boardArray[8] === '') {
      boardArray[8] = store.boardValue
      $('#box9').text(store.boardValue)
      store.counter++
    } else {
    //  $('#box9').off('click', event.onBox9)
      $('#box9').off('click', event.onBox9)
    }
    console.log(isXOrO(boardArray, 'X'))
    console.log(winTest(isXOrO(boardArray, 'X')))
    console.log(winTest(isXOrO(boardArray, 'O')))
    // wrap this in a conditional to check is board is full
      if (winTest(isXOrO(boardArray, 'X'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is X!')
      }
      if (winTest(isXOrO(boardArray, 'O'))) {
        api.updateGame()
        store.play = true
        store.winCondition = true
        store.counter = 0
        boardCleared()
        $('#prompt').text('Winner is O!')
      }
    } else {
    console.log("board is full")
    if (winTest(isXOrO(boardArray, 'X'))) {
      api.updateGame()
      store.play = true
      store.winCondition = true
      store.counter = 0
    } else if (winTest(isXOrO(boardArray, 'O'))) {
      api.updateGame()
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
  api.updateGame()
  api.signOut()
  $('.container').hide()
  $('#sign-in').show()
  $('#games-over').hide()
  $('#create-game').hide()

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
  store.winCondition = true
  console.log(store.winCondition)
  $('.sign-in-field').hide()
  $('.sign-in-button').show()
  $('#sign-out').hide()
  $('.sign-in-button').val('Return To Main Menu')
  // $('#prompt').text('Sign In To Play Again')
}
const isGameInPlay = function (data) {
  let localGame = false
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].id === store.currentGameId) {
      if (data.games[i].over === true) {
      console.log(data.games[i])
      localGame = data.games[i].over
    } }}
  console.log(localGame)
}

const gameIsOver = function (data) {
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
  $('.sign-in-field').hide()
  $('.sign-in-button').show()
  $('.sign-in-button').val('Game finished, click to return to Main Menu')
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
  gamePlayedSuccess,
  gamesPlayedFailure,
  createGameSuccess,
  createGameFailure,
  joinGameSuccess,
  joinGameFailure,
  isGameInPlay,
  gameIsOver,
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
