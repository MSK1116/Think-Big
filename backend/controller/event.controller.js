import { text } from "express";
import Event from "../model/event.model.js";

export const eventReg = async (req, res) => {
  try {
    const { eventName, Fullname, email, address, textarea, date } = req.body;
    const user = await Event.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "You have alredy registered" });
    }

    const eventRegTemp = new Event({
      eventName: eventName,
      Fullname: Fullname,
      email: email,
      address: address,
      textarea: textarea,
      date: date,
    });

    await eventRegTemp.save();
    res.status(201).json({ message: "Event registered" });
  } catch (error) {
    console.log("Failed event_controller.js", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
