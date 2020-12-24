import { Router } from "../deps";
import UserRouter from "./Users";

const router = Router()

// Init router and path
router.use('/users', UserRouter)

// Export the base router
export default router;