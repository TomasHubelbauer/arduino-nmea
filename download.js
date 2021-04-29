import https from 'https';

export default function download(/** @type {string} */ url, /** @type {unknown} */ body) {
  return new Promise((resolve, reject) => {
    const request = https
      .request(url, { method: 'POST', headers: { 'Content-Type': 'application/json' } }, async response => {
        /** @type {Buffer[]} */
        const buffers = [];
        for await (const buffer of response) {
          buffers.push(buffer);
        }

        resolve(JSON.parse(Buffer.concat(buffers)));
      });

    request.on('error', reject);
    request.write(JSON.stringify(body))
    request.end();
  });
}
