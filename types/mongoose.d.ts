import { Mongoose } from "mongoose";

// extend the globalThis
// see https://stackoverflow.com/questions/35074713/extending-typescript-global-object-in-node-js
declare global {
    // add the mongoose instance, supplying the type
    var mongooseInstance: {
        promise: Promise<Mongoose> | null,
        conn: Mongoose | null
    };
}