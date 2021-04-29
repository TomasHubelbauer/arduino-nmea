export default function parse(/** @type {string} */ hex, /** @type {Uint8Array} */ buffer) {
  for (const line of hex.split('\n')) {
    if (line[0] === ':' && line.substr(7, 2) === '00') {
      const bytes = parseInt(line.substr(1, 2), 16);
      const addr = parseInt(line.substr(3, 4), 16);
      for (let i = 0; i < bytes; i++) {
        buffer[addr + i] = parseInt(line.substr(9 + i * 2, 2), 16);
      }
    }
  }
}
