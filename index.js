import { createServer } from "json-server";
import { join } from "path";

const server = createServer();
const router = server.router(join(process.cwd(), "db.json"));
const middlewares = server.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
