export const begin1 = {
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
};

export const array1 = {
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
};

export const array2 = {
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
};

export const string1 = {
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
};

export const string2 = {
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
};

export const recursion = {
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
};
