// 1 задание
class BaseUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Guest extends BaseUser {
    getRole() {
        return "Guest";
    }
    getPermissions() {
        return ["Просмотр контента"];
    }
}
class User extends BaseUser {
    getRole() {
        return "User";
    }
    getPermissions() {
        return ["Просмотр контента", "Добавление комментариев", "удаление комментариев"];
    }
}
class Admin extends BaseUser {
    getRole() {
        return "Admin";
    }
    getPermissions() {
        return ["Просмотр контента", "Удаление комментариев", "Управление пользователями", "Добавление комментариев"];
    }
}
const guest = new Guest(1, "ВЛАДИК");
console.log(`guest: ${guest.getPermissions()}`);
const user = new User(1, "Денис");
console.log(`\nuser: ${user.getPermissions()}`);
const admin = new Admin(1, "Ваня");
console.log(`\nguest: ${admin.getPermissions()}`);
class HTMLReport {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    generate() {
        return [`title: ${this.title}`, `content: ${this.content}`];
    }
}
class JSONReport {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    generate() {
        return [`title: ${this.title}`, `content: ${this.content}`];
    }
}
const report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate());
const report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate());
// 3 задание
class CachE {
    constructor() {
        this.storage = new Map();
    }
    add(key, value, ttl) {
        const expiry = Date.now() + ttl;
        this.storage.set(key, { value, expiry });
    }
    get(key) {
        const entry = this.storage.get(key);
        if (!entry)
            return null;
        if (Date.now() > entry.expiry) {
            this.storage.delete(key);
            return null;
        }
        return entry.value;
    }
    clearExpired() {
        const now = Date.now();
        this.storage.forEach((entry, key) => {
            if (entry.expiry <= now) {
                this.storage.delete(key);
            }
        });
    }
}
const cache = new CachE();
cache.add("price", 100, 5000);
console.log(cache.get("price"));
setTimeout(() => console.log(cache.get("price")), 6000);
// 4 задание
function createInstance(cls, ...args) {
    return new cls(...args);
}
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const p = createInstance(Product, "Телефон", "50000");
console.log(p);
// 5 задание
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "Info";
    LogLevel["WARNING"] = "Warning";
    LogLevel["ERRORS"] = "Errors";
})(LogLevel || (LogLevel = {}));
;
function logEvent(event) {
    console.log(event);
}
logEvent([new Date(), LogLevel.INFO, "Система запущена"]);
// 6 задание
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BAD"] = 400] = "BAD";
    HttpStatus[HttpStatus["UNATORIZED"] = 401] = "UNATORIZED";
    HttpStatus[HttpStatus["ERROR"] = 500] = "ERROR";
})(HttpStatus || (HttpStatus = {}));
;
function success(data) {
    return [HttpStatus.OK, data];
}
function error(message, status) {
    return [status, null, message];
}
const res1 = success({ user: "Андрей" });
console.log(res1);
const res2 = error("Не найдено", HttpStatus.ERROR);
console.log(res2);
