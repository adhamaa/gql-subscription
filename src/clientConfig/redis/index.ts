// import { Redis } from "ioredis";

// const redisOptions = {
//   host: "localhost", // Redis server host
//   port: 6379, // Redis server port
//   password: "redis", // Redis server password (if required)
//   db: 0, // Redis database index
//   retryStrategy: (times: number) => {
//     // Retry strategy for failed connection attempts
//     if (times <= 3) {
//       return Math.min(times * 100, 3000);
//     }2
//     return null; // Return `null` to stop retrying
//   },
//   connectTimeout: 10000
// };
// const redis = new Redis(redisOptions);

// export default { redis };
