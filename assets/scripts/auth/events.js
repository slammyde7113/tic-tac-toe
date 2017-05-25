'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

//  event.target must be a form element
const onSignUp = function (event) {
  // prefer event.target over this
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // initiates an HTTP request that was defined in the api module as singUp
  api.signUp(data) // passing the credentials to the ajax call
    .then(ui.signUpSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  // prefer event.target over this
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // initiates an HTTP request that was defined in the api module as singUp
  api.signIn(data) // passing the credentials to the ajax call
    .then(ui.signInSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  // prefer event.target over this
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // initiates an HTTP request that was defined in the api module as singUp
  api.changePassword(data) // passing the credentials to the ajax call
    .then(ui.changePasswordSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onGamesPlayed = function (event) {
  event.preventDefault()
  console.log('checking...')

  api.gamesPlayed()
    .then(ui.gamesPlayedSuccess)
    .catch(ui.gamesPlayedFailure)
}
const onCurrentGameOver = function (event) {
  event.preventDefault()
  console.log('checking1111...')

  api.currentGameOver()
    .then(ui.gamePlayedSuccess)
    .catch(ui.gamesPlayedFailure)
}
const onCreateGame = function (event) {
  // prefer event.target over this
  event.preventDefault()
  console.log('creating game...')
  // initiates an HTTP request that was defined in the api module as singUp
  api.createGame() // passing the credentials to the ajax call
    .then(ui.createGameSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.createGameFailure)
}
const onJoinGame = function (event) {
  // prefer event.target over this
  event.preventDefault()
  const data = getFormFields(event.target)
  const str = JSON.stringify(data)
  console.log(str)
  console.log(str.replace(/\D/g, ''))
  // api.gamesPlayed()
  // .then(ui.isGameInPlay())
  api.joinGame(data) // passing the credentials to the ajax call
    .then(ui.joinGameSuccess)
    .catch(ui.joinGameFailure)
    // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
}
const onBox1 = function (event) {
  // prefer event.target over this
  event.preventDefault()
  // initiates an HTTP request that was defined in the api module as singUp
  api.box1Click() // passing the credentials to the ajax call
    .then(ui.box1ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box1ClickFailure)
}
const onBox2 = function (event) {
  // prefer event.target over this
  event.preventDefault()

  // initiates an HTTP request that was defined in the api module as singUp
  api.box2Click() // passing the credentials to the ajax call
    .then(ui.box2ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box2ClickFailure)
}
const onBox3 = function (event) {
  // prefer event.target over this
  event.preventDefault()
  // initiates an HTTP request that was defined in the api module as singUp
  api.box3Click() // passing the credentials to the ajax call
    .then(ui.box3ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box3ClickFailure)
}
const onBox4 = function (event) {
  // prefer event.target over this
  event.preventDefault()
  // initiates an HTTP request that was defined in the api module as singUp
  api.box4Click() // passing the credentials to the ajax call
    .then(ui.box4ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box4ClickFailure)
}
const onBox5 = function (event) {
  // prefer event.target over this
  event.preventDefault()
  // initiates an HTTP request that was defined in the api module as singUp
  api.box5Click() // passing the credentials to the ajax call
    .then(ui.box5ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box5ClickFailure)
}
const onBox6 = function (event) {
  // prefer event.target over this
  event.preventDefault()
  // initiates an HTTP request that was defined in the api module as singUp
  api.box6Click() // passing the credentials to the ajax call
    .then(ui.box6ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box6ClickFailure)
}
const onBox7 = function (event) {
  // prefer event.target over this
  event.preventDefault()
  // initiates an HTTP request that was defined in the api module as singUp
  api.box7Click() // passing the credentials to the ajax call
    .then(ui.box7ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box7ClickFailure)
}
const onBox8 = function (event) {
  // prefer event.target over this
  event.preventDefault()
  // initiates an HTTP request that was defined in the api module as singUp
  api.box8Click() // passing the credentials to the ajax call
    .then(ui.box8ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box8ClickFailure)
}
const onBox9 = function (event) {
  // prefer event.target over this
  event.preventDefault()
  // initiates an HTTP request that was defined in the api module as singUp
  api.box9Click() // passing the credentials to the ajax call
    .then(ui.box9ClickSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.box9ClickFailure)
}
const clearBoard = function (event) {
  event.preventDefault()
  ui.boardCleared()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pass').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#games-over').on('submit', onGamesPlayed)
  $('#create-game').on('submit', onCreateGame)
  $('#join-game').on('submit', onJoinGame)
  $('#join-game').on('submit', onCurrentGameOver)
  $('#box1').on('click', onBox1)
  $('#box2').on('click', onBox2)
  $('#box3').on('click', onBox3)
  $('#box4').on('click', onBox4)
  $('#box5').on('click', onBox5)
  $('#box6').on('click', onBox6)
  $('#box7').on('click', onBox7)
  $('#box8').on('click', onBox8)
  $('#box9').on('click', onBox9)
  $('#clear-board').on('submit', clearBoard)
}

module.exports = {
  addHandlers
}
