function CreateLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] - ${message}`);
  }

  return logger;
}

// Register

const logger1 = CreateLogger("Info");

logger1("Đăng ký thành công");

function CreateStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
}

const ProfileSetting = CreateStorage("profile_setting");
console.log(ProfileSetting.get("tung"));
ProfileSetting.set("tung", "nguyen");
