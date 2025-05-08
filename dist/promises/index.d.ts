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
    load: () => Promise<void>;
    save: () => Promise<void>;
    backup: () => Promise<void>;
    clear: () => Promise<void>;
}
