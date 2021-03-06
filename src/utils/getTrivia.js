import axios from 'axios';

const getTrivia = (state) => {
	let url = `https://opentdb.com/api.php?amount=10`;
	url = state.categoryAPI ? `${url}&category=${state.categoryAPI}` : url;
	url = state.difficultyAPI
		? `${url}&difficulty=${state.difficultyAPI}`
		: url;
	url = state.questionAPI ? `${url}&type=${state.questionAPI}` : url;

	return axios
		.get(url)
		.then(function(response) {
			return response.data.results;
		})
		.catch(function(error) {
			console.log(error);
		});
};

export { getTrivia };
