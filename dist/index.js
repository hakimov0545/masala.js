System.register("const", [], function (exports_1, context_1) {
    "use strict";
    var body;
    var __moduleName = context_1 && context_1.id;
    function objectLength(obj) {
        return Object.keys(obj).length;
    }
    exports_1("objectLength", objectLength);
    return {
        setters: [],
        execute: function () {
            exports_1("body", body = document.querySelector("body"));
        }
    };
});
System.register("questions", [], function (exports_2, context_2) {
    "use strict";
    var begin1, array1, array2, string1, string2, recursion;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("begin1", begin1 = {
                1: {
                    text: "Argument sifatida ikkita sonni oladigan funksiya yarating va ularning yig‘indisini qaytaring.",
                    examples: [
                        "addition(3, 2) ➞ 5",
                        "addition(-3, -6) ➞ -9",
                        "addition(7, 3) ➞ 10",
                    ],
                    fun_name: "addition (a, b)",
                    solved: false,
                    check: ["3, 2", "-3, -6", "7, 3"],
                    answers: [5, -9, 10],
                },
                2: {
                    text: "Butun daqiqalarni oladigan va uni soniyalarga aylantiruvchi funksiyani yozing.",
                    examples: [
                        "convert(5) ➞ 300",
                        "convert(3) ➞ 180",
                        "convert(2) ➞ 120",
                    ],
                    fun_name: "convert (minutes)",
                    solved: false,
                    check: ["5", "3", "2"],
                    answers: [300, 180, 120],
                },
                3: {
                    text: "Argument sifatida butun sonni oladigan funksiya yarating. 1 dan shu songacha bo'lgan sonlar yig'indisini toping. Misol uchun, agar kiruvchi son 4 bo'lsa, sizning funktsiyangiz 10 ni qaytarishi kerak, chunki 1 + 2 + 3 + 4 = 10.",
                    examples: [
                        "addUp(4) ➞ 10",
                        "addUp(13) ➞ 91",
                        "addUp(600) ➞ 180300",
                    ],
                    fun_name: "addUp (num)",
                    solved: false,
                    check: ["4", "10", "13", "600"],
                    answers: [10, 55, 91, 180300],
                },
                4: {
                    text: "Uchburchakning ikkita tomoni berilgan, uchinchi tomonining maksimal uzunligini topadigan funksiya tuzing, bunda yon uzunliklari butun sonlardan iborat.",
                    examples: [
                        "nextSide(8, 10) ➞ 17",
                        "nextSide(5, 7) ➞ 11",
                        "nextSide(9, 2) ➞ 10",
                    ],
                    fun_name: "nextSide (side1, side2)",
                    solved: false,
                    check: ["8, 10", "5, 7", "9, 2"],
                    answers: [17, 11, 10],
                },
                5: {
                    text: "Butun son qabul qiluvchi va shu sonning faktorialini qaytaruvchi funksiya tuzing.",
                    examples: [
                        "factorial(3) ➞ 6",
                        "factorial(5) ➞ 120",
                        "factorial(13) ➞ 6227020800",
                    ],
                    fun_name: "factorial (num)",
                    solved: false,
                    check: ["3", "5", "13", "9"],
                    answers: [6, 120, 6227020800, 362880],
                },
                6: {
                    text: "Ikkita son va matematik amalni (+ - / * ) qabul qiluvchi funksiya tuzing. Funksiya berilgan sonlar ustida amalani bajarib javob qaytarishi kerak.",
                    examples: [
                        'calculator(2, "+", 2) ➞ 4',
                        'calculator(2, "*", 2) ➞ 4',
                        'calculator(4, "/", 2) ➞ 2',
                    ],
                    fun_name: "calculator (num1, operator, num2)",
                    solved: false,
                    check: [
                        '2, "+", 2',
                        '12, "*", 2',
                        '4, "/", 2',
                        '123, "-", 24',
                    ],
                    answers: [4, 24, 2, 99],
                },
                7: {
                    text: "Uchta sonni qabul qiluchi funksiya tuzing. Bu funksiya birinchi ikkita sonning oxirgi raqamlari ko'paytmasining oxirgi raqami uchinchi sonni oxirigi raqamiga teng bo'lsa rost qaytarsin aks holda yolg'on.",
                    examples: [
                        "lastDig(25, 21, 125) ➞ true",
                        "lastDig(55, 226, 5190) ➞ true",
                        "lastDig(12, 215, 2142) ➞ false",
                    ],
                    fun_name: "lastDig (a, b, c)",
                    solved: false,
                    check: [
                        "25, 21, 125",
                        "55, 226, 5190",
                        "12, 215, 2142",
                        "14, 23, 231",
                    ],
                    answers: [true, true, false, false],
                },
                8: {
                    text: "Kordinata tekisligida ikkita nuqta orasidagi masofani (butun qismdan so'ng 3 xona aniqlikda va float tipida) qaytaruvchi funksiya tuzing.",
                    examples: [
                        "getDistance(-2, 1, 4, 3) ➞ 6.325",
                        "getDistance(0, 0, 1, 1) ➞ 1.414",
                        "getDistance(10, -5, 8, 16) ➞ 21.095",
                    ],
                    fun_name: "getDistance (x1, y1, x2, y2)",
                    solved: false,
                    check: ["-2, 1, 4, 3", "0, 0, 1, 1", "10, -5, 8, 16"],
                    answers: [6.325, 1.414, 21.095],
                },
                9: {
                    text: "Agar n^2 soni n bilan tugasa, n soni 'automorphic' hisoblanadi. Masalan: n=5, n^2=25. Sonni qabul qiladigan va agar shu son 'automorphic' bo'lsa rost, bo'lmasa noto'g'ri qiymatini qaytaradigan funksiya tuzing.",
                    examples: [
                        "isAutomorphic(5) ➞ true",
                        "isAutomorphic(8) ➞ false",
                        "isAutomorphic(76) ➞ true",
                    ],
                    fun_name: "isAutomorphic (num)",
                    solved: false,
                    check: ["5", "3", "127", "25", "40", "76"],
                    answers: [true, false, false, true, false, true],
                },
                10: {
                    text: "ax² + bx + c = 0 kvadrat tenglama x ning haqiqiy qiymatlari uchun 0, 1 yoki 2 ta aniq yechimga ega. a, b va c berilgan bo'lsa, siz tenglama yechimlar sonini qaytaruvchi funksiya tuzing.",
                    examples: [
                        "solutions(1, 0, -1) ➞ 2",
                        "solutions(1, 0, 0) ➞ 1",
                        "solutions(1, 0, 1) ➞ 0",
                    ],
                    fun_name: "solutions (a, b, c)",
                    solved: false,
                    check: ["1, 0, -1", "1, 0, 0", "1, 0, 1"],
                    answers: [2, 1, 0],
                },
                11: {
                    text: "Son berilganda, Fibonachchi qatoridagi ushbu songa mos indeksdagi qiymatini qaytaradigan funktsiya yarating. Fibonachchii sonlari: f0 = 1, f1 = 1, f2 = 2, f3 = 3, f4 = 5 ...",
                    examples: [
                        "fibonacci(3) ➞ 3",
                        "fibonacci(7) ➞ 21",
                        "fibonacci(12) ➞ 233",
                    ],
                    fun_name: "fibonacci (num)",
                    solved: false,
                    check: ["3", "7", "12", "16"],
                    answers: [3, 21, 233, 1597],
                },
                12: {
                    text: `Siz o'z orzuingizdagi ishni qo'lga kiritdingiz. Sizga geometrik progressiya shaklida o'suvchi oylik vada qilishdi, 
    ya'ni sizning birinchi oyligingiz 'firstMonth' va keyingi oladigon oyligingiz avvalgisiga nisbatan 'multiplier' martaga ko'proq bo'ladi.
    Shunday funksiya tuzingki u firstMonth (birinchi oyligingiz) va multiplier (koeffitsient) qabul qilsin, siz oyligingiz barchasini 
    jamg'arib borsangiz 1,000,000 dan ortiq jamg'armaga necha oyda ega bo'lshingizni qaytarib bersin.`,
                    examples: [
                        "millionInMonth(10, 2) ➞ 17",
                        "millionInMonth(100, 1.01) ➞ 464",
                        "millionInMonth(50, 100) ➞ 4",
                    ],
                    fun_name: "millionInMonth (firstMonth, multiplier)",
                    solved: false,
                    check: ["10, 2", "100, 1.01", "50, 100"],
                    answers: [17, 464, 4],
                },
                13: {
                    text: `Kiritlgan sonni raqamlar sonini hisoblovchi funksiya tuzing.`,
                    examples: [
                        "countDigit(158) ➞ 3",
                        "countDigit(89) ➞ 2",
                        "countDigit(475564) ➞ 6",
                    ],
                    fun_name: "countDigit (num)",
                    solved: false,
                    check: ["158", "89", "475564", "7607"],
                    answers: [3, 2, 6, 4],
                },
                14: {
                    text: `Sonning raqamlar yig'indisi juft bo'lsa 'even' so'zini qaytaruvchi, toq bo'lsa 'odd' so'zini qaytaruvchi funksiya tuzing.`,
                    examples: [
                        "digitSumOddEven(43) ➞ odd",
                        "millionInMonth(123) ➞ even",
                        "millionInMonth(54874) ➞ even",
                    ],
                    fun_name: "digitSumOddEven (num)",
                    solved: false,
                    check: ["43", "123", "54874", "991"],
                    answers: ["odd", "even", "even", "odd"],
                },
                15: {
                    text: `Butun son berilgan, keyingi tub sonni qaytaruvchi funksiya yarating. Agar raqam tub bo'lsa, raqamning o'zini qaytaring.`,
                    examples: [
                        "nextPrime(450) ➞ 457",
                        "nextPrime(1000) ➞ 1009",
                        "nextPrime(2348) ➞ 2351",
                    ],
                    fun_name: "nextPrime (num)",
                    solved: false,
                    check: ["450", "1000", "2348", "4873"],
                    answers: [457, 1009, 2351, 4877],
                },
            });
            exports_2("array1", array1 = {
                1: {
                    text: "Faqat sonlardan iborat massivni oladigan funksiya yarating va birinchi elementni qaytaring.",
                    examples: [
                        "getFirstValue([1, 2, 3]) ➞ 1",
                        "getFirstValue([80, 5, 100]) ➞ 80",
                        "getFirstValue([-500, 0, 50]) ➞ -500",
                    ],
                    fun_name: "getFirstValue (arr)",
                    solved: false,
                    check: ["[1, 2, 3]", "[80, 5]", "[-500, 0, 50]"],
                    answers: [1, 80, -500],
                },
                2: {
                    text: "Berilgan sonlar qatorida eng kichik va eng katta sonlarni qaytaruvchi funksiya tuzing",
                    examples: [
                        "minMax([1, 2, 3, 4, 5]) ➞ [1, 5]",
                        "minMax([2334454, 5]) ➞ [5, 2334454]",
                        "minMax([1]) ➞ [1, 1]",
                    ],
                    fun_name: "minMax (arr)",
                    solved: false,
                    check: ["[1, 2, 3, 4, 5]", "[2334454, 5]", "[1]"],
                    answers: [
                        [1, 5],
                        [5, 2334454],
                        [1, 1],
                    ],
                },
                3: {
                    text: "rgb() da berilgan rang qiymatlarini qarama-qarshi rangga o'giruvchi funksiya tuzing. (255, 255, 255) bu oqrang va uni qarama-qarshisi (0, 0, 0) qora",
                    examples: [
                        "colorInvert([255, 255, 255]) ➞ [0, 0, 0]",
                        "colorInvert([0, 0, 0]) ➞ [255, 255, 255]",
                        "colorInvert([165, 170, 221]) ➞ [90, 85, 34]",
                    ],
                    fun_name: "colorInvert (rgb)",
                    solved: false,
                    check: [
                        "[255, 255, 255]",
                        "[0, 0, 0]",
                        "[165, 170, 221]",
                        "[120, 45, 25]",
                    ],
                    answers: [
                        [0, 0, 0],
                        [255, 255, 255],
                        [90, 85, 34],
                        [135, 210, 230],
                    ],
                },
                4: {
                    text: "Berilgan arrayni eng oxirgi elementini 0-indeksga o'tkazuvchi funksiya tuzing.",
                    examples: [
                        "rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]",
                        "rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]",
                        "rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]",
                    ],
                    fun_name: "rotateByOne (arr)",
                    solved: false,
                    check: [
                        "[1, 2, 3, 4, 5]",
                        "[6, 5, 8, 9, 7]",
                        "[20, 15, 26, 8, 4]",
                        "[120, 45, 25]",
                    ],
                    answers: [
                        [5, 1, 2, 3, 4],
                        [7, 6, 5, 8, 9],
                        [4, 20, 15, 26, 8],
                        [25, 120, 45],
                    ],
                },
            });
            exports_2("array2", array2 = {
                1: {
                    text: "Kiruvchi arrayni boshidan n ta elementi tashlab yuborib qolgan elementlarni qaytaruvchi funksiya tuzing. Agar array uzunligi n dan kichik bo'lsa bo'sh [] array qaytaring.",
                    examples: [
                        "drop([1, 2, 3], 1) ➞ [2, 3]",
                        "drop([1, 2, 3], 2) ➞ [3]",
                        "drop([1, 2, 3], 5) ➞ []",
                        "drop([1, 2, 3], 0) ➞ [1, 2, 3]",
                    ],
                    fun_name: "drop (arr, n)",
                    solved: false,
                    check: [
                        "[1, 2, 3], 1",
                        "[1, 2, 3], 2",
                        "[1, 2, 3], 5",
                        "[1, 2, 3], 0",
                    ],
                    answers: [[2, 3], [3], [], [1, 2, 3]],
                },
            });
            exports_2("string1", string1 = {
                1: {
                    text: "Berilgan ism va familiyani bitta stringga birlashtiruvchi funksiya tuzing.",
                    examples: [
                        `concatName("First", "Last") ➞ "Last, First"`,
                        `concatName("John", "Doe") ➞ "Doe, John"`,
                        `concatName("Mary", "Jane") ➞ "Jane, Mary"`,
                    ],
                    fun_name: "concatName (firstname, lastname)",
                    solved: false,
                    check: ['"First", "Last"', '"John", "Doe"', '"Mary", "Jane"'],
                    answers: ["Last, First", "Doe, John", "Jane, Mary"],
                },
            });
            exports_2("string2", string2 = {
                1: {
                    text: "Berilgan so'zdagi katta harflarni so'zni boshiga o'tkazuvchi funksiya tuzing.",
                    examples: [
                        'capToFront("hApPy") ➞ "APhpy"',
                        'capToFront("moveMENT") ➞ "MENTmove"',
                        'capToFront("shOrtCAKE") ➞ "OCAKEshrt"',
                    ],
                    fun_name: "capToFront (str)",
                    solved: false,
                    check: ["hApPy", "moveMENT", "shOrtCAKE"],
                    answers: ["APhpy", "MENTmove", "OCAKEshrt"],
                },
            });
            exports_2("recursion", recursion = {
                1: {
                    text: "Rekursiya yordamida massivdagi eng katta butun sonni topadigan funksiya tuzing.",
                    examples: [
                        "findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99",
                        "findHighest([0, 12, 4, 87]) ➞ 87",
                        "findHighest([6,7,8]) ➞ 8",
                    ],
                    fun_name: "findHighest (arr)",
                    solved: false,
                    check: [
                        "[-1, 3, 5, 6, 99, 12, 2]",
                        "[0, 12, 4, 87]",
                        "[6,7,8]",
                    ],
                    answers: [99, 87, 8],
                },
            });
        }
    };
});
System.register("questionSet", ["const", "questions"], function (exports_3, context_3) {
    "use strict";
    var const_1, questions_1, questionSet;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (const_1_1) {
                const_1 = const_1_1;
            },
            function (questions_1_1) {
                questions_1 = questions_1_1;
            }
        ],
        execute: function () {
            exports_3("questionSet", questionSet = {
                1: {
                    id: 1,
                    title: "Sonlar",
                    questionsNumber: const_1.objectLength(questions_1.begin1),
                    questions: questions_1.begin1,
                },
                2: {
                    id: 2,
                    title: "Array-1",
                    questionsNumber: const_1.objectLength(questions_1.array1),
                    questions: questions_1.array1,
                },
                3: {
                    id: 3,
                    title: "Array-2",
                    questionsNumber: const_1.objectLength(questions_1.array2),
                    questions: questions_1.array2,
                },
                4: {
                    id: 4,
                    title: "String-1",
                    questionsNumber: const_1.objectLength(questions_1.string1),
                    questions: questions_1.string1,
                },
                5: {
                    id: 5,
                    title: "String-2",
                    questionsNumber: const_1.objectLength(questions_1.string2),
                    questions: questions_1.string2,
                },
                6: {
                    id: 6,
                    title: "Rekursiya",
                    questionsNumber: const_1.objectLength(questions_1.recursion),
                    questions: questions_1.recursion,
                },
            });
        }
    };
});
System.register("index", ["questionSet"], function (exports_4, context_4) {
    "use strict";
    var questionSet_1, Questions, Question, renderSets, showTasks, renderTasks, showTask, res, topshirish;
    var __moduleName = context_4 && context_4.id;
    function testFunction(userFunction, testCases, expectedResults) {
        for (let i = 0; i < testCases.length; i++) {
            const result = userFunction.apply(null, testCases[i]);
            res[i] = result;
            console.log({ result });
            if (result !== expectedResults[i]) {
                console.log(`Test case ${i + 1} failed: func(${testCases[i]}) = ${result}, expected ${expectedResults[i]}`);
                return false;
            }
        }
        return true;
    }
    return {
        setters: [
            function (questionSet_1_1) {
                questionSet_1 = questionSet_1_1;
            }
        ],
        execute: function () {
            renderSets = () => {
                const closeSect = document.querySelector("#task");
                const closeSect2 = document.querySelector("#tasks");
                const openSect = document.querySelector("#main");
                if (closeSect && closeSect2 && openSect) {
                    closeSect.classList.add("d-none");
                    closeSect2.classList.add("d-none");
                    openSect.classList.remove("d-none");
                }
                const row = document.querySelector("#setRow");
                if (row) {
                    row.innerHTML = "";
                    Object.values(questionSet_1.questionSet).map((q) => {
                        const mainDiv = document.createElement("div");
                        mainDiv.className =
                            "col-lg-3 col-md-4 col-sm-6 pt-2 pb-2";
                        mainDiv.innerHTML = `
				<div class="main-cols">
					<h3 class="">${q.title}</h3>
					<div class="d-flex justify-content-between align-items-center">
						<p>${q.questionsNumber} <i class="fas fa-hourglass-half"></i></p>
						<div class="d-flex justify-content-center align-items-center progress-container" style="width: 80px; height: 80px; border-radius: 50%; box-shadow: 0 0px 3px 3px rgba(20, 20, 20, 0.31);">
							<p class="fs-5">0%</p>
						</div>
					</div>
				</div>
			`;
                        mainDiv.onclick = function (ev) {
                            renderTasks(ev, q.questions);
                        };
                        row.appendChild(mainDiv);
                    });
                }
            };
            showTasks = (e) => {
                e.preventDefault();
                const closeSect = document.querySelector("#task");
                const openSect = document.querySelector("#tasks");
                if (closeSect && openSect) {
                    closeSect.classList.add("d-none");
                    openSect.classList.remove("d-none");
                }
            };
            renderTasks = (e, questions) => {
                e.preventDefault();
                Questions = questions;
                const closeSect = document.querySelector("#main");
                const openSect = document.querySelector("#tasks");
                const closeSect2 = document.querySelector("#task");
                if (closeSect && openSect && closeSect2) {
                    closeSect.classList.add("d-none");
                    closeSect2.classList.add("d-none");
                    openSect.classList.remove("d-none");
                    const row = document.querySelector("#tasksRow");
                    if (row) {
                        row.innerHTML = "";
                        Object.values(questions).map((q) => {
                            const div = document.createElement("div");
                            div.className =
                                "col-lg-3 col-md-4 col-sm-6 pt-2 pb-2";
                            div.innerHTML = `
					<div class="main-cols">
						<h3 class="">${q.fun_name.split(/\s+/)[0]}</h3>
					</div>
				`;
                            div.onclick = function (ev) {
                                showTask(ev, q);
                            };
                            row.appendChild(div);
                        });
                    }
                }
            };
            showTask = (e, question) => {
                e.preventDefault();
                Question = question;
                const result = document.querySelector("#result");
                if (result)
                    result.innerHTML = "";
                const closeSect = document.querySelector("#tasks");
                const openSect = document.querySelector("#task");
                if (closeSect && openSect) {
                    const home = document.querySelector("#home");
                    const toTask = document.querySelector("#toTasks");
                    const oldingisi = document.querySelector("#oldingisi");
                    const keyingisi = document.querySelector("#keyingisi");
                    const taskName = document.querySelector("#taskName");
                    const taskDesc = document.querySelector("#taskDesc");
                    const taskUl = document.querySelector("#taskUl");
                    const textArea = document.querySelector("#textArea");
                    const topshirishBtn = document.querySelector("#topshirish");
                    if (home &&
                        toTask &&
                        oldingisi &&
                        keyingisi &&
                        taskName &&
                        taskDesc &&
                        taskUl &&
                        textArea &&
                        topshirishBtn) {
                        home.onclick = function (ev) {
                            renderSets();
                        };
                        toTask.onclick = function (ev) {
                            renderTasks(ev, Questions);
                        };
                        topshirishBtn.onclick = function (ev) {
                            topshirish(ev);
                        };
                        oldingisi.onclick = function (ev) {
                            let currentTaskNumber;
                            for (const [key, value] of Object.entries(Questions)) {
                                if (value.text === question.text) {
                                    currentTaskNumber = Number(key);
                                    break;
                                }
                            }
                            // @ts-ignore
                            const oldingiTask = Questions[currentTaskNumber - 1];
                            showTask(ev, oldingiTask || question);
                        };
                        keyingisi.onclick = function (ev) {
                            let currentTaskNumber;
                            for (const [key, value] of Object.entries(Questions)) {
                                if (value.text === question.text) {
                                    currentTaskNumber = Number(key);
                                    break;
                                }
                            }
                            // @ts-ignore
                            const keyingiTask = Questions[currentTaskNumber + 1];
                            showTask(ev, keyingiTask || question);
                        };
                        taskName.innerHTML = question.fun_name.split(/\s+/)[0];
                        taskDesc.innerHTML = question.text;
                        taskUl.innerHTML = `
				<li>${question.examples[0]}</li>
				<li>${question.examples[1]}</li>
				<li>${question.examples[2]}</li>
			`;
                        textArea.value = `
	function ${question.fun_name} {
			
	}
			`;
                        closeSect.classList.add("d-none");
                        openSect.classList.remove("d-none");
                    }
                }
            };
            res = [0, 0, 0];
            topshirish = (e) => {
                e.preventDefault();
                const textArea = document.querySelector("#textArea");
                const resultText = document.querySelector("#result");
                if (textArea && resultText) {
                    const functionText = textArea.value;
                    try {
                        // Foydalanuvchi funksiyasini yaratish
                        const userFunction = eval(`(${functionText})`);
                        // Test hollari va kutilgan natijalarni olish
                        const testCases = Question.check.map((item) => {
                            try {
                                return JSON.parse(item);
                            }
                            catch (e) {
                                return item.split(",").map(Number);
                            }
                        });
                        const expectedResults = Question.answers.flat();
                        // Foydalanuvchi funksiyasini test qilish
                        const isCorrect = testFunction(userFunction, testCases, expectedResults);
                        if (isCorrect) {
                            resultText.innerHTML = `
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[0]}
							<button class="resBtnSuccess btn btn-success">Javobingiz: ${res[0]}</button>
					</p>
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[1]}
							<button class="resBtnSuccess btn btn-success">Javobingiz: ${res[1]}</button>
					</p>
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[2]}
							<button class="resBtnSuccess btn btn-success">Javobingiz: ${res[2]}</button>
					</p>
				`;
                        }
                        else {
                            resultText.innerHTML = `
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[0]}
							<button class="resBtnDanger btn btn-${res[0] == expectedResults[0]
                                ? "success"
                                : "danger"}">Javobingiz: ${res[0]}</button>
					</p>
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[1]}
							<button class="resBtnDanger btn btn-${res[1] == expectedResults[1]
                                ? "success"
                                : "danger"}">Javobingiz: ${res[1]}</button>
					</p>
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[2]}
							<button class="resBtnDanger btn btn-${res[2] == expectedResults[2]
                                ? "success"
                                : "danger"}">Javobingiz: ${res[2]}</button>
					</p>
				`;
                        }
                    }
                    catch (error) {
                        resultText.innerHTML = `Xato: ${error}`;
                    }
                }
            };
            window.onload = () => {
                renderSets();
            };
        }
    };
});
