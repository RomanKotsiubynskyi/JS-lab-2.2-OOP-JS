 
//classes

// class CourseKPI var 1
// 0. Створюється ф-я з іменем "CourseKPI", яка є результатом об'явлення класу.
class CourseKPI {                                      // Код функції береться з методу "constructor" Методи зберігаються в CourseKPI.prototype
    constructor(exam, surename) {                      //2. конструктор запускається з заданими аргументами і зберігає їх в this
        this.exam = exam;                              // 3.1 this посилається на об'єкт, в межах якого викликана функція
        this.surename = surename;                      // 3.2 в this записується значення об'єкту, який потім повертається в змінну (chizik)
    }
    pass(score) {                                  // 4. З прототипу викликається метод на новий об'єкт
        this.score = score;

        if (score > 61) {
            console.log(`${this.surename} PASSED ${this.exam} with score ${this.score}\n\n`);
        } else {
            console.log(`${this.surename} NOT passed ${this.exam} score:  ${this.score}\n\n`);
        }
    }
}


let chizik = new CourseKPI('JS', 'Chizik A.A.');          //1. створюється елемент класу - новий об'єкт
chizik.pass(62);
let pizik = new CourseKPI('JS', 'Pizik O.O.');      // Для нового об'єкту створюється окрема функція
pizik.pass(52);

console.log(typeof CourseKPI);                                // Підтвердження того, що класс - це функція   
console.log(CourseKPI === CourseKPI.prototype.constructor);   // Підтвердження того, що класс відповідає методу "constructor"  
console.log(Object.getOwnPropertyNames(CourseKPI.prototype)); // в прототипі знаходяться два методи: "constructor" і "pass"

// class CourseKPI var 2
class CourseKPI {
    constructor(exam, surename, score) {
        this.score = score;
        this.exam = exam;
        this.surename = surename;
    }
    pass() {
        console.log(`${this.surename} PASSED ${this.exam} with score ${this.score}`);
    }
}

let chizik = new CourseKPI('JS', 'Chizik', 72);
chizik.pass();


//Prototype definition

function CourseKPI(exam, surename) {
    this.exam = exam;                               //функція має вбудований constructor
    this.surename = surename;
}
CourseKPI.prototype.pass = function (score) {       //в прототип добавляється method pass
    this.score = score;                             //метод не копіюється для різних об'єктів (один метод)

    if (score > 61) {
        console.log(`${this.surename} PASSED ${this.exam} with score ${this.score}\n\n`);
    } else {
        console.log(`${this.surename} NOT passed ${this.exam} score:  ${this.score}\n\n`);
    };
};

let chizik = new CourseKPI('JS', 'Chizik A.A.');
chizik.pass(62);
let pizik = new CourseKPI('JS', 'Pizik O.O.');
pizik.pass(58);




//Prototype extending 
function CourseKPI(exam, surename, group) {
    this.exam = exam;                                       // батьківськ конструктор
    this.exam = exam;
    this.surename = surename;
    this.group = group;
}

CourseKPI.prototype.pass = function (score) {               //метод 1
    this.score = score;

    if (score > 61) {
        console.log(`${this.surename} PASSED ${this.exam} with score ${this.score}`);
    } else {
        console.log(`${this.surename} NOT passed ${this.exam} score:  ${this.score}`);
    }
};

CourseKPI.prototype.date = function (year) {                //метод 2
    this.year = year;
    console.log(`${this.group} YEAR: ${year}`);
};

function Group(group, surename, exam) {

    CourseKPI.call(this.group);                               // виклик батьківського конструктору
    this.exam = exam;
    this.surename = surename;
    this.group = group;
};
Group.prototype = Object.create(CourseKPI.prototype);         // створення неініціалізовінного об'єкту за допомогою Object.create
Group.prototype.constructor = Group;                         // вказування поточного конструктору в прототипі

let chizik1 = new Group('ZPІ-zp03', 'Chizik', 'JS',);

chizik1.pass(22);
chizik1.date(2021);

console.log(chizik1 instanceof Group);                  //підтверженя належності об'єкта chizik1 класу Group
console.log(chizik1 instanceof CourseKPI);               //підтверженя належності об'єкта chizik1 класуCourseKPI


//class Group

class Group2 {
    constructor(surename, group) {
        this.surename = surename;
        this.group = group;
    }
    numberGroup() {
        console.log(`\n ${this.surename}, group # ${this.group}`);

    }
}

// insert number of group: ZPІ-zp03
let chizik = new Group2('Chizik', 'ZPІ-zp03');

chizik.numberGroup();

//Class extending
class CourseKPI {
    constructor(exam, surename, group) {
        this.exam = exam;
        this.surename = surename;
        this.group = group;
    }
    pass(score) {
        this.score = score;

        if (score > 61) {
            console.log(`${this.surename} PASSED ${this.exam} with score ${this.score}`);
        } else {
            console.log(`${this.surename} NOT passed ${this.exam} score:  ${this.score}`);
        }
    }
}

class Group extends CourseKPI {

    numberGroup() {
        console.log(`\n ${this.surename}, group # ${this.group}`);

    }
}

// insert number of group: ZPІ-zp03
let chizik = new Group('JS', 'Chizik', 'ZPІ-zp03');

chizik.numberGroup();
chizik.pass(22);

console.log(chizik instanceof Group);       //підтверженя належності об'єкта chizik класу Group
console.log(chizik instanceof CourseKPI);   //підтверженя належності об'єкта chizik класу CourseKPI

//Class: Overriding a method
class CourseKPI { // класс
    constructor(exam, surename, group) {
        this.exam = exam;
        this.surename = surename;
        this.group = group;
    }
    pass(score) {
        this.score = score;

        if (score > 61) {
            console.log(`${this.surename}, PASSED ${this.exam} with score ${this.score}`);
        } else {
            console.log(`${this.surename} NOT passed ${this.exam} score:  ${this.score}`);
        }
    }
}

class Group extends CourseKPI {

    numberGroup() {
        console.log(`\n ${this.surename}, group # ${this.group}`);

    }
    pass(score) {
        super.pass(score);
        this.numberGroup();
    }
}

// insert number of group: ZPІ-zp03
let chizik = new Group('JS', 'Chizik A.A.', 'ZPІ-zp03'); 
chizik.pass(82);

//публічний метод
class CourseKPI {
    constructor(exam, surename, score) {
        this.score = score;                 // поля, ініціалізовані через this, є публічними
        this.exam = exam;
        this.surename = surename;
    }
    pass() {
        console.log(`${this.surename} PASSED ${this.exam} with score ${this.score}`);
    }
}

let chizik = new CourseKPI('JS', 'Chizik', 72);
chizik.pass();
chizik.exam = 'C++';
chizik.score = 56;
chizik.pass();

//приватні методи Класу
class CourseKPI {
    constructor(exam, surename, score) {
        this._score = score;
        this.surename = surename;                 // поля, ініціалізовані через this, є публічними
        this._exam = exam;                        // поля, ініціалізовані через this._, є приватними
         }
           
         get score() {                            //
            return this._score;
          }


         get exam() {
            return this._exam;
          }

    pass() {
        console.log(`${this.surename} PASSED ${this.exam} with score ${this.score}`);
    }
}

let chizik = new CourseKPI('JS', 'Chizik', 92);
chizik.pass();
chizik.exam = 'C++';
chizik.score = 56;
chizik.pass();

