window.onload = function(){
  const currentRootDiv = document.querySelector('#current-root');
  const intervalKDiv = document.querySelector('#interval');
  const answerDiv = document.querySelector('#answer');

  const pureNotes = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G'
  ];

  const notes = {
    0: {'pure': 'A', 'A': 'A', 'B': 'Bbb'},
    1: {'pure': 'B', 'B': 'Bb', 'A': 'A#'},
    2: {'pure': 'B', 'B': 'B', 'C': 'Cb'},
    3: {'pure': 'C', 'C': 'C', 'B': 'B#'},
    4: {'pure': 'D', 'D': 'Db', 'C': 'C#'},
    5: {'pure': 'D', 'D': 'D'},
    6: {'pure': 'E', 'E': 'Eb', 'D': 'D#'},
    7: {'pure': 'E', 'E': 'E', 'F': 'Fb'},
    8: {'pure': 'F', 'F': 'F', 'E': 'E#'},
    9: {'pure': 'G', 'G': 'Gb', 'F': 'F#'},
    10: {'pure': 'G', 'G': 'G'},
    11: {'pure': 'A', 'A': 'Ab', 'G' : 'G#'}
  };

  const noteCount = 12;

  const intervals = [
      // {'name': 'm2', 'semitones': 1},
      // {'name': 'M2', 'semitones': 2},
      {'name': 'm3', 'semitones': 3, 'pureTones': 2},
      {'name': 'M3', 'semitones': 4, 'pureTones': 2},
      // {'name': 'P4', 'semitones': 5},
      // {'name': '#4/b5', 'semitones': 6},
      {'name': 'P5', 'semitones': 7, 'pureTones': 4},
      // {'name': 'm6', 'semitones': 8},
      // {'name': 'M6', 'semitones': 9},
      {'name': 'm7', 'semitones': 10, 'pureTones': 6},
      {'name': 'M7', 'semitones': 11, 'pureTones': 6},
      // {'name': 'b9', 'semitones': 13},
      // {'name': '9', 'semitones': 14},
      // {'name': '#9/b11', 'semitones': 15},
      // {'name': '11', 'semitones': 16}
  ];

  let currentNoteIndex,
    pureNoteIndex,
    currentNoteObject,
    currentInterval,
    currentAnswer,
    answerTime;


  function setStartingNote() {
    // choose a new note index, checking against the old one
    // to avoid repeats
    let newNoteIndex = Math.floor(Math.random()*noteCount);
    while (newNoteIndex === currentNoteIndex) {
      newNoteIndex = Math.floor(Math.random()*noteCount);
    }
    currentNoteIndex = newNoteIndex;
    currentNoteObject = notes[currentNoteIndex];
    pureNoteIndex = pureNotes.indexOf(currentNoteObject.pure);
  }

  function setAnswer() {
    // find the pure tone of the correct note using the interval
    let pureAnswerIndex = pureNoteIndex + currentInterval.pureTones;
    if (pureAnswerIndex > pureNotes.length - 1) {
      pureAnswerIndex = pureAnswerIndex - pureNotes.length;
    }
    let answerIndex = currentNoteIndex + currentInterval.semitones;
    if (answerIndex > noteCount - 1) {
      answerIndex = answerIndex - noteCount;
    }
    currentAnswer = notes[answerIndex][pureNotes[pureAnswerIndex]];
    if (currentAnswer === undefined) {
      debugger
    }
  }

  function newQuestion() {
    setStartingNote();
    currentInterval = intervals[Math.floor(Math.random()*intervals.length)];
    setAnswer();
    currentRootDiv.innerText = currentNoteObject[currentNoteObject.pure];
    intervalKDiv.innerText = currentInterval.name;
    answerDiv.innerText = '';
    answerTime = document.querySelector('#answer-timer').value * 1000;
    setTimeout(function() {
      answerDiv.innerText = currentAnswer;
      setTimeout(newQuestion, 1500);
    }, answerTime);
  }
  newQuestion();
}
