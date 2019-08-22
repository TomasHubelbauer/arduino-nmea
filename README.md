# Arduino NMEA checksum

[Source on Arduino Create](https://create.arduino.cc/editor/tomashubelbauer/9f121e3e-12ef-4581-9e94-2544701867c7)

1. Download the latest [`arduino-cli`](https://github.com/arduino/arduino-cli/releases)
2. Run `arduino-cli core update-index`
3. Run `arduino-cli core install arduino:avr`
4. Run `arduino-cli compile --fqbn arduino:avr nmea-checksum.ino`
5. Download the latest [`picsimlab`](https://github.com/lcgamboa/picsimlab)
6. Open the resulting HEX file in picsimlab
