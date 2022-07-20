import mongoose from 'mongoose'
const { Schema } = mongoose

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      unique: true,
    },
    comment: {
      type: String,
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewSchema)

export default Review
