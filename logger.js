import { Chalk } from "chalk";
export class Logger{
    constructor(){
      this.Chalk = new Chalk();
    }
    logInfo(message){
        console.log(this.Chalk.blue(message))
    }
    logError(message){
      console.log(this.Chalk.red(message))
    }
} 