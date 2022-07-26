//SUPER TEST make teesting against our HTTP request very easy
//TO INSTALL SUPERTEST RUN npm install supertest --save-dev
const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/);
    expect(response.statusCode).toBe(200);
  });
});

describe('Test POST /launch', () => {
  test('It should respond with 201 success', async () => {
    const response = await request(app).post('/launches').send({
      mission: 'Go to space',
      target: 'USA White house',
      rocket: 'Parker ssa',
      launchDate: 'Feb 12,2025',
    });
    expect(response.statusCode).toBe(201);
  });
});
