import mongoose from "mongoose";

async function conectDatabase(){
    mongoose.connect();
    return mongoose.connection;
};

export default conectDatabase;
