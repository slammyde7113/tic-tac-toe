'use strict'

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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
