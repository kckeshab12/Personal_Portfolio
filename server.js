const http = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const host = "0.0.0.0";
const app = next({ dev: false, hostname: host, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => handle(req, res));
    server.listen(port, host, () => {
      // Keep output concise for hosting logs.
      console.log(`Next.js server running on ${host}:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start Next.js server:", error);
    process.exit(1);
  });
