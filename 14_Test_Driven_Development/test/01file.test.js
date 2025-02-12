// const request = require("supertest");
// const {Rental} = require("../rentals");
// const mongoose = require("mongoose");
// // let server, app, test_Model;
// // const { test_Model } = require("../01_File");

// describe("apis testing", () => {
//     let customerId, movieId, rental;
//   beforeEach(async () => {
//     jest.setTimeout(10000); // Increases test timeout to 10 seconds
//     let { server, app, test_Model, server } = require("../01_File");

//     server = require("../01_File");
//     customerId = new mongoose.Types.ObjectId();
//     movieId = new mongoose.Types.ObjectId();
    
//     rental= new Rental({
//         customer: {
//             name: '12341', phone: '12341', _id: customerId
//         }, 
//         movie: {
//             _id: movieId, 
//             title: '12341', 
//             dailyRentalRate: 2

//         }

//     });
//     await rental.save();
//   });
//   afterEach(async () => {
//     server.close();
//     await Rental.remove();
    
// });

//   it ("It should work", async ()=>{
//     const result = await Rental.findById(rental._id);
//     expect(result).not.toBeNull();
//   });

//   it ("It should return 401", async ()=>{
//     const resp = await request(server).post('/add').send({movieId, customerId});
//     expect(resp.status).toBe(401);
//   });

// });
