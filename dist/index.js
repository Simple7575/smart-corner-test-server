import express from "express";
import cors from "cors";
import { PORT } from "./envConstants.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.get("/", async (req, res) => {
    res.status(200).json("Welcome");
});
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
