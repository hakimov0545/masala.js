import { objectLength } from "./const";
import {
	array1,
	array2,
	begin1,
	recursion,
	string1,
	string2,
} from "./questions";

export const questionSet = {
	1: {
		id: 1,
		title: "Sonlar",
		questionsNumber: objectLength(begin1),
		questions: begin1,
	},
	2: {
		id: 2,
		title: "Array-1",
		questionsNumber: objectLength(array1),
		questions: array1,
	},
	3: {
		id: 3,
		title: "Array-2",
		questionsNumber: objectLength(array2),
		questions: array2,
	},
	4: {
		id: 4,
		title: "String-1",
		questionsNumber: objectLength(string1),
		questions: string1,
	},
	5: {
		id: 5,
		title: "String-2",
		questionsNumber: objectLength(string2),
		questions: string2,
	},
	6: {
		id: 6,
		title: "Rekursiya",
		questionsNumber: objectLength(recursion),
		questions: recursion,
	},
};
