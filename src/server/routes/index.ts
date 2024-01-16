import { Router } from "express";
import { getCategories } from "./getCategories";
import { getPopUpData } from "./getPopUpData";


const routes = Router()

routes.get('/getCategories',getCategories)
routes.get('/getPopUpData',getPopUpData)


export default routes;