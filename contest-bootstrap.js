// Keep the existing tutor + Socket.IO server intact while attaching the REST
// endpoints used by contest.html. Express routes can be registered after the
// HTTP server starts, so this avoids duplicating the main server configuration.
const expressPath=require.resolve("express");
const realExpress=require("express");

function capturedExpress(...args){
  const app=realExpress(...args);
  global.__PCP_EXPRESS_APP=app;
  return app;
}
Object.assign(capturedExpress,realExpress);
require.cache[expressPath].exports=capturedExpress;

require("./server");

if(!global.__PCP_EXPRESS_APP){
  throw new Error("Could not attach contest routes: Express app was not captured.");
}
require("./contest-routes")(global.__PCP_EXPRESS_APP);
console.log("PCP Group Contest REST routes attached");
