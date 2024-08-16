#!/bin/bash

API_URL="http://localhost:3000/api/users"

USER_ID="66bdf72d30ad34678b63f83d"  # Reemplaza con el ID del usuario real

UPDATE_DATA='{
  "color": "grey",
  "email": "nuevoemail@example.com"
}'

URL="${API_URL}/${USER_ID}"

response=$(curl -s -X PUT -H "Content-Type: application/json" -d "$UPDATE_DATA" "$URL")

echo "Respuesta de la API:"
echo "$response"