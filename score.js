function scorePigs(pig1, pig2) {
let handScore = 0;

  // handle doubles
  if (pig1 == pig2) {
    if (pig1 == 'Dot' || pig1 == 'No Dot') {
      return 1;
    } else if (pig1 == 'Razorback' || pig1 == 'Trotter') {
      return 20;
    } else if (pig1 == 'Snouter') {
      return 40;
    } else {
      return 60;
    }
  }

  // handle not doubles
  if (pig1 == 'Razorback' || pig2 == 'Razorback') {
    handScore += 5;
  }
  if (pig1 == 'Trotter' || pig2 == 'Trotter') {
    handScore += 5;
  }
  if (pig1 == 'Snouter' || pig2 == 'Snouter') {
    handScore += 10;
  }
  if (pig1 == 'Leaning Jowler' || pig2 == 'Leaning Jowler') {
    handScore += 15;
  }

  return handScore;
}
