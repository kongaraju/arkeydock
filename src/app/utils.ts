export class Utils {
    getPorts(portBindings):any{
        if(!portBindings) return [];
        let portKeys = Object.keys(portBindings);
        let portPairs = portKeys.map((portKey) => {
          let port = portKey.substr(0, portKey.indexOf('/'));
          let portProtocol = portKey.substr(portKey.indexOf('/') + 1, portKey.length);
          return {
            port: port,
            protocol: portProtocol,
            hostMaps: portBindings[portKey]
          };
        });
        
        return portPairs;
      }
      getNetworks(networks){
        return Object.keys(networks);
      }
      stripSlash(str:string):string{
        return str.replace('/','');
      }
      stripImagePath(image:string):string{
        let lastIndexOfSlash : number = image.lastIndexOf('/');
        return lastIndexOfSlash != -1 ? image.substr(lastIndexOfSlash+1, image.length) : image;
      }
      replaceNullChars(str:string):string{
        // let nullRemovedStr = str ? str.replace(/\0/g, '') : str;
        // nullRemovedStr = nullRemovedStr ? nullRemovedStr.replace(/\1/g, '') : nullRemovedStr;
        // nullRemovedStr = nullRemovedStr ? nullRemovedStr.replace(/\10/g, '') : nullRemovedStr;
        // nullRemovedStr = nullRemovedStr ? nullRemovedStr.replace(/\1a/g, '') : nullRemovedStr;
        // nullRemovedStr = nullRemovedStr ? nullRemovedStr.replace(/\1c/g, '') : nullRemovedStr;
        // return nullRemovedStr ? nullRemovedStr.replace(/\2/g, '') : nullRemovedStr;
        //return str.replace(/[^\x00-\xFF]/g, "");
        //return str.replace(/[^\x00-\x7F]/g, "");
        if(!str){return str};
        return str.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]\\r\n\\r\\n`~]*/g, '');
        //return str.replace(/[\u{0080}-\u{FFFF}]/gu,"");
      }
      getEnvPairs(envs:Array<string>):Array<object>{
        let envPairsMap = envs.map((envStr)=>{
          let firstSplitterPos = envStr.indexOf("=");
          let envVarName = envStr.substr(0, firstSplitterPos);
          let envVarVal = envStr.substr(firstSplitterPos+1, envStr.length);
          return {name: envVarName, value:envVarVal};
        }),
        envPairs = envPairsMap.filter((env)=>{return env.value;})
        return envPairs;
      }
}
