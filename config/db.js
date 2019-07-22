const mongoose = require('mongoose')
const config = require('config')
const db = config.get('MONGOURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  } catch (e) {
    console.error(e.message)
    process.exit(1)
  }
}

module.exports = connectDB
