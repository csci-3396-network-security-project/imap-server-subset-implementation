import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Server routes...

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
