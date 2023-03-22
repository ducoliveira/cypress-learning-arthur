const request = require('supertest')('https://httpbin.org')
const assert = require('chai').assert

describe('HTTPBIN tests', () => {

    it('DELETE method', () => {
        return request
            .delete('/delete')
            .expect(200)
            .then((res) => {
                assert.isEmpty(res.body.data)
            })
    })

    it('GET method', () => {
        return request
            .get('/get')
            .expect(200)
            .then((res) => {
                assert.isNotEmpty(res.body)
            })
    })

    it('PATCH method', () => {
        const data = {
            name : 'Lewis',
            lastname : 'Hamilton'
        }
        return request
            .patch('/patch')
            .expect(200)
            .send(data)
            .then((res) => {
                assert.equal(res.body.json.name, data.name)
                assert.equal(res.body.json.lastname, data.lastname)
            })
    })

    it('POST method', () => {
        const data = {
            name : 'Sebastian',
            lastname : 'Vettel'
        }
        return request
            .post('/post')
            .send(data)
            .expect(200)
            .then((res) => {
                assert.deepEqual(res.body.json, data)
            })
    })

    it('PUT method', () => {
        const data = {
            name : 'Charles',
            lastname : 'Leclerc'
        }
        return request
            .put('/put')
            .send(data)
            .expect(200)
            .then((res) => {
                assert.deepEqual(res.body.json, data)
            })
    })

})