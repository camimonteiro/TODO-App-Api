const request = require('supertest');
const ApiUrl = "http://localhost:3000";

describe('ApiUrl', () => {
    test('Testing users route', () => {
        return request (ApiUrl).get('/user')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })

    test('Testing users route', () => {
        return request (ApiUrl).post('/user')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })

    test('Testing users route', () => {
        return request (ApiUrl).put('/user/:id')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })

    test('Testing users route', () => {
        return request (ApiUrl).delete('/user/:id')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })

    // test('Testing users route', () => {
    //     return request (ApiUrl).get('/task')
    //     .then((response)=> {
    //         expect(response.statusCode).toBe(200)
    //     })
    // })

    // test('Testing users route', () => {
    //     return request (ApiUrl).post('/task')
    //     .then((response)=> {
    //         expect(response.statusCode).toBe(200)
    //     })
    // })

    // test('Testing users route', () => {
    //     return request (ApiUrl).put('/task')
    //     .then((response)=> {
    //         expect(response.statusCode).toBe(200)
    //     })
    // })

    // test('Testing users route', () => {
    //     return request (ApiUrl).delete('/task')
    //     .then((response)=> {
    //         expect(response.statusCode).toBe(200)
    //     })
    // })
})