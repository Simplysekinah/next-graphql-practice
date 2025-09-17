import mongoose from "mongoose";

const connect = async () =>{
    try {
        const connected = await mongoose.connect(process.env.MONGOURI!)
        if (connected) {
            console.log("database connect successfully")
        }
    } catch (error) {
        console.log(error);
    }
}

export default connect