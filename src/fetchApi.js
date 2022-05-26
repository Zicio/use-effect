const fetchApi = async (param) => {
  if (param) {
    let url = new URL(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${param}.json`
    );
    const response = await fetch(url);
    if (response.ok) {
      return response;
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }
};

export default fetchApi;
