export interface MockDataObject {
  _id: string;
  index: number;
  isActive: boolean;
  balance: string;
  age: number;
  grupo: string;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  about: string;
  registered: string;
  favoriteFruit: string;
}


export const MockData: MockDataObject[] = [
  {
    _id: '5f2b68935cb3800061c47c28',
    index: 0,
    isActive: true,
    balance: '$2,638.92',
    age: 31,
    grupo: 'blue',
    name: {
      first: 'Melinda',
      last: 'Williams'
    },
    company: 'ISOSURE',
    email: 'melinda.williams@isosure.ca',
    about: 'Officia reprehenderit sunt ea dolore id mollit. Dolore laborum Lorem sunt ipsum anim ex labore voluptate culpa cillum. Dolore commodo anim elit dolor ex adipisicing voluptate minim laboris irure.',
    registered: 'Sunday, April 5, 2020 10:54 PM',
    favoriteFruit: 'strawberry'
  },
  {
    _id: '5f2b6893d45ceb99003c8c72',
    index: 1,
    isActive: true,
    balance: '$3,688.76',
    age: 35,
    grupo: 'brown',
    name: {
      first: 'Hilda',
      last: 'Craft'
    },
    company: 'MAZUDA',
    email: 'hilda.craft@mazuda.tv',
    about: 'Sit aliqua non in laboris. Duis reprehenderit labore commodo voluptate ea excepteur pariatur laborum incididunt dolore. Nostrud sunt dolore velit do ipsum commodo. Duis non enim nisi veniam tempor deserunt. Occaecat reprehenderit quis magna excepteur magna. Sint laboris deserunt anim ad est veniam esse quis consequat est magna nisi minim.',
    registered: 'Saturday, November 2, 2019 9:35 PM',
    favoriteFruit: 'banana'
  },
  {
    _id: '5f2b689327274ede69e274e8',
    index: 2,
    isActive: false,
    balance: '$3,515.50',
    age: 38,
    grupo: 'brown',
    name: {
      first: 'Mabel',
      last: 'Bray'
    },
    company: 'SCENTY',
    email: 'mabel.bray@scenty.com',
    about: 'Incididunt occaecat nostrud sint amet reprehenderit sint ut cillum ut nostrud. Aliquip nulla irure exercitation exercitation eiusmod non quis veniam laboris mollit commodo veniam. Ullamco nisi officia adipisicing nisi ad sint quis voluptate sint nisi cillum et nulla laborum. Ea commodo magna veniam ex. Amet sit duis consectetur sunt quis reprehenderit irure labore magna duis. Est voluptate do adipisicing consequat eiusmod velit non irure.',
    registered: 'Saturday, January 30, 2016 10:37 PM',
    favoriteFruit: 'strawberry'
  },
  {
    _id: '5f2b6893dc5212376d87edbf',
    index: 3,
    isActive: true,
    balance: '$1,497.13',
    age: 38,
    grupo: 'green',
    name: {
      first: 'Dunlap',
      last: 'Jones'
    },
    company: 'SQUISH',
    email: 'dunlap.jones@squish.net',
    about: 'Pariatur esse sit fugiat cupidatat elit excepteur. Sunt excepteur dolor deserunt ut officia cillum. Tempor duis fugiat quis minim dolore. Culpa sunt minim commodo mollit cillum Lorem irure proident dolor. Eiusmod mollit fugiat aute do ex dolore sunt.',
    registered: 'Saturday, November 29, 2014 6:55 PM',
    favoriteFruit: 'apple'
  },
  {
    _id: '5f2b689354c6688f407ae00f',
    index: 4,
    isActive: false,
    balance: '$1,805.19',
    age: 37,
    grupo: 'green',
    name: {
      first: 'Janine',
      last: 'Michael'
    },
    company: 'QUIZKA',
    email: 'janine.michael@quizka.info',
    about: 'Adipisicing dolore Lorem laborum pariatur nulla deserunt ea enim consectetur. Laborum commodo sint ad eu voluptate enim ad ad aute magna nostrud sint ipsum. Elit dolore sit aute anim sunt. Esse cillum adipisicing veniam esse Lorem mollit nulla irure dolor consequat excepteur nostrud. In sit esse ut et et voluptate deserunt excepteur anim anim. Amet nisi dolore eiusmod ad elit non officia eiusmod incididunt occaecat sunt eu esse. Eu reprehenderit ullamco excepteur sunt irure.',
    registered: 'Thursday, May 7, 2020 4:22 AM',
    favoriteFruit: 'banana'
  },
  {
    _id: '5f2b6893f5ebb2d2a7f6c023',
    index: 5,
    isActive: true,
    balance: '$2,035.23',
    age: 22,
    grupo: 'blue',
    name: {
      first: 'Hewitt',
      last: 'Bass'
    },
    company: 'PORTICO',
    email: 'hewitt.bass@portico.name',
    about: 'Est exercitation est irure ullamco adipisicing fugiat laborum magna qui nulla velit. Aliquip qui minim aliqua exercitation minim nulla nisi. Anim Lorem deserunt dolor tempor consequat nostrud. Eu veniam cillum incididunt ipsum exercitation sint labore minim dolor eu sint non nostrud aliquip. Cupidatat excepteur nisi elit quis voluptate eu minim incididunt id occaecat duis sit labore.',
    registered: 'Thursday, November 24, 2016 4:33 PM',
    favoriteFruit: 'strawberry'
  }
];
