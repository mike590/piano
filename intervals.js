window.onload = function(){
  const currentRootDiv = document.querySelector('#current-root');
  const intervalKDiv = document.querySelector('#interval');
  const answerDiv = document.querySelector('#answer');

  const notes = [
    'A',
    'A#/Bb',
    'B',
    'C',
    'C#/Db',
    'D',
    'D#/Eb',
    'E',
    'F',
    'F#/Gb',
    'G',
    'G#/Ab'
  ];

  const intervals = [
      // {'name': 'Minor 2', 'semitones': 1},
      // {'name': 'Major 2', 'semitones': 2},
      {'name': 'Minor 3', 'semitones': 3},
      {'name': 'Major 3', 'semitones': 4},
      // {'name': 'Perfect 4', 'semitones': 5},
      {'name': 'Sharp 4/Flat 5', 'semitones': 6},
      {'name': 'Perfect 5', 'semitones': 7},
      // {'name': 'Minor 6', 'semitones': 8},
      // {'name': 'Major 6', 'semitones': 9},
      {'name': 'Minor 7', 'semitones': 10},
      {'name': 'Major 7', 'semitones': 11},
      // {'name': 'Flat 9', 'semitones': 13},
      // {'name': '9', 'semitones': 14},
      // {'name': 'Sharp 9/Flat 11', 'semitones': 15},
      // {'name': '11', 'semitones': 16}
  ];

  let currentNoteIndex, currentInterval, currentAnswerIndex;

  function newQuestion() {
    currentNoteIndex = Math.floor(Math.random()*notes.length);
    currentInterval = intervals[Math.floor(Math.random()*intervals.length)];
    currentAnswerIndex = currentNoteIndex + currentInterval.semitones;
    if (currentAnswerIndex > notes.length - 1) {
      currentAnswerIndex = currentAnswerIndex - notes.length;
    }
    currentRootDiv.innerText = notes[currentNoteIndex];
    intervalKDiv.innerText = currentInterval.name;
    answerDiv.innerText = '';
    setTimeout(function() {
      answerDiv.innerText = notes[currentAnswerIndex];
    }, 2000)
  }
  newQuestion();
  setInterval(newQuestion, 4000);
}
