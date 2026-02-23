const express = require("express");
const cors = require("cors");
const app = express();
const port = 1234;

app.use(cors({ origin: "*", credentials: true }));

app.get("/", (req, res) => {
  res.send("Welcome to my app");
});

app.get("/api/users", (req, res) => {
  try {
    const user = [
      {
        id: 1,
        name: "Vishal",
        email: "vishal@email.com",
        phone: "1234569870",
      },
      {
        id: 2,
        name: "Aditi",
        email: "aditi@email.com",
        phone: "1234569870",
      },
      {
        id: 3,
        name: "Anjali",
        email: "anjali@email.com",
        phone: "1234569870",
      },
      {
        id: 4,
        name: "Puja",
        email: "puja@email.com",
        phone: "1234569870",
      },
      {
        id: 5,
        name: "Aditya",
        email: "aditya@email.com",
        phone: "1234569870",
      },
    ];
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error occured:", error);
  }
});

app.listen(port, (err) => {
  console.log("Express is up and running on port:", port);
});
