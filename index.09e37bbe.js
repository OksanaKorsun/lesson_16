function t(t){return t&&t.__esModule?t.default:t}var i;i=JSON.parse('[{"id":1,"img":"https://static.dnipro-m.ua/cache/products/4878/catalog_origin_269592.jpg","name":"Шуруповерт","price":150,"description":"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{"id":3,"img":"https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg","name":"Шліфмашина","price":1299,"description":"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{"id":4,"img":"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg","name":"Пила","price":11049,"description":"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{"id":5,"img":"https://static.dnipro-m.ua/cache/products/2300/catalog_origin_261037.jpg","name":"Рівень","price":897,"description":"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},{"id":6,"img":"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_270253.jpg","name":"Тример","price":3699,"description":"Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."},{"id":7,"img":"https://static.dnipro-m.ua/cache/products/6483/catalog_origin_270227.jpg","name":"Мотокоса","price":11049,"description":"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур\'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{"id":8,"img":"https://static.dnipro-m.ua/cache/products/2741/catalog_origin_271775.jpg","name":"Генератор","price":10890,"description":"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}]');var c;c=JSON.parse('{"LS_PRODUCTS":"Basket products"}');var a;const s=null!==(a=JSON.parse(localStorage.getItem(t(c).LS_PRODUCTS)))&&void 0!==a?a:[],e={list:document.querySelector(".js-list")};e.list.insertAdjacentHTML("beforeend",t(i).map((({price:t,name:i,img:c,id:a,description:s})=>`\n    <li data-id="${a}" class="product-card js-product">\n        <img src="${c}" alt="${i}" class="product-img">\n        <h2 class="product-title">${i}</h2>\n        <p class="product-description">${s}</p>\n        <p class="product-price">${t} грн</p>\n        <button class="product-add-btn js-add">Add to basket</button>\n    </li>`)).join("")),e.list.addEventListener("click",(function(a){if(!a.target.classList.contains("js-add"))return;const e=a.target.closest(".js-product"),o=Number(e.dataset.id),r=t(i).find((({id:t})=>t===o)),n=s.findIndex((({id:t})=>t===o));-1===n?(r.qty=1,s.push(r)):s[n].qty+=1;localStorage.setItem(t(c).LS_PRODUCTS,JSON.stringify(s))}));const o=new Map;function r(t){o.has(t)?o.set(t,o.get(t)+1):o.set(t,1)}r("item1"),r("item2"),r("item1"),console.log(o);
//# sourceMappingURL=index.09e37bbe.js.map
