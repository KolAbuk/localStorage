export declare class LocalStorage<Storage> {
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
    load: () => void;
    save: () => void;
    backup: () => void;
    clear: () => void;
}
