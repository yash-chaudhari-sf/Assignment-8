import dotenv from "dotenv";
import express from "express";
import route from "./src/route.js";
dotenv.config();
const app = express();
app.use(express.static("./dist/public"));
app.use(express.json());
app.use("/", route);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port 3000`);
    }
);
