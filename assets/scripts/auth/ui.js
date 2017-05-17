'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.log(error)
}
const signInSuccess = (data) => {
  console.log(data)
}

const signInFailure = (error) => {
  console.log(error)
}
const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordFailure = (error) => {
  console.log(error)
}
const signOutSuccess = (data) => {
  console.log(data)
}

const signOutFailure = (error) => {
  console.log(error)
}
const gamesPlayedSuccess = (data) => {
  console.log(data)
}

const gamesPlayedFailure = (error) => {
  console.log(error)
}
const createGameSuccess = (data) => {
  console.log(data)
}

const createGameFailure = (error) => {
  console.log(error)
}
const joinGameSuccess = (data) => {
  console.log(data)
}

const joinGameFailure = (error) => {
  console.log(error)
}
const box1ClickSuccess = function () {
  $('#box1').text(store.boardValue)
}
const box2ClickSuccess = function () {
  $('#box2').text(store.boardValue)
}
const box3ClickSuccess = function () {
  $('#box3').text(store.boardValue)
}
const box4ClickSuccess = function () {
  $('#box4').text(store.boardValue)
}
const box5ClickSuccess = function () {
  $('#box5').text(store.boardValue)
}
const box6ClickSuccess = function () {
  $('#box6').text(store.boardValue)
}
const box7ClickSuccess = function () {
  $('#box7').text(store.boardValue)
}
const box8ClickSuccess = function () {
  $('#box8').text(store.boardValue)
}
const box9ClickSuccess = function () {
  $('#box9').text(store.boardValue)
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
  box9ClickSuccess
}
