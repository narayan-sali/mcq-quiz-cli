
const readlineSync = require('readline-sync');

const chalk = require("chalk");

console.log(chalk.green("----------------------------Let's Start the Quiz!------------------------"))
console.log(chalk.bgBlue("Instructions\n" + '1)Each question carries  point \n' + '2)There are 10 MCQ questions\n' + '3)For each RIGHT answer carries 1 point and if answer is WRONG -1 point is added to score\n'))
let userName = readlineSync.question("What's Your Name:");
console.log("Hi!  " + chalk.green.underline(userName) + chalk.red("\n **********************Welocome to Quiz*****************"));

let mcqList = [
    {
        array: chalk.green(['(a)1968', '(b)1971', '(c)1973', '(d)1975']),
        question: chalk.red('1. In which year the Mysore state was renamed as Karnataka ?'),
        answer: chalk.green('(c)1973')
    },
    {
        array: chalk.green(['(a)Hemavati', '(b)Shimsha', '(c)Arkavati', '(d)Bhima']),
        question: chalk.red('2. Which one is not a tributary of Cauveri River?'),
        answer: chalk.green('(d)Bhima')
    },
    {
        array: chalk.green(['(a)Bellary', '(b)Hassan', '(c)Mysore', '(d)Vijayanagar']),
        question: chalk.red('3. In which district the Hampi Monuments are located?'),
        answer: chalk.green('(d)Vijayanagar')

    },
    {
        array: chalk.green(['(a)28', '(b)30', '(c)31', '(d)29']),
        question: chalk.red('4. Total number of districts in karnataka ?'),
        answer: chalk.green('(b)30')
    },
    {
        array: chalk.green(['(a)3', '(b)4', '(c)5', '(d)7']),
        question: chalk.red('5. Total number of National Park in Karnataka?'),
        answer: chalk.green('(c)5')
    },
    {

        array: chalk.green(['(a)Gubbi Veeranna', '(b)Bhakta Dhruva', '(c)Sati Sulochana', '(d)Pandaribai']),
        question: chalk.red('6. Which one is the first Kannada movie?'),
        answer: chalk.green('(c)Sati Sulochana')

    },
    {

        array: chalk.green(['(a)Asian Elephant', '(b)Bear', '(c)Deer', '(d)Squirrel']),
        question: chalk.red('7. Which one is the State animal of Karnataka?'),
        answer: chalk.green('(a)Asian Elephant')

    },
    {

        array: chalk.green(['(a)Mysore', '(b)Sirasi', '(c)Dharwad', '(d)Belagavi']),
        question: chalk.red('8. In which place the river Shalmala is originated ?'),
        answer: chalk.green('(c)Dharwad')

    },
    {
        array: chalk.green(['(a)75', '(b)74', '(c)78', '(d)76']),
        question: chalk.red('9. The total number of members in the karnataka Legislative Council is_____'),
        answer: chalk.green('(a)75')


    },
    {
        array: chalk.green(['(a)Yellapur', '(b)Dandeli', '(c)Ganesh Nagar', '(d)Joida']),
        question: chalk.red('10.The Supa Dam is located in______'),
        answer: chalk.green('(d)Joida')


    }
]
let score = 0;
function quiz(listOfAnswers, question, answer) {
    let userAnswer = readlineSync.question(chalk.green("please write the option:\n"))

    if (chalk.green(userAnswer) === mcqList[i].answer) {
        console.log(chalk.bgGreen("you are Right!"));
        score += 1;
        console.log(chalk.bgGray(score));
    } else {
        console.log(chalk.bgRed("You are Wrong") + chalk.green("\n The Correct answer is:" + mcqList[i].answer));
        score -= 1;
        if (score < 0) {
            score = 0;
        }
        console.log(chalk.bgGray(score));
    }
}
for (i = 0; i < mcqList.length; i++) {
    console.log('\n')
    console.log(mcqList[i].question)
    console.log('\n')
    console.log(mcqList[i].array)

    quiz(mcqList[i].array, mcqList[i].question, mcqList[i].answer)

}
console.log('\n')
console.log(chalk.greenBright.underline("congratulations  " + userName + " your total sccore is: " + score))