import { Redis as IORedis } from "ioredis";

export const redisOptions = {
  host: "localhost",
  port: 6379,
  // password: "redis",
  db: 0,
  lazyConnect: true,
  keepAlive: 1000,
};
const Redis = new IORedis(redisOptions);

export default Redis;
