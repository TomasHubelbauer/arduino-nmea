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

Add a case (and test) with some text before `$`, like `printSentenceWithChecksum("test$test*", false); // 16`.
