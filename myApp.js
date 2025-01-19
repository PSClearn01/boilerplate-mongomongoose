require('dotenv').config();

/** # MONGOOSE SETUP #
/*  ================== */

/** 1) Install & Set up mongoose */
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

/** 2) Create a 'Person' Model */
var personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

/** 3) Create and Save a Person */
var Person = mongoose.model('Person', personSchema);

var createAndSavePerson = function(done) {
  var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    console.log("Successfully saved the product");
    done(null, data);
  });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
/* exports.findPeopleByName = findPeopleByName; */
/* exports.findOneByFood = findOneByFood; */
/* exports.findPersonById = findPersonById; */
/* exports.findEditThenSave = findEditThenSave; */
/* exports.findAndUpdate = findAndUpdate; */
/* exports.createManyPeople = createManyPeople; */
/* exports.removeById = removeById; */
/* exports.removeManyPeople = removeManyPeople; */
/* exports.queryChain = queryChain; */
