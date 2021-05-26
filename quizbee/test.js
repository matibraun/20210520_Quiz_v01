


// const questions = [{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Who is the founder and leader of industrial rock band, &#039;Nine Inch Nails&#039;?","correct_answer":"Trent Reznor","incorrect_answers":["Marilyn Manson","Robin Finck","Josh Homme"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"The human heart has how many chambers?","correct_answer":"4","incorrect_answers":["2","6","3"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In what year was Garry&#039;s Mod released as a standalone title on Valve&#039;s Steam distribution service?","correct_answer":"2006","incorrect_answers":["2007","2004","2003"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"Which of these characters was NOT planned to be playable for Super Smash Bros. 64?","correct_answer":"Peach","incorrect_answers":["Bowser","Mewtwo","King Dedede"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Where does the original Friday The 13th movie take place?","correct_answer":"Camp Crystal Lake","incorrect_answers":["Packanack","Higgins Haven","Camp Forest Green"]}]

// function shuffle (a) {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i];
//         a[i] = a[j];
//         a[j] = x;
//     }
//     return a;
// }

// function formatQuestions (unformattedQuestions) {
//     const formattedQuestions = unformattedQuestions.map(
//         (unformattedQuestions) => {
//             return {
//                 question: unformattedQuestions.question,
//                 correctAnswer: unformattedQuestions.correct_answer,
//                 options: shuffle(unformattedQuestions.incorrect_answers.concat(unformattedQuestions.correct_answer)),
//             }
//         } 
//     )

//     return formattedQuestions
// }

// console.log(formatQuestions(questions))

// const a = [1, 2, 3]
// const b = 6

// console.log(a.concat(b))



function getQuestions () {
    fetch(`https://opentdb.com/api.php?amount=3`)
      .then(
          response => {response.json()})
      .then(
          response => {console.log(response)}
      )}

console.log(getQuestions())