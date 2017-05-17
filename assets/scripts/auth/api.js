'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigins.development + '/sign-up/',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigins.development + '/sign-in/',
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
    store.id = response.user.id
    return store.userToken
  })
  // .then(console.log)
}
const changePassword = function (data) {
  console.log(store.userToken)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/change-password/' + store.id,
    method: 'PATCH',
    data
  })
  .then(console.log('changed!'))
}
const signOut = function () {
  return $.ajax({
    url: config.apiOrigins.development + '/sign-out/' + store.id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.userToken
    }
  })
}
const gamesPlayed = function () {
  return $.ajax({
    url: config.apiOrigins.development + '/games?overfalse',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.userToken
    }
  })
}
const createGame = function () {
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games',
    method: 'POST'
  })
  .then(console.log('created!'))
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  gamesPlayed,
  createGame
}
