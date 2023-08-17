import { connect } from "mongoose";

export const connectDatabase = async () => {
      try {
            if (!process.env.MONGODB_URL) {
                  return console.log("no have link mongodb_url");
            }
            await connect(process.env.MONGODB_URL);
            console.log("database is connected !!!");
      } catch (err) {
            console.error(err);
            return console.log("Can't connect database");
      }
};
