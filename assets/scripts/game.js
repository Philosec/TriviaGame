function Game () {
  'use strict'

  this.questionBank = new QuestionBank()
  this.questions = this.questionBank.questionArr
  this.currentQuestionIndex = 0
  this.numCorrect = 0
  this.numWrong = 0
  this.questionTimer = null
  this.timeRemaining = 0;
  this.waitingForTransition = false
}


Game.prototype.init = function () {
  this.setupNextQuestion()

  $(document).on('click', '.answer', (event) => {

    var answer = $(event.currentTarget).text()

    if (!this.waitingForTransition) {
      this.processGuess(answer)
    }
  })

  $('.game-start-btn').on('click', (event) => {
    $(event.currentTarget).fadeOut('fast', () => {
      $('.game-section').fadeIn({queue: false, duration: 400})
      $('.game-section').addClass('fadeInUp')
      this.beginQuestionTimer()
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
  //Clear the timer since a guess was made
  clearInterval(this.questionTimer)

  this.waitingForTransition = true

  if (this.getCurrentQuestion().isCorrectAnswer(guess)) {
    this.numCorrect++

    $('.check').removeClass('d-none')
    $('.question-text').addClass('mt-2 mb-0')
    this.highlightButtons()
  }
  else {
    this.numWrong++

    $('.cross').removeClass('d-none')
    $('.question-text').addClass('mt-2 mb-0')
    this.highlightButtons()
  }

  if (this.isGameComplete()) {
    this.transitionTallyCard()
  }
  else {
    this.transitionQuestionCard()
  }
}


Game.prototype.beginQuestionTimer = function () {
  this.timeRemaining = 10;
  $('.time-remaining-number').text(this.timeRemaining);

  setTimeout(() => {
    this.questionTimer = setInterval(() => {
      this.timeRemaining--
      $('.time-remaining-number').text(this.timeRemaining);

      if (this.timeRemaining === 0) {
        this.processGuess('no guess')
      }
    }, 1000)
  }, 500)
}


Game.prototype.isGameComplete = function () {
  return this.currentQuestionIndex === this.questions.length - 1;
}


Game.prototype.highlightButtons = function () {
  var $answerButtonArr = $('.answer')

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


Game.prototype.transitionQuestionCard = function () {
  let $questionCard = $('.question-card')
  let $questionText = $('.question-text')
  let $answerBtnArr = $('.answer')

  setTimeout(function () {
    $($questionCard).removeClass('bounceInRight')
    $($questionCard).addClass('bounceOutLeft')
  }, 2000)

  setTimeout(() => {
    //Increment and setup new question just before transitioning in
    this.currentQuestionIndex++
    this.setupNextQuestion()

    $('.check', $questionCard).addClass('d-none')
    $('.cross', $questionCard).addClass('d-none')
    $($questionText).removeClass('mt-2 mb-0')

    $.each($answerBtnArr, (index, btn) => {
      $(btn).removeClass('btn-danger')
      $(btn).removeClass('btn-success')
      $(btn).addClass('btn-info')
    })

    $($questionCard).removeClass('bounceOutLeft')
    $($questionCard).addClass('bounceInRight')
    this.transitionBackgroundImg()

    this.beginQuestionTimer()

    this.waitingForTransition = false
  }, 3000)
}


Game.prototype.transitionTallyCard = function () {
  let $tallySection = $('.tally-section')
  let $tallyCard = $('.tally-card')
  let $tallyMsg = $('.tally-message')
  let $questionCard = $('.question-card')

  setTimeout(() => {
    $($questionCard).removeClass('bounceInRight')
    $($questionCard).addClass('bounceOutLeft')
    $('.time-remaining-text').fadeOut('slow')
  }, 2000)

  setTimeout(() => {
    if (this.numCorrect > this.numWrong) {
      $($tallyMsg).text('Congratulations! You did great!')
    }
    else if (this.numCorrect === this.numWrong) {
      $($tallyMsg).text('Not bad! Maybe You will be better next time!')
    }
    else if (this.numCorrect < this.numWrong) {
      $($tallyMsg).text('Oh no! Looks like you need to learn more about space!')
    }

    $('.correct-count').text(this.numCorrect)
    $('.wrong-count').text(this.numWrong)

    $($tallySection).fadeIn({queue: false, duration: 400})
    $($tallySection).addClass('fadeInUp')

    setTimeout(() => {
      $('.correct-tally', $tallyCard).removeClass('invisible')
      $('.correct-tally', $tallyCard).addClass('bounceIn')
      $('.wrong-tally', $tallyCard).removeClass('invisible')
      $('.wrong-tally', $tallyCard).addClass('bounceIn')
      $('.reset-game-btn', $tallyCard).removeClass('invisible')
      $('.reset-game-btn', $tallyCard).addClass('fadeIn')
    }, 900)

    this.waitingForTransition = false
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