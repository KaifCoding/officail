import dbConnect from "@/lib/db";
import Data from "@/models/Student";
// http://localhost:3000/api/getstudent?number=555

export default async function POST(req, res) {
 
    try {  
       
        const number = await req.query.number
         await  dbConnect();
        
        const data = await Data.find({enroll : number})
         if(data  == ""){
            res.status(500).json({msg:"no student found with this enroll number"})
         }
        res.status(200).json(data)
    }catch (e) {
        res.status(500).json({msg:"some error"})
    }
}