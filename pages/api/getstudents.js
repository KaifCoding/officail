import dbConnect from "@/lib/db";
import Data from "@/models/Student";


export default async function GET(req, res) {
 
    try {  


         await  dbConnect();
        
        const data = await Data.find()

        res.status(200).json(data)
    }catch (e) {
        
        res.status(500).json({msg:"errr"})
    }
}