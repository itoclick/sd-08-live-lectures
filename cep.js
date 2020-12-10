const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => onClick(event))

const onClick = async (event) => {
  event.preventDefault();
  let input = document.getElementById('input-cep');
  await getAddress(parseInt(input.value));
};

const searchCep = (address) => {
  let div = document.getElementById('result');
  div.innerHTML = address;
}

const getAddress = (cep) => {
  return new Promise((resolve, reject) => { 
    fetch(`http://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        response.json()
          .then((data) => {
            searchCep(`${data.logradouro}, ${data.localidade}, ${data.uf}`);
            resolve();
          });
      });
  });
};