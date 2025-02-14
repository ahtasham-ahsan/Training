const request = require('supertest');
const app = require('../index_Main'); 

describe('API Endpoints', () => {
    let token;
    describe('POST /api/login', () => {
        it('should return a token when provided valid credentials', async () => {
            const res = await request(app)
                .post('/api/login')
                .send({ username: 'user', password: 'password' });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('token');
            token = res.body.token; 
        });

        it('should return 401 for invalid credentials', async () => {
            const res = await request(app)
                .post('/api/login')
                .send({ username: 'user', password: 'wrongpassword' });

            expect(res.statusCode).toBe(401);
        });
    });

    describe('POST /api/generate-codes', () => {
        it('should return the specified number of game codes', async () => {
            const res = await request(app)
                .post('/api/generate-codes')
                .set('Authorization', `Bearer ${token}`)
                .send({ noOfGameCodes: 3 });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('gameCodes');
            expect(res.body.gameCodes).toHaveLength(3);
        });

        it('should return 400 for invalid payload', async () => {
            const res = await request(app)
                .post('/api/generate-codes')
                .set('Authorization', `Bearer ${token}`)
                .send({ noOfGameCodes: 'invalid' });

            expect(res.statusCode).toBe(400);
        });
    });

    describe('GET /api/health-check', () => {
        it('should return Authorized', async () => {
            const res = await request(app)
                .get('/api/health-check')
                .set('Authorization', `Bearer ${token}`);

            expect(res.statusCode).toBe(200);
            expect(res.text).toBe('Authorized');
        });

        it('should return 401 if no token is provided', async () => {
            const res = await request(app)
                .get('/api/health-check');

            expect(res.statusCode).toBe(401);
        });
    });
});
