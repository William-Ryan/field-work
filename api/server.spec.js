const request = require("supertest");

const server = require("./server.js")

describe('server.js', function(){
    describe('POST /api/auth/register', function(){

        it('Should return a Status 201', async function(){
            const res = await request(server)
            .post('/api/auth/register')
            .send({ username: "JoHo", password: "Donny", name: 'Johnny' })
            expect(res.status).toBe(201)
            
        })

        it('Should return an object', async function(){
            const res = await request(server)
            .post('/api/auth/register')
            expect(typeof res.body).toBe("object")
        })
    })

    describe('POST /api/auth/login', function(){

        it('Should return a status 200', async function(){
            const res = await request(server)
            .post('/api/auth/login')
            .send({ username: "JoHo", password: "Donny" })
            expect(res.status).toBe(200)
        })

        it('Should return with JSON', async function(){
            const res = await request(server)
            .post('/api/auth/login')
            expect(res.type).toMatch(/json/i)
        })
    })

    describe('GET /api/market/items', function(){

        it('Should return with JSON', async function(){
            const res = await request(server)
            .get('/api/market/items')
            expect(res.type).toMatch(/json/i)
        })

        it('Should return objects', async function(){
            const res = await request(server)
            .post('/api/market/items')
            expect(typeof res.body).toBe("object")
        })
    })
})