import connectMongoDatabase from "../../mongo/connectDB"
import Model from "../../mongo/model"

connectMongoDatabase()

export default (req, res) => {
  
  Model.find().then(results => {res.status(200).json(results)
  })

}
