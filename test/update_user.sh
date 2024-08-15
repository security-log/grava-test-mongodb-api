#!/bin/bash

# URL del endpoint de la API
API_URL="http://localhost:3000/api/users"

# ID del usuario que deseas modificar
USER_ID="66bdf72d30ad34678b63f83d"  # Reemplaza con el ID del usuario real

# Datos a actualizar en formato JSON
UPDATE_DATA='{
  "color": "grey",
  "email": "nuevoemail@example.com"
}'

# Construir la URL con el ID del usuario
URL="${API_URL}/${USER_ID}"

# Hacer la solicitud PUT a la API
response=$(curl -s -X PUT -H "Content-Type: application/json" -d "$UPDATE_DATA" "$URL")

# Imprimir la respuesta
echo "Respuesta de la API:"
echo "$response"