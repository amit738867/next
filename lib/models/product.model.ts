import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    url: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    discount: { type: Number },
    imgURL: { type: String, required: true },
    priceHistory: [
      {
        price: { type: Number, required: true },
        date: { type: Date, default: Date.now }
      }
    ],
    lowestPrice: { type: Number },
    highestPrice: { type: Number },
    averagePrice: { type: Number },
    users: [
      { email: { type: String, required: true } }
    ],
    default: [],
  }, { timestamps: true });
  

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;