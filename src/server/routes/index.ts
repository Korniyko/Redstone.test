import { Router } from "express";
import { getCategories } from "./getCategories";


const routes = Router()

routes.get('/getCategories',getCategories)


export default routes;