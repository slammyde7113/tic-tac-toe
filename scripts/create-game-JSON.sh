curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=BAhJIiU0YmZmM2I4YzQxMjYwNjJmYjhlYTFhZDE3NTA1OTk0OAY6BkVG--42d5fbf0e6e9117aebe614482cc6aea4a6593fa0"
  --data '{
    "games": [
      "id": "1",
      "cells": [" "," "," "," "," "," "," "," "," "],
      "over": false,
      "player_x": {
        "id": 11,
        "email": player1@aol.com
      },
      "player_o": {
        "id": 22,
        "email": player2@aol.com
      }
    ]
  }'

# data output from curl doesn't have a trailing newline
echo
