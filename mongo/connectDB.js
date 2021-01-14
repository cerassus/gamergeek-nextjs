import mongoose from "mongoose"

export default function connectMongoDatabase() {
  console.log(mongoose.connection.readyState)
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.on('connected', () => {
      console.log('connected, sir!')

    })
    mongoose.connection.on('error', (err) => {
      console.log('error, sir!', err)
    
    })
  }
}


