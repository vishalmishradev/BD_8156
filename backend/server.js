const express = require("express");
const app = express();
const port = 1234;

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
      },
      {
        id: 2,
        name: "Aditi",
        email: "aditi@email.com",
      },
      {
        id: 3,
        name: "Anjali",
        email: "anjali@email.com",
      },
      {
        id: 4,
        name: "Puja",
        email: "puja@email.com",
      },
      {
        id: 5,
        name: "Aditya",
        email: "aditya@email.com",
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
