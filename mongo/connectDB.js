import mongoose from "mongoose"

export default function connectMongoDatabase() {
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
