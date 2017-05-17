curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=BAhJIiU3YTk2ZWVhMDc5NGY0MGRmZWFmOTM0MjVlNmIyZjE5NAY6BkVG--a106fad1e5add3860e017552f139f78f1a2fa3f7"
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
