export declare class LocalStorage<T> {
    private storageDirPath;
    constructor(storageDirPath?: string);
    load: () => T;
    save: (storage: T) => void;
    clear: () => void;
}
