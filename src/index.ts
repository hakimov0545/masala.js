import { api, getQuestionSet, getQuestions } from "./api";

let questionSet: questionSetI[];

let currentSet: questionSetI;

export interface questionSetI {
	id: number;
	title: string;
	questions: string;
}

export interface TaskI {
	id: number;
	setId: number;
	text: string;
	examples: string[];
	fun_name: string;
	solved: boolean;
	check: string[];
	answers: any[][];
}

export type questionsI = TaskI[];

export interface userI {
	id: number;
	username: string;
	email: string;
	pass: string;
	tasks: {
		[key: string]: boolean;
	};
}

interface commentI {
	id: number;
	text: string;
	userId: number;
	questionId: number;
}

let Questions: questionsI;
let Question: TaskI;
let user: userI;

const buttonAddon2: HTMLButtonElement | null =
	document.querySelector("#button-addon2");

if (buttonAddon2)
	buttonAddon2.onclick = (e: Event) => {
		addComment(e);
	};

const addComment = async (e: Event) => {
	e.preventDefault();
	const inp: HTMLInputElement | null =
		document.querySelector("#newComment");

	if (inp) {
		const text = inp.value;
		//@ts-ignore
		await axios.post(
			"https://d073cd501036ffc1.mokky.dev/comments",
			{
				text: text,
				userId: user.id,
				questionId: Question.id,
			}
		);
		renderComments(Question);
		inp.value = "";
	}
};

const renderSets = async () => {
	try {
		questionSet = await getQuestionSet();

		const closeSect =
			document.querySelector<HTMLElement>("#task");
		const closeSect2 =
			document.querySelector<HTMLElement>("#tasks");
		const closeSect3 =
			document.querySelector<HTMLElement>("#log-sect");
		const openSect = document.querySelector<HTMLElement>("#main");

		if (closeSect && closeSect2 && closeSect3 && openSect) {
			closeSect.classList.add("d-none");
			closeSect2.classList.add("d-none");
			closeSect3.classList.add("d-none");
			openSect.classList.remove("d-none");
		}

		const row: HTMLDivElement | null =
			document.querySelector("#setRow");
		if (row) {
			row.innerHTML = "";

			console.log({ questionSet });

			const quests = await getQuestions();

			questionSet.map((q: questionSetI) => {
				const count = quests.filter(
					(item: TaskI) => item.setId == q.id
				);

				const mainDiv = document.createElement("div");
				mainDiv.className =
					"col-lg-3 col-md-4 col-sm-6 pt-2 pb-2";
				mainDiv.innerHTML = `
				<div class="main-cols">
					<h3 class="">${q.title}</h3>
					<div class="d-flex justify-content-between align-items-center">
						<p>${count.length} <i class="fas fa-hourglass-half"></i></p>
						<div class="d-flex justify-content-center align-items-center progress-container" style="width: 80px; height: 80px; border-radius: 50%; box-shadow: 0 0px 3px 3px rgba(20, 20, 20, 0.31);">
							<p class="fs-5">0%</p>
						</div>
					</div>
				</div>
			`;

				mainDiv.onclick = function (ev: MouseEvent) {
					renderTasks(ev, q.id);
				};

				currentSet = q;

				row.appendChild(mainDiv);
			});
		}
	} catch (error) {
		console.log(error);
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

const renderTasks = async (e: Event, q: number) => {
	e.preventDefault();

	const questions: questionsI = await getQuestions(q);

	console.log({ questions });

	console.log({ Questions });

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

				console.log({ q });

				const indexOf = q.fun_name.indexOf("(");

				let name;

				if (q.fun_name.charAt(indexOf - 1) == " ") {
					name = q.fun_name.slice(0, indexOf - 1);
				} else {
					name = q.fun_name.slice(0, indexOf);
				}

				const isSolved = user.tasks.hasOwnProperty(q.id);
				console.log(q.id);

				console.log(isSolved);

				div.innerHTML = `
					<div class="main-cols d-flex justify-content-around align-items-center">
						<h3 class="">${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
						${isSolved ? "<i class='fa-solid fa-check'></i>" : ""}
					</div>
				`;

				div.onclick = function (ev: MouseEvent) {
					showTask(q, ev);
				};

				row.appendChild(div);
			});
		}
	}
};

const showTask = async (question: TaskI, e?: Event) => {
	if (e) e.preventDefault();

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
				renderTasks(ev, currentSet.id);
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

				showTask(oldingiTask || question, ev);
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

				showTask(keyingiTask || question, ev);
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

			renderComments(question);

			closeSect.classList.add("d-none");
			openSect.classList.remove("d-none");
		}
	}
};

const renderComments = async (question: TaskI) => {
	// @ts-ignore
	const comments = await axios.get(
		`https://d073cd501036ffc1.mokky.dev/comments?questionId=${question.id}`
	);

	console.log({ comments });
	console.log({ user });

	const users = await getUsers();

	if (comments.data.length && users) {
		const commentsUl: HTMLUListElement | null =
			document.querySelector("#comments");

		if (commentsUl) {
			commentsUl.innerHTML = "";

			console.log(comments.data);

			comments.data.map((c: commentI) => {
				const user: userI = users.find(
					(u: userI) => u.id == c.userId
				);

				console.log({ user });

				if (user) {
					commentsUl.innerHTML += `
						<li class="list-group-item">
							<h5 class="text-light me-3">${user.username}: </h5><p class="text-light">${c.text}</p>
						</li>
					`;
				}
			});
		}
	}
};

