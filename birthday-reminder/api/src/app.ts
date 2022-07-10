import express from "express";
import cors from "cors";

import friendsRouter from "./routes/friends";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:8080" }));

app.use("/", friendsRouter);

export { app };
