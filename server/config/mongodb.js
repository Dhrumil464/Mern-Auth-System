import mongoose  from "mongoose";

const connectToDB = async () => {
    mongoose.connection.on('connected',()=>{
        console.log('MongoDB Database Connected!');
    })
    await mongoose.connect(`${process.env.MONGO_URI}/mern-auth`)
}

export default connectToDB;