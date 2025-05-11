import { LocalStorage } from ".";

(async () => {
  try {
    type AccountStorage = {
      account: {
        email: string;
        password: string;
      };
      info?: string;
    };
    type SessionStorage = {
      session?: { id: string; token: string };
      timestamp?: number;
    };
    const accountStorage = new LocalStorage<AccountStorage>({
      initObj: {
        account: { email: "email@example.com", password: "password" },
      },
      storageFileName: "account",
      prettyFormat: 3,
    });
    console.log("accountStorage", accountStorage.storage);
    accountStorage.load();
    console.log("accountStorage", accountStorage.storage);
    accountStorage.storage.account = { email: "email", password: "password" };
    console.log("accountStorage", accountStorage.storage);
    accountStorage.save();
    const sessionStorage = new LocalStorage<SessionStorage>({
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
  } catch (e: any) {
    console.error(e.message);
  }
})();
