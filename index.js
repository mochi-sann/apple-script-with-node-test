const applescript = require('applescript');

// Very basic AppleScript command. Returns the song name of each
// currently selected track in iTunes as an 'Array' of 'String's.
const script = 'display notification "こんにちはーーーーーー"';

applescript.execString(script, (err, rtn) => {
  if (err) {
    // Something went wrong!
    console.log("えらーーーーーーーー")
    console.log(err)
  }
  if (Array.isArray(rtn)) {
    for (const songName of rtn) {
      console.log(songName);
    }
  }
});

