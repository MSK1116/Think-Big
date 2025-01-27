import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  Fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  textarea: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
