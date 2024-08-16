#!/bin/bash

API_URL="http://localhost:3000/api/users"

ENABLED="true"  # Cambia a "false" para usuarios deshabilitados
SORT_BY="userInformation.name"  # Cambia al campo por el cual deseas ordenar

URL="${API_URL}?enabled=${ENABLED}&sortBy=${SORT_BY}"

response=$(curl -s -X GET "$URL")

echo "Respuesta de la API:"
echo "$response"