import axios from 'axios';

const getTrivia = (state) => {
	let url = `https://opentdb.com/api.php?amount=10`;
		url = state.categoryAPI ? `${url}&category=${state.categoryAPI}` : url; 
		url = state.difficultyAPI ? `${url}&difficulty=${state.difficultyAPI}` : url;
		url = state.questionAPI ? `${url}&type=${state.questionAPI}` : url;
		console.log(url);
	return axios.get(url)
	.then(function (response) {
		console.log(response.data.results);
		return response.data.results;
	})
	.catch(function (error) {
		console.log(error);
	});
}

export {getTrivia};