import axios from 'axios';

const getTrivia = () => {
	return axios.get('https://opentdb.com/api.php?amount=10')
	.then(function (response) {
		return response.data.results;
	})
	.catch(function (error) {
		console.log(error);
	});
}

export {getTrivia};