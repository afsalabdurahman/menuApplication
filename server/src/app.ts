import { Application, Request, Response } from "express";
import express from "express";
import menuRoutes from "./routes/menu";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors()); 

app.get("/health", (req: Request, res: Response) => {
  res.send("API Running with TypeScript 🚀");
});


app.use("/", menuRoutes);

export default app;