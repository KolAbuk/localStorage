"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
const fs_1 = require("fs");
//
class LocalStorage {
    constructor(args) {
        this.storage = {};
        this.load = () => {
            try {
                if (!(0, fs_1.existsSync)(`${this.storageDirPath}/${this.storageFileName}.json`)) {
                    (0, fs_1.mkdirSync)(this.storageDirPath, {
                        recursive: true,
                    });
                    (0, fs_1.writeFileSync)(`${this.storageDirPath}/${this.storageFileName}.json`, `{}`, "utf8");
                }
                this.storage = JSON.parse((0, fs_1.readFileSync)(`${this.storageDirPath}/${this.storageFileName}.json`, "utf8"));
            }
            catch (e) {
                throw e;
            }
        };
        this.save = () => {
            try {
                if (!(0, fs_1.existsSync)(`${this.storageDirPath}/${this.storageFileName}.json`)) {
                    (0, fs_1.mkdirSync)(this.storageDirPath, {
                        recursive: true,
                    });
                }
                (0, fs_1.writeFileSync)(`${this.storageDirPath}/${this.storageFileName}.json`, JSON.stringify(this.storage), "utf8");
            }
            catch (e) {
                throw e;
            }
        };
        this.clear = () => {
            try {
                this.storage = {};
            }
            catch (e) {
                throw e;
            }
        };
        this.storageDirPath = (args === null || args === void 0 ? void 0 : args.storageDirPath) || "./localStorage";
        this.storageFileName = (args === null || args === void 0 ? void 0 : args.storageFileName) || "./storage";
    }
}
exports.LocalStorage = LocalStorage;
