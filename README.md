# Arduino NMEA checksum

[Source on Arduino Create](https://create.arduino.cc/editor/tomashubelbauer/9f121e3e-12ef-4581-9e94-2544701867c7)

1. Download the latest [`arduino-cli`](https://github.com/arduino/arduino-cli/releases)
2. Run `arduino-cli core update-index`
3. Run `arduino-cli core install arduino:avr:uno`
4. Run `arduino-cli compile -b arduino:avr:uno nmea-checksum.ino`
5. Find out how to run the HEX/ELF in `simavr`
6. Download the latest [`picsimlab`](https://github.com/lcgamboa/picsimlab)
7. Open the resulting HEX/ELF file in picsimlab
