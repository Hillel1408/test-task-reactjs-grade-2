$(document).ready(function () {
    $('.slider__slick').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

const sliderBtn = document.querySelectorAll('.slider__slick-btn');
const sliderTitle = document.querySelectorAll('.slider__slick-title');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupText = document.querySelector('.popup__content-text');
const priceBlock = document.querySelector('.popup__content-block');
const modalTitle = document.querySelector('.popup__content-title span');
const modalImg = document.querySelector('.popup__content-imgWrap');

const text = [
    `
        <p>Its our first step towards finding your style and building your perfect wardrobe.</p><p>First, I ask you to fill in a small questionnaire. It helps me to understand your life. After all, every person is unique. And you. You're very special, I'm telling you for sure.</p>
        <p>Armed with your questionnaire and my knowledge, and experience accumulated over the years, I'll help you find your style.</p>
        <p>In the meeting, I evaluate what you already have in your wardrobe. We analyze your body type together. And when you go to the store next time, you'll have no hesitation over cuts and styles you should pay attention to.</p>
        <p>I show you how to style what you already have in your wardrobe, create new outfits with all your clothes, and update them to look brand new.</p>
        <p>Then I prepare a list of what can be added to your wardrobe during your next shopping. Our shopping list will consist entirely of things that match everything in your wardrobe.</p>
    `,
    `
        <p>It's a perfect combo to complete your overhaul. However, the service can also go independently. First, we have a consultation, where we together determine the goals and objectives of our future shopping.</p>
        <p>Then we arrange an appointment (virtual or in-store, whichever works best for you). Afterward, we head to the amazing world of beauty and fashion. Trust me, we’ll have a great time, no matter what type of consultation you choose.</p>
        <p>The whole shopping process is highly productive because I do pre-shopping (when a stylist goes to stores to research the assortment in advance) for you on arrival. We’ll immediately go to a particular place where we can implement all our plans.</p>
        <p>Surely, I'll teach you how to add new items to your wardrobe and style what we've already bought.</p>
        <p>And no doubt, I provide all my customers with additional services. For example, feel free to text me after shopping. I'll give you advice on your wardrobe update questions.</p>
    `,
    `
        <p>Pick this option if you're eager to get the best of all possible straight away. Want to find out what clothing style suits you best? And what should you pay attention to in the stores? Want to find your unique style?</p>
        <p>LookBook is a presentation consisting of fashion tips to ensure you always look stylish, with the best silhouettes for your body type, colors, textures, and prints. It is the answer to the eternal questions: “What to wear?” and “Where to buy?”. The presentation provides all the shopping recommendations, looks, desired capsules, helping hand to choose a brand, and your fashion DNA.</p>
        <p>I won't write a paragraph: “For whom?” because I am sure, every woman needs a LookBook.</p>
        <p>As always, I provide all my customers with additional services. For example, feel free to text me after getting your presentation. I'll give you advice on presentation analysis and your wardrobe update questions.</p>
    `,
    `
        <p>Based on this principle, stylists do work with stars and celebrities. It is a comprehensive approach to creating a wardrobe that’s uniquely yours and helping your style development.</p>
        <p>The annual subscription offers 4 closet checks and 4 personal shopping sessions (for each season of the year). Thus, all the services listed above, and SMS support throughout the year on any style and personal wardrobe question.</p>
    `,
    `
        <p>Every woman requires basic clothes, so she can mix and match them with the rest of her wardrobe. Searching for the “philosopher's stone”, we're encountering TikTok and Pinterest capsules. However, they don't work.</p>
        <p>And the answer is simple — EACH GIRL HAS HER FASHION BASICS.<br>
        The basic wardrobe is completely individual and depends on different factors: lifestyle, preferences, budget, fashion style, and much more. Let's simplify your life and create your basics made up of pieces that suit you best.</p>
        <p>Your essentials will be yours only, unique and beloved.
        To create your essentials, we have a consultation, then we prepare together for the creation of your future basic wardrobe. After the session, I send comprehensive instruction, which takes into account all your features and wishes.</p>
    `,
    `
        <p>Это наш первый шаг на пути формирования личного стиля и построения идеального гардероба.</p>
        <p>Сначала я предложу тебе заполнить небольшую анкету. Это позволит мне понять твою жизнь. Ведь каждая из нас — индивидуальна. И ты. Ты — совершенно особенная, точно говорю. </p>
        <p>Вооружившись этой анкетой и своими знаниями и опытом, накопленными за  годы работы, я приду помочь найти твой стиль.</p>
        <p>В день встречи я оценю, что уже есть в твоём гардеробе. Мы вместе проведем анализ фигуры, и у тебя не будет сомнений в том, на какие фасоны и стили стоит обратить внимание при следующем походе в магазин. </p>
        <p>Я покажу, как стилизовать то, что у тебя уже есть, как создавать из этого новые наряды и обновлять вещи, чтобы они выглядели свежо</p>
        <p>После я составлю список того, что ты сможешь добавить в свой гардероб на ближайшем шопинге. Наш шопинг-лист будет полностью состоять из вещей, которые сочетаются со всем в твоём гардеробе.</p>
    `,
    `
        <p>Это идеальное комбо для завершения разбора. Но услуга может идти и отдельно. Сначала проводится консультация, на которой мы вместе определяем цели и задачи будущего шопинга.</p>
        <p>Дальше мы договариваемся о встрече (онлайн или оффлайн — как удобнее), после чего отправляемся в потрясающий мир моды и красоты. Поверь, мы прекрасно проведём время, какой бы формат ты не выбрала.</p>
        <p>Весь шопинг проходит максимально продуктивно, потому что я провожу пре-шопинг (это когда стилист отправляется сначала в магазины для исследования ассортимента) и только потом туда приезжаешь ты. Мы сразу идём именно в то место, в котором сможем реализовать все планы.</p>
        <p>В день встречи я оценю, что уже есть в твоём гардеробе. Мы вместе проведем анализ фигуры, и у тебя не будет сомнений в том, на какие фасоны и стили стоит обратить внимание при следующем походе в магазин. </p>
        <p>Конечно же, я покажу, как стилизовать то, что мы уже купили и дополнить новинками свой гардероб.</p>
        <p>Конечно, всем моим клиентам полагаются дополнительные услуги. Например, после шопинга смело пишите мне и я проконсультирую по всем вопросам, вытекающим из обновления гардероба.</p>
    `,
    `
        <p>Это выбор для тех, кто любит всё лучшее и сразу. Хочешь раз и навсегда понять, какие вещи тебе подходят и на что стоит обращать внимание в магазинах? Хочешь найти свой собственный стиль?</p>
        <p>Это выбор для тех, кто любит всё лучшее и сразу. Хочешь раз и навсегда понять, какие вещи тебе подходят и на что стоит обращать внимание в магазинах? Хочешь найти свой собственный стиль?</p>
        <p>Я не хочу писать пункт: «Для кого?», потому что уверена, что у каждой женщины должен быть LookBook.</p>
        <p>Как и раньше, всем моим клиентам полагаются дополнительные услуги. Например, после оформления презентации смело пишите мне и я проконсультирую по всем вопросам, вытекающим из обновления гардероба или разбора презентации.</p>
    `,
    `
        <p>Именно по такому принципу работают стилисты со звёздами и селебрити. Это комплексный подход к формированию своего стиля и уникального вектора гардероба.</p>
        <p>Годовой абонемент включает в себя 4 разбора гардероба и 4 шопинг сопровождения (на каждый сезон года). То есть, все, перечисленные услуги выше, и SMS-поддержка в течение года по любому вопросу стиля и личного гардероба.</p>
    `,
    `
        <p>Каждая из нас мечтает о базовых вещах, которые будут сочетаться со всем остальным гардеробом и друг с другом. В поисках такого «философского камня» мы рассматриваем капсулы в ТикТок и Пинтерест, не понимая, почему же они не подходят именно нам.<br>
        А ответ прост — потому что БАЗА У КАЖДОЙ ДЕВУШКИ СВОЯ.<br>
        Базовый гардероб полностью индивидуален и зависит от уймы факторов: образ жизни, предпочтения, бюджет, стилевое направление и многое другое.</p>
    `,
    `
        <p>Це наш перший крок на шляху формування особистого стилю та побудови ідеального гардероба.</p>
        <p>Спочатку я запропоную тобі заповнити невелику анкету. Це дозволить мені зрозуміти твоє життя. Адже кожна з нас — індивідуальна. І ти. Ти — абсолютно особлива, точно кажу.</p>
        <p>Озброївшись цією анкетою і своїми знаннями та досвідом, накопиченими за роки роботи, я прийду допомогти знайти твій стиль.</p>
        <p>У день зустрічі я оціню, що вже є у твоєму гардеробі. Ми разом проведемо аналіз фігури, і у тебе не буде сумнівів у тому, на які фасони й стилі варто звернути увагу під час наступного походу в магазин.</p>
        <p>Я покажу, як стилізувати те, що у тебе вже є, як створювати з цього нове вбрання та оновлювати речі, щоб вони мали свіжий вигляд.</p>
        <p>Після я складу список того, що ти зможеш додати у свій гардероб на найближчому шопінгу. Наш шопінг-лист буде повністю складатися з речей, які поєднуються з усім у твоєму гардеробі.</p>
    `,
    `
        <p>Це ідеальне комбо для завершення розбору. Але послуга може йти й окремо. Спочатку проводиться консультація, на якій ми разом визначаємо цілі та завдання майбутнього шопінгу.</p>
        <p>Далі ми домовляємося про зустріч (онлайн або офлайн — як зручніше), після чого вирушаємо в приголомшливий світ моди та краси. Повір, ми чудово проведемо час, який би формат ти не обрала.</p>
        <p>Весь шопінг проходить максимально продуктивно, бо я проводжу пре-шопінг (це коли стиліст вирушає спершу в магазини для дослідження асортименту) і тільки потім туди приїжджаєш ти.<br><br>
        Ми одразу йдемо саме в те місце, в якому зможемо реалізувати всі плани.</p>
        <p>Звичайно ж, я покажу, як стилізувати те, що ми вже купили, і доповнити новинками свій гардероб.</p>
        <p>Звичайно, всім моїм клієнтам надаються додаткові послуги. Наприклад, після шопінгу сміливо пишіть мені і я проконсультую з усіх питань, що випливають з оновлення гардероба.</p>
    `,
    `
        <p>Це вибір для тих, хто любить все найкраще й одразу. Хочеш раз і назавжди зрозуміти, які речі тобі пасують і на що варто звертати увагу в магазинах? Хочеш знайти свій власний стиль?</p>
        <p>LookBook — це презентація із загальними порадами щодо твого стилю, відповідних силуетів, кольорів, текстур, принтів. Це та сама відповідь на вічне запитання: «Що вдягнути?» і «Де купити?». У презентації зібрані всі рекомендації щодо шопінгу, образів, бажаних капсул, вибору брендів і ДНК твого стилю.</p>
        <p>Я не хочу писати пункт: «Для кого?», бо впевнена, що в кожної жінки має бути LookBook.</p>
        <p>Як і раніше, всім моїм клієнтам надаються додаткові послуги. Наприклад, після оформлення презентації сміливо пишіть мені і я проконсультую з усіх питань, що випливають з поновлення гардероба або розбору презентації.</p>
    `,
    `
        <p>Саме за таким принципом працюють стилісти із зірками та селебріті. Це комплексний підхід до формування свого стилю та унікального вектора гардероба..</p>
        <p>Річний абонемент містить 4 розбори гардероба і 4 шопінг супроводи (на кожен сезон року). Тобто, всі, перераховані послуги вище, і SMS-підтримка протягом року з будь-якого питання стилю і особистого гардероба.</p>
    `,
    `
        <p>Кожна з нас мріє про базові речі, які поєднуватимуться з усім рештою гардероба та одна з одною. У пошуках такого «філософського каменю» ми розглядаємо капсули в ТікТок і Пінтерест, не розуміючи, чому ж вони не підходять саме нам.</p>
        <p>А відповідь проста: тому що БАЗА У КОЖНОЇ ДІВЧИНИ СВОЯ.<br>
        Базовий гардероб повністю індивідуальний і залежить від безлічі чинників: спосіб життя, вподобання, бюджет, стильовий напрямок і багато іншого.<br>
        Я пропоную спростити завдання для кожної та скласти свою базу з моделей, які точно підійдуть саме тобі.</p>
        <p>Твій набір буде тільки твоїм, неповторним і улюбленим.<br><br>
        Для створення бази під ключ ми проводимо консультацію, після якої ми разом готуємося до майбутнього створення базового гардероба.<br>
        Після консультації я надсилаю готову інструкцію, в якій враховані всі твої особливості та побажання.<br>
        </p>
    `,
];

const price = [
    'price: 180 USD',
    'price: 180 USD',
    'Price: 260 USD',
    'Price: 1250 USD instead of 1450 USD',
    'Price: 120 USD',
    'Стоимость: 6500 грн',
    'Стоимость: 6500 грн',
    'Стоимость: 9500 грн',
    'Стоимость: 45000 грн вместо 52000 грн',
    'Стоимость: 4500 грн ',
    'вартість: 6500 грн ',
    'Віртість: 6500 грн ',
    'вартість: 9500 грн ',
    'Вартість: 45000 грн замість 52000 грн ',
    'Вартість: 4500 грн ',
];

const title = [
    'Wardrobe overhaul virtual/in-store',
    'Personal shopping virtual/in-store',
    'PersonalLook Book',
    'Annual subscription virtual/in-store',
    'Wardrobe Capsule virtual',
    'Разбор гардероба online/offline',
    'Шоппинг сопровождение online/offline',
    'Персональный Look Book',
    'Годовой абонемент online/offline',
    'База под ключ online',
    'Розбір гардероба online/offline',
    'Шопінг супровід online/offline',
    'Персональний Look Book',
    'Річний абонемент online/offline',
    'База під ключ online',
];

const img = [
    `
        <img src="./img/img9.jpg" alt="">
        <img src="./img/img10.jpg" alt="">
        <img src="./img/img11.jpg" alt="">
    `,
    `
        <img src="./img/img12.jpg" alt="">
        <img src="./img/img13.jpg" alt="">
        <img src="./img/img14.jpg" alt="">
    `,
    `
        <img src="./img/img15.jpg" alt="">
        <img src="./img/img16.jpg" alt="">
        <img src="./img/img17.jpg" alt="">
    `,
    `
        <img src="./img/img18.jpg" alt="">
        <img src="./img/img19.jpg" alt="">
        <img src="./img/img20.jpg" alt="">
    `,
    `
        <img src="./img/img21.jpg" alt="">
        <img src="./img/img22.jpg" alt="">
        <img src="./img/img23.jpg" alt="">
    `,
    `
        <img src="./img/img9.jpg" alt="">
        <img src="./img/img10.jpg" alt="">
        <img src="./img/img11.jpg" alt="">
    `,
    `
        <img src="./img/img12.jpg" alt="">
        <img src="./img/img13.jpg" alt="">
        <img src="./img/img14.jpg" alt="">
    `,
    `
        <img src="./img/img15.jpg" alt="">
        <img src="./img/img16.jpg" alt="">
        <img src="./img/img17.jpg" alt="">
    `,
    `
        <img src="./img/img18.jpg" alt="">
        <img src="./img/img19.jpg" alt="">
        <img src="./img/img20.jpg" alt="">
    `,
    `
        <img src="./img/img21.jpg" alt="">
        <img src="./img/img22.jpg" alt="">
        <img src="./img/img23.jpg" alt="">
    `,
    `
        <img src="./img/img9.jpg" alt="">
        <img src="./img/img10.jpg" alt="">
        <img src="./img/img11.jpg" alt="">
    `,
    `
        <img src="./img/img12.jpg" alt="">
        <img src="./img/img13.jpg" alt="">
        <img src="./img/img14.jpg" alt="">
    `,
    `
        <img src="./img/img15.jpg" alt="">
        <img src="./img/img16.jpg" alt="">
        <img src="./img/img17.jpg" alt="">
    `,
    `
        <img src="./img/img18.jpg" alt="">
        <img src="./img/img19.jpg" alt="">
        <img src="./img/img20.jpg" alt="">
    `,
    `
        <img src="./img/img21.jpg" alt="">
        <img src="./img/img22.jpg" alt="">
        <img src="./img/img23.jpg" alt="">
    `,
];

const func = (e) => {
    const index = e.target.dataset.id;

    popupText.innerHTML = '';
    popupText.innerHTML = text[index];

    priceBlock.innerHTML = '';
    priceBlock.innerHTML = price[index];

    modalTitle.innerHTML = '';
    modalTitle.innerHTML = title[index];

    modalImg.innerHTML = '';
    modalImg.innerHTML = img[index];

    popup.classList.toggle('open');
    document.body.classList.toggle('lock');
};

sliderBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
        func(e);
    });
});

sliderTitle.forEach((item) => {
    item.addEventListener('click', (e) => {
        func(e);
    });
});

popupClose.addEventListener('click', () => {
    popup.classList.toggle('open');
    document.body.classList.toggle('lock');
});

const menu = document.querySelector('.header__list');
const button = document.querySelector('.header__nav-icon');
const body = document.querySelector('.body');

button.onclick = function () {
    menu.classList.toggle('active');
    button.classList.toggle('active');
    body.classList.toggle('lock');
    const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    menu.style.top = `${90 - bodyScrollTop}px`;
    menu.style.height = `${window.innerHeight - bodyScrollTop}px`;
};

const headerNavLinks = document.querySelectorAll('.header__list-link');
headerNavLinks.forEach((item) => {
    item.addEventListener('click', () => {
        button.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.remove('lock');
    });
});
