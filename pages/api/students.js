import dbConnect from "@/lib/db";
import Data from "@/models/Student";




export default async function POST(req, res) {
  
    try {

        const data = await req.body;
        console.log(data)
        await  dbConnect();
        
        await Data.create(data);

        
        res.status(200).json({msg:"success"})
    }catch (e) {
        
        
        res.status(500).json({msg:"errr"})
    }
    
}
