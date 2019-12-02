# Arduino NMEA Checksum

![](https://github.com/tomashubelbauer/arduino-nmea-checksum/workflows/ci/badge.svg)

[**LIVE**](https://tomashubelbauer.github.io/arduino-nmea-checksum)

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

### Finalize the Arduino Builder run

Supply the `-hardware` switch by downloading and extracing the Arduino IDE and
using the `hardware` folder that comes with it.

https://github.com/arduino/arduino-builder#usage
