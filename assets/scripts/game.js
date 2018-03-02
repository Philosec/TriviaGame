function Game() {
  'use strict';

  this.questionBank = new QuestionBank();
  this.questions = this.questionBank.questionArr;
  this.currentQuestion = 0;
}

Game.prototype.init = function () {
  this.setupNextQuestion();

  $('.game-start-btn').on('click', (event) => {
    $(event.currentTarget).fadeOut('fast', () => {
      $('.game-section').fadeIn({queue: false, duration: 400});
      $('.game-section').addClass('fadeInUp');

      $('.bg-img').fadeOut(500, () => {
        $('.bg-img').attr('src', 'assets/images/universe.png');
        $('.bg-img').fadeIn(500);
      });
    })
  });
}

Game.prototype.setupNextQuestion = function () {
  let $card = $('.question-card');
  let $questionText = $('.question-text', $card);
  let $answerButtonsArr = $('.answer', $card);

  $($questionText).text(this.questions[this.currentQuestion].question + "?");

  let answers = this.questionBank.getAnswersArr(this.currentQuestion);
  answers = shuffle(answers);

  for (let i = 0; i < $answerButtonsArr.length; i++) {
    $($answerButtonsArr[i]).text(answers[i]);
  }
}