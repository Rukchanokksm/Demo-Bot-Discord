export const validEnv = () => {
      if (!process.env.BOT_TOKEN) {
            return console.warn("Missing token discord");
      }
      if (!process.env.MONGODB_URL) {
            return console.warn("Missing MondgoDB URL");
      }
      return;
};
