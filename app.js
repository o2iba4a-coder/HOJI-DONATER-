const products=[
  {id:1,diamonds:100,price:10},
  {id:2,diamonds:310,price:25},
  {id:3,diamonds:520,price:40},
  {id:4,diamonds:1060,price:75},
  {id:5,diamonds:2180,price:145},
  {id:6,diamonds:5600,price:350},
  {id:7,diamonds:10000,price:600}
];

let selectedProduct=null;
const productsEl=document.getElementById("products");
const orderEl=document.getElementById("order");
const selectedEl=document.getElementById("selected");
const playerIdEl=document.getElementById("playerId");
const messageEl=document.getElementById("message");

function renderProducts(){
  productsEl.innerHTML="";
  products.forEach(p=>{
    const el=document.createElement("div");
    el.className="product";
    el.innerHTML=`<div class="diamonds">💎 ${p.diamonds}</div><div class="price">${p.price} TJS</div><button class="buy">Купить</button>`;
    el.addEventListener("click",()=>selectProduct(p));
    productsEl.appendChild(el);
  });
}

function selectProduct(p){
  selectedProduct=p;
  selectedEl.innerHTML=`<strong>💎 ${p.diamonds} алмазов</strong><br><br>💰 ${p.price} TJS`;
  orderEl.classList.remove("hidden");
  orderEl.scrollIntoView({behavior:"smooth"});
  messageEl.textContent="";
}

document.getElementById("createOrder").addEventListener("click",()=>{
  const id=playerIdEl.value.trim();
  if(!id){messageEl.textContent="Введите Free Fire ID.";return;}
  if(!/^[0-9]+$/.test(id)){messageEl.textContent="ID должен содержать только цифры.";return;}
  messageEl.textContent="Проверка введённых данных прошла успешно. На следующем этапе подключим настоящий backend и создание заказа.";
});

renderProducts();
