'use strict'
const config = require('../config')
const store = require('../store')
store.counter = 0
store.boardValue = ''

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
  console.log(JSON.stringify(data))
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
  // store.gameCreator = true
  store.player = 'X'
  console.log(store.player)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games',
    method: 'POST'
  })
  .then()
}
const joinGame = function (data) {
  const gameId = JSON.stringify(data)
  store.currentGameId = gameId.replace(/\D/g, '')
  // console.log($(data).stringify())
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH'
  })
  .then(console.log('joined game: ' + store.currentGameId))
}

const box1Click = function () {
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.currentGameId)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const box2Click = function () {
  console.log('pressed')
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 1,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}
const box3Click = function () {
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 2,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}
const box4Click = function () {
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 3,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}
const box5Click = function () {
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 4,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}
const box6Click = function () {
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 5,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}
const box7Click = function () {
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 6,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}
const box8Click = function () {
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 7,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}
const box9Click = function () {
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.userToken
    },
    url: config.apiOrigins.development + '/games/' + store.currentGameId,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 8,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  gamesPlayed,
  createGame,
  joinGame,
  box1Click,
  box2Click,
  box3Click,
  box4Click,
  box5Click,
  box6Click,
  box7Click,
  box8Click,
  box9Click
}
