import { opine } from "./mod";

import BaseRouter from './src/routes';

const app = opine();

// Init cors
// app.use(opineCors());

// Test API
app.get("/", (req:Request, res:Response) =>{
  res.json("Hello MF!");
});

// Add APIs
app.use('/api', BaseRouter)

app.listen(3000, () => console.log('Opine server running on port 3000!'));