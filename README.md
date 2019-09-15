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

Download the latest CLI without hardcoding the version https://github.com/arduino/arduino-cli/issues/407.
See related work in the `arduino-cli-latest` branch.

Figure out why using SimAVR through Aptitude results in a crash or encourage the
maintainer to publish the latest version where it might work. https://github.com/buserror/simavr/pull/346
See related work in the `apt-simavr` branch.
