const dgram = require('dgram');

const PORT_P = 8000;
const HOST_P = 'p';

const PORT_N = 8001;
const HOST_N = 'n';

const socket = dgram.createSocket('udp4');
socket.on('message', (buf, rinfo) => {
  console.log(rinfo.address + ':' + rinfo.port +' - ' + buf);

  // sleep
  setTimeout(() => {
    socket.send(buf+buf, 0, 2*buf.length, PORT_P, HOST_P, (err, bytes) => {
      if (err) throw err;
    });
  }, 1000);
});

socket.bind(PORT_N, HOST_N);
