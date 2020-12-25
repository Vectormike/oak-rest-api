import { Application } from "https://deno.land/x/oak/mod.ts";
import UserRoutes from './src/routes/Users.ts';

const app = new Application();


app.use(UserRoutes.routes())
app.use(UserRoutes.allowedMethods())


//Start the Server
const port = Number(3000)

await app.listen({port});
  