import { AppContext } from '@app/app.context';

export class DockerService {
    // private dockerApiUrl:string;
    private appContext = new AppContext;
    dockerApiUrl = this.appContext.server;
}
