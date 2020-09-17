const mongoose = require('mongoose');
require('dotenv');

const dbConnection = async() => {

  try {

    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('db online')


  } catch (error) {
    console.log(error);
    throw new Error('Error al conectar con base de datos')
  }
}

module.exports = dbConnection;