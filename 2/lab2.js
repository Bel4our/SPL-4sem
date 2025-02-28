// 1 задание
var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
array.forEach(function (person) {
    console.log("ID: ".concat(person.id, ", \u0418\u043C\u044F: ").concat(person.name, ", \u0413\u0440\u0443\u043F\u043F\u0430: ").concat(person.group));
});
var car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
console.log("\u0421\u0442\u0440\u0430\u043D\u0430-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ".concat(car.manufacturer, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(car.model));
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
for (var i = 0; i < arrayCars.length; i++) {
    for (var j = 0; j < arrayCars[i].cars.length; j++) {
        console.log("ID: ".concat(j, ", \u0421\u0442\u0440\u0430\u043D\u0430-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ").concat(arrayCars[i].cars[j].manufacturer, ", \u041C\u0430\u0440\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(arrayCars[i].cars[j].model));
    }
}
var group = {
    students: [],
    studentsFilter: function (group) {
        return this.students.filter(function (student) { return student.group === group; });
    },
    marksFilter: function (mark) {
        return this.students.filter(function (student) {
            return student.marks.some(function (markObj) { return markObj.mark === mark; });
        });
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    },
};
group.students.push({
    id: 1,
    name: 'Vasya',
    group: 10,
    marks: [
        { subject: 'Math', mark: 9, done: 'выполнено' },
        { subject: 'English', mark: 8, done: 'выполнено' }
    ],
});
group.students.forEach(function (student) {
    console.log("ID: ".concat(student.id, ", \u0418\u043C\u044F: ").concat(student.name, ", \u0413\u0440\u0443\u043F\u043F\u0430: ").concat(student.group));
    student.marks.forEach(function (mark) {
        console.log("\u041F\u0440\u0435\u0434\u043C\u0435\u0442: ".concat(mark.subject, ", \u041E\u0446\u0435\u043D\u043A\u0430: ").concat(mark.mark, ", \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435: ").concat(mark.done));
    });
});
console.log(group.studentsFilter(10));
console.log(group.marksFilter(9));
console.log(group.deleteStudent(1));
