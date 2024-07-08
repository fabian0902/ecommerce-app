const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }] // Referencia a productos en el carrito
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
