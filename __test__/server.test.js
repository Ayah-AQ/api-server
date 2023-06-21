'use strict'

require('dotenv').config()

const supertest = require('supertest')
const { app } = require('../src/server')
const { db } = require('../src/models/index')
const muke = supertest(app)

describe('Server test', () => {
it('right name', async () => {
    const res = await muke.get('/2');
    expect(res.status).toEqual(404);
  })
  it('name error', async () => {
    const res = await muke.put('/');
    expect(res.status).toEqual(404);
  })
  
})

beforeAll(async () => {
    await db.sync()
})

afterAll(async () => {
    await db.drop()
})

describe('test server', () => {
    it('post food', async () => {
        const res = await muke.post('/food').send({
            foodName: 'mansaf',
            foodCounty: 'jordan',
            Price: 200
        })
        expect(res.status).toBe(201);
    })
    it('get food', async () => {
        const res = await muke.get('/food')
        expect(res.status).toBe(200);
    })
    it('get food', async () => {
        const res = await muke.get('/food/1')
        expect(res.status).toBe(200);
    })
    it('update food', async () => {
        const res = await muke.put('/food/1').send({
            foodName: 'magloba',
            foodCounty: 'jordan',
            Price: 200
        })
        expect(res.status).toBe(202);
    })
    it('delet food', async () => {
        const res = await muke.delete('/food/1')
        expect(res.status).toBe(204);
    })
// --------------------------
    it('post recipie', async () => {
        const res = await muke.post('/recipie').send({
          name: 'mansaf',
          recipie: 'Jameed', 
        });
        const createdRecipie = JSON.parse(res.text);
        expect(res.status).toBe(201);
        expect(createdRecipie.name).toEqual('mansaf')
      });
      
      it('get all ingredients', async () => {
        const res = await muke.get('/recipie'); 
        expect(res.status).toBe(200);
      });
      
      it('get recipie by id', async () => { 
        const res = await muke.get('/recipie/1');
        expect(res.status).toBe(200);
      });
      
      it('update recipie', async () => {
        const res = await muke.put('/recipie/1').send({
          name: 'magluba', 
          recipie: 'eggplanet',
        });
        expect(res.status).toBe(202); 
      });
      
      it('delete recipie', async () => { 
        const res = await muke.delete('/recipie/1');
        expect(res.status).toBe(204);
      });
    //   ---------------------
      it('post ingredient', async () => {
        const res = await muke.post('/ingredient').send({
          name: 'mansaf',
          ingredients: 'Jameed', 
        });
        const createdIngredient = JSON.parse(res.text);
        expect(res.status).toBe(201);
        expect(createdIngredient.ingredients).toEqual('Jameed')
      });
      
      it('get all ingredients', async () => {
        const res = await muke.get('/ingredient'); 
        expect(res.status).toBe(200);
      });
      
      it('get ingredient by id', async () => { 
        const res = await muke.get('/ingredient/1');
        expect(res.status).toBe(200);
      });
      
      it('update ingredient', async () => {
        const res = await muke.put('/ingredient/1').send({
          name: 'magluba', 
          ingredient: 'eggplanet',
        });
        expect(res.status).toBe(202); 
      });
      
      it('delete ingredient', async () => { 
        const res = await muke.delete('/ingredient/1');
        expect(res.status).toBe(204);
      });
})
