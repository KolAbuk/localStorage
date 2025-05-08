export declare class LocalStorage<Storage> {
    storage: Storage;
    private storageDirPath;
    private backupDirPath;
    private storageFileName;
    private initObj;
    constructor(args: {
        storageDirPath?: string;
        backupDirPath?: string;
        storageFileName?: string;
        initObj: Storage;
    });
    load: () => void;
    save: () => void;
    backup: () => void;
    clear: () => void;
}
