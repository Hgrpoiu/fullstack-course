const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log("You need a password");
  process.exit(1);
}
const password = process.argv[2];
const url = `mongodb+srv://fullstack:${password}@cluster0.bxrats0.mongodb.net/phonebook?retryWrites=true&w=majority`;
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});
const Person = mongoose.model("Person", personSchema);

mongoose.connect(url).then((result) => {
  console.log("connected");

  if (process.argv.length === 3) {
    return Person.find({}).then((result) => {
      result.forEach((p) => {
        console.log(p);
      });
      mongoose.connection.close();
    });
  }

  return new Person({
    name: process.argv[3],
    number: process.argv[4],
  })
    .save()
    .then((result) => {
      console.log("saved");
      mongoose.connection.close();
    });
});
