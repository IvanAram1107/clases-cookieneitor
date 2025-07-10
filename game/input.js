import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export default class Logger {
  static rl = readline.createInterface({ input, output })

  static async askQuestion(question) {
    const answer = await Logger.rl.question(`> ${question.trim()}: `);
    Logger.rl.pause();
    return answer.trim();
  }

  static writeMessage(message, {prependNewline, appendNewline}) {
    const msg = `${message.trim()}\n`;
    if(prependNewline) {
      msg = `\n${msg}`;
    }
    if(appendNewline) {
      msg = `${msg}\n`;
    }
    Logger.rl.write(msg);
    Logger.rl.pause();
  }

  static async selectOption(options) {
    let answer;
    while(true){
      for(const opt of options) {
        Logger.rl.write(`${options.indexOf(opt) + 1}. ${opt}\n`);
      }
      const res = (await Logger.rl.question("> Enter number: ")).trim();
      if(/^[1-9]+[0-9]*$/g.test(res)){
        const parsedRes = parseInt(res);
        if(options.length >= parsedRes > 0){
          answer = parsedRes;
          break;
        } else {
          Logger.rl.write("\nOut of range. Try again\n\n");
        }
      } else {
        Logger.rl.write("\nExpected a number. Try again\n\n");
      }
    }
    Logger.rl.write("\n");
    Logger.rl.pause();
    return answer - 1;
  }
}
