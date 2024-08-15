#!/bin/bash

# URL del endpoint
URL="http://localhost:3000/api/users"

# Array de datos de usuarios
USERS=(
  '{"name": "John", "lastName": "Doe", "dni": "143996799", "age": 27, "color": "red", "email": "john.doe@gmail.com", "enabled": true}'
  '{"name": "Jane", "lastName": "Smith", "dni": "143996800", "age": 30, "color": "blue", "email": "jane.smith@gmail.com", "enabled": true}'
  '{"name": "Alice", "lastName": "Johnson", "dni": "143996801", "age": 25, "color": "green", "email": "alice.johnson@gmail.com", "enabled": true}'
  '{"name": "Bob", "lastName": "Brown", "dni": "143996802", "age": 35, "color": "yellow", "email": "bob.brown@gmail.com", "enabled": true}' # Invalid color
  '{"name": "Charlie", "lastName": "Davis", "dni": "143996803", "age": 40, "color": "purple", "email": "charlie.davis@gmail.com", "enabled": true}' # Invalid color
  '{"name": "Tom", "lastName": "Lee", "dni": "143996804", "age": 201, "color": "red", "email": "tom.lee@gmail.com", "enabled": true}' # Invalid age
  '{"name": "Sam", "lastName": "Green", "dni": "143996805", "age": -1, "color": "blue", "email": "sam.green@gmail.com", "enabled": true}' # Invalid age
  '{"name": "Invalid", "lastName": "User", "dni": "143996806", "age": 30, "color": "red", "email": "invalid.email", "enabled": true}' # Invalid email
  '{"name": "Sh", "lastName": "Name", "dni": "143996807", "age": 30, "color": "green", "email": "short.name@gmail.com", "enabled": true}' # Invalid name length
  '{"name": "Valid", "lastName": "User", "dni": "143996808", "age": 30, "color": "blue", "email": "valid.user@gmail.com", "enabled": false}' # Valid user
)

# Enviar solicitudes POST para cada usuario
for USER in "${USERS[@]}"; do
  echo "Enviando datos: $USER"
  curl -X POST $URL \
    -H "Content-Type: application/json" \
    -d "$USER"
  echo -e "\n"
done