import mongoose from "mongoose";

async function conectDatabase(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.z1anr6u.mongodb.net/livraria");
    return mongoose.connection;
};

export default conectDatabase;
