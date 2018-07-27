const request = require('supertest');
const app = require('../server');

describe('GET /product/:product/gram ', () => {
  test('It should respond with an array of data', async () => {
    const res = await request(app).get('/product/77/gram');
    expect(Array.isArray(res.body)).toEqual(true);
    expect(res.statusCode).toBe(200);
  });
});
