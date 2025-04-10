import mongoose from "mongoose";

const subscriberSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const subscriber = mongoose.model("Subscriber", subscriberSchema);
export default subscriber;
