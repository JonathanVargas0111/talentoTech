const request = require('supertest')
const app = require('../index')

const objectToTest = {
    "address": "Calle 80",
    "city": "Bogotá D.C.",
    "state": "Cundinamarca",
    "size": 70,
    "type": "apartment",
    "zip_code": "1700005",
    "rooms": 3,
    "bathrooms": 2,
    "parking": true,
    "price": 190000000,
    "code": "ABCD7859",
    "image": "uploads\\1708391419588-descarga.jpeg"
}

const objectToTestIncomplete = {
    "address": "Calle 80",
    "city": "Bogotá D.C.",
    "state": "Cundinamarca",
    "size": 70,
}



let houseId;
let houseCode;

describe('POST /house', () => {
    it('reponse complete house object', async () => {
        const newHouse = objectToTest;
        const response = await request(app).post('/house').send(newHouse);
        /**
         * Asiganacion de id a la variable
         */
        houseId = response.body._id;
        houseCode = response.body.code;
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.address).toBe(newHouse.address);
        expect(response.body.city).toBe(newHouse.city);
        expect(response.body.state).toBe(newHouse.state);
    })
    it('response error incomplete house', async () => {
        const newHouse = objectToTestIncomplete;
        const response = await request(app).post('/house').send(newHouse);
        expect(response.status).toBe(500);
    })
   
})

describe('DELETE/delete', () => {
    it('responds with a success', async () => {
        const id = houseCode;
        const response = await request(app).delete('/house/' + id);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
    })
})