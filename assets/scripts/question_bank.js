function QuestionBank() {
  'use strict';

  this.questionArr = [];

  this.initQuestions();
  this.shuffle();
}

QuestionBank.prototype.initQuestions = function () {
  this.questionArr.push(new Question('What type of galaxy is the most common in the universe', 'Elliptical', ['Spiral', 'Barred Spiral', 'Irregular'], '/assets/images/galaxy.png'));
  this.questionArr.push(new Question('How old is the universe in light years', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], '/assets/images/universe.png'));

  this.questionArr.push(new Question('some string 1', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], '/assets/images/universe.png'));
  this.questionArr.push(new Question('some string 2', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], '/assets/images/universe.png'));
  this.questionArr.push(new Question('some string 3', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], '/assets/images/universe.png'));
}

QuestionBank.prototype.shuffle = function () {
  shuffle(this.questionArr);
}

QuestionBank.prototype.getAnswersArr = function (questionIndex) {
  let arr = [];

  arr.push(this.questionArr[questionIndex].answer);
  for (let i = 0; i < this.questionArr[questionIndex].wrongAnswersArr.length; i++) {
    arr.push(this.questionArr[questionIndex].wrongAnswersArr[i]);
  }

  return arr;
}

function Question(question, answer, wrongAnswersArr, img) {
  this.question = question;
  this.answer = answer;
  this.wrongAnswersArr = wrongAnswersArr;
  this.img = img;
}