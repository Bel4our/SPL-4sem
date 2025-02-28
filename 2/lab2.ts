// 1 задание

interface Person{
    id: number;
    name: string;
    group: number;
}

const array: Person[] = 
[
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
];

array.forEach(person => {
    console.log(`ID: ${person.id}, Имя: ${person.name}, Группа: ${person.group}`);
})

// 2 задание
type CarsType = {
    manufacturer?: string;
    model?: string;
};

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';

console.log(`Страна-производитель: ${car.manufacturer}, Модель: ${car.model}`);

//3 задание

interface ArrayCarsType {
    cars: CarsType[];
}

const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

for(let i = 0; i < arrayCars.length; i++){
    for(let j = 0; j < arrayCars[i].cars.length; j++){
        console.log(`ID: ${j}, Страна-производитель: ${arrayCars[i].cars[j].manufacturer}, Марка автомобиля: ${arrayCars[i].cars[j].model}`);
    }
}


//4 задание
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DoneType = 'выполнено' | 'не выполнено';

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}


type GroupType = {
    students: StudentType[];
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, 
    mark?: MarkFilterType,
    group?: GroupFilterType,
}

let group: GroupType = {
    students: [],
    studentsFilter: function(group: number): Array<StudentType> {
        return this.students.filter(student => student.group === group);
    },


    marksFilter: function(mark: number): Array<StudentType> {
        return this.students.filter(student => 
            student.marks.some(markObj => markObj.mark === mark)
        );
    },

    deleteStudent: function(id: number): void {
        this.students = this.students.filter(student => student.id !== id);
    },
}

group.students.push({
    id: 1,
    name: 'Vasya',
    group: 10,
    marks: [
        { subject: 'Math', mark: 9, done: 'выполнено' },
        { subject: 'English', mark: 8, done: 'выполнено' }
    ],
});



group.students.forEach(student => {
    console.log(`ID: ${student.id}, Имя: ${student.name}, Группа: ${student.group}`);
    student.marks.forEach(mark => {
        console.log(`Предмет: ${mark.subject}, Оценка: ${mark.mark}, Выполнение: ${mark.done}`);
    });
});

console.log(group.studentsFilter(10));
console.log(group.marksFilter(9));
console.log(group.deleteStudent(1));