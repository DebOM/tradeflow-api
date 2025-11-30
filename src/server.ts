// src/server.ts
import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});