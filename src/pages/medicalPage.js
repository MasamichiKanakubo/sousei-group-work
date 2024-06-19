document.addEventListener('DOMContentLoaded', () => {
  // Create and set the main container
  const container = document.createElement('div');
  container.className = 'container';

  // Create the navbar
  const navbar = document.createElement('nav');
  navbar.className = 'navbar navbar-expand-lg navbar-light bg-light';
  const navbarBrand = document.createElement('a');
  navbarBrand.className = 'navbar-brand';
  navbarBrand.href = '#';
  navbarBrand.textContent = '認知工学の研究調査';
  navbar.appendChild(navbarBrand);

  const navbarToggler = document.createElement('button');
  navbarToggler.className = 'navbar-toggler';
  navbarToggler.type = 'button';
  navbarToggler.setAttribute('data-toggle', 'collapse');
  navbarToggler.setAttribute('data-target', '#navbarNav');
  navbarToggler.setAttribute('aria-controls', 'navbarNav');
  navbarToggler.setAttribute('aria-expanded', 'false');
  navbarToggler.setAttribute('aria-label', 'Toggle navigation');
  const togglerIcon = document.createElement('span');
  togglerIcon.className = 'navbar-toggler-icon';
  navbarToggler.appendChild(togglerIcon);
  navbar.appendChild(navbarToggler);

  const navbarCollapse = document.createElement('div');
  navbarCollapse.className = 'collapse navbar-collapse';
  navbarCollapse.id = 'navbarNav';

  const navbarNav = document.createElement('ul');
  navbarNav.className = 'navbar-nav';

  const navItem1 = document.createElement('li');
  navItem1.className = 'nav-item active';
  const navLink1 = document.createElement('a');
  navLink1.className = 'nav-link';
  navLink1.href = '../../index.html';
  navLink1.innerHTML = 'ホーム <span class="sr-only">(current)</span>';
  navItem1.appendChild(navLink1);

  const navItem2 = document.createElement('li');
  navItem2.className = 'nav-item';
  const navLink2 = document.createElement('a');
  navLink2.className = 'nav-link';
  navLink2.href = '#';
  navLink2.textContent = 'ダッシュボード';
  navItem2.appendChild(navLink2);

  const navItem3 = document.createElement('li');
  navItem3.className = 'nav-item';
  const navLink3 = document.createElement('a');
  navLink3.className = 'nav-link';
  navLink3.href = '#';
  navLink3.textContent = '設定';
  navItem3.appendChild(navLink3);

  navbarNav.appendChild(navItem1);
  navbarNav.appendChild(navItem2);
  navbarNav.appendChild(navItem3);
  navbarCollapse.appendChild(navbarNav);
  navbar.appendChild(navbarCollapse);

  container.appendChild(navbar);

  // Create the hospital section
  const hospitalDiv = document.createElement('div');
  hospitalDiv.className = 'hospital';
  const hospitalHeader = document.createElement('h1');
  hospitalHeader.textContent = '医療分野';
  hospitalDiv.appendChild(hospitalHeader);

  container.appendChild(hospitalDiv);

  // Create the first content section
  const medicalRecordHeader = document.createElement('h2');
  medicalRecordHeader.className = 'medical-record';
  medicalRecordHeader.textContent = '電子カルテのユーザビリティ';
  container.appendChild(medicalRecordHeader);

  const recordDiv = document.createElement('div');
  recordDiv.className = 'record1';
  recordDiv.textContent = '電子カルテの使いやすさを向上させるためのインターフェースデザイン研究';
  container.appendChild(recordDiv);

  const container1 = document.createElement('div');
  container1.className = 'container-1';

  const text1 = document.createElement('div');
  text1.className = 'text-1';
  const text1Header = document.createElement('h4');
  text1Header.textContent = 'タイトル';
  const text1Paragraph = document.createElement('p');
  text1Paragraph.textContent = 'ここに説明文を入れます。';
  text1.appendChild(text1Header);
  text1.appendChild(text1Paragraph);

  const image1 = document.createElement('div');
  image1.className = 'image-1';
  const img1 = document.createElement('img');
  img1.src = 'https://ferret-one.akamaized.net/images/6193821c0431b1121450550d/original.jpeg?utime=1637057052';
  img1.alt = '説明画像';
  image1.appendChild(img1);

  container1.appendChild(text1);
  container1.appendChild(image1);
  container.appendChild(container1);

  // Create the second content section
  const surgeryHeader = document.createElement('h2');
  surgeryHeader.className = 'surgery';
  surgeryHeader.textContent = '臨床意思決定支援システム';
  container.appendChild(surgeryHeader);

  const container2 = document.createElement('div');
  container2.className = 'container-1';

  const text2 = document.createElement('div');
  text2.className = 'text-1';
  const text2Header = document.createElement('h4');
  text2Header.textContent = 'タイトル';
  const text2Paragraph = document.createElement('p');
  text2Paragraph.textContent = 'ここに説明文を入れます。';
  text2.appendChild(text2Header);
  text2.appendChild(text2Paragraph);

  const image2 = document.createElement('div');
  image2.className = 'image-1';
  const img2 = document.createElement('img');
  img2.src = 'https://be-nurse.com/wp-content/uploads/2016/08/%E6%84%8F%E6%80%9D%E6%B1%BA%E5%AE%9A%E6%94%AF%E6%8F%B4%E3%81%A8%E3%81%AF.jpg';
  img2.alt = '説明画像';
  image2.appendChild(img2);

  container2.appendChild(text2);
  container2.appendChild(image2);
  container.appendChild(container2);

  document.body.appendChild(container);
});
