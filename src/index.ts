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
	console.log(123);

	const closeSect = document.querySelector<HTMLElement>("#task");
	const closeSect2 = document.querySelector<HTMLElement>("#tasks");
	const openSect = document.querySelector<HTMLElement>("#main");

	if (closeSect && closeSect2 && openSect) {
		console.log("sections");

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
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <p>
              ${q.questionsNumber}
              <i
                class="fas fa-hourglass-half"
              ></i>
            </p>
            <div
              class="d-flex justify-content-center align-items-center progress-container"
              style="
                width: 80px;
                height: 80px;
                border-radius: 50%;
                box-shadow: 0 0px 3px 3px
                  rgba(20, 20, 20, 0.31);
              "
            >
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

		console.log({
			home,
			toTask,
			oldingisi,
			keyingisi,
			taskName,
			taskDesc,
			taskUl,
			textArea,
			topshirishBtn,
		});

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

				console.log({ oldingiTask });

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

				console.log({ keyingiTask });

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

function testFunction(
	userFunction: string,
	testCases: any[][],
	expectedResults: any[]
): boolean {
	// Create the function from the user's code
	const func = new Function(
		userFunction +
			"; return " +
			userFunction.split(" ")[1].split("(")[0]
	);

	// Iterate through each test case and verify the result
	for (let i = 0; i < testCases.length; i++) {
		const testCase = testCases[i];
		const expectedResult = expectedResults[i];

		// Call the function with the test case
		const result = func.apply(null, testCase);

		// Check the result
		if (result !== expectedResult) {
			console.log(
				`Test case ${
					i + 1
				} failed: func(${testCase}) = ${result}, expected ${expectedResult}`
			);
			return false;
		}
	}

	// Return true if all test cases pass
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
			const userFunction = functionText;

			let testCases: any[][] = Question.check.map((item) =>
				JSON.parse(item)
			);
			const expectedResults: any[] = Question.answers;

			const isCorrect = testFunction(
				userFunction,
				testCases,
				expectedResults
			);

			if (isCorrect) {
				console.log("All test cases passed.");
				resultText.innerHTML = "All test cases passed.";
			} else {
				console.log("Some test cases failed.");
				resultText.innerHTML = "Some test cases failed.";
			}
		} catch (error) {
			console.log(error);
			resultText.innerHTML = `Error: ${error}`;
		}
	}
};

window.onload = () => {
	renderSets();
};
