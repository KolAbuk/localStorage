export declare class LocalStorage<Storage> {
    storage: Storage;
    private storageDirPath;
    private storageFileName;
    private initObj;
    constructor(args: {
        storageDirPath?: string;
        storageFileName?: string;
        initObj: Storage;
    });
    load: () => void;
    save: () => void;
    backup: () => void;
    clear: () => void;
}
