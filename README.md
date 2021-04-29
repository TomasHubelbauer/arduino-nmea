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

Check out [`.github/workflows/main.yml`](.github/workflows/main.yml) to see how
the NMEA values are tested for correctness by running this sketch in an emulator
using the [avr8js Arduino emulator library](https://github.com/wokwi/avr8js) by
Wokwi.
