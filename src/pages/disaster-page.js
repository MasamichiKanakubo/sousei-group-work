document.addEventListener('DOMContentLoaded', () => {
    // メインコンテナの作成
    const container = document.createElement('div');
    container.className = 'container';

    const header = document.createElement('h1');
    header.textContent = '認知工学の防災分野への応用';
    container.appendChild(header);

    document.body.appendChild(container);

    // セクション1の作成
    const section1Header = document.createElement('h2');
    section1Header.textContent = '1. 災害情報システムへの応用';
    document.body.appendChild(section1Header);

    const box1 = createBox('modal1', '情報掲示とアラームシステム', '災害発生時の情報を、直感的に理解できる形式で提供し、緊急度や対応方法を迅速に伝える。');
    document.body.appendChild(box1);

    const box2 = createBox('modal2', 'ダッシュボードと情報統合', '各種データを統合して視覚化することで、災害対応に必要な情報を一元化し、意思決定を支援する。');
    document.body.appendChild(box2);

    // モーダル1の作成
    const modal1 = createModal('modal1', '情報掲示とアラームシステムの応用例', '緊急アラートアプリ: Yurekuru Call は,日本で利用される地震速報アプリで、ユーザに緊急地震速報をリアルタイムで提供します。視覚と音声の両方でアラートを出し、自身の規模や予測される揺れの強さを直感的に伝えます。', './img/iwata/IMG_0462.jpg');
    document.body.appendChild(modal1);

    // モーダル2の作成
    const modal2 = createModal('modal2', '災害時の行動指針の強化', '具体的な行動計画と対策を示し、避難や対応の際に適切な行動を取るためのガイドラインを提供します。', './img/iwata/IMG_0463.jpg');
    document.body.appendChild(modal2);

    // セクション2の作成
    const section2Header = document.createElement('h2');
    section2Header.textContent = '2. 避難計画とシュミレーション';
    document.body.appendChild(section2Header);

    const box3 = createBox('modal3', '避難経路の設計', '認知的負荷を減らし、避難行動を支援するために、最適な避難経路と避難所の情報を提供する。');
    document.body.appendChild(box3);

    // モーダル3の作成
    const modal3 = createModal('modal3', '情報掲示とアラームシステム', '', '');
    document.body.appendChild(modal3);

    const box4 = createBox('modal4', 'リアルタイムナビゲーション', '災害時にリアルタイムで避難経路を案内し、混乱を最小限に抑える。');
    document.body.appendChild(box4);

    // モーダル4の作成
    const modal4 = createModal('modal4', '情報掲示とアラームシステム', '災害発生時の情報を、直感的に理解できる形式で提供し、緊急度や対応方法を迅速に伝える。', './img/iwata/IMG_0462.jpg');
    document.body.appendChild(modal4);

    // モーダルの開閉処理
    const boxes = document.querySelectorAll('.box30');
    const modals = document.querySelectorAll('.modal');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const target = box.getAttribute('data-target');
            const modal = document.getElementById(target);
            modal.style.display = 'block';
        });
    });

    modals.forEach(modal => {
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    function createBox(target, title, text) {
        const box = document.createElement('div');
        box.className = 'box30';
        box.setAttribute('data-target', target);

        const boxTitle = document.createElement('div');
        boxTitle.className = 'box-title';
        boxTitle.textContent = title;

        box.appendChild(boxTitle);
        box.appendChild(document.createTextNode(text));

        return box;
    }

    function createModal(id, title, text, imgSrc) {
        const modal = document.createElement('div');
        modal.id = id;
        modal.className = 'modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';

        const modalTitle = document.createElement('div');
        modalTitle.className = 'modal-title';
        modalTitle.textContent = title;

        const modalText = document.createElement('p');
        modalText.textContent = text;

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'サンプル';

        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalText);
        if (imgSrc) modalContent.appendChild(img);

        modal.appendChild(modalContent);

        return modal;
    }
});
