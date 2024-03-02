export declare class LocalStorage<Storage> {
    storage: Storage;
    private storageDirPath;
    private storageFileName;
    constructor(args?: {
        storageDirPath?: string;
        storageFileName?: string;
    });
    load: () => void;
    save: () => void;
    clear: () => void;
}
