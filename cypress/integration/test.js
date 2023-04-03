// const request = require('supertest')('https://jsonplaceholder.typicode.com')
// const assert = require('chai').assert


// describe('Users API', () => {
    
//     // Example of a succesfull GET request
//     it('GET /users', () => {
//     // Make a GET request to the users route 
//     return request.get('/users').expect(200)
//     })

//     // Examples of a GET request to assert that the body is not empty
//     it('GET /users', () =>{
//       // Make a GET request to the users route 
//       return request
//         .get('/users')
//         .expect(200)
//         .then((res) => {
//           // assert data being return to not be empty
//           assert.isNotEmpty(res.body);
//         })
//     })

//     // Example of a POST request, then verifying if the information was successfully posted
//     it('POST /users', () => {
//       // Delares the data to be sent
//       const data = {
//         name : 'Test user',
//         email: 'test_user@digitalonus.com',
//       }
//       // Make a POST request
//       return request
//         .post('/users')
//         .send(data) // Send payload data
//         .then((res) => {
//           assert.hasAnyKeys(res.body, 'id') // Asserts tha the object has 'id'
//           assert.equal(res.body.name, data.name) // Asserts that the object has the data name
//           assert.equal(res.body.email, data.email) // Asserts that the object has the data email
//         })
//     })

//     // Asserts that the "id: '1'" name is "Leanne Graham"
//     it('GET /users', () => {
//       const data = {
//         name : 'Leanne Graham'
//       }
//       return request
//         .get('/users/1')
//         .then((res) => {
//           assert.equal(res.body.name, data.name)
//         })
//     })

//     // Updates the email of the first user
//     it('PUT /users', () => {
//       const data = {
//         email: 'updated_email@digitalonus.com'
//       }
//       return request
//         .put('/users/1')
//         .send(data)
//         .then((res) => {
//           assert.equal(res.body.email, data.email)
//         })
//     })

//     // Deletes the first user
//     it('DELETE /users', () => {
//       return request
//         .delete('/users/1')
//         .then((res) => {
//           assert.isEmpty(res.body)
//         })
//     })
// })