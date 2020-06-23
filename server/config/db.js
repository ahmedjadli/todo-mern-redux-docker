const mongoose = require("mongoose");
require("dotenv").config();

// mongoose options

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

// mongodb env vars
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = process.env;

const dbConnectionURL = {
  LOCALURL: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`,
};

mongoose
  .connect(dbConnectionURL.LOCALURL, options)
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas !");
    console.log("#####################################");
    console.log(error);
    console.log("#####################################");
  });