// function testFunction(
// 	userFunction: Function,
// 	testCases: any[][],
// 	expectedResults: any[]
// ): boolean {
// 	for (let i = 0; i < testCases.length; i++) {
// 		const result = userFunction.apply(null, testCases[i]);

// 		res[i] = result;

// 		console.log({ result });

// 		if (result !== expectedResults[i]) {
// 			console.log(
// 				`Test case ${i + 1} failed: func(${
// 					testCases[i]
// 				}) = ${result}, expected ${expectedResults[i]}`
// 			);
// 			return false;
// 		}
// 	}

// 	return true;
// }

const topshirish = (e: Event) => {
	e.preventDefault();

	const textArea: HTMLTextAreaElement | null =
		document.querySelector("#textArea");
	const resultText = document.querySelector("#result");

	if (textArea && resultText) {
		const functionText = textArea.value;

		try {
			const indexOf = Question.fun_name.indexOf("(");

			let name;

			if (Question.fun_name.charAt(indexOf - 1) == " ") {
				name = Question.fun_name.slice(0, indexOf - 1);
			} else {
				name = Question.fun_name.slice(0, indexOf);
			}

			resultText.innerHTML = "";
			Question.check.map((item, index) => {
				try {
					let res;
					eval(`
							${functionText}
						res = ${name}(${item})`);

					const isTrue = res == Question.answers[index];
					resultText.innerHTML += `
					<p class="d-flex justify-content-between align-items-center flex-wrap">
							${Question.answers[index]}
							<button class="resBtnDanger btn btn-${
								isTrue ? "success" : "danger"
							}">Javobingiz: ${res}</button>
					</p>`;

					if (isTrue) {
						Question.solved = true;
						trueAnswer(user, Question.id);
					} else {
					}
				} catch (e) {
					console.log(e);
					return item.split(",").map(Number);
				}
			});
		} catch (error) {
			console.log(error);
			resultText.innerHTML = `Xato: ${error}`;
		}
	}
};

const trueAnswer = async (user: userI, n: number) => {
	await api.patch(`/users/${user.id}`, {
		tasks: {
			...user.tasks,
			[n]: true,
		},
	});
};

const getUsers = async () => {
	// @ts-ignore
	const res = await axios.get(
		"https://d073cd501036ffc1.mokky.dev/users"
	);

	return res.data;
};

const loginBtn: HTMLButtonElement | null =
	document.querySelector("#loginBtn");
if (loginBtn)
	loginBtn.onclick = (e: Event) => {
		login(e);
	};

const showSignIn = async () => {
	const signIn = document.getElementById("show-sign-in");
	if (signIn) signIn.classList.add("active");
	const signUp = document.getElementById("show-sign-up");
	if (signUp) signUp.classList.remove("active");
	const signDiv = document.getElementById("sign-in-div");
	if (signDiv) signDiv.classList.remove("d-none");
	const upDIv = document.getElementById("sign-up-div");
	if (upDIv) upDIv.classList.add("d-none");
};

const showSignUp = async () => {
	const signIn = document.getElementById("show-sign-in");
	if (signIn) signIn.classList.remove("active");
	const signUp = document.getElementById("show-sign-up");
	if (signUp) signUp.classList.add("active");
	const signDiv = document.getElementById("sign-in-div");
	if (signDiv) signDiv.classList.add("d-none");
	const upDIv = document.getElementById("sign-up-div");
	if (upDIv) upDIv.classList.remove("d-none");
};

const login = async (event: Event): Promise<void> => {
	event.preventDefault();
	const users = await getUsers();

	console.log(users);

	const login: HTMLInputElement | null =
		document.querySelector("#username-login");
	const password: HTMLInputElement | null =
		document.querySelector("#password-login");

	if (login && password) {
		users.map((u: userI) => {
			if (u.username == login.value) {
				if (u.pass == password.value) {
					renderSets();
					user = u;
				} else {
					console.log("Parol xato");
				}
			} else {
				console.log("Username xato");
			}
		});
	}
};

const signup = async (event: Event) => {
	event.preventDefault();
	//@ts-ignore
	const form = document.forms.signup;

	const email = form.email.value;
	const username = form.username.value;
	const pass = form.pass.value;

	user = await api.post("/users", {
		username,
		email,
		pass,
		tasks: {},
	});
	console.log({ user });

	renderSets();
};

window.onload = () => {
	const signIn = document.getElementById(
		"show-sign-in"
	) as HTMLButtonElement;
	const signUp = document.getElementById(
		"show-sign-up"
	) as HTMLButtonElement;

	if (signIn && signUp) {
		signIn.onclick = () => {
			showSignIn();
		};
		signUp.onclick = () => {
			showSignUp();
		};
	}

	const signUpBtn = document.querySelector(
		"#signUpBtn"
	) as HTMLButtonElement;

	signUpBtn.onclick = (e: Event) => {
		signup(e);
	};
};
