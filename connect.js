

const dbURI = 'mongodb+srv://vanessa:<15march>@cluster0.zskjoll.mongodb.net/?retryWrites=true&w=majority'


// "/users": 
//     "get": {
//       "tags": [
//         "User"
//       ],
//       "summary": "Get all users",
//       "description": "",
//       "produces": [
//         "application/json"
//       ],
//       "parameters": [],
//       "responses": {
//         "200": {
//           "description": "OK",
//           "schema": {
//             "$ref": ""
//           }
//         },
//         "401": {
//           "description": "Unauthorized",
//           "schema": {
//             "$ref": ""
//           }
//         },
//         "500": {
//           "description": "Internal Server Error",
//           "schema": {
//             "$ref": ""
//           }
//         }
//       }
//     }
//   },
//   "/Users/{id}": {
//     "get": {
//       "tags": [
//         "User"
//       ],
//       "summary": "Get a user by id",
//       "description": "",
//       "produces": [
//         "application/json"
//       ],
//       "parameters": [
//         {
//           "name": "id",
//           "in": "path",
//           "description": "Id of the user",
//           "required": true,
//           "type": "string"
//         }
//       ],
//       "responses": {
//         "200": {
//           "description": "OK",
//           "schema": {
//             "$ref": ""
//           }
//         },
//         "401": {
//           "description": "Unauthorized",
//           "schema": {
//             "$ref": ""
//           }
//         },
//         "500": {
//           "description": "Internal Server Error",
//           "schema": {
//             "$ref": ""
//           }
//         }
//       }
//     }
//   },
//   "/users/update/{id}": {
//     "put": {
//       "tags": [
//         "User"
//       ],
//       "summary": "Update a user's email",
//       "description": "",
//       "produces": [
//         "application/json"
//       ],
//       "parameters": [
//         {
//           "name": "token",
//           "in": "formData",
//           "description": "Token of the user",
//           "required": true,
//           "type": "string"
//         },
//         {
//           "name": "id",
//           "in": "path",
//           "description": "Id of the user",
//           "required": true,
//           "type": "string"
//         }
//       ],
//       "responses": {
//         "200": {
//           "description": "OK",
//           "schema": {
//             "$ref": ""
//           }
//         },
//         "401": {
//           "description": "Unauthorized",
//           "schema": {
//             "$ref": ""
//           }
//         },
//         "500": {
//           "description": "Internal Server Error",
//           "schema": {
//             "$ref": ""
//           }
//         }
//       }
//     }
//   },
//   "/users/delete/{id}": {
//     "delete": {
//       "tags": [
//         "User"
//       ],
//       "summary": "Delete user by ID",
//       "description": "Deletes the user with the given ID.",
//       "parameters": [
//         {
//           "in": "path",
//           "name": "id",
//           "description": "ID of the user to be deleted",
//           "required": true,
//           "schema": {
//             "type": "integer"
//           }
//         }
//       ],
//       "responses": {
//         "204": {
//           "description": "User deleted successfully"
//         },
//         "404": {
//           "description": "User not found"
//         }
//       }
//     }
//   },