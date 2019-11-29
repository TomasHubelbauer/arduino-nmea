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

### Try using the Arduino Builder in parallel to the Arduino CLI

It should be the same thing as the Builder seems to use the CLI, but it will be
helpful to have an example of using both for CD.
