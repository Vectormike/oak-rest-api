import { opine, Router } from "https://deno.land/x/opine@1.0.0/mod.ts";
// import { opine } from "./src/deps";
import { Request, Response } from "https://deno.land/x/opine@1.0.0/src/types.ts";
// import { Request, Response } from "./src/deps";

const app = opine();

app.get("/", function(req:Request, res:Response) {
  res.json("Hello World");
});

app.listen(3000);