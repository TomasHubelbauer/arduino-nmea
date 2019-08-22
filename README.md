# Arduino NMEA checksum

1. Download the latest [`arduino-cli`](https://github.com/arduino/arduino-cli/releases)
2. Run `arduino-cli core update-index`
3. Run `arduino-cli core install arduino:avr:uno`
4. Run `arduino-cli compile -b arduino:avr:uno nmea-checksum.ino`
5. Find out how to run the HEX/ELF in `simavr` https://github.com/buserror/simavr/issues/345
6. Download the latest [`picsimlab`](https://github.com/lcgamboa/picsimlab) https://github.com/lcgamboa/picsimlab/pull/7
7. Open the resulting HEX/ELF file in picsimlab https://github.com/lcgamboa/picsimlab/issues/8
