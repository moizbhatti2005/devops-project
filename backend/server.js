const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 👉 Replace with MongoDB Atlas later
mongoose.connect("mongodb+srv://abdulmoizb23_db_user:Taurus%402005@cluster0.ph6kudq.mongodb.net/taskDB?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.error("MongoDB Error ❌:", err));
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("DevOps App Running ✅");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
