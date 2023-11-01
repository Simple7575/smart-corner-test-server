import express from "express";
import cors from "cors";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./fireBaseConfig.js";

import { PORT } from "./envConstants.js";

const app = express();
const movieSurveyCollection = collection(db, "movie_survey");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.post("/save-survey", async (req, res) => {
    try {
        console.log(req.body);
        await addDoc(movieSurveyCollection, req.body);
        res.status(201).send("Movies survey has been successfully saved.");
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong.");
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
