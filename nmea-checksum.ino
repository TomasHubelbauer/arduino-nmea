void setup() {
  Serial.begin(9600);
  Serial.println();

  double pressure = 1018.35;
  
  String sentence;
  
  // Uncomment the following lines and comment the lines below for a real life example:
  sentence += "$POV,P,";
  sentence += String(pressure);
  sentence += "*";
  
  // Uncomment the following lines and comment the lines above for an example from http://elimelecsarduinoprojects.blogspot.cz/2013/07/nmea-checksum-calculator.html
  //sentence += "$test*";
  
  // http://www.hhhh.org/wiml/proj/nmeaxor.html
  bool started = false;
  char checksum = 0;
  for (int index = 0; index < sentence.length(); index++) {
    if (index > 0 && sentence[index - 1] == '$') {
      Serial.println("Found first checksum char:");
      Serial.println(sentence[index]);
      Serial.println(sentence[index], HEX);
      Serial.println("Set as initial 'last step result'.");
      Serial.println();
      checksum = sentence[index];
      started = true;
      continue; // Skip the rest of this loop iteration.
    }
    
    if (sentence[index] == '*') {
      Serial.println("Reached the end of checksum chars.");
      Serial.println("Final checksum:");
      Serial.println(checksum, HEX);
      Serial.println();
      break; // Exit the loop.
    }
    
    // Ignore everything preceeding '$'.
    if (!started) {
      continue; // Skip the rest of this loop iteration.
    }
    
    Serial.println("Xorring last step result and current char.");
    Serial.println(checksum, HEX);
    Serial.println(sentence[index]);
    Serial.println(sentence[index], HEX);
    
    checksum = checksum xor sentence[index];
    Serial.println("Got new last step result:");
    Serial.println(checksum, HEX);
    Serial.println();
  }
  
  sentence += String(checksum, HEX);
  Serial.println("Sentence with checksum:");
  Serial.println(sentence);
}

void loop() {
    
}
