import { Redis } from "ioredis";

export const redisOptions = {
  host: "localhost",
  port: 6379,
  // password: "redis",
  db: 0,
  lazyConnect: true,
  keepAlive: 1000,
};
const redis = new Redis(redisOptions);

export default Redis;
