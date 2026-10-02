const request = require('supertest');
const { app } = require('../index');

describe( 'GET /equipos', () => {
    it( 'Responds with status code 200 and Array', async () => {
        const response = await request(app).get('/equipos');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe( 'POST /login', () => {
    it( 'Responds with an Object to valid credentials', async () => {
        const validUserCredentials = {
            username: 'admin',
            password: '1234',
        }
        
        const response = await request(app)
            .post('/login')
            .send( validUserCredentials );

        expect(response.body).toBeInstanceOf(Object);
    });
    it( 'Respond with status code 400 to invalid credentials', async () => {
        const invalidUserCredentials = {
            username: 'user',
            password: '9999',
        }
        
        const response = await request(app)
            .post('/login')
            .send( invalidUserCredentials );

        expect(response.statusCode).toBe(400);
    });
});

describe( 'POST /equipos/:teamID/jugadores', () => {
    it( 'Respond with status code 201 when sending a valid token', async () => {
        const jugador = {
            name: 'jugador 2',
            posicion: 1,
        }
        const teamID = 1;
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.ZQIJ361pOycbpkCyERDs9tyc0vrD77g9gBonWVrbRs0";

        const response = await request(app)
            .post(`/equipos/${teamID}/jugadores`)
            .send( jugador )
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(201);
    });
});