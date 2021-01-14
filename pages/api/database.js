import connectMongoDatabase from "../../mongo/connectDB"
import mongoose from "mongoose"
import Model from "../../mongo/model"

console.log('mongoose state: ' + mongoose.connection.readyState)

connectMongoDatabase()

export default (req, res) => {
  console.log('Querrying API...')
    if (req.method === 'PUT'){
      Model.insertMany(JSON.parse(req.body))
    } else {
      Model.find().then(results => {res.status(200).json(results)})
    }
}