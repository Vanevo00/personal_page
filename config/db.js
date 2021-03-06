const mongoose = require('mongoose')
const db = 'mongodb://mongo:27017/node-api'

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      //to avoid console warnings
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.log('mongoDB connected')
  }
  catch(error) {
    console.log("error:", error)
    process.exit(1); //exit with failure
  }
}

module.exports = connectDB
