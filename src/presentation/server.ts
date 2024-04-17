import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {

    public static start(): void {
        console.log('Server started');

        CronService.createJob(
             '*/3 * * * * *',
            () => {
                const url = 'https://google.com';
               new CheckService(
                   () => console.log(` ${ url } OK`),
                   ( error ) => console.log( error ),
               ).execute( url );
            } 
        );    
    
    }
}