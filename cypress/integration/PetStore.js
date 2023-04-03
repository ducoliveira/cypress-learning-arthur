const request = require('supertest')('https://petstore.swagger.io/v2')
const assert = require('chai').assert
let userInfo = require('../fixtures/petStoreInfo.json')

let pet = {
    "id": 20,
    "category": {
      "id": 0,
      "name": "Dog"
    },
    "name": "Posty",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "Shih Tzu"
      }
    ],
    "status": "available"
}

describe('PetStore requests', () => {

    // User

    it('/POST Creat a user', function() {
        return request
            .post('/user')
            .send(userInfo)
            .expect(200)
    }).timeout(50000)

    it('/GET User by username', function() {
        return request
            .get(`/user/${userInfo.username}`)
            .expect(200)
            .then((res) => {
                userInfo.id = res.body.id
                assert.deepEqual(res.body, userInfo)
            })
    }).timeout(50000)

    it('/GET Logs user into the system', function() {
        return request
            .get('/user/login')
            .query({username : userInfo.username}, {password : userInfo.password})
            .expect(200)
            .then((res) => {
                console.log(res.body)
            })
    }).timeout(50000)

    it('/GET Logs out current user', function() {
        return request
            .get('/user/logout')
            .expect(200)
            .then((res) => {
                console.log(res.body)
            })
    }).timeout(50000)

    it('/DELETE Delete user', function() {
        return request
            .delete(`/user/${userInfo.username}`)
            .expect(200)
    }).timeout(50000)

    // Pet

    it('/POST Adds a pet into the store', function() {
        return request
            .post('/pet')
            .send(pet)
            .expect(200)
            .then((res) => {
                assert.deepEqual(res.body, pet)
            })
    }).timeout(50000)

    it('/PUT Updates an existing pet', function() {
        pet.name = "Posty Antonio"
        pet.status = "pending"
        return request
            .put('/pet')
            .send(pet)
            .expect(200)
            .then((res) => {
                assert.deepEqual(res.body, pet)
            })
    })

    it.skip('/GET Find pet by status', function() {
        return request
            .get('/pet/findByStatus')
            .query({status : 'sold'})
            .expect(200)
            .then((res) => {
                console.log(res.body)
            })
    })

    it('/GET Find pet by ID', function() {
        return request
            .get(`/pet/${pet.id}`)
            .expect(200)
            .then((res) => {
                console.log(res.body)
            })
    }).timeout(50000)

    it('/POST Updates a pet in the store with form data', function() {
        return request
            .post(`/pet/${pet.id}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({name: "Posty", status : "sold"})
            .expect(200)
            .then((res) => {
                console.log(res.body)
            })
    }).timeout(50000)

    it('/DELETE Deletes a pet', function() {
        return request
            .delete(`/pet/${pet.id}`)
            .expect(200)
    })

})
