import { menu } from './db.js';

// HTML'den gelenler
var menuArea = document.getElementById('menu-area');

// menü dizisindeki her bir obje için
// bir kart oluştur ve onu ekrana bas
function displayMenu(menuItems) {
  // dizideki herbir eleman  için kart html'İ oluşturma
  let displayMenu = menuItems.map(
    (item) => `
       <div id="card" class="d-flex gap-3">
        <img
          class="shadow rounded"
          src=${item.img}
        />
        <div>
          <div class="d-flex gap-5 text-nowrap">
            <h5>${item.title}</h5>
            <p>$ ${item.price}</p>
          </div>
          <p>
            ${item.desc}
          </p>
        </div>
      </div>
    `
  );

  //   diziyi stringe çevirme ve virgülleri kaldırma
  displayMenu = displayMenu.join(' ');

  //   oluşturduğumuz kartları HTML'e gönderme
  menuArea.innerHTML = displayMenu;
}

// sayfanın yüklendiği anda kartalrı
// ekran basıcak fonksiyonu çalıştır
document.addEventListener('DOMContentLoaded', () =>
  displayMenu(menu)
);

// filter-btn class'ına sahip elemanları çağırma
const buttons = document.querySelectorAll('.filter-btn');

// butonların hepsine olay izleyicisi ekledik
buttons.forEach((btn) => {
  btn.addEventListener('click', filterCategory);
});

// butonlara tıklanınca çalışır
function filterCategory(olay) {
  // hangi kategoriye göre filtrleyeceğimiz belirliyoruz
  const selectedCategory = olay.target.dataset.id;

  //   elemanları kategori değerine göre filtreleme
  const filtredMenu = menu.filter(
    (item) => item.category === selectedCategory
  );

  if (selectedCategory === 'all') {
    // hepsi seçildiyse o zaman bütün diziyi ekran bas
    displayMenu(menu);
  } else {
    // filtrelenmiş yeni diziyi ekrana basma
    displayMenu(filtredMenu);
  }
}
