const net = require("net");

const client = net.createConnection({ port: 3002 }, () => {
  console.log("Conectado al servidor");
});

client.on("data", (data) => {
  const json = JSON.parse(data.toString());
  console.log("UUID v1 recibido:", json.uuid);
  client.end();
});
