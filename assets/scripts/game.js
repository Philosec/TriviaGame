function Game () {
  'use strict'

  this.questionBank = new QuestionBank()
  this.questions = this.questionBank.questionArr
  this.currentQuestionIndex = 0
  this.numCorrect = 0
  this.numWrong = 0
}

Game.prototype.init = function () {
  this.setupNextQuestion()

  $(document).on('click', '.answer', (event) => {
    var answer = $(event.currentTarget).text()
    this.processGuess(answer)
  })

  $('.game-start-btn').on('click', (event) => {
    $(event.currentTarget).fadeOut('fast', () => {
      $('.game-section').fadeIn({queue: false, duration: 400})
      $('.game-section').addClass('fadeInUp')
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

  $($questionText).text(this.questions[this.currentQuestionIndex].question + '?')

  let answers = this.questionBank.getAnswersArr(this.currentQuestionIndex)
  answers = shuffle(answers)

  for (let i = 0; i < $answerButtonsArr.length; i++) {
    $($answerButtonsArr[i]).text(answers[i])
  }
}

Game.prototype.processGuess = function (guess) {

  var $answerButtonArr = $('.answer')

  var highlightButtons =  () => {
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
}

Game.prototype.transitionQuestionCard = function () {

}

//TODO: Do something with this
// $('.bg-img').fadeOut(500, () => {
//   $('.bg-img').html(this.questions[1].img)
//   $('.bg-img').fadeIn(500)
// })