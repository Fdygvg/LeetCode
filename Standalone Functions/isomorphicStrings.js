 function isIsomorphic(s, t) {
    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {
      let chS = s[i];
      let chT = t[i];
      if (mapS.has(chS)) {
        if (mapS.get(chS) !== chT) {
          return false;
        }
      }
      if (mapT.has(chT)) {
        if (mapT.get(chT) !== chS) {
          return false;
        }
      }
      mapS.set(chS, chT);
      mapT.set(chT, chS);
    }
    return true;
  }