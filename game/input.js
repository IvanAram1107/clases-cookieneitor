import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function askQuestion(question) {
  const answer = await rl.question(`> ${question.trim()}: `);
  rl.pause();
  return answer.trim();
}

function writeMessage(message, {prependNewline, appendNewline}) {
  const msg = `${message.trim()}\n`;
  if(prependNewline) {
    msg = `\n${msg}`;
  }
  if(appendNewline) {
    msg = `${msg}\n`;
  }
  rl.write(msg);
  rl.pause();
}

async function selectOption(options) {
  let answer;
  while(true){
    for(const opt of options) {
      rl.write(`${options.indexOf(opt) + 1}. ${opt}\n`);
    }
    const res = (await rl.question("> Enter number: ")).trim();
    if(/^[1-9]+[0-9]*$/g.test(res)){
      const parsedRes = parseInt(res);
      if(options.length >= parsedRes > 0){
        answer = parsedRes;
        break;
      } else {
        rl.write("\nOut of range. Try again\n\n");
      }
    } else {
      rl.write("\nExpected a number. Try again\n\n");
    }
  }
  rl.write("\n");
  rl.pause();
  return answer - 1;
}

export class Logger {

}