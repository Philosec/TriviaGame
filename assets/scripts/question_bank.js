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
  this.questionArr.push(new Question('What type of galaxy is the most common', 'Elliptical', ['Spiral', 'Barred Spiral', 'Irregular'], 'assets/images/galaxy.png'))
  this.questionArr.push(new Question('How old is the universe in light years', '13.8 Billion', ['5.2 Billion', '2.4 Billion', '1.1 Billion'], 'assets/images/universe.png'))
  this.questionArr.push(new Question('What is the mass of the Earth\'s sun', '2 Quintillion kg', ['1 Quintillion kg', '1 Billion kg', '2 Quadrillion kg'], 'assets/images/sun.png'))
  this.questionArr.push(new Question('What is the distance from earth to moon', '238,900 mi', ['420,000 mi', '383,000 mi', '180,000 mi'], 'assets/images/moon.png'))
  this.questionArr.push(new Question('How many planets are in our solar system', '8', ['7', '9', '10'], 'assets/images/solar-system.png'))
  this.questionArr.push(new Question('What planet does not have a solid surface', 'Jupiter', ['Mars', 'Earth', 'Mercury'], 'assets/images/2-planets.png'))
  this.questionArr.push(new Question('What color is the sunset on Mars', 'Blue', ['Red', 'Yellow', 'Green'], 'assets/images/sunset.png'))
  this.questionArr.push(new Question('What is the hottest planet', 'Venus', ['Mercury', 'Earth', 'Mars'], 'assets/images/hot-planet.png'))
}


/**
 * Helper function to shuffle the questions in the {@link QuestionBank#questionArr}
 */
QuestionBank.prototype.shuffle = function () {
  shuffle(this.questionArr)
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


/**
 * Gets the correct and incorrect answers and returns them
 * @returns {Array}
 */
Question.prototype.getAnswerArr = function () {
  let arr = []

  arr.push(this.answer)
  for (let i = 0; i < this.wrongAnswersArr.length; i++) {
    arr.push(this.wrongAnswersArr[i])
  }

  return arr
}