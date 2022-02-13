import { connectDatabase } from "./database";
import express from "express";
import cors from "cors";

import todosRouter from "./routes/todos";
import listsRouter from "./routes/lists";

const app = express();
connectDatabase();

app.use(express.json());
app.use(cors());

app.use("/todos", todosRouter);
app.use("/lists", listsRouter);

export { app };
