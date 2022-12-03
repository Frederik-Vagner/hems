import { ILuggage, LuggageType } from '@hems/interfaces';

export const luggages: ILuggage[] = [
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e3a951f1-e419-4cf5-9baf-cae3d27806b0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '769',
    name: 'Aurélie',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description: 'Mauris sit amet eros.',
    tagNr: '6310',
    location: 'LR',
    bbDown: null,
    bbLr: 'cz',
    bbOut: 'xx',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: '4f6aeedb-b95e-410d-a477-d9e42094dfa1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '956',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: null,
    tagNr: '5995',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xy',
    bbOut: 'hx',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
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
    luggageId: 'd7794b14-072f-4396-8da9-3771a71c1b76',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '846',
    name: 'Léonie',
    arrivalTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description: null,
    tagNr: '7392',
    location: 'LR',
    bbDown: 're',
    bbLr: 'qe',
    bbOut: 'fv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5fdc4af3-2247-49f5-8f27-57c15e358b47',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '945',
    name: 'Maïté',
    arrivalTime: null,
    bags: '2+5',
    description: null,
    tagNr: '9391',
    location: 'LR',
    bbDown: null,
    bbLr: 'ue',
    bbOut: 'xh',
    completedAt: new Date(
      new Date('1/19/2023').setHours(
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
    luggageId: 'a1074304-dd52-40c1-8189-3bc0b43019f6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '919',
    name: 'Alizée',
    arrivalTime: null,
    bags: '5+5',
    description: null,
    tagNr: '2031',
    location: 'LR1',
    bbDown: 'rr',
    bbLr: 'et',
    bbOut: 'lr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f1aa9d56-e0e3-49a2-a6b8-78ffaf4a44db',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '153',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description: null,
    tagNr: '6418',
    location: 'LR',
    bbDown: 'za',
    bbLr: 'oc',
    bbOut: 'vj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dd07a875-7de4-4a08-9d9e-632ed466cf88',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '429',
    name: 'Mélia',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    description: null,
    tagNr: '1713',
    location: 'LR1',
    bbDown: 'xo',
    bbLr: 'dd',
    bbOut: 'od',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
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
    luggageId: 'ecb1133f-dd7e-4964-a1a4-697e0294197a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '617',
    name: 'Michèle',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description: 'Etiam faucibus cursus urna.',
    tagNr: '9489',
    location: 'LR1',
    bbDown: null,
    bbLr: 'yx',
    bbOut: 'ot',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6e2326f3-abde-4bbb-8ce6-6826e22ce56e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '502',
    name: 'Kévina',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description: null,
    tagNr: '0788',
    location: 'LR',
    bbDown: 'gv',
    bbLr: 'yd',
    bbOut: 'do',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
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
    luggageId: '28099458-0c53-4ab6-b9ea-580f8207fb30',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '033',
    name: 'Irène',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: null,
    tagNr: '1076',
    location: 'LR',
    bbDown: 'dc',
    bbLr: 'yw',
    bbOut: 'tr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6be1314e-8958-4bd1-92cd-55ceac46e341',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '267',
    name: 'Méng',
    arrivalTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: null,
    tagNr: '7196',
    location: 'LR1',
    bbDown: 'oi',
    bbLr: 'ay',
    bbOut: 'gd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2cf11402-b680-4f23-b38c-3b28a154b7a0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '347',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: 'Etiam faucibus cursus urna.',
    tagNr: '4931',
    location: 'LR',
    bbDown: 'dc',
    bbLr: 'ph',
    bbOut: 'ep',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
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
    luggageId: '0f92d1d5-2fb7-4c77-8fec-4339c2b1d68c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '959',
    name: 'Céline',
    arrivalTime: null,
    bags: '9+5',
    description: null,
    tagNr: '0917',
    location: 'LR1',
    bbDown: 'rk',
    bbLr: 'bn',
    bbOut: 'df',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '954b90aa-3edb-45ab-adb6-bebcb2ae6f1b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '313',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    description: 'Pellentesque viverra pede ac diam.',
    tagNr: '4988',
    location: 'LR1',
    bbDown: null,
    bbLr: 'pe',
    bbOut: 'qw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1f5a24cd-59ff-4064-9f82-a252790db453',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '415',
    name: 'Lauréna',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    tagNr: '5654',
    location: 'LR1',
    bbDown: 'dx',
    bbLr: 'en',
    bbOut: 'lw',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
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
    luggageId: '03aa2d54-bfce-4365-9f95-c2c1a58abb10',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '240',
    name: 'Håkan',
    arrivalTime: null,
    bags: '4+4',
    description: 'Integer non velit.',
    tagNr: '2940',
    location: 'LR1',
    bbDown: 'yk',
    bbLr: 'tf',
    bbOut: 'ga',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
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
    luggageId: '9ea96d56-0e08-4b57-b3e3-92409ce5f1d9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '865',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    tagNr: '1641',
    location: 'LR1',
    bbDown: null,
    bbLr: 'uo',
    bbOut: 'lf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dd43f204-775d-493e-8f9e-8a8159cc71fa',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '375',
    name: 'Maï',
    arrivalTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: 'Proin eu mi.',
    tagNr: '2676',
    location: 'LR',
    bbDown: null,
    bbLr: 'bo',
    bbOut: 'on',
    completedAt: new Date(
      new Date('2/15/2023').setHours(
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
    luggageId: '2e6e62d9-3ee8-4466-9925-0a72b39d466c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '829',
    name: 'Andréa',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '9483',
    location: 'LR',
    bbDown: 'ii',
    bbLr: 'pk',
    bbOut: 'ok',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
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
    luggageId: '3cce7cab-ab55-4304-a53c-cb25c40322af',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '416',
    name: 'Kallisté',
    arrivalTime: null,
    bags: '3+4',
    description: 'Integer non velit.',
    tagNr: '2267',
    location: 'LR1',
    bbDown: null,
    bbLr: 'cq',
    bbOut: 'it',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: '0bb9d0aa-3ec8-4bbf-87c5-f0ff0d309e89',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '072',
    name: 'Adèle',
    arrivalTime: null,
    bags: '5+9',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    tagNr: '5576',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ol',
    bbOut: 'yf',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: 'cabb382f-5597-4ba7-81d3-b7ff109ea52d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '818',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '1034',
    location: 'LR1',
    bbDown: null,
    bbLr: 'tp',
    bbOut: 'sw',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: '627fff43-c8dc-4032-8ee3-609778e7703f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '561',
    name: 'Edmée',
    arrivalTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: 'Fusce consequat.',
    tagNr: '9334',
    location: 'LR1',
    bbDown: 'or',
    bbLr: 'vc',
    bbOut: 'yu',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
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
    luggageId: '63c3bfa5-42e6-46ae-a3ef-44b3d072beef',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '617',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    description: 'Quisque porta volutpat erat.',
    tagNr: '0432',
    location: 'LR1',
    bbDown: null,
    bbLr: 'rh',
    bbOut: 'fy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f8047902-0dbb-4438-ac10-98b5576372b0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '936',
    name: 'Danièle',
    arrivalTime: null,
    bags: '0+9',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '3502',
    location: 'LR',
    bbDown: 'uf',
    bbLr: 'kp',
    bbOut: 'jf',
    completedAt: new Date(
      new Date('2/10/2023').setHours(
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
    luggageId: '8cc72f3d-3d7b-4013-9715-b4a3b30418a0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '777',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: null,
    tagNr: '0291',
    location: 'LR',
    bbDown: null,
    bbLr: 'xt',
    bbOut: 'sv',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: '47c164e7-8792-489e-861c-b45cac1a2a42',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '712',
    name: 'Pénélope',
    arrivalTime: null,
    bags: '8+4',
    description: null,
    tagNr: '5498',
    location: 'LR1',
    bbDown: 'wx',
    bbLr: 'cu',
    bbOut: 'ej',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '670bddc1-b72a-45eb-983f-6c729a8320d5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '304',
    name: 'Géraldine',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    description: 'Donec vitae nisi.',
    tagNr: '8439',
    location: 'LR1',
    bbDown: null,
    bbLr: 'vo',
    bbOut: 'kr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2f5c2f99-e841-45e1-97ad-edb3fb300629',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '478',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    description: null,
    tagNr: '6548',
    location: 'LR1',
    bbDown: 'zq',
    bbLr: 'xz',
    bbOut: 'ir',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '31a0538a-2d9e-4538-a424-b612149aa0a5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '374',
    name: 'Méryl',
    arrivalTime: null,
    bags: '9+5',
    description: 'Mauris lacinia sapien quis libero.',
    tagNr: '2522',
    location: 'LR',
    bbDown: 'bd',
    bbLr: 'po',
    bbOut: 'hg',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
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
    luggageId: '4d6f9ffb-84ed-4a47-907f-39ff39b22606',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '782',
    name: 'Aloïs',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    tagNr: '1016',
    location: 'LR1',
    bbDown: 'bh',
    bbLr: 'hx',
    bbOut: 'ah',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
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
    luggageId: '7ae57b13-c1ce-4e25-a468-1d1813aaf470',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '263',
    name: 'Pélagie',
    arrivalTime: null,
    bags: '7+6',
    description: null,
    tagNr: '1106',
    location: 'LR',
    bbDown: 'nm',
    bbLr: 'ik',
    bbOut: 'lh',
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
    luggageId: '10ba1082-d543-41d6-8520-9bda65843af4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '819',
    name: 'Josée',
    arrivalTime: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    description: 'Cras in purus eu magna vulputate luctus.',
    tagNr: '8116',
    location: 'LR',
    bbDown: 'cg',
    bbLr: 'mc',
    bbOut: 'ki',
    completedAt: new Date(
      new Date('1/9/2023').setHours(
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
    luggageId: '1c761078-6c7f-4b74-b569-2a0b7a5326c6',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '290',
    name: 'Måns',
    arrivalTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    description: null,
    tagNr: '4507',
    location: 'LR1',
    bbDown: 'og',
    bbLr: 'rm',
    bbOut: 'cr',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
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
    luggageId: '91a9fbc4-5304-4ae1-af88-ce9b3d62f13f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '947',
    name: 'Ruò',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    description: null,
    tagNr: '1798',
    location: 'LR1',
    bbDown: 'uw',
    bbLr: 'sn',
    bbOut: 'ei',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
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
    luggageId: 'c72d90cf-e3ae-4bf2-8215-8c66151f164e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '150',
    name: 'Erwéi',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: 'Suspendisse ornare consequat lectus.',
    tagNr: '7210',
    location: 'LR1',
    bbDown: 'zq',
    bbLr: 'sa',
    bbOut: 'zw',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: '29c4b868-4308-4479-9f12-60ee3bf76db0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '498',
    name: 'Åsa',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: 'Proin eu mi.',
    tagNr: '6108',
    location: 'LR1',
    bbDown: 'jp',
    bbLr: 'rj',
    bbOut: 'rj',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: '19d923e4-7c48-4b83-9070-56a9b42f6577',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '654',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '2400',
    location: 'LR1',
    bbDown: 'gk',
    bbLr: 'yw',
    bbOut: 'tc',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
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
    luggageId: 'a5a052dc-aeac-4be9-90a2-07df53be646e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '675',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description: 'Curabitur in libero ut massa volutpat convallis.',
    tagNr: '7686',
    location: 'LR1',
    bbDown: 'dk',
    bbLr: 'qu',
    bbOut: 'ws',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
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
    luggageId: '1e91d460-98da-460e-829a-d6157f551ae2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '024',
    name: 'Laïla',
    arrivalTime: null,
    bags: '3+1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    tagNr: '7181',
    location: 'LR1',
    bbDown: 'qr',
    bbLr: 'lh',
    bbOut: 'rr',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
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
    luggageId: '142de6d8-f9ff-4934-b2ba-8d262d2bd3cb',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '657',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: null,
    tagNr: '7046',
    location: 'LR1',
    bbDown: 'pa',
    bbLr: 'tw',
    bbOut: 'ah',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
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
    luggageId: 'c7cf5d44-78b2-4792-9528-d95c5646f44f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '428',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'Cras in purus eu magna vulputate luctus.',
    tagNr: '3768',
    location: 'LR',
    bbDown: null,
    bbLr: 'xb',
    bbOut: 'xa',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
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
    luggageId: 'e2c28200-ab09-468e-97e9-1936b56efa22',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '257',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description: null,
    tagNr: '0402',
    location: 'LR',
    bbDown: 'om',
    bbLr: 'ui',
    bbOut: 'rx',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: '56a0fb81-1f30-47ac-af46-0412a56f57c3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '993',
    name: 'Desirée',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    description: 'Ut at dolor quis odio consequat varius.',
    tagNr: '9996',
    location: 'LR1',
    bbDown: 'ht',
    bbLr: 'uw',
    bbOut: 'pk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1f158ee9-415f-4389-96f9-a37999356791',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '794',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    tagNr: '0090',
    location: 'LR',
    bbDown: 'nq',
    bbLr: 'gu',
    bbOut: 'pw',
    completedAt: new Date(
      new Date('2/26/2023').setHours(
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
    luggageId: 'e5fe5175-d2de-4f5d-b767-8a79949d1d8b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '862',
    name: 'Anaé',
    arrivalTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description: 'Morbi non lectus.',
    tagNr: '6135',
    location: 'LR',
    bbDown: 'km',
    bbLr: 'wc',
    bbOut: 'ti',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '27f0dba4-d407-42ce-a0d3-d82414d1a187',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '826',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: 'Suspendisse potenti.',
    tagNr: '7919',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mh',
    bbOut: 'je',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
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
    luggageId: 'a0ce2244-7760-416e-9807-ddf89befc1db',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '853',
    name: 'Cécilia',
    arrivalTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description: 'Duis mattis egestas metus.',
    tagNr: '5707',
    location: 'LR1',
    bbDown: null,
    bbLr: 'zp',
    bbOut: 'qo',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5e82102e-d1cc-4c4d-8de9-a4000e17c267',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '935',
    name: 'Méng',
    arrivalTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    tagNr: '9544',
    location: 'LR',
    bbDown: 'yn',
    bbLr: 'io',
    bbOut: 'fz',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: 'fc15e9f0-6446-409b-ab08-e841fb446b56',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '406',
    name: 'Ophélie',
    arrivalTime: null,
    bags: '7+1',
    description: null,
    tagNr: '3332',
    location: 'LR1',
    bbDown: 'mh',
    bbLr: 'iq',
    bbOut: 'lb',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
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
    luggageId: '1a0b0ad4-a417-46e2-8033-b99ccbe2feb7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '422',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description: null,
    tagNr: '2374',
    location: 'LR1',
    bbDown: 'lk',
    bbLr: 'le',
    bbOut: 'ee',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
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
    luggageId: 'b34492ab-f3af-42c2-8933-782ed93a720c',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '687',
    name: 'Gösta',
    arrivalTime: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description: 'Mauris sit amet eros.',
    tagNr: '5657',
    location: 'LR1',
    bbDown: 'iu',
    bbLr: 'mc',
    bbOut: 'cx',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
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
    luggageId: '539b84aa-d0a4-419f-aa56-021b44193799',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '180',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    description: 'Nunc nisl.',
    tagNr: '8530',
    location: 'LR1',
    bbDown: 'kw',
    bbLr: 'yc',
    bbOut: 'fv',
    completedAt: new Date(
      new Date('12/29/2022').setHours(
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
    luggageId: '62e13db8-e9f4-418b-8aa8-0ffb8b3f0fc6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '997',
    name: 'Néhémie',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: 'Phasellus sit amet erat.',
    tagNr: '9354',
    location: 'LR',
    bbDown: 'tk',
    bbLr: 'ig',
    bbOut: 'zc',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: '58d36dc7-1ca8-41cc-ac7a-c7fbacebc2fe',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '985',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: 'Duis aliquam convallis nunc.',
    tagNr: '2944',
    location: 'LR1',
    bbDown: 'vv',
    bbLr: 'ok',
    bbOut: 'pa',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a5cd5334-e606-41f1-ae69-90ca83c2d17d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '971',
    name: 'Néhémie',
    arrivalTime: null,
    bags: '5+5',
    description: null,
    tagNr: '3963',
    location: 'LR1',
    bbDown: 'ne',
    bbLr: 'rk',
    bbOut: 'ln',
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
    luggageId: 'b9582e92-702e-4448-97ba-f402fc2654f2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '613',
    name: 'Mylène',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    description: null,
    tagNr: '3293',
    location: 'LR',
    bbDown: 'kv',
    bbLr: 'rf',
    bbOut: 'qh',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: 'd4a1651c-8744-4a70-b0d8-285e1201c61d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '992',
    name: 'Dorothée',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '3843',
    location: 'LR',
    bbDown: 'yz',
    bbLr: 'yv',
    bbOut: 'ok',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '090d3686-454d-45f7-9eb7-aa5824563e74',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '625',
    name: 'Marylène',
    arrivalTime: null,
    bags: '0+5',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '9625',
    location: 'LR',
    bbDown: 'ua',
    bbLr: 'nl',
    bbOut: 'qg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9048ddab-af31-4925-96f2-925a604c9bba',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '566',
    name: 'Faîtes',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '3400',
    location: 'LR',
    bbDown: 'ho',
    bbLr: 'ez',
    bbOut: 'ey',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '56c27aa5-dff3-4bc6-90b3-102d220f2f0a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '468',
    name: 'Bérengère',
    arrivalTime: null,
    bags: '5+2',
    description: null,
    tagNr: '1621',
    location: 'LR1',
    bbDown: null,
    bbLr: 'lh',
    bbOut: 'vb',
    completedAt: new Date(
      new Date('2/25/2023').setHours(
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
    luggageId: 'd2a6ca25-03be-46b1-a44b-8a8f9a7f40d0',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '280',
    name: 'Åslög',
    arrivalTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    description: null,
    tagNr: '0631',
    location: 'LR',
    bbDown: 'yg',
    bbLr: 'sy',
    bbOut: 'yc',
    completedAt: new Date(
      new Date('2/26/2023').setHours(
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
    luggageId: '660b0446-6952-420b-aa47-964d89d4d686',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '111',
    name: 'Mégane',
    arrivalTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '6809',
    location: 'LR',
    bbDown: 'rh',
    bbLr: 'ot',
    bbOut: 'to',
    completedAt: new Date(
      new Date('2/24/2023').setHours(
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
    luggageId: '47fb290c-47de-4b02-848b-a6150704ad17',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '977',
    name: 'Sélène',
    arrivalTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '3505',
    location: 'LR',
    bbDown: 'ee',
    bbLr: 'jr',
    bbOut: 'uv',
    completedAt: new Date(
      new Date('12/9/2022').setHours(
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
    luggageId: 'e29472b7-ddaf-4516-b437-21a57de9f795',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '582',
    name: 'Frédérique',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    description: null,
    tagNr: '7232',
    location: 'LR1',
    bbDown: 'zg',
    bbLr: 'se',
    bbOut: 'jd',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
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
    luggageId: 'b730b40f-2e29-4acd-9f71-b1df46045a4e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '846',
    name: 'Anaëlle',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description: null,
    tagNr: '1387',
    location: 'LR1',
    bbDown: 'jt',
    bbLr: 'oc',
    bbOut: 'hu',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: '9edeb353-b1d9-4270-a031-cf1658c1c275',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '761',
    name: 'Célia',
    arrivalTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    description: null,
    tagNr: '0361',
    location: 'LR1',
    bbDown: null,
    bbLr: 'zg',
    bbOut: 'qm',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
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
    luggageId: '833caa42-8a03-456b-928a-8665fba16c4b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '943',
    name: 'Tán',
    arrivalTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'Nulla ac enim.',
    tagNr: '4823',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ty',
    bbOut: 'ct',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
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
    luggageId: 'a91afc2f-bb83-4f2b-8dbd-f63f9a86ca78',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '295',
    name: 'Léonore',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: null,
    tagNr: '5731',
    location: 'LR1',
    bbDown: 'ji',
    bbLr: 'br',
    bbOut: 'sb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '92d24ed2-ab46-4af0-a1c9-8046f22a4840',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '572',
    name: 'Méng',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '8744',
    location: 'LR',
    bbDown: 'xw',
    bbLr: 'gl',
    bbOut: 'sw',
    completedAt: new Date(
      new Date('1/2/2023').setHours(
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
    luggageId: 'f184be27-278b-4782-8414-7c92094c27fe',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '124',
    name: 'Judicaël',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '1612',
    location: 'LR1',
    bbDown: 'yv',
    bbLr: 'ms',
    bbOut: 'fs',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '15aa0193-449e-4bb4-91f3-acc5d6729b7c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '593',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    description: null,
    tagNr: '2994',
    location: 'LR',
    bbDown: null,
    bbLr: 'dh',
    bbOut: 'ip',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '667b3196-433b-4c5f-93d0-c746de988ed7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '766',
    name: 'Joséphine',
    arrivalTime: null,
    bags: '0+8',
    description: 'Duis aliquam convallis nunc.',
    tagNr: '8135',
    location: 'LR1',
    bbDown: 'xc',
    bbLr: 'vo',
    bbOut: 'pi',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: '79a20a2c-4078-4b73-8039-6bfa765cf648',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '660',
    name: 'Pål',
    arrivalTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    tagNr: '3166',
    location: 'LR1',
    bbDown: 'iw',
    bbLr: 'ao',
    bbOut: 'ru',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
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
    luggageId: '29071986-b7f4-489f-b200-4361dae3d41c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '804',
    name: 'Adélaïde',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    tagNr: '9386',
    location: 'LR1',
    bbDown: 'we',
    bbLr: 're',
    bbOut: 'dt',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: '116b08b9-3414-489a-8316-1074a3ed64b9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '238',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '1780',
    location: 'LR1',
    bbDown: 'as',
    bbLr: 'vt',
    bbOut: 'kd',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: 'c2dee924-3770-49ce-901f-1cc1af38f825',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '401',
    name: 'Lorène',
    arrivalTime: null,
    bags: '3+7',
    description: null,
    tagNr: '8266',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mu',
    bbOut: 'co',
    completedAt: new Date(
      new Date('11/9/2022').setHours(
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
    luggageId: '31fb2555-2080-4a38-9c36-facac2c9030b',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '238',
    name: 'Thérèse',
    arrivalTime: null,
    bags: '1+5',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '4670',
    location: 'LR',
    bbDown: 'vd',
    bbLr: 'uk',
    bbOut: 'ks',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
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
    luggageId: 'ec93910e-2064-4f0c-b5c1-3b075e6278a5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '821',
    name: 'Desirée',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    tagNr: '9298',
    location: 'LR1',
    bbDown: 'ic',
    bbLr: 'mn',
    bbOut: 'wt',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
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
    luggageId: '178e84b6-a975-4379-97f8-a4971096fe38',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '206',
    name: 'Béatrice',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '6936',
    location: 'LR1',
    bbDown: 'rz',
    bbLr: 'zj',
    bbOut: 'pe',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
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
    luggageId: '88ca9ff7-40d4-4584-8a8e-6af1d68f031f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '350',
    name: 'Faîtes',
    arrivalTime: null,
    bags: '2+8',
    description: 'Suspendisse potenti.',
    tagNr: '2231',
    location: 'LR',
    bbDown: null,
    bbLr: 'pd',
    bbOut: 'na',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
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
    luggageId: '6a2b89b5-13e1-451d-9b5c-46211baf7537',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '523',
    name: 'Simplifiés',
    arrivalTime: null,
    bags: '2+2',
    description: 'Curabitur in libero ut massa volutpat convallis.',
    tagNr: '0719',
    location: 'LR',
    bbDown: null,
    bbLr: 'yf',
    bbOut: 'sv',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: '4ae20b6c-8439-4e1e-96ce-b3a9721e264a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '980',
    name: 'Anaëlle',
    arrivalTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    tagNr: '5367',
    location: 'LR',
    bbDown: 'pi',
    bbLr: 'qh',
    bbOut: 'bv',
    completedAt: new Date(
      new Date('2/8/2023').setHours(
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
    luggageId: 'b3f1d55e-9486-43fe-90f4-a7ede159120c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '793',
    name: 'Maïwenn',
    arrivalTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    description: null,
    tagNr: '0144',
    location: 'LR1',
    bbDown: 'qw',
    bbLr: 'az',
    bbOut: 'xw',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
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
    luggageId: '8872e469-7827-40e4-a589-6704d5c39018',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '920',
    name: 'Liè',
    arrivalTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description: 'Maecenas rhoncus aliquam lacus.',
    tagNr: '7615',
    location: 'LR1',
    bbDown: 'xd',
    bbLr: 'oe',
    bbOut: 'bo',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e05cd867-1090-441b-901b-6d2dc96d8485',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '566',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    description: null,
    tagNr: '1496',
    location: 'LR1',
    bbDown: 'qc',
    bbLr: 'ez',
    bbOut: 'zj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '09aa5d27-c477-43c9-93fa-2fa33b4ff7f1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '036',
    name: 'Maëlys',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    description: null,
    tagNr: '6369',
    location: 'LR',
    bbDown: 'he',
    bbLr: 'uw',
    bbOut: 'us',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
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
    luggageId: 'edfdf464-9893-4c0e-bf63-b1b4e36c6f92',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '882',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    tagNr: '8429',
    location: 'LR1',
    bbDown: 'ul',
    bbLr: 'zx',
    bbOut: 'ni',
    completedAt: new Date(
      new Date('1/2/2023').setHours(
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
    luggageId: '59259050-7b5a-40d7-a1ae-8d697c73fa80',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '852',
    name: 'Mylène',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: null,
    tagNr: '2619',
    location: 'LR1',
    bbDown: 'op',
    bbLr: 'nj',
    bbOut: 'sn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5b7ced98-dc3e-423e-adbd-ae05a9301f69',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '564',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    description: null,
    tagNr: '4228',
    location: 'LR1',
    bbDown: 'ls',
    bbLr: 'dh',
    bbOut: 'hs',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a4e1a78d-2218-4401-8d41-810ba0885be7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '620',
    name: 'Håkan',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: 'Nullam varius.',
    tagNr: '5570',
    location: 'LR1',
    bbDown: null,
    bbLr: 'zv',
    bbOut: 'an',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: '91bf6d0d-89a2-4ebb-8d5a-32403cb099b1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '773',
    name: 'Adèle',
    arrivalTime: null,
    bags: '3+8',
    description: 'Phasellus id sapien in sapien iaculis congue.',
    tagNr: '8082',
    location: 'LR',
    bbDown: 'qj',
    bbLr: 'zl',
    bbOut: 'zq',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
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
    luggageId: '4395c9fb-6114-45cd-b5c8-0c1d5f8715b8',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '060',
    name: 'Nuó',
    arrivalTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description: null,
    tagNr: '7093',
    location: 'LR',
    bbDown: null,
    bbLr: 'fq',
    bbOut: 'gc',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: '44ffd96f-dfdc-4cfe-a6eb-e9894f00c051',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '206',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: 'Morbi quis tortor id nulla ultrices aliquet.',
    tagNr: '8723',
    location: 'LR1',
    bbDown: 'ij',
    bbLr: 'av',
    bbOut: 'vx',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f6d8317f-56f1-4c3d-975d-bd7a0f7dac66',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '610',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: 'Integer ac neque.',
    tagNr: '3572',
    location: 'LR1',
    bbDown: 'hd',
    bbLr: 'bu',
    bbOut: 'ox',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
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
    luggageId: 'a2505a45-5f8d-4510-9dfb-e1005857a36b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '243',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    description: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '4050',
    location: 'LR1',
    bbDown: null,
    bbLr: 'tf',
    bbOut: 'tl',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
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
    luggageId: '6264d679-2edb-4c98-883b-6bfd6613fb33',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '288',
    name: 'Clémence',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: null,
    tagNr: '8466',
    location: 'LR',
    bbDown: 'qg',
    bbLr: 'yd',
    bbOut: 'xv',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
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
    luggageId: 'b5b58f19-7844-46f0-9aad-c71e8b8a0018',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '254',
    name: 'Aimée',
    arrivalTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '2629',
    location: 'LR1',
    bbDown: 'pr',
    bbLr: 've',
    bbOut: 'nt',
    completedAt: new Date(
      new Date('1/20/2023').setHours(
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
    luggageId: 'fa88fa68-3de4-4837-aaa0-c62d107f7b0d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '459',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    description: 'Pellentesque at nulla.',
    tagNr: '0865',
    location: 'LR1',
    bbDown: 'ya',
    bbLr: 'vy',
    bbOut: 'ud',
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
    luggageId: 'be235f89-71d6-4f8d-a605-5c74d5652b49',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '548',
    name: 'Yáo',
    arrivalTime: null,
    bags: '4+7',
    description: null,
    tagNr: '7777',
    location: 'LR1',
    bbDown: 'kd',
    bbLr: 'lq',
    bbOut: 'yw',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
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
    luggageId: '566814ce-6cb3-4874-af66-e6efd4e5acd0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '063',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '3068',
    location: 'LR',
    bbDown: null,
    bbLr: 'of',
    bbOut: 'tk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b4677974-50a9-401b-89ee-6ab8a5afbaf4',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '853',
    name: 'Léonie',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    description: null,
    tagNr: '0389',
    location: 'LR',
    bbDown: null,
    bbLr: 'qu',
    bbOut: 'yu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '625b845a-4e2b-41c2-8f31-e3d6353477aa',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '982',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: 'Integer ac leo.',
    tagNr: '3703',
    location: 'LR',
    bbDown: null,
    bbLr: 'gj',
    bbOut: 'ai',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5243e15a-5305-4ac1-9aa7-2881e0ab5414',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '910',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '7923',
    location: 'LR',
    bbDown: null,
    bbLr: 'fi',
    bbOut: 'qk',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
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
    luggageId: 'a02f7d76-a079-4877-9490-8e975c32e3b5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '233',
    name: 'Torbjörn',
    arrivalTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    description: null,
    tagNr: '3373',
    location: 'LR1',
    bbDown: 'th',
    bbLr: 'gd',
    bbOut: 'bw',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
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
    luggageId: '18de893b-04e8-4154-81e3-b97787604b06',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '910',
    name: 'Maëly',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '9580',
    location: 'LR1',
    bbDown: 'dh',
    bbLr: 'dg',
    bbOut: 'ey',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ad45354f-288c-4426-a836-ce977022d916',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '809',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: null,
    tagNr: '5895',
    location: 'LR',
    bbDown: null,
    bbLr: 'sq',
    bbOut: 'pp',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
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
    luggageId: '5e8133f4-f420-46f2-bc31-c3ddc85cc4c3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '433',
    name: 'Maï',
    arrivalTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: 'Nulla facilisi.',
    tagNr: '7168',
    location: 'LR1',
    bbDown: 'bp',
    bbLr: 'mp',
    bbOut: 'fq',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
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
    luggageId: '61f6eee5-6baa-4dfa-a393-23295c372a53',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '245',
    name: 'Agnès',
    arrivalTime: null,
    bags: '7+0',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '7664',
    location: 'LR1',
    bbDown: 'ch',
    bbLr: 'lo',
    bbOut: 'su',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
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
    luggageId: '47defa90-da50-4712-a661-7347e24c061e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '718',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: null,
    tagNr: '2471',
    location: 'LR1',
    bbDown: 'lq',
    bbLr: 'sl',
    bbOut: 'hw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ff4f82ed-8034-4423-880a-fe2b103a05c7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '043',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: null,
    tagNr: '9653',
    location: 'LR1',
    bbDown: null,
    bbLr: 'il',
    bbOut: 'nu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '78ee4524-91ec-4e72-b1eb-e34fba1940e6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '142',
    name: 'Jú',
    arrivalTime: null,
    bags: '2+5',
    description: null,
    tagNr: '9960',
    location: 'LR',
    bbDown: 'fz',
    bbLr: 'zv',
    bbOut: 'rd',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
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
    luggageId: '9a62e76e-ad41-4b0c-bb77-0aca26a4295d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '793',
    name: 'Dorothée',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description: 'Proin risus.',
    tagNr: '0949',
    location: 'LR1',
    bbDown: 'nu',
    bbLr: 'wp',
    bbOut: 'pc',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: 'be59023d-e4cd-40aa-acfe-819605eb1eac',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '668',
    name: 'Naéva',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: 'Suspendisse potenti.',
    tagNr: '6292',
    location: 'LR',
    bbDown: 'zg',
    bbLr: 'hy',
    bbOut: 'pn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '52a83504-7676-4670-a536-fd61c8780daf',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '087',
    name: 'Maëly',
    arrivalTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    description: null,
    tagNr: '5667',
    location: 'LR',
    bbDown: null,
    bbLr: 'kv',
    bbOut: 'eu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'eb6cfce4-3a0c-4da0-81ab-4465b502b94c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '295',
    name: 'Léone',
    arrivalTime: null,
    bags: '1+3',
    description: null,
    tagNr: '4617',
    location: 'LR1',
    bbDown: 'mj',
    bbLr: 'ho',
    bbOut: 'vb',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
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
    luggageId: '3e38607d-db93-4eba-bdc3-09ddace0c700',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '868',
    name: 'Håkan',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    description: 'Aenean fermentum.',
    tagNr: '0496',
    location: 'LR',
    bbDown: null,
    bbLr: 'dx',
    bbOut: 'bd',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
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
    luggageId: '0d20b068-9775-4170-9e4d-197a3329bb3e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '851',
    name: 'Audréanne',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: null,
    tagNr: '1011',
    location: 'LR1',
    bbDown: 'pc',
    bbLr: 'cl',
    bbOut: 'do',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a39a5ac3-af9a-4097-af6b-1ea3b9db2716',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '372',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    description: null,
    tagNr: '9393',
    location: 'LR1',
    bbDown: 'kj',
    bbLr: 'iv',
    bbOut: 'jb',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: '1d49ce16-cec0-4d79-a408-993730d6c592',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '574',
    name: 'Åslög',
    arrivalTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description: 'Mauris lacinia sapien quis libero.',
    tagNr: '5449',
    location: 'LR',
    bbDown: 'dh',
    bbLr: 'ed',
    bbOut: 'my',
    completedAt: new Date(
      new Date('2/5/2023').setHours(
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
    luggageId: 'bde49c3a-5b8c-4b2b-a220-e641a0a1157d',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '858',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: 'In blandit ultrices enim.',
    tagNr: '5426',
    location: 'LR',
    bbDown: 'th',
    bbLr: 'ge',
    bbOut: 'ep',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: '7114266e-8fef-487f-87ac-c9dd8dfed6b9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '801',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '4569',
    location: 'LR1',
    bbDown: null,
    bbLr: 'gw',
    bbOut: 'hj',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
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
    luggageId: '17d4f835-e2e3-426e-905f-06894ce51389',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '806',
    name: 'Céline',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    description: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '4588',
    location: 'LR1',
    bbDown: null,
    bbLr: 'bo',
    bbOut: 'bk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cb263ce8-cebb-4944-9ab5-70b84c2774d4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '370',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: 'Nullam porttitor lacus at turpis.',
    tagNr: '8432',
    location: 'LR1',
    bbDown: null,
    bbLr: 'on',
    bbOut: 'dy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3b6ad4a2-a64a-42f5-9fbb-cc429001adca',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '862',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    description: null,
    tagNr: '9306',
    location: 'LR',
    bbDown: 'ja',
    bbLr: 'bl',
    bbOut: 'zw',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
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
    luggageId: 'b97f7c8e-4eca-4bae-a927-205e904c14b1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '021',
    name: 'Jú',
    arrivalTime: null,
    bags: '1+2',
    description: null,
    tagNr: '8871',
    location: 'LR',
    bbDown: null,
    bbLr: 'ga',
    bbOut: 'md',
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
    luggageId: '52c06c1e-1880-4559-a9b9-d37f9a7b7c7a',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '021',
    name: 'Céline',
    arrivalTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '2141',
    location: 'LR',
    bbDown: null,
    bbLr: 'sg',
    bbOut: 'sd',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
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
    luggageId: '49a9c9f8-da16-4b08-bb2b-44cfd86f8f23',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '282',
    name: 'Médiamass',
    arrivalTime: null,
    bags: '5+1',
    description: 'Morbi non lectus.',
    tagNr: '0441',
    location: 'LR1',
    bbDown: 'py',
    bbLr: 'xq',
    bbOut: 'hl',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: 'eeb0c3ef-da53-4c9c-8197-bbc3466465aa',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '478',
    name: 'Zoé',
    arrivalTime: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '6814',
    location: 'LR',
    bbDown: null,
    bbLr: 'zb',
    bbOut: 'gk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9bd9ce57-637f-4b8b-950e-7ffc948fcd8b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '191',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: null,
    tagNr: '9868',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ry',
    bbOut: 'ec',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
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
    luggageId: '5f50785b-02e8-4359-85ac-e2273e2e6baa',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '695',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '1102',
    location: 'LR1',
    bbDown: 'lq',
    bbLr: 'sh',
    bbOut: 'eo',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b69bc0e5-987f-43c4-b9cc-757a03366cd3',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '197',
    name: 'Aí',
    arrivalTime: null,
    bags: '0+8',
    description: null,
    tagNr: '5265',
    location: 'LR',
    bbDown: 'jc',
    bbLr: 'ef',
    bbOut: 'lp',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
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
    luggageId: '0758e12c-2270-441b-98ba-7a0991bf881e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '998',
    name: 'Frédérique',
    arrivalTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: null,
    tagNr: '9636',
    location: 'LR1',
    bbDown: null,
    bbLr: 'jt',
    bbOut: 'qa',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '284fc6ad-cf1c-4983-a752-3eaf1db2e330',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '703',
    name: 'Audréanne',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: null,
    tagNr: '0089',
    location: 'LR1',
    bbDown: 'rt',
    bbLr: 'vm',
    bbOut: 'jn',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: 'c166e69d-7086-417b-a747-c6eb04bda19b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '359',
    name: 'Eugénie',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: 'Integer a nibh.',
    tagNr: '4613',
    location: 'LR',
    bbDown: 'wb',
    bbLr: 'wl',
    bbOut: 'sm',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
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
    luggageId: 'edad840c-0a35-4c0c-ba4a-aab5a035c0c5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '600',
    name: 'Intéressant',
    arrivalTime: null,
    bags: '1+9',
    description: null,
    tagNr: '8072',
    location: 'LR1',
    bbDown: 'xw',
    bbLr: 'df',
    bbOut: 'wb',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
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
    luggageId: '14e53d70-9a4e-498c-8d90-616fa0abdee8',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '309',
    name: 'Almérinda',
    arrivalTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '4570',
    location: 'LR',
    bbDown: 'ms',
    bbLr: 'vm',
    bbOut: 'bp',
    completedAt: new Date(
      new Date('2/15/2023').setHours(
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
    luggageId: '766ddfb2-28db-4da9-a831-5ccc0e24eb93',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '132',
    name: 'Almérinda',
    arrivalTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '2273',
    location: 'LR',
    bbDown: 'su',
    bbLr: 'wo',
    bbOut: 'of',
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
    luggageId: 'c76f4040-8e7d-4e34-94d9-22c669a3ee2b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '380',
    name: 'Andréa',
    arrivalTime: null,
    bags: '6+2',
    description: 'Nullam varius.',
    tagNr: '5304',
    location: 'LR',
    bbDown: null,
    bbLr: 'hr',
    bbOut: 'zq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4969437d-1a5f-41ce-a374-01c45a627fc4',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '818',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: null,
    tagNr: '6764',
    location: 'LR',
    bbDown: 'wh',
    bbLr: 'tc',
    bbOut: 'bq',
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
    luggageId: '23e2342c-b6de-403f-8b95-3ec068e39874',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '670',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    description: null,
    tagNr: '9266',
    location: 'LR',
    bbDown: 'ug',
    bbLr: 'ws',
    bbOut: 'tc',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: 'b389b2df-b50b-4f19-acfe-8acf3508cfa8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '549',
    name: 'Rachèle',
    arrivalTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    description: 'Duis at velit eu est congue elementum.',
    tagNr: '8785',
    location: 'LR1',
    bbDown: 'gi',
    bbLr: 'tt',
    bbOut: 'uu',
    completedAt: new Date(
      new Date('2/9/2023').setHours(
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
    luggageId: 'a3d45bac-e31a-4d5d-857f-fb180589bf6c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '075',
    name: 'Méthode',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: null,
    tagNr: '7186',
    location: 'LR1',
    bbDown: 'ug',
    bbLr: 'hn',
    bbOut: 'ik',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd01ff152-7b88-44e0-8050-cb29438310da',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '105',
    name: 'Bérénice',
    arrivalTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    tagNr: '6870',
    location: 'LR1',
    bbDown: 'lt',
    bbLr: 'yq',
    bbOut: 'ku',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2346b0e0-4847-4d27-8039-c64e8d2c31b3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '417',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '7705',
    location: 'LR',
    bbDown: 'pi',
    bbLr: 'si',
    bbOut: 'qh',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: 'e1d0fa4b-f654-4652-b0b8-0590f73569bb',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '607',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description: null,
    tagNr: '2199',
    location: 'LR1',
    bbDown: 'ya',
    bbLr: 'ai',
    bbOut: 'ii',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8698f7d3-a2dd-4804-92ac-1b9f27748bf7',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '901',
    name: 'Magdalène',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: null,
    tagNr: '9179',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xs',
    bbOut: 'lf',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: 'bffb4188-b7c0-42de-8459-ee1638556086',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '661',
    name: 'Méthode',
    arrivalTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    description: 'Donec posuere metus vitae ipsum.',
    tagNr: '1987',
    location: 'LR',
    bbDown: 'js',
    bbLr: 'vg',
    bbOut: 'ls',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fbe365c0-0e86-4218-b437-7367aa5ca231',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '778',
    name: 'Märta',
    arrivalTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    description: 'Phasellus id sapien in sapien iaculis congue.',
    tagNr: '1001',
    location: 'LR',
    bbDown: 'ai',
    bbLr: 'cy',
    bbOut: 'ys',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cb9d0292-f43e-4ee9-8c20-7dfcec7cdc1c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '090',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: 'Vestibulum rutrum rutrum neque.',
    tagNr: '2134',
    location: 'LR',
    bbDown: 'ap',
    bbLr: 'ru',
    bbOut: 'uu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fbe833b4-b106-45e5-a89f-49036d43670f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '813',
    name: 'Maëly',
    arrivalTime: null,
    bags: '7+4',
    description: null,
    tagNr: '8957',
    location: 'LR1',
    bbDown: 'ry',
    bbLr: 'zv',
    bbOut: 'ak',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c0c75348-c46c-4ef4-b735-d6dcc52ee8e7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '099',
    name: 'Tán',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: 'Fusce consequat.',
    tagNr: '7518',
    location: 'LR1',
    bbDown: 'rw',
    bbLr: 'uf',
    bbOut: 'ef',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
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
    luggageId: '906da8ba-3d27-4a27-844c-1c6727268905',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '099',
    name: 'Méline',
    arrivalTime: null,
    bags: '9+3',
    description: 'Duis consequat dui nec nisi volutpat eleifend.',
    tagNr: '7034',
    location: 'LR',
    bbDown: 'rj',
    bbLr: 'qi',
    bbOut: 'gr',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
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
    luggageId: '7c34a0ba-7cf2-4dc8-a522-077856780f14',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '675',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'Nullam molestie nibh in lectus.',
    tagNr: '3539',
    location: 'LR1',
    bbDown: 'lb',
    bbLr: 'rd',
    bbOut: 'eq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '39c171de-3a0b-4d1d-8a2b-72b3c1c004e7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '764',
    name: 'Börje',
    arrivalTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    description: 'Suspendisse potenti.',
    tagNr: '2526',
    location: 'LR1',
    bbDown: 'eq',
    bbLr: 'mv',
    bbOut: 'xy',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
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
    luggageId: 'eb34b564-370d-4a9e-8f67-0c3e919d6701',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '624',
    name: 'Michèle',
    arrivalTime: null,
    bags: '9+0',
    description: 'Maecenas pulvinar lobortis est.',
    tagNr: '8941',
    location: 'LR1',
    bbDown: 'ym',
    bbLr: 'rc',
    bbOut: 'tj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '86d5e528-e423-4fee-8bb5-42ea707db0f3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '725',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    description: 'Maecenas pulvinar lobortis est.',
    tagNr: '8362',
    location: 'LR',
    bbDown: 'qo',
    bbLr: 'fc',
    bbOut: 'wv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ea6f03ca-e095-4faf-8846-93ac6e448e0c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '279',
    name: 'Mà',
    arrivalTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '2019',
    location: 'LR1',
    bbDown: 'uo',
    bbLr: 'tb',
    bbOut: 'so',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: 'cd53cbee-cd0a-4f36-86d6-30d49d7b818f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '093',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description: 'In blandit ultrices enim.',
    tagNr: '7135',
    location: 'LR',
    bbDown: 'dr',
    bbLr: 'ch',
    bbOut: 'td',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3f952219-330f-4fa3-afc5-b13732198051',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '040',
    name: 'Bérangère',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    description: null,
    tagNr: '3220',
    location: 'LR1',
    bbDown: 'hf',
    bbLr: 'oc',
    bbOut: 'bo',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
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
    luggageId: '04b23582-8055-471d-a7cf-83a7571fd233',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '640',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description: 'Nullam varius.',
    tagNr: '8498',
    location: 'LR',
    bbDown: 'yn',
    bbLr: 'qa',
    bbOut: 'lo',
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
    luggageId: 'dc26aa8c-53a4-4352-b6e4-bb5176b775b6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '616',
    name: 'Judicaël',
    arrivalTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: 'Integer ac neque.',
    tagNr: '9574',
    location: 'LR',
    bbDown: 'nt',
    bbLr: 'qa',
    bbOut: 'on',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
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
    luggageId: '4b448082-820d-4fb6-b8b2-df1c3bfbcac0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '722',
    name: 'Naéva',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: null,
    tagNr: '8335',
    location: 'LR',
    bbDown: 'nb',
    bbLr: 'zq',
    bbOut: 'gt',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: '727cc9c8-8a52-4abb-8c2c-0b7aaf4e4207',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '520',
    name: 'Chloé',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    description: 'Fusce posuere felis sed lacus.',
    tagNr: '0570',
    location: 'LR1',
    bbDown: 'lt',
    bbLr: 'it',
    bbOut: 'aw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9f8b362e-1579-4032-8238-0dc8cc6cf914',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '029',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '3022',
    location: 'LR',
    bbDown: null,
    bbLr: 'hg',
    bbOut: 'ul',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
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
    luggageId: '9b2d3966-fc15-4b4d-8a9d-52f93701d85e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '746',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    description: 'Morbi quis tortor id nulla ultrices aliquet.',
    tagNr: '4176',
    location: 'LR1',
    bbDown: 'pt',
    bbLr: 'aq',
    bbOut: 'hf',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: '3d69ff5c-3e30-4967-abeb-7197a31c92e4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '934',
    name: 'Gérald',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '0548',
    location: 'LR',
    bbDown: null,
    bbLr: 'vv',
    bbOut: 'oe',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: '86818068-83bb-4a1a-aabe-5d387316cd68',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '598',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: 'Donec dapibus.',
    tagNr: '1806',
    location: 'LR1',
    bbDown: 'ds',
    bbLr: 'sa',
    bbOut: 'lb',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
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
    luggageId: 'f55dae3e-8f77-408c-8d45-c3580465dd05',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '614',
    name: 'Aimée',
    arrivalTime: null,
    bags: '9+8',
    description: null,
    tagNr: '6462',
    location: 'LR1',
    bbDown: 'eh',
    bbLr: 'bc',
    bbOut: 'tp',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
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
    luggageId: '716817b6-e2f7-40aa-a022-feb0e64251bf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '399',
    name: 'Noëlla',
    arrivalTime: null,
    bags: '1+8',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '9183',
    location: 'LR1',
    bbDown: 'gy',
    bbLr: 'it',
    bbOut: 'sw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7c7baf4b-618e-4c4c-b696-52968cb53bb8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '350',
    name: 'Judicaël',
    arrivalTime: null,
    bags: '7+9',
    description: 'Nunc purus.',
    tagNr: '1705',
    location: 'LR',
    bbDown: 'jp',
    bbLr: 'iu',
    bbOut: 'aq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ebb92a12-6519-4bc0-aa0c-2a1f4deff666',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '299',
    name: 'Maëlla',
    arrivalTime: null,
    bags: '7+1',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    tagNr: '8342',
    location: 'LR1',
    bbDown: 'ij',
    bbLr: 'ps',
    bbOut: 'et',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
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
    luggageId: 'd613a395-9a53-4e4d-bd2c-cf8de9330ae4',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '857',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    description: null,
    tagNr: '1547',
    location: 'LR',
    bbDown: 'bq',
    bbLr: 'lj',
    bbOut: 'il',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
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
    luggageId: 'c9bd981d-1022-4343-9f81-aa607efacde5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '436',
    name: 'Lorène',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    description: null,
    tagNr: '8222',
    location: 'LR1',
    bbDown: 'wf',
    bbLr: 'xq',
    bbOut: 'bh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '950a465a-f4b4-4bb2-afc1-98c68ce7580f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '393',
    name: 'Mélinda',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '3800',
    location: 'LR1',
    bbDown: 'gq',
    bbLr: 'eb',
    bbOut: 'qn',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: 'd200d924-5c2a-4dd0-bc44-01f0a34f78eb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '668',
    name: 'Cécilia',
    arrivalTime: null,
    bags: '9+4',
    description: 'Curabitur in libero ut massa volutpat convallis.',
    tagNr: '3002',
    location: 'LR1',
    bbDown: 'dz',
    bbLr: 'ag',
    bbOut: 'sy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3eee1544-5897-444e-8c0d-47da525feee1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '824',
    name: 'Léane',
    arrivalTime: null,
    bags: '3+5',
    description: null,
    tagNr: '7814',
    location: 'LR',
    bbDown: 'tf',
    bbLr: 'pm',
    bbOut: 'cq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b4a934c8-2d43-4f9e-8734-ccf3525faacc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '586',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description: 'Nulla facilisi.',
    tagNr: '7192',
    location: 'LR',
    bbDown: 'ri',
    bbLr: 'ln',
    bbOut: 'qd',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: 'aacb22f0-64bc-4fab-8414-afcd0677760a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '032',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: null,
    tagNr: '5492',
    location: 'LR1',
    bbDown: 'yl',
    bbLr: 'pj',
    bbOut: 'le',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
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
    luggageId: '99a4a9e1-4253-430f-817a-fcb808ecaa87',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '979',
    name: 'André',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    description: null,
    tagNr: '1706',
    location: 'LR1',
    bbDown: 'mw',
    bbLr: 'zm',
    bbOut: 'ii',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
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
    luggageId: 'cf26c6be-14a3-4b9f-91dd-9ec18a31f685',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '782',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    description: 'Fusce posuere felis sed lacus.',
    tagNr: '6133',
    location: 'LR',
    bbDown: null,
    bbLr: 'gj',
    bbOut: 'lb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9d2219c5-8f74-4717-b6b4-646770f634d4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '114',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description: 'Etiam faucibus cursus urna.',
    tagNr: '7819',
    location: 'LR',
    bbDown: 'mb',
    bbLr: 'ul',
    bbOut: 'xj',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: '19da866c-dcb1-4152-ac1e-74d2695680d2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '214',
    name: 'Yè',
    arrivalTime: null,
    bags: '7+0',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    tagNr: '6755',
    location: 'LR',
    bbDown: 'ob',
    bbLr: 'eu',
    bbOut: 'sg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a1042ac9-949e-40c2-b5cf-06e47191e685',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '428',
    name: 'Nélie',
    arrivalTime: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '7691',
    location: 'LR1',
    bbDown: 'mr',
    bbLr: 'ak',
    bbOut: 'jm',
    completedAt: new Date(
      new Date('2/10/2023').setHours(
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
    luggageId: '813947ca-f6d9-454a-9030-225a818a29d3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '315',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '2546',
    location: 'LR',
    bbDown: 'xl',
    bbLr: 'ak',
    bbOut: 'lb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b5613c2c-b69b-421a-830f-1fba78d7dc67',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '121',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: null,
    tagNr: '3406',
    location: 'LR',
    bbDown: null,
    bbLr: 'sq',
    bbOut: 'ot',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '37cba854-debd-4ea4-99fb-a1c6351ecd03',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '505',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    description: null,
    tagNr: '2842',
    location: 'LR',
    bbDown: 'rc',
    bbLr: 'vg',
    bbOut: 'gd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '927e6c02-cc78-4582-9e29-d60db2267151',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '790',
    name: 'Gösta',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description: null,
    tagNr: '6542',
    location: 'LR1',
    bbDown: 'um',
    bbLr: 'nq',
    bbOut: 'td',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: '247f8e8d-1226-4c62-a9a9-bdd5cb65c79f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '700',
    name: 'Maïté',
    arrivalTime: null,
    bags: '8+3',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    tagNr: '6385',
    location: 'LR1',
    bbDown: 'en',
    bbLr: 'ez',
    bbOut: 'bj',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
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
    luggageId: '3aa35022-5500-4de3-b039-b3b5876fd8ef',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '105',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    description: null,
    tagNr: '4034',
    location: 'LR1',
    bbDown: 'er',
    bbLr: 'ox',
    bbOut: 'cq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b4f05f31-af9c-45ff-ae7b-338a7b46902f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '692',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description: 'Morbi porttitor lorem id ligula.',
    tagNr: '5777',
    location: 'LR1',
    bbDown: 'zd',
    bbLr: 'yu',
    bbOut: 'ps',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6da4193c-898d-4a57-8ba6-19d82cb6065f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '385',
    name: 'Östen',
    arrivalTime: null,
    bags: '0+3',
    description: null,
    tagNr: '6962',
    location: 'LR',
    bbDown: 'ya',
    bbLr: 'ku',
    bbOut: 'vw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fc7bac83-6ded-4184-852d-9abe9e7ab91b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '461',
    name: 'Aloïs',
    arrivalTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description: 'Pellentesque ultrices mattis odio.',
    tagNr: '8254',
    location: 'LR',
    bbDown: 'mz',
    bbLr: 'xe',
    bbOut: 'ex',
    completedAt: new Date(
      new Date('2/26/2023').setHours(
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
    luggageId: 'fe5f19ba-f7e3-4795-aa10-945a72d25164',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '724',
    name: 'Pélagie',
    arrivalTime: null,
    bags: '6+4',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '2265',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ev',
    bbOut: 'zs',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: '04834739-ce21-4c7a-b839-7c9532071b16',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '061',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description: 'Pellentesque ultrices mattis odio.',
    tagNr: '3492',
    location: 'LR',
    bbDown: 'ap',
    bbLr: 'ba',
    bbOut: 'xb',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: 'd5a0236d-960f-470d-89ac-4d190e2fdfbb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '577',
    name: 'Yóu',
    arrivalTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: null,
    tagNr: '5198',
    location: 'LR1',
    bbDown: 'iu',
    bbLr: 'vc',
    bbOut: 'dv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '81515a34-5de1-4474-8674-a03359e6449f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '167',
    name: 'Lài',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '7120',
    location: 'LR1',
    bbDown: 'ym',
    bbLr: 'sd',
    bbOut: 'pe',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: 'afa66971-00c3-4b64-bddb-d28a2702c905',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '559',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    description: 'Nulla mollis molestie lorem.',
    tagNr: '8452',
    location: 'LR',
    bbDown: 'kv',
    bbLr: 'np',
    bbOut: 'lk',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: '819338b1-edff-4f01-bdec-b8f145542164',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '401',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    description: 'Donec quis orci eget orci vehicula condimentum.',
    tagNr: '1139',
    location: 'LR',
    bbDown: null,
    bbLr: 'kf',
    bbOut: 'ds',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6843e563-ad8f-4f85-bdc1-892e49f940c8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '309',
    name: 'Sòng',
    arrivalTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: 'Ut tellus.',
    tagNr: '2399',
    location: 'LR',
    bbDown: 'di',
    bbLr: 'bo',
    bbOut: 'ns',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8dbd6716-4e30-4b67-ba44-74ef39bfdec3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '571',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: null,
    tagNr: '9157',
    location: 'LR',
    bbDown: 'rm',
    bbLr: 'kq',
    bbOut: 'bu',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: '6386bce2-2070-4b82-8f24-09306b172bb8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '786',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '0299',
    location: 'LR',
    bbDown: 'kh',
    bbLr: 'tm',
    bbOut: 'zg',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
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
    luggageId: 'e9a841ff-5ee5-4b51-97ce-7eb1182b5696',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '218',
    name: 'Cunégonde',
    arrivalTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    description: 'Cras in purus eu magna vulputate luctus.',
    tagNr: '4604',
    location: 'LR',
    bbDown: 'he',
    bbLr: 'wt',
    bbOut: 'jj',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: '5fe5cc24-efa0-487e-99b0-22451e4cc449',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '015',
    name: 'Lèi',
    arrivalTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    description: null,
    tagNr: '4668',
    location: 'LR1',
    bbDown: 'hw',
    bbLr: 'up',
    bbOut: 'vu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1f33f443-3fe6-4452-8730-020b0ae66f10',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '154',
    name: 'Pélagie',
    arrivalTime: null,
    bags: '2+7',
    description: 'Pellentesque at nulla.',
    tagNr: '7295',
    location: 'LR1',
    bbDown: 'rh',
    bbLr: 'hn',
    bbOut: 'bd',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
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
    luggageId: 'e9ecb7b7-17c0-4593-9c98-14167d7d2362',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '924',
    name: 'Clélia',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    description: null,
    tagNr: '0284',
    location: 'LR1',
    bbDown: null,
    bbLr: 'vm',
    bbOut: 'ii',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f9dfc224-6625-42df-8395-832abfd54616',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '442',
    name: 'Andréa',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: 'Nulla tellus.',
    tagNr: '7613',
    location: 'LR1',
    bbDown: 'wk',
    bbLr: 'dt',
    bbOut: 'er',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '905ca180-cf23-42bc-9ae8-089a9d78d2f2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '057',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    description: 'Curabitur gravida nisi at nibh.',
    tagNr: '1953',
    location: 'LR1',
    bbDown: 'eh',
    bbLr: 'rq',
    bbOut: 'em',
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
    luggageId: '8c9ac176-77ae-42ff-a4ad-203aa0d8a734',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '456',
    name: 'Loïca',
    arrivalTime: null,
    bags: '7+8',
    description: 'Curabitur in libero ut massa volutpat convallis.',
    tagNr: '0053',
    location: 'LR1',
    bbDown: 'ma',
    bbLr: 'bo',
    bbOut: 'dt',
    completedAt: new Date(
      new Date('2/10/2023').setHours(
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
    luggageId: '8a392207-f258-445b-9d39-87aaf1551ba1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '989',
    name: 'Anaïs',
    arrivalTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description: 'Nunc purus.',
    tagNr: '3578',
    location: 'LR',
    bbDown: 'wt',
    bbLr: 'ea',
    bbOut: 'ov',
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a19f509b-39cb-4fb6-ab13-c97bb4779ecc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '958',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: null,
    tagNr: '5878',
    location: 'LR1',
    bbDown: 'kh',
    bbLr: 'fq',
    bbOut: 'uw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8bd6818f-1356-42a6-acc4-64a7fb59e123',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '491',
    name: 'Lorène',
    arrivalTime: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: 'Donec semper sapien a libero.',
    tagNr: '5480',
    location: 'LR1',
    bbDown: 'au',
    bbLr: 'ow',
    bbOut: 'gc',
    completedAt: new Date(
      new Date('2/16/2023').setHours(
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
    luggageId: '67c270dc-a63f-49e2-ac4f-a6a3a9561f53',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '496',
    name: 'Styrbjörn',
    arrivalTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description: null,
    tagNr: '7752',
    location: 'LR',
    bbDown: 'vq',
    bbLr: 'yr',
    bbOut: 'yw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '414c5ad1-b783-4b4f-88ae-f97682be0fdd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '632',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: 'Integer a nibh.',
    tagNr: '8693',
    location: 'LR',
    bbDown: 'ha',
    bbLr: 'ch',
    bbOut: 'ei',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
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
    luggageId: 'e3bd5f88-8428-4dd2-b681-2a205b2f0ce8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '154',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description: 'Morbi porttitor lorem id ligula.',
    tagNr: '2297',
    location: 'LR1',
    bbDown: 'sv',
    bbLr: 'bp',
    bbOut: 'hb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '470a15dd-c489-479b-95ec-1aa802f6817a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '686',
    name: 'Styrbjörn',
    arrivalTime: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '4542',
    location: 'LR',
    bbDown: 'rl',
    bbLr: 'kr',
    bbOut: 'yz',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
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
    luggageId: 'f82886b2-ae60-46c6-9bd6-8bb9cf9d499e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '786',
    name: 'Cléopatre',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    tagNr: '1799',
    location: 'LR1',
    bbDown: 'ul',
    bbLr: 'ra',
    bbOut: 'oc',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
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
    luggageId: 'b3fbe327-c365-4cea-9088-848554c32596',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '584',
    name: 'Judicaël',
    arrivalTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description: null,
    tagNr: '0903',
    location: 'LR1',
    bbDown: 'gn',
    bbLr: 'es',
    bbOut: 'pb',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
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
    luggageId: '976db7bf-d4e0-45e8-bb62-32db34e6e904',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '752',
    name: 'Pénélope',
    arrivalTime: null,
    bags: '9+8',
    description: 'Duis ac nibh.',
    tagNr: '8712',
    location: 'LR',
    bbDown: 'sz',
    bbLr: 'gx',
    bbOut: 'bd',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
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
    luggageId: '1b103be9-b0c3-4639-926e-ed3c85a3730d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '945',
    name: 'Lyséa',
    arrivalTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    tagNr: '2540',
    location: 'LR',
    bbDown: 'vt',
    bbLr: 'fn',
    bbOut: 'ng',
    completedAt: new Date(
      new Date('2/26/2023').setHours(
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
    luggageId: '3675114a-b5e0-4bc0-86ea-937dfe75c646',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '439',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: 'Praesent lectus.',
    tagNr: '0953',
    location: 'LR1',
    bbDown: 'yg',
    bbLr: 'sy',
    bbOut: 'va',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '34566af2-5817-4257-b9f2-e2f5c8c30c36',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '098',
    name: 'Faîtes',
    arrivalTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description: 'Suspendisse potenti.',
    tagNr: '4625',
    location: 'LR',
    bbDown: null,
    bbLr: 'qw',
    bbOut: 'mx',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
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
    luggageId: 'd6855af9-e6fd-4d7f-9637-cb6f294e9824',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '385',
    name: 'Maïlis',
    arrivalTime: null,
    bags: '6+3',
    description: 'Mauris lacinia sapien quis libero.',
    tagNr: '2339',
    location: 'LR1',
    bbDown: 'sk',
    bbLr: 'um',
    bbOut: 'nh',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
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
    luggageId: '7c364c56-d166-4d18-a2be-90f11a7520f5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '724',
    name: 'Michèle',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    description: 'In quis justo.',
    tagNr: '4743',
    location: 'LR1',
    bbDown: 'oe',
    bbLr: 'we',
    bbOut: 'vu',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
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
    luggageId: '3c685d10-5f27-4824-97e8-6c65ae392288',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '798',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description: 'Nunc rhoncus dui vel sem.',
    tagNr: '2223',
    location: 'LR1',
    bbDown: 'mr',
    bbLr: 'ki',
    bbOut: 'di',
    completedAt: new Date(
      new Date('1/20/2023').setHours(
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
    luggageId: '8e97d62d-4e75-49e7-8d90-09d11689ef59',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '269',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '3591',
    location: 'LR1',
    bbDown: 'ev',
    bbLr: 'xo',
    bbOut: 'tz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e4ad7fa2-64d3-4ea1-8898-616c84ca94a8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '602',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description: null,
    tagNr: '9261',
    location: 'LR',
    bbDown: 'qm',
    bbLr: 'kb',
    bbOut: 'uh',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: '8d6a5411-9927-4155-98ba-8c1eb905ccaf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '408',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    description: null,
    tagNr: '6686',
    location: 'LR',
    bbDown: 'oh',
    bbLr: 'jt',
    bbOut: 'si',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: 'cf83208c-58c5-4698-be3e-5543aa4ada10',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '308',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: null,
    tagNr: '0006',
    location: 'LR1',
    bbDown: 'cc',
    bbLr: 'ns',
    bbOut: 'yp',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7790fba0-0558-47a9-bb88-982bc8b9b33d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '578',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: null,
    tagNr: '1669',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mz',
    bbOut: 'hs',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '96f2462a-6f40-4add-9c2e-5b16fba715a6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '002',
    name: 'Gösta',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description: 'Nullam varius.',
    tagNr: '9964',
    location: 'LR1',
    bbDown: null,
    bbLr: 'rh',
    bbOut: 'gl',
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
    luggageId: 'aea2bbc2-4bdd-4bbd-a8c5-965b5dce4e12',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '099',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: null,
    tagNr: '9363',
    location: 'LR1',
    bbDown: 'xp',
    bbLr: 'ph',
    bbOut: 'bo',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
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
    luggageId: 'c1fc771c-7046-4de0-9f26-4e11496cf554',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '017',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    description: 'Proin eu mi.',
    tagNr: '1246',
    location: 'LR',
    bbDown: 'yd',
    bbLr: 'bm',
    bbOut: 'nh',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
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
    luggageId: '76b90d44-f9d7-49ac-b178-fd9e1a07270b',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '484',
    name: 'Réjane',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '6573',
    location: 'LR1',
    bbDown: 'jq',
    bbLr: 'om',
    bbOut: 'jc',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6269d3b7-0cc3-40f4-af95-f50aa1b54c6b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '541',
    name: 'Judicaël',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '0344',
    location: 'LR1',
    bbDown: 'pg',
    bbLr: 'ko',
    bbOut: 'nm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e5cc0595-c81a-4832-b8b7-ae5a1385eddb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '153',
    name: 'Kévina',
    arrivalTime: null,
    bags: '1+5',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '5492',
    location: 'LR1',
    bbDown: 'yt',
    bbLr: 'zm',
    bbOut: 'ae',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e392ca5a-b294-468a-a4cc-2a8dddf6cad2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '374',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '7627',
    location: 'LR',
    bbDown: 'hn',
    bbLr: 'gn',
    bbOut: 'th',
    completedAt: new Date(
      new Date('1/20/2023').setHours(
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
    luggageId: '55aa7e6a-9728-493a-8931-ad9bfb318e6f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '303',
    name: 'Léone',
    arrivalTime: null,
    bags: '9+6',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    tagNr: '2876',
    location: 'LR',
    bbDown: 'vm',
    bbLr: 'bo',
    bbOut: 'xd',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: '17489b4f-350f-4477-a6bf-de7d41cd8d3d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '736',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    description: 'Duis mattis egestas metus.',
    tagNr: '8123',
    location: 'LR1',
    bbDown: 'pw',
    bbLr: 'tv',
    bbOut: 'gg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '644462d7-91a2-43fe-953a-7e0bf64a9a0c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '927',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: 'Morbi porttitor lorem id ligula.',
    tagNr: '1279',
    location: 'LR1',
    bbDown: 'vm',
    bbLr: 'vq',
    bbOut: 'at',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4ec4961b-25bb-4c98-9100-8a08398c2840',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '670',
    name: 'Ruò',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '0314',
    location: 'LR',
    bbDown: 'nd',
    bbLr: 'mw',
    bbOut: 'ox',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
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
    luggageId: 'cfc11125-6570-474b-8471-c5caaba4bab3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '648',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    description: 'Nulla tellus.',
    tagNr: '8684',
    location: 'LR1',
    bbDown: 'do',
    bbLr: 'pv',
    bbOut: 'jl',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
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
    luggageId: '3903c8b0-e6fe-4ae6-91db-9082c9792a11',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '845',
    name: 'Cécile',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    description: null,
    tagNr: '3855',
    location: 'LR',
    bbDown: null,
    bbLr: 'py',
    bbOut: 'pr',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: '71947d5e-82b4-4586-9da8-41bdb6be861a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '369',
    name: 'Lài',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description: null,
    tagNr: '3332',
    location: 'LR',
    bbDown: 'ig',
    bbLr: 'ku',
    bbOut: 'ou',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
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
    luggageId: '78a5eea3-9fbb-46d3-8c0e-40b5359bda2e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '456',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '3923',
    location: 'LR',
    bbDown: 'mr',
    bbLr: 'xu',
    bbOut: 'lr',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: '3fe9b287-fe5e-4c0f-8896-393f5494eb06',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '701',
    name: 'Mélodie',
    arrivalTime: null,
    bags: '0+4',
    description: 'Quisque ut erat.',
    tagNr: '0070',
    location: 'LR',
    bbDown: null,
    bbLr: 'js',
    bbOut: 'nn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6afa3cd4-cd35-4b98-a193-cb5f55f4926e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '334',
    name: 'Maëline',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    description: null,
    tagNr: '0978',
    location: 'LR',
    bbDown: 'up',
    bbLr: 'bo',
    bbOut: 'rw',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
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
    luggageId: '7019fe60-0b35-4866-97c6-e54766949a68',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '305',
    name: 'Dà',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '3874',
    location: 'LR1',
    bbDown: 'lx',
    bbLr: 'ey',
    bbOut: 'rp',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ae30df25-cfb6-4343-bed4-13d56a027927',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '064',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: null,
    tagNr: '9525',
    location: 'LR1',
    bbDown: 'wo',
    bbLr: 'wb',
    bbOut: 'oc',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
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
    luggageId: '0d353ad3-cf88-46d6-8c6d-03673d7ec5e8',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '775',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '8270',
    location: 'LR',
    bbDown: 'bu',
    bbLr: 'fb',
    bbOut: 'zj',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: 'fd225de7-171c-4057-a1b7-493286149cf4',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '878',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: null,
    tagNr: '0598',
    location: 'LR1',
    bbDown: 'ec',
    bbLr: 'ri',
    bbOut: 'zz',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
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
    luggageId: '7af751db-6b72-491f-9d75-20d527d1b447',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '214',
    name: 'Salomé',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description: null,
    tagNr: '3020',
    location: 'LR',
    bbDown: 'rr',
    bbLr: 'wx',
    bbOut: 'zl',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
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
    luggageId: 'c1da4ade-8c1d-4c21-af7d-b6a6b2d8ddc3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '250',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    description: 'Nam nulla.',
    tagNr: '6256',
    location: 'LR1',
    bbDown: 'wx',
    bbLr: 'yj',
    bbOut: 'ao',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
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
    luggageId: '9b650c6c-f4e3-4683-ac23-222c8bfdecd3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '630',
    name: 'Méghane',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '4037',
    location: 'LR1',
    bbDown: 'ho',
    bbLr: 'oa',
    bbOut: 'kk',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: '7d167a33-ba11-4214-8629-21f4909a0234',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '315',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description: 'Duis ac nibh.',
    tagNr: '7392',
    location: 'LR',
    bbDown: 'rs',
    bbLr: 'vz',
    bbOut: 'sy',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
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
    luggageId: 'e907d2d9-9bab-430b-b6b7-d53367fc7ef0',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '275',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: null,
    tagNr: '0331',
    location: 'LR1',
    bbDown: null,
    bbLr: 'wm',
    bbOut: 'me',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: '5ebfd52f-a53d-40a2-ab74-fe2f280672c4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '669',
    name: 'Thérèsa',
    arrivalTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '0336',
    location: 'LR',
    bbDown: 'uq',
    bbLr: 'rf',
    bbOut: 'yf',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: 'cf91ada2-da9f-4e80-8ad7-d8ea625b2e9a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '587',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    description: null,
    tagNr: '7077',
    location: 'LR',
    bbDown: 'yw',
    bbLr: 'or',
    bbOut: 'am',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
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
    luggageId: 'abad5d11-fab9-4125-9c7c-e10717828963',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '197',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: 'Phasellus id sapien in sapien iaculis congue.',
    tagNr: '9587',
    location: 'LR',
    bbDown: 'rq',
    bbLr: 'mo',
    bbOut: 'vg',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
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
    luggageId: 'd42ed840-2ab7-45c5-82bb-3cd4e4984b6b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '863',
    name: 'Cunégonde',
    arrivalTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: null,
    tagNr: '4713',
    location: 'LR1',
    bbDown: 'rk',
    bbLr: 'aj',
    bbOut: 'bd',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
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
    luggageId: '325b3582-22b1-44d0-b78f-ea3b33035f5b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '842',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: null,
    tagNr: '2062',
    location: 'LR1',
    bbDown: 'aq',
    bbLr: 'oy',
    bbOut: 'xr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '341c7e5b-ad17-4fc2-bdb5-8f810eb8683d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '216',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    description: 'Morbi non lectus.',
    tagNr: '3340',
    location: 'LR',
    bbDown: null,
    bbLr: 'ow',
    bbOut: 'iz',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f19bf13d-e0d4-42d5-8fff-502b42dd809c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '518',
    name: 'Céline',
    arrivalTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    description: null,
    tagNr: '7620',
    location: 'LR1',
    bbDown: null,
    bbLr: 'yx',
    bbOut: 'yq',
    completedAt: new Date(
      new Date('1/26/2023').setHours(
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
    luggageId: '5fe51d46-0334-4480-9060-35f812880ac6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '895',
    name: 'Maï',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description: null,
    tagNr: '3527',
    location: 'LR',
    bbDown: 'yf',
    bbLr: 'ot',
    bbOut: 'vy',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: '12e10286-ba49-4a20-9a57-0ba75b9f9833',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '144',
    name: 'Aurélie',
    arrivalTime: null,
    bags: '9+4',
    description: null,
    tagNr: '6048',
    location: 'LR1',
    bbDown: 'qn',
    bbLr: 'it',
    bbOut: 'xr',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
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
    luggageId: '631bb051-4467-41c9-9196-bd985c1aa138',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '445',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    tagNr: '3704',
    location: 'LR',
    bbDown: 'be',
    bbLr: 'dd',
    bbOut: 'ic',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
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
    luggageId: '0efa9756-5d10-4518-ae8f-4bdfa8a52417',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '896',
    name: 'Cécile',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description: null,
    tagNr: '0867',
    location: 'LR',
    bbDown: 'hc',
    bbLr: 'ek',
    bbOut: 'cv',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
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
    luggageId: '35e97c6b-1f29-47ae-8eb8-6a3537f38a2c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '895',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    description: null,
    tagNr: '8709',
    location: 'LR',
    bbDown: 'lx',
    bbLr: 'ui',
    bbOut: 'js',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
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
    luggageId: 'abe2fca3-c5f0-4203-8b7d-d2028b7fd784',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '683',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description: 'Morbi non lectus.',
    tagNr: '4827',
    location: 'LR1',
    bbDown: 'dt',
    bbLr: 'ic',
    bbOut: 'xn',
    completedAt: new Date(
      new Date('2/12/2023').setHours(
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
    luggageId: '6cde862e-1580-4508-aa26-78e2ea0474d3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '451',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description: null,
    tagNr: '3319',
    location: 'LR',
    bbDown: 'tu',
    bbLr: 'mo',
    bbOut: 'hu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1bf952e8-645d-4c6f-823e-fcd3dc51c71f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '729',
    name: 'Maëlyss',
    arrivalTime: null,
    bags: '7+7',
    description: null,
    tagNr: '8144',
    location: 'LR',
    bbDown: null,
    bbLr: 'bn',
    bbOut: 'yp',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '18b6fb8a-98c1-4e95-9e3a-cf6c29ca1e9f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '460',
    name: 'Aurélie',
    arrivalTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    description: 'Mauris ullamcorper purus sit amet nulla.',
    tagNr: '0505',
    location: 'LR1',
    bbDown: 'cq',
    bbLr: 'bh',
    bbOut: 'wu',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
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
    luggageId: 'c5d7b29e-7671-4cff-8ba9-df465f914883',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '032',
    name: 'Maëlys',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    description: null,
    tagNr: '0993',
    location: 'LR1',
    bbDown: 'nj',
    bbLr: 'xu',
    bbOut: 'js',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '806e8333-8167-4614-8ede-104cca052874',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '486',
    name: 'Clémentine',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    description: 'Pellentesque viverra pede ac diam.',
    tagNr: '5245',
    location: 'LR1',
    bbDown: null,
    bbLr: 'sr',
    bbOut: 'te',
    completedAt: new Date(
      new Date('12/6/2022').setHours(
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
    luggageId: 'f8af516a-4136-41c3-abf8-1b1bbf5fc10d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '681',
    name: 'Clélia',
    arrivalTime: null,
    bags: '6+7',
    description: null,
    tagNr: '1043',
    location: 'LR',
    bbDown: 'aj',
    bbLr: 'cc',
    bbOut: 'di',
    completedAt: new Date(
      new Date('12/29/2022').setHours(
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
    luggageId: 'a0e1f87d-d955-409e-b679-f617d1bed11e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '880',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    description: 'Integer a nibh.',
    tagNr: '2685',
    location: 'LR',
    bbDown: 'lv',
    bbLr: 'fn',
    bbOut: 'xe',
    completedAt: new Date(
      new Date('12/6/2022').setHours(
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
    luggageId: 'c8ae16b1-e909-4aec-820e-51b26baac8fd',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '862',
    name: 'Loïca',
    arrivalTime: null,
    bags: '7+6',
    description: 'Pellentesque at nulla.',
    tagNr: '1846',
    location: 'LR1',
    bbDown: 'tm',
    bbLr: 'iq',
    bbOut: 'ie',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
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
    luggageId: 'd7173736-cba0-4abb-8074-447a17435877',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '890',
    name: 'Naëlle',
    arrivalTime: null,
    bags: '7+9',
    description: null,
    tagNr: '6602',
    location: 'LR1',
    bbDown: 'dt',
    bbLr: 'sy',
    bbOut: 'bc',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
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
    luggageId: 'e86a7d6b-577e-4e73-b221-360abc4d2e46',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '591',
    name: 'Camélia',
    arrivalTime: null,
    bags: '1+1',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '5325',
    location: 'LR',
    bbDown: 'mh',
    bbLr: 'ld',
    bbOut: 'dg',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
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
    luggageId: '4c6d1e21-9800-44bd-82a5-6bf99685c453',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '518',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: 'Duis consequat dui nec nisi volutpat eleifend.',
    tagNr: '8702',
    location: 'LR1',
    bbDown: 'yb',
    bbLr: 'pi',
    bbOut: 'el',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ed96e5b3-4621-4d49-89a5-979da091406c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '560',
    name: 'Erwéi',
    arrivalTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    description: null,
    tagNr: '4406',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mn',
    bbOut: 'zb',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
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
    luggageId: '439353c4-d2ba-4dc9-a538-8f4bf2469fae',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '345',
    name: 'Pò',
    arrivalTime: null,
    bags: '4+3',
    description: 'Donec quis orci eget orci vehicula condimentum.',
    tagNr: '7477',
    location: 'LR1',
    bbDown: 'pu',
    bbLr: 'fz',
    bbOut: 'ax',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
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
    luggageId: '61352bff-ff12-49dd-b75a-6d827cd21a60',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '474',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: null,
    tagNr: '2501',
    location: 'LR1',
    bbDown: 'lj',
    bbLr: 'dj',
    bbOut: 'ui',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2be23db2-af9c-4e09-b92d-4cc6b30cf552',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '048',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '1613',
    location: 'LR',
    bbDown: 'zm',
    bbLr: 'xr',
    bbOut: 'ch',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6bd349d2-5c3b-4ce4-8404-5d3db5765807',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '405',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    description: 'Praesent lectus.',
    tagNr: '6396',
    location: 'LR1',
    bbDown: 'uu',
    bbLr: 'ca',
    bbOut: 'qp',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: 'f3f5edda-e644-4fce-bdc1-b0312a4f1e5e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '150',
    name: 'Lóng',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: 'Aenean sit amet justo.',
    tagNr: '5055',
    location: 'LR1',
    bbDown: 'ta',
    bbLr: 'qs',
    bbOut: 'cw',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: '19c912cc-e430-4f98-8496-6e3c5889c798',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '990',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: null,
    tagNr: '7140',
    location: 'LR1',
    bbDown: 'lj',
    bbLr: 'kb',
    bbOut: 'vj',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
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
    luggageId: 'c8aa43d3-770b-4da7-98df-b38a67e693a9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '211',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: null,
    tagNr: '3248',
    location: 'LR',
    bbDown: 'eq',
    bbLr: 'tb',
    bbOut: 'do',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
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
    luggageId: 'cd2b31a8-96ab-4a01-982a-daf3ecf593b4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '739',
    name: 'Gaétane',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: 'Vestibulum sed magna at nunc commodo placerat.',
    tagNr: '2638',
    location: 'LR1',
    bbDown: 'hn',
    bbLr: 'fr',
    bbOut: 'sz',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
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
    luggageId: 'f0f878d5-fdcc-4609-b88e-7809e91ba078',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '262',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: null,
    tagNr: '0019',
    location: 'LR1',
    bbDown: null,
    bbLr: 'fm',
    bbOut: 'lj',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
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
    luggageId: '0706793f-3230-4f25-bb53-713dbb99471f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '160',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '0238',
    location: 'LR',
    bbDown: 'tw',
    bbLr: 'yy',
    bbOut: 'xc',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: '15461d17-7288-4d65-8200-79628a50717c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '882',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    description: null,
    tagNr: '6676',
    location: 'LR',
    bbDown: null,
    bbLr: 'cp',
    bbOut: 'hv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '54621e01-1e9b-4776-b695-d8cdb2feb0d5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '656',
    name: 'Maëline',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: null,
    tagNr: '8071',
    location: 'LR1',
    bbDown: 'jr',
    bbLr: 'so',
    bbOut: 'ap',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: '69f42677-8216-42ac-a328-8043b1c64cce',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '044',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    description: 'Suspendisse potenti.',
    tagNr: '9690',
    location: 'LR1',
    bbDown: null,
    bbLr: 'qd',
    bbOut: 'jc',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
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
    luggageId: '4e050b18-3412-43a6-97ac-8f17c4b3f23f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '039',
    name: 'Eléa',
    arrivalTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    tagNr: '8038',
    location: 'LR',
    bbDown: 'xc',
    bbLr: 'vf',
    bbOut: 'sa',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e924ad54-db37-44a5-bfc0-9da0537d41a5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '579',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    description: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '0575',
    location: 'LR1',
    bbDown: 'cp',
    bbLr: 'qp',
    bbOut: 'ol',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '18d7de42-e2bf-4a9c-b766-ba0bb26c2b83',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '254',
    name: 'Liè',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: 'Donec dapibus.',
    tagNr: '2770',
    location: 'LR',
    bbDown: 'bf',
    bbLr: 'xo',
    bbOut: 'vx',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: '3550e152-ecfc-46cb-be73-bf11dce54b93',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '950',
    name: 'Audréanne',
    arrivalTime: null,
    bags: '5+7',
    description: null,
    tagNr: '6642',
    location: 'LR',
    bbDown: 'vz',
    bbLr: 'sw',
    bbOut: 'lm',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: '5883d518-77f2-4447-b68e-91d7875c64b0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '396',
    name: 'Salomé',
    arrivalTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    description: 'Pellentesque viverra pede ac diam.',
    tagNr: '2994',
    location: 'LR',
    bbDown: 'xc',
    bbLr: 'mw',
    bbOut: 'hc',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
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
    luggageId: '45e65a04-09c5-4b5b-90f9-ded7bfc405bf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '235',
    name: 'Séverine',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    description: null,
    tagNr: '5023',
    location: 'LR',
    bbDown: 'lv',
    bbLr: 'mt',
    bbOut: 'qd',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: 'd1c29cc9-d7fd-497a-b967-16b7cd0a9a7d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '831',
    name: 'Táng',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description: null,
    tagNr: '1906',
    location: 'LR1',
    bbDown: 'sw',
    bbLr: 'hj',
    bbOut: 'kb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9da63614-1463-4bbd-bd74-0781a94ace26',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '977',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description: 'Maecenas tincidunt lacus at velit.',
    tagNr: '3280',
    location: 'LR',
    bbDown: 'uq',
    bbLr: 'jn',
    bbOut: 'wo',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: '3d45007e-bb6a-4457-813b-11bd29893496',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '802',
    name: 'Yáo',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    tagNr: '2419',
    location: 'LR',
    bbDown: 'yn',
    bbLr: 'ff',
    bbOut: 'ui',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
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
    luggageId: '48371d57-225b-489e-b828-f89f460bee34',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '012',
    name: 'Eloïse',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    description: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '3567',
    location: 'LR1',
    bbDown: 'uo',
    bbLr: 'df',
    bbOut: 'uf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ca4879b9-56c7-41d8-899b-7ebfa8eb4acf',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '568',
    name: 'Marie-françoise',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description: null,
    tagNr: '0667',
    location: 'LR',
    bbDown: 'pm',
    bbLr: 'fm',
    bbOut: 'wp',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
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
    luggageId: '00c4af2d-b706-40c1-9fcb-08eac47427cb',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '340',
    name: 'Eugénie',
    arrivalTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '3413',
    location: 'LR',
    bbDown: null,
    bbLr: 'of',
    bbOut: 'by',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fabab8d4-d855-4e47-a388-67d543e92016',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '960',
    name: 'Vénus',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '8313',
    location: 'LR',
    bbDown: null,
    bbLr: 'ng',
    bbOut: 'gz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '491ce70d-b5e5-4f2d-85a1-62351ddf8190',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '852',
    name: 'Pélagie',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description: null,
    tagNr: '3135',
    location: 'LR',
    bbDown: null,
    bbLr: 'em',
    bbOut: 'nm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '054fd0ea-5090-4663-bb9b-f0898237fe90',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '624',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: 'Integer ac neque.',
    tagNr: '9919',
    location: 'LR',
    bbDown: 'wk',
    bbLr: 'im',
    bbOut: 'jk',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: '4460995d-d125-4939-ba6a-3465f1431ea7',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '871',
    name: 'Gaïa',
    arrivalTime: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    tagNr: '9089',
    location: 'LR1',
    bbDown: 'sl',
    bbLr: 'ea',
    bbOut: 'uo',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'af371e7c-a73b-4085-a0ac-9ac04cab62d5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '707',
    name: 'Pål',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    description: 'Fusce consequat.',
    tagNr: '2773',
    location: 'LR',
    bbDown: null,
    bbLr: 'zg',
    bbOut: 'rq',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
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
    luggageId: 'f743cb83-43b5-49b1-afab-d712d948bbc4',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '229',
    name: 'Maïlis',
    arrivalTime: null,
    bags: '9+4',
    description: 'Suspendisse ornare consequat lectus.',
    tagNr: '2744',
    location: 'LR1',
    bbDown: 'gy',
    bbLr: 'pf',
    bbOut: 'tf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b4c62f4b-941c-4877-a844-b0690462b281',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '882',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    description: null,
    tagNr: '1239',
    location: 'LR1',
    bbDown: null,
    bbLr: 'fz',
    bbOut: 'ia',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
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
    luggageId: '5e12b8c8-a1db-4817-9909-da819cca364c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '676',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    description: 'Sed sagittis.',
    tagNr: '9870',
    location: 'LR1',
    bbDown: 'ho',
    bbLr: 'dv',
    bbOut: 'ny',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: '25ada697-e019-4ef3-b38f-9a8ad7e3f650',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '640',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: null,
    tagNr: '1263',
    location: 'LR1',
    bbDown: 'nu',
    bbLr: 'de',
    bbOut: 'tj',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
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
    luggageId: '9173bdb3-f0b0-4d10-8617-dcded3485d1b',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '887',
    name: 'Bécassine',
    arrivalTime: null,
    bags: '2+0',
    description: 'Morbi non quam nec dui luctus rutrum.',
    tagNr: '0943',
    location: 'LR',
    bbDown: 'ao',
    bbLr: 'ix',
    bbOut: 'xx',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f698f063-9840-4c0d-8376-2dae7b6f94e1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '880',
    name: 'Måns',
    arrivalTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    description: null,
    tagNr: '0718',
    location: 'LR',
    bbDown: 'xt',
    bbLr: 'uf',
    bbOut: 'vg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '33f691a4-feb4-4aa4-a3e9-1e8ae9bb5fba',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '570',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    description: null,
    tagNr: '3362',
    location: 'LR',
    bbDown: 'br',
    bbLr: 'sq',
    bbOut: 'un',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7d8fa969-be40-459a-8a21-355e6a490624',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '170',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    description: null,
    tagNr: '5200',
    location: 'LR1',
    bbDown: 'ot',
    bbLr: 'wf',
    bbOut: 'nw',
    completedAt: new Date(
      new Date('1/20/2023').setHours(
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
    luggageId: '0e95d1b2-3933-42d5-99cb-d59038f2edfc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '209',
    name: 'Eléonore',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '4469',
    location: 'LR1',
    bbDown: 'hl',
    bbLr: 'ep',
    bbOut: 'jz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '66d3098c-8a5c-4248-998b-b2bd254c8289',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '674',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    description: null,
    tagNr: '9120',
    location: 'LR1',
    bbDown: 'jr',
    bbLr: 'nh',
    bbOut: 'ax',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: '1b57d571-3119-4566-9b81-7f792570f93d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '569',
    name: 'Marie-thérèse',
    arrivalTime: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description: null,
    tagNr: '4118',
    location: 'LR1',
    bbDown: 'xq',
    bbLr: 'wh',
    bbOut: 'vp',
    completedAt: new Date(
      new Date('2/16/2023').setHours(
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
    luggageId: '242233f9-9359-4727-858e-3ca848119a44',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '558',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    description: 'Suspendisse potenti.',
    tagNr: '1484',
    location: 'LR',
    bbDown: 'fq',
    bbLr: 'ob',
    bbOut: 'if',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
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
    luggageId: '9025293f-3a88-4e35-8544-eb10d4c58d15',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '944',
    name: 'Kévina',
    arrivalTime: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: 'Donec quis orci eget orci vehicula condimentum.',
    tagNr: '9411',
    location: 'LR1',
    bbDown: 'rm',
    bbLr: 'kp',
    bbOut: 'qw',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
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
    luggageId: '401bb92f-547d-494a-b686-bf4db27e3a8a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '622',
    name: 'Cécilia',
    arrivalTime: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '8715',
    location: 'LR1',
    bbDown: 'kk',
    bbLr: 'lv',
    bbOut: 'mo',
    completedAt: new Date(
      new Date('11/13/2022').setHours(
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
    luggageId: 'ca5aad1a-b190-400c-b1d2-b80e5e811293',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '468',
    name: 'Liè',
    arrivalTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    description: null,
    tagNr: '1791',
    location: 'LR',
    bbDown: 'eo',
    bbLr: 'hq',
    bbOut: 'ph',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '348fcd80-b273-400a-9976-29969f33a7bd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '026',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description: 'Suspendisse potenti.',
    tagNr: '7831',
    location: 'LR1',
    bbDown: 'dz',
    bbLr: 'ei',
    bbOut: 'jp',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
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
    luggageId: '6ed93a72-78c1-4840-b1d8-b52cf64cb422',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '249',
    name: 'Nélie',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description: 'Nunc purus.',
    tagNr: '6397',
    location: 'LR1',
    bbDown: 'bw',
    bbLr: 'zy',
    bbOut: 'rd',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ff2eca24-2964-4762-a9a5-e47f56b28a44',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '979',
    name: 'Amélie',
    arrivalTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    tagNr: '5079',
    location: 'LR',
    bbDown: 'jt',
    bbLr: 'vj',
    bbOut: 'eu',
    completedAt: new Date(
      new Date('1/26/2023').setHours(
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
    luggageId: 'cce2c115-8cd3-4a96-9fcc-267d9fe52ca9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '101',
    name: 'Marie-josée',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    description: 'Quisque porta volutpat erat.',
    tagNr: '1135',
    location: 'LR',
    bbDown: 'ei',
    bbLr: 'qp',
    bbOut: 'jn',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: '3f094afc-0a4c-456f-a2e2-8010e6f6c668',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '003',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description: 'Maecenas tincidunt lacus at velit.',
    tagNr: '7713',
    location: 'LR1',
    bbDown: 'no',
    bbLr: 'ru',
    bbOut: 'ti',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
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
    luggageId: 'c66c10f0-8839-4581-9047-4bc00be6c381',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '100',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    description: null,
    tagNr: '6763',
    location: 'LR',
    bbDown: 'uy',
    bbLr: 'la',
    bbOut: 'bn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6673e787-a58a-475b-94e9-d3ba0d4de83a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '235',
    name: 'Sélène',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: 'Proin at turpis a pede posuere nonummy.',
    tagNr: '7911',
    location: 'LR',
    bbDown: 'rc',
    bbLr: 'dy',
    bbOut: 'rx',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c3647845-da8b-4932-956f-458527538d03',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '693',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    description: null,
    tagNr: '5186',
    location: 'LR',
    bbDown: 'rk',
    bbLr: 'za',
    bbOut: 'bp',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: 'ac61b2c6-ed45-4fc8-aa76-fdae4cc10a7d',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '747',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    description: null,
    tagNr: '5521',
    location: 'LR1',
    bbDown: 'sc',
    bbLr: 'uy',
    bbOut: 'kp',
    completedAt: new Date(
      new Date('12/7/2022').setHours(
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
    luggageId: 'b18ff2bd-dbef-483c-a388-57b131025c5f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '402',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: null,
    tagNr: '2529',
    location: 'LR',
    bbDown: 'nr',
    bbLr: 'kw',
    bbOut: 'qf',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: '7189b756-0ce9-41ad-9b62-d4fbd8271b20',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '521',
    name: 'Gérald',
    arrivalTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description: null,
    tagNr: '5087',
    location: 'LR1',
    bbDown: 'nn',
    bbLr: 'gr',
    bbOut: 'is',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ef94a889-7c61-4498-85a7-a55fe342d149',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '459',
    name: 'Marie-françoise',
    arrivalTime: null,
    bags: '0+9',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '7992',
    location: 'LR',
    bbDown: null,
    bbLr: 'gz',
    bbOut: 'up',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b76673e1-9902-4c1b-9477-da0eb910ad06',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '766',
    name: 'Almérinda',
    arrivalTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    description: null,
    tagNr: '2805',
    location: 'LR',
    bbDown: 'cx',
    bbLr: 'bv',
    bbOut: 'fo',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
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
    luggageId: '30ff7693-b271-4b88-ae96-656d0f003fd0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '671',
    name: 'André',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    description: 'Suspendisse potenti.',
    tagNr: '8522',
    location: 'LR',
    bbDown: 'wy',
    bbLr: 'ft',
    bbOut: 'nf',
    completedAt: new Date(
      new Date('12/6/2022').setHours(
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
    luggageId: '27555b21-c129-4721-a5f6-eb234a61475e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '885',
    name: 'Börje',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    description: 'Integer a nibh.',
    tagNr: '2978',
    location: 'LR1',
    bbDown: 'sk',
    bbLr: 'qp',
    bbOut: 'mt',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: 'af5beaac-bc67-4d4a-9b45-6ceb722e80fb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '509',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    tagNr: '3809',
    location: 'LR1',
    bbDown: 'bg',
    bbLr: 'vr',
    bbOut: 'sh',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: 'a85d6426-e4d7-42c5-ab54-5ee994cc7f07',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '987',
    name: 'Marylène',
    arrivalTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: null,
    tagNr: '1429',
    location: 'LR',
    bbDown: 'we',
    bbLr: 'pa',
    bbOut: 'bd',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: '0d689f59-8164-43b1-befc-1b84528af369',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '599',
    name: 'Réjane',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: 'Sed accumsan felis.',
    tagNr: '7782',
    location: 'LR',
    bbDown: null,
    bbLr: 'fc',
    bbOut: 'bq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '703c174e-6e68-46b9-a806-6ef067d991d9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '599',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description: 'Duis bibendum.',
    tagNr: '4850',
    location: 'LR',
    bbDown: 'de',
    bbLr: 'lk',
    bbOut: 'hj',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: 'ce8b022e-fe8f-42a0-98fe-9a1e10b3a5cd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '624',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '7684',
    location: 'LR',
    bbDown: 'ct',
    bbLr: 'ai',
    bbOut: 'qh',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: '5302d66b-6ebf-48d6-b336-5c2058bacbe6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '604',
    name: 'Ruò',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: null,
    tagNr: '7824',
    location: 'LR',
    bbDown: 'lj',
    bbLr: 'yq',
    bbOut: 'zl',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
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
    luggageId: 'c66dedc1-2943-4fa1-ace5-d8e766c54597',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '667',
    name: 'Intéressant',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: 'Aliquam non mauris.',
    tagNr: '1952',
    location: 'LR',
    bbDown: 'hv',
    bbLr: 'wj',
    bbOut: 'tp',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
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
    luggageId: '81ee306f-47d7-4a23-ada6-5703db7d281c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '041',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description: 'Nam nulla.',
    tagNr: '5471',
    location: 'LR1',
    bbDown: 'pw',
    bbLr: 'ey',
    bbOut: 'qr',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
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
    luggageId: 'fe3e6a23-794f-44bd-bf36-0d10eb199109',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '979',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description: 'Nulla facilisi.',
    tagNr: '3468',
    location: 'LR',
    bbDown: 'eq',
    bbLr: 'sy',
    bbOut: 'pg',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
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
    luggageId: '9aa50a6d-723f-493a-842b-19f3cf52968d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '065',
    name: 'Cloé',
    arrivalTime: null,
    bags: '7+0',
    description: 'Nulla nisl.',
    tagNr: '9608',
    location: 'LR1',
    bbDown: 'su',
    bbLr: 'qg',
    bbOut: 'kf',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
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
    luggageId: 'cdc554cf-da92-4728-bea3-6aacd47e7da6',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '627',
    name: 'Thérèsa',
    arrivalTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: 'Integer ac neque.',
    tagNr: '4571',
    location: 'LR',
    bbDown: 'lj',
    bbLr: 'ra',
    bbOut: 'zy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '335a8bcf-f13f-422d-a1bd-ae250cac59ed',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '269',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: 'In sagittis dui vel nisl.',
    tagNr: '9857',
    location: 'LR1',
    bbDown: null,
    bbLr: 'nu',
    bbOut: 'sg',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
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
    luggageId: '8dc6ce1d-f18d-458a-8117-6eece897fc2f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '983',
    name: 'Marie-ève',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    description: null,
    tagNr: '5949',
    location: 'LR',
    bbDown: null,
    bbLr: 'lk',
    bbOut: 'tb',
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
    luggageId: '08348d02-fb20-4c2e-be75-71c594d94149',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '069',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '2023',
    location: 'LR',
    bbDown: 'ge',
    bbLr: 'wp',
    bbOut: 'lq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6d5e69a4-e38c-4d1a-bd19-4bf9778caeb5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '220',
    name: 'Adèle',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description: 'In congue.',
    tagNr: '8926',
    location: 'LR',
    bbDown: 'tu',
    bbLr: 'as',
    bbOut: 'kx',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
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
    luggageId: '6f2757e4-875d-4160-8053-3d47a9196ed5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '930',
    name: 'Gösta',
    arrivalTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    description: 'Nullam molestie nibh in lectus.',
    tagNr: '7026',
    location: 'LR',
    bbDown: null,
    bbLr: 'zc',
    bbOut: 'ml',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
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
    luggageId: '1b679d80-0ab9-414f-a4de-62ca81ac6af5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '826',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description: 'Aliquam erat volutpat.',
    tagNr: '1171',
    location: 'LR',
    bbDown: 'hx',
    bbLr: 'ul',
    bbOut: 'ti',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ee1fde8f-6352-4116-9947-c3528b221c55',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '995',
    name: 'Gösta',
    arrivalTime: null,
    bags: '7+0',
    description: null,
    tagNr: '8176',
    location: 'LR1',
    bbDown: 'qi',
    bbLr: 'tw',
    bbOut: 'kd',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
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
    luggageId: 'd4a9c8ff-fadf-47d7-83ab-16636ea0c01f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '382',
    name: 'Maëline',
    arrivalTime: null,
    bags: '8+0',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '3953',
    location: 'LR',
    bbDown: 'ed',
    bbLr: 'yl',
    bbOut: 'xo',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
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
    luggageId: '071a104e-a52d-42a6-af2b-d569512f1d5e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '078',
    name: 'Laurélie',
    arrivalTime: null,
    bags: '3+5',
    description: 'Integer tincidunt ante vel ipsum.',
    tagNr: '8796',
    location: 'LR',
    bbDown: null,
    bbLr: 'wa',
    bbOut: 'ap',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: '53360df0-68d1-4656-b589-f6cccd68f62a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '702',
    name: 'Néhémie',
    arrivalTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description: null,
    tagNr: '8028',
    location: 'LR1',
    bbDown: null,
    bbLr: 'dq',
    bbOut: 'xm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2e51bbdd-8452-4a2e-b197-4778ff472ab3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '003',
    name: 'Sòng',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    description: null,
    tagNr: '5836',
    location: 'LR1',
    bbDown: 'xn',
    bbLr: 'vm',
    bbOut: 'bf',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: 'a0963396-57cd-4266-b55d-bae5003f915d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '030',
    name: 'Marie-ève',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: 'Sed accumsan felis.',
    tagNr: '1700',
    location: 'LR1',
    bbDown: null,
    bbLr: 'wo',
    bbOut: 'nw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '46ef6964-b0a1-408f-a2be-75a521638a28',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '448',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description: 'Proin risus.',
    tagNr: '2804',
    location: 'LR1',
    bbDown: 'ix',
    bbLr: 'ui',
    bbOut: 'ij',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '51e39505-1abd-4d45-a816-68a3fbfc69d0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '466',
    name: 'Nélie',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    description: null,
    tagNr: '1210',
    location: 'LR',
    bbDown: 'wc',
    bbLr: 'sa',
    bbOut: 'za',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6738964a-99a6-4a59-84b1-19b7a0bff740',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '346',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: null,
    tagNr: '3752',
    location: 'LR1',
    bbDown: 'bw',
    bbLr: 'mc',
    bbOut: 'po',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
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
    luggageId: '1a65e9e2-d3ba-4716-afe6-96d1682be12b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '873',
    name: 'Vénus',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    description: 'Morbi a ipsum.',
    tagNr: '7993',
    location: 'LR1',
    bbDown: 'mn',
    bbLr: 'qk',
    bbOut: 'aj',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
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
    luggageId: 'e3efcac7-83cc-43f6-81a9-17b5bca6c47d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '880',
    name: 'Laurène',
    arrivalTime: null,
    bags: '4+8',
    description: null,
    tagNr: '3018',
    location: 'LR1',
    bbDown: 'rj',
    bbLr: 'ne',
    bbOut: 'cb',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
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
    luggageId: '7ed03aad-ac82-4ec8-9c3f-dde97eca75e7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '361',
    name: 'Marie-thérèse',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '8226',
    location: 'LR1',
    bbDown: 'qw',
    bbLr: 'ta',
    bbOut: 'nx',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3cd613c9-6d64-45cc-8075-c0dd2d398fdf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '743',
    name: 'Personnalisée',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    description: null,
    tagNr: '1038',
    location: 'LR1',
    bbDown: 'ki',
    bbLr: 'jp',
    bbOut: 'oq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2b30ffad-8af3-4d26-98b3-90c4e766b656',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '365',
    name: 'Josée',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description: 'Proin at turpis a pede posuere nonummy.',
    tagNr: '6549',
    location: 'LR',
    bbDown: 'ge',
    bbLr: 'ok',
    bbOut: 'ti',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
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
    luggageId: '1003a616-4811-442a-a96b-b492c07a5831',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '614',
    name: 'Aloïs',
    arrivalTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: 'Duis bibendum.',
    tagNr: '1021',
    location: 'LR1',
    bbDown: 'ea',
    bbLr: 'hz',
    bbOut: 'dx',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
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
    luggageId: '7c508558-2a58-4fc5-8110-55b0a44fe314',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '876',
    name: 'Ruì',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'In quis justo.',
    tagNr: '5037',
    location: 'LR',
    bbDown: 'wf',
    bbLr: 'yv',
    bbOut: 'ym',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: '88e69436-216b-4013-bf05-9d8eac910e89',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '773',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    tagNr: '8512',
    location: 'LR',
    bbDown: 'ub',
    bbLr: 'qy',
    bbOut: 'oi',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
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
    luggageId: 'a86b6a87-1370-4bac-b986-1bcc85dab927',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '282',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    description: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '9819',
    location: 'LR',
    bbDown: 'ki',
    bbLr: 'ae',
    bbOut: 'oq',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
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
    luggageId: 'faeab88b-6962-4bee-9aa8-32a411bbb4c8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '749',
    name: 'Marie-josée',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    description: null,
    tagNr: '6470',
    location: 'LR1',
    bbDown: 'zf',
    bbLr: 'zw',
    bbOut: 'ew',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: '852ad8b7-599c-4a95-a794-eb6d0b464600',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '225',
    name: 'Maëline',
    arrivalTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    description: null,
    tagNr: '0009',
    location: 'LR1',
    bbDown: 'qn',
    bbLr: 'lp',
    bbOut: 'gn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '259d3559-06f1-4cc8-8566-4634809b659f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '828',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    description: null,
    tagNr: '9659',
    location: 'LR',
    bbDown: null,
    bbLr: 'no',
    bbOut: 'aj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '70f66826-b158-4df2-a092-a624ad0acc84',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '746',
    name: 'Kévina',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    description: null,
    tagNr: '4036',
    location: 'LR1',
    bbDown: null,
    bbLr: 'bg',
    bbOut: 'tk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2625d599-7393-4498-b166-b266d5ac6643',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '374',
    name: 'Eléonore',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description: null,
    tagNr: '8465',
    location: 'LR1',
    bbDown: null,
    bbLr: 'or',
    bbOut: 'hg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a89449a1-ee01-4fb3-95dd-169239048960',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '138',
    name: 'Crééz',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: null,
    tagNr: '3789',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mq',
    bbOut: 'zn',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: 'd7466644-8a9d-43b8-a105-96fabe79247c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '231',
    name: 'Yú',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: null,
    tagNr: '5000',
    location: 'LR1',
    bbDown: 'dr',
    bbLr: 'wi',
    bbOut: 'yb',
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
    luggageId: '1a3ac382-d4f3-416f-812b-b5b91d88660c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '851',
    name: 'Uò',
    arrivalTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: null,
    tagNr: '3540',
    location: 'LR',
    bbDown: 'qf',
    bbLr: 'py',
    bbOut: 'ru',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
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
    luggageId: '3084280b-cb08-4b09-9c54-bf821dc5f6b1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '594',
    name: 'Ruò',
    arrivalTime: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    description: 'Vivamus tortor.',
    tagNr: '0652',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ac',
    bbOut: 'ct',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '76bb6110-f1c1-413b-a3f9-fecd2664c971',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '593',
    name: 'Pélagie',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '7817',
    location: 'LR',
    bbDown: null,
    bbLr: 'cw',
    bbOut: 'hd',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
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
    luggageId: '4c347239-5f5f-4735-a44b-f4cfdfa8df77',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '283',
    name: 'Loïc',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    description: null,
    tagNr: '7159',
    location: 'LR',
    bbDown: 'mc',
    bbLr: 'ih',
    bbOut: 'hm',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
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
    luggageId: '8287e195-14bc-4786-9b7d-47b3fb9ab74c',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '186',
    name: 'Ruò',
    arrivalTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: null,
    tagNr: '8727',
    location: 'LR',
    bbDown: null,
    bbLr: 'jq',
    bbOut: 'gs',
    completedAt: new Date(
      new Date('1/22/2023').setHours(
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
    luggageId: '85307bc4-96b2-43b1-a2dd-162223763acc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '676',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    description: 'Integer non velit.',
    tagNr: '8384',
    location: 'LR',
    bbDown: 'ep',
    bbLr: 'to',
    bbOut: 'px',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
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
    luggageId: '49b5580a-78aa-4537-8b6a-c4de2dc92ace',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '291',
    name: 'Måns',
    arrivalTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: null,
    tagNr: '5801',
    location: 'LR1',
    bbDown: 'pp',
    bbLr: 'so',
    bbOut: 'is',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '360c91f3-945a-45ac-b4b8-6286dc15a2f2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '740',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '8031',
    location: 'LR1',
    bbDown: 'ew',
    bbLr: 'cv',
    bbOut: 'hz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ce797734-82a1-47fd-bf8c-1b1d068409b9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '488',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description: null,
    tagNr: '8557',
    location: 'LR1',
    bbDown: 'et',
    bbLr: 'kn',
    bbOut: 'zd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '16a701bb-83dd-4176-8dbe-cdb46ab494c1',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '654',
    name: 'Styrbjörn',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description: null,
    tagNr: '1160',
    location: 'LR1',
    bbDown: 'zl',
    bbLr: 'dy',
    bbOut: 'js',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c25ee048-4202-4514-958d-822457866829',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '159',
    name: 'Salomé',
    arrivalTime: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Sed ante.',
    tagNr: '2069',
    location: 'LR',
    bbDown: null,
    bbLr: 'nd',
    bbOut: 'zo',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
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
    luggageId: '26ecac4f-f156-4d0e-a9b6-df174492b3bf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '576',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    description: 'Nullam varius.',
    tagNr: '7828',
    location: 'LR1',
    bbDown: 'nn',
    bbLr: 'rp',
    bbOut: 'iw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fb65cd32-2b7f-465e-aebd-5e46cb9d6ce3',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '722',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: 'Nunc nisl.',
    tagNr: '0271',
    location: 'LR',
    bbDown: 'mc',
    bbLr: 'ce',
    bbOut: 'qi',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1d31ef22-91c3-42b9-9511-f2ca406bd354',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '884',
    name: 'Personnalisée',
    arrivalTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: 'Praesent blandit lacinia erat.',
    tagNr: '3499',
    location: 'LR1',
    bbDown: 'ip',
    bbLr: 'wi',
    bbOut: 'fs',
    completedAt: new Date(
      new Date('2/1/2023').setHours(
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
    luggageId: 'a6b7f3cb-3b8e-4eab-a398-0e6ae8391f9a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '308',
    name: 'Lorène',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: 'Vivamus tortor.',
    tagNr: '2344',
    location: 'LR',
    bbDown: null,
    bbLr: 'wz',
    bbOut: 'bi',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
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
    luggageId: '3092e61c-ef5d-4715-b470-eda17e3216df',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '253',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: 'Pellentesque ultrices mattis odio.',
    tagNr: '8720',
    location: 'LR',
    bbDown: 'ym',
    bbLr: 'ga',
    bbOut: 'pb',
    completedAt: new Date(
      new Date('1/27/2023').setHours(
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
    luggageId: 'f1b2c10b-111a-4bb6-8eec-00ce11f1b52d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '819',
    name: 'Kévina',
    arrivalTime: null,
    bags: '8+7',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '7487',
    location: 'LR',
    bbDown: null,
    bbLr: 'wc',
    bbOut: 'uf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '21f82345-1428-4cd1-986b-cfcf9b571118',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '008',
    name: 'Sòng',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    description: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '9078',
    location: 'LR',
    bbDown: null,
    bbLr: 'mq',
    bbOut: 'xg',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
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
    luggageId: '3960cd4f-91c8-4a31-8238-066f16c4296f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '189',
    name: 'Adélaïde',
    arrivalTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: 'Sed ante.',
    tagNr: '4158',
    location: 'LR1',
    bbDown: 'zc',
    bbLr: 'nl',
    bbOut: 'gn',
    completedAt: new Date(
      new Date('1/19/2023').setHours(
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
    luggageId: '6b84b1de-bdf0-47e4-afeb-226a290a9dd5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '936',
    name: 'Uò',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: 'Vestibulum rutrum rutrum neque.',
    tagNr: '2640',
    location: 'LR',
    bbDown: 'rv',
    bbLr: 'uz',
    bbOut: 'yp',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
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
    luggageId: 'e1149ad0-8033-4eb0-872a-8f5b0ae591c8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '000',
    name: 'Vénus',
    arrivalTime: null,
    bags: '4+5',
    description: null,
    tagNr: '4914',
    location: 'LR',
    bbDown: null,
    bbLr: 'ty',
    bbOut: 'lc',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5456b3fc-efde-465b-b714-57bf0baa1005',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '758',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    description: null,
    tagNr: '4764',
    location: 'LR1',
    bbDown: 'ae',
    bbLr: 'oq',
    bbOut: 'cs',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7dcb41fb-addb-46dd-b50e-3b4a003e1b78',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '611',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    description: null,
    tagNr: '4532',
    location: 'LR',
    bbDown: 'oq',
    bbLr: 'ci',
    bbOut: 'dv',
    completedAt: new Date(
      new Date('2/25/2023').setHours(
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
    luggageId: '7cc007b2-cd9a-4ffd-b927-79443e641fe8',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '038',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '4169',
    location: 'LR',
    bbDown: null,
    bbLr: 'gz',
    bbOut: 'ke',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e6aec956-2c8f-45f0-ac07-067e35a605ba',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '737',
    name: 'Jú',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    description: null,
    tagNr: '4503',
    location: 'LR',
    bbDown: null,
    bbLr: 'yp',
    bbOut: 'fl',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
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
    luggageId: 'f879ea80-bcae-49d6-8fac-348044ec041d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '977',
    name: 'André',
    arrivalTime: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '2252',
    location: 'LR',
    bbDown: 'tg',
    bbLr: 'bn',
    bbOut: 'ej',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
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
    luggageId: 'fd3f0b23-21ae-4453-8289-3928231cfe17',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '259',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    description: 'Praesent id massa id nisl venenatis lacinia.',
    tagNr: '3094',
    location: 'LR',
    bbDown: 'cs',
    bbLr: 'zq',
    bbOut: 'tb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e419ccd5-2643-4dc0-94c9-cf290147ab97',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '091',
    name: 'Régine',
    arrivalTime: null,
    bags: '0+9',
    description: null,
    tagNr: '1742',
    location: 'LR',
    bbDown: 'kj',
    bbLr: 'zt',
    bbOut: 'tv',
    completedAt: new Date(
      new Date('2/18/2023').setHours(
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
    luggageId: '654200d5-9935-4101-8da6-f20b4c76d398',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '519',
    name: 'Maï',
    arrivalTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description: null,
    tagNr: '3559',
    location: 'LR',
    bbDown: 'ri',
    bbLr: 'nl',
    bbOut: 'dp',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '70ae33ee-706e-4236-89a9-8dde771eb152',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '480',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    description: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '6821',
    location: 'LR',
    bbDown: 'wo',
    bbLr: 'kt',
    bbOut: 'xd',
    completedAt: new Date(
      new Date('1/22/2023').setHours(
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
    luggageId: '8893bd3d-2e22-468e-819f-6f6e59ef4689',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '101',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    description: null,
    tagNr: '0658',
    location: 'LR',
    bbDown: 'wa',
    bbLr: 'fz',
    bbOut: 'cs',
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
    luggageId: 'f40c0e5a-9b50-41d8-9ec8-e2c520b6a8f9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '324',
    name: 'Félicie',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '0489',
    location: 'LR1',
    bbDown: 'fx',
    bbLr: 'at',
    bbOut: 'nz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f0d63866-c3ee-40be-9afb-e796c282ac78',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '355',
    name: 'Eléonore',
    arrivalTime: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '0705',
    location: 'LR1',
    bbDown: 'za',
    bbLr: 'zv',
    bbOut: 'bs',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd63a3fd9-a078-4767-86b5-0ec6518c73be',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '211',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: null,
    tagNr: '7800',
    location: 'LR',
    bbDown: 'sc',
    bbLr: 'dq',
    bbOut: 'ii',
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
    luggageId: '8cfaf59c-5d01-4c56-afa6-f14d2fb943bf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '932',
    name: 'Léandre',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description: null,
    tagNr: '6277',
    location: 'LR',
    bbDown: null,
    bbLr: 'dl',
    bbOut: 'cf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c9ffe794-7c2a-4c52-9fde-7e9bbd286bd4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '979',
    name: 'Aloïs',
    arrivalTime: null,
    bags: '5+1',
    description: null,
    tagNr: '6061',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mc',
    bbOut: 'if',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: '8aa5b635-82e9-4ee4-999b-71365248275c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '728',
    name: 'Vénus',
    arrivalTime: null,
    bags: '3+7',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    tagNr: '0431',
    location: 'LR',
    bbDown: 'cz',
    bbLr: 'gm',
    bbOut: 'qv',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: 'c948d6af-915b-4930-8ff0-c8181e50a9ec',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '506',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: null,
    tagNr: '4798',
    location: 'LR',
    bbDown: 'ch',
    bbLr: 'pv',
    bbOut: 'pp',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
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
    luggageId: '855aff3c-3860-4779-a931-67982a9760e7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '520',
    name: 'Cunégonde',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    description: 'Nam tristique tortor eu pede.',
    tagNr: '1252',
    location: 'LR',
    bbDown: 'sg',
    bbLr: 'gx',
    bbOut: 'ph',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
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
    luggageId: 'ad5ecb9d-c5e3-4a6f-9472-ce9d2fb36aff',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '769',
    name: 'Publicité',
    arrivalTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    description: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    tagNr: '9462',
    location: 'LR',
    bbDown: 'qy',
    bbLr: 'dg',
    bbOut: 'hy',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
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
    luggageId: '73f2e231-a2fe-4043-a63f-e9b92be7f051',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '990',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    description: 'In sagittis dui vel nisl.',
    tagNr: '2401',
    location: 'LR',
    bbDown: 'xl',
    bbLr: 'oi',
    bbOut: 'ic',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f2471f4b-b115-4f40-a033-63b52550a615',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '473',
    name: 'Gaétane',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    tagNr: '1174',
    location: 'LR1',
    bbDown: 'ny',
    bbLr: 'jr',
    bbOut: 'pq',
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
    luggageId: 'f40df5cb-0e60-4348-b77e-9aaacfd92612',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '320',
    name: 'Vénus',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    description: null,
    tagNr: '8946',
    location: 'LR1',
    bbDown: 'yb',
    bbLr: 'sj',
    bbOut: 'jf',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
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
    luggageId: '2e3efbbb-d98e-41e5-b61d-04f13fa4fe98',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '482',
    name: 'Gérald',
    arrivalTime: null,
    bags: '7+1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '4935',
    location: 'LR1',
    bbDown: 'gg',
    bbLr: 'nz',
    bbOut: 'zr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c284187c-48d2-4466-b065-314c043974b5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '951',
    name: 'Mahélie',
    arrivalTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    description: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '6734',
    location: 'LR',
    bbDown: null,
    bbLr: 'bu',
    bbOut: 'du',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8280a86f-a1df-4221-a386-034e149e87d8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '446',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '3492',
    location: 'LR1',
    bbDown: 'gw',
    bbLr: 'jk',
    bbOut: 'gm',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
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
    luggageId: '4411ddcd-8367-4fe9-bbb4-6c93c3470291',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '792',
    name: 'Thérèse',
    arrivalTime: null,
    bags: '5+6',
    description: null,
    tagNr: '4748',
    location: 'LR',
    bbDown: 'xm',
    bbLr: 'dv',
    bbOut: 'vz',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
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
    luggageId: 'd3adab73-173e-4f71-9be3-76a34bcf2a91',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '022',
    name: 'Naéva',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description: null,
    tagNr: '6628',
    location: 'LR',
    bbDown: null,
    bbLr: 'jk',
    bbOut: 'mq',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
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
    luggageId: 'ec751eee-a35c-4700-b627-d93dd3720b5e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '846',
    name: 'Frédérique',
    arrivalTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    description: null,
    tagNr: '2783',
    location: 'LR',
    bbDown: 'wl',
    bbLr: 'db',
    bbOut: 'fj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f5c1eeb7-49d7-4088-bb82-1e8a36a0a0f8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '963',
    name: 'Styrbjörn',
    arrivalTime: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: null,
    tagNr: '5051',
    location: 'LR',
    bbDown: 'cf',
    bbLr: 'vk',
    bbOut: 'pv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fb5760d6-e178-4bec-bb63-22a2dadd1ca6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '537',
    name: 'Dù',
    arrivalTime: null,
    bags: '2+0',
    description: null,
    tagNr: '2735',
    location: 'LR1',
    bbDown: 'em',
    bbLr: 'lw',
    bbOut: 'ke',
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
    luggageId: '311af25a-d7ec-44ec-96a6-3c57bb9c1b38',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '022',
    name: 'Maëly',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    description: null,
    tagNr: '6640',
    location: 'LR1',
    bbDown: 'dg',
    bbLr: 'uo',
    bbOut: 'sa',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7d8cfd33-1c30-4b7f-98d8-f954b02f04a3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '145',
    name: 'Chloé',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    description: null,
    tagNr: '4924',
    location: 'LR',
    bbDown: 'wh',
    bbLr: 'mo',
    bbOut: 'gp',
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
    luggageId: '7e12c368-01f8-4348-a368-6d52d5b4245c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '305',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    description: null,
    tagNr: '7062',
    location: 'LR1',
    bbDown: 'hq',
    bbLr: 'xk',
    bbOut: 'kr',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
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
    luggageId: '72723b40-f877-4561-86c6-be312fd6d7d4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '899',
    name: 'Erwéi',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    description: 'Nam dui.',
    tagNr: '0659',
    location: 'LR',
    bbDown: 'ed',
    bbLr: 'sc',
    bbOut: 'ty',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
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
    luggageId: '31283024-4135-4013-a120-bfa3039d6032',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '977',
    name: 'Mélia',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    description: 'Morbi ut odio.',
    tagNr: '7662',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ff',
    bbOut: 'om',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: '9f4b0e4d-1f17-44c4-bfb0-17f048142538',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '291',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    description: null,
    tagNr: '1023',
    location: 'LR1',
    bbDown: 'pc',
    bbLr: 'cd',
    bbOut: 'am',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
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
    luggageId: 'b696040b-6fd3-4fe8-a121-0edf1cd06c76',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '927',
    name: 'Marlène',
    arrivalTime: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: null,
    tagNr: '0985',
    location: 'LR',
    bbDown: 'xx',
    bbLr: 'kj',
    bbOut: 'mu',
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
    luggageId: '7a83db9b-e21d-48d0-acc4-2390dab80cc1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '718',
    name: 'Nélie',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: null,
    tagNr: '0690',
    location: 'LR1',
    bbDown: null,
    bbLr: 'le',
    bbOut: 'tb',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: '1e8b2546-3143-4c07-ac97-f982d82e0f24',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '675',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: 'Donec ut dolor.',
    tagNr: '0478',
    location: 'LR1',
    bbDown: null,
    bbLr: 'zm',
    bbOut: 'wg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ee3dd8a7-05b8-47a1-bcb8-19cac3b3571d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '687',
    name: 'Dà',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: null,
    tagNr: '6145',
    location: 'LR1',
    bbDown: 'li',
    bbLr: 'do',
    bbOut: 'mc',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5729b3ea-0e9e-46d9-9f99-c916dea1286f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '967',
    name: 'Dorothée',
    arrivalTime: null,
    bags: '8+9',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '6305',
    location: 'LR',
    bbDown: 'mg',
    bbLr: 'nv',
    bbOut: 'ar',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c7a8ef41-8d38-4120-8cee-2abb3f398a51',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '201',
    name: 'Mélodie',
    arrivalTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    tagNr: '7786',
    location: 'LR',
    bbDown: 'ss',
    bbLr: 'bu',
    bbOut: 'rm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '45f5d096-64b3-4379-be84-80c5c44a820b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '134',
    name: 'Cécilia',
    arrivalTime: null,
    bags: '4+4',
    description: 'Ut tellus.',
    tagNr: '8232',
    location: 'LR',
    bbDown: null,
    bbLr: 'bj',
    bbOut: 'lw',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
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
    luggageId: '672cafa8-6185-4a0c-9a7a-92a9fc56656b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '988',
    name: 'Cléa',
    arrivalTime: null,
    bags: '7+4',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '8607',
    location: 'LR',
    bbDown: 'or',
    bbLr: 'vr',
    bbOut: 'lv',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
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
    luggageId: 'f5a96145-4ac8-4305-a218-2ef808424dd5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '152',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '8451',
    location: 'LR1',
    bbDown: 'bb',
    bbLr: 'ew',
    bbOut: 'yo',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4cdc41c8-3b2a-4bae-a029-c17945c4f0b2',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '213',
    name: 'Mélinda',
    arrivalTime: null,
    bags: '8+9',
    description: null,
    tagNr: '2839',
    location: 'LR1',
    bbDown: 'rr',
    bbLr: 'jp',
    bbOut: 'to',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6655a355-d502-4538-82f9-1d2d7b054cf1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '641',
    name: 'Anaïs',
    arrivalTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '6972',
    location: 'LR',
    bbDown: 'yp',
    bbLr: 'ol',
    bbOut: 'xu',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
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
    luggageId: 'f85d1484-fceb-4e88-8b8f-5f3fa8396bbd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '726',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: 'Suspendisse potenti.',
    tagNr: '3887',
    location: 'LR',
    bbDown: 'pw',
    bbLr: 'np',
    bbOut: 'fc',
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
    luggageId: 'dad86e89-518f-4408-beda-ad84a7ef5af0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '521',
    name: 'Cunégonde',
    arrivalTime: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: null,
    tagNr: '8358',
    location: 'LR1',
    bbDown: 'ne',
    bbLr: 'tw',
    bbOut: 'lo',
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
    luggageId: '6ef7a60c-fdb3-43e2-a529-fb08e23704a7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '397',
    name: 'Valérie',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: null,
    tagNr: '4475',
    location: 'LR',
    bbDown: 'ap',
    bbLr: 'ss',
    bbOut: 'vb',
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
    luggageId: '2b40e0c6-4849-4349-8762-b3d1b9d91fd6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '426',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: 'Donec vitae nisi.',
    tagNr: '5240',
    location: 'LR',
    bbDown: 'wc',
    bbLr: 'tl',
    bbOut: 'sc',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
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
    luggageId: '5cfd1e8c-3fcb-48bd-97a2-9ed688d6d227',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '555',
    name: 'Lóng',
    arrivalTime: null,
    bags: '3+4',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    tagNr: '8214',
    location: 'LR',
    bbDown: 'lx',
    bbLr: 'ol',
    bbOut: 'ok',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
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
    luggageId: '92acc01a-4588-4252-9ced-d31b319a27f8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '343',
    name: 'Loïca',
    arrivalTime: null,
    bags: '0+3',
    description: null,
    tagNr: '4264',
    location: 'LR',
    bbDown: 'rg',
    bbLr: 'sb',
    bbOut: 'rz',
    completedAt: new Date(
      new Date('2/6/2023').setHours(
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
    luggageId: '3fc40483-7766-458b-becd-a0c2e7ec9cdf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '334',
    name: 'Stévina',
    arrivalTime: null,
    bags: '5+2',
    description: 'Curabitur gravida nisi at nibh.',
    tagNr: '5075',
    location: 'LR',
    bbDown: null,
    bbLr: 'df',
    bbOut: 'sq',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
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
    luggageId: 'dc9f97e6-c98d-4657-be16-c05283e5d95c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '811',
    name: 'Jú',
    arrivalTime: null,
    bags: '9+6',
    description: 'Duis bibendum.',
    tagNr: '3529',
    location: 'LR1',
    bbDown: 'oa',
    bbLr: 'ur',
    bbOut: 'pi',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b05774fc-353a-4380-ae2f-437d5bd9fa9f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '024',
    name: 'Réjane',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description: 'Morbi porttitor lorem id ligula.',
    tagNr: '8372',
    location: 'LR1',
    bbDown: 'yg',
    bbLr: 'eg',
    bbOut: 'ro',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: 'a4e925f0-1069-4fc7-90f0-3f7df15a0110',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '160',
    name: 'Nuó',
    arrivalTime: null,
    bags: '3+1',
    description: 'Ut at dolor quis odio consequat varius.',
    tagNr: '5309',
    location: 'LR',
    bbDown: 'tq',
    bbLr: 'pz',
    bbOut: 'fu',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
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
    luggageId: '7cf3b85a-20d0-4961-bb8d-4ad2f2b42c22',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '097',
    name: 'Noémie',
    arrivalTime: null,
    bags: '0+8',
    description: 'Donec posuere metus vitae ipsum.',
    tagNr: '1582',
    location: 'LR1',
    bbDown: 'hl',
    bbLr: 'dv',
    bbOut: 'tu',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
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
    luggageId: 'eba83f5e-153a-467b-a964-1611efc334d6',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '122',
    name: 'Måns',
    arrivalTime: null,
    bags: '0+8',
    description: 'Maecenas rhoncus aliquam lacus.',
    tagNr: '6671',
    location: 'LR1',
    bbDown: 'pl',
    bbLr: 'ue',
    bbOut: 've',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
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
    luggageId: '8f15c8e5-70cf-4350-b84c-5d3f67d96bff',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '745',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    description: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '5622',
    location: 'LR1',
    bbDown: 'dp',
    bbLr: 'nw',
    bbOut: 'to',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: '6c5cde45-8632-47d4-a3f7-79dec3010c5b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '306',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    description: 'Curabitur convallis.',
    tagNr: '2181',
    location: 'LR1',
    bbDown: 'ap',
    bbLr: 'sp',
    bbOut: 'md',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
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
    luggageId: '6d8c8e41-c5b5-40ff-950e-ff232a54f18d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '914',
    name: 'Maëly',
    arrivalTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    description: 'In congue.',
    tagNr: '0618',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ym',
    bbOut: 'iw',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f24c1db1-778a-4d3d-9fdf-d76870ee0c89',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '918',
    name: 'Véronique',
    arrivalTime: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    description: null,
    tagNr: '8749',
    location: 'LR1',
    bbDown: 'bz',
    bbLr: 'di',
    bbOut: 'pa',
    completedAt: new Date(
      new Date('1/26/2023').setHours(
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
    luggageId: '6777d14f-f739-4b45-b94c-a70a0befdef4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '532',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    description: null,
    tagNr: '8323',
    location: 'LR',
    bbDown: 'zc',
    bbLr: 'zo',
    bbOut: 'bv',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
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
    luggageId: 'ad867187-62a5-4bbb-81ad-2a03fb754e66',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '975',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description: null,
    tagNr: '2326',
    location: 'LR1',
    bbDown: 'dk',
    bbLr: 'gk',
    bbOut: 'vd',
    completedAt: new Date(
      new Date('12/1/2022').setHours(
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
    luggageId: 'deec2665-f4a6-4bdb-bc4a-9f00f806b208',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '068',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    description: 'Duis consequat dui nec nisi volutpat eleifend.',
    tagNr: '9100',
    location: 'LR1',
    bbDown: 'yp',
    bbLr: 'op',
    bbOut: 'dj',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
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
    luggageId: 'a96d9233-4a8f-4cf1-a440-a8040724dbf2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '716',
    name: 'Rébecca',
    arrivalTime: null,
    bags: '1+2',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    tagNr: '4779',
    location: 'LR',
    bbDown: null,
    bbLr: 'uz',
    bbOut: 'xe',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '14b4cf5d-f976-4198-80c1-0bb013770215',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '261',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    description: 'Suspendisse ornare consequat lectus.',
    tagNr: '9979',
    location: 'LR',
    bbDown: 'at',
    bbLr: 'fs',
    bbOut: 'sg',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
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
    luggageId: '4d3f8122-dd5b-4b23-936e-1b838b8aa507',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '216',
    name: 'Camélia',
    arrivalTime: null,
    bags: '7+4',
    description: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '9755',
    location: 'LR1',
    bbDown: 'cm',
    bbLr: 'ss',
    bbOut: 'ue',
    completedAt: new Date(
      new Date('2/12/2023').setHours(
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
    luggageId: 'cc62ee17-013e-4255-8368-626826ac9e1a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '736',
    name: 'Pélagie',
    arrivalTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    description: null,
    tagNr: '9882',
    location: 'LR1',
    bbDown: 'sv',
    bbLr: 'cq',
    bbOut: 'mt',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4853c043-7bc2-4b60-8327-eed3700f941d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '774',
    name: 'Michèle',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    description: 'Maecenas rhoncus aliquam lacus.',
    tagNr: '9179',
    location: 'LR1',
    bbDown: 'ss',
    bbLr: 'ir',
    bbOut: 'yj',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
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
    luggageId: 'c3db5f38-b2a8-45a4-b3ce-efe1a3b11ce5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '822',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: null,
    tagNr: '0914',
    location: 'LR1',
    bbDown: 'kn',
    bbLr: 'rd',
    bbOut: 'wx',
    completedAt: new Date(
      new Date('1/2/2023').setHours(
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
    luggageId: '91741cd2-55af-4270-8063-28379cfe3d4c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '513',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    description: null,
    tagNr: '8860',
    location: 'LR1',
    bbDown: 'ip',
    bbLr: 'go',
    bbOut: 'rk',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
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
    luggageId: '58f8348a-2f3b-49ea-9535-f39e2976be51',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '168',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '7590',
    location: 'LR1',
    bbDown: 'wk',
    bbLr: 'qj',
    bbOut: 'we',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
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
    luggageId: 'a7725fa2-82ac-491d-8319-49d41b80045a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '208',
    name: 'Mélia',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description: null,
    tagNr: '9008',
    location: 'LR',
    bbDown: 'fh',
    bbLr: 'nd',
    bbOut: 'io',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
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
    luggageId: '552dab59-a41e-4c79-9cc0-a20280fa2cc2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '782',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    description: 'Nulla tellus.',
    tagNr: '1384',
    location: 'LR',
    bbDown: null,
    bbLr: 'ca',
    bbOut: 'au',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: '51d8c8a2-fea9-462c-ac4a-64d821f59810',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '219',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '2609',
    location: 'LR1',
    bbDown: 'bz',
    bbLr: 'vx',
    bbOut: 'se',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ae7e203f-f66d-4fa6-abbc-6e1f3933b1ee',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '406',
    name: 'Céline',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description: 'Vestibulum sed magna at nunc commodo placerat.',
    tagNr: '7848',
    location: 'LR',
    bbDown: 'mf',
    bbLr: 'yk',
    bbOut: 'af',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '34f6018c-5fef-431b-ad58-5f3900b6ed3c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '133',
    name: 'Bérengère',
    arrivalTime: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    description: 'Mauris sit amet eros.',
    tagNr: '1050',
    location: 'LR',
    bbDown: 'vd',
    bbLr: 'dv',
    bbOut: 'ow',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dc735518-de97-48f8-9bcb-855fe66fe4e5',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '113',
    name: 'Marie-josée',
    arrivalTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: 'Mauris sit amet eros.',
    tagNr: '9981',
    location: 'LR',
    bbDown: 'vq',
    bbLr: 'ev',
    bbOut: 'sw',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
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
    luggageId: 'cbeefaf3-729b-4392-a654-1ead61b8e134',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '989',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    tagNr: '3327',
    location: 'LR1',
    bbDown: 'ut',
    bbLr: 'mo',
    bbOut: 'mm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '90d26e70-ed90-4df3-b657-ef1d664546da',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '087',
    name: 'Méthode',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    description: null,
    tagNr: '2218',
    location: 'LR',
    bbDown: 'zq',
    bbLr: 'kf',
    bbOut: 'qn',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
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
    luggageId: 'cd5c0c31-942a-4fe9-b78d-7c3f9994b64d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '325',
    name: 'Dorothée',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: null,
    tagNr: '0218',
    location: 'LR',
    bbDown: 'fy',
    bbLr: 'bn',
    bbOut: 'lk',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
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
    luggageId: '8400f272-47d9-4002-9188-8cdaea220cb4',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '090',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    description: null,
    tagNr: '1259',
    location: 'LR',
    bbDown: 'op',
    bbLr: 'ev',
    bbOut: 'wt',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8a56cf0d-a8fc-4a84-b282-bf9eeddc4bbf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '312',
    name: 'Aurélie',
    arrivalTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description: 'Proin risus.',
    tagNr: '8684',
    location: 'LR1',
    bbDown: 'vy',
    bbLr: 'ir',
    bbOut: 'rn',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
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
    luggageId: '944babb8-9831-4d24-88c7-64b9a5702d18',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '920',
    name: 'Maëlyss',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: 'Pellentesque eget nunc.',
    tagNr: '4512',
    location: 'LR',
    bbDown: 'xn',
    bbLr: 'bp',
    bbOut: 'cd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b13984f5-fccc-43bc-aeb0-890dd6ff32fd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '768',
    name: 'Mélinda',
    arrivalTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: 'Nulla suscipit ligula in lacus.',
    tagNr: '6834',
    location: 'LR1',
    bbDown: 'yy',
    bbLr: 'il',
    bbOut: 'at',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c4cab0d6-ed5d-428d-b4f2-5c013e26e5a5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '407',
    name: 'Irène',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    description: 'Mauris sit amet eros.',
    tagNr: '4579',
    location: 'LR1',
    bbDown: 'qx',
    bbLr: 'wy',
    bbOut: 'ds',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: 'd735d45b-5dc5-49cf-ad61-6db9aafaab51',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '347',
    name: 'Noémie',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    description: 'Integer a nibh.',
    tagNr: '5257',
    location: 'LR',
    bbDown: 'ab',
    bbLr: 'bi',
    bbOut: 'nm',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: '45de0f27-e748-4cde-b199-60ce80048fcd',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '831',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description: null,
    tagNr: '3333',
    location: 'LR',
    bbDown: 'bv',
    bbLr: 'ek',
    bbOut: 'uu',
    completedAt: new Date(
      new Date('2/7/2023').setHours(
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
    luggageId: '10a85faa-d3df-4460-b095-f2ee5be818e7',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '046',
    name: 'Maëline',
    arrivalTime: null,
    bags: '8+5',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '9620',
    location: 'LR',
    bbDown: null,
    bbLr: 'qg',
    bbOut: 'wo',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bec00cee-ce1a-45b7-9d3a-0ce8e1ad3716',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '737',
    name: 'Yú',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: null,
    tagNr: '3971',
    location: 'LR1',
    bbDown: 'un',
    bbLr: 'or',
    bbOut: 'gi',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: '56e93441-e45f-41ae-b52c-2e7f03e26a63',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '194',
    name: 'Yè',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: null,
    tagNr: '2311',
    location: 'LR',
    bbDown: 'ii',
    bbLr: 'vu',
    bbOut: 'pb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e75a7442-79e3-40af-a0ae-d759b18a2e38',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '800',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    description: null,
    tagNr: '2630',
    location: 'LR1',
    bbDown: 'me',
    bbLr: 'ib',
    bbOut: 'md',
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
    luggageId: '591b4575-0fc2-4ee9-9880-c052fd04db19',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '589',
    name: 'Athéna',
    arrivalTime: null,
    bags: '1+6',
    description: null,
    tagNr: '2040',
    location: 'LR',
    bbDown: 'sw',
    bbLr: 'hn',
    bbOut: 'lh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'eb53ba50-d11b-45d8-acad-761dfaf5b11a',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '815',
    name: 'Béatrice',
    arrivalTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    description: null,
    tagNr: '8498',
    location: 'LR',
    bbDown: 'qo',
    bbLr: 'vk',
    bbOut: 'uq',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
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
    luggageId: '45033d68-e5f6-41cc-ac43-69cd7a5c4faa',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '412',
    name: 'Desirée',
    arrivalTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: null,
    tagNr: '3582',
    location: 'LR1',
    bbDown: null,
    bbLr: 'jp',
    bbOut: 'rb',
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
    luggageId: 'd2708711-354a-4400-b790-56a1d5f86d0e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '820',
    name: 'Maï',
    arrivalTime: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '7930',
    location: 'LR',
    bbDown: 'ac',
    bbLr: 'dv',
    bbOut: 'on',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c3281f4a-f0c2-4cee-bfa9-16d941a33488',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '086',
    name: 'Håkan',
    arrivalTime: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '7353',
    location: 'LR',
    bbDown: 'ga',
    bbLr: 'dq',
    bbOut: 'iq',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
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
    luggageId: '3d6a65ca-d756-4a1b-aa28-a83815b3499d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '016',
    name: 'Illustrée',
    arrivalTime: null,
    bags: '6+2',
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '3891',
    location: 'LR',
    bbDown: 'vu',
    bbLr: 'fh',
    bbOut: 'th',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: 'd9dfd1a2-88b8-4359-885a-c2f64bff7c14',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '289',
    name: 'Marie-josée',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '5750',
    location: 'LR1',
    bbDown: 'ik',
    bbLr: 'qj',
    bbOut: 'at',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2f395074-55f3-4831-a708-61d02b515c4d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '533',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    description: null,
    tagNr: '8535',
    location: 'LR1',
    bbDown: 'bt',
    bbLr: 'ec',
    bbOut: 'qv',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
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
    luggageId: 'b9badd76-3483-4a75-bc50-09b5530db3ad',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '267',
    name: 'Yú',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '3351',
    location: 'LR1',
    bbDown: 'kl',
    bbLr: 'yp',
    bbOut: 'gr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5ce4191f-be85-4f0a-a5f5-4003d41aff7d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '368',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: null,
    tagNr: '6225',
    location: 'LR',
    bbDown: 'xv',
    bbLr: 'uc',
    bbOut: 'xm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ec278c72-1a5d-4500-a76d-81f458ff4855',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '816',
    name: 'Mélodie',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    description: null,
    tagNr: '6827',
    location: 'LR',
    bbDown: 'dv',
    bbLr: 'fi',
    bbOut: 'vh',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
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
    luggageId: 'c1bd7962-fc52-4168-8c2b-c10fb29ac343',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '515',
    name: 'Michèle',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description: null,
    tagNr: '9843',
    location: 'LR',
    bbDown: 'lc',
    bbLr: 'fb',
    bbOut: 'dk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '27c9e5b9-cbb2-4451-8e50-eba04f32426d',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '286',
    name: 'Cloé',
    arrivalTime: null,
    bags: '3+1',
    description: null,
    tagNr: '2861',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xm',
    bbOut: 'sw',
    completedAt: new Date(
      new Date('1/19/2023').setHours(
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
    luggageId: '3a7f27cc-62f6-48ba-a437-fcf948e22b12',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '422',
    name: 'Zoé',
    arrivalTime: null,
    bags: '1+5',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '8306',
    location: 'LR',
    bbDown: 'ri',
    bbLr: 'fj',
    bbOut: 'bb',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
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
    luggageId: '50d7d470-91ea-4bee-8b48-a58b451ee6f4',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '760',
    name: 'Örjan',
    arrivalTime: null,
    bags: '1+5',
    description: null,
    tagNr: '2232',
    location: 'LR',
    bbDown: 'ke',
    bbLr: 'yo',
    bbOut: 'uu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e9e61314-c2f2-49d9-bd6d-2b4cc3a28067',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '731',
    name: 'Mégane',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    description: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '6365',
    location: 'LR1',
    bbDown: 'qq',
    bbLr: 'ew',
    bbOut: 'nh',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
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
    luggageId: '8185ea20-3fe4-428c-a844-bf2f00cba71e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '705',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    tagNr: '8993',
    location: 'LR1',
    bbDown: 'wl',
    bbLr: 'yd',
    bbOut: 'jc',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: '81162aca-2dd0-4b20-9fdc-cb7320684d0e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '958',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '3076',
    location: 'LR1',
    bbDown: 'no',
    bbLr: 'tt',
    bbOut: 'pb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '430be28f-4950-4302-b00d-d609940c6864',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '906',
    name: 'Gérald',
    arrivalTime: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    description: null,
    tagNr: '9044',
    location: 'LR1',
    bbDown: 'wr',
    bbLr: 'ja',
    bbOut: 'qg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '503e9e04-efa8-4f98-a248-71eb6d3080dd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '781',
    name: 'Rachèle',
    arrivalTime: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    description: null,
    tagNr: '9254',
    location: 'LR1',
    bbDown: 'qk',
    bbLr: 'ec',
    bbOut: 'ra',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
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
    luggageId: '0fb32054-58ca-4512-aec9-89e11a590491',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '738',
    name: 'Estée',
    arrivalTime: null,
    bags: '3+4',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '1117',
    location: 'LR',
    bbDown: 'ac',
    bbLr: 'xq',
    bbOut: 'ti',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
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
    luggageId: '734778a4-bb9b-47d0-baa6-7a88694447e3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '664',
    name: 'Réjane',
    arrivalTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    description: 'Ut at dolor quis odio consequat varius.',
    tagNr: '1692',
    location: 'LR1',
    bbDown: 'iv',
    bbLr: 'up',
    bbOut: 'ws',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '93dd11b3-2296-46fe-af10-b04a6841e8cf',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '826',
    name: 'Mélia',
    arrivalTime: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: null,
    tagNr: '4175',
    location: 'LR1',
    bbDown: 'dv',
    bbLr: 'fh',
    bbOut: 'xs',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
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
    luggageId: '065c12b1-c451-4bc8-83f4-4a2b986ede05',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '861',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    description: 'Nulla tellus.',
    tagNr: '8429',
    location: 'LR',
    bbDown: 'dn',
    bbLr: 'hj',
    bbOut: 'sc',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: '90738049-8e94-4e36-827a-ef5d80c375c6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '988',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: null,
    tagNr: '1068',
    location: 'LR1',
    bbDown: 'qs',
    bbLr: 'bz',
    bbOut: 'yc',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: '93b638dd-002d-45f1-8487-b45188ba960e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '039',
    name: 'Mélina',
    arrivalTime: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: 'Suspendisse potenti.',
    tagNr: '7459',
    location: 'LR1',
    bbDown: 'ca',
    bbLr: 'fi',
    bbOut: 'hn',
    completedAt: new Date(
      new Date('11/9/2022').setHours(
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
    luggageId: 'dacc3a53-b76b-4065-8c25-c472e3c42acc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '440',
    name: 'Mégane',
    arrivalTime: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    description: null,
    tagNr: '1560',
    location: 'LR',
    bbDown: 'wb',
    bbLr: 'sm',
    bbOut: 'nv',
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
    luggageId: 'be75b61e-7931-44f5-a06a-ef196e506265',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '078',
    name: 'Sélène',
    arrivalTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    tagNr: '0314',
    location: 'LR',
    bbDown: 'az',
    bbLr: 've',
    bbOut: 'qr',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
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
    luggageId: 'ce08f0fa-6dd2-4f10-a9ab-fd191ef102ee',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '824',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    tagNr: '3004',
    location: 'LR1',
    bbDown: 'iy',
    bbLr: 'cy',
    bbOut: 'fa',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: '0d7a99b3-4d83-4959-9670-879073bcc256',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '110',
    name: 'Nadège',
    arrivalTime: null,
    bags: '9+9',
    description: null,
    tagNr: '7743',
    location: 'LR1',
    bbDown: 'fg',
    bbLr: 'sf',
    bbOut: 'lm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'da0d9cf7-63a4-4d94-b25e-695eaa9b5d18',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '773',
    name: 'Yè',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    description: 'Nulla tellus.',
    tagNr: '9453',
    location: 'LR',
    bbDown: 'pp',
    bbLr: 'yr',
    bbOut: 'qx',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
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
    luggageId: '4886e24b-2a26-4819-a9c9-60eb499344f7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '265',
    name: 'Lauréna',
    arrivalTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    description: null,
    tagNr: '1034',
    location: 'LR',
    bbDown: null,
    bbLr: 'qa',
    bbOut: 'dg',
    completedAt: new Date(
      new Date('1/27/2023').setHours(
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
    luggageId: 'bc4c8c05-9866-4c1b-9331-84b55d610a70',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '197',
    name: 'André',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    description: null,
    tagNr: '5575',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ai',
    bbOut: 'hc',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
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
    luggageId: '8fc34dbb-1d97-4074-ae33-c4ae3fbf8227',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '527',
    name: 'Maëlys',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '2693',
    location: 'LR1',
    bbDown: 'ob',
    bbLr: 'fm',
    bbOut: 'hb',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: '208f8c7b-7318-4fdd-b385-b3fda730c62e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '644',
    name: 'Géraldine',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: 'Vestibulum rutrum rutrum neque.',
    tagNr: '1533',
    location: 'LR1',
    bbDown: 'fk',
    bbLr: 'vh',
    bbOut: 'ge',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
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
    luggageId: 'a7587102-2363-4305-b243-0c3f29efb9e2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '880',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    description: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '7676',
    location: 'LR1',
    bbDown: 'fb',
    bbLr: 'mc',
    bbOut: 'nf',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
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
    luggageId: '8dc57b22-4fdc-400b-97df-2628758f8990',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '397',
    name: 'Maëly',
    arrivalTime: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    tagNr: '7457',
    location: 'LR',
    bbDown: null,
    bbLr: 'mz',
    bbOut: 'tk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bd42461a-f3c9-4699-b1dc-cf5fd4b420b2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '182',
    name: 'Mahélie',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    description: null,
    tagNr: '1584',
    location: 'LR1',
    bbDown: 'ip',
    bbLr: 'nf',
    bbOut: 'tb',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
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
    luggageId: '07e48554-ca46-4d6f-a759-98c972d2da7a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '499',
    name: 'Tán',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    tagNr: '3034',
    location: 'LR',
    bbDown: 'wu',
    bbLr: 'fw',
    bbOut: 'wl',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7eb0f277-d30f-4b8f-88b0-ed761f940d72',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '144',
    name: 'Maïwenn',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '0929',
    location: 'LR1',
    bbDown: 'ci',
    bbLr: 'ko',
    bbOut: 'vu',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
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
    luggageId: '4d4fa034-e3a8-4103-8840-899d04e17cb1',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '857',
    name: 'Salomé',
    arrivalTime: null,
    bags: '1+1',
    description: 'In sagittis dui vel nisl.',
    tagNr: '8040',
    location: 'LR1',
    bbDown: 'sj',
    bbLr: 'uj',
    bbOut: 'dh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '327bee1e-1504-4899-9373-8b7d339cae02',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '643',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '1252',
    location: 'LR1',
    bbDown: 'xt',
    bbLr: 'iu',
    bbOut: 'gx',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: '7f7d2820-2bc5-4b90-96af-44452df7bc21',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '563',
    name: 'Mà',
    arrivalTime: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: null,
    tagNr: '0741',
    location: 'LR',
    bbDown: 'ao',
    bbLr: 'la',
    bbOut: 'xd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e5d4cfcb-9fa4-42cc-87a4-7a2a7208234f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '023',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '8573',
    location: 'LR',
    bbDown: null,
    bbLr: 'lt',
    bbOut: 'xz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '122c812f-671f-4d90-a837-a45b96a9989d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '163',
    name: 'Audréanne',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '2019',
    location: 'LR',
    bbDown: 'hn',
    bbLr: 'pc',
    bbOut: 'ci',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
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
    luggageId: '817bf370-ed98-417e-8566-be41f33566d1',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '705',
    name: 'Michèle',
    arrivalTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: null,
    tagNr: '9949',
    location: 'LR1',
    bbDown: 'tu',
    bbLr: 'oa',
    bbOut: 'rm',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: '9cd25945-ed32-453d-b046-66090ffeeb0d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '750',
    name: 'Lóng',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: null,
    tagNr: '5942',
    location: 'LR1',
    bbDown: 'rt',
    bbLr: 'cc',
    bbOut: 'fq',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: '06050f56-7dd9-40c1-9c39-b9ff26ee3162',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '171',
    name: 'Gérald',
    arrivalTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: null,
    tagNr: '5631',
    location: 'LR1',
    bbDown: 'dd',
    bbLr: 'bz',
    bbOut: 'gr',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: '44727cac-ea9b-4ad3-a5a2-d0087c2e1082',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '242',
    name: 'Tán',
    arrivalTime: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '3685',
    location: 'LR1',
    bbDown: 'yd',
    bbLr: 'vu',
    bbOut: 'ef',
    completedAt: new Date(
      new Date('2/9/2023').setHours(
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
    luggageId: '49e55ab2-cb44-40f7-89db-c66b6e52e2b1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '735',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    description: 'Nullam porttitor lacus at turpis.',
    tagNr: '2492',
    location: 'LR',
    bbDown: null,
    bbLr: 'ar',
    bbOut: 'yj',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
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
    luggageId: '76bfe7e9-1d05-4b99-9941-05f388208a70',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '284',
    name: 'Marie-thérèse',
    arrivalTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: null,
    tagNr: '2674',
    location: 'LR',
    bbDown: 'bx',
    bbLr: 'ym',
    bbOut: 'jp',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
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
    luggageId: '88e94523-dda7-44aa-b3fb-56a365273e27',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '328',
    name: 'Cécile',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: null,
    tagNr: '5827',
    location: 'LR',
    bbDown: 'bs',
    bbLr: 'aa',
    bbOut: 'tj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3e78b59e-afa4-47ba-b416-9385677e4739',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '008',
    name: 'Marie-josée',
    arrivalTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    description: 'Nullam molestie nibh in lectus.',
    tagNr: '6252',
    location: 'LR1',
    bbDown: 'tj',
    bbLr: 'bn',
    bbOut: 'ag',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
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
    luggageId: 'd7631875-4941-44b2-8a34-f1734c2a023e',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '724',
    name: 'Lóng',
    arrivalTime: null,
    bags: '5+2',
    description: null,
    tagNr: '6930',
    location: 'LR',
    bbDown: 'uy',
    bbLr: 'ji',
    bbOut: 'fl',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
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
    luggageId: '8e80751a-5492-4cd2-98ca-5871e04c7219',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '642',
    name: 'Börje',
    arrivalTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'In eleifend quam a odio.',
    tagNr: '8770',
    location: 'LR1',
    bbDown: 'ol',
    bbLr: 'ne',
    bbOut: 'ec',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
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
    luggageId: '4a3cae36-7c47-4461-bb51-6c5a4e513b96',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '889',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    description: null,
    tagNr: '5006',
    location: 'LR1',
    bbDown: 'vm',
    bbLr: 'bw',
    bbOut: 'hi',
    completedAt: new Date(
      new Date('1/22/2023').setHours(
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
    luggageId: 'ca7daf4f-5e0f-46fb-a5e9-164784157370',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '667',
    name: 'Céline',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '5413',
    location: 'LR1',
    bbDown: null,
    bbLr: 'kl',
    bbOut: 'lg',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
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
    luggageId: 'fdc28464-3981-4e70-bbfa-64d2fbf53ceb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '355',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    description: 'Maecenas rhoncus aliquam lacus.',
    tagNr: '8149',
    location: 'LR',
    bbDown: 'll',
    bbLr: 'yv',
    bbOut: 'rq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '98ec4350-4feb-428d-9aed-120509719927',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '848',
    name: 'Lauréna',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    description: 'Aliquam non mauris.',
    tagNr: '6813',
    location: 'LR1',
    bbDown: null,
    bbLr: 'bn',
    bbOut: 'nt',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
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
    luggageId: 'd3c45a76-1044-4499-afd3-faa369265298',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '904',
    name: 'Vérane',
    arrivalTime: null,
    bags: '0+2',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '4578',
    location: 'LR1',
    bbDown: 'zl',
    bbLr: 'aj',
    bbOut: 'yw',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
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
    luggageId: 'b4b57e76-5291-44e1-a1e6-2c5020d1a0a5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '953',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description: 'In sagittis dui vel nisl.',
    tagNr: '1968',
    location: 'LR',
    bbDown: null,
    bbLr: 'eg',
    bbOut: 'rq',
    completedAt: new Date(
      new Date('2/25/2023').setHours(
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
    luggageId: '4e560ecd-8eb1-461c-b10a-5e17b6a7acd6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '693',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description: 'Donec quis orci eget orci vehicula condimentum.',
    tagNr: '0164',
    location: 'LR',
    bbDown: 'gh',
    bbLr: 'yn',
    bbOut: 'yk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4b7f7194-70fb-4368-9359-fc793bedd3e1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '063',
    name: 'Crééz',
    arrivalTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: 'Maecenas rhoncus aliquam lacus.',
    tagNr: '1973',
    location: 'LR',
    bbDown: 'km',
    bbLr: 'uk',
    bbOut: 'eg',
    completedAt: new Date(
      new Date('2/8/2023').setHours(
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
    luggageId: '683946bf-db75-4329-ac19-222eecb51c60',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '872',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    description: 'Ut tellus.',
    tagNr: '5810',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ef',
    bbOut: 'yl',
    completedAt: new Date(
      new Date('1/23/2023').setHours(
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
    luggageId: 'c3c30b31-fe57-4a07-9cf4-0c9e71e2b3f0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '283',
    name: 'Mélys',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description: null,
    tagNr: '2280',
    location: 'LR',
    bbDown: 'sd',
    bbLr: 'ue',
    bbOut: 'vp',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
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
    luggageId: '1f223059-09a3-4046-b19a-3184f34d7947',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '636',
    name: 'Björn',
    arrivalTime: null,
    bags: '3+8',
    description: null,
    tagNr: '9997',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ky',
    bbOut: 'oi',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a20d3cd9-8b77-4e31-a763-26efb0b85d85',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '212',
    name: 'Bénédicte',
    arrivalTime: null,
    bags: '9+0',
    description: null,
    tagNr: '1557',
    location: 'LR',
    bbDown: 'tj',
    bbLr: 'xk',
    bbOut: 'wa',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '25c4f83d-bb1e-44d0-89a2-a52ce048747a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '686',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: null,
    tagNr: '2041',
    location: 'LR',
    bbDown: 'jc',
    bbLr: 'wt',
    bbOut: 'pc',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
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
    luggageId: '0b7bab43-f2ae-4d5c-af47-1ee5c1b769bb',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '336',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: 'Nulla tempus.',
    tagNr: '5708',
    location: 'LR',
    bbDown: 'cu',
    bbLr: 'xd',
    bbOut: 'jv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ced2d21f-0e64-4a6e-9882-895307813712',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '448',
    name: 'Clémentine',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '7871',
    location: 'LR1',
    bbDown: 'dp',
    bbLr: 'nb',
    bbOut: 'fj',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: '2a8f08f1-b306-454f-affc-2f90eb6f4e89',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '262',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '7311',
    location: 'LR1',
    bbDown: 'ja',
    bbLr: 'cc',
    bbOut: 'gb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd7dc3cf7-5046-4dcc-941c-4976459600ca',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '579',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description: 'Duis ac nibh.',
    tagNr: '0104',
    location: 'LR',
    bbDown: 'ul',
    bbLr: 'kq',
    bbOut: 'xn',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
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
    luggageId: '230a21f5-4f2c-4848-8279-2cb631953fa0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '196',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: 'Aenean auctor gravida sem.',
    tagNr: '3475',
    location: 'LR1',
    bbDown: 'jj',
    bbLr: 'jv',
    bbOut: 'cb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c4d7afa1-96ce-49fd-be98-0ad406e66111',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '109',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description: 'In blandit ultrices enim.',
    tagNr: '7173',
    location: 'LR1',
    bbDown: 'pg',
    bbLr: 'wv',
    bbOut: 'ae',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
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
    luggageId: 'a3a45a74-d833-4848-8de2-d2d0650943c3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '083',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    description: 'Proin eu mi.',
    tagNr: '6947',
    location: 'LR',
    bbDown: 'ww',
    bbLr: 'fe',
    bbOut: 'ul',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
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
    luggageId: '3457a2f2-2c9a-4a78-a727-1a6914b00ce0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '634',
    name: 'Maëlyss',
    arrivalTime: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    description: null,
    tagNr: '9703',
    location: 'LR1',
    bbDown: 'ms',
    bbLr: 'st',
    bbOut: 'bd',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: 'e351dcff-e104-4380-928b-b81fa8e230ee',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '707',
    name: 'Méng',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: null,
    tagNr: '7937',
    location: 'LR',
    bbDown: 'gi',
    bbLr: 'hx',
    bbOut: 'cd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '21b97bdc-c0b7-40b1-83ba-8e6211a61eae',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '796',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    description: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '3270',
    location: 'LR',
    bbDown: 'gz',
    bbLr: 'tc',
    bbOut: 'yn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f9c640e6-46de-478e-8f38-bf666a361b1f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '933',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    description: null,
    tagNr: '8820',
    location: 'LR1',
    bbDown: 'ks',
    bbLr: 'ir',
    bbOut: 'hg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7bc14455-a9de-4391-9742-0a5c4f028252',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '697',
    name: 'Jú',
    arrivalTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '3219',
    location: 'LR',
    bbDown: null,
    bbLr: 'zw',
    bbOut: 'ec',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cb466cfb-e409-4b33-b1ec-6ba7e8bea267',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '762',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    description: 'Ut tellus.',
    tagNr: '3581',
    location: 'LR',
    bbDown: 'vz',
    bbLr: 'ng',
    bbOut: 'yn',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
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
    luggageId: 'db3432ff-46f9-4954-86a1-c438f745360e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '839',
    name: 'Yénora',
    arrivalTime: null,
    bags: '7+5',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '1475',
    location: 'LR1',
    bbDown: 'bg',
    bbLr: 'lu',
    bbOut: 'nw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd6b19915-822b-4c0d-84c0-2af93d544971',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '392',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    description: null,
    tagNr: '7846',
    location: 'LR',
    bbDown: 'bd',
    bbLr: 'cr',
    bbOut: 'hi',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '402d795d-7a59-45fe-a793-47f9ca800a01',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '035',
    name: 'Loïc',
    arrivalTime: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: 'Morbi non lectus.',
    tagNr: '6438',
    location: 'LR1',
    bbDown: null,
    bbLr: 'dp',
    bbOut: 'iy',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
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
    luggageId: '5dbdd855-65a1-4cea-b0a6-f98130532c9b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '043',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    tagNr: '9856',
    location: 'LR',
    bbDown: 'qo',
    bbLr: 'xr',
    bbOut: 'mz',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
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
    luggageId: '31f01e79-44b5-4702-a4db-a52634df83e4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '896',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '4475',
    location: 'LR',
    bbDown: 'mn',
    bbLr: 'me',
    bbOut: 'mh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b46171f4-db18-49aa-8982-21fcbb9f2c35',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '082',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    description: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '3374',
    location: 'LR',
    bbDown: 'kx',
    bbLr: 'mn',
    bbOut: 'jo',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
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
    luggageId: '11a46ce5-3a75-453e-9887-b74541951cdc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '394',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: null,
    tagNr: '5968',
    location: 'LR',
    bbDown: null,
    bbLr: 'ug',
    bbOut: 'yb',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
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
    luggageId: '1d3368e8-e5de-4374-8696-0a98ab0a648f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '528',
    name: 'Sòng',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'Donec vitae nisi.',
    tagNr: '4082',
    location: 'LR',
    bbDown: 'fd',
    bbLr: 'hc',
    bbOut: 'rr',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
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
    luggageId: 'fef5c3de-dcf8-4e76-9029-a3dd89460858',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '636',
    name: 'Frédérique',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    description: null,
    tagNr: '1362',
    location: 'LR1',
    bbDown: 'le',
    bbLr: 'vp',
    bbOut: 'vk',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
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
    luggageId: 'a21a8e6a-8dc9-41bd-b4be-e09e20be6cea',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '533',
    name: 'André',
    arrivalTime: null,
    bags: '8+5',
    description: null,
    tagNr: '6935',
    location: 'LR1',
    bbDown: 'lz',
    bbLr: 'dt',
    bbOut: 'go',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
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
    luggageId: '03d440d6-6735-4988-97e3-4e959b93f16e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '230',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'Morbi non quam nec dui luctus rutrum.',
    tagNr: '3030',
    location: 'LR',
    bbDown: 'it',
    bbLr: 'of',
    bbOut: 'tj',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: 'decf7f3c-bf6d-4a68-890f-c0581946d6df',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '693',
    name: 'Táng',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    description: null,
    tagNr: '6913',
    location: 'LR1',
    bbDown: 'fk',
    bbLr: 'pq',
    bbOut: 'et',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: '41874f37-6e9f-4d19-80c2-ade6506f8198',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '394',
    name: 'Marlène',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description: 'Nulla ac enim.',
    tagNr: '2881',
    location: 'LR1',
    bbDown: 'rh',
    bbLr: 'tn',
    bbOut: 'dj',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: '271739e4-41a1-48b8-8992-9b2d9840007c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '348',
    name: 'Cléa',
    arrivalTime: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: null,
    tagNr: '9938',
    location: 'LR1',
    bbDown: 'ku',
    bbLr: 'uu',
    bbOut: 'fd',
    completedAt: new Date(
      new Date('11/8/2022').setHours(
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
    luggageId: 'af3df5c6-082d-476a-b575-feb6ea5f41fd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '086',
    name: 'Torbjörn',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    description: null,
    tagNr: '3071',
    location: 'LR1',
    bbDown: 'cw',
    bbLr: 'wo',
    bbOut: 'hg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dba50120-9dc6-486a-b51e-eacbcda50a16',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '264',
    name: 'Publicité',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    description: 'Aenean lectus.',
    tagNr: '2378',
    location: 'LR',
    bbDown: 'ks',
    bbLr: 'zx',
    bbOut: 'eh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '741d249c-b295-4f58-af28-86a1ac33b5f8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '437',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    description: 'Nulla suscipit ligula in lacus.',
    tagNr: '2381',
    location: 'LR',
    bbDown: 'af',
    bbLr: 'wp',
    bbOut: 've',
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
    luggageId: '9f786808-bd4b-4fdb-a4d8-c4545f1693bd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '274',
    name: 'Marie-thérèse',
    arrivalTime: null,
    bags: '9+2',
    description: null,
    tagNr: '2833',
    location: 'LR1',
    bbDown: 'qn',
    bbLr: 'gr',
    bbOut: 'wq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ba2c16cc-6a19-4c20-8e29-a93a68dade25',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '880',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: null,
    tagNr: '5381',
    location: 'LR',
    bbDown: 'at',
    bbLr: 'ga',
    bbOut: 'ud',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1a6cf878-28c7-4885-8935-50b05c654b4b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '933',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    description: null,
    tagNr: '1372',
    location: 'LR1',
    bbDown: 'sv',
    bbLr: 'pg',
    bbOut: 'xg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '00c4c1f9-9cc1-4c43-bf82-700414291db0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '555',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: 'Duis aliquam convallis nunc.',
    tagNr: '9459',
    location: 'LR',
    bbDown: 'te',
    bbLr: 'tv',
    bbOut: 'xq',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: '25b627e5-6d76-46d9-a7ac-221b9f3bf435',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '905',
    name: 'Mà',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    description: null,
    tagNr: '8323',
    location: 'LR',
    bbDown: 'yk',
    bbLr: 'sp',
    bbOut: 'cf',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: 'ee24c242-4b22-4b09-bbb0-be5879d2a3cb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '860',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    description: 'Morbi a ipsum.',
    tagNr: '6373',
    location: 'LR1',
    bbDown: 'ta',
    bbLr: 'ka',
    bbOut: 'ms',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: 'ab9c7d32-a313-447f-acca-631780dc11af',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '720',
    name: 'Anaëlle',
    arrivalTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    description: 'Cras non velit nec nisi vulputate nonummy.',
    tagNr: '7142',
    location: 'LR1',
    bbDown: null,
    bbLr: 'de',
    bbOut: 'bk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4b72db6e-941f-4400-9e80-38783707c3db',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '779',
    name: 'Desirée',
    arrivalTime: null,
    bags: '5+9',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    tagNr: '0709',
    location: 'LR1',
    bbDown: 'wx',
    bbLr: 'lo',
    bbOut: 'lq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'df124ff1-9ff3-45a5-b38f-ce4eb7c87213',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '091',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: null,
    tagNr: '8330',
    location: 'LR1',
    bbDown: 'go',
    bbLr: 'hl',
    bbOut: 'hs',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '22d815e8-e930-49f1-94ad-874f883eef71',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '492',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: 'Integer non velit.',
    tagNr: '7666',
    location: 'LR1',
    bbDown: 'ae',
    bbLr: 'xa',
    bbOut: 'wh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '847d5839-fab2-4d01-81b8-57259830bebe',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '426',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    description: null,
    tagNr: '6963',
    location: 'LR',
    bbDown: 'xy',
    bbLr: 'sb',
    bbOut: 'xu',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
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
    luggageId: '3df49961-94cb-4154-8332-9a5bdb514ac2',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '040',
    name: 'Célia',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description: 'Integer ac leo.',
    tagNr: '4719',
    location: 'LR1',
    bbDown: null,
    bbLr: 'hi',
    bbOut: 'mp',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
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
    luggageId: '5f7f7c8a-8f66-4fa3-9985-27ec52f3332d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '572',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description: null,
    tagNr: '3402',
    location: 'LR1',
    bbDown: 'pw',
    bbLr: 'sb',
    bbOut: 'ki',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '535119a4-5dbf-4643-af0d-918e68ae28bf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '418',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    description: 'Cras pellentesque volutpat dui.',
    tagNr: '7692',
    location: 'LR',
    bbDown: 'sh',
    bbLr: 'ay',
    bbOut: 'at',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fe0805a2-0119-4ef5-af8c-f9f174fefb88',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '480',
    name: 'Mélanie',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    description: null,
    tagNr: '5156',
    location: 'LR1',
    bbDown: 'uk',
    bbLr: 'zd',
    bbOut: 'ni',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
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
    luggageId: 'bf8b4ee0-1e7f-4b4b-96d2-83c1c86388f8',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '452',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    description: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '1771',
    location: 'LR',
    bbDown: 'oc',
    bbLr: 'on',
    bbOut: 'nx',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
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
    luggageId: '6a5a7dc6-9349-42b8-88e4-a551b2b00992',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '104',
    name: 'Gösta',
    arrivalTime: null,
    bags: '9+2',
    description: null,
    tagNr: '8145',
    location: 'LR',
    bbDown: 'rs',
    bbLr: 'hd',
    bbOut: 'al',
    completedAt: new Date(
      new Date('11/9/2022').setHours(
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
    luggageId: 'd2203d9c-7662-4b5d-b5da-87b063aeb50f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '597',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    tagNr: '4301',
    location: 'LR1',
    bbDown: 'ab',
    bbLr: 'zr',
    bbOut: 'gk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '127bd34e-c053-465c-a488-e52ecc8942ff',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '929',
    name: 'Frédérique',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    description: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '1348',
    location: 'LR',
    bbDown: null,
    bbLr: 'vo',
    bbOut: 'ko',
    completedAt: new Date(
      new Date('1/3/2023').setHours(
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
    luggageId: '6e3b9df5-7a1a-423a-aac4-16ce41783484',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '156',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: null,
    tagNr: '9727',
    location: 'LR1',
    bbDown: 'gy',
    bbLr: 'pv',
    bbOut: 'fv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '00c9073e-7e8d-4cfc-b2e4-90f2289e3b0e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '984',
    name: 'Cunégonde',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    description: null,
    tagNr: '8741',
    location: 'LR',
    bbDown: 'ix',
    bbLr: 'uw',
    bbOut: 'fv',
    completedAt: new Date(
      new Date('1/24/2023').setHours(
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
    luggageId: '4ab2c35e-25db-45bf-8f17-05dca28ee02f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '733',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '9457',
    location: 'LR',
    bbDown: 'ri',
    bbLr: 'qn',
    bbOut: 'sp',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '63af9a68-7ce7-404d-85c5-58d5ad69771d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '774',
    name: 'Garçon',
    arrivalTime: null,
    bags: '2+5',
    description: null,
    tagNr: '6158',
    location: 'LR1',
    bbDown: null,
    bbLr: 'du',
    bbOut: 'ji',
    completedAt: new Date(
      new Date('2/28/2023').setHours(
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
    luggageId: 'd8e04c2b-986d-436a-b9d2-eeb3cfa3f621',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '879',
    name: 'Annotés',
    arrivalTime: null,
    bags: '0+1',
    description: null,
    tagNr: '5718',
    location: 'LR',
    bbDown: 'tc',
    bbLr: 'hf',
    bbOut: 'kh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1ff01c0f-0f63-46cf-a171-6e366cca931d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '333',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: null,
    tagNr: '1393',
    location: 'LR',
    bbDown: null,
    bbLr: 'll',
    bbOut: 'oj',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: '11af078b-c5d7-47b7-9db9-19c84435f488',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '128',
    name: 'Mahélie',
    arrivalTime: null,
    bags: '3+5',
    description: null,
    tagNr: '9950',
    location: 'LR',
    bbDown: 'dv',
    bbLr: 'ps',
    bbOut: 'su',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
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
    luggageId: '074ec7df-fbb9-4514-9823-9e598be22fa3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '658',
    name: 'Néhémie',
    arrivalTime: null,
    bags: '7+8',
    description: 'Vivamus tortor.',
    tagNr: '3023',
    location: 'LR',
    bbDown: 'ki',
    bbLr: 'hy',
    bbOut: 'dx',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b5cf8e51-26df-4214-a7d5-e5421c446033',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '274',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: 'Maecenas pulvinar lobortis est.',
    tagNr: '1388',
    location: 'LR',
    bbDown: 'vx',
    bbLr: 'qc',
    bbOut: 'yu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1485212e-1126-4a55-98b3-9320de031ee3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '513',
    name: 'Tán',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description: null,
    tagNr: '8105',
    location: 'LR',
    bbDown: 'qu',
    bbLr: 'yx',
    bbOut: 'yt',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
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
    luggageId: '29d887af-227c-4094-bb13-493ad4dc2fca',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '337',
    name: 'Marie-thérèse',
    arrivalTime: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: 'In eleifend quam a odio.',
    tagNr: '4217',
    location: 'LR1',
    bbDown: 'nd',
    bbLr: 'ab',
    bbOut: 'xc',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8377b595-1f50-40ae-9934-50189ef75e2c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '251',
    name: 'Loïc',
    arrivalTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    description: null,
    tagNr: '0486',
    location: 'LR',
    bbDown: 'uz',
    bbLr: 'hq',
    bbOut: 'nv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8cb2cea2-99e9-449b-97a0-cfa82b9cdcc6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '646',
    name: 'Kù',
    arrivalTime: null,
    bags: '6+6',
    description: 'Nulla ac enim.',
    tagNr: '5174',
    location: 'LR1',
    bbDown: 'ia',
    bbLr: 'id',
    bbOut: 'wt',
    completedAt: new Date(
      new Date('2/5/2023').setHours(
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
    luggageId: 'dc3f6944-44b5-4253-8408-a54410bdc272',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '497',
    name: 'Börje',
    arrivalTime: null,
    bags: '4+4',
    description: 'Pellentesque at nulla.',
    tagNr: '1261',
    location: 'LR',
    bbDown: 'wj',
    bbLr: 'jd',
    bbOut: 'hz',
    completedAt: new Date(
      new Date('1/17/2023').setHours(
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
    luggageId: '0f8f9425-1ab3-4fd7-850d-fc1b7e446b26',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '762',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    description: null,
    tagNr: '9473',
    location: 'LR',
    bbDown: 'vm',
    bbLr: 'uf',
    bbOut: 'nd',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
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
    luggageId: 'd215081c-8f31-446d-861b-ed125dc99783',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '883',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: 'In congue.',
    tagNr: '4851',
    location: 'LR1',
    bbDown: 'wj',
    bbLr: 'xp',
    bbOut: 'jp',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
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
    luggageId: '9879c45c-5aa1-4aec-9ef5-d5794ee26574',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '154',
    name: 'Anaïs',
    arrivalTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    description: null,
    tagNr: '0311',
    location: 'LR',
    bbDown: 'lq',
    bbLr: 'ny',
    bbOut: 'mf',
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
    luggageId: '441f519f-b768-46f0-b115-15ae73f47a8d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '894',
    name: 'Crééz',
    arrivalTime: null,
    bags: '0+1',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '5676',
    location: 'LR',
    bbDown: 'jr',
    bbLr: 'mn',
    bbOut: 'yw',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
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
    luggageId: 'f8e17b0c-ffd7-46d3-93c9-37e9a2166990',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '226',
    name: 'Eléa',
    arrivalTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description: null,
    tagNr: '6717',
    location: 'LR',
    bbDown: null,
    bbLr: 'wd',
    bbOut: 'vn',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: 'b8360a2e-398c-474b-8ed1-fd32c742aff4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '910',
    name: 'Maïwenn',
    arrivalTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description: null,
    tagNr: '4735',
    location: 'LR',
    bbDown: 'dl',
    bbLr: 'zc',
    bbOut: 'qd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '49b22737-24ab-4a36-8c9e-84f57b7b162b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '666',
    name: 'Athéna',
    arrivalTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description: null,
    tagNr: '7612',
    location: 'LR1',
    bbDown: 'ol',
    bbLr: 'oj',
    bbOut: 'qk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '26b37a5f-5a75-4ef9-8a76-782cb6f106e5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '767',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    description: 'Nulla ac enim.',
    tagNr: '9738',
    location: 'LR',
    bbDown: 'md',
    bbLr: 'fs',
    bbOut: 'pr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dd9319b9-6864-498b-ba5b-3941519fc4fe',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '827',
    name: 'Séverine',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: 'Quisque porta volutpat erat.',
    tagNr: '4963',
    location: 'LR',
    bbDown: null,
    bbLr: 'bo',
    bbOut: 'ax',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: 'e2260ca7-9ca7-4e08-91d8-f3d851b25840',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '639',
    name: 'Mélina',
    arrivalTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: null,
    tagNr: '1242',
    location: 'LR',
    bbDown: null,
    bbLr: 'zx',
    bbOut: 'ec',
    completedAt: new Date(
      new Date('1/11/2023').setHours(
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
    luggageId: 'f93e0d07-7a2c-44ab-ab4b-d7d4b4792f02',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '642',
    name: 'Göran',
    arrivalTime: null,
    bags: '1+3',
    description: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    tagNr: '2825',
    location: 'LR1',
    bbDown: null,
    bbLr: 'cj',
    bbOut: 'br',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: 'cfab3960-4b69-4f21-88cd-9ab4be0d682a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '815',
    name: 'Maëly',
    arrivalTime: null,
    bags: '2+3',
    description: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '4171',
    location: 'LR1',
    bbDown: null,
    bbLr: 'jf',
    bbOut: 'hj',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: '6ba5e373-3b05-48f8-99d3-e22508bed519',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '115',
    name: 'Faîtes',
    arrivalTime: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    description: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    tagNr: '8117',
    location: 'LR',
    bbDown: 'vn',
    bbLr: 'ja',
    bbOut: 'ha',
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
    luggageId: '2e125540-cbf0-4375-946a-48daba335d1e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '335',
    name: 'Andréa',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    description: 'Sed accumsan felis.',
    tagNr: '9062',
    location: 'LR',
    bbDown: 'et',
    bbLr: 'pw',
    bbOut: 'bm',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
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
    luggageId: '539e294d-12a2-4a21-8f24-ddc2469dd565',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '406',
    name: 'Gérald',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    description: null,
    tagNr: '5177',
    location: 'LR',
    bbDown: null,
    bbLr: 'sz',
    bbOut: 'ls',
    completedAt: new Date(
      new Date('1/2/2023').setHours(
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
    luggageId: '4fdc4bdf-2040-4fd7-a256-104f8515c74b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '564',
    name: 'Angèle',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: 'Cras pellentesque volutpat dui.',
    tagNr: '0436',
    location: 'LR1',
    bbDown: 'vo',
    bbLr: 'dn',
    bbOut: 'vh',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
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
    luggageId: 'f884c657-f95d-4713-b137-6c31b2cdcda4',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '224',
    name: 'Börje',
    arrivalTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description: null,
    tagNr: '6751',
    location: 'LR',
    bbDown: 'of',
    bbLr: 'gv',
    bbOut: 'vr',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
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
    luggageId: '1283c1eb-dbc2-4b0d-88e2-3a869487e41c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '984',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '7197',
    location: 'LR1',
    bbDown: 'cr',
    bbLr: 'pa',
    bbOut: 'wu',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
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
    luggageId: '6d34bf68-c8a4-4748-ba24-1a296eacfeeb',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '506',
    name: 'Estève',
    arrivalTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    description: 'In blandit ultrices enim.',
    tagNr: '8331',
    location: 'LR1',
    bbDown: 'hg',
    bbLr: 'cx',
    bbOut: 'zc',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6616f06b-2e42-4d0a-a86a-2c1a097e56da',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '887',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: 'Praesent blandit lacinia erat.',
    tagNr: '3106',
    location: 'LR1',
    bbDown: null,
    bbLr: 'nx',
    bbOut: 'us',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a184fb7a-ceac-4ed0-ac33-3c49ffeb6537',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '511',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    description: null,
    tagNr: '2461',
    location: 'LR1',
    bbDown: 'yg',
    bbLr: 'vp',
    bbOut: 'np',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
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
    luggageId: 'd0f65504-b6f3-43f2-83e4-e4d762bcd9f6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '661',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    description: 'Nullam varius.',
    tagNr: '8719',
    location: 'LR',
    bbDown: 'hs',
    bbLr: 'jb',
    bbOut: 'qb',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: '72c8d565-68fd-412f-be02-8dd250e55e03',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '145',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    description: null,
    tagNr: '4475',
    location: 'LR1',
    bbDown: 'ki',
    bbLr: 'hg',
    bbOut: 'jg',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
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
    luggageId: 'eadf068d-dd1a-47b6-84ce-b973f84d36d2',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '084',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    description: null,
    tagNr: '3775',
    location: 'LR',
    bbDown: null,
    bbLr: 'pa',
    bbOut: 'af',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
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
    luggageId: '6962c6da-36c0-4d09-9b35-d2aea61c9246',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '082',
    name: 'Mélissandre',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: null,
    tagNr: '7028',
    location: 'LR1',
    bbDown: 'vh',
    bbLr: 'ji',
    bbOut: 'fz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4812c3e9-02cf-400d-82d5-b70f407cc87c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '297',
    name: 'Léane',
    arrivalTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description: null,
    tagNr: '8613',
    location: 'LR',
    bbDown: 'uq',
    bbLr: 'vn',
    bbOut: 'en',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
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
    luggageId: '77a64411-6a0a-4906-b852-5d17bda7d6b2',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '767',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description: null,
    tagNr: '8736',
    location: 'LR1',
    bbDown: 'td',
    bbLr: 'nz',
    bbOut: 'va',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bd8e2b16-81a9-4543-add4-b82c34d15b5a',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '673',
    name: 'Bérangère',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description: null,
    tagNr: '1520',
    location: 'LR1',
    bbDown: 'oz',
    bbLr: 'qx',
    bbOut: 'cz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '36373944-54f4-4600-a347-6e9ab3d67bcf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '946',
    name: 'Anaëlle',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    tagNr: '3403',
    location: 'LR',
    bbDown: 'mn',
    bbLr: 'fq',
    bbOut: 'wk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '62992e5e-a091-42b8-9a4d-b1830605f6cd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '775',
    name: 'Mégane',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description: null,
    tagNr: '2585',
    location: 'LR',
    bbDown: 'tf',
    bbLr: 'bd',
    bbOut: 'fc',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: 'b9c409de-2557-4fef-ba88-91d2f9141d11',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '032',
    name: 'Yú',
    arrivalTime: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    description: 'Morbi porttitor lorem id ligula.',
    tagNr: '6636',
    location: 'LR1',
    bbDown: null,
    bbLr: 'zx',
    bbOut: 'wx',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8a6a4181-4bfd-46ea-a21c-ea77a942d1d1',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '163',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Duis at velit eu est congue elementum.',
    tagNr: '3869',
    location: 'LR1',
    bbDown: 'zr',
    bbLr: 'fn',
    bbOut: 'ri',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '49a163f2-80b7-4649-80dc-517193f693f3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '537',
    name: 'Erwéi',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    description: 'Nulla justo.',
    tagNr: '2756',
    location: 'LR',
    bbDown: 'wu',
    bbLr: 'rw',
    bbOut: 'kw',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: '31689e12-3747-4c2d-b3c4-810d93366620',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '391',
    name: 'Vérane',
    arrivalTime: null,
    bags: '5+1',
    description: 'Aenean fermentum.',
    tagNr: '1213',
    location: 'LR1',
    bbDown: null,
    bbLr: 'kb',
    bbOut: 'il',
    completedAt: new Date(
      new Date('2/21/2023').setHours(
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
    luggageId: '225f6164-e74b-45d4-97fb-ec679adde555',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '084',
    name: 'Marlène',
    arrivalTime: null,
    bags: '7+1',
    description: null,
    tagNr: '2335',
    location: 'LR',
    bbDown: 'fw',
    bbLr: 'tv',
    bbOut: 'rm',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: '57f1db58-33cb-4119-a326-e68e63af0253',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '720',
    name: 'Maëlann',
    arrivalTime: null,
    bags: '5+1',
    description: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '3946',
    location: 'LR',
    bbDown: 'vv',
    bbLr: 'rb',
    bbOut: 'tq',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
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
    luggageId: 'a2cea93b-74bd-4760-a856-cde793a9d9bc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '328',
    name: 'Maëlle',
    arrivalTime: new Date(
      new Date('2/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: 'Maecenas rhoncus aliquam lacus.',
    tagNr: '2768',
    location: 'LR1',
    bbDown: 'hh',
    bbLr: 'az',
    bbOut: 'nt',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
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
    luggageId: '45767d9f-d876-4644-8b08-33e0567ac892',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '243',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '8571',
    location: 'LR',
    bbDown: 'gs',
    bbLr: 'ks',
    bbOut: 'kn',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
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
    luggageId: 'c6ddde34-7cea-41e0-927e-15be3163a51a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '590',
    name: 'Véronique',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description: null,
    tagNr: '1447',
    location: 'LR',
    bbDown: null,
    bbLr: 'gl',
    bbOut: 'pl',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
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
    luggageId: 'd07f516a-655f-4258-aaef-1134cdce8de9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '938',
    name: 'Adélaïde',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description: 'Aenean lectus.',
    tagNr: '0927',
    location: 'LR1',
    bbDown: 'mb',
    bbLr: 'ne',
    bbOut: 'wn',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
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
    luggageId: '1e19e411-9d1a-46e7-80fd-5c6fa0176c7c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '973',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    tagNr: '4830',
    location: 'LR',
    bbDown: 'ls',
    bbLr: 'nm',
    bbOut: 'xm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '92fb2f0d-6b7f-4a0f-850f-c26413aaf5da',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '737',
    name: 'Eloïse',
    arrivalTime: null,
    bags: '5+1',
    description: 'Nulla ac enim.',
    tagNr: '0527',
    location: 'LR1',
    bbDown: 'll',
    bbLr: 've',
    bbOut: 'sn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'aa124f26-fc52-4c39-b778-ae50ff53f0e9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '027',
    name: 'Chloé',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description: null,
    tagNr: '6104',
    location: 'LR1',
    bbDown: 'hb',
    bbLr: 'fw',
    bbOut: 'xn',
    completedAt: new Date(
      new Date('12/29/2022').setHours(
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
    luggageId: '5d2e3dde-65f4-44e4-8385-04315dc55fb2',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '466',
    name: 'Yè',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    description: 'Maecenas rhoncus aliquam lacus.',
    tagNr: '9384',
    location: 'LR1',
    bbDown: 'bc',
    bbLr: 'qm',
    bbOut: 'ua',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dfde167f-5cf7-4e47-8ce7-41919edfae7a',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '709',
    name: 'Véronique',
    arrivalTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    description: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '9104',
    location: 'LR',
    bbDown: null,
    bbLr: 'tc',
    bbOut: 'ev',
    completedAt: new Date(
      new Date('12/9/2022').setHours(
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
    luggageId: '888942ea-6d98-4f2d-93a6-859c6a58b98f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '838',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    tagNr: '7131',
    location: 'LR1',
    bbDown: null,
    bbLr: 'yw',
    bbOut: 'fk',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '680893bd-cbf4-4225-b0ef-f8d3890529ac',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '621',
    name: 'Chloé',
    arrivalTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    description: 'Suspendisse potenti.',
    tagNr: '3535',
    location: 'LR1',
    bbDown: 'uc',
    bbLr: 'jl',
    bbOut: 'ul',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
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
    luggageId: '9ac77b93-ad77-44e8-a3ec-32583635e3fa',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '464',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    description: 'Quisque porta volutpat erat.',
    tagNr: '1619',
    location: 'LR',
    bbDown: 'ue',
    bbLr: 'gy',
    bbOut: 'ui',
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
    luggageId: 'bd862723-f96c-427d-aa6a-8e4abdc09922',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '073',
    name: 'Tú',
    arrivalTime: null,
    bags: '1+7',
    description: null,
    tagNr: '3220',
    location: 'LR1',
    bbDown: null,
    bbLr: 'lo',
    bbOut: 'bc',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3f2a8e5c-9d2d-4845-96db-d0811b1c8726',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '601',
    name: 'Adèle',
    arrivalTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: 'Ut tellus.',
    tagNr: '6138',
    location: 'LR1',
    bbDown: 'aa',
    bbLr: 'xc',
    bbOut: 'mq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bf843204-5cd0-4cdb-945e-57f284ed6d12',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '748',
    name: 'Méng',
    arrivalTime: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    description: 'Nunc nisl.',
    tagNr: '8797',
    location: 'LR1',
    bbDown: 'vt',
    bbLr: 'ld',
    bbOut: 'mq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e44da542-6892-4c58-9f4e-dc05b9bad9dd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '235',
    name: 'Adèle',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    description: null,
    tagNr: '6923',
    location: 'LR1',
    bbDown: null,
    bbLr: 'hz',
    bbOut: 'fz',
    completedAt: new Date(
      new Date('12/6/2022').setHours(
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
    luggageId: '939c467c-9630-4bb5-951a-3082c39822b1',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '703',
    name: 'Erwéi',
    arrivalTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: null,
    tagNr: '3630',
    location: 'LR1',
    bbDown: 'gl',
    bbLr: 'mo',
    bbOut: 'oj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e3c6592f-f7d0-411b-9ddc-08d2abecf12a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '079',
    name: 'Mélanie',
    arrivalTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    tagNr: '2901',
    location: 'LR',
    bbDown: 'fz',
    bbLr: 'oc',
    bbOut: 'su',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3098ff03-1ae4-45ea-9cfd-53ad7515eced',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '509',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description: 'Morbi ut odio.',
    tagNr: '1918',
    location: 'LR1',
    bbDown: 'iq',
    bbLr: 'dq',
    bbOut: 'll',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd6172323-9870-4d2d-92bd-370d31651164',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '879',
    name: 'Dù',
    arrivalTime: null,
    bags: '6+4',
    description: 'Nunc nisl.',
    tagNr: '9548',
    location: 'LR',
    bbDown: 'rj',
    bbLr: 'ky',
    bbOut: 'ix',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a81692c2-a76f-4b3c-ac99-7df72d5b5140',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '135',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description: 'Curabitur at ipsum ac tellus semper interdum.',
    tagNr: '3231',
    location: 'LR',
    bbDown: 'pj',
    bbLr: 'oa',
    bbOut: 'ds',
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
    luggageId: 'a41b4a36-fdf7-4f78-b506-76137b545e2b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '308',
    name: 'Eugénie',
    arrivalTime: null,
    bags: '9+6',
    description: 'Etiam justo.',
    tagNr: '5324',
    location: 'LR',
    bbDown: 'cb',
    bbLr: 'qk',
    bbOut: 'ht',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
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
    luggageId: 'f11cf058-87e8-4696-ace4-6d5cad5245d9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '887',
    name: 'Gaïa',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: null,
    tagNr: '5183',
    location: 'LR1',
    bbDown: 'sg',
    bbLr: 'tu',
    bbOut: 'uf',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
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
    luggageId: '94fa43a4-2b2f-476b-8de2-79d44122458e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '801',
    name: 'Méghane',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Nulla tempus.',
    tagNr: '3458',
    location: 'LR1',
    bbDown: 'eq',
    bbLr: 'gw',
    bbOut: 'gh',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: 'ee74dd1a-9f14-4b12-8da7-48544e1fd675',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '872',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description: 'Aliquam erat volutpat.',
    tagNr: '0831',
    location: 'LR',
    bbDown: 'wm',
    bbLr: 'oe',
    bbOut: 'mw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2e590a00-bf97-430b-ad52-3d4549209b9c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '067',
    name: 'Nuó',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: null,
    tagNr: '1799',
    location: 'LR1',
    bbDown: 'jn',
    bbLr: 'iv',
    bbOut: 'kc',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
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
    luggageId: 'ae2f7f26-c230-41ba-9723-a485b87233f1',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '463',
    name: 'Intéressant',
    arrivalTime: null,
    bags: '1+7',
    description: 'Nulla justo.',
    tagNr: '4992',
    location: 'LR',
    bbDown: null,
    bbLr: 'gg',
    bbOut: 'mc',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: '3e7bd05c-c9ff-44b5-b01f-4f232e5a8059',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '476',
    name: 'Annotée',
    arrivalTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    description: 'Aenean lectus.',
    tagNr: '3311',
    location: 'LR1',
    bbDown: 'ly',
    bbLr: 'tk',
    bbOut: 'yj',
    completedAt: new Date(
      new Date('2/21/2023').setHours(
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
    luggageId: '191a6d93-e582-494f-9c6c-0f369cf80dcd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '026',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description: 'Suspendisse ornare consequat lectus.',
    tagNr: '6698',
    location: 'LR1',
    bbDown: 'uv',
    bbLr: 'my',
    bbOut: 'si',
    completedAt: new Date(
      new Date('12/4/2022').setHours(
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
    luggageId: '3be5175e-6d82-4ef8-a14a-3968cdf33bbd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '033',
    name: 'Anaëlle',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    tagNr: '8580',
    location: 'LR',
    bbDown: 'vr',
    bbLr: 'gn',
    bbOut: 'sf',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
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
    luggageId: 'e1ae263f-98ca-475c-a652-d6a11c864d33',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '221',
    name: 'Lyséa',
    arrivalTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: null,
    tagNr: '6113',
    location: 'LR1',
    bbDown: 'ws',
    bbLr: 'iz',
    bbOut: 'ei',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
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
    luggageId: 'ad597c11-3c68-47af-abc7-20f8bdf13340',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '360',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '1098',
    location: 'LR',
    bbDown: 'tv',
    bbLr: 'jt',
    bbOut: 'wj',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: '8281b818-7bec-4dda-9918-6ec22f2e94e3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '263',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '4084',
    location: 'LR1',
    bbDown: 'ob',
    bbLr: 'ny',
    bbOut: 'wn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '209a4de2-b0c6-4b96-bc1d-fdc0bec67ca7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '483',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    description: null,
    tagNr: '9502',
    location: 'LR',
    bbDown: 'so',
    bbLr: 'vg',
    bbOut: 'hg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4c8bca32-b7c5-4f37-85e2-af2aaacb3956',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '181',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: null,
    tagNr: '1178',
    location: 'LR',
    bbDown: null,
    bbLr: 'ku',
    bbOut: 'qw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '447bb6e2-236b-4635-b007-a001acf70552',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '556',
    name: 'Séverine',
    arrivalTime: null,
    bags: '8+8',
    description: 'Phasellus in felis.',
    tagNr: '7696',
    location: 'LR',
    bbDown: 'gg',
    bbLr: 'xt',
    bbOut: 'xv',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
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
    luggageId: 'dc0d2fdc-b9be-48c2-89e8-e954c4ab5b66',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '634',
    name: 'Bécassine',
    arrivalTime: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: null,
    tagNr: '1787',
    location: 'LR',
    bbDown: 'ml',
    bbLr: 'xx',
    bbOut: 'ty',
    completedAt: new Date(
      new Date('1/22/2023').setHours(
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
    luggageId: 'b48f31fe-c422-42de-8839-b3ba982db7f6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '310',
    name: 'Tán',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    tagNr: '3247',
    location: 'LR1',
    bbDown: null,
    bbLr: 'lx',
    bbOut: 'yg',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: '91da56e6-01d0-48f7-80d7-076113bbff13',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '074',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    tagNr: '7072',
    location: 'LR1',
    bbDown: 'ai',
    bbLr: 'ce',
    bbOut: 'xd',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: '95e13aa3-b088-4b95-af05-b450d8cc9dbf',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '797',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '7366',
    location: 'LR1',
    bbDown: 'mz',
    bbLr: 'co',
    bbOut: 'vb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '241d1e16-0527-4414-8649-058941422f86',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '892',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '4798',
    location: 'LR1',
    bbDown: 'ur',
    bbLr: 'dw',
    bbOut: 'xy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2214e7c8-7654-4732-aefb-33e2bf6f903d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '905',
    name: 'Cléa',
    arrivalTime: null,
    bags: '0+0',
    description: null,
    tagNr: '6984',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ch',
    bbOut: 'sq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ab0d1807-a920-4f77-b0a7-f95c2c7db331',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '621',
    name: 'Andréa',
    arrivalTime: null,
    bags: '5+7',
    description: null,
    tagNr: '5849',
    location: 'LR',
    bbDown: null,
    bbLr: 'ys',
    bbOut: 'so',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '53fe8cc8-7065-41d7-855c-ff494076bed8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '192',
    name: 'Célestine',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: null,
    tagNr: '8723',
    location: 'LR1',
    bbDown: 'mb',
    bbLr: 'sp',
    bbOut: 'ot',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: '55e3c6f7-7b51-4426-a2e6-56b731ff349c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '878',
    name: 'Styrbjörn',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    description: null,
    tagNr: '9785',
    location: 'LR1',
    bbDown: 'jx',
    bbLr: 'sr',
    bbOut: 'qh',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: '66746473-2fab-4b25-a72a-c59579727790',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '380',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    description: null,
    tagNr: '5207',
    location: 'LR',
    bbDown: null,
    bbLr: 'nk',
    bbOut: 'oy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '41c9ed0d-994f-45e0-9f26-ef7f846cb1c6',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '997',
    name: 'Bérénice',
    arrivalTime: null,
    bags: '3+3',
    description: null,
    tagNr: '0197',
    location: 'LR',
    bbDown: 'aj',
    bbLr: 'tp',
    bbOut: 'aw',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
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
    luggageId: '81927db0-73d7-4e39-a5d1-2f570120c12e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '819',
    name: 'Célia',
    arrivalTime: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '2989',
    location: 'LR',
    bbDown: 'nb',
    bbLr: 'wo',
    bbOut: 'qm',
    completedAt: new Date(
      new Date('3/2/2023').setHours(
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
    luggageId: 'df119507-802c-4f84-afe3-8f6369dcd190',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '991',
    name: 'Thérèsa',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: null,
    tagNr: '3441',
    location: 'LR1',
    bbDown: 'qm',
    bbLr: 'dd',
    bbOut: 'yi',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ba5e3b67-2fa2-4d8d-b2a3-10701dd8dfbb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '090',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    tagNr: '1206',
    location: 'LR1',
    bbDown: 'cv',
    bbLr: 'qb',
    bbOut: 'gj',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
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
    luggageId: '0e9b9129-1921-4dbf-bb9e-5f48150c0c5b',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '488',
    name: 'Yáo',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    tagNr: '6493',
    location: 'LR',
    bbDown: 'pd',
    bbLr: 'kx',
    bbOut: 'jz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c83d3917-2a1f-4757-89bc-3c3b7e5b0be9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '226',
    name: 'Gaïa',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    tagNr: '5553',
    location: 'LR1',
    bbDown: 'ip',
    bbLr: 'fe',
    bbOut: 'iq',
    completedAt: new Date(
      new Date('12/29/2022').setHours(
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
    luggageId: '7342fc6e-67be-4a01-8a00-2d9739530817',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '791',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    description: null,
    tagNr: '4219',
    location: 'LR',
    bbDown: 'ng',
    bbLr: 'ex',
    bbOut: 'ye',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '27cffea0-3c00-49f6-905b-97636eb056b9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '069',
    name: 'Audréanne',
    arrivalTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    description: null,
    tagNr: '4804',
    location: 'LR1',
    bbDown: 'at',
    bbLr: 'jz',
    bbOut: 'lu',
    completedAt: new Date(
      new Date('2/7/2023').setHours(
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
    luggageId: 'e279b673-927f-4ee6-a501-ff169c68b66c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '006',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    description: 'Pellentesque eget nunc.',
    tagNr: '3557',
    location: 'LR1',
    bbDown: 'xx',
    bbLr: 'sd',
    bbOut: 'vq',
    completedAt: new Date(
      new Date('2/19/2023').setHours(
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
    luggageId: 'aa174886-21ce-4e2a-b042-f3ab0f257188',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '576',
    name: 'Renée',
    arrivalTime: null,
    bags: '2+2',
    description: null,
    tagNr: '2719',
    location: 'LR1',
    bbDown: 'av',
    bbLr: 'tg',
    bbOut: 'ud',
    completedAt: new Date(
      new Date('2/27/2023').setHours(
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
    luggageId: 'de506a0f-55e8-40c2-a530-b557dabafcbf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '596',
    name: 'Annotés',
    arrivalTime: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '3033',
    location: 'LR1',
    bbDown: 'zm',
    bbLr: 'fw',
    bbOut: 'io',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
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
    luggageId: 'c80c78a5-39c2-475c-b002-80e8bce6d333',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '714',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    description: 'Integer a nibh.',
    tagNr: '7466',
    location: 'LR',
    bbDown: 'vk',
    bbLr: 'bx',
    bbOut: 'fd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '83531f93-83dd-4d5e-b2ee-77db6e06d131',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '831',
    name: 'Håkan',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description: null,
    tagNr: '9746',
    location: 'LR1',
    bbDown: 'ly',
    bbLr: 'fl',
    bbOut: 'lh',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
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
    luggageId: '05ed4b21-1122-47b5-a9d2-9e3edfd2b913',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '030',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description: null,
    tagNr: '1816',
    location: 'LR1',
    bbDown: null,
    bbLr: 'rr',
    bbOut: 'ew',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd1dd4573-598a-4287-8509-d29a2f5c3973',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '010',
    name: 'Sélène',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description: 'Duis ac nibh.',
    tagNr: '8082',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ie',
    bbOut: 'bz',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: 'f3164930-1bd6-4a95-a7cd-a95633760818',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '814',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: 'Nunc rhoncus dui vel sem.',
    tagNr: '6376',
    location: 'LR1',
    bbDown: 'es',
    bbLr: 'ph',
    bbOut: 'dr',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
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
    luggageId: 'ec3228be-fa8e-4a2f-a000-005c2c12c1c7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '184',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    tagNr: '8225',
    location: 'LR1',
    bbDown: 'pf',
    bbLr: 'kb',
    bbOut: 'mm',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
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
    luggageId: '36852e2e-c2e9-4bf9-bd25-10110006b9d2',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '856',
    name: 'Pål',
    arrivalTime: null,
    bags: '1+0',
    description: null,
    tagNr: '1871',
    location: 'LR1',
    bbDown: 'ln',
    bbLr: 'to',
    bbOut: 'yy',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
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
    luggageId: '7549d796-bcbb-430a-8fe0-36ea3345fc52',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '212',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    tagNr: '0376',
    location: 'LR',
    bbDown: 'cf',
    bbLr: 'as',
    bbOut: 'ac',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
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
    luggageId: 'ec2eb3f9-b7c9-4813-be74-e6bfe8a5ff18',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '975',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: 'Quisque ut erat.',
    tagNr: '3319',
    location: 'LR1',
    bbDown: 'qd',
    bbLr: 'iz',
    bbOut: 'mv',
    completedAt: new Date(
      new Date('2/17/2023').setHours(
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
    luggageId: 'f4b7e429-7822-445d-9ae1-e69002416f89',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '140',
    name: 'Loïc',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: 'Pellentesque at nulla.',
    tagNr: '8845',
    location: 'LR',
    bbDown: 'bj',
    bbLr: 'kc',
    bbOut: 'fm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '62620d7d-44e6-433a-8d0d-364134f69909',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '912',
    name: 'Mélia',
    arrivalTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: null,
    tagNr: '5953',
    location: 'LR',
    bbDown: null,
    bbLr: 'rw',
    bbOut: 'yb',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: '661cc888-7d86-41c3-854a-9a34e2e76733',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '517',
    name: 'Maïly',
    arrivalTime: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    description: 'Etiam faucibus cursus urna.',
    tagNr: '8639',
    location: 'LR1',
    bbDown: 'vl',
    bbLr: 'ka',
    bbOut: 'tn',
    completedAt: new Date(
      new Date('2/15/2023').setHours(
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
    luggageId: 'b1f0f3a1-3e46-41a0-890b-6cff4227ee9f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '005',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: 'Curabitur at ipsum ac tellus semper interdum.',
    tagNr: '8221',
    location: 'LR1',
    bbDown: 'yh',
    bbLr: 'wg',
    bbOut: 'xh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '75c61b04-6e1c-4f3a-9106-756252443552',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '407',
    name: 'Cécilia',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: 'Maecenas pulvinar lobortis est.',
    tagNr: '3132',
    location: 'LR1',
    bbDown: 'zb',
    bbLr: 'mj',
    bbOut: 'rb',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: 'cf6959ea-a228-47d1-85b2-47ae90539f7e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '518',
    name: 'Laurène',
    arrivalTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    description: null,
    tagNr: '3067',
    location: 'LR',
    bbDown: 'jx',
    bbLr: 'nn',
    bbOut: 'op',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0c48bf4f-4c9c-4b88-ae26-e49aa38e75a1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '830',
    name: 'Nélie',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: null,
    tagNr: '9808',
    location: 'LR1',
    bbDown: 'tt',
    bbLr: 'ag',
    bbOut: 'ql',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
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
    luggageId: '3b923bca-bd51-4c31-879f-d298980df32c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '279',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: 'Fusce consequat.',
    tagNr: '2115',
    location: 'LR',
    bbDown: null,
    bbLr: 'bw',
    bbOut: 'tj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'eefffa71-1b8b-49db-ad69-f7d85ae1f19a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '509',
    name: 'Yè',
    arrivalTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    description: 'Etiam justo.',
    tagNr: '5608',
    location: 'LR1',
    bbDown: 'gs',
    bbLr: 'yo',
    bbOut: 'lb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fa0305e9-ebdb-4f6c-90dd-4b6a01322fe8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '189',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    tagNr: '9296',
    location: 'LR',
    bbDown: 'ef',
    bbLr: 'mx',
    bbOut: 'tz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6622f4ec-a168-4bbe-b429-30b826001177',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '755',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description: 'Duis ac nibh.',
    tagNr: '4083',
    location: 'LR1',
    bbDown: 'nk',
    bbLr: 'gh',
    bbOut: 'ap',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: 'f31fe315-b31e-4acd-b7b6-15d35e7b7ad0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '959',
    name: 'Clélia',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    description: 'Cras pellentesque volutpat dui.',
    tagNr: '3609',
    location: 'LR',
    bbDown: 'vq',
    bbLr: 'ri',
    bbOut: 'jw',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
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
    luggageId: '499e996c-0cd2-4f7b-bdbe-172af9f51084',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '385',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: 'Donec ut dolor.',
    tagNr: '4830',
    location: 'LR',
    bbDown: 'yk',
    bbLr: 'qm',
    bbOut: 'qj',
    completedAt: new Date(
      new Date('1/19/2023').setHours(
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
    luggageId: '3ce2b091-e641-441c-9321-a590edb74861',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '810',
    name: 'Léane',
    arrivalTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description: null,
    tagNr: '0996',
    location: 'LR',
    bbDown: 'fz',
    bbLr: 'qn',
    bbOut: 'je',
    completedAt: new Date(
      new Date('1/13/2023').setHours(
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
    luggageId: '3dd6c459-cb8e-431d-a059-9e1a1279e5df',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '003',
    name: 'Maïwenn',
    arrivalTime: null,
    bags: '4+0',
    description: 'In congue.',
    tagNr: '8445',
    location: 'LR1',
    bbDown: 'xk',
    bbLr: 'tj',
    bbOut: 'cm',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
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
    luggageId: '1078650e-ffe9-4c63-92ef-fdabb4d7686e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '686',
    name: 'Séverine',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'Praesent lectus.',
    tagNr: '1183',
    location: 'LR1',
    bbDown: 'nb',
    bbLr: 'ew',
    bbOut: 'vy',
    completedAt: new Date(
      new Date('1/1/2023').setHours(
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
    luggageId: '94f92163-c24f-455e-ab01-e8ccfd5166b6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '554',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '6664',
    location: 'LR1',
    bbDown: 'ep',
    bbLr: 'zs',
    bbOut: 'qp',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
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
    luggageId: '7664cb4c-66b0-4739-afea-cdc7ff373a19',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '224',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: null,
    tagNr: '8695',
    location: 'LR1',
    bbDown: 'ao',
    bbLr: 'di',
    bbOut: 'fg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0e69d659-df93-499d-b32f-88dc4ed9ed23',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '526',
    name: 'Célia',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    description: 'Quisque porta volutpat erat.',
    tagNr: '6680',
    location: 'LR1',
    bbDown: 'in',
    bbLr: 'jj',
    bbOut: 'us',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
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
    luggageId: 'e653bce5-f655-4623-9a8b-b609afc40547',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '894',
    name: 'Yú',
    arrivalTime: null,
    bags: '4+4',
    description: null,
    tagNr: '1161',
    location: 'LR1',
    bbDown: 'vp',
    bbLr: 'gt',
    bbOut: 'pu',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: '99244a54-c8df-4b8f-9d80-b19f5cdc278f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '885',
    name: 'Eugénie',
    arrivalTime: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    description: null,
    tagNr: '7604',
    location: 'LR',
    bbDown: null,
    bbLr: 'nb',
    bbOut: 'jj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '677685cd-4673-49a1-99d7-cc7f36825daf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '405',
    name: 'Loïc',
    arrivalTime: null,
    bags: '9+5',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '1722',
    location: 'LR',
    bbDown: null,
    bbLr: 'hw',
    bbOut: 'td',
    completedAt: new Date(
      new Date('1/26/2023').setHours(
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
    luggageId: 'f4c9dd08-1d6d-4666-b2b7-e5dd71f2e114',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '816',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    tagNr: '5932',
    location: 'LR',
    bbDown: 'sj',
    bbLr: 'ai',
    bbOut: 'qm',
    completedAt: new Date(
      new Date('2/24/2023').setHours(
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
    luggageId: '252287a2-f159-4855-b9e3-11a3ee690e1a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '540',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description: null,
    tagNr: '0877',
    location: 'LR1',
    bbDown: 'lp',
    bbLr: 'ee',
    bbOut: 'mg',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1cef5308-6a10-4ec3-a7e2-5d5af7fe8780',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '450',
    name: 'Méthode',
    arrivalTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    description: null,
    tagNr: '3517',
    location: 'LR1',
    bbDown: 'se',
    bbLr: 'vh',
    bbOut: 'ur',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
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
    luggageId: 'd35638f7-69ab-4b20-b086-47b1a10676b1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '331',
    name: 'Josée',
    arrivalTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    description: null,
    tagNr: '6833',
    location: 'LR',
    bbDown: 'ry',
    bbLr: 'sq',
    bbOut: 'ta',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
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
    luggageId: 'ab66835c-da36-4ed4-bcb1-7bedee2bc972',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '747',
    name: 'Lén',
    arrivalTime: null,
    bags: '5+2',
    description: null,
    tagNr: '2703',
    location: 'LR1',
    bbDown: 'df',
    bbLr: 'to',
    bbOut: 'lt',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8cfb293f-43a9-4461-abcc-a6bb01f02ac7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '282',
    name: 'Aurélie',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    tagNr: '5841',
    location: 'LR1',
    bbDown: null,
    bbLr: 'kr',
    bbOut: 'fo',
    completedAt: new Date(
      new Date('1/2/2023').setHours(
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
    luggageId: '1ac8df24-8da5-4e34-9f51-41342bcccb41',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '584',
    name: 'Aimée',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    description: null,
    tagNr: '0171',
    location: 'LR1',
    bbDown: 'mu',
    bbLr: 'kb',
    bbOut: 'sg',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '27c2f70f-e935-473e-9d97-67b2fb3604f2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '343',
    name: 'Andrée',
    arrivalTime: null,
    bags: '5+3',
    description: null,
    tagNr: '4850',
    location: 'LR1',
    bbDown: 'fb',
    bbLr: 'lz',
    bbOut: 'ej',
    completedAt: new Date(
      new Date('1/26/2023').setHours(
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
    luggageId: '270c1ffc-766e-4e5b-8638-04e560b942b6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '535',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: null,
    tagNr: '2273',
    location: 'LR',
    bbDown: 'rh',
    bbLr: 'ek',
    bbOut: 'oi',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
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
    luggageId: '6a3b228d-69e5-45ac-9945-c6f122c41807',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '335',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: null,
    tagNr: '5489',
    location: 'LR1',
    bbDown: 'al',
    bbLr: 'mf',
    bbOut: 'as',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
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
    luggageId: '14764dbe-5854-4f78-9f4a-e072ebb09a3f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '482',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description: null,
    tagNr: '7255',
    location: 'LR1',
    bbDown: 'ez',
    bbLr: 'og',
    bbOut: 'tm',
    completedAt: new Date(
      new Date('1/5/2023').setHours(
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
    luggageId: 'f7070ce4-3b29-4fc3-a5d1-c55e039b0aa9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '648',
    name: 'Léandre',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description: 'In blandit ultrices enim.',
    tagNr: '8634',
    location: 'LR1',
    bbDown: 'mz',
    bbLr: 'vj',
    bbOut: 'oc',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
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
    luggageId: 'dc93b365-ffe2-474c-b694-3cdfe585f6a5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '033',
    name: 'Faîtes',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '9978',
    location: 'LR',
    bbDown: 'bx',
    bbLr: 'gl',
    bbOut: 'ok',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
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
    luggageId: 'fe406681-68b4-4a59-ba74-a499b88eb7c3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '833',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '0816',
    location: 'LR1',
    bbDown: 'vy',
    bbLr: 'qr',
    bbOut: 'bu',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
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
    luggageId: '1145c923-0175-4cea-bc37-c7cd491cedda',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '921',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: 'Cras in purus eu magna vulputate luctus.',
    tagNr: '3611',
    location: 'LR',
    bbDown: 'ct',
    bbLr: 'hr',
    bbOut: 'it',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7c6b3394-f1f7-4366-b599-6ddce8fc69f6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '648',
    name: 'Almérinda',
    arrivalTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    tagNr: '3072',
    location: 'LR',
    bbDown: 'zl',
    bbLr: 'zf',
    bbOut: 'xq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dd520e6a-6eb0-4967-93b3-a0a9d96be7bb',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '085',
    name: 'Marylène',
    arrivalTime: null,
    bags: '9+7',
    description: 'Nunc purus.',
    tagNr: '7564',
    location: 'LR1',
    bbDown: null,
    bbLr: 'fc',
    bbOut: 'jy',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
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
    luggageId: '446a68ad-8bcd-419b-82cc-d44729f44c20',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '644',
    name: 'Marlène',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    tagNr: '1821',
    location: 'LR1',
    bbDown: null,
    bbLr: 'uu',
    bbOut: 'pe',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: '97f704ba-d203-4ad9-ab99-5d674807cbb5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '153',
    name: 'Dafnée',
    arrivalTime: null,
    bags: '2+9',
    description: 'Morbi a ipsum.',
    tagNr: '8847',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xn',
    bbOut: 'ym',
    completedAt: new Date(
      new Date('1/9/2023').setHours(
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
    luggageId: 'a8024777-4dbc-480d-bc16-5c122e6abe4b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '821',
    name: 'Camélia',
    arrivalTime: null,
    bags: '3+0',
    description: null,
    tagNr: '4343',
    location: 'LR1',
    bbDown: null,
    bbLr: 'uu',
    bbOut: 'az',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b102cda5-a515-47d7-87d2-187225267368',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '972',
    name: 'Laurélie',
    arrivalTime: null,
    bags: '2+4',
    description: null,
    tagNr: '7017',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xg',
    bbOut: 'uc',
    completedAt: new Date(
      new Date('2/16/2023').setHours(
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
    luggageId: '07b49d08-4141-4fe7-afdf-ba0a199c1eb8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '276',
    name: 'Maëlyss',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description: null,
    tagNr: '8958',
    location: 'LR',
    bbDown: null,
    bbLr: 'ic',
    bbOut: 'cf',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: 'fcfb6e4f-01ae-4610-9725-c5b573618a2d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '615',
    name: 'Táng',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description: 'Cras non velit nec nisi vulputate nonummy.',
    tagNr: '8134',
    location: 'LR',
    bbDown: 'pc',
    bbLr: 'eu',
    bbOut: 'of',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e880e3cd-de9e-47b6-9ea0-39c7ab6fa92c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '597',
    name: 'Liè',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: 'Nulla ac enim.',
    tagNr: '6640',
    location: 'LR',
    bbDown: 'ym',
    bbLr: 'aw',
    bbOut: 'gs',
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
    luggageId: '424620be-12b8-483e-9e4d-91c5bba82333',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '979',
    name: 'Cécile',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: 'Mauris sit amet eros.',
    tagNr: '2551',
    location: 'LR',
    bbDown: 'dn',
    bbLr: 'yg',
    bbOut: 'rj',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: '21327f4c-d4d5-4d10-bf47-5acfe269cd4d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '262',
    name: 'Cléa',
    arrivalTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '2675',
    location: 'LR1',
    bbDown: 'oy',
    bbLr: 'wu',
    bbOut: 'bb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7ee57a68-c93b-4e19-8c72-b47a95920309',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '616',
    name: 'Vénus',
    arrivalTime: null,
    bags: '2+9',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    tagNr: '9672',
    location: 'LR',
    bbDown: 'sl',
    bbLr: 'qf',
    bbOut: 'id',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '39eb5c9f-cdf1-4ecb-88a3-d60f3cfff429',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '795',
    name: 'Séverine',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: 'Cras in purus eu magna vulputate luctus.',
    tagNr: '5745',
    location: 'LR',
    bbDown: 'fr',
    bbLr: 'bq',
    bbOut: 'hy',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: '3ba91768-db12-4f15-8e52-bb00104ef9f0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '509',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    description: null,
    tagNr: '3561',
    location: 'LR',
    bbDown: 'cy',
    bbLr: 'ow',
    bbOut: 'lk',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: '6cfbdda1-d061-4884-bb9c-381f0ba29cb7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '874',
    name: 'Cécile',
    arrivalTime: null,
    bags: '7+0',
    description: null,
    tagNr: '1501',
    location: 'LR1',
    bbDown: 'br',
    bbLr: 'gz',
    bbOut: 'md',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: 'efe79f4c-1730-4151-8387-311af3766f1d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '709',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    description: 'Nulla justo.',
    tagNr: '2264',
    location: 'LR1',
    bbDown: 'kr',
    bbLr: 'yl',
    bbOut: 'ka',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '24e23b44-2263-4cf0-9199-fa9336a5e835',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '050',
    name: 'Thérèse',
    arrivalTime: null,
    bags: '8+2',
    description: null,
    tagNr: '9258',
    location: 'LR',
    bbDown: 'nh',
    bbLr: 'oo',
    bbOut: 'fn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '676d114c-8cf0-4b6c-a508-debe5975b631',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '514',
    name: 'Lorène',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    description: null,
    tagNr: '7622',
    location: 'LR',
    bbDown: null,
    bbLr: 'mn',
    bbOut: 'ar',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0fa3a75e-d31a-43e7-b3fb-5a08b0d557ed',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '505',
    name: 'Kallisté',
    arrivalTime: null,
    bags: '1+5',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    tagNr: '9437',
    location: 'LR',
    bbDown: 'eb',
    bbLr: 'hw',
    bbOut: 'do',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f9f5b14d-445c-4dc5-b661-00847bd292f4',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '662',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    description: 'Sed accumsan felis.',
    tagNr: '2620',
    location: 'LR',
    bbDown: null,
    bbLr: 'je',
    bbOut: 'fi',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: 'f5151201-b81a-429f-908b-33dbbd7a8187',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '324',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    description: 'Vivamus tortor.',
    tagNr: '0291',
    location: 'LR',
    bbDown: 'as',
    bbLr: 'gv',
    bbOut: 'dy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e461992d-d7eb-4abf-a630-4e481ed95ec5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '319',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    description: 'Aliquam erat volutpat.',
    tagNr: '0332',
    location: 'LR',
    bbDown: 'dp',
    bbLr: 'fe',
    bbOut: 'vf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'be63cf44-ee88-4245-b960-c5ba63a6875e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '691',
    name: 'Torbjörn',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: 'Sed accumsan felis.',
    tagNr: '3310',
    location: 'LR1',
    bbDown: 'fy',
    bbLr: 'fn',
    bbOut: 'gu',
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
    luggageId: 'e6badc9e-7c3e-4c13-9384-ac8d4920034c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '994',
    name: 'Dorothée',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    description: null,
    tagNr: '9660',
    location: 'LR',
    bbDown: 'ij',
    bbLr: 'ha',
    bbOut: 'ap',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd4a328ff-737f-4e8f-afd5-c39ad27a44d3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '689',
    name: 'Annotée',
    arrivalTime: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    description: null,
    tagNr: '6327',
    location: 'LR',
    bbDown: 'qk',
    bbLr: 'wq',
    bbOut: 'gu',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
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
    luggageId: 'a3b126a7-6e70-4e81-a375-28603f1f888b',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '579',
    name: 'Liè',
    arrivalTime: null,
    bags: '7+7',
    description: 'In eleifend quam a odio.',
    tagNr: '6317',
    location: 'LR1',
    bbDown: null,
    bbLr: 'tv',
    bbOut: 'ft',
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
    luggageId: '1a7cea6f-e3e2-4246-be17-21b60e8aeb65',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '488',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: 'Nunc purus.',
    tagNr: '7325',
    location: 'LR',
    bbDown: 'ue',
    bbLr: 'lr',
    bbOut: 'jt',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
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
    luggageId: 'a3a45441-1a04-4bc1-b756-79a9b9710b4d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '926',
    name: 'Dorothée',
    arrivalTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description: null,
    tagNr: '1228',
    location: 'LR',
    bbDown: 'wy',
    bbLr: 'py',
    bbOut: 'bv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a870a436-9d3d-4a19-894f-7e0cb906d591',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '043',
    name: 'Aurélie',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: 'Phasellus in felis.',
    tagNr: '7958',
    location: 'LR1',
    bbDown: 'ya',
    bbLr: 'uj',
    bbOut: 'jq',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
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
    luggageId: '110a4af2-b720-42c2-8b1e-f416cf109a0a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '764',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: null,
    tagNr: '1258',
    location: 'LR1',
    bbDown: 'fz',
    bbLr: 'yo',
    bbOut: 'jt',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7344b440-0db8-4b80-bcb3-7fcbfa6c38fa',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '463',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: null,
    tagNr: '0172',
    location: 'LR1',
    bbDown: 'co',
    bbLr: 'sz',
    bbOut: 'hl',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
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
    luggageId: '5887ea18-78d6-4472-a5fd-c466d34492fd',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '277',
    name: 'Estée',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: null,
    tagNr: '1117',
    location: 'LR1',
    bbDown: 'jf',
    bbLr: 'at',
    bbOut: 'qx',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: '9a63d5a7-ee89-4c77-9cd0-82dc427cba8d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '966',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    description: 'Nulla ac enim.',
    tagNr: '2937',
    location: 'LR',
    bbDown: 'lm',
    bbLr: 'dj',
    bbOut: 'cm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3d6595fa-b4c0-4752-94e8-0d20074f77d2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '087',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description: 'Curabitur in libero ut massa volutpat convallis.',
    tagNr: '9829',
    location: 'LR',
    bbDown: null,
    bbLr: 'eu',
    bbOut: 'ex',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '55792fd0-6a3c-4db5-a241-f9130624c53f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '452',
    name: 'Béatrice',
    arrivalTime: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '1366',
    location: 'LR1',
    bbDown: 'hl',
    bbLr: 'jv',
    bbOut: 'za',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dffce85c-8dc1-46b3-a7ed-276185e4f62d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '520',
    name: 'Marlène',
    arrivalTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: null,
    tagNr: '5637',
    location: 'LR1',
    bbDown: 'yb',
    bbLr: 'sp',
    bbOut: 'xa',
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
    luggageId: '2f7ba92e-8209-41ea-ad4f-7ee7ba8fa50e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '300',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '4001',
    location: 'LR',
    bbDown: 'se',
    bbLr: 'me',
    bbOut: 'mm',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
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
    luggageId: '4637f0e4-47f5-491c-b815-b6320a8c541f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '513',
    name: 'Adèle',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description: 'Suspendisse potenti.',
    tagNr: '0568',
    location: 'LR',
    bbDown: 'eq',
    bbLr: 'cn',
    bbOut: 'st',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '009ea86d-6260-4d6b-84cc-67de8da0095a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '395',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    description: null,
    tagNr: '0954',
    location: 'LR1',
    bbDown: 'py',
    bbLr: 'oq',
    bbOut: 'wf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0f6a0222-8342-4e43-9bc1-463d2dfd0233',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '294',
    name: 'Marie-thérèse',
    arrivalTime: null,
    bags: '5+9',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    tagNr: '6532',
    location: 'LR',
    bbDown: null,
    bbLr: 'oy',
    bbOut: 'we',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
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
    luggageId: '7933733e-6793-4c0f-b0f1-7d2e2483336c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '675',
    name: 'Mårten',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    description: null,
    tagNr: '6005',
    location: 'LR',
    bbDown: 'gq',
    bbLr: 'cc',
    bbOut: 'zr',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: 'd531d536-b16c-4317-9aa2-c09cfa01e2bc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '065',
    name: 'Táng',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: null,
    tagNr: '9817',
    location: 'LR',
    bbDown: 'we',
    bbLr: 'wy',
    bbOut: 'ij',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '476fd0ca-71a9-46d6-a1b3-1622e14ac702',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '480',
    name: 'Geneviève',
    arrivalTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    tagNr: '6731',
    location: 'LR',
    bbDown: 'vj',
    bbLr: 'ld',
    bbOut: 'lg',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
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
    luggageId: '57ad64ab-93e9-4d0b-acb5-542d47bd19dc',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '209',
    name: 'Adèle',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description: 'Donec posuere metus vitae ipsum.',
    tagNr: '2077',
    location: 'LR',
    bbDown: 'pv',
    bbLr: 'yn',
    bbOut: 'ek',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e6961b2c-ee7b-4a4f-965e-1c5a50ba7d81',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '582',
    name: 'Noëlla',
    arrivalTime: null,
    bags: '1+1',
    description: 'Nulla tellus.',
    tagNr: '6833',
    location: 'LR',
    bbDown: 'lr',
    bbLr: 'ai',
    bbOut: 'cj',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
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
    luggageId: 'db822f51-edb0-4981-9474-d8f03c93af40',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '843',
    name: 'Mélanie',
    arrivalTime: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: 'Curabitur convallis.',
    tagNr: '5859',
    location: 'LR',
    bbDown: 'kk',
    bbLr: 'hb',
    bbOut: 'cq',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: '24974ddd-47ba-43fc-8c6f-7dcc26533aff',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '264',
    name: 'Léonie',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '1182',
    location: 'LR1',
    bbDown: 'jy',
    bbLr: 'mt',
    bbOut: 'zt',
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
    luggageId: '5ab6d45b-3eaf-4556-b25d-399adb4c5fa9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '710',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    description: null,
    tagNr: '7702',
    location: 'LR1',
    bbDown: null,
    bbLr: 'qa',
    bbOut: 'nh',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
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
    luggageId: 'f7b6ead8-2613-4735-a43f-d32d58120e3a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '228',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    description: 'Suspendisse potenti.',
    tagNr: '1127',
    location: 'LR',
    bbDown: null,
    bbLr: 'qc',
    bbOut: 'fn',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
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
    luggageId: '928a47c1-074c-499c-8f5f-efb26c8f8bb7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '291',
    name: 'Vénus',
    arrivalTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    description: null,
    tagNr: '9953',
    location: 'LR',
    bbDown: 'ya',
    bbLr: 'uk',
    bbOut: 'gu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f21148d8-d8d8-46ba-8bfa-8d6ab23cd7c6',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '662',
    name: 'Annotés',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    description: null,
    tagNr: '0490',
    location: 'LR',
    bbDown: 'oc',
    bbLr: 'vo',
    bbOut: 'pq',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: '536bc9f1-bf0e-422b-b322-973089a0e8b8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '917',
    name: 'Annotés',
    arrivalTime: null,
    bags: '0+5',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '7415',
    location: 'LR1',
    bbDown: null,
    bbLr: 'tc',
    bbOut: 'or',
    completedAt: new Date(
      new Date('2/11/2023').setHours(
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
    luggageId: '361ee896-7c2d-4b79-a039-171f06014d41',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '702',
    name: 'Garçon',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description: null,
    tagNr: '8791',
    location: 'LR1',
    bbDown: 'tp',
    bbLr: 'mp',
    bbOut: 'ji',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '40f0c348-fd59-4e53-81ef-7c58e51ce37d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '964',
    name: 'Lauréna',
    arrivalTime: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '5196',
    location: 'LR1',
    bbDown: 'oa',
    bbLr: 'uk',
    bbOut: 'ks',
    completedAt: new Date(
      new Date('1/15/2023').setHours(
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
    luggageId: '46d1ac4e-78c6-4a86-9e02-1c7a43e3dda5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '876',
    name: 'Mén',
    arrivalTime: new Date(
      new Date('2/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    description: null,
    tagNr: '8772',
    location: 'LR1',
    bbDown: 'nk',
    bbLr: 'km',
    bbOut: 'lx',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a11ae974-955c-4b3a-a640-336ea32d316e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '288',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: null,
    tagNr: '0043',
    location: 'LR1',
    bbDown: 'yy',
    bbLr: 'nr',
    bbOut: 'um',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'acc1df60-51d0-4596-b34d-73f638f72458',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '248',
    name: 'Dà',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '1557',
    location: 'LR1',
    bbDown: 'wy',
    bbLr: 'al',
    bbOut: 'bj',
    completedAt: new Date(
      new Date('1/25/2023').setHours(
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
    luggageId: 'a521b5af-3754-45d4-a828-372eae29527a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '359',
    name: 'Mélissandre',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '2773',
    location: 'LR',
    bbDown: null,
    bbLr: 'se',
    bbOut: 'qj',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: '57a355e1-8f31-4807-aa79-be851a1b4a16',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '525',
    name: 'Torbjörn',
    arrivalTime: null,
    bags: '3+5',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '3025',
    location: 'LR1',
    bbDown: 'ce',
    bbLr: 'lb',
    bbOut: 'if',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
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
    luggageId: '4bde642b-8eb6-4b58-a350-9361ee7c6f83',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '327',
    name: 'Angèle',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    description: 'Nunc rhoncus dui vel sem.',
    tagNr: '5664',
    location: 'LR',
    bbDown: 'oi',
    bbLr: 'if',
    bbOut: 'ag',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
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
    luggageId: '00d4c4e6-ca72-4fba-9c8f-479db9d0e68c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '895',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    description: null,
    tagNr: '5081',
    location: 'LR',
    bbDown: 'jj',
    bbLr: 'ec',
    bbOut: 'mp',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
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
    luggageId: '2d27fd40-e79e-4150-a9d3-a94c321d1505',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '275',
    name: 'Publicité',
    arrivalTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '4717',
    location: 'LR1',
    bbDown: null,
    bbLr: 'hj',
    bbOut: 'eq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '84d8f88a-1fde-4818-80c0-9beffa27cc1f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '331',
    name: 'Magdalène',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    description: 'Nunc nisl.',
    tagNr: '9087',
    location: 'LR1',
    bbDown: 'sr',
    bbLr: 'yp',
    bbOut: 'hg',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
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
    luggageId: '849eb0a3-ae46-4a32-ac0e-2e738c9c4260',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '726',
    name: 'Dafnée',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description: null,
    tagNr: '5190',
    location: 'LR1',
    bbDown: null,
    bbLr: 'cx',
    bbOut: 'fv',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: '2946b359-3700-4cb5-a4d0-3dfbe25a3d0a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '925',
    name: 'Gaëlle',
    arrivalTime: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    description: null,
    tagNr: '1428',
    location: 'LR',
    bbDown: 'kc',
    bbLr: 'wb',
    bbOut: 'wd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3d137032-e76f-4a6a-b82d-e13206e1ef75',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '901',
    name: 'Gösta',
    arrivalTime: null,
    bags: '7+6',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    tagNr: '0639',
    location: 'LR',
    bbDown: null,
    bbLr: 'hv',
    bbOut: 'ly',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
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
    luggageId: 'fbab0fd3-03b3-48eb-acaf-3f64cd8b9e7e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '809',
    name: 'Cécile',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: 'Vestibulum rutrum rutrum neque.',
    tagNr: '6770',
    location: 'LR',
    bbDown: 'gi',
    bbLr: 'mw',
    bbOut: 'pd',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
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
    luggageId: '8c63babd-70b7-4754-b927-7f3053b426e5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '808',
    name: 'Lóng',
    arrivalTime: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '4235',
    location: 'LR',
    bbDown: 'qm',
    bbLr: 'je',
    bbOut: 'cs',
    completedAt: new Date(
      new Date('2/16/2023').setHours(
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
    luggageId: 'e70841db-3372-4450-b9c3-88fdd804cbed',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '577',
    name: 'Océanne',
    arrivalTime: null,
    bags: '4+1',
    description: 'Pellentesque ultrices mattis odio.',
    tagNr: '4448',
    location: 'LR1',
    bbDown: null,
    bbLr: 'hf',
    bbOut: 'bo',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
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
    luggageId: 'ceb8e7ce-3ea9-4576-b511-abc678e8242e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '426',
    name: 'Maï',
    arrivalTime: null,
    bags: '0+8',
    description: null,
    tagNr: '7253',
    location: 'LR',
    bbDown: 'ex',
    bbLr: 'zb',
    bbOut: 'lj',
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
    luggageId: '675dcb70-8db9-4825-b8a7-c8b076b66474',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '944',
    name: 'Dafnée',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    description: 'Fusce posuere felis sed lacus.',
    tagNr: '1023',
    location: 'LR',
    bbDown: 'qy',
    bbLr: 'tb',
    bbOut: 'um',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: '8afc250a-32f2-4378-8e59-946dd21f24f8',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '353',
    name: 'Adélaïde',
    arrivalTime: new Date(
      new Date('2/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: 'Donec posuere metus vitae ipsum.',
    tagNr: '3753',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xl',
    bbOut: 'tq',
    completedAt: new Date(
      new Date('2/24/2023').setHours(
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
    luggageId: 'a43ab7ce-4b17-47c2-adc3-5200e4ca5b31',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '639',
    name: 'Aloïs',
    arrivalTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: null,
    tagNr: '4691',
    location: 'LR1',
    bbDown: null,
    bbLr: 'hd',
    bbOut: 'qx',
    completedAt: new Date(
      new Date('2/8/2023').setHours(
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
    luggageId: '58a906b8-14bd-48f4-9eb1-b9edb5c2d3d8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '721',
    name: 'Märta',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description: 'Phasellus in felis.',
    tagNr: '2040',
    location: 'LR',
    bbDown: 'ap',
    bbLr: 'ba',
    bbOut: 'ez',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: 'c80df26a-48d5-4462-bbde-f87f498b00d4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '581',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    description: 'Pellentesque eget nunc.',
    tagNr: '4745',
    location: 'LR1',
    bbDown: 'lj',
    bbLr: 'jz',
    bbOut: 'bu',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9b8c9f76-66e8-4d3c-bd70-33178869a5e2',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '317',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: null,
    tagNr: '5684',
    location: 'LR1',
    bbDown: 'vq',
    bbLr: 'wx',
    bbOut: 'pk',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
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
    luggageId: '2f73085e-13d4-47fb-bbf4-ee12d4d05410',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '493',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    description: null,
    tagNr: '0261',
    location: 'LR',
    bbDown: 'lx',
    bbLr: 'uh',
    bbOut: 'ku',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: 'ce3fd051-4ea6-48d8-8707-35276c155cae',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '549',
    name: 'Nadège',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    description: 'Nunc rhoncus dui vel sem.',
    tagNr: '3181',
    location: 'LR',
    bbDown: 'ix',
    bbLr: 'yo',
    bbOut: 'xi',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3cbbd9db-6654-48cc-85ad-ce8c8b6545ae',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '311',
    name: 'Mahélie',
    arrivalTime: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    description: null,
    tagNr: '3046',
    location: 'LR',
    bbDown: 'nc',
    bbLr: 'wf',
    bbOut: 'wv',
    completedAt: new Date(
      new Date('1/30/2023').setHours(
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
    luggageId: '6fd2916b-0e57-4c88-9286-519e13b965f9',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '414',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '7014',
    location: 'LR',
    bbDown: 'me',
    bbLr: 'ut',
    bbOut: 'yf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e59b048e-bb96-46d8-b1d2-fbbc4a0b0543',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '927',
    name: 'Mélinda',
    arrivalTime: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '4980',
    location: 'LR1',
    bbDown: 'xl',
    bbLr: 'zb',
    bbOut: 'dr',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: '89409cdc-1ea2-4934-9544-4cedeb71bcc5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '505',
    name: 'Valérie',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    description: null,
    tagNr: '4927',
    location: 'LR',
    bbDown: 'bw',
    bbLr: 'gk',
    bbOut: 'ja',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '35e5d5a3-63ad-43c8-8889-310ffaaf3af7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '326',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    description: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '0281',
    location: 'LR',
    bbDown: 'za',
    bbLr: 'lx',
    bbOut: 'px',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0914268a-9005-4570-a0aa-8af58b92f9b7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '504',
    name: 'Clélia',
    arrivalTime: new Date(
      new Date('2/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: null,
    tagNr: '1209',
    location: 'LR',
    bbDown: 'xy',
    bbLr: 'xw',
    bbOut: 'zk',
    completedAt: new Date(
      new Date('3/1/2023').setHours(
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
    luggageId: '1248b4be-ebd2-462a-be79-22bc50b6fdb4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '123',
    name: 'Marie-françoise',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    description: 'Nulla tellus.',
    tagNr: '3847',
    location: 'LR1',
    bbDown: 'of',
    bbLr: 'kp',
    bbOut: 'wz',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
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
    luggageId: '90d044fc-1269-424d-b0b6-8c4e024b72fd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '892',
    name: 'Rébecca',
    arrivalTime: null,
    bags: '7+1',
    description: null,
    tagNr: '4289',
    location: 'LR1',
    bbDown: 'fg',
    bbLr: 'yw',
    bbOut: 'ku',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '37c22e10-afca-4003-95c7-1af2c7e7cdbf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '616',
    name: 'Josée',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    description: 'Nulla suscipit ligula in lacus.',
    tagNr: '0171',
    location: 'LR',
    bbDown: 'jy',
    bbLr: 'yz',
    bbOut: 'wx',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
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
    luggageId: '4d52643e-07ba-4d37-86a7-d0b085a3f113',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '969',
    name: 'Célestine',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    description: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '3651',
    location: 'LR',
    bbDown: 'tf',
    bbLr: 'sc',
    bbOut: 'wr',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
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
    luggageId: '58606922-13b5-40f4-939e-fb9722fe5cdd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '749',
    name: 'Bérengère',
    arrivalTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: 'Nulla facilisi.',
    tagNr: '5671',
    location: 'LR1',
    bbDown: 'vn',
    bbLr: 'gm',
    bbOut: 'zr',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
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
    luggageId: '5b2ff624-3d3d-4a3a-95b7-aa0e79b2d36f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '154',
    name: 'Méthode',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    tagNr: '3094',
    location: 'LR1',
    bbDown: 'nt',
    bbLr: 'pk',
    bbOut: 'es',
    completedAt: new Date(
      new Date('1/29/2023').setHours(
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
    luggageId: '21abfb17-dbf8-445e-b61c-a6a40cf128e2',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '693',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: 'Integer ac leo.',
    tagNr: '6283',
    location: 'LR1',
    bbDown: 'lf',
    bbLr: 'bw',
    bbOut: 'jw',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
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
    luggageId: '52aba9a9-7501-4351-90cd-f0ec34bf6afd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '699',
    name: 'Cécile',
    arrivalTime: null,
    bags: '4+2',
    description: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '3047',
    location: 'LR',
    bbDown: 'tv',
    bbLr: 'xt',
    bbOut: 'te',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
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
    luggageId: 'd7afdc45-6f41-4d01-9e06-1a9870d0e4b8',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '505',
    name: 'Aimée',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: 'Nulla mollis molestie lorem.',
    tagNr: '3408',
    location: 'LR1',
    bbDown: 'tz',
    bbLr: 'hr',
    bbOut: 'pt',
    completedAt: new Date(
      new Date('12/6/2022').setHours(
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
    luggageId: '1614a2d5-5d3c-4736-8528-d27ff3cdae58',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '710',
    name: 'Valérie',
    arrivalTime: null,
    bags: '0+1',
    description: null,
    tagNr: '7433',
    location: 'LR',
    bbDown: 'zm',
    bbLr: 'tl',
    bbOut: 'hy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cd24a20c-07ce-4fe1-82aa-52b2db34a6f9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '945',
    name: 'Zoé',
    arrivalTime: null,
    bags: '4+1',
    description: 'Integer tincidunt ante vel ipsum.',
    tagNr: '1804',
    location: 'LR1',
    bbDown: 'os',
    bbLr: 'cj',
    bbOut: 'gp',
    completedAt: new Date(
      new Date('3/4/2023').setHours(
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
    luggageId: '74767e72-500b-42ba-9331-52d3efa9d340',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '696',
    name: 'Mahélie',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    description: 'Nulla tempus.',
    tagNr: '1337',
    location: 'LR1',
    bbDown: 'rw',
    bbLr: 'cm',
    bbOut: 'ny',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
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
    luggageId: '7e13d20d-d9c9-4ca2-b16a-fba271362b0d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '598',
    name: 'Eliès',
    arrivalTime: null,
    bags: '4+6',
    description: null,
    tagNr: '3102',
    location: 'LR1',
    bbDown: 'zr',
    bbLr: 'ns',
    bbOut: 'vt',
    completedAt: new Date(
      new Date('2/13/2023').setHours(
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
    luggageId: '368e23ab-620f-4c1c-812d-72eee1762fee',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '697',
    name: 'Jú',
    arrivalTime: null,
    bags: '5+1',
    description: 'Donec posuere metus vitae ipsum.',
    tagNr: '4931',
    location: 'LR',
    bbDown: 'zk',
    bbLr: 'sk',
    bbOut: 'zi',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '40d6dd04-8911-43ac-954a-bf78c01a6940',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '858',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    description: null,
    tagNr: '9332',
    location: 'LR',
    bbDown: 'io',
    bbLr: 'bk',
    bbOut: 'gv',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7558db31-50d4-47db-937b-e52d8158c6e2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '445',
    name: 'Aurélie',
    arrivalTime: null,
    bags: '8+4',
    description: null,
    tagNr: '5843',
    location: 'LR1',
    bbDown: 'pi',
    bbLr: 'nv',
    bbOut: 'cy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd77474ad-c5b2-49cf-b0b5-7b0fe2ff6571',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '336',
    name: 'Gösta',
    arrivalTime: null,
    bags: '9+6',
    description: null,
    tagNr: '6486',
    location: 'LR1',
    bbDown: 'qq',
    bbLr: 'hg',
    bbOut: 'np',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
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
    luggageId: '1c8021a0-7c17-4e68-9f3a-488f8beb43f4',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '666',
    name: 'Géraldine',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    description: 'Curabitur convallis.',
    tagNr: '0678',
    location: 'LR1',
    bbDown: 'ig',
    bbLr: 'sa',
    bbOut: 'jf',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: 'c6f10bdb-5ab0-451a-9545-04726099fe14',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '696',
    name: 'Lèi',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    description: 'Nam nulla.',
    tagNr: '1484',
    location: 'LR',
    bbDown: null,
    bbLr: 'ek',
    bbOut: 'yt',
    completedAt: new Date(
      new Date('12/6/2022').setHours(
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
    luggageId: '676d0df5-cfb7-4824-bee7-d5baf6f4c69a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '677',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Morbi porttitor lorem id ligula.',
    tagNr: '9391',
    location: 'LR',
    bbDown: 'yu',
    bbLr: 'ul',
    bbOut: 'mp',
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
    luggageId: '00f522ae-79e0-4e04-9e70-b5cc1074449a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '722',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    description: 'Etiam pretium iaculis justo.',
    tagNr: '8063',
    location: 'LR',
    bbDown: 'no',
    bbLr: 'vb',
    bbOut: 'ln',
    completedAt: new Date(
      new Date('2/8/2023').setHours(
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
    luggageId: 'eb637596-0388-4471-86f7-d5e7ba711bf8',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '294',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    description: null,
    tagNr: '4694',
    location: 'LR',
    bbDown: 'uf',
    bbLr: 'li',
    bbOut: 'rd',
    completedAt: new Date(
      new Date('12/8/2022').setHours(
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
    luggageId: 'b2a9731a-b52f-43b4-af61-3f9b47c01d76',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '027',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: null,
    tagNr: '5494',
    location: 'LR',
    bbDown: 'hg',
    bbLr: 'mf',
    bbOut: 'fr',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: '3156031a-eec6-4f76-b777-891fdfeefc48',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '532',
    name: 'Fèi',
    arrivalTime: null,
    bags: '7+3',
    description: 'Etiam vel augue.',
    tagNr: '9287',
    location: 'LR',
    bbDown: null,
    bbLr: 'qb',
    bbOut: 'mt',
    completedAt: new Date(
      new Date('3/3/2023').setHours(
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
    luggageId: 'afcc6dad-1c91-4665-853e-365a5aa9839e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '003',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    description: 'Donec dapibus.',
    tagNr: '7083',
    location: 'LR',
    bbDown: 'rk',
    bbLr: 'jo',
    bbOut: 'oq',
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
    luggageId: 'f018afdd-9837-437f-856f-cdd217294a7e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '290',
    name: 'Loïca',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    description: null,
    tagNr: '5545',
    location: 'LR',
    bbDown: null,
    bbLr: 'oo',
    bbOut: 'iw',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: '5f4f9e23-3a11-4bdb-be1e-19f2ce89ec2d',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '890',
    name: 'Cunégonde',
    arrivalTime: null,
    bags: '6+9',
    description: 'Pellentesque ultrices mattis odio.',
    tagNr: '7825',
    location: 'LR1',
    bbDown: 'hq',
    bbLr: 'lq',
    bbOut: 'nw',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
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
    luggageId: 'a2569c85-136a-4878-a2d4-60d237b2b67a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '732',
    name: 'Joséphine',
    arrivalTime: null,
    bags: '5+5',
    description: 'Praesent lectus.',
    tagNr: '2861',
    location: 'LR',
    bbDown: 'mh',
    bbLr: 'kb',
    bbOut: 'or',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '42bd8af1-ad6c-4399-835a-d382fd44bfcf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '791',
    name: 'Tú',
    arrivalTime: null,
    bags: '6+1',
    description: 'Ut tellus.',
    tagNr: '2513',
    location: 'LR1',
    bbDown: 'je',
    bbLr: 'ju',
    bbOut: 'ze',
    completedAt: new Date(
      new Date('2/23/2023').setHours(
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
    luggageId: 'c1b246c5-746e-456a-b76b-28e4003c2ad3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '728',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    description: 'Pellentesque eget nunc.',
    tagNr: '5324',
    location: 'LR',
    bbDown: 'qp',
    bbLr: 'zh',
    bbOut: 'gl',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
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
    luggageId: 'e9fb5d43-72ef-4c6f-b27d-7c968e50b98a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '786',
    name: 'Lyséa',
    arrivalTime: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '2807',
    location: 'LR1',
    bbDown: 'uq',
    bbLr: 'wt',
    bbOut: 'ie',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '98862a18-4f70-4f47-8d99-7b77dd58f5b1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '468',
    name: 'Frédérique',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    description: 'Nullam molestie nibh in lectus.',
    tagNr: '3145',
    location: 'LR1',
    bbDown: 'kp',
    bbLr: 'vg',
    bbOut: 'wd',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f19a91fa-ed2b-497e-a444-9a50675d8170',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '279',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    tagNr: '4962',
    location: 'LR1',
    bbDown: 'eg',
    bbLr: 'qy',
    bbOut: 'ry',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
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
    luggageId: '6915581b-cc37-46b4-b251-ee88d5bfdad6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '642',
    name: 'Mégane',
    arrivalTime: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    description: 'Duis consequat dui nec nisi volutpat eleifend.',
    tagNr: '7284',
    location: 'LR1',
    bbDown: 'ns',
    bbLr: 'nr',
    bbOut: 'ng',
    completedAt: new Date(
      new Date('11/8/2022').setHours(
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
    luggageId: '16172487-5a32-4dbd-a793-58545242f15c',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '249',
    name: 'Táng',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    description: null,
    tagNr: '1006',
    location: 'LR1',
    bbDown: 'dl',
    bbLr: 'qn',
    bbOut: 'rv',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
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
    luggageId: '56c02a87-7463-40b0-8d76-f4f9a58c61d4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '746',
    name: 'Eloïse',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    description: 'Quisque porta volutpat erat.',
    tagNr: '8320',
    location: 'LR1',
    bbDown: 'dm',
    bbLr: 'mb',
    bbOut: 'rc',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: '55c7402f-dfa1-4eb0-8543-7f6079f9aec6',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '764',
    name: 'Ophélie',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    description: 'Praesent blandit.',
    tagNr: '4185',
    location: 'LR1',
    bbDown: 'bd',
    bbLr: 'wb',
    bbOut: 'lp',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b1d62537-bc90-40d2-bc46-a566656db0f1',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '638',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    description: null,
    tagNr: '4426',
    location: 'LR1',
    bbDown: 'az',
    bbLr: 'uf',
    bbOut: 'pu',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: '174fc597-8241-437a-a9f2-a2a40d2475dd',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '404',
    name: 'Nélie',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    description: 'Donec ut dolor.',
    tagNr: '6372',
    location: 'LR1',
    bbDown: 'hz',
    bbLr: 'st',
    bbOut: 'gj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '26bd2b1e-0f26-4980-a13a-c315b2b09c12',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '388',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: null,
    tagNr: '2336',
    location: 'LR1',
    bbDown: 'nc',
    bbLr: 'hj',
    bbOut: 'ac',
    completedAt: new Date(
      new Date('1/27/2023').setHours(
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
    luggageId: 'dec19ad7-65fe-483b-a39c-f420da854867',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '533',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    description: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    tagNr: '6341',
    location: 'LR1',
    bbDown: 'ua',
    bbLr: 'ye',
    bbOut: 'id',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4fab4003-92e4-4d9a-ba48-1f2f09aeaf66',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '671',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: 'Praesent blandit lacinia erat.',
    tagNr: '7358',
    location: 'LR',
    bbDown: null,
    bbLr: 'rg',
    bbOut: 'ae',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6c710f81-fa7d-4627-938c-1ac26a3f178f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '383',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description: null,
    tagNr: '6451',
    location: 'LR',
    bbDown: 'ew',
    bbLr: 'zd',
    bbOut: 'aq',
    completedAt: new Date(
      new Date('1/14/2023').setHours(
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
    luggageId: '30ddef12-ada8-466b-9a90-ad745080677f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '796',
    name: 'Gaïa',
    arrivalTime: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '0662',
    location: 'LR1',
    bbDown: 'by',
    bbLr: 'hj',
    bbOut: 'ie',
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
    luggageId: '8e347c73-4c5b-4dc9-9be9-87269ccaf994',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '512',
    name: 'Göran',
    arrivalTime: null,
    bags: '1+1',
    description: null,
    tagNr: '5890',
    location: 'LR1',
    bbDown: 'jq',
    bbLr: 'tx',
    bbOut: 'zb',
    completedAt: new Date(
      new Date('1/21/2023').setHours(
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
    luggageId: '68f36c8f-6fdb-4a0a-804c-5474867feb1e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '708',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description: 'Nulla suscipit ligula in lacus.',
    tagNr: '8610',
    location: 'LR1',
    bbDown: 'xm',
    bbLr: 'yc',
    bbOut: 'cb',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
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
    luggageId: '16ed25ed-06b3-42dc-862a-7ddede43aec7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '613',
    name: 'Maëly',
    arrivalTime: null,
    bags: '7+1',
    description: 'Nulla nisl.',
    tagNr: '5554',
    location: 'LR',
    bbDown: 'tl',
    bbLr: 'zm',
    bbOut: 'cu',
    completedAt: new Date(
      new Date('2/22/2023').setHours(
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
    luggageId: '9822a5e6-6e97-4cdf-a603-39ccb92bffea',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '082',
    name: 'Desirée',
    arrivalTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    description: 'Curabitur gravida nisi at nibh.',
    tagNr: '4893',
    location: 'LR',
    bbDown: 'xx',
    bbLr: 'gd',
    bbOut: 'rq',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
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
    luggageId: 'cb597c18-25b9-405a-9583-25919a2af84c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '351',
    name: 'Nadège',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: 'Vestibulum rutrum rutrum neque.',
    tagNr: '0570',
    location: 'LR1',
    bbDown: 'ey',
    bbLr: 'ck',
    bbOut: 'xc',
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
    luggageId: 'e80379db-9112-4d1d-b702-c3763ec1ea92',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '024',
    name: 'Edmée',
    arrivalTime: null,
    bags: '2+5',
    description: null,
    tagNr: '1414',
    location: 'LR',
    bbDown: 'rt',
    bbLr: 'vz',
    bbOut: 'ga',
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
    luggageId: 'a6e9ccb3-59f2-4f62-bc15-a1857f709540',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '441',
    name: 'Mégane',
    arrivalTime: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description: 'Aliquam non mauris.',
    tagNr: '9077',
    location: 'LR1',
    bbDown: 'ji',
    bbLr: 'yo',
    bbOut: 'da',
    completedAt: new Date(
      new Date('1/28/2023').setHours(
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
    luggageId: 'ed1507e8-f70b-4bfa-a3f9-4272c27f4995',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '877',
    name: 'Örjan',
    arrivalTime: null,
    bags: '3+5',
    description: 'Phasellus id sapien in sapien iaculis congue.',
    tagNr: '4383',
    location: 'LR',
    bbDown: 'jo',
    bbLr: 'sy',
    bbOut: 'fo',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
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
    luggageId: 'c412d56e-d48c-4912-8009-4f1f626470f3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '436',
    name: 'Sòng',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: null,
    tagNr: '4628',
    location: 'LR',
    bbDown: 'yy',
    bbLr: 'lo',
    bbOut: 'dp',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '432f3ee2-24f8-4484-9297-ea45d8afe54e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '093',
    name: 'Bérangère',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: 'Praesent lectus.',
    tagNr: '7104',
    location: 'LR1',
    bbDown: 'pc',
    bbLr: 'hp',
    bbOut: 'jk',
    completedAt: new Date(
      new Date('12/5/2022').setHours(
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
    luggageId: 'cee0fdb3-485c-450c-addf-3d2cac35d28b',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '533',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    description: null,
    tagNr: '5080',
    location: 'LR',
    bbDown: 'ax',
    bbLr: 'jd',
    bbOut: 'xd',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
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
    luggageId: '7f446222-19f0-45db-b84b-a9a4d170067c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '532',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    description: null,
    tagNr: '2337',
    location: 'LR',
    bbDown: 'hk',
    bbLr: 'fj',
    bbOut: 'ld',
    completedAt: new Date(
      new Date('2/25/2023').setHours(
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
    luggageId: 'f8b1fad3-2ad6-4df5-b882-9846fa722ef6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '290',
    name: 'Maïly',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    description: 'Suspendisse ornare consequat lectus.',
    tagNr: '5449',
    location: 'LR',
    bbDown: 'ud',
    bbLr: 'st',
    bbOut: 'xx',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
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
    luggageId: 'bfb2b479-6c3c-4606-b10f-e708b13e6b92',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '104',
    name: 'Marie-ève',
    arrivalTime: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    tagNr: '2192',
    location: 'LR',
    bbDown: 'sv',
    bbLr: 'lo',
    bbOut: 'go',
    completedAt: new Date(
      new Date('1/31/2023').setHours(
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
    luggageId: '17f34a55-eaae-4418-a5e7-d8d37e4dede8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '169',
    name: 'Cinéma',
    arrivalTime: null,
    bags: '4+9',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    tagNr: '1085',
    location: 'LR',
    bbDown: null,
    bbLr: 'ws',
    bbOut: 'an',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
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
    luggageId: '0ec40017-e48d-418e-b732-6f743f8a5a53',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '962',
    name: 'Audréanne',
    arrivalTime: new Date(
      new Date('2/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    description: 'Suspendisse potenti.',
    tagNr: '9361',
    location: 'LR1',
    bbDown: 'xc',
    bbLr: 'pu',
    bbOut: 'yc',
    completedAt: new Date(
      new Date('2/26/2023').setHours(
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
    luggageId: 'd8b1a930-7c7d-4909-96e5-7f9be6bd2b1b',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '213',
    name: 'Torbjörn',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    description: null,
    tagNr: '0856',
    location: 'LR1',
    bbDown: 'cj',
    bbLr: 'ac',
    bbOut: 'bn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1d87b09c-47ec-435c-b07e-63ccdc189f34',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '264',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('2/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: null,
    tagNr: '9375',
    location: 'LR1',
    bbDown: 'fg',
    bbLr: 'cb',
    bbOut: 'cq',
    completedAt: new Date(
      new Date('2/14/2023').setHours(
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
    luggageId: '9ed36cde-c211-40b7-9a06-95963925edea',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '156',
    name: 'Nuó',
    arrivalTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    description: 'Nulla ac enim.',
    tagNr: '3719',
    location: 'LR1',
    bbDown: 'mn',
    bbLr: 'eo',
    bbOut: 'wn',
    completedAt: new Date(
      new Date('2/20/2023').setHours(
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
    luggageId: '31daea29-5cce-4235-9b6c-73a1a65dfae9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '347',
    name: 'Méghane',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    description: 'Sed ante.',
    tagNr: '8857',
    location: 'LR1',
    bbDown: null,
    bbLr: 'sh',
    bbOut: 'ka',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: '73617624-d57a-420b-9993-330009003dc5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '262',
    name: 'Dà',
    arrivalTime: null,
    bags: '9+9',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '7839',
    location: 'LR1',
    bbDown: 'rd',
    bbLr: 'hc',
    bbOut: 'zh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8f1cac4f-41bf-4322-beec-22346da91b9d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '456',
    name: 'Maëlys',
    arrivalTime: null,
    bags: '6+6',
    description: null,
    tagNr: '7755',
    location: 'LR',
    bbDown: 'ce',
    bbLr: 'kl',
    bbOut: 'nn',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1f067cd6-f065-492b-9d4b-13234e16ea11',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '493',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    description: 'Integer ac neque.',
    tagNr: '7563',
    location: 'LR1',
    bbDown: 'et',
    bbLr: 'zn',
    bbOut: 'ex',
    completedAt: new Date(
      new Date('12/2/2022').setHours(
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
    luggageId: '6d5aa163-a4d2-4c87-a109-55846dae31c1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '881',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    description: 'Cras non velit nec nisi vulputate nonummy.',
    tagNr: '1247',
    location: 'LR',
    bbDown: null,
    bbLr: 'xq',
    bbOut: 'al',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
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
    luggageId: '875949c0-4422-48cc-9545-cb69e032e310',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '987',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    description: null,
    tagNr: '8305',
    location: 'LR',
    bbDown: null,
    bbLr: 'hq',
    bbOut: 'ot',
    completedAt: new Date(
      new Date('1/16/2023').setHours(
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
    luggageId: '370a941d-fef2-4878-a6b8-78404ee4aa84',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '603',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('2/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '2416',
    location: 'LR',
    bbDown: 'ui',
    bbLr: 'dx',
    bbOut: 'pz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7cedb094-3f71-4504-8415-f71fca25e20d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '462',
    name: 'Judicaël',
    arrivalTime: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    description: null,
    tagNr: '5397',
    location: 'LR1',
    bbDown: 'ub',
    bbLr: 'qu',
    bbOut: 'lw',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
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
    luggageId: '770cb590-864c-4547-9294-54b43ba9ef61',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '834',
    name: 'Åsa',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Duis at velit eu est congue elementum.',
    tagNr: '8380',
    location: 'LR',
    bbDown: 'qo',
    bbLr: 'zk',
    bbOut: 'es',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: 'b956f232-bcba-418a-8860-0bed67380efb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '972',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    description: null,
    tagNr: '7185',
    location: 'LR1',
    bbDown: 'wg',
    bbLr: 'gw',
    bbOut: 'ud',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
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
    luggageId: '4ed8e65b-3a65-4a4f-a3f5-b9ec86619e8e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '292',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    description: 'Fusce posuere felis sed lacus.',
    tagNr: '3232',
    location: 'LR1',
    bbDown: 'wg',
    bbLr: 'ti',
    bbOut: 'cd',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
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
    luggageId: 'a0acdb85-c93f-432c-b23c-e0fd4f348216',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '512',
    name: 'Mélodie',
    arrivalTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: 'Praesent id massa id nisl venenatis lacinia.',
    tagNr: '0732',
    location: 'LR',
    bbDown: 'il',
    bbLr: 'gm',
    bbOut: 'pp',
    completedAt: new Date(
      new Date('2/21/2023').setHours(
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
    luggageId: '6d11cbfa-a1aa-49cd-8863-2a7406436dce',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '265',
    name: 'Örjan',
    arrivalTime: null,
    bags: '9+8',
    description: 'Morbi porttitor lorem id ligula.',
    tagNr: '7669',
    location: 'LR1',
    bbDown: 'oo',
    bbLr: 'un',
    bbOut: 'oz',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: '0f33855b-86b7-4c3a-a368-591ed7ac1969',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '217',
    name: 'Anaïs',
    arrivalTime: null,
    bags: '8+2',
    description: null,
    tagNr: '7096',
    location: 'LR',
    bbDown: 'df',
    bbLr: 'gf',
    bbOut: 'lm',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3be0b0bc-52be-4e71-8a08-17da435493f3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '010',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '6542',
    location: 'LR1',
    bbDown: 'sc',
    bbLr: 'sq',
    bbOut: 'vj',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
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
    luggageId: '51cf88d4-7b91-4659-82bd-e009bd41c3ee',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '751',
    name: 'Gérald',
    arrivalTime: null,
    bags: '2+6',
    description: 'Proin risus.',
    tagNr: '4812',
    location: 'LR',
    bbDown: 'lw',
    bbLr: 'tu',
    bbOut: 'of',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
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
    luggageId: 'b8e10617-08ba-485b-a4d5-555bdc7bf099',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '603',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    description: null,
    tagNr: '5287',
    location: 'LR1',
    bbDown: 'qu',
    bbLr: 'ac',
    bbOut: 'rq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a935801e-f8dd-4ede-aa6e-9da0291da1f0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '036',
    name: 'Torbjörn',
    arrivalTime: null,
    bags: '4+5',
    description: null,
    tagNr: '5306',
    location: 'LR',
    bbDown: 'ox',
    bbLr: 'ob',
    bbOut: 'pa',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1b823103-2a95-41de-a329-7228b2d1fd7c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '987',
    name: 'Clélia',
    arrivalTime: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    description: 'Donec vitae nisi.',
    tagNr: '2413',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ks',
    bbOut: 'jl',
    completedAt: new Date(
      new Date('2/6/2023').setHours(
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
    luggageId: '916caf39-6fb2-48b7-8af8-9aa87aa7d293',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '538',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    description: 'Vestibulum rutrum rutrum neque.',
    tagNr: '9631',
    location: 'LR1',
    bbDown: 'jk',
    bbLr: 'nc',
    bbOut: 'nu',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
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
    luggageId: '4c3f80c9-f5a6-460f-91ea-87bfb29f1f1a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '409',
    name: 'Eliès',
    arrivalTime: null,
    bags: '7+5',
    description: null,
    tagNr: '0989',
    location: 'LR',
    bbDown: 'bx',
    bbLr: 'by',
    bbOut: 'mw',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: 'a016d916-eebf-4206-84d3-63f27140fcb2',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '604',
    name: 'Sélène',
    arrivalTime: null,
    bags: '8+8',
    description: null,
    tagNr: '2732',
    location: 'LR',
    bbDown: 'ti',
    bbLr: 'xh',
    bbOut: 'lt',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '86b3f414-fc11-4705-9d16-3b5f3cd04d26',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '858',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    description: null,
    tagNr: '9247',
    location: 'LR1',
    bbDown: 'ps',
    bbLr: 'fu',
    bbOut: 'kx',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '16358aae-f42d-4b89-87b7-04a5b5dd107b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '027',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description: 'Nam tristique tortor eu pede.',
    tagNr: '2679',
    location: 'LR1',
    bbDown: 'hg',
    bbLr: 'vm',
    bbOut: 'ph',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '16d330cd-7a71-4d56-b9df-d256707b0367',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '415',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    description: null,
    tagNr: '3929',
    location: 'LR',
    bbDown: null,
    bbLr: 'cm',
    bbOut: 'ka',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd52ffb0e-4a03-4042-a7da-e1d55391bd13',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '095',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '2564',
    location: 'LR1',
    bbDown: 'yg',
    bbLr: 'fa',
    bbOut: 'ik',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8ff6e18f-9a6d-45c7-a816-ed01d5262e74',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '718',
    name: 'Pélagie',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    description: null,
    tagNr: '6237',
    location: 'LR1',
    bbDown: null,
    bbLr: 'cu',
    bbOut: 'sk',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: '11d45ff6-0cb5-455d-968a-c697616676a9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '593',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description: 'Donec posuere metus vitae ipsum.',
    tagNr: '9562',
    location: 'LR1',
    bbDown: 'uq',
    bbLr: 'un',
    bbOut: 'rq',
    completedAt: new Date(
      new Date('1/12/2023').setHours(
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
    luggageId: '5fb4f934-6e6f-472f-9327-eabbb2eb677d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '423',
    name: 'Edmée',
    arrivalTime: null,
    bags: '2+0',
    description: null,
    tagNr: '6898',
    location: 'LR1',
    bbDown: 'vq',
    bbLr: 'ic',
    bbOut: 'ji',
    completedAt: new Date(
      new Date('3/5/2023').setHours(
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
    luggageId: 'e9d68401-b417-4fc8-b26b-89ec2cf081a4',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '312',
    name: 'Zhì',
    arrivalTime: null,
    bags: '5+3',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '4868',
    location: 'LR',
    bbDown: 'me',
    bbLr: 'qg',
    bbOut: 'gr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fe5aa2f2-15e4-4f25-928c-ec2577cc7dd3',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '752',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    description: null,
    tagNr: '4510',
    location: 'LR',
    bbDown: 'bx',
    bbLr: 'qi',
    bbOut: 'lt',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '642248e4-77c1-4ad2-b460-1fadc1970daa',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '793',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    description: null,
    tagNr: '4053',
    location: 'LR',
    bbDown: 'wd',
    bbLr: 'vk',
    bbOut: 'fl',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
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
    luggageId: '382368e8-76d1-4e80-a79e-c41adba5288f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '991',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description: 'Etiam vel augue.',
    tagNr: '9028',
    location: 'LR',
    bbDown: 'ow',
    bbLr: 'qv',
    bbOut: 'ln',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: '7bf9684f-6861-4024-8fa4-ed51afecd627',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '590',
    name: 'Mégane',
    arrivalTime: null,
    bags: '0+0',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '3971',
    location: 'LR1',
    bbDown: 'rp',
    bbLr: 'vv',
    bbOut: 'ml',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
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
    luggageId: '947e432b-729a-40c5-b6f9-1e45ae2762cc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '452',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    description: null,
    tagNr: '8943',
    location: 'LR1',
    bbDown: 'xi',
    bbLr: 'rk',
    bbOut: 'ij',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
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
    luggageId: '24480d3b-e77d-4187-bdc9-2550f81c9423',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '507',
    name: 'Publicité',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description: null,
    tagNr: '4454',
    location: 'LR1',
    bbDown: null,
    bbLr: 'sa',
    bbOut: 'lt',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '49c761d4-f80c-48fd-acef-29b3d7fe38bd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '568',
    name: 'Marylène',
    arrivalTime: null,
    bags: '1+1',
    description: 'Integer tincidunt ante vel ipsum.',
    tagNr: '7029',
    location: 'LR1',
    bbDown: 'zv',
    bbLr: 'gu',
    bbOut: 'wg',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
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
    luggageId: '6ec9a457-f6c9-4a9c-8b4c-c48125691bed',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '983',
    name: 'Félicie',
    arrivalTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    tagNr: '0911',
    location: 'LR',
    bbDown: 'jo',
    bbLr: 'mc',
    bbOut: 'rx',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
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
    luggageId: 'e7aa1ac5-bd78-40e2-af6d-2e341bb4b1e0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '700',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    description: 'Donec dapibus.',
    tagNr: '6601',
    location: 'LR1',
    bbDown: 'qt',
    bbLr: 'em',
    bbOut: 'op',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ae1a5404-92ed-4ea8-8049-9c9fcd0e4f69',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '683',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    description: 'Morbi a ipsum.',
    tagNr: '8597',
    location: 'LR1',
    bbDown: 'rw',
    bbLr: 'ft',
    bbOut: 'lg',
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
    luggageId: '08ed14f2-1206-4099-84cf-ea02447209d0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '318',
    name: 'Mà',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: null,
    tagNr: '1922',
    location: 'LR',
    bbDown: null,
    bbLr: 'eg',
    bbOut: 'rr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9771f92e-361e-466f-bd9c-afa2627635d9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '939',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('2/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    description: 'Vestibulum rutrum rutrum neque.',
    tagNr: '7000',
    location: 'LR1',
    bbDown: null,
    bbLr: 'lh',
    bbOut: 'yh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '492f3fec-c30c-45ed-9927-195c386166a9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '256',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    description: null,
    tagNr: '3432',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ov',
    bbOut: 'jg',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
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
    luggageId: 'a0d472d7-a4df-4483-86eb-82d6e0e77b10',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '028',
    name: 'Marie-ève',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: 'Duis bibendum.',
    tagNr: '0764',
    location: 'LR',
    bbDown: null,
    bbLr: 'zv',
    bbOut: 'ut',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '619d73c5-af69-4084-870d-0ed7bdc6d20a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '496',
    name: 'Dà',
    arrivalTime: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    tagNr: '7261',
    location: 'LR',
    bbDown: 'vz',
    bbLr: 'rp',
    bbOut: 'pf',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '24414850-c0bc-4ed9-87d8-4539bf4c88a2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '023',
    name: 'Gérald',
    arrivalTime: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    description: 'Duis bibendum.',
    tagNr: '5243',
    location: 'LR',
    bbDown: 'jw',
    bbLr: 'it',
    bbOut: 'vf',
    completedAt: new Date(
      new Date('1/7/2023').setHours(
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
    luggageId: '0806e122-3068-49a0-aad9-1a9ebd07da78',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '746',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '2190',
    location: 'LR1',
    bbDown: 'lf',
    bbLr: 'ce',
    bbOut: 'xq',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7643377d-8264-4d0c-95e9-ecfbcdc8cfab',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '432',
    name: 'Måns',
    arrivalTime: null,
    bags: '8+2',
    description: 'Nullam porttitor lacus at turpis.',
    tagNr: '3594',
    location: 'LR1',
    bbDown: 'vx',
    bbLr: 'zv',
    bbOut: 'xb',
    completedAt: new Date(
      new Date('2/26/2023').setHours(
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
    luggageId: 'ec3b4582-6215-447f-bd57-81fa8e720fce',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '716',
    name: 'Cécilia',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    description: null,
    tagNr: '7485',
    location: 'LR1',
    bbDown: 'ek',
    bbLr: 'gz',
    bbOut: 'vb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '34a273da-004e-4139-8b7f-93fc51e05a60',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '984',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    tagNr: '3188',
    location: 'LR1',
    bbDown: 'vz',
    bbLr: 'nk',
    bbOut: 'zy',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f4abf10b-4818-47e8-b8c1-c20f09a894b6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '468',
    name: 'Bécassine',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    tagNr: '8910',
    location: 'LR1',
    bbDown: 'dd',
    bbLr: 'vr',
    bbOut: 'cp',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f07790a8-47f9-48a8-81ff-6732f8705041',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '372',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    tagNr: '7687',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ol',
    bbOut: 'ff',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '48eda010-baf1-4c7c-9c80-df24b05f741e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '357',
    name: 'Eléonore',
    arrivalTime: new Date(
      new Date('2/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    description: null,
    tagNr: '2339',
    location: 'LR1',
    bbDown: null,
    bbLr: 'kb',
    bbOut: 'dw',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '45f66c6c-7956-4ef3-9d69-3a184b6ae84e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '393',
    name: 'Dà',
    arrivalTime: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    description: null,
    tagNr: '0955',
    location: 'LR',
    bbDown: 'nn',
    bbLr: 'dc',
    bbOut: 'zq',
    completedAt: new Date(
      new Date('1/10/2023').setHours(
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
    luggageId: 'c821baae-20ea-440a-b43f-facf2306c1f6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '179',
    name: 'Yú',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description: null,
    tagNr: '6721',
    location: 'LR',
    bbDown: 'fq',
    bbLr: 'ba',
    bbOut: 'vg',
    completedAt: new Date(
      new Date('12/3/2022').setHours(
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
    luggageId: 'c556575b-32bb-4869-bd46-88c2e35a521d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '760',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    tagNr: '6383',
    location: 'LR',
    bbDown: 'se',
    bbLr: 'tt',
    bbOut: 'ub',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b32efbbe-47f6-496a-8283-622a9d7b66bd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '335',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    description: null,
    tagNr: '6708',
    location: 'LR1',
    bbDown: 'ds',
    bbLr: 'tz',
    bbOut: 'jz',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '03aede30-c454-4a1a-8c31-a975c4c89358',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '590',
    name: 'Eléa',
    arrivalTime: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    description: null,
    tagNr: '7385',
    location: 'LR1',
    bbDown: 'up',
    bbLr: 'im',
    bbOut: 'cb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7f169c16-b304-41af-8f63-270b341642f4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '101',
    name: 'Marie-françoise',
    arrivalTime: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    description: null,
    tagNr: '6845',
    location: 'LR',
    bbDown: 'nx',
    bbLr: 'gf',
    bbOut: 'au',
    completedAt: new Date(
      new Date('1/18/2023').setHours(
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
    luggageId: '89c74bbc-a7c7-4c78-a4c7-98bc0a2a10e4',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '880',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: 'Maecenas pulvinar lobortis est.',
    tagNr: '2637',
    location: 'LR',
    bbDown: 'fp',
    bbLr: 'iu',
    bbOut: 'zf',
    completedAt: new Date(
      new Date('1/3/2023').setHours(
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
    luggageId: '4d400aa5-ab05-49e6-8859-563faeef0e10',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '147',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '4049',
    location: 'LR',
    bbDown: 'vb',
    bbLr: 'nu',
    bbOut: 'yx',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: '9aaba9c9-183c-426e-9aca-a8f8ce35ab2d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '610',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('2/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    description: null,
    tagNr: '3119',
    location: 'LR1',
    bbDown: null,
    bbLr: 'gv',
    bbOut: 'uj',
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
    luggageId: '2286416e-746d-4309-bd36-9f896794f875',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '102',
    name: 'Eloïse',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    description: 'Aliquam non mauris.',
    tagNr: '0435',
    location: 'LR',
    bbDown: null,
    bbLr: 'gg',
    bbOut: 'uu',
    completedAt: new Date(
      new Date('1/4/2023').setHours(
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
    luggageId: 'adb20a43-52bc-49dd-bcdf-7b46185948a7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '043',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    tagNr: '5749',
    location: 'LR',
    bbDown: null,
    bbLr: 'tm',
    bbOut: 'xr',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('2/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'af32d7c0-32cc-4380-b42d-c07e96ea7609',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '757',
    name: 'Naéva',
    arrivalTime: new Date(
      new Date('2/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    description: null,
    tagNr: '2561',
    location: 'LR',
    bbDown: 'mi',
    bbLr: 'rd',
    bbOut: 'nh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c2a24dba-fc99-417b-b142-7af0a88983d8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '098',
    name: 'Méng',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    description: null,
    tagNr: '2992',
    location: 'LR',
    bbDown: 'qy',
    bbLr: 'bs',
    bbOut: 'xa',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '213d563a-d6e9-4416-a107-6aa8cace64e4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '616',
    name: 'Sòng',
    arrivalTime: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '4001',
    location: 'LR1',
    bbDown: 'uy',
    bbLr: 'if',
    bbOut: 'br',
    completedAt: new Date(
      new Date('1/8/2023').setHours(
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
    luggageId: 'afd4bd9f-55a9-407a-b48b-e78fbfcd57b5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '492',
    name: 'Mén',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    description: null,
    tagNr: '3072',
    location: 'LR',
    bbDown: 'qe',
    bbLr: 'cp',
    bbOut: 'cf',
    completedAt: new Date(
      new Date('1/6/2023').setHours(
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
    luggageId: '8b96358f-7ed4-4234-a4ac-e3aee9f86f4e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '186',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    description: null,
    tagNr: '5126',
    location: 'LR',
    bbDown: 'rg',
    bbLr: 'xj',
    bbOut: 'cw',
    completedAt: new Date(
      new Date('2/2/2023').setHours(
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
    luggageId: 'b17af22a-5536-4f28-adc9-b4c5fdd0f9af',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '785',
    name: 'Bérénice',
    arrivalTime: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: null,
    tagNr: '1602',
    location: 'LR',
    bbDown: null,
    bbLr: 'nn',
    bbOut: 'uj',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5d6c73b3-94ac-48db-a5db-02f139b96f65',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '630',
    name: 'Eléonore',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    tagNr: '4200',
    location: 'LR',
    bbDown: 'bs',
    bbLr: 'ac',
    bbOut: 'by',
    completedAt: new Date(
      new Date('1/2/2023').setHours(
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
    luggageId: '9ff43857-d02e-40aa-9696-5589d1cff42f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '244',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '6439',
    location: 'LR',
    bbDown: null,
    bbLr: 'je',
    bbOut: 'gb',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1dc43c0c-7044-4183-9ae3-07053d0370f6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '733',
    name: 'Valérie',
    arrivalTime: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    description: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '8804',
    location: 'LR',
    bbDown: null,
    bbLr: 'lm',
    bbOut: 'if',
    completedAt: new Date(
      new Date('2/4/2023').setHours(
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
    luggageId: '4b7569b4-f89e-473a-9098-166d7d6a6ca8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '284',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('2/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    description: 'Morbi non lectus.',
    tagNr: '3935',
    location: 'LR',
    bbDown: null,
    bbLr: 'xq',
    bbOut: 'wr',
    completedAt: new Date(
      new Date('3/6/2023').setHours(
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
    luggageId: '86024da5-a841-4a62-8df8-36214996980c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '268',
    name: 'Naéva',
    arrivalTime: null,
    bags: '2+1',
    description: null,
    tagNr: '4992',
    location: 'LR1',
    bbDown: 'nk',
    bbLr: 'xi',
    bbOut: 'ri',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '137b53c4-2ff4-40ae-bda5-fa5049983a4a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '081',
    name: 'Léonie',
    arrivalTime: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    description: 'Integer a nibh.',
    tagNr: '5634',
    location: 'LR1',
    bbDown: 'mb',
    bbLr: 'bm',
    bbOut: 'zc',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
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
    luggageId: '9c5c0fcd-b040-4f21-864a-a78abf1ae1b6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '292',
    name: 'Miléna',
    arrivalTime: null,
    bags: '4+5',
    description: 'Nulla tempus.',
    tagNr: '5350',
    location: 'LR1',
    bbDown: 'mo',
    bbLr: 'nc',
    bbOut: 'qd',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
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
    luggageId: '4ed54a98-2c1f-43d2-acec-8076fdc80783',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '113',
    name: 'Crééz',
    arrivalTime: null,
    bags: '8+7',
    description: null,
    tagNr: '4461',
    location: 'LR',
    bbDown: 'sd',
    bbLr: 'wp',
    bbOut: 'uh',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '65d73705-51c6-4069-803f-173490d3ddce',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '621',
    name: 'Léonie',
    arrivalTime: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    description: null,
    tagNr: '1614',
    location: 'LR1',
    bbDown: null,
    bbLr: 'lb',
    bbOut: 'sp',
    completedAt: new Date(
      new Date('2/3/2023').setHours(
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
    luggageId: 'd3196f08-0884-43b7-b440-9f0cd22bcfd8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '031',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '0938',
    location: 'LR1',
    bbDown: 'am',
    bbLr: 'yg',
    bbOut: 'ux',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
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
    luggageId: '18f39554-2370-4de2-8368-e1afc5973623',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '248',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    description: 'In hac habitasse platea dictumst.',
    tagNr: '6331',
    location: 'LR1',
    bbDown: 'fw',
    bbLr: 'wp',
    bbOut: 'sc',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '959ebfc7-5e07-44e3-8d35-b80ebaf42ac6',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '028',
    name: 'Océanne',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    description: 'Donec ut dolor.',
    tagNr: '5378',
    location: 'LR',
    bbDown: null,
    bbLr: 'mj',
    bbOut: 'ec',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: '5be1e81a-6c11-49bc-9dcc-53da6bffec7f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '107',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    description: 'Praesent id massa id nisl venenatis lacinia.',
    tagNr: '0741',
    location: 'LR',
    bbDown: 'oj',
    bbLr: 'br',
    bbOut: 'yp',
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
    luggageId: 'ff65822c-ebe7-4101-aa66-a975404df685',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '413',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    description: 'Duis aliquam convallis nunc.',
    tagNr: '6581',
    location: 'LR',
    bbDown: 'gz',
    bbLr: 'fu',
    bbOut: 'ro',
    completedAt: null,
  },
  {
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2bc6fe6b-895c-4467-83a9-6eb63a60ffdf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '740',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    description: null,
    tagNr: '8012',
    location: 'LR',
    bbDown: 'fi',
    bbLr: 'hu',
    bbOut: 'mw',
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
];
