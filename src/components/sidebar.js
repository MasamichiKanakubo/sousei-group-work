// サイドバーを生成する関数

function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar bg-light';

    const ul = document.createElement('ul');
    ul.className = 'nav flex-column';

    const items = [
        { href: './html/takao/takao.html', text: '医療分野', active: true },
        { href: './html/naoki/naoki.html', text: '教育分野', active: false },
        { href: './html/iwata/iwata.html', text: '防災分野', active: false },
    ];

    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        if (item.active) a.classList.add('active');
        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    sidebar.appendChild(ul);
    return sidebar;
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');
    sidebarContainer.appendChild(createSidebar());
});
