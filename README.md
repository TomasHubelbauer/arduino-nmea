# Arduino NMEA Checksum

![](https://github.com/tomashubelbauer/arduino-nmea-checksum/workflows/ci/badge.svg)

NMEA implementation for Arduino.

Example output:

```
$POV,P,1018.35*39..
$test*16..
$POV,P,951.78*05..
$POV,P,951.84*06..
```

Check out `.github/workflows/ci.yml` to see how to run this sketch in an emulator.

## To-Do

### Figure out why using SimAVR through Aptitude results in a crash

See related work in the `apt-simavr` branch.

### Fix the Builder not being able to find dependencies

Currently the optional build with Builder fails because of this.

### Run SimAVR on both the Arduino CLI and the Arduino Builder builds

Compare both to the expected output.

### Look into using AVR8JS by Wokwi to simulate the Arduino and check tests

https://github.com/wokwi/avr8js

It's not a real Arduino, but if it can output serial data for us to check, it
might be completely sufficient for just testing this simple algorithm with no
peripherials.

### Fix Arduino CLI looking up incorrect sketch in the GitHub Actions workflow

The command is `arduino-cli compile -b arduino:avr:uno nmea-checksum` (I tried
with and without the `.ino` extension). It looks into the correct directory as
verified using `pwd` in the workflow, but it looks for a file by the name of
`arduino-nmea-checksum.ino` instead of `nmea-checksum.ino` as passed in through
the CLI. The CLI documentation below does not seem to indicate my command is not
correct, so I'm not sure why it is not picking up the right file:

https://arduino.github.io/arduino-cli/latest/getting-started/#compile-and-upload-the-sketch
