#!/bin/bash

# URL del endpoint de la API
API_URL="http://localhost:3000/api/users"

# Parámetros de consulta (opcional)
ENABLED="true"  # Cambia a "false" para usuarios deshabilitados
SORT_BY="userInformation.name"  # Cambia al campo por el cual deseas ordenar

# Construir la URL con parámetros de consulta
URL="${API_URL}?enabled=${ENABLED}&sortBy=${SORT_BY}"

# Hacer la solicitud GET a la API
response=$(curl -s -X GET "$URL")

# Imprimir la respuesta
echo "Respuesta de la API:"
echo "$response"