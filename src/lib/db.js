import mongoose from 'mongoose'


export  async function connect() {
   try {

    await mongoose.connect(process.env.MONGO_URI);
    const connection=mongoose.connection;



    connection.on('connected', () => {
        console.log('Database connected successfully!');
      });
      
      connection.on('error', (err) => {
        console.error('Database connection error: please make sure DB is connected', err);

        process.exit();
      });
      
      connection.on('disconnected', () => {
        console.log('Database disconnected.');
      });
    
   } catch (error) {

    console.log('something went wrong while connecting to the database', error);
    
    
   }

}


