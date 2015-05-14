$(document).ready(function() {
  var challenge = challenges[0];

  $('.challenge-title').text(challenge.title);
  $('.challenge-body').text(challenge.body);
  $('.sample-output').html(challenge.sampleOutput);
  $('.sample-solution').html(challenge.sampleSolution);
});
