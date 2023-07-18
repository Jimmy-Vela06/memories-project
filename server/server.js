import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://jimmyvela6:gDd3bOUL9K9tX1sX@cluster0.h3byci5.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Memories Server Running on Port: http://localhost:${PORT} 🚀`
      )
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

/*
NOT REQUIRED IN VERISON 7
mongoose.set("useFindAndModify", false);
*/
