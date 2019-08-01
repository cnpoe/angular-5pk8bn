export namespace StudentsDataService {
  // students = [
  //   {
  //     id: '1',
  //     name: 'Tabitha Lorena',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '2',
  //     name: 'Tracey Luvenia',
  //     therapies: ['speech', 'occupational'],
  //   },
  //   {
  //     id: '3',
  //     name: 'Morris Cera',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '4',
  //     name: 'Brenda Colton',
  //     therapies: ['speech', 'behavioral'],
  //   },
  //   {
  //     id: '5',
  //     name: 'Woodrow Rosemary',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '6',
  //     name: 'Bentley Rusty',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '7',
  //     name: 'Julius Darleen',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '8',
  //     name: 'Sharona Jared',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '9',
  //     name: 'Elenora Debbie',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '10',
  //     name: 'Minnie Missie',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '11',
  //     name: 'Nolan Walker',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '12',
  //     name: 'Raylyn Lyndon',
  //     therapies: ['speech'],
  //   },
  //   {
  //     id: '13',
  //     name: 'Elea Wilmer',
  //     therapies: ['occupational'],
  //   },
  //   {
  //     id: '14',
  //     name: 'Roxanne Lavender',
  //     therapies: ['occupational'],
  //   },
  //   {
  //     id: '15',
  //     name: 'Iggy Lavone',
  //     therapies: ['occupational'],
  //   },
  //   {
  //     id: '16',
  //     name: 'Egbert Thankful',
  //     therapies: ['occupational'],
  //   },
  //   {
  //     id: '17',
  //     name: 'Andrew Murray',
  //     therapies: ['behavioral'],
  //   },
  //   {
  //     id: '18',
  //     name: 'Cindra Tammi',
  //     therapies: ['behavioral'],
  //   },
  //   {
  //     id: '19',
  //     name: 'Maleah Averill',
  //     therapies: ['behavioral'],
  //   },
  //   {
  //     id: '20',
  //     name: 'Kizzy Elyse',
  //     therapies: ['behavioral'],
  //   },
  // ];
  
  const names = [
    'Corrie Conrad',
    'Milla Daugherty',
    'Nicolle Shaw',
    'Skylar Abbott',
    'Jeremiah Connor',
    'Harlan Patel',
    'Elsa Norris',
    'Rosalind Coombes',
    'Mattie Merritt',
    'Aliesha John',
    'Fred Nava',
    'Jensen Hardin',
    'Jasmine Arias',
    'Lacie Thorpe',
    'Lesley Hutton',
    'Marlon Finley',
    'Izzie Salas',
    'Arron Bloom',
    'Yahya Handley',
    'Sienna Mcnamara',
    'Zakary Daniel',
    'Buddy Carrillo',
    'Aoife Humphries',
    'Hana Cobb',
    'Viktoria Byrd',
    'Justine Knott',
    'Simona Carpenter',
    'Ephraim Baxter',
    'Rhiannan Melendez',
    'Nuala Calvert',
    'Bryson Heaton',
    'Leona Ali',
    'Hilda Battle',
    'Nicole Horner',
    'Ramone Mcculloch',
    'Mac Tanner',
    'Koby Major',
    'Stefania Mejia',
    'Evie-May Dunne',
    'Ruqayyah Nicholls',
    'Humphrey Bevan',
    'Lea Marsden',
    'Taliah Lloyd',
    'Isobella Finney',
    'Isaiah Esparza',
    'Misha Delacruz',
    'Ernie Beaumont',
    'Lincoln Glenn',
    'Michalina Mccaffrey',
    'Georgina Bates',
    'Rosalie Shaffer',
    'Vishal Clark',
    'Mikael Casey',
    'Zahrah Matthews',
    'Umaima Lowery',
    'Fatema Rankin',
    'Adrienne Mccray',
    'Caroline Dickens',
    'Duke Barton',
    'Rico Moran',
    'Alicja Moreno',
    'Kerrie Fields',
    'Duncan Higgins',
    'Firat Yates',
    'Sylvia Tate',
    'Alfred Maxwell',
    'Bogdan Halliday',
    'Adrianna Krause',
    'Annabelle Acevedo',
    'Connagh Camacho',
    'Wil Draper',
    'Alaina Allen',
    'Marianna Levine',
    'Angel Haney',
    'Aleesha Mccarthy',
    'Kaison Sinclair',
    'Amara Andersen',
    'Kirstie Fritz',
    'Alana Burton',
    'Sioned Kumar',
    'Humayra Busby',
    'Klara Wilks',
    'Luc Quintana',
    'Karim Ballard',
    'Krisha Olsen',
    'Dave Cantu',
    'Roland Holden',
    'Killian Hatfield',
    'Cristina Jackson',
    'Christina Sears',
    'Hector Freeman',
    'Morgan Bean',
    'Elsie-Rose Sanderson',
    'Tyson Mccann',
    'Shahzaib Roach',
    'Zion Dalton',
    'Maureen Mansell',
    'Kieron Regan',
    'Roksana Parks',
    'Malakai Richards',
    'Roman Hilton',
    'Daniella Hodson',
    'Humera Blankenship',
    'Gertrude Hyde',
    'Glenda Griffith',
    'John Redman',
    'Jonathan Gillespie',
    'Angela Francis',
    'Fraya Johnson',
    'Mila-Rose Mcghee',
    'Darlene Mahoney',
    'Kaleem Bass',
    'Fynley Mcfarlane',
    'Jocelyn Burt',
    'Gabriel Hassan',
    'Beck Morton',
    'Jody Mckay',
    'Kodi Ridley',
    'Ephraim Macleod',
    'Musa Leon',
    'Alyssia Miles',
    'Fay Watkins',
    'Ciaron Hodges',
    'Elijah Rivas',
    'Myla Klein',
    'Sienna Morrison',
    'Liyah Beach',
    'Aditya Barker',
    'Douglas Plant',
    'Ethel Matthams',
    'Otto Leigh',
    'Emilio Ingram',
    'Madelyn Terry',
    'Nadia Buck',
    'Ayat Dixon',
    'Susie Feeney',
    'Tyriq English',
    'Keagan Forbes',
    'Emmy Lopez',
    'Fabian Bolton',
    'Mccauley Norton',
    'Johanna Delacruz',
    'Fabien Hastings',
    'Aamna Becker',
    'Ismael Vang',
    'Salim Morgan',
    'Ranveer Lam',
    'Jaxon Traynor',
    'Julie Read',
    'Chiara Partridge',
    'Mimi Keenan',
    'Sheikh Mcleod',
    'Javan Guevara',
    'Kendall Hensley',
    'Allen Whittaker',
    'Sammy-Jo Pickett',
    'Dilara Moody',
    'Mitchel Sparrow',
    'Macauly Zavala',
    'Salman Martin',
    'Hector Villegas',
    'Imran Delarosa',
    'Shayna Martins',
    'Paul ODoherty',
    'Beth White',
    'Muskaan Reeves',
    'Laibah Jarvis',
    'Lillie-Rose Neville',
    'Sherry Avery',
    'Antoni Calvert',
    'Alyssa Weeks',
    'Emily Nieves',
    'Emilia Reyes',
    'Lacie Reader',
    'Alice Shannon',
    'Sanaa Summers',
    'Samina Villalobos',
    'Lyra Houston',
    'Yusha Whiteley',
    'Derry Chapman',
    'Gianni Daugherty',
    'Tess Macgregor',
    'Aidan Monaghan',
    'Sasha Welch',
    'Amba Amin',
    'Eren Ahmed',
    'Carlos Meadows',
    'Sultan Lucero',
    'Mathew Kearney',
    'Ariah Aldred',
    'Aalia Kaur',
    'Jorden Sharp',
    'Jade Rawlings',
    'Keith Franco',
    'Zunaira Bowers',
    'Dawood Valenzuela',
    'Samiyah Lawson',
    'Shaquille Carty',
    'Ahmet Aguilar',
    'Kuba Pennington',
    'Jaya Rooney',
    'Amna Cousins',
    'Lewis Talbot',
    'Adaline Meza',
    'Iestyn Herrera',
    'Gerrard Butt',
    'Eman Merritt',
    'Jun Harvey',
    'Harleigh Allman',
    'Patryk Hook',
    'Aryaan Chamberlain',
    'Riyad Edmonds',
    'Aishah Beattie',
    'Neve Vang',
    'Danika Whitfield',
    'Abubakr Stanton',
    'Darlene OQuinn',
    'Selin Peck',
    'Jeffery Tomlinson',
    'Joss Austin',
    'Landon Mcmanus',
    'Essa Mackenzie',
    'Kabir Munoz',
    'Dario Mccallum',
    'Rose Benjamin',
    'Arlene Millar',
    'Zacharia Mcclure',
    'Rhia Rosa',
    'Alena Shepherd',
    'Genevieve Farrow',
    'Nayla Foster',
    'Szymon Reid',
    'Lennon Gilmore',
    'Rubi Hough',
    'Hana Morris',
    'Beatriz Gould',
    'Reece Herring',
    'Ailsa Calhoun',
    'Julian Bowden',
    'Leandro Collins',
    'Vincent Sanderson',
    'Aroush Bauer',
    'Nida Clayton',
    'Eliana Powell',
    'Efan Currie',
    'Lori Heath',
    'Aqib Zamora',
    'Herman Floyd',
    'Shakir Ali',
    'Cade Fischer',
  ];

  const therapies = [
    'speech',
    'occupational',
    'behavioral',
  ];

  function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min) + min);
    return num;
  }

  function pickRandomIndex(items, min=0, max1) {
    const max = max1 || items.length;
    return randomNumber(min, max);
  }

  function pickRandom(items, minIndex=0, maxIndex1=0) {
    const maxIndex = maxIndex1 !== 0 ? maxIndex1 : items.length;
    return items[pickRandomIndex(items, minIndex, maxIndex)];
  }

  function pickSome(items, pickRatio=0.5) {
    return items.filter((item) => {
      return Math.random() < pickRatio;
    });
  }

  export function generate(count=50) {
    const students = []
    for (let ii = 0; ii < count; ii++) {
      students.push({
        id: (ii+1).toString(),
        name: pickRandom(names),
        therapies: pickSome(therapies, 0.33),
      });
    }
    return students;
  }
}
