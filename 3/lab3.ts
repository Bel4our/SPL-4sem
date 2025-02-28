// 1 задание
abstract class BaseUser {
    id: number;
    name : string;
    abstract getRole(): string;
    abstract getPermissions() : string[];
    constructor(id: number, name:string) {
        this.id = id;
        this.name = name;
    }
}


class Guest extends BaseUser {
    getRole(): string {
        return "Guest";
    }
    getPermissions(): string[] {
        return ["Просмотр контента"];
    }
}

class User extends BaseUser {
    getRole(): string {
        return "User";
    }
    getPermissions(): string[] {
        return ["Просмотр контента", "Добавление комментариев", "удаление комментариев"];
    }
}

class Admin extends BaseUser {
    getRole(): string {
        return "Admin";
    }
    getPermissions(): string[] {
        return ["Просмотр контента", "Удаление комментариев", "Управление пользователями", "Добавление комментариев"];
    }
}


const guest = new Guest(1, "ВЛАДИК");
console.log(`guest: ${guest.getPermissions()}`);

const user = new User(1, "Денис");
console.log(`\nuser: ${user.getPermissions()}`);

const admin = new Admin(1, "Ваня");
console.log(`\nguest: ${admin.getPermissions()}`);



// 2 задание
interface IReport{
    title: string;
    content: string;
    generate();
}

class HTMLReport implements IReport
{
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
    generate(): string[] {
        return [`title: ${this.title}`, `content: ${this.content}`];
    }
}

class JSONReport implements IReport 
{
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
    generate(): string[] {
        return [`title: ${this.title}`, `content: ${this.content}`];
    }
}

const report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate());

const report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate());


// 3 задание

class CachE<T> {
    private storage= new Map<string, { value: T; expiry: number }>();

    add(key: string, value: T, ttl: number): void {
        const expiry = Date.now() + ttl;
        this.storage.set(key, { value, expiry });
    }
    get(key: string): T | null {
        const entry = this.storage.get(key);
        if (!entry) return null;
        if (Date.now() > entry.expiry) {
            this.storage.delete(key);
            return null;
        }
        return entry.value;
    }
    clearExpired(): void {
        const now = Date.now();
        this.storage.forEach((entry, key) => {
            if (entry.expiry <= now) {
                this.storage.delete(key);
            }
        })
    }
}

const cache = new CachE<number>();
cache.add("price", 100, 5000);
console.log(cache.get("price"));
setTimeout(()=>console.log(cache.get("price")), 6000);


// 4 задание

function createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T {
    return new cls(...args);
}

class Product {
    constructor(public name: string, public price: number) { }
}

const p = createInstance(Product, "Телефон", "50000");
console.log(p);


// 5 задание

enum LogLevel { INFO = "Info", WARNING = "Warning", ERRORS = "Errors" };
type LogEntry = [Date, LogLevel, string];

function logEvent(event: LogEntry) {

    console.log(event);
}

logEvent([new Date(), LogLevel.INFO, "Система запущена"]);

// 6 задание

enum HttpStatus {OK = 200, BAD = 400, UNATORIZED = 401, ERROR = 500};

type ApiResponse<T> = [status: HttpStatus, data: T | null, error?:string];

function success<T>(data:T): ApiResponse<T>{
    return[HttpStatus.OK, data];
}

function error(message: string, status: HttpStatus): ApiResponse<null>{
    return [status, null, message];
}

const res1 = success({user: "Андрей"});
console.log(res1);

const res2 = error("Не найдено", HttpStatus.ERROR);
console.log(res2);