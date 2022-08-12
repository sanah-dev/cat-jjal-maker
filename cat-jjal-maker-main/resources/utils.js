const EMPTY_HEART = "🤍";
const FULL_HEART = "💖";

const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
const CAT2 = "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
const CAT3 = "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

// 로컬스토리지에는 무조건 string으로 저장되기 때문에 이 부분을 해소할 수 있는 함수
const jsonLocalStorage = {
	setItem: (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
		// json으로 변환
	},
	getItem: (key) => {
		return JSON.parse(localStorage.getItem(key));
		// json을 파서
	},
};

const fetchCat = async (text) => {
	const OPEN_API_DOMAIN = "https://cataas.com";
	const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
	const responseJson = await response.json();
	return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};
