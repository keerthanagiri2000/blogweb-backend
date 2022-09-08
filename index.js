const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("MongoDB is connected"))
.catch((err) => console.log(err));

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server run in ${PORT}`));