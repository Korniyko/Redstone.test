import { Request, Response } from "express"
import categoriesData from '../mock/Categories.json'
import axios from "axios";


export const getPopUpData = async (request: Request, response: Response) => {

    try {

        const popUpData = await axios.get('https://redstone.media/merge/uk/_popup.php');

        console.log(popUpData.data);
        const result = {
            htmlPart: JSON.stringify(popUpData.data)
        }
        
        response.json(result)

    } catch (error: any) {
        console.log(`error happend on route getPopUpData:${error.message}`)
        response.sendStatus(500)
    }

}