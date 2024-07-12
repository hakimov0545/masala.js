import { questionSet } from "./questionSet";

interface questionSetI {
	id: number;
	title: string;
	questionsNumber: number;
	questions: {};
}

interface TaskI {
	text: string;
	examples: string[];
	fun_name: string;
	solved: boolean;
	check: string[];
	answers: any[][];
}

interface questionsI {
	[key: number]: TaskI;
}

let Questions: questionsI;
let Question: TaskI;

const renderSets = () => {
	const closeSect = document.querySelector<HTMLElement>("#task");
	const closeSect2 = document.querySelector<HTMLElement>("#tasks");
	const openSect = document.querySelector<HTMLElement>("#main");

	if (closeSect && closeSect2 && openSect) {
		closeSect.classList.add("d-none");
		closeSect2.classList.add("d-none");
		openSect.classList.remove("d-none");
	}

	const row: HTMLDivElement | null =
		document.querySelector("#setRow");
	if (row) {
		row.innerHTML = "";

		Object.values(questionSet).map((q: questionSetI) => {
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

			mainDiv.onclick = function (ev: MouseEvent) {
				renderTasks(ev, q.questions);
			};

			row.appendChild(mainDiv);
		});
	}
};

const showTasks = (e: Event) => {
	e.preventDefault();

	const closeSect = document.querySelector<HTMLElement>("#task");
	const openSect = document.querySelector<HTMLElement>("#tasks");

	if (closeSect && openSect) {
		closeSect.classList.add("d-none");
		openSect.classList.remove("d-none");
	}
};

const renderTasks = (e: Event, questions: questionsI) => {
	e.preventDefault();

	Questions = questions;

	const closeSect = document.querySelector<HTMLElement>("#main");
	const openSect = document.querySelector<HTMLElement>("#tasks");
	const closeSect2 = document.querySelector<HTMLElement>("#task");

	if (closeSect && openSect && closeSect2) {
		closeSect.classList.add("d-none");
		closeSect2.classList.add("d-none");
		openSect.classList.remove("d-none");

		const row = document.querySelector("#tasksRow");
		if (row) {
			row.innerHTML = "";

			Object.values(questions).map((q: TaskI) => {
				const div = document.createElement("div");
				div.className =
					"col-lg-3 col-md-4 col-sm-6 pt-2 pb-2";

				div.innerHTML = `
					<div class="main-cols">
						<h3 class="">${q.fun_name.split(/\s+/)[0]}</h3>
					</div>
				`;

				div.onclick = function (ev: MouseEvent) {
					showTask(ev, q);
				};

				row.appendChild(div);
			});
		}
	}
};

const showTask = (e: Event, question: TaskI) => {
	e.preventDefault();

	Question = question;

	const result = document.querySelector("#result");

	if (result) result.innerHTML = "";

	const closeSect = document.querySelector<HTMLElement>("#tasks");
	const openSect = document.querySelector<HTMLElement>("#task");

	if (closeSect && openSect) {
		const home: HTMLButtonElement | null =
			document.querySelector("#home");
		const toTask: HTMLButtonElement | null =
			document.querySelector("#toTasks");
		const oldingisi: HTMLButtonElement | null =
			document.querySelector("#oldingisi");
		const keyingisi: HTMLButtonElement | null =
			document.querySelector("#keyingisi");
		const taskName = document.querySelector("#taskName");
		const taskDesc = document.querySelector("#taskDesc");
		const taskUl = document.querySelector("#taskUl");
		const textArea: HTMLTextAreaElement | null =
			document.querySelector("#textArea");
		const topshirishBtn: HTMLButtonElement | null =
			document.querySelector("#topshirish");

		if (
			home &&
			toTask &&
			oldingisi &&
			keyingisi &&
			taskName &&
			taskDesc &&
			taskUl &&
			textArea &&
			topshirishBtn
		) {
			home.onclick = function (ev: MouseEvent) {
				renderSets();
			};

			toTask.onclick = function (ev: MouseEvent) {
				renderTasks(ev, Questions);
			};

			topshirishBtn.onclick = function (ev: MouseEvent) {
				topshirish(ev);
			};

			oldingisi.onclick = function (ev: MouseEvent) {
				let currentTaskNumber: number;

				for (const [key, value] of Object.entries(
					Questions
				)) {
					if (value.text === question.text) {
						currentTaskNumber = Number(key);
						break;
					}
				}

				// @ts-ignore

				const oldingiTask = Questions[currentTaskNumber - 1];

				showTask(ev, oldingiTask || question);
			};
			keyingisi.onclick = function (ev: MouseEvent) {
				let currentTaskNumber: number;

				for (const [key, value] of Object.entries(
					Questions
				)) {
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

let res: number[] = [0, 0, 0];

function testFunction(
	userFunction: Function,
	testCases: any[][],
	expectedResults: any[]
): boolean {
	for (let i = 0; i < testCases.length; i++) {
		const result = userFunction.apply(null, testCases[i]);

		res[i] = result;

		console.log({ result });

		if (result !== expectedResults[i]) {
			console.log(
				`Test case ${i + 1} failed: func(${
					testCases[i]
				}) = ${result}, expected ${expectedResults[i]}`
			);
			return false;
		}
	}

	return true;
}

const topshirish = (e: Event) => {
	e.preventDefault();

	const textArea: HTMLTextAreaElement | null =
		document.querySelector("#textArea");
	const resultText = document.querySelector("#result");

	if (textArea && resultText) {
		const functionText = textArea.value;

		try {
			// Foydalanuvchi funksiyasini yaratish
			const userFunction = eval(`(${functionText})`);

			// Test hollari va kutilgan natijalarni olish
			const testCases: any[][] = Question.check.map((item) => {
				try {
					return JSON.parse(item);
				} catch (e) {
					return item.split(",").map(Number);
				}
			});

			const expectedResults: any[] = Question.answers.flat();

			// Foydalanuvchi funksiyasini test qilish
			const isCorrect = testFunction(
				userFunction,
				testCases,
				expectedResults
			);

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
			} else {
				resultText.innerHTML = `
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[0]}
							<button class="resBtnDanger btn btn-${
								res[0] == expectedResults[0]
									? "success"
									: "danger"
							}">Javobingiz: ${res[0]}</button>
					</p>
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[1]}
							<button class="resBtnDanger btn btn-${
								res[1] == expectedResults[1]
									? "success"
									: "danger"
							}">Javobingiz: ${res[1]}</button>
					</p>
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${expectedResults[2]}
							<button class="resBtnDanger btn btn-${
								res[2] == expectedResults[2]
									? "success"
									: "danger"
							}">Javobingiz: ${res[2]}</button>
					</p>
				`;
			}
		} catch (error) {
			resultText.innerHTML = `Xato: ${error}`;
		}
	}
};

window.onload = () => {
	renderSets();
};
