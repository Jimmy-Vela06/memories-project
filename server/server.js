import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://jimmyvela6:tigres123@cluster0.h3byci5.mongodb.net/?retryWrites=true&w=majority";

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

// mongoose.set("useFindAndModify", false);
