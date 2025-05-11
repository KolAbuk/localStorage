export declare class LocalStorageAsync<Storage> {
    storage: Storage;
    private storageDirPath;
    private backupDirPath;
    private storageFileName;
    private initObj;
    private prettyFormat?;
    constructor(args: {
        storageDirPath?: string;
        backupDirPath?: string;
        storageFileName?: string;
        initObj: Storage;
        prettyFormat?: string | number;
    });
    load: () => Promise<void>;
    save: () => Promise<void>;
    backup: () => Promise<void>;
    clear: () => Promise<void>;
}
