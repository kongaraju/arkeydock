export class Container {
    Id: string;
    Names: Array<string>;
    Image: string;
    ImageID: string;
    Command: string;
    Created: string;
    Ports: Array<object>;
    Labels: object;
    State: string;
    Status: string;
    HostConfig: object;
    NetworkSettings: object;
    Mounts: Array<object>;
  }