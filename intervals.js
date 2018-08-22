window.onload = function(){
  const currentRootDiv = document.querySelector('#current-root');
  const intervalKDiv = document.querySelector('#interval');
  const answerDiv = document.querySelector('#answer');

  const notes = [
    'A',
    'Bb',
    'B',
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab'
  ];

  const intervals = [
      // {'name': 'm2', 'semitones': 1},
      // {'name': 'M2', 'semitones': 2},
      {'name': 'm3', 'semitones': 3},
      {'name': 'M3', 'semitones': 4},
      // {'name': 'P4', 'semitones': 5},
      // {'name': '#4/b5', 'semitones': 6},
      {'name': 'P5', 'semitones': 7},
      // {'name': 'm6', 'semitones': 8},
      // {'name': 'M6', 'semitones': 9},
      {'name': 'm7', 'semitones': 10},
      {'name': 'M7', 'semitones': 11},
      // {'name': 'b9', 'semitones': 13},
      // {'name': '9', 'semitones': 14},
      // {'name': '#9/b11', 'semitones': 15},
      // {'name': '11', 'semitones': 16}
  ];

  let currentNoteIndex, currentInterval, currentAnswerIndex, answerTime;

  function newQuestion() {
    let newNoteIndex = Math.floor(Math.random()*notes.length);
    while (newNoteIndex === currentNoteIndex) {
      newNoteIndex = Math.floor(Math.random()*notes.length);
    }
    currentNoteIndex = newNoteIndex;
    currentInterval = intervals[Math.floor(Math.random()*intervals.length)];
    currentAnswerIndex = currentNoteIndex + currentInterval.semitones;
    if (currentAnswerIndex > notes.length - 1) {
      currentAnswerIndex = currentAnswerIndex - notes.length;
    }
    currentRootDiv.innerText = notes[currentNoteIndex];
    intervalKDiv.innerText = currentInterval.name;
    answerDiv.innerText = '';
    answerTime = document.querySelector('#answer-timer').value * 1000;
    setTimeout(function() {
      answerDiv.innerText = notes[currentAnswerIndex];
      setTimeout(newQuestion, 1500);
    }, answerTime);
  }
  newQuestion();
}
