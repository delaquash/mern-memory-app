import mongoose from 'mongoose';


 const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${con.connection.host}`.green.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1)
    }
};

module.export = connectDB;