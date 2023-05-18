import { MongoClient } from "mongodb";

// extend the globalThis for mongo
// see https://stackoverflow.com/questions/35074713/extending-typescript-global-object-in-node-js
declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}