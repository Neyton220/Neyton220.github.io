const data = [
  [
    2,
    3, 
    5, 
    3, 
    2, 
    6, 
    5, 
    8
  ],
  [
    1000, 
    200, 
    1500, 
    1700, 
    3400, 
    3200, 
    2000, 
    3000
  ],
]

function calc() {
  let typeSite = +prompt('Какой тип сайта хотите?\n 1. Визитка\n 2. Интернет-магазин\n 3. Коммерческий сайт', '');
  let adaptive = +prompt('Адаптивность\n 1. Адаптивный\n 2. Не адаптивный', '');
  let design = +prompt('Дизайн\n 1. Свой\n 2. Не свой\n 3. Зеленый', '');

  let price = 0;
  let deadline = 0;

  switch (typeSite) {
    case 1:
      typeSite = 0;
      break;
    case 2:
      typeSite = 1;
      break;
    case 3: 
      typeSite = 2;
      break;
  }

  switch (adaptive) {
    case 1:
      adaptive = 3;
      break;
    case 2:
      adaptive = 4;
      break;
  }

  switch (design) {
    case 1:
      design = 5;
      break;
    case 2:
      design = 6;
      break;
    case 3:
      design = 7;
      break;
    default: design = alert("ты даун");
  }

  deadline = data[0][typeSite] + data[0][adaptive] + data[0][design];
  price = data[1][typeSite] + data[1][adaptive] + data[1][design];

  alert(`Цена: ${price} рублёв. \nВремя: ${deadline} днёв.` );

}

calc();