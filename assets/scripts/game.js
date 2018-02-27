<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Trivia Game</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="assets/css/bootstrap.css"/>
  <link rel="stylesheet" type="text/css" media="screen" href="assets/css/main.css"/>
</head>
<body class="bg-game">
<header class="container text-center">
  <div class="display-2">90s Action Trivia</div>
  <hr>
</header>

<main class="container h-75">
  <div class="row align-items-center h-100">
    <div class="col">
      <div class="row">
        <div class="col text-center">
          <h2>Time Remaining: <span class="time-remaining">10</span> Seconds</h2>
        </div>
      </div>
      
      <div class="row">
        <div class="col text-center">
          <h2 class="question">Question Here</h2>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <button class="btn btn-block btn-info"><h3 class="answer-1">Answer 1</h3></button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-block btn-info"><h3 class="answer-2">Answer 2</h3></button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-block btn-info"><h3 class="answer-3">Answer 3</h3></button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-block btn-info"><h3 class="answer-4">Answer 4</h3></button>
        </div>
      </div>
    </div>
  </div>
</main>

<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
<script src="assets/scripts/game.js"></script>
</body>
</html>