 function wordPattern(pattern: string, str: string): boolean {
    const words: string[] = str.split(" ");
    if (pattern.length !== words.length) {
      return false;
    }
    const letterToWord = new Map<string, string>();
    const wordToLetter = new Map<string, string>();

    for (let i = 0; i < pattern.length; i++) {
      let lW = pattern[i];
      let wL = words[i];

      if (letterToWord.has(lW)) {
        if (letterToWord.get(lW) !== wL) {
          return false;
        }
      }
      if (wordToLetter.has(wL)) {
        if (wordToLetter.get(wL) !== lW) {
          return false;
        }
      }
      wordToLetter.set(wL, lW);
      letterToWord.set(lW, wL);
    }

    return true;
  }
