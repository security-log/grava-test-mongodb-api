#!/bin/bash

# URL del endpoint de la API
API_URL="http://localhost:3000/api/users"

# ID del usuario que deseas obtener
USER_ID="66bdf72d30ad34678b63f83d"  # Reemplaza con el ID del usuario real

# Construir la URL con el ID del usuario
URL="${API_URL}/${USER_ID}"

# Hacer la solicitud GET a la API
response=$(curl -s -X GET "$URL")

# Imprimir la respuesta
echo "Respuesta de la API:"
echo "$response"