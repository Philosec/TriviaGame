$(document).ready(() => {
  'use strict'

  var game = new Game()

  game.init()

  var audio = document.createElement('audio')
  audio.src = 'assets/audio/mostAstounding.mp3'
  audio.play()

  $('.audio-btn-on').on('click', () => {
    audio.muted = true
    audio.pause()
    $('.audio-btn-off').removeClass('d-none')
    $('.audio-btn-on').addClass('d-none')
  })

  $('.audio-btn-off').on('click', () => {
    audio.muted = false
    audio.play()
    $('.audio-btn-on').removeClass('d-none')
    $('.audio-btn-off').addClass('d-none')
  })
})