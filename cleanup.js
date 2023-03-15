import mongoose from "mongoose";

// Define the MongoDB connection string and database name
const uri = 'mongodb+srv://vanessa:15march@cluster0.zskjoll.mongodb.net/mydocs?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
const cleanup = async () => {
    await mongoose.connect(uri, { useNewUrlParser: true });
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
};

export default cleanup()