function createNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-light bg-light';

    const brand = document.createElement('a');
    brand.className = 'navbar-brand';
    brand.href = 'index.html';

    const logo = document.createElement('img');
    logo.src = 'https://www.ritsumei.ac.jp/features/r_na_hito/images/logo_footer.png';
    logo.height = 40;
    brand.appendChild(logo);

    nav.appendChild(brand);

    const button = document.createElement('button');
    button.className = 'navbar-toggler';
    button.type = 'button';
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', '#navbarNav');
    button.setAttribute('aria-controls', 'navbarNav');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');

    const span = document.createElement('span');
    span.className = 'navbar-toggler-icon';
    button.appendChild(span);

    nav.appendChild(button);

    const div = document.createElement('div');
    div.className = 'collapse navbar-collapse';
    div.id = 'navbarNav';

    const ul = document.createElement('ul');
    ul.className = 'navbar-nav mr-auto'; // Add this class for alignment

    const li1 = document.createElement('li');
    li1.className = 'nav-item active';
    const a1 = document.createElement('a');
    a1.className = 'nav-link';
    a1.href = './index.html';
    a1.innerHTML = 'ホーム <span class="sr-only">(current)</span>';
    li1.appendChild(a1);

    const li2 = document.createElement('li');
    li2.className = 'nav-item';
    const a2 = document.createElement('a');
    a2.className = 'nav-link';
    a2.href = './html/introduction.html';
    a2.textContent = '技術者向けページ';
    li2.appendChild(a2);

    ul.appendChild(li1);
    ul.appendChild(li2);

    div.appendChild(ul);

    // Create GitHub button
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

    div.appendChild(githubButton);
    nav.appendChild(div);

    return nav;
}

document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.appendChild(createNavbar());
});
