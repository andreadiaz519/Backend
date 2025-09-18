const net = require("net");

const client = net.createConnection({ port: 3001 }, () => {
  console.log("Conectado al servidor.");
});

client.on("data", (data) => {
  const text = data.toString();
  try {
    const obj = JSON.parse(text);
    console.log("UUID recibido:", obj.uuid);
  } catch (err) {
    console.error("Recibido (no JSON):", text);
  }
  client.end();
});

client.on("end", () => {
  console.log("Conexión cerrada.");
});
