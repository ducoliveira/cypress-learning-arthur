const request = require('supertest')('https://httpbin.org')
const assert = require('chai').assert

const requestDemoQA = require('supertest')('https://demoqa.com')

    /// HTTP Methods
describe('HTTP methods', () => {

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

    /// Auth methods
describe('Auth methods', () => {

    it('GET Auth method', () => {
        const data = {
            user : 'user',
            passwd : 'passwd'
        }
        return request
            .get('/basic-auth/user/passwd')
            .auth(data.user, data.passwd)
            .expect(200)
            .then((res) => {
                assert.equal(res.body.authenticated, true)
                assert.equal(res.body.user, data.user)
            })
    })

    it('GET Bearer method', () => {
        const TOKEN = "my-auth-token"
        return request
            .get('/bearer')
            .set('Authorization', `Bearer ${TOKEN}`)
            .expect(200)
            .then((res) => {
                assert.isString(res.body.token)
            })
    })

    // it('GET Digest Auth method', () => {
    //     const username = 'user';
    //     const password = 'password';
    //     return request
    //       .get('/digest-auth/auth/user/password/MD5')
    //       .auth(username, password, {type: 'digest'})
    //       .expect(200)
    //       .then((res) => {
    //         assert.equal(res.body.authenticated, true);
    //         assert.equal(res.body.user, username);
    //       })
    //   })
})

      /// Status code
describe('Status code', () => {

      it('DELETE Status code', () => {
        const code = 200
        return request
            .delete(`/status/${code}`)
            .expect(200)
      })
})

      /// Request inspection
describe('Resquest inspection', () => {

      it('GET headers', () => {
        return request
            .get('/headers')
            .expect(200)
            .then((res) => {
                console.log(res.body)
                assert.isNotEmpty(res.body)
            })
      })

      it('GET ip', () => {
        return request
            .get('/ip')
            .expect(200)
            .then((res) => {
                console.log(res.body)    
                assert.isNotEmpty(res.body)  
            })
      })

      it('GET user-agent', () => {
        return request
            .get('/user-agent')
            .expect(200)
            .then((res) => {
                assert.isNotEmpty(res.body)
                console.log(res.body)
            })
      })
})

      /// Response inspection
describe('Response inspection', () => {

      it('GET response headers', () => {
        return request
            .get('/response-headers')
            .query({freeform : 'teste123'})
            .expect(200)
            .then((res) => {
                console.log(res.header)
                assert.equal(res.header.freeform, 'teste123')
            })
      })

      it('POST response-headers', () => {
        return request
            .post('/response-headers')
            .query({freeform : 'testResponse'})
            .expect(200)
            .then((res) => {
                console.log(res.header)
                assert.equal(res.header.freeform, 'testResponse')
            })

      })
})

      /// Response formats
describe('Response formats', () => {

    it('GET /deflate', () => {
        return request
            .get('/deflate')
            .expect(200)
            .then((res) => {
                assert.equal(res.body.deflated, true)
            })
    })

    it('GET /deny', () => {
        return request
            .get('/deny')
            .expect(200)
            .then((res) => {
                assert.isEmpty(res.body)
                assert.equal(res.headers['content-type'], 'text/plain')
            })
    })

    it('GET /encoding/utf8', () => {
        return request
            .get('/encoding/utf8')
            .expect(200)
            .then((res) => {
                assert.include(res.headers['content-type'], 'charset=utf-8')
            })
    })

    it('GET /gzip', () => {
        return request
            .get('/gzip')
            .expect(200)
            .then((res) => {
                assert.equal(res.body.gzipped, true)
            })
    })

    it('GET /html', () => {
        return request
            .get('/html')
            .expect(200)
            .then((res) => {
                expect(res.text).to.include('<!DOCTYPE html>')
            })
    })

    it('GET /json', () => {
        return request
            .get('/json')
            .expect(200)
            .then((res) => {
                assert.include(res.headers['content-type'], 'json')
            })
    })

    it('GET /robots.txt', () => {
        return request
            .get('/robots.txt')
            .expect(200)
            .then((res) => {
                assert.isEmpty(res.body)
            })
    })

    it('GET /xml', () => {
        return request
            .get('/xml')
            .expect(200)
            .expect('Content-Type', 'application/xml')
            .then((res) => {
                assert.include(res.text, "<?xml version='1.0' encoding='us-ascii'?>")
            })
    })

})

describe('Dynamic data', () => {

    it('GET /base64', () => {
        const string = 'SFRUUEJJTiBpcyBhd2Vzb21l'
        const text = 'HTTPBIN is awesome'

        return request
            .get(`/base64/${string}`)
            .expect(200)
            .then((res) => {
                assert.equal(res.text, text)
            })
    })

    it('DELETE /delay', function () {
        this.timeout(10000)
        const delay = 3
        return request
            .delete(`/delay/${delay}`)
            .expect(200)
            .then((res) => {
                return new Promise((resolve) => setTimeout(resolve, (delay + 1) * 1000))
                    .then(() => {
                        assert.isUndefined(res.body.json)
                    })
            })
    })

    it('GET /delay', function () {
        this.timeout(10000)
        const delay = 3
        return request
            .get(`/delay/${delay}`)
            .expect(200)
            .then((res) => {
                return new Promise((resolve) => setTimeout(resolve, (delay + 1) * 1000))
                    .then(() => {
                        assert.isNotEmpty(res.body)
                    })
            })
        })
})

describe.only('BookStore API Test', () => {

    const userData = {
        userName : "BsTestAutomation",
        password : "Bs1234567!"
    }
    
    it('POST /account', function() {
        return requestDemoQA
            .get('/BookStore/v1/Books')
            .expect(200)
    }).timeout(50000)
})
