import { Application, Request, Response } from "express";
import express from "express";
import menuRoutes from "./routes/menu";
import cors from "cors";

const app: Application = express();

app.use(express.json());
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Replace the wildcard OPTIONS handler with a regex
app.options(/(.*)/, cors(corsOptions));

app.get("/health", (req: Request, res: Response) => {
  res.send("API Running with TypeScript 🚀");
});

// ✅ Correct way to use router
app.use("/", menuRoutes);

export default app;