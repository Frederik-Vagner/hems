import { IBike } from '@hems/interfaces';

export const bikes: IBike[] = [
  {
    bikeId: '0aea1d21-c862-44fc-92b7-b8c87db76dac',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('10/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'James',
    room: '211',
    reservedBy: 'Guest',
    bikeFormCompleted: true,
    comments: 'Prepare bike helmet',
    completedAt: new Date(
      new Date('10/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('10/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '23cb5c08-66be-400d-bdbc-7db2872b7930',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Stévina',
    room: '328',
    reservedBy: 'ye',
    bikeFormCompleted: true,
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd1099410-24e7-42b9-a505-a5c13a705857',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lài',
    room: '118',
    reservedBy: 'xc',
    bikeFormCompleted: null,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0fe76378-7b1f-4cd8-acfb-40b0662456f4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naéva',
    room: '742',
    reservedBy: 'bm',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5b0c5562-71ba-4570-9de1-a0cf417a7751',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélanie',
    room: '116',
    reservedBy: 'uy',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '06f1951a-8cf4-456b-b113-5a5a768b77bf',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méng',
    room: '858',
    reservedBy: 'mc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '95d18649-ec0d-43a0-b793-1880cefc9ecf',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('3/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gérald',
    room: '826',
    reservedBy: 'qp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '280bc238-699a-426c-9193-7c6b702edadc',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Clélia',
    room: '780',
    reservedBy: 'dm',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2648fb88-b9b2-452e-88bf-faf6ac412c7a',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Dù',
    room: '622',
    reservedBy: 'il',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6f3ab05b-9b24-4d55-b0f9-3406d9294060',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Stéphanie',
    room: '588',
    reservedBy: 'cs',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'abd6326a-1f43-4496-a47d-42e70e3c8fda',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Andréanne',
    room: '179',
    reservedBy: 'jv',
    bikeFormCompleted: true,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9a4888af-88ca-4842-9201-935d1d31ed29',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lài',
    room: '505',
    reservedBy: 'nx',
    bikeFormCompleted: false,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8578f968-a2b5-4028-9b5a-5881b7f30dac',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Lóng',
    room: '717',
    reservedBy: 'ky',
    bikeFormCompleted: false,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b2213960-a950-4a7d-9ac6-69f6ab392765',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eléa',
    room: '880',
    reservedBy: 'ti',
    bikeFormCompleted: null,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '02911186-5c28-41ba-8f44-af5eca8e42de',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Séréna',
    room: '277',
    reservedBy: 'pd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd030a296-c2c5-405b-bda0-1765c4977351',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Adèle',
    room: '926',
    reservedBy: 'ey',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7ac8946c-9eb5-4b5d-abbf-87240cd98437',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Stéphanie',
    room: '058',
    reservedBy: 'sg',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c61b7224-e282-47b4-ba87-c9d1ca5e86a9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Adèle',
    room: '776',
    reservedBy: 'mq',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '65d9e1a0-2556-42e7-a5dd-6ad1e6aba0f7',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaël',
    room: '248',
    reservedBy: 'hq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ee1412e8-2044-4ebb-bf0b-39593ccd215d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léonie',
    room: '395',
    reservedBy: 'tf',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dba887c1-9da3-4790-9635-e0815f348877',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Daphnée',
    room: '024',
    reservedBy: 'js',
    bikeFormCompleted: true,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6773d8e6-f287-4e43-9187-7222c0e50c67',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kévina',
    room: '362',
    reservedBy: 'rc',
    bikeFormCompleted: null,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f573629a-c343-4e45-b03d-7ebd25b063f7',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Loïca',
    room: '747',
    reservedBy: 'az',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9f8ba82a-6895-4574-adf6-2c69495c6c62',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kévina',
    room: '244',
    reservedBy: 'pk',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '056332c1-ca80-406b-9ef6-01648ed6caf6',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Gaëlle',
    room: '880',
    reservedBy: 'ni',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '957a38c7-4138-43da-8332-7787e5a1f0f4',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Adélaïde',
    room: '543',
    reservedBy: 'vr',
    bikeFormCompleted: true,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a3baee7c-d5d8-4d65-b54c-57cfabacd2e8',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aí',
    room: '484',
    reservedBy: 'vz',
    bikeFormCompleted: null,
    comments: 'In quis justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fcf2de5e-e9c6-4fc4-a9fc-4681a90d9364',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèsa',
    room: '022',
    reservedBy: 'dl',
    bikeFormCompleted: null,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dd54f5f1-2e08-4783-afcd-e9240929f0b9',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Irène',
    room: '070',
    reservedBy: 'xd',
    bikeFormCompleted: true,
    comments: 'Nulla facilisi.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '55a86842-93bc-4970-88cc-81ebe9e55158',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélinda',
    room: '932',
    reservedBy: 'tu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4404ac6b-93e0-4ea0-bf5f-79130173d641',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Fèi',
    room: '010',
    reservedBy: 'ri',
    bikeFormCompleted: true,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '211d44df-6aca-4f14-8031-d0991f420a9f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Cunégonde',
    room: '542',
    reservedBy: 'xq',
    bikeFormCompleted: false,
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c94c9aa1-5d87-48a0-a3a9-8abb0604653b',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Dù',
    room: '516',
    reservedBy: 'gw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e999b217-96d1-4166-b7b9-a905da89e63f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maéna',
    room: '889',
    reservedBy: 'jp',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c91523db-f349-489f-805f-96e15501a1bd',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cécilia',
    room: '774',
    reservedBy: 'vc',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b07e3788-724b-49a9-aa47-7c1386e3e09f',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Méline',
    room: '369',
    reservedBy: 'sh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0a39fcd0-4ad4-48db-ab83-4b7f55b401ee',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Aurélie',
    room: '923',
    reservedBy: 'us',
    bikeFormCompleted: true,
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '57a19318-8221-44c1-b5bd-684ae3c436ed',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Pò',
    room: '614',
    reservedBy: 'ct',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8cc0f51b-3910-4664-a899-e49dd54f828a',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Hélèna',
    room: '344',
    reservedBy: 'ay',
    bikeFormCompleted: false,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0d9fa94f-01ec-4ca0-a48e-1b15e7758b0f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Görel',
    room: '485',
    reservedBy: 'mv',
    bikeFormCompleted: false,
    comments: 'Phasellus sit amet erat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b66abb98-0693-4bca-a8fa-e5b569ed4fb1',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Médiamass',
    room: '398',
    reservedBy: 'by',
    bikeFormCompleted: true,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a1a14d44-62ac-42b8-b466-6fda396bda13',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Simplifiés',
    room: '781',
    reservedBy: 'yi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4288ef47-b074-4385-98a2-6afd8cb3e79c',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méline',
    room: '131',
    reservedBy: 'ce',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3cfbf0c9-92e1-42a8-8189-becf497b1769',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Liè',
    room: '542',
    reservedBy: 'uy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'be7c7943-da92-4d26-a9b2-0f49d8e467d4',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Märta',
    room: '566',
    reservedBy: 'et',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'eb903868-af61-42f1-a2ae-57a1422e77ed',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Stévina',
    room: '347',
    reservedBy: 'kv',
    bikeFormCompleted: true,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a5e5605c-0848-4f83-b94f-e48d4887d894',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Kévina',
    room: '505',
    reservedBy: 'ay',
    bikeFormCompleted: true,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd7a15f63-0435-45e8-91cb-e7a71850c65f',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '902',
    reservedBy: 'ub',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e5014003-62b2-4fd3-9501-eb89240f027c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mårten',
    room: '418',
    reservedBy: 'cz',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b81af1df-8f15-4013-9f7c-589e1f308bc7',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Joséphine',
    room: '198',
    reservedBy: 'xz',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bae320f1-e0a5-476b-8ce2-ae694a224da9',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïté',
    room: '309',
    reservedBy: 'fw',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bb63a261-ce75-4911-83c4-d4068af73701',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Néhémie',
    room: '422',
    reservedBy: 'zg',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ca133e6c-fe22-4bd2-9dee-cabc06e81d9c',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Anaé',
    room: '552',
    reservedBy: 'vr',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '19f6713e-f9be-4724-9e22-0207d86a56b9',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Annotés',
    room: '648',
    reservedBy: 'gu',
    bikeFormCompleted: null,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1af39a84-7e92-432c-b17c-1d4cde516616',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérénice',
    room: '226',
    reservedBy: 'aj',
    bikeFormCompleted: false,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b05a7c21-dfc1-41be-8da5-8fcfb200a8ba',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïwenn',
    room: '302',
    reservedBy: 'fv',
    bikeFormCompleted: false,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '35e7fbd1-a63b-433d-948b-ea828221940f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaëlle',
    room: '829',
    reservedBy: 'ng',
    bikeFormCompleted: false,
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f3de8649-44d0-4c79-9877-99e6e94f3294',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marylène',
    room: '508',
    reservedBy: 'tb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '86526e82-9dd2-4a6d-a56c-5cc33c5e3622',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eloïse',
    room: '918',
    reservedBy: 'br',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bac6e9f0-03a4-4117-be22-fa0ff155a07f',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Hélèna',
    room: '952',
    reservedBy: 'qx',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f9cf7dd7-0d1e-4ba1-9556-547482dd95df',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Renée',
    room: '342',
    reservedBy: 'cx',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '713b13c8-deeb-4c3f-8b8e-b28bc43de8ee',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Célia',
    room: '602',
    reservedBy: 'cq',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '570f9c17-92c9-4e15-87ff-56771ca1b8d5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mårten',
    room: '356',
    reservedBy: 'in',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('3/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4a85dc1b-83c8-4704-9a0b-0867e38cde18',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naëlle',
    room: '892',
    reservedBy: 'ug',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e53e7c24-b522-4223-8e9f-564394ee2d88',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('3/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naéva',
    room: '200',
    reservedBy: 'iz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0244af37-ba7b-411d-aa65-b3ad2922a80b',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Örjan',
    room: '015',
    reservedBy: 'gn',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '781af0dd-47e3-4afa-a21f-e8239739e7f5',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Léonore',
    room: '644',
    reservedBy: 'fg',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '503ae933-9eb0-45c4-ba1c-8029c7509910',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '368',
    reservedBy: 'sd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3125b461-980a-4ecb-92ff-4dab153b726c',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Chloé',
    room: '294',
    reservedBy: 'pd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '47f62b3a-3a61-4f5a-a317-e21780d2d3c0',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Camélia',
    room: '130',
    reservedBy: 'ej',
    bikeFormCompleted: false,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4e036daf-92dd-4c61-827a-7247295f0a21',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Agnès',
    room: '655',
    reservedBy: 'fs',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1e86a533-c4e9-41d8-9d71-d971e82e0fda',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maïlis',
    room: '230',
    reservedBy: 'af',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c9e40b87-773e-474e-aade-aecb4809b677',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaëlle',
    room: '643',
    reservedBy: 'sk',
    bikeFormCompleted: true,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ec89f01a-61c9-45c6-a267-7e944f088f4f',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Hélène',
    room: '554',
    reservedBy: 'rv',
    bikeFormCompleted: false,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7347aa95-e5d8-43f5-9e0e-f467103c1be9',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélys',
    room: '846',
    reservedBy: 'bo',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f76a124b-8df2-4f3c-93c6-d889981138b0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Illustrée',
    room: '353',
    reservedBy: 'xy',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ec7b6bf8-2208-4a36-a23d-60e785aedcc7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méghane',
    room: '262',
    reservedBy: 'wx',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'acf1999f-3c23-4c4c-ba4a-fe8dde8cf17d',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Håkan',
    room: '907',
    reservedBy: 'eg',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1d26283e-624b-4581-816d-e95461d91707',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Intéressant',
    room: '459',
    reservedBy: 'pp',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c14a9c6f-ca62-4396-ad36-2d7afd821f77',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eugénie',
    room: '670',
    reservedBy: 'gt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bb8716b4-4a70-41ab-a57c-da94961547cd',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pål',
    room: '977',
    reservedBy: 'zs',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3570512c-79b1-4955-bd5b-07d23d596e2a',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lén',
    room: '737',
    reservedBy: 'yo',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a823d1a3-c20c-4813-bca9-cddea5145b9f',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Estève',
    room: '530',
    reservedBy: 'ps',
    bikeFormCompleted: true,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ba325abf-f9e1-4353-8b47-7ed817fa5428',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kévina',
    room: '494',
    reservedBy: 'jx',
    bikeFormCompleted: false,
    comments: 'In blandit ultrices enim.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e6532a0e-24ca-4a9a-8fdb-cc04ad7ee215',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aí',
    room: '878',
    reservedBy: 'pu',
    bikeFormCompleted: true,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '47774605-c61c-46e6-bfb7-6e3147571a32',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léane',
    room: '330',
    reservedBy: 'fy',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e745bb2f-eac4-4f47-bdd0-2bd71902f52a',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Frédérique',
    room: '388',
    reservedBy: 'wr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '46d161d6-cc00-4108-a690-fb7aba67efbc',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Camélia',
    room: '026',
    reservedBy: 'of',
    bikeFormCompleted: false,
    comments: 'Aenean auctor gravida sem.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4534c955-70f9-4d69-bfab-545c3860a709',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Judicaël',
    room: '100',
    reservedBy: 'gb',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6c95206b-1c34-40fe-8c2f-582657db1dd6',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Nuó',
    room: '418',
    reservedBy: 'cl',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a92bf694-4f50-4d8f-aae4-a86daaf8bb96',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Sélène',
    room: '864',
    reservedBy: 'ov',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '154b259b-f585-4e13-b80e-10c018cba4b5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aimée',
    room: '170',
    reservedBy: 'kt',
    bikeFormCompleted: true,
    comments:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8866e0fc-bde2-4a20-914c-bb635b7c2b84',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaétane',
    room: '700',
    reservedBy: 'if',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '113efc5f-6807-4254-aeaf-09b6bb88aac9',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Esbjörn',
    room: '394',
    reservedBy: 'hi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5ac79ba7-5eb6-4d5a-9c1b-380958b031f0',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Crééz',
    room: '978',
    reservedBy: 'bo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '468f6a08-dfdf-49d1-944e-a2496efcec1d',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Nélie',
    room: '363',
    reservedBy: 'vd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '68d06528-c772-4daa-ac21-a0571079560e',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Néhémie',
    room: '950',
    reservedBy: 'as',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '59c369ac-41bc-4134-85d1-75e011b0fe9e',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Géraldine',
    room: '721',
    reservedBy: 'yv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '16cd9353-dee8-4882-8bc9-a2365a2400dd',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Chloé',
    room: '823',
    reservedBy: 'rx',
    bikeFormCompleted: true,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0ee71209-c061-4b5f-95ff-f77ae5b02ece',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Måns',
    room: '657',
    reservedBy: 'qe',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '93e2325f-4ecc-4383-8fcd-88b17a2307b6',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Rébecca',
    room: '066',
    reservedBy: 'xd',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4027060e-5cdb-494b-8156-a32c009b8709',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Cléopatre',
    room: '972',
    reservedBy: 'iu',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1ad34c0d-0afd-4784-b815-b5f5702104a7',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Kuí',
    room: '255',
    reservedBy: 'nh',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c4f511b4-44c0-4d00-89dd-26e0fd1719f5',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Médiamass',
    room: '801',
    reservedBy: 'tc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '71aeb296-d539-4b73-a014-b4c5ac3476ca',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-thérèse',
    room: '309',
    reservedBy: 'oy',
    bikeFormCompleted: false,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'af60017c-793a-4c6f-8410-f2b0ca72b510',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Judicaël',
    room: '014',
    reservedBy: 'jo',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dd8a171a-3ccb-4a02-80e3-88176def3892',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Mà',
    room: '684',
    reservedBy: 'en',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cc644c9c-aa92-455c-b827-e0464760ceac',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Eliès',
    room: '617',
    reservedBy: 'cr',
    bikeFormCompleted: null,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f65d64cf-6561-4c34-a669-8f16ee7a0649',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('3/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Noémie',
    room: '553',
    reservedBy: 'sa',
    bikeFormCompleted: false,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '83959d17-6959-4750-96fb-611752270785',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélanie',
    room: '472',
    reservedBy: 'fl',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '783c1c35-d5c6-4613-989d-da76797cfb5b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cécile',
    room: '724',
    reservedBy: 'sf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a4c7bebf-89a6-498f-8f6d-e47f64e08499',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïwenn',
    room: '054',
    reservedBy: 'xq',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c3c3d2ea-8e85-4c26-a780-00128e303fb3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kallisté',
    room: '774',
    reservedBy: 'ij',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cbb60a6b-348a-46d8-9b13-a9d18cf32e4c',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Aí',
    room: '635',
    reservedBy: 'ka',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '920fd6ca-9ee7-4e0a-a92d-fbaa037d575a',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Loïca',
    room: '228',
    reservedBy: 'ex',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'edfb857e-d580-4044-bcb7-fbac288bd7c2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréanne',
    room: '169',
    reservedBy: 'lo',
    bikeFormCompleted: true,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dd78406e-4f82-448f-b9b0-2020825380ea',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Loïca',
    room: '552',
    reservedBy: 'qz',
    bikeFormCompleted: null,
    comments: 'Nunc nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2e71576b-9cee-4200-97bf-c73d76adb2ca',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lucrèce',
    room: '899',
    reservedBy: 'jd',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c0f97d43-86dc-464d-b4e6-b521a1f10e4c',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cléopatre',
    room: '599',
    reservedBy: 'gu',
    bikeFormCompleted: null,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd3425527-6858-498a-bfcc-e0a960dede49',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Judicaël',
    room: '432',
    reservedBy: 'sv',
    bikeFormCompleted: false,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '10c9a09a-f7ab-4632-8baf-4e5128d6b12c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Cécile',
    room: '863',
    reservedBy: 'wz',
    bikeFormCompleted: false,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2ca09a73-3bf8-40c9-8c9a-27f7ffafa16f',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aloïs',
    room: '125',
    reservedBy: 'uu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4cc9fdaa-459a-45d8-922a-3fc01e8d9299',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Görel',
    room: '644',
    reservedBy: 'oj',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ef3ac803-30ee-4f9f-b70e-5bd12a111dac',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Bénédicte',
    room: '905',
    reservedBy: 'hx',
    bikeFormCompleted: false,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0a22dedb-3df9-409c-8190-ca8f2864fd91',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ophélie',
    room: '992',
    reservedBy: 'py',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd8156d9f-c534-41f9-b8f5-8c16ad5b6014',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Nadège',
    room: '304',
    reservedBy: 'rd',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '075b955d-cbff-487e-944d-15e551e0761f',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Méline',
    room: '425',
    reservedBy: 'dn',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '61f1513f-138e-436e-aeb2-78cf100792d1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Géraldine',
    room: '750',
    reservedBy: 'du',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7b1c494b-c848-459f-90b6-61c09cdbafbc',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Bérénice',
    room: '173',
    reservedBy: 'mw',
    bikeFormCompleted: true,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd2c69f93-621e-452a-8afa-4af5c2e5eb8a',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélanie',
    room: '020',
    reservedBy: 'tm',
    bikeFormCompleted: true,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'de77d8c2-db45-4a51-86b5-88cddcf4351d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Fèi',
    room: '871',
    reservedBy: 'nl',
    bikeFormCompleted: null,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '66981e11-b4f9-4c97-a707-01486cc89b5c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cunégonde',
    room: '732',
    reservedBy: 'sr',
    bikeFormCompleted: false,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2d0b512e-6711-49e1-8c57-fdf0be827bb1',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Stévina',
    room: '670',
    reservedBy: 'xe',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '23a88787-c1e7-48bb-9580-e8c48ff67b13',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Marie-noël',
    room: '899',
    reservedBy: 'nj',
    bikeFormCompleted: true,
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1d223c13-7422-4e2a-8abd-fcc724d59cef',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Bérengère',
    room: '220',
    reservedBy: 'yf',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8d783b4c-53b4-4cb1-a291-3863ef93fddc',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('3/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Michèle',
    room: '175',
    reservedBy: 'do',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2b44a6f8-fc5b-4d27-9a88-77d7eb2c514c',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Inès',
    room: '402',
    reservedBy: 'nr',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f553be23-ed7e-43e6-a629-cac1864fb050',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Rachèle',
    room: '001',
    reservedBy: 'wh',
    bikeFormCompleted: false,
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '578a1227-6c05-4035-9076-9bf3c461985d',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Maïly',
    room: '381',
    reservedBy: 'lb',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9c0351b7-1cd2-49dc-b857-1cb310572a93',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kù',
    room: '995',
    reservedBy: 'ga',
    bikeFormCompleted: false,
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '464d3bb7-b673-4d07-8ebd-9496bdbad75d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cinéma',
    room: '019',
    reservedBy: 'vj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a0643fcd-c430-45bc-bcce-55e8d8d67105',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Publicité',
    room: '322',
    reservedBy: 'xw',
    bikeFormCompleted: true,
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ec2671b3-b6e7-4e89-88e7-0e6196a796f7',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Fèi',
    room: '488',
    reservedBy: 'bi',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '243179df-9056-407c-bef5-3598c46b441e',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gwenaëlle',
    room: '022',
    reservedBy: 'cw',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd83ce3bf-d474-4abc-b98d-f650ee70038a',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mårten',
    room: '988',
    reservedBy: 'of',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '87b2ca8a-2983-4753-bdd9-9916dc8607cc',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léane',
    room: '827',
    reservedBy: 'ag',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '482577ca-3b2d-4b61-acf8-46402b26f23b',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Angèle',
    room: '245',
    reservedBy: 'ue',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f908f1fe-be37-463c-9e40-8658b7d7aaaa',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naëlle',
    room: '656',
    reservedBy: 'xh',
    bikeFormCompleted: null,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '65c3db33-f01f-47d8-aa44-fc027d1416ee',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kévina',
    room: '552',
    reservedBy: 'xi',
    bikeFormCompleted: false,
    comments: 'Nulla justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7627a7e8-5bc7-4b5c-839f-fd62a2e5cafd',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Lauréna',
    room: '110',
    reservedBy: 'ou',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3e3a71dd-e1f4-4c70-8948-26994e8ab3eb',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Maëlle',
    room: '996',
    reservedBy: 'gt',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '83e6743b-322a-4bea-bfa7-60a930d5226c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Véronique',
    room: '282',
    reservedBy: 'mf',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4eef053f-6c60-431d-8e1d-08828187a65e',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Dafnée',
    room: '287',
    reservedBy: 'it',
    bikeFormCompleted: true,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '49350c96-21a8-44d3-bb6e-7f730abd475d',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Bécassine',
    room: '843',
    reservedBy: 'kq',
    bikeFormCompleted: false,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '57db4209-4284-4588-8961-480dae331a29',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Félicie',
    room: '406',
    reservedBy: 'rs',
    bikeFormCompleted: null,
    comments: 'Pellentesque eget nunc.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3b97a862-bcad-4f01-91af-14f11e70769c',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Laurélie',
    room: '115',
    reservedBy: 'ly',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'da66fc10-ce06-4f60-ab11-493818e24106',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérangère',
    room: '823',
    reservedBy: 'yz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '32b80b74-3265-4fff-bc10-ee8b457de74b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Rébecca',
    room: '935',
    reservedBy: 'fr',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ec38b1aa-5b2f-4d79-b281-409894cd3b60',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Salomé',
    room: '947',
    reservedBy: 'vm',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9f27d3c3-9c86-42f9-a60c-d76a0bcf2d05',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Aimée',
    room: '935',
    reservedBy: 'fa',
    bikeFormCompleted: false,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4e1bf3c0-7426-4950-bc67-8006d4cb8b1c',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Stéphanie',
    room: '686',
    reservedBy: 'qc',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '91793860-1b40-4ebc-8d3f-cb255c3a56ea',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mylène',
    room: '345',
    reservedBy: 'ec',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '89d02fe2-8bc0-4af0-bae1-932fc7770b8e',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mahélie',
    room: '553',
    reservedBy: 'hp',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '64daf832-9a04-462c-91a2-2d0d42393e63',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Måns',
    room: '617',
    reservedBy: 'hu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '266214e7-5a83-4068-bb5e-3e1fccf0a057',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Annotée',
    room: '714',
    reservedBy: 'zr',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '847c8645-9f42-4d6e-acc6-29dc617f1991',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '421',
    reservedBy: 'jm',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b566325d-b592-4174-be21-8e3deffd02fd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélys',
    room: '166',
    reservedBy: 'nw',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '61619654-f8ae-430c-9909-b7a0cdc8be89',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Illustrée',
    room: '567',
    reservedBy: 'uy',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '000d6c6a-2365-4a55-990f-5d27f4aaa3f1',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Jú',
    room: '228',
    reservedBy: 'qo',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9e816668-f7b7-415f-aee7-8a46a26069f9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélanie',
    room: '587',
    reservedBy: 'xu',
    bikeFormCompleted: true,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd9059a7e-1e9c-4a00-a930-f1eaaffbc1a5',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Wá',
    room: '990',
    reservedBy: 'qi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2710cdba-291a-4d9c-b8e4-35f2b6c8b2c3',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Cinéma',
    room: '896',
    reservedBy: 'yl',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3a0587e8-f72e-424a-ac10-e072418c6743',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaëlle',
    room: '369',
    reservedBy: 'oo',
    bikeFormCompleted: true,
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd18fdac3-b255-4da7-8252-96db9be655ea',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Solène',
    room: '059',
    reservedBy: 'zt',
    bikeFormCompleted: true,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7f966546-a68b-4850-a5d8-d54637263d1d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('3/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Régine',
    room: '459',
    reservedBy: 'hc',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5da590ae-3b6c-4131-b7e6-cbd130865a21',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélia',
    room: '750',
    reservedBy: 'ja',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1e5472e5-ecc7-4cad-bae3-a7793ef52e66',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Åsa',
    room: '900',
    reservedBy: 'mt',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd31096f1-428e-4f58-96e5-45e8c6880e97',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïté',
    room: '461',
    reservedBy: 'oi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2a898384-e52b-4ed6-8290-80ac4cd510d5',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Méline',
    room: '268',
    reservedBy: 'gq',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '45d72d32-95b9-4635-89d2-f90d05c9ca83',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Séréna',
    room: '264',
    reservedBy: 'bd',
    bikeFormCompleted: true,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd102ab0f-11c2-4ecd-96c5-d36777e25d17',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Naëlle',
    room: '179',
    reservedBy: 'yn',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c95fd822-844b-4c8e-b77b-d3d4a4899413',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Sélène',
    room: '673',
    reservedBy: 'kt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ca7cb540-6ed6-4ad0-aaf4-3f223e7d8571',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Michèle',
    room: '836',
    reservedBy: 'rz',
    bikeFormCompleted: null,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b04f4cea-bec0-41a2-b8a7-cc14881b5053',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Clémentine',
    room: '914',
    reservedBy: 'qf',
    bikeFormCompleted: null,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e9e31f04-c362-40b7-9b70-b481dac60ead',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Océane',
    room: '214',
    reservedBy: 'fz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '00f3d2eb-7ee8-49f5-9766-3db1f536aaa6',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méryl',
    room: '255',
    reservedBy: 'cq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '36a8f114-05eb-470f-b871-46f9aa1dbd7e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérangère',
    room: '621',
    reservedBy: 'uh',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '19a77727-1020-42bf-bafd-ccc191e549cd',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaël',
    room: '248',
    reservedBy: 'cu',
    bikeFormCompleted: true,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2748def6-ac7d-44c2-84f4-997c6f9d4b97',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Intéressant',
    room: '531',
    reservedBy: 'ot',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '540fbaab-c3d3-464e-8b70-0034fc24b887',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Esbjörn',
    room: '612',
    reservedBy: 'jw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '542688bf-2dd1-4fdc-94d5-f5d9eb17b978',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Gaëlle',
    room: '082',
    reservedBy: 'df',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7ac63250-8993-43d1-a560-f15913abb216',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Valérie',
    room: '983',
    reservedBy: 'hj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '69245f7d-64c2-4756-9e09-1e429600a2d3',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Noëlla',
    room: '624',
    reservedBy: 're',
    bikeFormCompleted: false,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bd833f2e-4863-40fd-a4e8-09f5d8fcde85',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Rébecca',
    room: '596',
    reservedBy: 'qk',
    bikeFormCompleted: true,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ea6a3934-43de-4b68-8f76-17a5efaa78a0',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Yénora',
    room: '878',
    reservedBy: 'zh',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '61c9f90a-1ab1-44a4-bf0c-71cf93f60d20',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lài',
    room: '660',
    reservedBy: 'yj',
    bikeFormCompleted: true,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'af0761b0-e1e9-4f1f-9a86-aaa88225601a',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Táng',
    room: '439',
    reservedBy: 'rj',
    bikeFormCompleted: true,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b7af27f0-bbc4-444e-a947-fa7f220c0dab',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mà',
    room: '854',
    reservedBy: 'ky',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5a7b5fb1-186a-405e-b4dc-21200bc83dbe',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Océane',
    room: '491',
    reservedBy: 'gf',
    bikeFormCompleted: true,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1c572869-c7ba-409b-a541-624bfa38ac94',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Hélène',
    room: '667',
    reservedBy: 'rw',
    bikeFormCompleted: true,
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3b8b7e01-b249-4fe6-b0e4-45c57baaae13',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Annotés',
    room: '571',
    reservedBy: 'gn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'daf776c6-58af-4b80-8696-f7b39fed3516',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Ruì',
    room: '156',
    reservedBy: 'fd',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd533077a-f034-49b9-b430-91caef435e6f',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naéva',
    room: '286',
    reservedBy: 'zf',
    bikeFormCompleted: false,
    comments: 'Duis ac nibh.',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '491a857b-cede-4f91-9de2-4f99fdc3884e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-ève',
    room: '352',
    reservedBy: 'uf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'df30bd89-eeac-4d20-a7ba-91a21f9707bd',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Maïlys',
    room: '673',
    reservedBy: 'fv',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '76271293-2b55-4d44-84b8-c348cb8e6d2c',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Gösta',
    room: '123',
    reservedBy: 'mu',
    bikeFormCompleted: false,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8cb7debb-6b4c-465b-b344-22cbe52bf930',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ruò',
    room: '473',
    reservedBy: 'sx',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dfe70aa5-4048-4bbf-95aa-61ed1e552d4e',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Nadège',
    room: '499',
    reservedBy: 'sb',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd3dfec47-d1b9-4b37-afc1-10fd83b5b1d2',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Gérald',
    room: '799',
    reservedBy: 'jz',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b18b291e-3dc7-42de-a1ad-d457632dcd3a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Daphnée',
    room: '157',
    reservedBy: 'vl',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e63d9c2b-cfb5-4e50-9111-c4887c39d99f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eléonore',
    room: '916',
    reservedBy: 'vi',
    bikeFormCompleted: false,
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7aecbc6a-87e7-48db-aa83-2aa92bdd3518',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Edmée',
    room: '426',
    reservedBy: 'ea',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ce5b015d-33dc-4bcc-b8a0-067824d963b9',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Adèle',
    room: '093',
    reservedBy: 'oy',
    bikeFormCompleted: false,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2cc49257-cfa6-4347-ab25-08e4ce911eef',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '939',
    reservedBy: 'br',
    bikeFormCompleted: true,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '73237d23-323d-4569-b817-24408818e7e7',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Sélène',
    room: '912',
    reservedBy: 'uj',
    bikeFormCompleted: true,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '744ee71b-d582-4f89-a555-28529d86dbd8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léone',
    room: '059',
    reservedBy: 'rr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fee6b88f-6037-4c68-b7bc-4af20737798d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Görel',
    room: '150',
    reservedBy: 'jb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8c911486-2ebd-4af2-8e4d-b347d08e1959',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Noémie',
    room: '413',
    reservedBy: 'yv',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ffd9cd38-5581-4581-9c17-8e00276b4f46',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yénora',
    room: '171',
    reservedBy: 'fv',
    bikeFormCompleted: null,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '15774af5-a901-4b81-b9b8-e23fc1cda71d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Bécassine',
    room: '063',
    reservedBy: 'um',
    bikeFormCompleted: true,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4139ecae-cec6-407b-9d06-9c8acd374e88',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cléa',
    room: '780',
    reservedBy: 'sl',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '979635a2-9b2a-46e8-8445-92736dd6ed2c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Loïca',
    room: '840',
    reservedBy: 'yp',
    bikeFormCompleted: true,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd34398ae-4bde-4e02-b525-97572977e010',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Clémentine',
    room: '495',
    reservedBy: 'iy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '34c7ec0b-4203-4803-8bfd-eecc4684354b',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Intéressant',
    room: '911',
    reservedBy: 'sh',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a055b853-7da0-4daa-8472-e0378b4acd0c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mårten',
    room: '231',
    reservedBy: 'tp',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '48b34393-4035-4fbe-86ed-5ac2a0196191',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlann',
    room: '135',
    reservedBy: 'lw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b21183ce-e164-4a03-a8cc-3891c49a6fb1',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Thérèsa',
    room: '430',
    reservedBy: 'ln',
    bikeFormCompleted: false,
    comments: 'Phasellus sit amet erat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '908e16eb-e9af-4256-8d3d-5cc34711887d',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélinda',
    room: '785',
    reservedBy: 'zb',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c57e38ee-17ac-46fe-b5ad-5786f46d7478',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Mélinda',
    room: '864',
    reservedBy: 'co',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2b6549dd-0ee3-4d09-aaa7-d25f9b967e1c',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eugénie',
    room: '470',
    reservedBy: 'vp',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'da90e01f-c42e-45d2-b9dc-ecd6b57692f4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yè',
    room: '234',
    reservedBy: 'pl',
    bikeFormCompleted: false,
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b42fa5bc-c642-4889-ba48-688364e46c84',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Thérèsa',
    room: '131',
    reservedBy: 'ep',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'de523de1-0f02-47b5-9704-63237b89f2f8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gwenaëlle',
    room: '047',
    reservedBy: 'wi',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '91a955e0-518c-4344-be66-a900b1677df2',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cléa',
    room: '465',
    reservedBy: 'mp',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '14ea8d7c-3632-42c8-a9b2-55f491ca722a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Gérald',
    room: '450',
    reservedBy: 'dq',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '90df70fd-a95d-4bf0-baec-40398780d793',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Kù',
    room: '222',
    reservedBy: 'mc',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '069c6839-6df3-4529-8950-e6d6e640f990',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Nuó',
    room: '829',
    reservedBy: 'he',
    bikeFormCompleted: true,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '27caac64-531f-4aad-bd39-326cca49b3c1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlys',
    room: '015',
    reservedBy: 'ld',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '668931e2-8e9c-47f0-b7ad-a4d2133df450',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Agnès',
    room: '208',
    reservedBy: 'it',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f721787e-19a1-4403-9f5e-1b3fdcaab693',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Jú',
    room: '716',
    reservedBy: 'jo',
    bikeFormCompleted: true,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f84823ee-139d-4e07-918d-3c0e03c65924',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Aí',
    room: '328',
    reservedBy: 'xt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3f6139eb-491c-4e00-8e81-8b12ffac0100',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Åsa',
    room: '470',
    reservedBy: 'gg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '42e3ee87-7288-4757-9f6c-650b906fc5a9',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mégane',
    room: '226',
    reservedBy: 'wj',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e18c8729-6795-4fa1-9f66-c50494ce4c12',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Cunégonde',
    room: '420',
    reservedBy: 'lj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '58f6da5b-94eb-48ac-a632-b651fedf6dd7',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Faîtes',
    room: '017',
    reservedBy: 'lk',
    bikeFormCompleted: true,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '633b01a8-0bf9-4ebb-a8b7-7aa706f8e716',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Bérénice',
    room: '938',
    reservedBy: 'av',
    bikeFormCompleted: false,
    comments: 'Nulla nisl.',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd919ceb7-ec2e-4a7c-a1a7-9f40c530211c',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Ophélie',
    room: '484',
    reservedBy: 'hn',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '30ec5ad6-3f77-40bf-b32f-179c605a405c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('3/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aloïs',
    room: '293',
    reservedBy: 'if',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e364f60a-f03b-467d-8eec-45062ee6ef95',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ruò',
    room: '277',
    reservedBy: 'ws',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8878394f-aaff-44a7-b148-dcea0f29e88c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Noëlla',
    room: '148',
    reservedBy: 'ib',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3d14de37-b4e6-4565-85e6-472dffe03a22',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Hélène',
    room: '475',
    reservedBy: 'vh',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3d7d1137-588b-48a1-b1d6-635ddc3b463a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Eléa',
    room: '151',
    reservedBy: 'hh',
    bikeFormCompleted: false,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f9644636-dd23-46ef-be93-aa0becbbe4d0',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Björn',
    room: '505',
    reservedBy: 'cs',
    bikeFormCompleted: true,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dd6b10c2-798e-436d-8af8-c1c738acf639',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Lài',
    room: '913',
    reservedBy: 'fz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '917fff14-f682-4ef9-a4cd-2cdbc52aad42',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Görel',
    room: '272',
    reservedBy: 'bw',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fb881dc1-7100-4def-b2d4-8dc89b7b7e34',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïwenn',
    room: '581',
    reservedBy: 'az',
    bikeFormCompleted: true,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e1e85449-8163-4c33-b435-47d23e972956',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Célia',
    room: '825',
    reservedBy: 'ji',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '629464c8-3f02-4aec-b882-41f25b9e2c8f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lyséa',
    room: '324',
    reservedBy: 'ku',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f7865e64-17e9-4e54-969e-73061c7c8038',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Zoé',
    room: '826',
    reservedBy: 'ym',
    bikeFormCompleted: false,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b80aad04-a24e-4e1c-a5ce-87cb0383f065',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlann',
    room: '324',
    reservedBy: 'sl',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '77b8c45e-65cd-429a-9c90-f74b75daa92c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélodie',
    room: '539',
    reservedBy: 'fg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f1c69073-2a7c-45a5-8bd1-5324a136f2f5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ráo',
    room: '128',
    reservedBy: 'uf',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '70b9258e-db7b-492a-af27-f0224c27ab9e',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Yè',
    room: '146',
    reservedBy: 'ep',
    bikeFormCompleted: true,
    comments: 'In eleifend quam a odio.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f548a83c-ff8d-49a5-9071-0a5f83d8c337',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maëlle',
    room: '933',
    reservedBy: 'wr',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5178c8f3-72d7-45fc-a4e2-199c7b1b2ce6',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Véronique',
    room: '349',
    reservedBy: 'au',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '57d08df6-b595-4dc7-a175-c53478431290',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lyséa',
    room: '585',
    reservedBy: 'dx',
    bikeFormCompleted: true,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '740edfcf-2970-4abf-bcef-4be20e03451c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yè',
    room: '387',
    reservedBy: 'ul',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ed4b90bd-d4a3-4f81-a7cd-d9c50fedaad6',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Östen',
    room: '704',
    reservedBy: 'pd',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4bc74c90-5922-4118-af21-2c95b013fcac',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Véronique',
    room: '373',
    reservedBy: 'or',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '11c2d50e-7cc6-4053-90f6-bc89b5cbe7a6',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Frédérique',
    room: '496',
    reservedBy: 'bv',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3660c92f-bd00-4255-bc79-f85cef92fdf3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Réservés',
    room: '921',
    reservedBy: 'df',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '88174b43-f61b-490b-ac94-b0e98400a271',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méryl',
    room: '855',
    reservedBy: 'op',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4c8c66a2-9d4f-4e49-b2d6-a803582257b0',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mélinda',
    room: '884',
    reservedBy: 'en',
    bikeFormCompleted: false,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0c543e40-c402-4a35-887b-271412abcc2e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kù',
    room: '749',
    reservedBy: 'ht',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4df3491b-5b4c-41d7-9886-1cb380ac8277',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gösta',
    room: '662',
    reservedBy: 'jz',
    bikeFormCompleted: null,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ad9e8b16-39d3-49c5-b830-71e6cbf3b17c',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Léa',
    room: '255',
    reservedBy: 'lo',
    bikeFormCompleted: true,
    comments: 'Quisque porta volutpat erat.',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '303d25a7-7c3f-4a12-ae31-953745009272',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Estée',
    room: '452',
    reservedBy: 'bn',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '04b21f1a-1236-4cfc-bd56-db553bf2c97f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Hélène',
    room: '249',
    reservedBy: 'te',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dee8249a-1692-4d85-b003-8ab5f3937958',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Tán',
    room: '486',
    reservedBy: 'zj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '15d6745e-7005-4ae9-bc3c-b0728fe9a387',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lài',
    room: '216',
    reservedBy: 'tu',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7418ed07-1384-4b88-950d-b6ae73a6cab1',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Uò',
    room: '685',
    reservedBy: 'tq',
    bikeFormCompleted: true,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '24c5a3bc-3424-4687-85ef-a6d9a1068489',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Laïla',
    room: '634',
    reservedBy: 'lh',
    bikeFormCompleted: false,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5cb140b3-7b4d-43c0-8f16-9a4752217eb6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kallisté',
    room: '744',
    reservedBy: 'qp',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '72116159-da62-4e5c-964e-d07eba942abb',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïté',
    room: '888',
    reservedBy: 'kp',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd9dffb86-31d3-4761-9db4-d3dced8b5baf',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '770',
    reservedBy: 'pi',
    bikeFormCompleted: true,
    comments: 'In quis justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b8536909-8549-48e1-96c1-3a90fabc8a6f',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Eugénie',
    room: '065',
    reservedBy: 'qa',
    bikeFormCompleted: true,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '48ce4afc-39ab-40c4-aafa-4dde031014fe',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaétane',
    room: '367',
    reservedBy: 'gr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('3/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '009699ce-1087-4509-ba9d-7d210810761b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Clélia',
    room: '818',
    reservedBy: 'xb',
    bikeFormCompleted: true,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9ff2b1ff-272d-4ce9-8a90-d562c7b5f9cf',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Nuó',
    room: '130',
    reservedBy: 'ta',
    bikeFormCompleted: false,
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '741c102c-d683-411b-8449-7e41ff267f09',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlla',
    room: '684',
    reservedBy: 'vc',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fc59b37d-f27e-49c3-aae1-677ea5ec5ab2',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bénédicte',
    room: '765',
    reservedBy: 'lh',
    bikeFormCompleted: false,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3eaf2409-cbda-4eca-9ae9-835d694fa6c1',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Océanne',
    room: '171',
    reservedBy: 'of',
    bikeFormCompleted: true,
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a179e120-2698-40c3-a9aa-12d1fb82b3bd',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léandre',
    room: '799',
    reservedBy: 'oj',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'be710832-5143-4b83-b95b-43c0fce54c54',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Björn',
    room: '638',
    reservedBy: 'te',
    bikeFormCompleted: false,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a780b3ec-50b5-4339-9870-eb817ed5532a',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naëlle',
    room: '793',
    reservedBy: 'wh',
    bikeFormCompleted: true,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd6178e3f-6b55-414e-a6f7-abe897a22537',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélia',
    room: '275',
    reservedBy: 'rr',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bd2c4efa-e688-45b9-9928-5b27b0a27e07',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maï',
    room: '096',
    reservedBy: 'ow',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b2309284-7926-41f3-8184-61a6cff0a9e7',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eléa',
    room: '783',
    reservedBy: 'au',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '923cd93c-42db-4f5e-b73b-ba872fc4b45e',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Léonore',
    room: '569',
    reservedBy: 'la',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7e0af74e-5685-4b34-bdf4-72f198079e2e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pénélope',
    room: '552',
    reservedBy: 'ym',
    bikeFormCompleted: false,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ec5f9775-ee0d-4930-860f-2c15559e5d39',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pål',
    room: '688',
    reservedBy: 'sc',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1c0bb5cb-a881-49c0-adae-4f576ea98414',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Amélie',
    room: '533',
    reservedBy: 'jb',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ddcf6868-2bc3-4dad-9bdc-40a2564e3746',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lyséa',
    room: '263',
    reservedBy: 'po',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8541273f-e031-4617-86ac-ea4796ba23ab',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Björn',
    room: '264',
    reservedBy: 'uw',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1cd4533f-1b2a-465e-a3b8-3d5c4c685dff',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Céline',
    room: '752',
    reservedBy: 'bk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '21f72706-4c38-4dcb-b942-deea282712ff',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méline',
    room: '287',
    reservedBy: 'es',
    bikeFormCompleted: null,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '619372a1-7cc9-4dd7-9691-53d42e62d27b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Jú',
    room: '631',
    reservedBy: 'ju',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1e444917-af5b-478e-8e60-e157c98324ce',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Dafnée',
    room: '077',
    reservedBy: 'cu',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2dc1d316-e34b-4143-a05c-472cad0eb579',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Noémie',
    room: '941',
    reservedBy: 'ou',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6d7a9a0d-2cf2-4f7d-8c33-04150c7d2a9b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérangère',
    room: '475',
    reservedBy: 'gj',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '943b4527-9c1b-45be-b0a7-f561f04cc93f',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Almérinda',
    room: '723',
    reservedBy: 'eo',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4549e2e1-b869-48f9-b189-aecb428e5fa9',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Gérald',
    room: '904',
    reservedBy: 'ty',
    bikeFormCompleted: false,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e2edf506-c005-40b0-9785-4cf866a7f5f3',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Audréanne',
    room: '768',
    reservedBy: 'vw',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b34c1b73-eb74-485e-8359-66785dc7afd7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aloïs',
    room: '159',
    reservedBy: 'qj',
    bikeFormCompleted: false,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '42f3fb54-493f-4d40-ae9c-ce628daa5cb0',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Östen',
    room: '653',
    reservedBy: 'ju',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '09cd495e-4813-4575-aa45-375f6415060a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlys',
    room: '399',
    reservedBy: 'pt',
    bikeFormCompleted: false,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '18869f8b-262b-4cd1-ab61-2766bd89a613',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lyséa',
    room: '773',
    reservedBy: 'nu',
    bikeFormCompleted: true,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ed4f351c-de33-478f-b0ca-a53c3c6dc133',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Adélie',
    room: '854',
    reservedBy: 'qp',
    bikeFormCompleted: null,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b4a61fb7-1447-4fa5-95fe-1401294c2b81',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Océane',
    room: '721',
    reservedBy: 'ps',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '70cb60e9-f198-4a2e-8b54-30b94e1e8385',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Laurélie',
    room: '998',
    reservedBy: 'hw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cab9ede6-2855-4c88-b26c-4e2016d135e2',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mahélie',
    room: '505',
    reservedBy: 'pe',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '09addd50-6428-4cc0-a126-e156441f7c11',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Måns',
    room: '106',
    reservedBy: 'sl',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f0f6381b-f9bc-4647-8541-36bbb11116d3',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pénélope',
    room: '952',
    reservedBy: 'rq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '47e3c8c2-1d87-41aa-b2f8-ee795d3d9b65',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Mélanie',
    room: '706',
    reservedBy: 'yy',
    bikeFormCompleted: true,
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '21cee3a9-e3e0-4a73-a861-f913dde0b265',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('3/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Illustrée',
    room: '263',
    reservedBy: 'we',
    bikeFormCompleted: true,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f9ab6b9f-cc77-4b23-8460-a09a5060b17a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cécilia',
    room: '357',
    reservedBy: 'sz',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e967dd1a-1e87-4f52-80ac-294108e9df57',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '215',
    reservedBy: 'we',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4a8f058d-0767-4ef3-bb63-85ca089f1330',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ruì',
    room: '179',
    reservedBy: 'ct',
    bikeFormCompleted: false,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bf9de399-3e12-4364-8750-6066259aaa0a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Stévina',
    room: '830',
    reservedBy: 'uc',
    bikeFormCompleted: false,
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2008ece0-8f0b-4ad4-b420-f338405b4315',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Tán',
    room: '881',
    reservedBy: 'ro',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd386854c-4599-45fd-bdd6-b03e67a37c90',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréa',
    room: '859',
    reservedBy: 'al',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '90036fcc-541f-443c-bb1a-eacf967e0a1d',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Françoise',
    room: '314',
    reservedBy: 'aa',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '07ba61ae-39c9-4615-9ecd-fb6b5878b460',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Méline',
    room: '960',
    reservedBy: 'qb',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'acc8f91e-187b-443c-a14d-c20364d9596d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('3/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aí',
    room: '364',
    reservedBy: 'dn',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2125c87b-fa2b-48cc-9e8b-c58f54a1427e',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Maëlann',
    room: '174',
    reservedBy: 'tp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'aa7014c9-659f-4795-8dbd-a761ab61b0df',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Amélie',
    room: '887',
    reservedBy: 'yz',
    bikeFormCompleted: false,
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '094a0574-0e83-4f54-9e1e-d8273c2f91cf',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lauréna',
    room: '298',
    reservedBy: 'jq',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c57c4cc8-abe2-47be-9f43-05851a392f6c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèse',
    room: '848',
    reservedBy: 'rt',
    bikeFormCompleted: null,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b1fc40ab-6df9-46ce-8a6f-9b34a9300346',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lén',
    room: '799',
    reservedBy: 'lf',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f1f8eb50-7c87-4067-a20c-e8ae05fe5d33',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Adélie',
    room: '765',
    reservedBy: 'ti',
    bikeFormCompleted: true,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '63877b15-6985-437b-93f8-7af9e3481b31',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïté',
    room: '966',
    reservedBy: 'ov',
    bikeFormCompleted: true,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4e5f5711-571c-4621-bd9d-e15ce53780ee',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Geneviève',
    room: '653',
    reservedBy: 'yj',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ddfaacae-707a-41a8-a373-73eccad26ea5',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Geneviève',
    room: '910',
    reservedBy: 'rx',
    bikeFormCompleted: null,
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '96ba2382-64ce-47c8-989c-71b936474db4',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Marie-thérèse',
    room: '394',
    reservedBy: 'bv',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7cc9177a-c3b9-4909-8876-8f0ac74c1bfe',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maï',
    room: '361',
    reservedBy: 'to',
    bikeFormCompleted: false,
    comments: 'Integer a nibh.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'caaee9da-2500-47eb-a063-e5489c204f03',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ruò',
    room: '623',
    reservedBy: 'rj',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '89c6ecba-cbc4-46d1-9287-6f9e18a596dc',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Tán',
    room: '057',
    reservedBy: 'dl',
    bikeFormCompleted: true,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5a959f78-1b2c-4192-8b88-8d1cae67c0e1',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Inès',
    room: '033',
    reservedBy: 'gl',
    bikeFormCompleted: false,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0b626525-e0f2-4218-ad49-f29dce8b301e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Daphnée',
    room: '282',
    reservedBy: 'ce',
    bikeFormCompleted: false,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '24b407bc-f3be-472b-bc82-a580ecab0a7a',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cléa',
    room: '085',
    reservedBy: 'vx',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '51e71b82-d129-4d8a-b1b3-6c7e1a3c3f93',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Irène',
    room: '061',
    reservedBy: 'ji',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '42a4cfe0-9ce6-401f-91b2-a4e8d92d12df',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Nélie',
    room: '163',
    reservedBy: 'bl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9cac9078-7343-44f6-b53c-3e3b5c7303af',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Faîtes',
    room: '931',
    reservedBy: 'qq',
    bikeFormCompleted: true,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '46a4e39e-da8e-4531-b234-9c802b5c53dd',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Åke',
    room: '943',
    reservedBy: 've',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7e9183ce-bbec-4e4c-a4e7-54bfdf888456',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Märta',
    room: '335',
    reservedBy: 'fq',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e6b3f14a-b23b-4570-9333-c2379f1a405d',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Crééz',
    room: '099',
    reservedBy: 'wa',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1d7eb97a-a5dd-49f6-b600-ee023665e49f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëline',
    room: '460',
    reservedBy: 'oi',
    bikeFormCompleted: true,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3e3d76a1-875b-447d-bf8c-dd8e39728b81',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estève',
    room: '884',
    reservedBy: 'nf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b8c82637-efd5-4a47-a921-bef492a4c8f8',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ráo',
    room: '154',
    reservedBy: 'yn',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8d854a87-d636-4e46-9082-72c00c2403b1',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cloé',
    room: '242',
    reservedBy: 'wc',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '33ba7ac6-bbbc-4290-be7a-ab4872c7e1cc',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Valérie',
    room: '761',
    reservedBy: 'bo',
    bikeFormCompleted: null,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ced40abf-eeff-4ed6-82b3-fb4244bad8ef',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cléopatre',
    room: '952',
    reservedBy: 'gj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1479a190-2377-4634-80d4-e561c0f10a81',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Gösta',
    room: '467',
    reservedBy: 'fn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9b4d5c40-0e26-4f57-9f88-86b15da3b88c',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Bérengère',
    room: '813',
    reservedBy: 'xt',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '45fea719-4ebe-4ce8-9efc-7f03ef904094',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Eliès',
    room: '605',
    reservedBy: 'kq',
    bikeFormCompleted: true,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5530984a-bd45-47b3-89f2-536e1b1f170b',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Björn',
    room: '736',
    reservedBy: 'rh',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '11bc932e-1801-4486-922b-583b8efadb3a',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaël',
    room: '119',
    reservedBy: 'cn',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0ddb706a-8fd7-43d9-89b5-645c375a5a86',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Pål',
    room: '784',
    reservedBy: 'fu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3f0b701e-cc8b-46c7-a489-1904153b3ee1',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Märta',
    room: '151',
    reservedBy: 'lm',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f3ce8b0b-d6ac-4935-8958-0f990f0e9537',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Märta',
    room: '044',
    reservedBy: 'mr',
    bikeFormCompleted: false,
    comments: 'Nullam molestie nibh in lectus.',
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f7b4ae67-2ce6-4329-8aee-abf6b43cc9f8',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Ráo',
    room: '520',
    reservedBy: 'dk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b5449c7b-b30d-444d-b633-2295fd114417',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélinda',
    room: '739',
    reservedBy: 'us',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '07331005-eb4f-4e86-963d-2f8bf56cf78f',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estée',
    room: '958',
    reservedBy: 'yv',
    bikeFormCompleted: true,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '91ad18f5-9890-4a8b-80c3-18796772362b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andrée',
    room: '363',
    reservedBy: 'qv',
    bikeFormCompleted: false,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '54f11bd4-53fc-4d9c-ae5a-f21fe1e0c125',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Hélèna',
    room: '222',
    reservedBy: 'sh',
    bikeFormCompleted: null,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bd037ae3-a9b7-4607-b012-635a40344625',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Märta',
    room: '219',
    reservedBy: 'hs',
    bikeFormCompleted: false,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1fea4213-27d7-458f-b145-1571f59de25c',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maëlle',
    room: '060',
    reservedBy: 'cb',
    bikeFormCompleted: true,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c77eaa00-0e55-41bd-b4e2-c47fc0c60dd2',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Maëlle',
    room: '553',
    reservedBy: 'kp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8aea0297-0d05-4951-bd18-c1de62845290',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Hélène',
    room: '253',
    reservedBy: 'na',
    bikeFormCompleted: true,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8dd2becb-f361-45ef-93b5-8d1f1de21722',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mégane',
    room: '600',
    reservedBy: 'ku',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4006ec29-b897-4909-bc37-82280602aea6',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Uò',
    room: '501',
    reservedBy: 'zb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9d7cf3b3-bc4f-4f7e-87c2-f3c0c8c3f42e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Vérane',
    room: '479',
    reservedBy: 'dy',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bc96de64-f08c-4ea8-98a8-88c5899cd93a',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Laurélie',
    room: '847',
    reservedBy: 'td',
    bikeFormCompleted: true,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '95e6988d-917c-4b63-bb7f-28bc171bf0a1',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Stéphanie',
    room: '765',
    reservedBy: 'lg',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f1df54d7-1aa9-483e-8832-cbe01359d0bc',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estève',
    room: '714',
    reservedBy: 'us',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b808090a-b874-4f39-ba5b-62fd311f1ab4',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Noémie',
    room: '511',
    reservedBy: 'nm',
    bikeFormCompleted: true,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '047976fe-e85a-4951-8ef3-6c73926d995a',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Ophélie',
    room: '809',
    reservedBy: 'wi',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b4674ae9-afc2-413d-a39a-02a638dd92a9',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yénora',
    room: '952',
    reservedBy: 'xh',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3b0b8d06-ebe9-42aa-b5e6-c1b8bd947699',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '723',
    reservedBy: 'ge',
    bikeFormCompleted: true,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'edb23ec6-2479-4ac4-ab8a-7f50dd04d1d3',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Åslög',
    room: '931',
    reservedBy: 'hx',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7d141733-5525-410c-a720-23edcae4632d',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Crééz',
    room: '691',
    reservedBy: 'lc',
    bikeFormCompleted: true,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f1a440ff-44f5-46c5-a947-819f32c8e442',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélia',
    room: '319',
    reservedBy: 'nt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '47ad0f8a-bd67-4def-8d8d-673fef2ba8a2',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Athéna',
    room: '540',
    reservedBy: 'ar',
    bikeFormCompleted: false,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '69fcba2c-622c-4abd-a1b1-7fe71eb94c59',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Edmée',
    room: '124',
    reservedBy: 'mz',
    bikeFormCompleted: true,
    comments: 'Phasellus in felis.',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd7586ff6-f753-407b-a418-47a6453c83f4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèse',
    room: '552',
    reservedBy: 'it',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9f744a28-54bc-4506-a5c0-05b03422487f',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Crééz',
    room: '255',
    reservedBy: 'vf',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '82222473-3c64-403b-8ae2-beb5c1874a60',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Camélia',
    room: '088',
    reservedBy: 'ot',
    bikeFormCompleted: null,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6261a8d4-678c-408f-ba03-e52170ea1623',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maï',
    room: '632',
    reservedBy: 'bx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0d3f9ca5-295f-49e4-b4f8-606bebaca224',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Régine',
    room: '798',
    reservedBy: 'uk',
    bikeFormCompleted: null,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0e2ba925-e2ff-4527-b8a2-b9a888165983',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Laurène',
    room: '813',
    reservedBy: 'mq',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '85ecebfc-dc7c-4f4d-b801-eb4cdf20bdcd',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Judicaël',
    room: '326',
    reservedBy: 'ss',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '71ed28da-94f1-441a-baa5-721c2eb8b048',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gérald',
    room: '160',
    reservedBy: 'ao',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '54e05933-7fb9-418f-8ca7-fa43a1f14922',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Clémentine',
    room: '360',
    reservedBy: 'ds',
    bikeFormCompleted: true,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cdea77f6-e64d-4578-8165-fd7d12b79058',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ruò',
    room: '425',
    reservedBy: 'mf',
    bikeFormCompleted: false,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '152dea76-7670-4733-aa83-0d8df13dfb65',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Loïs',
    room: '144',
    reservedBy: 'wz',
    bikeFormCompleted: false,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '564a44d8-2938-4a9c-b2fa-93866c535d34',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cécile',
    room: '175',
    reservedBy: 'co',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '373f75d7-c913-4bce-91dd-75609ffe0d63',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-françoise',
    room: '913',
    reservedBy: 'gf',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '67b57339-c810-422d-91a9-2eb426964abc',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèse',
    room: '630',
    reservedBy: 'vg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0deeb791-1452-4258-92d3-ee53aab3dc1f',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Miléna',
    room: '962',
    reservedBy: 'yj',
    bikeFormCompleted: true,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1089f638-0e99-44f3-bba8-dbb95c189434',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Almérinda',
    room: '525',
    reservedBy: 'io',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '72d86030-8cb6-4fa0-a68a-471b6fa635f1',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Gaétane',
    room: '194',
    reservedBy: 'rs',
    bikeFormCompleted: true,
    comments: 'Aenean sit amet justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ca90da3f-e039-4ae5-9aa6-ef5642fa2908',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mégane',
    room: '888',
    reservedBy: 'kx',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b471efb7-2c7a-4379-9746-b9130d92f46b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estève',
    room: '703',
    reservedBy: 'vv',
    bikeFormCompleted: null,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6f20a8ac-412b-4810-8e41-471ca5a52b02',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Réservés',
    room: '565',
    reservedBy: 'bz',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4a2bc30f-b027-4ed4-89f3-0587c284942e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yè',
    room: '177',
    reservedBy: 'yn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cfc405cc-6dad-4f38-b0be-7a5f3bd37c2b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Nélie',
    room: '942',
    reservedBy: 'qf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '02abbbc8-0713-4498-8305-6d01a2ab81c4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Océane',
    room: '932',
    reservedBy: 'yd',
    bikeFormCompleted: true,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '70af132f-16a5-4ddd-a12a-59859f269a40',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Daphnée',
    room: '908',
    reservedBy: 'fi',
    bikeFormCompleted: false,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4e06c8f5-3aa4-4864-a373-a87331a246bb',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Börje',
    room: '425',
    reservedBy: 'ge',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '12968f7a-a9ed-443c-872b-f732bd726d41',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Intéressant',
    room: '873',
    reservedBy: 'xs',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e92c5a1c-5d3b-44c1-929c-fe3326852255',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Dù',
    room: '082',
    reservedBy: 'uv',
    bikeFormCompleted: false,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cd5fc21b-8a9a-4ff5-ae53-3f1be4a4f7b5',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Véronique',
    room: '222',
    reservedBy: 'dm',
    bikeFormCompleted: true,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b2c5e5cd-49d1-4487-8e7e-a5b496b18c2f',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Michèle',
    room: '917',
    reservedBy: 'lc',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2beef891-e863-495c-9ab4-462c2646890e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Hélène',
    room: '309',
    reservedBy: 'ym',
    bikeFormCompleted: null,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '82b94a3f-14ba-46b5-bf77-d55a053df5d9',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Estée',
    room: '759',
    reservedBy: 'vz',
    bikeFormCompleted: null,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c33b3a5d-59f3-442f-b300-57949d701659',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Liè',
    room: '366',
    reservedBy: 'mv',
    bikeFormCompleted: false,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '340e9181-f7a5-47b3-80bf-3ce1ca32cde3',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Tú',
    room: '868',
    reservedBy: 'lm',
    bikeFormCompleted: false,
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '060d50bb-41a5-430a-b1b2-382e921535b5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Danièle',
    room: '934',
    reservedBy: 'dt',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '37a6490a-fd14-4c97-834f-704c3f1a3a07',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Aimée',
    room: '965',
    reservedBy: 'tr',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '21b9266a-aa51-40eb-a225-926f3b164a29',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Måns',
    room: '255',
    reservedBy: 'dy',
    bikeFormCompleted: true,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ddb97a0e-201b-4fa9-8c7e-5569906481fa',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Célestine',
    room: '700',
    reservedBy: 'tq',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b3dc4e85-bc8b-42be-ac72-03bf0445f76e',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méryl',
    room: '329',
    reservedBy: 'yx',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'be5d6533-4a6e-4653-a1d3-2ea8e6afe2b8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mà',
    room: '118',
    reservedBy: 'ms',
    bikeFormCompleted: false,
    comments:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f8495835-d62d-4a5b-910d-53d37dcbcf51',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Dorothée',
    room: '143',
    reservedBy: 'ew',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0d4f493b-fc71-4f20-9b56-95346ac847a2',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Crééz',
    room: '486',
    reservedBy: 'ht',
    bikeFormCompleted: false,
    comments: 'In quis justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2132bfbd-8d82-4ccd-8d4e-7f01ab44fdaa',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Aloïs',
    room: '644',
    reservedBy: 'ru',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a74c0e96-ad22-41db-9d63-5bfa7a9fb5fe',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaïa',
    room: '898',
    reservedBy: 'lw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7d5875f8-3e0d-4cf6-bd17-428c5499ed9d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèse',
    room: '180',
    reservedBy: 'hp',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '25ecec6b-d138-446e-ad06-78b998588493',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Mélinda',
    room: '698',
    reservedBy: 'sv',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '89ec69ea-8678-49be-81f4-8852db744b8c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérengère',
    room: '103',
    reservedBy: 'up',
    bikeFormCompleted: false,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f8718109-c2b5-495f-ab9d-b2b1cf772afe',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Östen',
    room: '742',
    reservedBy: 'gp',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '87b71ef5-4902-4aa2-96e4-86f7da923a8e',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Torbjörn',
    room: '735',
    reservedBy: 'df',
    bikeFormCompleted: true,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e9d80eed-7f0b-4b78-bdc1-7b6dca68ffee',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Célia',
    room: '827',
    reservedBy: 'pi',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '06ca27bd-ebe4-45f7-a4bd-ca68a81493a6',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '475',
    reservedBy: 'rr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '93a75d21-3c20-4a63-815b-690abb4aad0f',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Vérane',
    room: '928',
    reservedBy: 'lf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7c51632c-5bd4-475f-b1f2-b86365a96055',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Loïca',
    room: '155',
    reservedBy: 'de',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '27963af5-570d-4deb-a9c5-3bdb8c39b32b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèsa',
    room: '261',
    reservedBy: 'it',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd435f64f-b6d1-494d-a785-1401522a0080',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Dorothée',
    room: '104',
    reservedBy: 'mt',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5f5ed255-fc9a-4645-ab37-6e5c4a788ce2',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Mégane',
    room: '312',
    reservedBy: 'pq',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cba5ee6b-7bb9-420a-a038-79a162ed58fe',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Yè',
    room: '532',
    reservedBy: 'oz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '41f12785-3003-449a-a855-0c3b20d45b6a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Desirée',
    room: '288',
    reservedBy: 'vy',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b415ba5c-0d19-41d9-bb51-c213bd6478f1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-françoise',
    room: '911',
    reservedBy: 'bz',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8874bf71-371e-4c18-8387-f447113d0be1',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Ophélie',
    room: '311',
    reservedBy: 'eo',
    bikeFormCompleted: false,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '06f0b431-5ffe-49bb-95ce-d34d215264b4',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Cécile',
    room: '234',
    reservedBy: 'zg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7bef9c6e-d8e6-4ba4-93af-4a2e521c7017',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélys',
    room: '653',
    reservedBy: 'ee',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e8e0969a-9ede-4e0a-b6cd-af893d541d6b',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Léone',
    room: '024',
    reservedBy: 'ix',
    bikeFormCompleted: true,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '52d8835e-eeeb-490a-a672-5c1d3f2d634d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Angélique',
    room: '417',
    reservedBy: 'iy',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'efde0eb7-3eb4-4586-b26f-77f29808b5e2',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Célia',
    room: '177',
    reservedBy: 'ya',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '31c358f6-d155-4251-bacc-56251155eb46',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Liè',
    room: '249',
    reservedBy: 'ml',
    bikeFormCompleted: true,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f3dd8b84-97d8-476d-b3a0-47d2c6ebe720',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Görel',
    room: '511',
    reservedBy: 'bz',
    bikeFormCompleted: false,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c1c24ac4-eb27-45e4-ae37-9fdc27284dae',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Françoise',
    room: '543',
    reservedBy: 'pu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd318c7cf-c164-4e2e-9723-27088e8e0c30',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aí',
    room: '296',
    reservedBy: 'xj',
    bikeFormCompleted: true,
    comments: 'In congue.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '482efca1-61da-4078-a336-bde7cf50ac95',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lài',
    room: '377',
    reservedBy: 'gw',
    bikeFormCompleted: false,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a3272928-ec58-460e-8d15-230cfbb94007',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Renée',
    room: '147',
    reservedBy: 'iz',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ff9f3d76-c294-4843-ab82-528bcad75fb5',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maïlis',
    room: '791',
    reservedBy: 'fb',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f13ba19e-fe02-4422-b2ff-9b2f631ed587',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eugénie',
    room: '668',
    reservedBy: 'wq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '15e2122a-e175-4046-87c6-b4de305955e7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlys',
    room: '424',
    reservedBy: 'wo',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9541301a-77e8-43b7-a2e3-c71ea8f86e13',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïlis',
    room: '434',
    reservedBy: 'qi',
    bikeFormCompleted: false,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2e536cc9-32d9-4fae-818d-0ce59c326aed',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Célestine',
    room: '949',
    reservedBy: 'qi',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0e489dfd-100d-4a3b-aa34-258fc6b6e570',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Chloé',
    room: '404',
    reservedBy: 'fo',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c6a0d00e-f917-4173-8a80-996df703048e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estève',
    room: '043',
    reservedBy: 'sc',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '033e57b6-027e-4bd2-818b-99addb9e3e94',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Chloé',
    room: '262',
    reservedBy: 've',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '07fa3845-cd80-4ac3-b28a-dcccd390260f',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélodie',
    room: '616',
    reservedBy: 'fa',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e69065c1-3470-49bb-9bdd-9f2de3c998fd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-noël',
    room: '575',
    reservedBy: 'tg',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '34ad98d1-dc2b-4646-98d8-00cc71631b5d',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Miléna',
    room: '294',
    reservedBy: 'ub',
    bikeFormCompleted: true,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3ce0dffb-5de8-4e8e-a45b-7a305a7440ba',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Audréanne',
    room: '965',
    reservedBy: 'dx',
    bikeFormCompleted: true,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b4000b99-ff74-4894-885f-fb1807488e3a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lèi',
    room: '775',
    reservedBy: 'nx',
    bikeFormCompleted: null,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '791143b6-ff0b-4783-b0f6-4db14e3772d6',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '192',
    reservedBy: 'tz',
    bikeFormCompleted: null,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6ac2eb0d-e1e8-4997-96b9-e364525fc742',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estée',
    room: '682',
    reservedBy: 'lm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3568d9f7-718e-4c16-893e-23625cb143b4',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Táng',
    room: '004',
    reservedBy: 'ty',
    bikeFormCompleted: null,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5461defe-6f8b-4494-a41f-8f5f7e68c3a6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Dorothée',
    room: '142',
    reservedBy: 'rl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '66a30074-7055-4ebe-80f6-a03569abcf41',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Tán',
    room: '081',
    reservedBy: 'uu',
    bikeFormCompleted: false,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b909f468-2095-4d74-b927-255a81fa678a',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lorène',
    room: '748',
    reservedBy: 'nf',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '20af7005-b538-439c-ab83-ecf92017aa1a',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Maéna',
    room: '311',
    reservedBy: 'jw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2ff915f6-20d1-4219-8afa-17739e15b1a7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Björn',
    room: '027',
    reservedBy: 'mm',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd0ee073f-bef0-411e-a716-d8748f14ec6b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Nélie',
    room: '498',
    reservedBy: 'pa',
    bikeFormCompleted: true,
    comments: 'Mauris lacinia sapien quis libero.',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b3384c62-2ee2-445c-94e0-31290261a4e5',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Håkan',
    room: '524',
    reservedBy: 'it',
    bikeFormCompleted: false,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5df72889-9dfd-4dcd-be83-210a9e7e8438',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Géraldine',
    room: '114',
    reservedBy: 'gt',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1da2f08b-21be-408e-99fc-9496036b3116',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Salomé',
    room: '667',
    reservedBy: 'sl',
    bikeFormCompleted: false,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e554c94a-d5ec-43c9-a447-8b9c713f45f1',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naëlle',
    room: '557',
    reservedBy: 'zi',
    bikeFormCompleted: false,
    comments: 'Nulla ac enim.',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cbb74e98-0e0a-4234-85a1-386f9f9bad19',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eléa',
    room: '946',
    reservedBy: 'xu',
    bikeFormCompleted: true,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6c8cbc7f-1f91-44d4-b816-31d317eb1b67',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '571',
    reservedBy: 'xm',
    bikeFormCompleted: false,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e786aa4a-5dcf-4ed7-8761-182bb62eb996',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yú',
    room: '054',
    reservedBy: 'wc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '68a521f7-8742-45fc-a065-e08270772b8c',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lucrèce',
    room: '807',
    reservedBy: 'fi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1cb1f8f8-269a-4d4f-bb06-c470ec0a0525',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Örjan',
    room: '255',
    reservedBy: 'xj',
    bikeFormCompleted: false,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '739850d7-e42b-4db3-9719-1f958563da9f',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Geneviève',
    room: '371',
    reservedBy: 'cl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9acff968-95d6-45c6-873c-180e42daa4d4',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Josée',
    room: '874',
    reservedBy: 'il',
    bikeFormCompleted: true,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f93b1160-8fbf-444f-b593-d5b11bb43979',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Loïs',
    room: '622',
    reservedBy: 'km',
    bikeFormCompleted: true,
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    completedAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1ceb0de4-0bf3-4126-acda-1634b7a1cbac',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '224',
    reservedBy: 'rj',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c84de159-3f3e-4fb6-8fad-534af8568b71',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Méline',
    room: '524',
    reservedBy: 'vz',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7bd89a48-950e-4ab3-89c7-835408a3bdb0',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Dù',
    room: '909',
    reservedBy: 'tq',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '09e865f9-f850-427e-b407-1c5b2e63b3c2',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Méryl',
    room: '199',
    reservedBy: 'tx',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '15ac1b39-a317-4be5-aba4-3e30cb87fbf9',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Nélie',
    room: '475',
    reservedBy: 'ye',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e2943139-6ea8-4314-8899-7bab48b947a4',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Gösta',
    room: '672',
    reservedBy: 'pz',
    bikeFormCompleted: false,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a21ed0c0-4294-4614-a785-4a1a769bb8fc',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Néhémie',
    room: '225',
    reservedBy: 'dv',
    bikeFormCompleted: true,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '10cb283b-fd0d-4a5f-905d-43bce0ee3fa1',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Médiamass',
    room: '901',
    reservedBy: 'gx',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c125e297-95af-48a4-9c0f-e5f0564dbba7',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Cécile',
    room: '852',
    reservedBy: 'ra',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd3121fe1-7021-4fa7-a200-93bf8395b8e7',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Daphnée',
    room: '000',
    reservedBy: 'qy',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2775c37c-70a4-4c09-ba38-d3720866ad9a',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Börje',
    room: '582',
    reservedBy: 'xa',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '37f12f80-6c98-4d39-ad30-21d40a74abc7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pélagie',
    room: '184',
    reservedBy: 'yu',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0fe11a37-da1e-4d17-a25a-f786f309d09e',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '248',
    reservedBy: 'iy',
    bikeFormCompleted: false,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c3ad50bc-7066-4e4e-b2f7-6e29a4614eb2',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léone',
    room: '481',
    reservedBy: 'sy',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2a476f2f-1651-45ed-b8cb-1d47d4e98644',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Frédérique',
    room: '210',
    reservedBy: 'rx',
    bikeFormCompleted: true,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3c8d2285-1592-4e82-867d-beaf07aece47',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Estée',
    room: '475',
    reservedBy: 'ul',
    bikeFormCompleted: false,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '174b9e15-4a09-4004-a8e1-03da6dc5fe4f',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Marie-ève',
    room: '268',
    reservedBy: 'ks',
    bikeFormCompleted: null,
    comments: 'Donec dapibus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c15f6131-9a49-4ee7-95e2-e1c912175f6b',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maïté',
    room: '850',
    reservedBy: 'bu',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b6e8dc98-146b-421a-8e22-8c17737fcb0e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mégane',
    room: '778',
    reservedBy: 'hg',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3917333f-9f83-4bfa-92e4-6425023a5d40',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gisèle',
    room: '795',
    reservedBy: 'bq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6c420668-f2c1-43f1-a1ab-95cdf6abbe38',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Magdalène',
    room: '876',
    reservedBy: 'pq',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f118ae78-7fdf-4790-a86b-50db9fa06b14',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïté',
    room: '066',
    reservedBy: 'ww',
    bikeFormCompleted: false,
    comments: 'Pellentesque ultrices mattis odio.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0c52ac3d-90b1-42f6-b33b-bb5417a5158b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Angélique',
    room: '545',
    reservedBy: 'dc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '78e6d1d2-9704-4214-a63b-a07b5358a09b',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Léa',
    room: '914',
    reservedBy: 'kx',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '46730265-028d-436e-b7a5-536ebd55fb44',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Céline',
    room: '692',
    reservedBy: 'va',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a79d5a7e-820a-4999-bd36-75df6f68605d',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mylène',
    room: '411',
    reservedBy: 'tn',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7ee82c9b-3e0a-48bb-b8c0-4e4e4d5d9546',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Anaé',
    room: '121',
    reservedBy: 'uu',
    bikeFormCompleted: null,
    comments: 'Morbi non lectus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '49d8e5ca-eeb3-4728-9b8f-7e47d72b9e4d',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Eléonore',
    room: '194',
    reservedBy: 'pu',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2696d1f1-4c86-440b-893a-9f39680fe51c',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Gaïa',
    room: '070',
    reservedBy: 'or',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bc746811-a086-461d-b4d7-71de259db52f',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Almérinda',
    room: '475',
    reservedBy: 'hf',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '238cadef-5a3b-40e3-ba39-1c3a3c975d45',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Bérénice',
    room: '040',
    reservedBy: 'nj',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '069c4aaa-6ac6-4b38-ab30-1ce310b1a759',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cinéma',
    room: '121',
    reservedBy: 'qw',
    bikeFormCompleted: false,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '251ab622-8c0a-4ace-81cf-2615587bfdde',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïlys',
    room: '930',
    reservedBy: 'js',
    bikeFormCompleted: null,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9053a7e4-5456-4103-b89c-34bb4808ad21',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélinda',
    room: '690',
    reservedBy: 'pr',
    bikeFormCompleted: true,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7d9f704a-5bf6-4521-b516-fd9bed4d8130',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Tán',
    room: '619',
    reservedBy: 'ov',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '906aab53-4891-4ae5-8801-e4d71ab76e25',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Yè',
    room: '738',
    reservedBy: 'ju',
    bikeFormCompleted: true,
    comments: 'Integer a nibh.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '299dd8e3-4d73-4ef8-85cf-fd5639a4b407',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yénora',
    room: '599',
    reservedBy: 'jh',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd71de2f2-3002-45ad-b18c-3b2ac7eb6d2d',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maëlann',
    room: '313',
    reservedBy: 'zy',
    bikeFormCompleted: false,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd0dc0174-5cdb-4ebc-a1a0-4e3014943b96',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Desirée',
    room: '837',
    reservedBy: 'fx',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c0895b93-e947-4b1f-9574-085a19a8b9fa',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Nuó',
    room: '933',
    reservedBy: 'ui',
    bikeFormCompleted: true,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '616f4b5c-3a86-4e6c-b8ce-cb20d293a19e',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Rébecca',
    room: '099',
    reservedBy: 'zn',
    bikeFormCompleted: true,
    comments: 'Praesent lectus.',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'db4f8fc3-88f1-496e-b31d-a05d2cff0fbb',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Françoise',
    room: '601',
    reservedBy: 'yt',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '56c62208-dd0e-41c0-9f63-3b598813bfe3',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Åke',
    room: '884',
    reservedBy: 'tn',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '90cdfd4c-30f1-4009-a76e-03d2b197438a',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lóng',
    room: '641',
    reservedBy: 'yr',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9e8e47c8-6a2f-4778-8b57-faf4f6139e42',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélanie',
    room: '152',
    reservedBy: 'nh',
    bikeFormCompleted: null,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4d9bbad8-2f21-48fe-b473-95deb26331e4',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Sòng',
    room: '030',
    reservedBy: 'zg',
    bikeFormCompleted: null,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '43e0d059-76ec-4705-af9a-6e426e0f7e68',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mégane',
    room: '434',
    reservedBy: 'wf',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c0db1e6e-fccd-4314-a81e-1ec4b0ef7a97',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Fèi',
    room: '271',
    reservedBy: 'gz',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a63749fe-3c17-45bf-9a46-61e496d01edd',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Gaétane',
    room: '808',
    reservedBy: 'di',
    bikeFormCompleted: null,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0fad9cdd-a8ea-4695-9b9c-bbddcd2e160d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yáo',
    room: '985',
    reservedBy: 'hf',
    bikeFormCompleted: false,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1dfb7830-0834-4bd4-b7fa-0faef1b3fea0',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Liè',
    room: '710',
    reservedBy: 'dr',
    bikeFormCompleted: false,
    comments: 'Sed ante.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '706eee9f-0205-4802-832c-8a23fa8a0314',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Geneviève',
    room: '802',
    reservedBy: 'ql',
    bikeFormCompleted: false,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4212b475-3225-47e2-91df-8f2dada3c5ee',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gwenaëlle',
    room: '429',
    reservedBy: 'ow',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '38ec86d0-55b0-4aa2-aa63-6558461b5ee9',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Adèle',
    room: '781',
    reservedBy: 'pg',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '03c9c1d8-65b3-44cf-bd8e-85f4a909606d',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèse',
    room: '429',
    reservedBy: 'ay',
    bikeFormCompleted: false,
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5059cea2-9013-46b2-baac-0b81cbf8620d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Almérinda',
    room: '143',
    reservedBy: 'zn',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '92fb3170-f2b0-446f-a4f0-6270db2f0558',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mylène',
    room: '243',
    reservedBy: 'xx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fc468529-0397-4970-bfe0-074af2412b5c',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Tú',
    room: '976',
    reservedBy: 'ra',
    bikeFormCompleted: false,
    comments: 'Cras pellentesque volutpat dui.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bdaba561-7de2-420f-85cb-3970a3a8be7b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaé',
    room: '311',
    reservedBy: 'iu',
    bikeFormCompleted: null,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4176f5dc-7dfd-4a9c-8c72-a5370c506c32',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Laurélie',
    room: '316',
    reservedBy: 'ti',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '945c84fe-7e5e-4e1c-afaa-76f4514840ee',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Sélène',
    room: '439',
    reservedBy: 'oy',
    bikeFormCompleted: false,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b92d68a7-28fd-4832-9d25-d9dc81c023bb',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Noémie',
    room: '799',
    reservedBy: 'sc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fa3de703-c9c0-4398-a2c5-05b03e2aada7',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lóng',
    room: '816',
    reservedBy: 'gc',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7fcfac6e-3e34-4380-9212-8d17ebbed2d7',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélodie',
    room: '929',
    reservedBy: 'ue',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b4de1558-2837-4ea9-8c52-b59a4f9d88fc',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Célia',
    room: '919',
    reservedBy: 'cx',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3edc0f94-2c34-44dc-9fcf-610e2767aebb',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Angélique',
    room: '743',
    reservedBy: 'va',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'be587a43-8429-4976-89d2-1afe968ae71e',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Daphnée',
    room: '226',
    reservedBy: 'os',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f2082f52-8c72-4a0e-839c-d4e8b0e9d409',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mén',
    room: '312',
    reservedBy: 'ry',
    bikeFormCompleted: true,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '171980b1-c8a4-413f-bc86-95c9df49a6ef',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Alizée',
    room: '120',
    reservedBy: 'xh',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cd49f765-f816-4395-9800-e6062f71af37',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gwenaëlle',
    room: '502',
    reservedBy: 'zi',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3aed087c-d486-4106-a186-221d30eb597c',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Géraldine',
    room: '101',
    reservedBy: 'cr',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c71b2dd9-f558-4691-b4af-b658eddd77f6',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Naéva',
    room: '219',
    reservedBy: 'lr',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b3ac3c5b-8c11-42a0-a008-b0f64c8c474d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léandre',
    room: '037',
    reservedBy: 'wu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b6d28688-47ba-4363-94bc-a28cacdf2ec7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Angélique',
    room: '739',
    reservedBy: 'vd',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9c198606-472a-47ff-8ff6-218bb817db16',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naëlle',
    room: '136',
    reservedBy: 'sf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5044180f-ee7c-4732-b576-06e40249fc39',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léonie',
    room: '898',
    reservedBy: 'ux',
    bikeFormCompleted: false,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '77b535be-aff7-43b0-92cf-69b1fca15fd3',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélinda',
    room: '524',
    reservedBy: 'gu',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd2354ccd-787a-401f-8233-1eccc604a88b',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Håkan',
    room: '367',
    reservedBy: 'eg',
    bikeFormCompleted: false,
    comments: 'Mauris sit amet eros.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '46435c92-2701-4f8c-af5d-05995db5670f',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Noëlla',
    room: '208',
    reservedBy: 'zl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2eced030-7cfb-4313-a1ad-f20c22774025',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérengère',
    room: '399',
    reservedBy: 'ft',
    bikeFormCompleted: false,
    comments: 'Integer ac neque.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ff30e3e7-1b08-497a-868b-d727a64a1de0',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Åke',
    room: '844',
    reservedBy: 'oq',
    bikeFormCompleted: null,
    comments: 'Donec dapibus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e2dd498c-40a3-49a5-b3ec-6c69c6bc4bb3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aurélie',
    room: '784',
    reservedBy: 'li',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6f837141-ad39-4cfd-87fa-804c28aa405f',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Adélie',
    room: '238',
    reservedBy: 'xg',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2c603037-10dd-4633-b214-81ac1897c18e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Börje',
    room: '127',
    reservedBy: 'gf',
    bikeFormCompleted: false,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3911a1ea-d90e-4813-a90b-87fa925be961',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélinda',
    room: '427',
    reservedBy: 'xm',
    bikeFormCompleted: false,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1796ad13-ac4a-4194-80d1-a436cf0635a6',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlla',
    room: '520',
    reservedBy: 'fp',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '302cebca-5f8f-4879-b94e-7da2c8e5c413',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Camélia',
    room: '816',
    reservedBy: 'ka',
    bikeFormCompleted: true,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3338281a-5d2d-466b-b4b8-78d1a00c8606',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mélina',
    room: '408',
    reservedBy: 'nm',
    bikeFormCompleted: null,
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2fae591d-b990-40a2-ac94-89ce0ebcd40b',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Réjane',
    room: '572',
    reservedBy: 'du',
    bikeFormCompleted: null,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8195b70c-c111-4de3-8069-add34d9aa510',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mårten',
    room: '964',
    reservedBy: 'rm',
    bikeFormCompleted: true,
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd4e22ff6-34b2-453a-bf2b-47ddbf9f6342',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lén',
    room: '211',
    reservedBy: 'yn',
    bikeFormCompleted: false,
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '30f94b22-d4f6-4b78-8887-40b49b9f838b',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maëline',
    room: '688',
    reservedBy: 'eu',
    bikeFormCompleted: false,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b36c63ac-ec8a-44df-9aba-793b61decae8',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Marie-ève',
    room: '719',
    reservedBy: 'xt',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a9fe69df-b6b9-47a8-af55-2899e56b2bfe',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léane',
    room: '567',
    reservedBy: 'fx',
    bikeFormCompleted: false,
    comments: 'Integer a nibh.',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd329b837-46dc-4c51-ad64-65137cba54fc',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aí',
    room: '549',
    reservedBy: 'hr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a5f8e668-7a46-4563-bec8-d1e611a35bff',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Yáo',
    room: '172',
    reservedBy: 'uu',
    bikeFormCompleted: false,
    comments: 'Cras in purus eu magna vulputate luctus.',
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '41297451-7214-4b11-b026-56cd50abc57d',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '862',
    reservedBy: 'ls',
    bikeFormCompleted: false,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4ec79751-a888-4c23-82af-799e8a0b39e6',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-françoise',
    room: '661',
    reservedBy: 'ol',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '19cfdbd6-ed54-46ed-8b00-230777ec4ac3',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ophélie',
    room: '981',
    reservedBy: 'hm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0cd62347-5c8d-45fc-bc33-ecabfe0b8e1d',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Göran',
    room: '632',
    reservedBy: 'gc',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '243149c5-a64d-4772-9289-2094d530d051',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Irène',
    room: '308',
    reservedBy: 'ty',
    bikeFormCompleted: false,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0b2e7ca4-716f-4146-93e5-4e5bc0ca9ffa',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Geneviève',
    room: '370',
    reservedBy: 'yc',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0de3d642-b351-4d7f-bf20-ea5fcfa371d3',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Zoé',
    room: '859',
    reservedBy: 'hb',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '975f5b79-abb7-4154-ac90-81dbf022db55',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Sòng',
    room: '696',
    reservedBy: 'bq',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7237ea8c-cd63-4029-88c3-a1bd8e6d2d80',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaïs',
    room: '072',
    reservedBy: 'sp',
    bikeFormCompleted: false,
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e5fa05f1-aaa0-4ae7-abcd-8a95fbfd6422',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Cloé',
    room: '175',
    reservedBy: 'tu',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '049169bf-1242-4085-83bb-2d2c3f945d15',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pò',
    room: '541',
    reservedBy: 'ao',
    bikeFormCompleted: true,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '75999b91-6ac6-4eef-bf00-8c344df7522b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Loïc',
    room: '745',
    reservedBy: 'ws',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f91881b8-2b24-4213-afb9-b377c15d58fd',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estée',
    room: '254',
    reservedBy: 'dd',
    bikeFormCompleted: null,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'eeb185e4-eb39-49ca-8aa4-7abf4d9d84ac',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maï',
    room: '305',
    reservedBy: 'hp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '498b30d3-5c71-4bac-8132-4da9109d8c05',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréa',
    room: '340',
    reservedBy: 'bx',
    bikeFormCompleted: true,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4bee5ae5-5a72-4ed2-900d-2121f7feb812',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méryl',
    room: '887',
    reservedBy: 'vw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f1ea68cd-0410-4d00-80e0-7aaaefc793a1',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Östen',
    room: '580',
    reservedBy: 'ap',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '343dea63-6afa-44e8-a4a4-00608044e293',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Nélie',
    room: '488',
    reservedBy: 'gk',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '58457612-2632-49ab-b408-4043602bb7f0',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Magdalène',
    room: '496',
    reservedBy: 'gf',
    bikeFormCompleted: null,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c2440f3c-8413-45d4-aed3-204058bca61e',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Styrbjörn',
    room: '081',
    reservedBy: 'su',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '11a0869a-ebb2-4658-9ed7-eb086d6bcbc5',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andrée',
    room: '685',
    reservedBy: 'gz',
    bikeFormCompleted: true,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1c6cc6f3-99c1-4359-829d-30d033b2c0a2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pò',
    room: '718',
    reservedBy: 'md',
    bikeFormCompleted: false,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '584b9fd4-6788-4961-b07d-ca4353248dc9',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Garçon',
    room: '380',
    reservedBy: 'rl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ef780b7e-3b46-4cfb-bdd4-ee01844b7341',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Magdalène',
    room: '102',
    reservedBy: 'ga',
    bikeFormCompleted: true,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6a6af8af-d9ea-4232-8bed-1d1a4eb7a633',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Frédérique',
    room: '672',
    reservedBy: 'fw',
    bikeFormCompleted: null,
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e80526f8-befa-46b6-9890-436de1fffcab',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Danièle',
    room: '808',
    reservedBy: 'gt',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '328e6270-1086-41b8-8920-1ae212425629',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Véronique',
    room: '029',
    reservedBy: 'ae',
    bikeFormCompleted: true,
    comments: 'Donec ut dolor.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'edeea6d8-db45-43ff-96e7-2aeaec94cc91',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Clémence',
    room: '957',
    reservedBy: 'mj',
    bikeFormCompleted: true,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '32871d52-ce86-458e-b7ea-1f83d3567eb9',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Loïc',
    room: '994',
    reservedBy: 'gu',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1a4c9234-aaef-4302-aad5-319f02c273df',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Joséphine',
    room: '980',
    reservedBy: 'pg',
    bikeFormCompleted: false,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'db0b470c-d3e5-4966-8d57-89e9fb618f90',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lauréna',
    room: '642',
    reservedBy: 'kn',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cbe1ea9b-6db6-48e3-81ce-374e2b108145',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'André',
    room: '060',
    reservedBy: 'bs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9a4ebc98-1e25-46ea-ab49-bc470cec1a1e',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Erwéi',
    room: '263',
    reservedBy: 'ud',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ed2e9004-15b0-4c79-b0b7-18edd4295357',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Garçon',
    room: '311',
    reservedBy: 'hn',
    bikeFormCompleted: null,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0c860b20-4f4a-4016-9443-2918367f0d31',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maëlys',
    room: '949',
    reservedBy: 'gt',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8d80f5fa-7470-4d33-9549-5dec859f1788',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Irène',
    room: '863',
    reservedBy: 'hv',
    bikeFormCompleted: false,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '547f7831-e63f-40e6-a0b7-103381ec988a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlann',
    room: '902',
    reservedBy: 'ev',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c5fda47f-a4f0-4a18-8abf-6fc15620f8b8',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lorène',
    room: '231',
    reservedBy: 'vs',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c4b40f4c-6b99-4f8a-b8e2-8e6a88b1934d',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Valérie',
    room: '145',
    reservedBy: 've',
    bikeFormCompleted: false,
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '87c593d6-9774-432a-9781-3f8ea34d0054',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Annotés',
    room: '784',
    reservedBy: 'bg',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6e11297e-5a87-47c6-9eb4-e0f415abbff5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Åsa',
    room: '146',
    reservedBy: 'el',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b1da96e4-e8c3-4456-a819-64f29f2b8b1f',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Crééz',
    room: '772',
    reservedBy: 'um',
    bikeFormCompleted: false,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8ed1706f-36bd-4e4a-bd01-ef1488a352f3',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mylène',
    room: '300',
    reservedBy: 'cx',
    bikeFormCompleted: false,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd872a0b9-d18b-4423-847b-f92f742a2f23',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maïlys',
    room: '605',
    reservedBy: 'za',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '308a3793-24ce-4ced-a43b-b4e3e3fe73b4',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Åslög',
    room: '119',
    reservedBy: 'tp',
    bikeFormCompleted: false,
    comments:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7b6a1e5f-8e43-4b49-a8d0-ddb07198ed02',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Esbjörn',
    room: '988',
    reservedBy: 'az',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ba763abd-222a-4e22-af08-421360776cf2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aí',
    room: '875',
    reservedBy: 'up',
    bikeFormCompleted: true,
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ec667ff3-6519-47b1-a2df-184e833a09e1',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ruì',
    room: '371',
    reservedBy: 'fs',
    bikeFormCompleted: true,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '256155f3-17ab-426d-81ee-e43aea13aa10',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estée',
    room: '072',
    reservedBy: 'mn',
    bikeFormCompleted: false,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f942b1f5-1979-4524-9089-d57db2c34d69',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Dafnée',
    room: '972',
    reservedBy: 'vn',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7e2b9427-cae6-4cf1-9c93-7eeb39b268ba',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèsa',
    room: '120',
    reservedBy: 'vd',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e295aa51-7b95-49a0-b0b2-8f3f3b4fc256',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Athéna',
    room: '566',
    reservedBy: 'sq',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '251dcf27-6055-4bb1-b34d-878006a7a6cc',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aloïs',
    room: '022',
    reservedBy: 'qq',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '124738d1-ba76-4dfd-8044-2f49a9226bcc',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('3/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kévina',
    room: '415',
    reservedBy: 'jj',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('3/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e7ea6454-5d0d-42f8-bc26-09294d750ce2',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Wá',
    room: '709',
    reservedBy: 'ul',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ef8e7f8f-1715-4451-8e3d-66ab7fabda74',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lauréna',
    room: '897',
    reservedBy: 'al',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3e217bdc-442a-4b4c-9d3f-9d5b20f4e459',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèsa',
    room: '047',
    reservedBy: 'hh',
    bikeFormCompleted: true,
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b30da8a0-b4c3-4b97-b5e8-da92c168a59c',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Laïla',
    room: '671',
    reservedBy: 'xr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('3/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6e91fe29-cc54-4104-86d1-27befa740e62',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Måns',
    room: '705',
    reservedBy: 'jm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7d20ee04-95e5-47b5-bf1d-f00969794991',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréanne',
    room: '429',
    reservedBy: 'ge',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '57787d68-7072-4b58-af5a-81eacad12840',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eléonore',
    room: '644',
    reservedBy: 'xg',
    bikeFormCompleted: true,
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8128f992-f0e6-4990-90ff-2faf6aa2494f',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Loïca',
    room: '394',
    reservedBy: 'km',
    bikeFormCompleted: false,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '64618448-e710-498f-bf6f-ca7819b62bc9',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Aimée',
    room: '051',
    reservedBy: 'iu',
    bikeFormCompleted: false,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '84a1c778-e535-4b31-8b6f-143c516590c5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréanne',
    room: '353',
    reservedBy: 'zz',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7f977ad6-443e-44be-9d6f-915301b3a8c3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Loïc',
    room: '503',
    reservedBy: 'nk',
    bikeFormCompleted: true,
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '759d5f93-f8d6-4ee9-9608-3d57a3904370',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Ruò',
    room: '605',
    reservedBy: 'qc',
    bikeFormCompleted: true,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7ebbb06b-85ae-41e6-ac1d-327ca7fb4b74',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Personnalisée',
    room: '956',
    reservedBy: 'oq',
    bikeFormCompleted: true,
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a6949f05-69d7-42c6-964d-d93c400f2bdc',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Amélie',
    room: '025',
    reservedBy: 'dx',
    bikeFormCompleted: true,
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '199be1ad-390b-4ac0-8924-8a54ecc3d6d4',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Östen',
    room: '500',
    reservedBy: 'mt',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dce8c1ff-bbb5-4965-bf86-254f4bd97e85',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Desirée',
    room: '610',
    reservedBy: 'ut',
    bikeFormCompleted: null,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e392bb35-beb9-43b1-b247-a1b5716448fb',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Lén',
    room: '308',
    reservedBy: 'fc',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9f437032-bfd1-4626-bd36-60984ca5d0b4',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Simplifiés',
    room: '922',
    reservedBy: 'my',
    bikeFormCompleted: true,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '677fe385-0ec1-463c-9bbc-aba8305577cf',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Naéva',
    room: '635',
    reservedBy: 'ra',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9ce1184f-21f5-4479-b066-f5c28e9f547a',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Rachèle',
    room: '346',
    reservedBy: 'lu',
    bikeFormCompleted: true,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '140091fe-6703-4d59-ae16-eec346099a09',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mahélie',
    room: '095',
    reservedBy: 'ql',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b882b250-79a8-4010-85f1-6b277442ed83',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lài',
    room: '554',
    reservedBy: 'mk',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '38758074-118f-41db-8014-b63fd76ed6a1',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Måns',
    room: '046',
    reservedBy: 'af',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a0413d2f-23df-4b30-b58f-160e182cc52a',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérengère',
    room: '301',
    reservedBy: 'so',
    bikeFormCompleted: false,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0a28aa18-6a1f-421c-9047-48b4ee489915',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Mårten',
    room: '233',
    reservedBy: 'ya',
    bikeFormCompleted: true,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '781b904c-dedb-412e-ab62-b01928cec029',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léane',
    room: '440',
    reservedBy: 'ko',
    bikeFormCompleted: false,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cfe99c9c-c29c-4fe8-bd72-d81be1fb15a6',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léane',
    room: '853',
    reservedBy: 'hh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2d6dba67-2fb8-45bf-8deb-f8df00cf3a16',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maéna',
    room: '534',
    reservedBy: 'zr',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e331370e-6762-4b6d-958b-3f72a0b62917',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Uò',
    room: '946',
    reservedBy: 'yr',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a78e073f-80c4-40d3-aa53-d159e8885850',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mylène',
    room: '416',
    reservedBy: 'ko',
    bikeFormCompleted: true,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3f33edbd-d30f-4f80-abae-c9ecee5f1101',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Bérénice',
    room: '810',
    reservedBy: 'gp',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ad3caecf-40fd-4873-8b0e-570ed8c89ba6',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Faîtes',
    room: '514',
    reservedBy: 'av',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5e264248-e309-4523-bd14-acc1333f1a26',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yè',
    room: '431',
    reservedBy: 'ik',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '30823475-a3f0-4c9f-8cf2-c3af946d851d',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '933',
    reservedBy: 'sc',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '07deedf3-7a3a-4e61-820b-5e30770561ac',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lén',
    room: '037',
    reservedBy: 'ur',
    bikeFormCompleted: true,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '200ab531-407e-4f5c-9e73-c8fa82eb9c49',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Angèle',
    room: '783',
    reservedBy: 'dd',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd276810a-13a4-4127-81ab-c6d88566c336',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréanne',
    room: '678',
    reservedBy: 'rb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3d7384b7-2516-4287-adcb-8745cabeebd7',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Aimée',
    room: '914',
    reservedBy: 'nl',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cf6eedb1-75ff-40a2-8e34-688e11910e17',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Illustrée',
    room: '374',
    reservedBy: 'zt',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6650c7d8-93e6-4073-8b15-02423082951b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlle',
    room: '825',
    reservedBy: 'mt',
    bikeFormCompleted: false,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '990b4380-a10a-428e-86c2-d6f6bd87d2be',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Noëlla',
    room: '090',
    reservedBy: 'dc',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c7782e11-5702-4bf3-919e-4917c22170f3',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréa',
    room: '602',
    reservedBy: 'kh',
    bikeFormCompleted: false,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2df569ae-14a3-47b7-8d19-8d0c3fb1e55e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yóu',
    room: '275',
    reservedBy: 'qy',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fb3ade78-703b-4586-bf55-76ee81565739',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Mélina',
    room: '222',
    reservedBy: 'al',
    bikeFormCompleted: true,
    comments: 'Praesent blandit lacinia erat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '66879072-c253-41eb-8d0e-b32fbc152613',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yóu',
    room: '697',
    reservedBy: 'rz',
    bikeFormCompleted: false,
    comments: 'Aenean fermentum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e5e643c5-15ed-408c-aaa9-3bae9986e7dd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kallisté',
    room: '614',
    reservedBy: 'vc',
    bikeFormCompleted: null,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '57a2e793-6986-45e9-b796-3077d57e5336',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Zoé',
    room: '602',
    reservedBy: 'yj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0f0128e1-6de3-4ac3-bca8-6d9e14d64497',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Félicie',
    room: '453',
    reservedBy: 'bd',
    bikeFormCompleted: true,
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b64ee3ea-8346-4345-a016-aca4b5e5b6ee',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andrée',
    room: '466',
    reservedBy: 'io',
    bikeFormCompleted: null,
    comments: 'Ut tellus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '835e9130-e67b-4b00-8484-93e70e78753f',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Hélène',
    room: '084',
    reservedBy: 'bk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9b0f5d55-73bb-4f00-830f-5825878e662f',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlle',
    room: '852',
    reservedBy: 'dp',
    bikeFormCompleted: false,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0be86384-467d-4a96-a00c-2b50e9d23557',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Régine',
    room: '138',
    reservedBy: 'zf',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9d54b57a-acf6-4e15-9bae-2e511ea49ae9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pénélope',
    room: '476',
    reservedBy: 'tn',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd1195e29-934f-49f2-a14f-29d8bc31ccd0',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaïa',
    room: '196',
    reservedBy: 'rm',
    bikeFormCompleted: true,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '20950a93-2fb6-4e0b-a4a3-3b6b988a5a5b',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kévina',
    room: '041',
    reservedBy: 'fk',
    bikeFormCompleted: null,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '07dd86ce-2a03-4d74-91f8-9a52e7938a47',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estève',
    room: '443',
    reservedBy: 'hi',
    bikeFormCompleted: false,
    comments: 'Aenean sit amet justo.',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd8bcb068-4493-4fce-ad64-db744667dd5e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estève',
    room: '313',
    reservedBy: 'eo',
    bikeFormCompleted: true,
    comments: 'Morbi porttitor lorem id ligula.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '20f64e0d-8508-4468-aafc-6c86f0da0832',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gérald',
    room: '961',
    reservedBy: 'pq',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '90b7db89-9968-49b7-852a-48962370eab4',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '573',
    reservedBy: 'cb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c88097f4-3d0c-471a-ade9-e9745901aeea',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Irène',
    room: '766',
    reservedBy: 'to',
    bikeFormCompleted: false,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2d465cf3-05c4-46cd-9f50-847af9600bb4',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Wá',
    room: '376',
    reservedBy: 'qf',
    bikeFormCompleted: true,
    comments: 'Etiam faucibus cursus urna.',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5350f4fe-218b-4fb3-9583-ebf3e63408bc',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Lorène',
    room: '319',
    reservedBy: 'yx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '508e8113-ed26-49ee-9eba-2d6741831514',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Léonore',
    room: '900',
    reservedBy: 'se',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e10e33e4-7b2e-4afd-86a9-6b164860fe71',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélanie',
    room: '877',
    reservedBy: 'ga',
    bikeFormCompleted: false,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9f3a577d-d510-4d4a-bf8e-be3ce3dbc205',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yóu',
    room: '384',
    reservedBy: 'bt',
    bikeFormCompleted: false,
    comments: 'In sagittis dui vel nisl.',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '86c08e88-516f-4e8b-802f-b17c705a4fe3',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Cécile',
    room: '311',
    reservedBy: 'fb',
    bikeFormCompleted: false,
    comments: 'Proin at turpis a pede posuere nonummy.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '988524d4-d4a1-48bd-9f80-26731ac83664',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Håkan',
    room: '765',
    reservedBy: 'ab',
    bikeFormCompleted: true,
    comments: 'Sed sagittis.',
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '582c9e79-0cca-48ae-a8ab-1d5ec44018f9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Céline',
    room: '150',
    reservedBy: 'el',
    bikeFormCompleted: false,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '75d01511-6956-47d9-bdbe-7875b6c84407',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Athéna',
    room: '932',
    reservedBy: 'hu',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f40e104d-db7f-4868-85c7-4929db58cac8',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Michèle',
    room: '547',
    reservedBy: 'ag',
    bikeFormCompleted: false,
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7085453b-9d46-4de8-ac32-51a3b9006fc2',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Laurélie',
    room: '094',
    reservedBy: 'yo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ba2747e6-0fc3-4005-904b-abda4f825f5b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Göran',
    room: '757',
    reservedBy: 'dc',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c5fd0d84-87c0-4439-9227-3e629620d1bc',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaïa',
    room: '305',
    reservedBy: 'wz',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6764d33a-8cbd-427c-9ff6-10cbc576f4b1',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Kù',
    room: '087',
    reservedBy: 'mf',
    bikeFormCompleted: true,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6d557cd7-838e-45e6-8cac-f84c698b786a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Dù',
    room: '437',
    reservedBy: 'ot',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4268bf74-63c8-4488-a0e1-a30ebcc059b7',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Örjan',
    room: '834',
    reservedBy: 'sg',
    bikeFormCompleted: false,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dfa3b469-a9f7-4200-b598-f68464b84092',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Léonore',
    room: '953',
    reservedBy: 'el',
    bikeFormCompleted: true,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'db182f1a-bc75-4a19-b4b3-4477bb7636c1',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaétane',
    room: '563',
    reservedBy: 'sh',
    bikeFormCompleted: false,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '25a44ccd-8dd2-44d5-832c-175feae838b9',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '397',
    reservedBy: 'mc',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c246fe4b-9768-44d3-8114-4aa9a617e0d2',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Aloïs',
    room: '428',
    reservedBy: 'qc',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '617250cb-a98d-4c77-b5e0-e07df7e02de0',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Néhémie',
    room: '200',
    reservedBy: 'np',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '61fe3946-ab18-410c-be9f-5adfbdaea558',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Amélie',
    room: '068',
    reservedBy: 'cy',
    bikeFormCompleted: true,
    comments: 'Duis at velit eu est congue elementum.',
    completedAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8c5db955-5e97-485d-b400-c6ecf8c5931b',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Cunégonde',
    room: '459',
    reservedBy: 'vo',
    bikeFormCompleted: false,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '782cf24a-c29d-49a4-8fd8-cdf012e36115',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Véronique',
    room: '910',
    reservedBy: 'sg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '08f56912-0896-4b4d-817a-78e1d91d3e45',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Åsa',
    room: '016',
    reservedBy: 'jj',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '70d29001-dc05-49e2-97c0-51a3e6772d56',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lauréna',
    room: '715',
    reservedBy: 'qf',
    bikeFormCompleted: false,
    comments: 'Vestibulum rutrum rutrum neque.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c7e06141-1637-4eff-8626-c1661adb1c69',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Angélique',
    room: '072',
    reservedBy: 'yq',
    bikeFormCompleted: true,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '446fab71-c81f-47ae-a92c-6ff4cc5eee2d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Örjan',
    room: '437',
    reservedBy: 'ok',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '65673faa-5d6d-4e1a-a16d-6359f10b6af6',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Simplifiés',
    room: '732',
    reservedBy: 'nq',
    bikeFormCompleted: true,
    comments: 'Vivamus tortor.',
    completedAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ea584d67-7417-434e-b9e7-3dd8e235c958',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-hélène',
    room: '660',
    reservedBy: 'uy',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6d665ec6-38ed-4b0d-a68a-d8e7c40f704c',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marlène',
    room: '232',
    reservedBy: 'ay',
    bikeFormCompleted: true,
    comments:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e2ddeedf-865f-43f3-b91e-24c941eb69f1',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estée',
    room: '674',
    reservedBy: 'kh',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f4d917e0-653d-46c0-abc1-1c8b3e3c0c84',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Táng',
    room: '196',
    reservedBy: 'zj',
    bikeFormCompleted: true,
    comments: 'Ut tellus.',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2972ad79-5da7-49a3-a1e2-947acf84ded5',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pénélope',
    room: '431',
    reservedBy: 'kk',
    bikeFormCompleted: null,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cd37c098-8a5e-4dbc-a8ef-86426704ea72',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('3/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Edmée',
    room: '100',
    reservedBy: 'fu',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ff7d2977-17c8-4d41-bbe7-083c6262582f',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maïlys',
    room: '716',
    reservedBy: 'au',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '89b5b830-f231-4d7a-abbf-d75862291c63',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Méryl',
    room: '630',
    reservedBy: 'cr',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4d886a7b-57ad-4f6b-9e48-7fb0c30c4ad6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Eugénie',
    room: '282',
    reservedBy: 'ts',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b8ad7069-299a-435a-816e-b9e0b52f149a',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Chloé',
    room: '533',
    reservedBy: 'pw',
    bikeFormCompleted: false,
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '24c47713-f408-40c3-8c80-f61dcc3ba9ba',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Hélèna',
    room: '346',
    reservedBy: 'bj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '268fab50-c268-46db-ab0c-aa30ecf23177',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lucrèce',
    room: '192',
    reservedBy: 'qj',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6a205a1f-d70a-478f-835c-01eda57768d8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cléa',
    room: '200',
    reservedBy: 'tu',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3ba94dc5-79ec-4cd7-9eae-d83013c4fef8',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Loïca',
    room: '130',
    reservedBy: 'gv',
    bikeFormCompleted: true,
    comments: 'Nam dui.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bc098a5c-b76a-4548-b6b4-c0a7d905c218',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Göran',
    room: '941',
    reservedBy: 'rm',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f68f52e4-d06f-45ec-b44b-bd1f01dcc070',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Kallisté',
    room: '403',
    reservedBy: 'nc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b89e152a-10f2-4284-b334-8650931b47c1',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Estée',
    room: '615',
    reservedBy: 'ny',
    bikeFormCompleted: true,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e5d5836d-7ac1-4716-a11a-724a30d72ff1',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méthode',
    room: '935',
    reservedBy: 'yf',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '12badd22-212b-4261-82b6-833d5bb5fb2e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bénédicte',
    room: '897',
    reservedBy: 'qk',
    bikeFormCompleted: false,
    comments: 'Donec posuere metus vitae ipsum.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4374a584-14a6-4074-a575-e41f4d417eff',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-hélène',
    room: '453',
    reservedBy: 'eh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6ef6968c-c35f-4d83-9891-acab4649cc5f',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaétane',
    room: '441',
    reservedBy: 'qx',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '11c9df48-2c00-44f1-9f93-b60ef5118309',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Vérane',
    room: '134',
    reservedBy: 'kj',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cc309f11-ccd3-405f-a6b3-fe937a8a9347',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Esbjörn',
    room: '821',
    reservedBy: 'fs',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ba034581-ef11-42b1-8f1a-c473d3e8fe49',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '179',
    reservedBy: 'zf',
    bikeFormCompleted: true,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f0266572-ec09-4059-84d7-4191d9289b98',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélissandre',
    room: '481',
    reservedBy: 'cb',
    bikeFormCompleted: null,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a9611793-a93e-40ae-ac65-5a7fb15b46aa',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Börje',
    room: '863',
    reservedBy: 'bg',
    bikeFormCompleted: false,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2347dd4c-3a4b-4259-b198-b37b7f4d3fb3',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Anaé',
    room: '280',
    reservedBy: 'gu',
    bikeFormCompleted: true,
    comments: 'Donec dapibus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '54828dbd-0893-4812-b206-70649e16cc5c',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Estée',
    room: '518',
    reservedBy: 'kx',
    bikeFormCompleted: false,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e09eeb44-7b70-448e-af54-5cab3b13db73',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Eliès',
    room: '003',
    reservedBy: 'vx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bd9444e6-da89-4c5c-952d-90eb00f89214',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Aimée',
    room: '885',
    reservedBy: 'ip',
    bikeFormCompleted: true,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8f7e19d0-5ce7-4007-a298-375d7ebae3b5',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Kallisté',
    room: '117',
    reservedBy: 'kw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '838003d7-1261-4f9c-8323-a730720ebcb1',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mén',
    room: '060',
    reservedBy: 'oq',
    bikeFormCompleted: true,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9a885bb2-0349-4ada-a50b-0f894f23e9a1',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Jú',
    room: '394',
    reservedBy: 'ar',
    bikeFormCompleted: false,
    comments: 'Sed accumsan felis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'caf42206-fa71-4df5-bcc9-d5297c96eb8d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Måns',
    room: '565',
    reservedBy: 'uq',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '933e8052-e5db-417d-b521-b7321bfdee60',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Yáo',
    room: '474',
    reservedBy: 'xh',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a73ee52b-c6ae-4459-a384-9dccb68c3ca6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naëlle',
    room: '266',
    reservedBy: 'wg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd3b580b5-c4f1-4601-9493-0cbdac8b05a8',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Frédérique',
    room: '727',
    reservedBy: 'av',
    bikeFormCompleted: false,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4cdaa172-d691-4c8b-ab37-b5a854dbe442',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Joséphine',
    room: '455',
    reservedBy: 'fi',
    bikeFormCompleted: false,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a28420d5-106e-45e2-93d0-e5f3eb1e0381',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïté',
    room: '585',
    reservedBy: 'qg',
    bikeFormCompleted: false,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '10f448e8-9eac-4809-a426-48b59c7d143b',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Géraldine',
    room: '225',
    reservedBy: 'jr',
    bikeFormCompleted: true,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e17abf0a-2504-4ae4-8d90-b7adbf5b2ab7',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-josée',
    room: '995',
    reservedBy: 'aq',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cf06978a-eb2e-4658-bfbb-7d25ed806376',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léone',
    room: '924',
    reservedBy: 'vi',
    bikeFormCompleted: false,
    comments: 'Fusce consequat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '69656f96-25b3-4e29-ac68-9a7571bec245',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léonore',
    room: '642',
    reservedBy: 'nt',
    bikeFormCompleted: true,
    comments: 'Aliquam non mauris.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '451c9f9d-0691-425c-884f-09c0d8b1a523',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Régine',
    room: '864',
    reservedBy: 'me',
    bikeFormCompleted: false,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7e872ad3-61a0-454b-9ff4-2d5778afa7e4',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréanne',
    room: '993',
    reservedBy: 'ur',
    bikeFormCompleted: null,
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b467bdd1-7212-4ef8-916d-a48b0baee115',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Örjan',
    room: '429',
    reservedBy: 'ma',
    bikeFormCompleted: null,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '139dab27-bc50-4e0f-a794-bc69d7b08af4',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Gösta',
    room: '268',
    reservedBy: 'yd',
    bikeFormCompleted: true,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '83a408da-4d6b-4b32-9355-5fbd2a8a28ff',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ophélie',
    room: '972',
    reservedBy: 'wo',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2256b1a0-dfb1-42e0-a067-c71b140d1701',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Lucrèce',
    room: '613',
    reservedBy: 'ys',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9c37fd4e-75ee-4830-811c-2845cd2f2cc5',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Åsa',
    room: '491',
    reservedBy: 'sd',
    bikeFormCompleted: false,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c1749d63-fb58-4d79-9e5d-4864adb53a53',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andrée',
    room: '800',
    reservedBy: 'em',
    bikeFormCompleted: true,
    comments: 'Praesent blandit.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '202c657d-4b40-4798-bd31-ced9f199fbc4',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Amélie',
    room: '134',
    reservedBy: 'bv',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3e9f87d3-7d04-478a-9731-d08c2ee825fd',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marylène',
    room: '952',
    reservedBy: 'ph',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0a5e7935-e7bc-49de-a9e9-00db91211060',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Tán',
    room: '149',
    reservedBy: 'sz',
    bikeFormCompleted: true,
    comments: 'In blandit ultrices enim.',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e671bfee-f839-4354-a5dd-201ec9cae475',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Cléa',
    room: '620',
    reservedBy: 'fo',
    bikeFormCompleted: true,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a142c14b-56ec-4efb-98d8-e9ca82ae7611',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Måns',
    room: '887',
    reservedBy: 'xa',
    bikeFormCompleted: true,
    comments: 'Aliquam non mauris.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '81e66e11-7fb0-4ebe-bac2-d60a5032f147',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Maëlla',
    room: '997',
    reservedBy: 'tj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '592ca498-aacd-4ed3-b529-a6126c179351',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léana',
    room: '462',
    reservedBy: 'xz',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0fb76321-3dbb-4c2d-9dc3-973797692dae',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Hélène',
    room: '303',
    reservedBy: 'nz',
    bikeFormCompleted: true,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '93128595-b86f-4e80-9d98-45bb616700ca',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Michèle',
    room: '463',
    reservedBy: 'ni',
    bikeFormCompleted: false,
    comments: 'Morbi non lectus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2441e37f-679d-497d-93df-3177040e0566',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Fèi',
    room: '850',
    reservedBy: 'qy',
    bikeFormCompleted: true,
    comments: 'Aenean auctor gravida sem.',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd239aad1-e39a-44c4-8ee7-3201449d930f',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Aloïs',
    room: '331',
    reservedBy: 'jt',
    bikeFormCompleted: true,
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f46ac1ee-e3fa-4642-98cf-101514ca760a',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Béatrice',
    room: '530',
    reservedBy: 'gk',
    bikeFormCompleted: null,
    comments: 'Maecenas rhoncus aliquam lacus.',
    completedAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '10073f84-679e-4f33-a790-3e44357cfb05',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naëlle',
    room: '745',
    reservedBy: 'vs',
    bikeFormCompleted: true,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '20b07486-b817-463d-8e61-4c733f1f7ee9',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Josée',
    room: '607',
    reservedBy: 'tf',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '596d26b1-0ebc-4dbc-9945-309eeb5978cb',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Irène',
    room: '834',
    reservedBy: 'oo',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9892b01c-9741-4905-96e4-5f1de1cdf4b0',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Angèle',
    room: '170',
    reservedBy: 'mx',
    bikeFormCompleted: true,
    comments: 'Donec semper sapien a libero.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7905cc1f-5279-43ed-874f-b85af056b2b7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cloé',
    room: '325',
    reservedBy: 'mw',
    bikeFormCompleted: true,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8f6805a4-355e-4795-8fe4-6236e5e1c577',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Tú',
    room: '235',
    reservedBy: 'bs',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '04aebddc-bd5f-47fd-bf85-70bce7685d91',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maéna',
    room: '665',
    reservedBy: 'te',
    bikeFormCompleted: false,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    completedAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '42a5e268-8d85-41ad-a28a-8d42f19cdef7',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aí',
    room: '732',
    reservedBy: 're',
    bikeFormCompleted: true,
    comments: 'Donec vitae nisi.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'aa26284a-34e5-4430-b7e0-8fbbf10cce41',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pål',
    room: '335',
    reservedBy: 'wc',
    bikeFormCompleted: true,
    comments: 'Maecenas pulvinar lobortis est.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '32cb4c3f-8a93-4c29-99c5-93d209340cc6',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Håkan',
    room: '353',
    reservedBy: 'xh',
    bikeFormCompleted: null,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5357a253-0741-48b1-9392-4dbfdee52a2c',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Mélinda',
    room: '141',
    reservedBy: 'ja',
    bikeFormCompleted: null,
    comments: 'Mauris sit amet eros.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2e0a5e70-ac93-4ffb-9990-d91648528d4b',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Valérie',
    room: '871',
    reservedBy: 'gd',
    bikeFormCompleted: true,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd94ca318-e246-486d-b4d5-0626dbd1d5e5',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Börje',
    room: '510',
    reservedBy: 'yl',
    bikeFormCompleted: false,
    comments: 'Nulla nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '809149da-49b3-4186-9131-0599be3b8773',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Cunégonde',
    room: '228',
    reservedBy: 'xl',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '317a19c2-9015-4969-a13e-737dd7a8dba4',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélissandre',
    room: '529',
    reservedBy: 'ob',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'af4dfeed-8c2b-4575-b343-4ed0cbe5d3b3',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pål',
    room: '936',
    reservedBy: 'tf',
    bikeFormCompleted: true,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ca203a90-5252-45b5-8cf9-77810760b671',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Noëlla',
    room: '560',
    reservedBy: 'au',
    bikeFormCompleted: false,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7e57e629-04bf-4777-a256-0b880283e52e',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Lóng',
    room: '060',
    reservedBy: 'dd',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dc47fbe9-649a-4d48-a0fe-7e8d266681c7',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Dù',
    room: '584',
    reservedBy: 'mx',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'bbcdf8f4-88e5-44ad-876c-6e7cf1fa9957',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('3/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gwenaëlle',
    room: '246',
    reservedBy: 'jn',
    bikeFormCompleted: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '98054711-9939-4d16-bcc1-b6b5adee79f4',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lài',
    room: '040',
    reservedBy: 'fq',
    bikeFormCompleted: false,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ced580e3-ae63-45d5-9088-eb766f80569b',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Naéva',
    room: '225',
    reservedBy: 'js',
    bikeFormCompleted: false,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6252627b-ae3a-4ae1-b859-4c5ba14a7b50',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Amélie',
    room: '294',
    reservedBy: 'jd',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5a5a8e28-f465-4ec4-b934-5c0cf46bffee',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pélagie',
    room: '389',
    reservedBy: 'hh',
    bikeFormCompleted: true,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7de2a4a8-648c-4067-bf2a-0e06b15f0871',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Gaétane',
    room: '321',
    reservedBy: 'fq',
    bikeFormCompleted: false,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4fae805b-4a85-4de7-9e27-0c5b991570ac',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mélissandre',
    room: '376',
    reservedBy: 'xd',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9064d642-9743-4c8e-962f-25e591d95c30',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aimée',
    room: '390',
    reservedBy: 'qj',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '35776221-b742-41b3-88aa-19c0f3adb282',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaétane',
    room: '131',
    reservedBy: 'ko',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5539e3fa-33ea-41bb-a0e7-d145b2f74d66',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Esbjörn',
    room: '660',
    reservedBy: 'lg',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fd492950-8fa0-4edd-ba97-dd3041d3f42d',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Noëlla',
    room: '833',
    reservedBy: 'ee',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ce3e0ad8-3f39-4544-973a-8cf67e3133c0',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cinéma',
    room: '162',
    reservedBy: 'ho',
    bikeFormCompleted: false,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ab265934-581c-41b5-a99e-5035b717981d',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Océanne',
    room: '281',
    reservedBy: 'wo',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ed871fc9-8df9-49e9-b66d-94ee6942976c',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Jú',
    room: '204',
    reservedBy: 'kl',
    bikeFormCompleted: false,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b6ac3735-3dee-4ed2-8e09-03ede4257ff0',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Renée',
    room: '320',
    reservedBy: 'qm',
    bikeFormCompleted: true,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '764f1f04-c925-494b-b307-8e5b369ee959',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mårten',
    room: '461',
    reservedBy: 'sx',
    bikeFormCompleted: true,
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4eb5d8b9-f17b-479e-8a71-fa36125d3b04',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèsa',
    room: '956',
    reservedBy: 'dz',
    bikeFormCompleted: true,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '63fde3f4-f982-4fc8-bc02-06dc533cea3d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Frédérique',
    room: '619',
    reservedBy: 'ir',
    bikeFormCompleted: true,
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1f0da5d0-c288-4d4d-b9e0-e5c91c683325',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Audréanne',
    room: '313',
    reservedBy: 'lc',
    bikeFormCompleted: true,
    comments: 'Proin risus.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9813a8dc-1d34-45ea-9975-8ebea90fc667',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Miléna',
    room: '602',
    reservedBy: 'jw',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '321188b1-4973-4f14-9248-392ddb284a36',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Björn',
    room: '734',
    reservedBy: 'va',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '320a5d46-8259-4139-920f-35bb70ad529a',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Crééz',
    room: '703',
    reservedBy: 'vj',
    bikeFormCompleted: false,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4308ac41-620f-4974-98d1-a3a72053608c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('3/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léonie',
    room: '297',
    reservedBy: 'kd',
    bikeFormCompleted: false,
    comments: 'Etiam justo.',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '908727ae-a358-4187-8038-aa4f86980937',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'André',
    room: '780',
    reservedBy: 'wz',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9fc79e19-f8f3-448f-aa7b-e3650daf7565',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Léane',
    room: '051',
    reservedBy: 'mg',
    bikeFormCompleted: true,
    comments: 'Integer non velit.',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '76d50b93-206e-41b3-a1c6-5f4d822d19b6',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Frédérique',
    room: '244',
    reservedBy: 'zm',
    bikeFormCompleted: false,
    comments: 'Nam nulla.',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '25ab6a23-2979-4ccf-92c4-9d63b1b39b75',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Kallisté',
    room: '332',
    reservedBy: 'ac',
    bikeFormCompleted: false,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1deb51e4-f192-4547-a824-3eca87d9658a',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Audréanne',
    room: '725',
    reservedBy: 'in',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fc909998-a854-4b33-9182-375b4de52f61',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Maëlys',
    room: '026',
    reservedBy: 'cb',
    bikeFormCompleted: false,
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'eb77ec33-2b82-416d-a914-46fec1c9447e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Thérèsa',
    room: '794',
    reservedBy: 'aa',
    bikeFormCompleted: false,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fe5a8151-d00e-4226-b99e-86fc45e8e82a',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-françoise',
    room: '413',
    reservedBy: 'qs',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '351cd549-d3aa-40bb-9093-6d6611ea1307',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lorène',
    room: '120',
    reservedBy: 'gb',
    bikeFormCompleted: true,
    comments: 'Etiam vel augue.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3c9b3c48-7798-44cc-9546-053b0c462d1e',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérénice',
    room: '940',
    reservedBy: 'xn',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2a527278-0aa2-492c-8e58-0a14d167c8c8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yè',
    room: '711',
    reservedBy: 'ak',
    bikeFormCompleted: false,
    comments: 'Nulla suscipit ligula in lacus.',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '68fc88a0-2152-412c-b5ab-d5b9ab29211b',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méryl',
    room: '085',
    reservedBy: 'yh',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ff97dbe2-7b6a-49bb-b5c4-61ddf63427e3',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Marylène',
    room: '875',
    reservedBy: 'vh',
    bikeFormCompleted: false,
    comments: 'Nulla mollis molestie lorem.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1bbaf0e5-e11f-4213-92c5-76221c2dbe3c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marylène',
    room: '174',
    reservedBy: 'lq',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0e8b0784-6b89-4bbf-ae23-2e1ab873953b',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Stéphanie',
    room: '513',
    reservedBy: 'jv',
    bikeFormCompleted: false,
    comments: 'Nunc purus.',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1328f7ac-6188-4774-8dbd-e72a0a03a0a4',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Océanne',
    room: '200',
    reservedBy: 'td',
    bikeFormCompleted: false,
    comments: 'Donec vitae nisi.',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '794c8e1e-7564-4c7e-a348-7d1330a56d35',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Marie-françoise',
    room: '196',
    reservedBy: 'aw',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '556942eb-b559-4eb5-b719-fdb863b00540',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gisèle',
    room: '943',
    reservedBy: 'ib',
    bikeFormCompleted: true,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9b80c455-2e65-43c1-91d3-45b42e1d310e',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gérald',
    room: '770',
    reservedBy: 'ec',
    bikeFormCompleted: null,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e587c43b-f77f-4074-a2bb-8a469fc163e8',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Bénédicte',
    room: '815',
    reservedBy: 'ld',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8313c415-229d-4370-86b3-e67351018d95',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Hélèna',
    room: '025',
    reservedBy: 'wj',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6a0cdbd8-6915-4156-8526-76e3acee94b8',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pélagie',
    room: '647',
    reservedBy: 'mn',
    bikeFormCompleted: null,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a2b16bdf-25a5-4a1a-800e-5c3932b4c62f',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëline',
    room: '282',
    reservedBy: 'll',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '80d1a934-c2bc-4c7b-be2c-0e29071fcb4d',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Maïly',
    room: '811',
    reservedBy: 'ty',
    bikeFormCompleted: false,
    comments: 'Duis mattis egestas metus.',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'af1f99dc-c4aa-4a69-a9d2-e62646b9cc90',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëlann',
    room: '689',
    reservedBy: 'vb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '42e605b6-ede4-46eb-bdee-6fa29c8941da',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Annotée',
    room: '195',
    reservedBy: 'vy',
    bikeFormCompleted: true,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c3686983-61d3-430f-8829-5f795aa1887e',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Laurélie',
    room: '510',
    reservedBy: 'hi',
    bikeFormCompleted: true,
    comments: 'Suspendisse potenti.',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8eb7f57b-41ee-46e9-93f7-def4cb891f4b',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '339',
    reservedBy: 'hx',
    bikeFormCompleted: false,
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '364a0fa1-4d31-4a67-9ee2-269dd56340f6',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maéna',
    room: '579',
    reservedBy: 'fl',
    bikeFormCompleted: true,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b7f3cc5a-e49a-47cb-93f7-be01743157bd',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Jú',
    room: '898',
    reservedBy: 'yr',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0383b8ac-7605-49f7-b607-83923a4c3b2d',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Marylène',
    room: '041',
    reservedBy: 'dm',
    bikeFormCompleted: true,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '37b3a9c5-2502-439e-81f3-eecdc381abd6',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Françoise',
    room: '306',
    reservedBy: 'he',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f048579c-849a-49ea-aaa2-dab274864a40',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Céline',
    room: '565',
    reservedBy: 'yg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '266704f1-4e16-4a7f-aa8e-406c5aa48470',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gérald',
    room: '831',
    reservedBy: 'ef',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7a982eb1-f058-4106-bac5-bf2b4838243f',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gérald',
    room: '465',
    reservedBy: 'mi',
    bikeFormCompleted: false,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2d33151e-a233-433f-bb6e-6bcf7e977351',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Célia',
    room: '405',
    reservedBy: 'ue',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1621bab5-04b8-4965-b328-bdfa8d1f1055',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïwenn',
    room: '767',
    reservedBy: 'mj',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '254c5b3b-6a90-459e-b292-e46e8cf2e965',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Wá',
    room: '619',
    reservedBy: 'vb',
    bikeFormCompleted: true,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '15935b83-4e97-43de-985b-3b01d6dbcb42',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Anaëlle',
    room: '300',
    reservedBy: 'hs',
    bikeFormCompleted: false,
    comments: 'Pellentesque at nulla.',
    completedAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '840a5cdd-e066-4479-b2f1-09e91d8c6275',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maëly',
    room: '053',
    reservedBy: 'pm',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '148abe1b-8018-41af-bf81-8ce45cef4a1e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Ráo',
    room: '653',
    reservedBy: 'mv',
    bikeFormCompleted: true,
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '044c135a-1e35-4261-8935-cbf829045e46',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Josée',
    room: '421',
    reservedBy: 'zk',
    bikeFormCompleted: null,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ad0a1972-2355-45bb-9bcd-590d2863d6ae',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('3/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Océanne',
    room: '010',
    reservedBy: 'xi',
    bikeFormCompleted: false,
    comments: 'In congue.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '52b04993-dba6-4ab1-9513-3c8389e89590',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Andréanne',
    room: '712',
    reservedBy: 'dg',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0d281896-925d-4d49-b113-f740fbd97398',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Dù',
    room: '776',
    reservedBy: 'au',
    bikeFormCompleted: false,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f035319a-80f6-489f-b930-796d8089ca02',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Séverine',
    room: '592',
    reservedBy: 'kb',
    bikeFormCompleted: false,
    comments:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ad18b4be-1c64-4b72-b55a-4ac1ab455209',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Göran',
    room: '021',
    reservedBy: 'td',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '43e4c0da-c2d9-4685-87cc-96b3a89746f0',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Océane',
    room: '178',
    reservedBy: 'xx',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b175af10-280a-4ad0-99b2-28d335a85c8e',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Célestine',
    room: '732',
    reservedBy: 'ux',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '50f23790-b834-41f3-8e46-675a0e73bc98',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Marie-hélène',
    room: '879',
    reservedBy: 'bz',
    bikeFormCompleted: true,
    comments: 'Nunc nisl.',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6e69a389-a119-40fc-806c-0f631280d3ff',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Naéva',
    room: '004',
    reservedBy: 'vv',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'aa25fcf8-e571-42cd-822a-bcd2177f3155',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aloïs',
    room: '863',
    reservedBy: 'ce',
    bikeFormCompleted: false,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '44c77a2d-a1ae-4ea1-85dd-919f4a405a1d',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Eugénie',
    room: '189',
    reservedBy: 'yy',
    bikeFormCompleted: true,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '226794c2-ac98-4845-a815-294d6b937be0',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Danièle',
    room: '687',
    reservedBy: 'pj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '61687788-5196-4439-a2bd-45d1d61e635e',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Nélie',
    room: '719',
    reservedBy: 'wr',
    bikeFormCompleted: true,
    comments: 'Aliquam erat volutpat.',
    completedAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9724a31e-de9d-4786-991b-56399caf5f84',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Camélia',
    room: '326',
    reservedBy: 'qv',
    bikeFormCompleted: false,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2d07ea33-bd65-4614-8281-ae42b3dd1fb1',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Salomé',
    room: '692',
    reservedBy: 'xc',
    bikeFormCompleted: false,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'acfd6eff-46e0-460d-94d0-be6eba380ea6',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gaëlle',
    room: '589',
    reservedBy: 'gr',
    bikeFormCompleted: true,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0329d1a5-36b3-4bca-a5c0-8e4eb85f52da',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Aí',
    room: '209',
    reservedBy: 'mj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '547076a6-8a3f-4386-b8b6-f59cb1fcef64',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Gérald',
    room: '469',
    reservedBy: 'gp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '14e34ec2-48fa-43c9-bcd7-3fb2f79a04a7',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aí',
    room: '752',
    reservedBy: 'yj',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '62d02c1e-97e0-498e-aa52-7f4980d91d36',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Erwéi',
    room: '219',
    reservedBy: 'zp',
    bikeFormCompleted: true,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6f3b8918-f6bc-4845-8f27-d45579dcc4e2',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cléa',
    room: '415',
    reservedBy: 'db',
    bikeFormCompleted: null,
    comments: 'Nam dui.',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5ddd1cd8-bfa5-43a0-8eb1-1217c7a9efb6',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Miléna',
    room: '707',
    reservedBy: 'qw',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e2386550-7f8c-4fdb-a891-5024f7e1a10c',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('3/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-noël',
    room: '765',
    reservedBy: 'ir',
    bikeFormCompleted: false,
    comments: 'Sed accumsan felis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'eaa275fe-598a-4d1a-b642-c20e0ec18db5',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaël',
    room: '192',
    reservedBy: 'to',
    bikeFormCompleted: false,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6e346516-ecb6-49dd-a3c7-13256fb16e06',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Léonie',
    room: '926',
    reservedBy: 'ul',
    bikeFormCompleted: false,
    comments: 'Integer ac leo.',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '60f5c7b7-b130-49a5-bc6c-1d6a2e8d1fa1',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Agnès',
    room: '973',
    reservedBy: 'cn',
    bikeFormCompleted: true,
    comments: 'Nullam varius.',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'cbd26ec3-eae3-4271-b3d8-2d50196797eb',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gérald',
    room: '902',
    reservedBy: 'er',
    bikeFormCompleted: false,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    completedAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '466b8578-8aff-4734-a723-b4baac3b4a8b',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Marlène',
    room: '448',
    reservedBy: 'wq',
    bikeFormCompleted: true,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '57da1aed-48bf-422b-8e52-6671cc3a5b60',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-françoise',
    room: '940',
    reservedBy: 'qs',
    bikeFormCompleted: true,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'aac984e2-8531-4d08-aa5e-b2b03c7a0ace',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Hélèna',
    room: '735',
    reservedBy: 'je',
    bikeFormCompleted: true,
    comments:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '490eeee1-28d4-41f7-bf81-b526eb210875',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Nélie',
    room: '089',
    reservedBy: 'mj',
    bikeFormCompleted: true,
    comments: 'Nam tristique tortor eu pede.',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '260c11f8-75eb-4c3f-97e0-aacf1f35f694',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Réservés',
    room: '899',
    reservedBy: 'bm',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0b42ba45-4fe8-4517-8384-3a57b5e1c640',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Zoé',
    room: '692',
    reservedBy: 'do',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a4b2fac6-d911-4805-a6bc-e797fe9af94f',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Björn',
    room: '490',
    reservedBy: 'ib',
    bikeFormCompleted: false,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a2e27a55-a8a5-4a2e-a358-af7b3f0226d2',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Néhémie',
    room: '957',
    reservedBy: 'mo',
    bikeFormCompleted: true,
    comments: 'In hac habitasse platea dictumst.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '13647ae8-f5dd-4dcb-ba43-aa172b9d77f5',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Yú',
    room: '057',
    reservedBy: 'fr',
    bikeFormCompleted: false,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c287758b-9651-4663-8e54-6cbbed8259d3',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Börje',
    room: '652',
    reservedBy: 'fi',
    bikeFormCompleted: false,
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '144ce827-1777-4ae5-92db-f23579ac508b',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Thérèsa',
    room: '227',
    reservedBy: 'lc',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '52f33b39-7bed-40de-9738-2d5534171bb8',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('3/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lyséa',
    room: '746',
    reservedBy: 'jd',
    bikeFormCompleted: true,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b273898c-3e82-44d2-8007-3b30597254c5',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Görel',
    room: '857',
    reservedBy: 'zv',
    bikeFormCompleted: false,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '331c2d21-7ad1-41a4-b90e-09a1d1627471',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Zoé',
    room: '219',
    reservedBy: 'lp',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2d1358f3-7fd8-48f9-8d24-590042d47f5e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('3/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cécilia',
    room: '730',
    reservedBy: 'xn',
    bikeFormCompleted: true,
    comments: 'Aenean fermentum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b078aaac-7675-4a98-8ec9-3bddfdf077ab',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Camélia',
    room: '050',
    reservedBy: 'ln',
    bikeFormCompleted: true,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f6f1f8d6-0e67-45d8-a7d8-0b11f8099b80',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Mélissandre',
    room: '838',
    reservedBy: 'jj',
    bikeFormCompleted: true,
    comments: 'Sed accumsan felis.',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '57f8853e-1e52-4b77-a68d-7c59bd5f3c39',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Kallisté',
    room: '708',
    reservedBy: 'wp',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '43c9fff3-2d45-4684-9255-0331a765eacb',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Anaé',
    room: '220',
    reservedBy: 'lk',
    bikeFormCompleted: true,
    comments: 'Fusce posuere felis sed lacus.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9c69d1cb-3e25-4c21-87da-3215a33e401e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Clémence',
    room: '889',
    reservedBy: 'rk',
    bikeFormCompleted: false,
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e0eeb414-9b38-4f05-a118-4df2900954db',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Rébecca',
    room: '736',
    reservedBy: 'jj',
    bikeFormCompleted: true,
    comments: 'Morbi a ipsum.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd6f4214a-a20a-479b-a9f5-5f92b2305253',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Mélanie',
    room: '131',
    reservedBy: 'dk',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '72868a68-ef8f-43ec-995f-bae7c00ec998',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léandre',
    room: '461',
    reservedBy: 'rk',
    bikeFormCompleted: false,
    comments: 'Curabitur convallis.',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '2de7e422-cc50-43b0-b450-f69c83f29913',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Göran',
    room: '900',
    reservedBy: 'dk',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9cdd3fb2-3143-4914-8d7c-fea35a23463d',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cécilia',
    room: '802',
    reservedBy: 'ah',
    bikeFormCompleted: false,
    comments: 'Nunc rhoncus dui vel sem.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '71411d34-f77b-4a4b-869d-fe34c808b9db',
    nrOfBikes: '5',
    pickUpTime: null,
    name: 'Börje',
    room: '679',
    reservedBy: 'ps',
    bikeFormCompleted: true,
    comments: 'Curabitur gravida nisi at nibh.',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ca154b47-f9a8-412b-96c9-a4a28a888dba',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Sélène',
    room: '581',
    reservedBy: 'jq',
    bikeFormCompleted: null,
    comments: 'Vivamus vestibulum sagittis sapien.',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd09a3eba-6a3c-4f41-9176-553a098a6060',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Pélagie',
    room: '797',
    reservedBy: 'mv',
    bikeFormCompleted: null,
    comments: 'Proin eu mi.',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '32c1e357-4d28-4b10-b521-08c7c545126a',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Tán',
    room: '222',
    reservedBy: 'bw',
    bikeFormCompleted: null,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1ad8503f-9d90-4f08-a8fb-a3b87b966558',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Yóu',
    room: '075',
    reservedBy: 'mv',
    bikeFormCompleted: true,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'c154c2c2-aed1-4c67-8f60-d44d228b5022',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Bérénice',
    room: '505',
    reservedBy: 'wh',
    bikeFormCompleted: false,
    comments: 'Phasellus sit amet erat.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '055af77a-422f-4b9d-a07b-2d596cd7295b',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Måns',
    room: '991',
    reservedBy: 'ez',
    bikeFormCompleted: false,
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9ff55581-a351-4b21-8927-5b635d9ae632',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Maï',
    room: '833',
    reservedBy: 'wl',
    bikeFormCompleted: false,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a504fa3d-49b3-450e-8f53-611a7ef04f4e',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Kuí',
    room: '398',
    reservedBy: 'ju',
    bikeFormCompleted: true,
    comments: 'Nulla nisl.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7f66f2dc-679a-41a4-ab27-e3e17a0ec485',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Faîtes',
    room: '253',
    reservedBy: 'xj',
    bikeFormCompleted: true,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b3cdcf5e-5848-4e22-be1f-cdd862fb8eb8',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Åke',
    room: '400',
    reservedBy: 'az',
    bikeFormCompleted: true,
    comments:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'abe3249b-4587-4077-992f-3e615cfeff0d',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Torbjörn',
    room: '028',
    reservedBy: 'ck',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1444db07-4eef-4d09-b2e2-dcd21edc1b0b',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Stéphanie',
    room: '953',
    reservedBy: 'ph',
    bikeFormCompleted: false,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7e35aef1-4d5d-4b16-a01e-431d07f3492b',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lorène',
    room: '960',
    reservedBy: 'xt',
    bikeFormCompleted: false,
    comments: 'Nulla facilisi.',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5f5afafd-b734-4aa7-887e-9e5537a7e0ea',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Noëlla',
    room: '494',
    reservedBy: 'zc',
    bikeFormCompleted: false,
    comments: 'Duis aliquam convallis nunc.',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '64b9b6b7-e6bb-4367-8817-e3ba78653356',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maëlyss',
    room: '396',
    reservedBy: 'uw',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '095996d4-169c-4e11-868c-766b9d56882a',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cécilia',
    room: '328',
    reservedBy: 'vb',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '18aaeaec-6b60-471e-a7c6-243c6ba48ab0',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Garçon',
    room: '961',
    reservedBy: 'fe',
    bikeFormCompleted: true,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '036c19dc-f57d-4785-a60a-b1cf5c1f78e7',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Méng',
    room: '941',
    reservedBy: 'bu',
    bikeFormCompleted: null,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4f8cbc20-b002-4bd6-826b-aed9edeab161',
    nrOfBikes: '6',
    pickUpTime: null,
    name: 'Zoé',
    room: '398',
    reservedBy: 'tc',
    bikeFormCompleted: true,
    comments: 'Morbi ut odio.',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '71cc1c86-6c77-410a-848d-73d1287fc693',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Angèle',
    room: '050',
    reservedBy: 'lm',
    bikeFormCompleted: true,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '92757b52-47f5-4903-9704-1aff90e6de7a',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaïs',
    room: '807',
    reservedBy: 'yv',
    bikeFormCompleted: false,
    comments:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f865280a-4039-4559-90c1-b1fe617d1647',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Esbjörn',
    room: '064',
    reservedBy: 'iz',
    bikeFormCompleted: false,
    comments: 'Nulla tempus.',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5a1493a2-ddc4-4301-b0cf-e2ecf700e6de',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-thérèse',
    room: '186',
    reservedBy: 'yh',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a2f0dfc0-fc69-423d-b7a9-8599824c9175',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Andréa',
    room: '034',
    reservedBy: 'cl',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '92bddc56-4f2f-4aaf-a753-82c3d61b0b73',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('3/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'André',
    room: '749',
    reservedBy: 'lc',
    bikeFormCompleted: false,
    comments: 'Pellentesque viverra pede ac diam.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3e759c32-e479-4756-a258-23b89a57aafa',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Annotée',
    room: '549',
    reservedBy: 'ed',
    bikeFormCompleted: true,
    comments: 'Proin eu mi.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'faf20542-864a-4c6b-83a9-d425c64ed239',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Naéva',
    room: '157',
    reservedBy: 'qn',
    bikeFormCompleted: null,
    comments: 'Fusce consequat.',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '20dccc43-2e3c-47c9-8ed9-fd51b68adf35',
    nrOfBikes: '1',
    pickUpTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Cinéma',
    room: '156',
    reservedBy: 'lg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7cf406c7-32cb-49c3-89d3-e3ba34ae23a5',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Personnalisée',
    room: '683',
    reservedBy: 'cd',
    bikeFormCompleted: true,
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'de5f5099-64d7-4e4c-82ee-d611b80b96b3',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Åslög',
    room: '006',
    reservedBy: 'po',
    bikeFormCompleted: true,
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4911db15-83d0-49b5-861c-cbbaedd8988b',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Gaïa',
    room: '356',
    reservedBy: 'oh',
    bikeFormCompleted: false,
    comments: 'Quisque ut erat.',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '806272d8-e509-4bbc-992f-87637a63eb59',
    nrOfBikes: '8',
    pickUpTime: null,
    name: 'Andréanne',
    room: '162',
    reservedBy: 'yg',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'dc6bee5d-8909-409a-88c1-c56b92fd7977',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('3/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Aloïs',
    room: '530',
    reservedBy: 'me',
    bikeFormCompleted: false,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '288241ae-ce69-46a2-857c-83776e792e80',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mylène',
    room: '943',
    reservedBy: 'ug',
    bikeFormCompleted: true,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '4d554c3e-613b-4077-a58a-9d7006aed1d7',
    nrOfBikes: '3',
    pickUpTime: new Date(
      new Date('3/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Yè',
    room: '379',
    reservedBy: 'ax',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'eca943ad-0a3d-47bd-8383-e5f1c935f021',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Hélène',
    room: '601',
    reservedBy: 'os',
    bikeFormCompleted: null,
    comments: 'Maecenas tincidunt lacus at velit.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'fbc17e10-f0eb-4aff-89f5-8235027daf5f',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mahélie',
    room: '025',
    reservedBy: 'bb',
    bikeFormCompleted: null,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '5d7a68b1-523a-4060-a38d-a5624cd2b542',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Lèi',
    room: '911',
    reservedBy: 'ua',
    bikeFormCompleted: true,
    comments: null,
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '3ac6a718-4b4c-473b-a544-59f04761f375',
    nrOfBikes: '0',
    pickUpTime: null,
    name: 'Liè',
    room: '621',
    reservedBy: 'oq',
    bikeFormCompleted: false,
    comments: null,
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '72681f70-b941-43f9-aecc-bd5fccfcfbd3',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Alizée',
    room: '489',
    reservedBy: 'ky',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '46cc6b3e-f953-440f-a570-0781f2556bd5',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léana',
    room: '646',
    reservedBy: 'fo',
    bikeFormCompleted: false,
    comments: 'Duis bibendum.',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd5ebe2d0-63b0-4e26-be1f-8289d3c2a1ac',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Aí',
    room: '942',
    reservedBy: 'wi',
    bikeFormCompleted: null,
    comments: 'Ut at dolor quis odio consequat varius.',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'd1868603-ea50-458f-af18-0aae74492d6c',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Léane',
    room: '758',
    reservedBy: 'nm',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '32401149-563d-4987-8e13-5a7286d12e5b',
    nrOfBikes: '0',
    pickUpTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Mahélie',
    room: '987',
    reservedBy: 'ii',
    bikeFormCompleted: true,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b9b9eace-23e3-4afa-84eb-5ce56a2d35a2',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Loïca',
    room: '854',
    reservedBy: 'yo',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '6397064c-8c69-407e-a11a-77acd876eff1',
    nrOfBikes: '2',
    pickUpTime: null,
    name: 'Joséphine',
    room: '272',
    reservedBy: 'qu',
    bikeFormCompleted: null,
    comments: 'Suspendisse ornare consequat lectus.',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '285d01ad-7c3a-474d-9f86-f2c579a6853a',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('3/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Joséphine',
    room: '729',
    reservedBy: 'co',
    bikeFormCompleted: true,
    comments: 'Nullam porttitor lacus at turpis.',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '89cf190a-7cf7-43ca-b62e-106ce7814f38',
    nrOfBikes: '4',
    pickUpTime: null,
    name: 'Judicaël',
    room: '893',
    reservedBy: 'dr',
    bikeFormCompleted: true,
    comments: 'Phasellus sit amet erat.',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'a2949dbe-fb19-4ce5-bda8-b816917ef002',
    nrOfBikes: '8',
    pickUpTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Almérinda',
    room: '177',
    reservedBy: 'vy',
    bikeFormCompleted: true,
    comments: 'Integer tincidunt ante vel ipsum.',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '1943a989-8949-4ee3-a685-bb4217ba0958',
    nrOfBikes: '2',
    pickUpTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Maïly',
    room: '203',
    reservedBy: 'ye',
    bikeFormCompleted: true,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b4093384-2666-4c06-899d-0bfdacb6ca50',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Kuí',
    room: '823',
    reservedBy: 'ww',
    bikeFormCompleted: false,
    comments: 'Donec ut dolor.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'f9709fb4-2508-4aba-8411-0a3f6bd3f98e',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Camélia',
    room: '049',
    reservedBy: 'fi',
    bikeFormCompleted: true,
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'e2455d57-3e7a-4d7f-b471-82ec427fa226',
    nrOfBikes: '7',
    pickUpTime: null,
    name: 'Marlène',
    room: '723',
    reservedBy: 'vo',
    bikeFormCompleted: false,
    comments:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '75d3454c-fc53-49ea-aa7e-43d5a1a91c1d',
    nrOfBikes: '1',
    pickUpTime: null,
    name: 'Cléa',
    room: '439',
    reservedBy: 'zz',
    bikeFormCompleted: false,
    comments: 'Aenean fermentum.',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '96fb650c-4dfa-411a-8327-72e92546a57e',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Maïwenn',
    room: '446',
    reservedBy: 'rc',
    bikeFormCompleted: false,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '089c3480-f931-497f-963f-bb1e81f0b067',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Mélys',
    room: '176',
    reservedBy: 'lw',
    bikeFormCompleted: true,
    comments: 'Nulla tellus.',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'ae0349c0-7103-4308-84d0-67ef0f8e35b5',
    nrOfBikes: '9',
    pickUpTime: new Date(
      new Date('3/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Marie-françoise',
    room: '673',
    reservedBy: 'sn',
    bikeFormCompleted: false,
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '23b3d3c2-0ea4-4592-a248-731fa147a7f5',
    nrOfBikes: '9',
    pickUpTime: null,
    name: 'Thérèse',
    room: '270',
    reservedBy: 'iy',
    bikeFormCompleted: false,
    comments: null,
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '8e42e079-2d9d-4683-8035-64ab5cf81c82',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Anaëlle',
    room: '913',
    reservedBy: 'xb',
    bikeFormCompleted: true,
    comments: 'Etiam pretium iaculis justo.',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '7e355ca2-a45e-4109-acb5-b5c9556e0509',
    nrOfBikes: '7',
    pickUpTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Sòng',
    room: '888',
    reservedBy: 'oc',
    bikeFormCompleted: false,
    comments: 'Nulla justo.',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'b34e7e36-e205-42ec-bd95-0c33ac262bd3',
    nrOfBikes: '4',
    pickUpTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Tú',
    room: '356',
    reservedBy: 'bc',
    bikeFormCompleted: true,
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '0985fd67-35d5-4c1c-95f7-4dafa58cd404',
    nrOfBikes: '5',
    pickUpTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Géraldine',
    room: '189',
    reservedBy: 'dq',
    bikeFormCompleted: true,
    comments: 'Donec semper sapien a libero.',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: '9959ecc8-d8b2-4273-b599-91f69c9dc616',
    nrOfBikes: '3',
    pickUpTime: null,
    name: 'Vénus',
    room: '306',
    reservedBy: 'ww',
    bikeFormCompleted: null,
    comments: null,
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bikeId: 'be64fa21-2065-4ea9-bd82-df394f5d057f',
    nrOfBikes: '6',
    pickUpTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    name: 'Gérald',
    room: '246',
    reservedBy: 'uy',
    bikeFormCompleted: false,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    completedAt: null,
  },
];
