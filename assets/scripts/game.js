function Game () {
  'use strict'

  this.questionBank = new QuestionBank()
  this.questions = this.questionBank.questionArr
  this.currentQuestionIndex = 0
  this.numCorrect = 0
  this.numWrong = 0
  this.waitingForTransition = false;
}

Game.prototype.init = function () {
  this.setupNextQuestion()

  $(document).on('click', '.answer', (event) => {

    console.log(this.waitingForTransition)

    var answer = $(event.currentTarget).text()

    if (!this.waitingForTransition) {
      this.processGuess(answer)
    }
  })

  $('.game-start-btn').on('click', (event) => {
    $(event.currentTarget).fadeOut('fast', () => {
      $('.game-section').fadeIn({queue: false, duration: 400})
      $('.game-section').addClass('fadeInUp')
      this.transitionBackgroundImg()
    })
  })
}

Game.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentQuestionIndex]
}

Game.prototype.setupNextQuestion = function () {
  let $card = $('.question-card')
  let $questionText = $('.question-text', $card)
  let $answerButtonsArr = $('.answer', $card)

  $($questionText).text(this.getCurrentQuestion().question + '?')

  let answers = this.getCurrentQuestion().getAnswerArr()
  answers = shuffle(answers)

  for (let i = 0; i < $answerButtonsArr.length; i++) {
    $($answerButtonsArr[i]).text(answers[i])
  }
}

Game.prototype.processGuess = function (guess) {
  this.waitingForTransition = true;

  var $answerButtonArr = $('.answer')

  var highlightButtons = () => {
    $.each($answerButtonArr, (index, btn) => {
      if ($(btn).text() === this.getCurrentQuestion().answer) {
        $(btn).removeClass('btn-info')
        $(btn).addClass('btn-success')
      }
      else {
        $(btn).removeClass('btn-info')
        $(btn).addClass('btn-danger')
      }
    })
  }

  if (this.getCurrentQuestion().isCorrectAnswer(guess)) {
    this.numCorrect++

    $('.check').removeClass('d-none')
    $('.question-text').addClass('mt-2 mb-0')
    highlightButtons()
  }
  else {
    this.numWrong++

    $('.cross').removeClass('d-none')
    $('.question-text').addClass('mt-2 mb-0')
    highlightButtons()
  }

  console.log("correct: " + this.numCorrect + " wrong: " + this.numWrong)

  this.transitionQuestionCard();
}

Game.prototype.transitionQuestionCard = function () {
  let $questionCard = $('.question-card')
  let $questionText = $('.question-text')
  let $answerBtnArr = $('.answer');

  setTimeout(function () {
    // $('body>.container').css('background', 'rgba(255, 255, 255, 0)')
    $($questionCard).removeClass('bounceInRight')
    $($questionCard).addClass('bounceOutLeft')
  }, 2000)

  setTimeout(() => {
    //Increment and setup new question just before transitioning in
    this.currentQuestionIndex++
    this.setupNextQuestion()

    $('.check').addClass('d-none')
    $('.cross').addClass('d-none')
    $($questionText).removeClass('mt-2 mb-0')

    $.each($answerBtnArr, (index, btn) => {
      $(btn).removeClass('btn-danger')
      $(btn).removeClass('btn-success')
      $(btn).addClass('btn-info')
    })

    $($questionCard).removeClass('bounceOutLeft')
    $($questionCard).addClass('bounceInRight')
    this.transitionBackgroundImg()

    this.waitingForTransition = false;
  }, 3000)
}

/**
 * Change the background to the current question's background
 */
Game.prototype.transitionBackgroundImg = function () {
  $('.bg-img').fadeOut(500, () => {
    $('.bg-img').html(this.getCurrentQuestion().img)
    $('.bg-img').fadeIn(500)
  })
}