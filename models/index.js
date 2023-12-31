//import models
const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

//Locations have many travellers through trips
Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false,
  },
  as: "location_travellers",
});

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
  as: "planned_trips",
});

module.exports = {
  Traveller,
  Location,
  Trip,
};
