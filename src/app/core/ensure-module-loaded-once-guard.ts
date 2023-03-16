export class EnsureModuleLoadedOnceGuard{

    constructor(targetModule:any){
        if(targetModule){
            throw new Error(`${targetModule.constructor.name} ya ha sido cargado. Importe este módulo solo en AppModule.`);
            
        }
    }

}