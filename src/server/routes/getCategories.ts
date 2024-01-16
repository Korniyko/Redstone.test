import { Request, Response } from "express"
import categoriesData from '../mock/Categories.json'


export  const getCategories = async (request: Request,response: Response) => {

    try {
       

          
        
        response.json(categoriesData)
    } catch (error: any) {
        console.log(`error happend on route getCategories:${error.message}`)
        response.sendStatus(500)
    }

}