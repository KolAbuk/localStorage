"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accountStorage = new _1.LocalStorage({
            initObj: {
                account: { email: "email@example.com", password: "password" },
            },
            storageFileName: "account",
        });
        console.log("accountStorage", accountStorage.storage);
        accountStorage.load();
        console.log("accountStorage", accountStorage.storage);
        accountStorage.storage.account = { email: "email", password: "password" };
        console.log("accountStorage", accountStorage.storage);
        accountStorage.save();
        const sessionStorage = new _1.LocalStorage({
            initObj: {},
            storageFileName: "session",
        });
        console.log("sessionStorage", sessionStorage.storage);
        sessionStorage.load();
        console.log("sessionStorage", sessionStorage.storage);
        sessionStorage.storage = {
            session: { id: "UUIDv4", token: "token" },
            timestamp: new Date().getTime(),
        };
        console.log("sessionStorage", sessionStorage.storage);
        sessionStorage.save();
    }
    catch (e) {
        console.error(e.message);
    }
}))();
