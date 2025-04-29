import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const application = mongoose.model("application", applicationSchema);
export default application;
