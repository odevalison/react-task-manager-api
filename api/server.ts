import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({ "/api/*": "/$1" }));
server.use(router);

export default function handler(req: any, res: any) {
  server(req, res);
}
