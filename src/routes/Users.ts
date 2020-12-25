import { Router } from "https://deno.land/x/oak/mod.ts";

import { users } from "../database/Mock/UserSeeder";

const router = new Router()



/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/
router.get('/all', (request:Request, response:Response) => {
    response.setStatus(200).json({
        success: true,
        data: users
    })
})


export default router;