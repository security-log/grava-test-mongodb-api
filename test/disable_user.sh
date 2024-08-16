#!/bin/bash

API_URL="http://localhost:3000/api/users"

USER_ID="66bdf72d30ad34678b63f83d"  # Reemplaza con el ID del usuario real

URL="${API_URL}/${USER_ID}/disable"

response=$(curl -s -X POST "$URL")

echo "Respuesta de la API:"
echo "$response"