import { questionSetI, questionsI, TaskI } from "./index";

export const baseURL = "https://d073cd501036ffc1.mokky.dev";

//@ts-ignore
export const api = axios.create({
	baseURL,
	timeout: 30000,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getQuestionSet = async () => {
	const res = await api.get("/questionSet");
	console.log({ res });
	console.log(res.data);

	return res.data;
};

export const getQuestions = async (n?: number) => {
	let res;
	if (n) {
		res = await api.get(`/questions?setId=${n}`);
	} else {
		res = await api.get("questions");
	}
	return res.data;
};
