import mongoose from "mongoose"

const database_user_score_schema = new mongoose.Schema({
  "Name": {
    type: String,
    required: true,
  },
  "Score": {
    type: Number,
    required: true,
  },
  "Date": {
    type: String,
    required: true,
  }
})

export default mongoose.models.database_user_score_schema || mongoose.model('game_results', database_user_score_schema)