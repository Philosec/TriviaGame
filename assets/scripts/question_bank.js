/**
 * Contains the {@link QuestionBank#questionArr}
 * @constructor Initializes a new set of questions and shuffles them
 */
function QuestionBank () {
  'use strict'

  this.questionArr = []

  //Fill the question array with new questions
  this.initQuestions()

  //Shuffle the questions so the order is not always the same
  this.shuffle()
}


/**
 * Fills the {@link QuestionBank#questionArr} with questions
 */
QuestionBank.prototype.initQuestions = function () {
  this.questionArr.push(new Question('What type of galaxy is the most common in the universe', 'Elliptical', ['Spiral', 'Barred Spiral', 'Irregular'], 'assets/images/galaxy.png'))
  this.questionArr.push(new Question('How old is the universe in light years', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], 'assets/images/universe.png'))

  this.questionArr.push(new Question('some string 1', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], 'assets/images/universe.png'))
  this.questionArr.push(new Question('some string 2', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], 'assets/images/universe.png'))
  this.questionArr.push(new Question('some string 3', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], 'assets/images/universe.png'))
}


/**
 * Helper function to shuffle the questions in the {@link QuestionBank#questionArr}
 */
QuestionBank.prototype.shuffle = function () {
  shuffle(this.questionArr)
}


/**
 * Gets the correct and incorrect answers and returns them in a randomized order
 * @param {number} questionIndex - The question array index to get answers from
 * @returns {Array} - The array of answers
 */
QuestionBank.prototype.getAnswersArr = function (questionIndex) {
  let arr = []

  arr.push(this.questionArr[questionIndex].answer)
  for (let i = 0; i < this.questionArr[questionIndex].wrongAnswersArr.length; i++) {
    arr.push(this.questionArr[questionIndex].wrongAnswersArr[i])
  }

  return arr
}


/**
 * Holds all data for the game questions
 * @param question
 * @param answer
 * @param wrongAnswersArr
 * @param imgUrl
 * @constructor
 */
function Question (question, answer, wrongAnswersArr, imgUrl) {
  this.question = question
  this.answer = answer
  this.wrongAnswersArr = wrongAnswersArr
  this.img = new Image()
  this.img.src = imgUrl
}


/**
 * Checks if the answer is correct for the question
 * @param answer
 * @returns {boolean}
 */
Question.prototype.isCorrectAnswer = function (answer) {
  return answer === this.answer;
}