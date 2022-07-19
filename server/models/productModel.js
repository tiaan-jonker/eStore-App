import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    reviews: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
    numReviews: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    stock: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default { Product }
