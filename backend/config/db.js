// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);

// const ConnectionDB = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGODB_URL);
//     console.log(
//       `Mongodb is connected at:${connection.host}`
//     );
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };
// module.exports = ConnectionDB;



import mongoose from "mongoose"

const ConnectionDB = async () => {
  try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL);
        console.log(
          `Mongodb is connected at:${connection.host}`
        );
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
 
  };
  

  export default ConnectionDB;