async function buscar(user) {
    const url = `https://api.github.com/users/${user}`;

    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();

        let nome = document.querySelector('#nome');
        nome.textContent = data['name'];

        let img = document.querySelector('#avatar');
        img.src = data['avatar_url'];

        let repos = document.querySelector('#repos');

        const responseRepos = await fetch(data['repos_url']);
        if (responseRepos.ok) {
            const dataRepos = await responseRepos.json();
            repos.textContent = dataRepos.length + ' repositórios públicos!';
        } else {
            repos.textContent = 'Repos não encontrados';
        }
    } else {
        alert('Erro ao buscar usuário');
    }

    let urlP = document.querySelector('#url');
    urlP.href = data['html_url'];
}

function main() {
    let btn = document.querySelector('#buscar');
    btn.addEventListener('click', function() {
        let txtUser = document.querySelector('#user');
        let user = txtUser.value;
        buscar(user);
    });
}

main();
