# API test

## Run Locally 💻

### Configuration

You need a `.env` file. Use `.env.dist` as a template.

### Dependencies

You need a MongoDB instance running.

```bash
  sudo systemctl start mongod
```

Check status.

```bash
  sudo systemctl status mongod
```

You must install npm packages from package.json.

```bash
  npm i
```

### Run

Use `start` script from package.json.

```bash
  npm start
```

## Usage/Examples 📔

These commands can be executed in the terminal, or you can use an alternative like Postman.

### Add a user

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jhon",
    "lastName": "Doe",
    "color": "red",
    "email": "john.doe@gmail.com",
    "dni": "143996799",
    "age": 27,
    "enabled": true
  }'
```

### Get a list of users

```bash
curl -X GET http://localhost:3000/api/users
```

### Disable a user

```bash
curl -X POST http://localhost:3000/api/users/<user_id>/disable \
  -H "Content-Type: application/json"
```

### Retrieve information for a user

```bash
url -X GET http://localhost:3000/api/users/<user_id>
```

### Modify user information

```bash
curl -X PUT http://localhost:3000/api/users/<user_id> \
  -H "Content-Type: application/json" \
  -d '{"email": "newemail@gmail.com"}'
```
