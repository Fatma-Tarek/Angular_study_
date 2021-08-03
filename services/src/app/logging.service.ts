export class LoggingService {
    // called helper method
    logStatusChange(status: string){
        console.log('A server status changed, new status: '+ status);
    }
}