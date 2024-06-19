export function createGithubButton() {
    const githubButton = document.createElement('a');
    githubButton.href = 'https://github.com/MasamichiKanakubo/sousei-group-work';
    githubButton.target = '_blank';
    githubButton.className = 'btn btn-white ml-auto'; // Bootstrap classes for styling

    const githubLogo = document.createElement('img');
    githubLogo.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    githubLogo.alt = 'GitHub Logo';
    githubLogo.style.width = '20px';
    githubLogo.style.height = '20px';
    githubLogo.style.marginRight = '5px';

    githubButton.appendChild(githubLogo);
    githubButton.appendChild(document.createTextNode('GitHub'));

    return githubButton;
}
