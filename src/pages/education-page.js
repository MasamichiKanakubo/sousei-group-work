document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content-container');

    if (!contentContainer) {
        console.error('Content container not found');
        return;
    }

    const sections = {
        home: `
            <section id="home">
                <h2>ホーム</h2>
                <p>教育シミュレーションへようこそ！ここでは、教育現場でのシミュレーションを体験することができます。</p>
            </section>
        `,
        about: `
            <section id="about">
                <h2>概要</h2>
                <p>このシミュレーションは、教育のさまざまなシナリオを模擬体験するためのものです。教師や学生がリアルな状況を体験し、対処方法を学ぶことができます。</p>
            </section>
        `,
        simulation: `
            <section id="simulation">
                <h2>シミュレーション</h2>
                <div id="simulation-container">
                    <p>シミュレーションを開始するには、以下のボタンをクリックしてください。</p>
                    <button id="start-simulation">シミュレーション開始</button>
                    <div id="simulation-result"></div>
                </div>
            </section>
        `,
        contact: `
            <section id="contact">
                <h2>お問い合わせ</h2>
                <p>質問やフィードバックがございましたら、以下のフォームからご連絡ください。</p>
                <form>
                    <label for="name">名前:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">メールアドレス:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">メッセージ:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">送信</button>
                </form>
            </section>
        `
    };

    function loadContent(section) {
        contentContainer.innerHTML = sections[section];
    }

    document.querySelectorAll('#navbar-container a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.getAttribute('data-target');
            loadContent(target);
        });
    });

    // 初期ロード
    loadContent('home');
});
