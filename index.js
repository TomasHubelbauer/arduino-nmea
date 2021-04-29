import avr8js from 'avr8js';
import fs from 'fs';
import parse from './parse.js';
import download from './download.js';

// Remove the development copy of arduino-nmea so it doesn't stay if build fails
try {
  await fs.promises.unlink('arduino-nmea.uart');
}
catch (error) {
  if (error.code !== 'ENOENT') {
    throw error;
  }
}

const program = new Uint16Array(0x8000);
const cpu = new avr8js.CPU(program);

// Note that in GitHub Actions the file is created by `arduino/compile-sketches`
try {
  const hex = await fs.promises.readFile('arduino-nmea.hex', 'utf-8');
  parse(hex, new Uint8Array(program.buffer));
  console.log('Reused cached HEX');
}
catch (error) {
  const sketch = await fs.promises.readFile('arduino-nmea.ino', 'utf-8');
  const { hex, stdout, stderr } = await download('https://hexi.wokwi.com/build', { sketch });
  await fs.promises.writeFile('arduino-nmea.hex', hex);
  parse(hex, new Uint8Array(program.buffer));
  console.log('Compiled sketch to HEX');
  console.log(stdout);
  console.log(stderr);
}

const buffer = [];
const usart = new avr8js.AVRUSART(cpu, avr8js.usart0Config, 16e6);
usart.onByteTransmit = (value) => buffer.push(value);

// Note that the exact amount of instructions is just shy of 1M and known prior
let instruction = 0;
while (++instruction < 1_000_000) {
  avr8js.avrInstruction(cpu);
  cpu.tick();
}

const string = String.fromCharCode(...buffer);
console.log(string);
await fs.promises.writeFile('arduino-nmea.uart', string);
