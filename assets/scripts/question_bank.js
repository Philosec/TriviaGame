function QuestionBank() {
  'use strict';

  this.questionArr = [];
}

QuestionBank.prototype.initQuestions = function () {
  this.questionArr.push('What type of galaxy is the most common in the universe', 'Elliptical', ['Spiral', 'Barred Spiral', 'Irregular'], '/assets/images/galaxy.png');
  this.questionArr.push('How old is the universe in light years', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], '/assets/images/universe.png');
}

function Question(question, answer, wrongAnswersArr, img) {
  this.question = question;
  this.answer = answer;
  this.wrongAnswersArr = wrongAnswersArr;
  this.img = img;
}