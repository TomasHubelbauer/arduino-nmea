# Arduino NMEA checksum

NMEA implementation for Arduino. I am trying to figure out how to run this in an emulator now:

```sh
# Download Arduino CLI 0.5.0
curl -L https://github.com/arduino/arduino-cli/releases/download/0.5.0/arduino-cli_0.5.0_Linux_64bit.tar.gz -o arduino-cli.tar.gz
# Extract the archive to get `arduino-cli`
tar -xvzf arduino-cli.tar.gz
# Update index and install the AVR core
./arduino-cli core update-index
./arduino-cli core install arduino:avr
# Compile the sketch to get the HEX and ELF files
./arduino-cli compile -b arduino:avr:uno nmea-checksum.ino
# Install dependencies for building SimAVR
apt update
apt install -y build-essential libelf-dev avr-libc gcc-avr freeglut3-dev libncurses5-dev pkg-config
# Close the SimAVR repo and build it
git clone https://github.com/buserror/simavr.git
cd simavr
make
# Go to the compiled artifacts where `run_avr` is now
cd simavr
# Start the simulation
./run_avr -m atmega168 -f 16000000 ../../nmea-checksum.ino.arduino.avr.uno.elf
# TODO https://github.com/buserror/simavr/issues/345
# - Execute the `setup` method
# - Print the serial messages to the terminal
# - Try PicSimLab to see for serial https://github.com/lcgamboa/picsimlab/issues/8
```

## To-Do

Figure https://github.com/buserror/simavr/issues/345 and https://github.com/lcgamboa/picsimlab/issues/8

Set GitHub Actions workflow to run this on each push
