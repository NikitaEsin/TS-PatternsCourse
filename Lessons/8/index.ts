abstract class Logger {
    abstract log(message: string): void;
    printDate(): void {
        const currentDate = new Date().toLocaleString();
        this.log(`[${currentDate}]`);
    }
}

class DateLogger extends Logger {
    log(message: string): void {
        console.log(message);
    }

    logWithDate(message: string): void {
        this.printDate();
        this.log(message);
    }
}

const logger = new DateLogger();
logger.logWithDate("Пример сообщения с датой");
