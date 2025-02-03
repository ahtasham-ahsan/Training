// atomicc operations only
// If every operation is successful, only then it is updated in the database else everything will roll back.
// We have two commit techniques

const mongoose = require("mongoose");
const Fawn = require("fawn");
Fawn.init(mongoose);

new Fawn.Task()
  .save("movies", {
    title: "Movie1",
    genre: "5f0b3c7b2f2e1b1c3c4a1d1e",
    numberInStock: 5,
    dailyRentalRate: 2,
  })
  .save("movies", {
    title: "Movie2",
    genre: "5f0b3c7b2f2e1b1c3c4a1d1e",
    numberInStock: 5,
    dailyRentalRate: 2,
  })
  .run()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
