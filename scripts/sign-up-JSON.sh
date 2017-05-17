curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "yeah2",
      "password": "pass",
      "password_confirmation": "pass"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
