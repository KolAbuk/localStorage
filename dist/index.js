"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
const fs_1 = require("fs");
//
class LocalStorage {
    constructor(storageDirPath) {
        this.load = () => {
            try {
                if (!(0, fs_1.existsSync)(`${this.storageDirPath}/storage.json`)) {
                    (0, fs_1.mkdirSync)(this.storageDirPath, {
                        recursive: true,
                    });
                    (0, fs_1.writeFileSync)(`${this.storageDirPath}/storage.json`, `{}`, "utf8");
                }
                const storage = JSON.parse((0, fs_1.readFileSync)(`${this.storageDirPath}/storage.json`, "utf8"));
                return storage;
            }
            catch (e) {
                throw e;
            }
        };
        this.save = (storage) => {
            try {
                (0, fs_1.writeFileSync)(`${this.storageDirPath}/storage.json`, JSON.stringify(storage), "utf8");
            }
            catch (e) {
                throw e;
            }
        };
        this.clear = () => {
            try {
                (0, fs_1.writeFileSync)(`${this.storageDirPath}/storage.json`, `{}`, "utf8");
            }
            catch (e) {
                throw e;
            }
        };
        this.storageDirPath = storageDirPath || "./localStorage";
    }
}
exports.LocalStorage = LocalStorage;
