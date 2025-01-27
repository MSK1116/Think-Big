import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  eventName: {
    type: String,
  },
  Fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  textarea: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
