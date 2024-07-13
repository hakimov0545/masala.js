System.register("index", ["api"], function (exports_1, context_1) {
    "use strict";
    var api_1, questionSet, currentSet, Questions, Question, user, buttonAddon2, addComment, renderSets, showTasks, renderTasks, showTask, renderComments, topshirish, trueAnswer, getUsers, loginBtn, showSignIn, showSignUp, login, signup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (api_1_1) {
                api_1 = api_1_1;
            }
        ],
        execute: function () {
            buttonAddon2 = document.querySelector("#button-addon2");
            if (buttonAddon2)
                buttonAddon2.onclick = (e) => {
                    addComment(e);
                };
            addComment = async (e) => {
                e.preventDefault();
                const inp = document.querySelector("#newComment");
                if (inp) {
                    const text = inp.value;
                    //@ts-ignore
                    await axios.post("https://d073cd501036ffc1.mokky.dev/comments", {
                        text: text,
                        userId: user.id,
                        questionId: Question.id,
                    });
                    renderComments(Question);
                    inp.value = "";
                }
            };
            renderSets = async () => {
                try {
                    questionSet = await api_1.getQuestionSet();
                    const closeSect = document.querySelector("#task");
                    const closeSect2 = document.querySelector("#tasks");
                    const closeSect3 = document.querySelector("#log-sect");
                    const openSect = document.querySelector("#main");
                    if (closeSect && closeSect2 && closeSect3 && openSect) {
                        closeSect.classList.add("d-none");
                        closeSect2.classList.add("d-none");
                        closeSect3.classList.add("d-none");
                        openSect.classList.remove("d-none");
                    }
                    const row = document.querySelector("#setRow");
                    if (row) {
                        row.innerHTML = "";
                        console.log({ questionSet });
                        const quests = await api_1.getQuestions();
                        questionSet.map((q) => {
                            const count = quests.filter((item) => item.setId == q.id);
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
                            mainDiv.onclick = function (ev) {
                                renderTasks(ev, q.id);
                            };
                            currentSet = q;
                            row.appendChild(mainDiv);
                        });
                    }
                }
                catch (error) {
                    console.log(error);
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
            renderTasks = async (e, q) => {
                e.preventDefault();
                const questions = await api_1.getQuestions(q);
                console.log({ questions });
                console.log({ Questions });
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
                            console.log({ q });
                            const indexOf = q.fun_name.indexOf("(");
                            let name;
                            if (q.fun_name.charAt(indexOf - 1) == " ") {
                                name = q.fun_name.slice(0, indexOf - 1);
                            }
                            else {
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
                            div.onclick = function (ev) {
                                showTask(q, ev);
                            };
                            row.appendChild(div);
                        });
                    }
                }
            };
            showTask = async (question, e) => {
                if (e)
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
                            renderTasks(ev, currentSet.id);
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
                            showTask(oldingiTask || question, ev);
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
            renderComments = async (question) => {
                // @ts-ignore
                const comments = await axios.get(`https://d073cd501036ffc1.mokky.dev/comments?questionId=${question.id}`);
                console.log({ comments });
                console.log({ user });
                const users = await getUsers();
                if (comments.data.length && users) {
                    const commentsUl = document.querySelector("#comments");
                    if (commentsUl) {
                        commentsUl.innerHTML = "";
                        console.log(comments.data);
                        comments.data.map((c) => {
                            const user = users.find((u) => u.id == c.userId);
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
            topshirish = (e) => {
                e.preventDefault();
                const textArea = document.querySelector("#textArea");
                const resultText = document.querySelector("#result");
                if (textArea && resultText) {
                    const functionText = textArea.value;
                    try {
                        const indexOf = Question.fun_name.indexOf("(");
                        let name;
                        if (Question.fun_name.charAt(indexOf - 1) == " ") {
                            name = Question.fun_name.slice(0, indexOf - 1);
                        }
                        else {
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
							<button class="resBtnDanger btn btn-${isTrue ? "success" : "danger"}">Javobingiz: ${res}</button>
					</p>`;
                                if (isTrue) {
                                    Question.solved = true;
                                    trueAnswer(user, Question.id);
                                }
                                else {
                                }
                            }
                            catch (e) {
                                console.log(e);
                                return item.split(",").map(Number);
                            }
                        });
                    }
                    catch (error) {
                        console.log(error);
                        resultText.innerHTML = `Xato: ${error}`;
                    }
                }
            };
            trueAnswer = async (user, n) => {
                await api_1.api.patch(`/users/${user.id}`, {
                    tasks: {
                        ...user.tasks,
                        [n]: true,
                    },
                });
            };
            getUsers = async () => {
                // @ts-ignore
                const res = await axios.get("https://d073cd501036ffc1.mokky.dev/users");
                return res.data;
            };
            loginBtn = document.querySelector("#loginBtn");
            if (loginBtn)
                loginBtn.onclick = (e) => {
                    login(e);
                };
            showSignIn = async () => {
                const signIn = document.getElementById("show-sign-in");
                if (signIn)
                    signIn.classList.add("active");
                const signUp = document.getElementById("show-sign-up");
                if (signUp)
                    signUp.classList.remove("active");
                const signDiv = document.getElementById("sign-in-div");
                if (signDiv)
                    signDiv.classList.remove("d-none");
                const upDIv = document.getElementById("sign-up-div");
                if (upDIv)
                    upDIv.classList.add("d-none");
            };
            showSignUp = async () => {
                const signIn = document.getElementById("show-sign-in");
                if (signIn)
                    signIn.classList.remove("active");
                const signUp = document.getElementById("show-sign-up");
                if (signUp)
                    signUp.classList.add("active");
                const signDiv = document.getElementById("sign-in-div");
                if (signDiv)
                    signDiv.classList.add("d-none");
                const upDIv = document.getElementById("sign-up-div");
                if (upDIv)
                    upDIv.classList.remove("d-none");
            };
            login = async (event) => {
                event.preventDefault();
                const users = await getUsers();
                console.log(users);
                const login = document.querySelector("#username-login");
                const password = document.querySelector("#password-login");
                if (login && password) {
                    users.map((u) => {
                        if (u.username == login.value) {
                            if (u.pass == password.value) {
                                renderSets();
                                user = u;
                            }
                            else {
                                console.log("Parol xato");
                            }
                        }
                        else {
                            console.log("Username xato");
                        }
                    });
                }
            };
            signup = async (event) => {
                event.preventDefault();
            };
            window.onload = () => { };
        }
    };
});
System.register("api", [], function (exports_2, context_2) {
    "use strict";
    var baseURL, api, getQuestionSet, getQuestions;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("baseURL", baseURL = "https://d073cd501036ffc1.mokky.dev");
            //@ts-ignore
            exports_2("api", api = axios.create({
                baseURL,
                timeout: 30000,
                headers: {
                    "Content-Type": "application/json",
                },
            }));
            exports_2("getQuestionSet", getQuestionSet = async () => {
                const res = await api.get("/questionSet");
                console.log({ res });
                console.log(res.data);
                return res.data;
            });
            exports_2("getQuestions", getQuestions = async (n) => {
                let res;
                if (n) {
                    res = await api.get(`/questions?setId=${n}`);
                }
                else {
                    res = await api.get("questions");
                }
                return res.data;
            });
        }
    };
});
