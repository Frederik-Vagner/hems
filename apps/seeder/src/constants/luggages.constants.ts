import { ILuggage, LuggageType } from '@hems/interfaces';

export const luggages: ILuggage[] = [
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '75a309c9-dba0-4244-b65d-e93962dc3d2d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '816',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '6012',
    location: 'LR',
    bbDown: 'vv',
    bbLr: 'rm',
    bbOut: 'bq',
    completedAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '58c2a2f2-8994-4237-80a5-bf6b6bc8d85f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '606',
    name: 'Annotés',
    arrivalTime: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '4888',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ay',
    bbOut: 'ps',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ed158e17-b229-4728-9701-09fb6cb45355',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '986',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: null,
    tagNr: '9562',
    location: 'LR',
    bbDown: 'os',
    bbLr: 'df',
    bbOut: 'wv',
    completedAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '809ac744-cd76-4e3e-aec5-65f3bbe9d5ad',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '199',
    name: 'Josée',
    arrivalTime: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    comments: null,
    tagNr: '2909',
    location: 'LR',
    bbDown: 'at',
    bbLr: 'kv',
    bbOut: 'ho',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8b9a8132-9eee-494d-8c47-4d77ae6dd76d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '754',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: null,
    tagNr: '5421',
    location: 'LR1',
    bbDown: 'qh',
    bbLr: 'up',
    bbOut: 'in',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/13/2022').setHours(
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
    luggageId: '19d7bea4-fb1d-4092-a59c-124fe3c21d4c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '847',
    name: 'Andrée',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments: null,
    tagNr: '2729',
    location: 'LR',
    bbDown: null,
    bbLr: 'sa',
    bbOut: 'vs',
    completedAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: 'ea4305ec-cc90-4153-ae1f-a45e428e4c5a',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '181',
    name: 'Anaïs',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: null,
    tagNr: '9791',
    location: 'LR1',
    bbDown: 'ar',
    bbLr: 'us',
    bbOut: 'mm',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
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
    luggageId: 'e7e27872-3773-41cc-b2ff-32dc735ab8f2',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '803',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '5132',
    location: 'LR1',
    bbDown: null,
    bbLr: 'pv',
    bbOut: 'lb',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6a40d079-8714-41e3-b051-792ccb37b5b5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '114',
    name: 'Clémence',
    arrivalTime: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    comments: null,
    tagNr: '2661',
    location: 'LR1',
    bbDown: 'oc',
    bbLr: 'fj',
    bbOut: 'vb',
    completedAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'af9b8f95-6dc0-4f3d-8955-edb1c5b9bcc4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '342',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    comments: 'Pellentesque ultrices mattis odio.',
    tagNr: '9263',
    location: 'LR',
    bbDown: 'sm',
    bbLr: 'qz',
    bbOut: 'ii',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '65cfec58-dee2-49e8-9aa3-63e7857ebdec',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '633',
    name: 'Eugénie',
    arrivalTime: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    comments: null,
    tagNr: '2030',
    location: 'LR',
    bbDown: 'mt',
    bbLr: 'au',
    bbOut: 'no',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4f3a94e7-3670-4c97-8eb8-7c534ce63c5e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '978',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: 'Aenean auctor gravida sem.',
    tagNr: '8685',
    location: 'LR1',
    bbDown: 'wz',
    bbLr: 'vq',
    bbOut: 'bi',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/30/2023').setHours(
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
    luggageId: '0cf45bb6-919b-4d31-aa42-0576b6564b62',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '937',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: null,
    tagNr: '0958',
    location: 'LR1',
    bbDown: null,
    bbLr: 'vj',
    bbOut: 'zm',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5ee8cdc0-01ff-4d43-9f8a-a206125abf14',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '140',
    name: 'Mélinda',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    comments: null,
    tagNr: '1963',
    location: 'LR1',
    bbDown: 'sg',
    bbLr: 'sd',
    bbOut: 'qg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0e1ae09e-cc86-4f62-b8ea-e091ad888ece',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '536',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    comments: null,
    tagNr: '0212',
    location: 'LR',
    bbDown: 'ro',
    bbLr: 'll',
    bbOut: 'pm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
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
    luggageId: '083d5ae4-894c-4d4d-92ba-71f7d40b595f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '517',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    comments: null,
    tagNr: '0045',
    location: 'LR1',
    bbDown: 'xk',
    bbLr: 'mf',
    bbOut: 'um',
    completedAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9241b075-5f67-4d5a-8cc9-df7677e1ee0c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '144',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    comments: null,
    tagNr: '3929',
    location: 'LR1',
    bbDown: 'ck',
    bbLr: 'mk',
    bbOut: 'hv',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
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
    luggageId: 'a3a141fd-76ba-4ac0-b88c-758b8ea34c9a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '809',
    name: 'Angèle',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: 'Nunc purus.',
    tagNr: '2425',
    location: 'LR1',
    bbDown: 'vu',
    bbLr: 'vm',
    bbOut: 'au',
    completedAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: '4cfd04de-bd23-41c4-adc1-0de7f6cd2021',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '655',
    name: 'Léane',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: 'Nulla ac enim.',
    tagNr: '9306',
    location: 'LR1',
    bbDown: null,
    bbLr: 'jc',
    bbOut: 'db',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '750b133f-dfd7-48a5-8bba-a94e25690bbe',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '624',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '6471',
    location: 'LR1',
    bbDown: null,
    bbLr: 'vy',
    bbOut: 'yz',
    completedAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fb1900a0-0525-480d-8037-37e6d41b0c44',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '989',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: 'Nullam porttitor lacus at turpis.',
    tagNr: '8426',
    location: 'LR',
    bbDown: 'ys',
    bbLr: 'yc',
    bbOut: 'iv',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
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
    luggageId: '87d9a23d-b6ed-4c9d-bdd7-b6ecd4c3afe3',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '965',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: null,
    tagNr: '9729',
    location: 'LR',
    bbDown: null,
    bbLr: 'jm',
    bbOut: 'pl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'addb4a71-01b2-491d-9aca-4a06240cf71e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '882',
    name: 'Almérinda',
    arrivalTime: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: 'Etiam vel augue.',
    tagNr: '5119',
    location: 'LR1',
    bbDown: 'uz',
    bbLr: 'ub',
    bbOut: 'pb',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8ab4a226-dc24-48ee-85ba-284341741fd3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '281',
    name: 'Clémence',
    arrivalTime: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    tagNr: '9345',
    location: 'LR',
    bbDown: 'jd',
    bbLr: 'qa',
    bbOut: 'od',
    completedAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fee3294a-4670-4663-be05-4365fbb22683',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '222',
    name: 'Anaé',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: 'Praesent blandit.',
    tagNr: '7361',
    location: 'LR1',
    bbDown: 'lr',
    bbLr: 'py',
    bbOut: 'fi',
    completedAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '981f7e9c-b513-487f-b44b-2364926107f8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '205',
    name: 'Bérengère',
    arrivalTime: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: null,
    tagNr: '6083',
    location: 'LR',
    bbDown: 'iv',
    bbLr: 'sm',
    bbOut: 'ua',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '86dcda48-f123-4f63-8a74-4c98c04cc4db',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '483',
    name: 'Stévina',
    arrivalTime: null,
    bags: '6+2',
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '2846',
    location: 'LR',
    bbDown: 'eh',
    bbLr: 'ew',
    bbOut: 'yi',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
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
    luggageId: '0ed277a1-1180-4d3a-9dad-e1ed20dfaa73',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '419',
    name: 'Salomé',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    comments: null,
    tagNr: '4928',
    location: 'LR',
    bbDown: 'pn',
    bbLr: 'fy',
    bbOut: 'kp',
    completedAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f696b934-5ce6-4ac4-b617-df62fe1c5710',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '285',
    name: 'Pélagie',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments: 'Fusce posuere felis sed lacus.',
    tagNr: '1210',
    location: 'LR',
    bbDown: 'uc',
    bbLr: 'eu',
    bbOut: 'lb',
    completedAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a72cc1c2-8d54-42e4-a560-f3b546a054c3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '305',
    name: 'Marie-thérèse',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: null,
    tagNr: '8934',
    location: 'LR1',
    bbDown: 'kh',
    bbLr: 'rf',
    bbOut: 'sz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/20/2022').setHours(
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
    luggageId: '126a56e1-1f5f-43b6-8101-5c57e1394bad',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '343',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: 'Nullam porttitor lacus at turpis.',
    tagNr: '4269',
    location: 'LR1',
    bbDown: 'ms',
    bbLr: 'sk',
    bbOut: 'db',
    completedAt: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '03196653-26fc-43a5-8f6b-f90bf921fc5f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '398',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '3571',
    location: 'LR',
    bbDown: 'wz',
    bbLr: 'pf',
    bbOut: 'iy',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
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
    luggageId: 'd80fa5bf-667f-4d8d-98b4-be73eeaaca9c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '634',
    name: 'Torbjörn',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments: null,
    tagNr: '6506',
    location: 'LR',
    bbDown: 'sh',
    bbLr: 'nx',
    bbOut: 'uk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3037dc0f-0e43-4eac-9d8b-054dc9dcf50a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '721',
    name: 'Ruò',
    arrivalTime: null,
    bags: '2+4',
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    tagNr: '0946',
    location: 'LR1',
    bbDown: null,
    bbLr: 'fp',
    bbOut: 'cl',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bc2c95a0-21dc-4e30-ad70-55b4f1306057',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '154',
    name: 'Clémence',
    arrivalTime: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments: 'Duis at velit eu est congue elementum.',
    tagNr: '8399',
    location: 'LR1',
    bbDown: null,
    bbLr: 'nf',
    bbOut: 'tp',
    completedAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/09/2023').setHours(
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
    luggageId: '61d848b7-a5f6-4fc1-94b3-5f10ea768b9f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '645',
    name: 'Mégane',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments: 'Etiam faucibus cursus urna.',
    tagNr: '5237',
    location: 'LR',
    bbDown: 'bb',
    bbLr: 'dk',
    bbOut: 'ir',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b5bb6bde-b248-4610-abd3-5c0527c26a45',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '593',
    name: 'Táng',
    arrivalTime: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: null,
    tagNr: '6994',
    location: 'LR1',
    bbDown: 'dx',
    bbLr: 'ue',
    bbOut: 'ym',
    completedAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0f280c6a-1a65-4ddc-8ac5-6791dee424a1',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '538',
    name: 'Cunégonde',
    arrivalTime: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '6880',
    location: 'LR',
    bbDown: 'iy',
    bbLr: 'xv',
    bbOut: 'mk',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e7ecdb4a-6991-42bc-9b23-206fd66df123',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '199',
    name: 'Crééz',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: 'In sagittis dui vel nisl.',
    tagNr: '2314',
    location: 'LR',
    bbDown: 'hi',
    bbLr: 'ib',
    bbOut: 'dx',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e544716e-2372-4c85-844e-f64f52b09a53',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '627',
    name: 'Estève',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '9012',
    location: 'LR',
    bbDown: 'ld',
    bbLr: 've',
    bbOut: 'hp',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
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
    luggageId: '619506a3-4d5e-4d2a-b97a-58cb2c5482d9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '811',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    comments: 'Maecenas pulvinar lobortis est.',
    tagNr: '7218',
    location: 'LR',
    bbDown: null,
    bbLr: 'df',
    bbOut: 'cn',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7f98049f-4f0e-49c5-8255-513aae3c06c6',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '113',
    name: 'Mà',
    arrivalTime: null,
    bags: '7+9',
    comments: 'Duis at velit eu est congue elementum.',
    tagNr: '0713',
    location: 'LR1',
    bbDown: 'ob',
    bbLr: 'vc',
    bbOut: 'po',
    completedAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ee7d779d-e0ca-4729-94a5-b0ce22c638ee',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '232',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments: 'Proin at turpis a pede posuere nonummy.',
    tagNr: '3642',
    location: 'LR1',
    bbDown: 'do',
    bbLr: 'tl',
    bbOut: 'hx',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/28/2023').setHours(
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
    luggageId: '96391607-fee0-4de2-ae04-f68a0c7805ec',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '137',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: null,
    tagNr: '9596',
    location: 'LR1',
    bbDown: null,
    bbLr: 'zj',
    bbOut: 'lf',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'eb62d47a-2a58-465c-a3ea-03e31a1a59b5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '817',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    comments: 'Vestibulum rutrum rutrum neque.',
    tagNr: '4662',
    location: 'LR',
    bbDown: 'lf',
    bbLr: 'ic',
    bbOut: 'er',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '929e3540-e628-47e4-bed0-aedf4aa21485',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '281',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    comments: null,
    tagNr: '7318',
    location: 'LR',
    bbDown: null,
    bbLr: 'qm',
    bbOut: 'ts',
    completedAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a97af906-810f-47bd-9f39-4855015f325b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '398',
    name: 'Håkan',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    comments: null,
    tagNr: '5038',
    location: 'LR',
    bbDown: 'yn',
    bbLr: 'rx',
    bbOut: 'cz',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/14/2022').setHours(
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
    luggageId: '641373c0-07de-42e9-8e66-3e8f9999f021',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '542',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '2777',
    location: 'LR',
    bbDown: null,
    bbLr: 'ho',
    bbOut: 'gc',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/19/2022').setHours(
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
    luggageId: 'b93eff0a-3946-421c-adec-9c2d5d88009a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '600',
    name: 'Léana',
    arrivalTime: null,
    bags: '4+1',
    comments: 'Integer non velit.',
    tagNr: '8275',
    location: 'LR1',
    bbDown: 'zq',
    bbLr: 'gg',
    bbOut: 'fc',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1655486c-dd62-4bb6-ab36-1db4c858362c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '508',
    name: 'Märta',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '6317',
    location: 'LR',
    bbDown: 'hn',
    bbLr: 'do',
    bbOut: 'kz',
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: 'c157a903-252f-48a6-922c-4db0a74e7753',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '713',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: null,
    tagNr: '3404',
    location: 'LR',
    bbDown: null,
    bbLr: 'zy',
    bbOut: 'wu',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b1922114-e8e7-4a48-85f2-cc15079aa34f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '792',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    comments: null,
    tagNr: '1645',
    location: 'LR',
    bbDown: 'mt',
    bbLr: 'md',
    bbOut: 'xo',
    completedAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bf691777-42f4-43c5-bed4-30360962a71e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '139',
    name: 'Maëly',
    arrivalTime: null,
    bags: '3+4',
    comments: null,
    tagNr: '6792',
    location: 'LR',
    bbDown: 'jf',
    bbLr: 'mj',
    bbOut: 'wi',
    completedAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4ebe7d62-6b85-48a3-97a4-811207e071b5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '349',
    name: 'Athéna',
    arrivalTime: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments: null,
    tagNr: '7304',
    location: 'LR1',
    bbDown: null,
    bbLr: 'eu',
    bbOut: 'ng',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/21/2023').setHours(
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
    luggageId: '61d04094-2ad1-4ca0-a9db-e8ea9cbd7890',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '736',
    name: 'Desirée',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '6879',
    location: 'LR',
    bbDown: 'ot',
    bbLr: 'ln',
    bbOut: 'yr',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8faef0c9-a7d2-4904-bbe0-41125fb1fd2e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '698',
    name: 'Mélinda',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    comments: null,
    tagNr: '3982',
    location: 'LR',
    bbDown: 'xv',
    bbLr: 'pi',
    bbOut: 'fv',
    completedAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5af2a70c-ba83-458e-9214-532236bc1e05',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '702',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: null,
    tagNr: '6313',
    location: 'LR',
    bbDown: 'fa',
    bbLr: 'ct',
    bbOut: 'dc',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
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
    luggageId: '5b02ee63-a3a5-43e2-b9fe-f084b677d472',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '326',
    name: 'Léonie',
    arrivalTime: null,
    bags: '2+7',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '4034',
    location: 'LR',
    bbDown: 'nd',
    bbLr: 'gy',
    bbOut: 'vz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '71597e4d-a9ad-4654-b732-723603d4a9d9',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '154',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    comments: null,
    tagNr: '4679',
    location: 'LR1',
    bbDown: 'mz',
    bbLr: 'ql',
    bbOut: 'dr',
    completedAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/18/2023').setHours(
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
    luggageId: '7ad9a669-688f-4980-8961-29549b8fcb7b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '607',
    name: 'Angélique',
    arrivalTime: null,
    bags: '2+1',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '0367',
    location: 'LR',
    bbDown: 'yc',
    bbLr: 'um',
    bbOut: 'xa',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
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
    luggageId: '3bed57d1-af08-40c9-ab9d-e6f32a7d267d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '259',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: 'Pellentesque viverra pede ac diam.',
    tagNr: '2670',
    location: 'LR1',
    bbDown: 'dk',
    bbLr: 'ie',
    bbOut: 'ra',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8694bef8-e2fe-47c0-a1c0-4fe29a598381',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '575',
    name: 'Aloïs',
    arrivalTime: null,
    bags: '3+9',
    comments: null,
    tagNr: '0341',
    location: 'LR',
    bbDown: 'dn',
    bbLr: 'mk',
    bbOut: 'ox',
    completedAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '24854356-e077-4bc4-9643-4d668d7f5a38',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '399',
    name: 'Bécassine',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: 'In blandit ultrices enim.',
    tagNr: '4226',
    location: 'LR1',
    bbDown: 'zv',
    bbLr: 'dt',
    bbOut: 'vq',
    completedAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f7d41ba8-7048-45a3-986c-44e569cc7fcd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '795',
    name: 'Yè',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: null,
    tagNr: '6019',
    location: 'LR1',
    bbDown: 'pa',
    bbLr: 'qg',
    bbOut: 'ye',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
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
    luggageId: 'fcbea607-ec14-432f-9b33-c08a88ee3863',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '938',
    name: 'Ruò',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: 'Nulla justo.',
    tagNr: '9893',
    location: 'LR',
    bbDown: null,
    bbLr: 'ur',
    bbOut: 'dx',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0dda9cde-1dee-4058-a8fe-88bfa1a5caae',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '348',
    name: 'Léonore',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    tagNr: '7767',
    location: 'LR',
    bbDown: 'sv',
    bbLr: 'ed',
    bbOut: 'pn',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ecf73b15-03f2-41d0-af31-174b2077deca',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '245',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    tagNr: '4271',
    location: 'LR1',
    bbDown: 'it',
    bbLr: 'gn',
    bbOut: 'mh',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
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
    luggageId: '695f1cce-0c67-4639-aa3d-bd86b57b54e9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '407',
    name: 'Réjane',
    arrivalTime: null,
    bags: '2+1',
    comments: null,
    tagNr: '4895',
    location: 'LR1',
    bbDown: 'eh',
    bbLr: 'nn',
    bbOut: 'qh',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/26/2022').setHours(
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
    luggageId: 'c63a270c-ae3e-4ff5-b6e3-98230ac19d4a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '981',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: 'Suspendisse potenti.',
    tagNr: '6256',
    location: 'LR',
    bbDown: 'nk',
    bbLr: 'bu',
    bbOut: 'ga',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: '169428c4-adba-4e9e-afc5-c40d9064aeef',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '700',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: null,
    tagNr: '5739',
    location: 'LR',
    bbDown: null,
    bbLr: 'rz',
    bbOut: 'gs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '94537432-5a74-4251-9183-f015f58830db',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '785',
    name: 'Anaëlle',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: 'Donec semper sapien a libero.',
    tagNr: '7965',
    location: 'LR',
    bbDown: 'ad',
    bbLr: 'da',
    bbOut: 'yu',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
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
    luggageId: '6b9cec9f-77d8-407c-be6d-b2aab9762928',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '673',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    comments: null,
    tagNr: '3911',
    location: 'LR1',
    bbDown: 'yn',
    bbLr: 'kf',
    bbOut: 'lv',
    completedAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '43099088-f324-4c59-9c4c-ea5f9d2cdfa0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '392',
    name: 'Françoise',
    arrivalTime: null,
    bags: '0+5',
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    tagNr: '7496',
    location: 'LR1',
    bbDown: 'nw',
    bbLr: 'ni',
    bbOut: 'lz',
    completedAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/18/2023').setHours(
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
    luggageId: '7b03cc21-aae3-48a8-9b99-976cda81b755',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '873',
    name: 'Méthode',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments: null,
    tagNr: '0272',
    location: 'LR1',
    bbDown: 'rz',
    bbLr: 'cr',
    bbOut: 'gc',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9e8862b0-8a11-4bf9-9f83-cab503e2ba72',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '992',
    name: 'Dafnée',
    arrivalTime: null,
    bags: '9+2',
    comments: 'Pellentesque ultrices mattis odio.',
    tagNr: '7096',
    location: 'LR1',
    bbDown: 'eb',
    bbLr: 'tm',
    bbOut: 'qe',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f322db9e-31ce-4e97-a6ce-0e8cc71ca1e9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '643',
    name: 'Gaëlle',
    arrivalTime: null,
    bags: '3+6',
    comments: 'Morbi non lectus.',
    tagNr: '8872',
    location: 'LR',
    bbDown: null,
    bbLr: 'gz',
    bbOut: 'ov',
    completedAt: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '51b8f653-7a77-45a3-a12a-77fc295dadbd',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '117',
    name: 'Kévina',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments: 'Suspendisse potenti.',
    tagNr: '9399',
    location: 'LR1',
    bbDown: 'ji',
    bbLr: 'su',
    bbOut: 'pp',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3751d05a-1275-46e2-97a3-a616f8dee68b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '300',
    name: 'Maï',
    arrivalTime: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: 'Sed sagittis.',
    tagNr: '4312',
    location: 'LR1',
    bbDown: 'rw',
    bbLr: 'kt',
    bbOut: 'hj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: 'f7f56892-1bae-4ec2-bbca-218203916b19',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '326',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    comments: 'Nulla nisl.',
    tagNr: '8208',
    location: 'LR1',
    bbDown: 'kq',
    bbLr: 'yv',
    bbOut: 'er',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '85fa8f37-44fc-4c5a-ab9f-52f2372fdba0',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '545',
    name: 'Personnalisée',
    arrivalTime: null,
    bags: '9+7',
    comments: null,
    tagNr: '0464',
    location: 'LR1',
    bbDown: 'xe',
    bbLr: 'la',
    bbOut: 'vh',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b33d6c50-4020-45ef-b75a-fdf62b34cb74',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '759',
    name: 'Maïwenn',
    arrivalTime: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    comments: null,
    tagNr: '0936',
    location: 'LR',
    bbDown: 'yt',
    bbLr: 'pw',
    bbOut: 'bi',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '26cfd1a6-ea8c-47c0-b5ca-5a7c2da60bf7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '869',
    name: 'Célestine',
    arrivalTime: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    comments: 'Aenean lectus.',
    tagNr: '9080',
    location: 'LR',
    bbDown: 'qt',
    bbLr: 'in',
    bbOut: 'vc',
    completedAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/21/2023').setHours(
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
    luggageId: '24f1b214-578b-426c-bfad-2658db7d54c3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '856',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: 'In congue.',
    tagNr: '9152',
    location: 'LR1',
    bbDown: 'tj',
    bbLr: 'md',
    bbOut: 'fo',
    completedAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6837eef3-9bf9-4209-a8ed-d8e3e169c9ec',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '532',
    name: 'Angèle',
    arrivalTime: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    comments: null,
    tagNr: '3307',
    location: 'LR',
    bbDown: null,
    bbLr: 'um',
    bbOut: 'in',
    completedAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8e6aad2a-9d51-4f6b-afa6-5d1f5b6e1819',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '147',
    name: 'Cléa',
    arrivalTime: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    comments: 'Nunc rhoncus dui vel sem.',
    tagNr: '7849',
    location: 'LR1',
    bbDown: 're',
    bbLr: 'jj',
    bbOut: 'cx',
    completedAt: new Date(
      new Date('03/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
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
    luggageId: '67ead6e1-aab9-4f71-91d8-268e7c64762d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '227',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: 'Phasellus sit amet erat.',
    tagNr: '9616',
    location: 'LR',
    bbDown: 'tw',
    bbLr: 'oj',
    bbOut: 'da',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'daaae4b8-3b0d-4935-b39d-28d381329a7f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '790',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: 'Nulla suscipit ligula in lacus.',
    tagNr: '1945',
    location: 'LR',
    bbDown: 'bo',
    bbLr: 'kg',
    bbOut: 'iv',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '735a176f-354c-48a6-95f0-103c338ea242',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '951',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    tagNr: '4669',
    location: 'LR',
    bbDown: 'vk',
    bbLr: 'cm',
    bbOut: 'mn',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/12/2023').setHours(
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
    luggageId: '41f72d11-2017-4bc7-add7-a79594d85dc0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '466',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: 'Etiam faucibus cursus urna.',
    tagNr: '3795',
    location: 'LR1',
    bbDown: 'wy',
    bbLr: 'yl',
    bbOut: 'lw',
    completedAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/01/2023').setHours(
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
    luggageId: 'c71ed1cf-826d-4d46-99ec-b6680843571c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '956',
    name: 'Märta',
    arrivalTime: null,
    bags: '0+9',
    comments: 'Praesent lectus.',
    tagNr: '0418',
    location: 'LR1',
    bbDown: 'ui',
    bbLr: 'ml',
    bbOut: 'if',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '84f5647c-fffd-474b-b006-c43819ea5dbd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '390',
    name: 'Crééz',
    arrivalTime: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: null,
    tagNr: '3395',
    location: 'LR1',
    bbDown: 'mo',
    bbLr: 'dw',
    bbOut: 'nw',
    completedAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bea9ec00-90f1-4677-9821-b419f3a992fb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '568',
    name: 'Gaïa',
    arrivalTime: null,
    bags: '9+5',
    comments: null,
    tagNr: '3846',
    location: 'LR',
    bbDown: 'oe',
    bbLr: 'js',
    bbOut: 'cg',
    completedAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/19/2023').setHours(
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
    luggageId: '53f5cfca-e196-4c60-81c2-27f1d21f49e4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '097',
    name: 'Cécile',
    arrivalTime: null,
    bags: '3+7',
    comments: 'Nam tristique tortor eu pede.',
    tagNr: '1877',
    location: 'LR',
    bbDown: 'er',
    bbLr: 'xs',
    bbOut: 'vt',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/22/2022').setHours(
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
    luggageId: '301c439e-391c-47c2-83de-65bf52a4c9d5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '776',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '6509',
    location: 'LR',
    bbDown: 'qb',
    bbLr: 'gb',
    bbOut: 'sw',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '432b5321-d6ee-45d7-95f4-718e0cddabda',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '087',
    name: 'Adèle',
    arrivalTime: null,
    bags: '0+2',
    comments: null,
    tagNr: '1728',
    location: 'LR1',
    bbDown: 'ih',
    bbLr: 'bj',
    bbOut: 'nv',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '940695c6-47ab-481d-9568-7bc05fb654f2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '186',
    name: 'Styrbjörn',
    arrivalTime: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: 'Nullam varius.',
    tagNr: '3858',
    location: 'LR1',
    bbDown: 'kz',
    bbLr: 'pz',
    bbOut: 'jh',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '81992842-2e09-40b4-bb6d-327f5c3a89cb',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '802',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    comments: 'Praesent lectus.',
    tagNr: '6809',
    location: 'LR1',
    bbDown: 'dx',
    bbLr: 'gi',
    bbOut: 'fk',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b8333cd1-4517-45bb-8f81-73dd04d5afda',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '375',
    name: 'Estève',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: null,
    tagNr: '8563',
    location: 'LR',
    bbDown: 'jp',
    bbLr: 'om',
    bbOut: 'oj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '02b1659c-35b9-4404-8110-e6df57714275',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '427',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '8243',
    location: 'LR',
    bbDown: 'ie',
    bbLr: 'yc',
    bbOut: 'mx',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/22/2023').setHours(
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
    luggageId: '5d597db3-846d-442c-a78c-206c98b9a6bb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '137',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: 'In quis justo.',
    tagNr: '9944',
    location: 'LR',
    bbDown: 'kp',
    bbLr: 'mj',
    bbOut: 'ax',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: '6b94b506-d208-4fa9-90cf-58d11cb338c2',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '549',
    name: 'Anaël',
    arrivalTime: null,
    bags: '8+7',
    comments: null,
    tagNr: '0214',
    location: 'LR',
    bbDown: 'mf',
    bbLr: 'yv',
    bbOut: 'fy',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8e1cd5e6-1c81-49b3-b4d4-bee02b025fea',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '009',
    name: 'Bécassine',
    arrivalTime: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '2079',
    location: 'LR',
    bbDown: 'fy',
    bbLr: 'xv',
    bbOut: 'zq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3c634070-592f-427a-812f-d915ddbd8f87',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '362',
    name: 'Maïwenn',
    arrivalTime: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '3308',
    location: 'LR1',
    bbDown: 'zb',
    bbLr: 'es',
    bbOut: 'qe',
    completedAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b552d4a0-bd01-4ee6-821a-b6ebd0277c61',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '268',
    name: 'Håkan',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '0561',
    location: 'LR',
    bbDown: 'lq',
    bbLr: 'wv',
    bbOut: 'fz',
    completedAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a3da9986-4f61-451a-a61f-213e86c92c2c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '207',
    name: 'Mylène',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '6003',
    location: 'LR',
    bbDown: 'ax',
    bbLr: 'cf',
    bbOut: 'dk',
    completedAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7cba62a1-621c-44f3-ad7c-c2bf55384c83',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '266',
    name: 'Méline',
    arrivalTime: null,
    bags: '2+7',
    comments: null,
    tagNr: '3792',
    location: 'LR',
    bbDown: 'pq',
    bbLr: 'lo',
    bbOut: 'kh',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1e2a6e73-bf04-4249-9a2b-359fa824ec24',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '370',
    name: 'Bérengère',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: 'Duis mattis egestas metus.',
    tagNr: '7134',
    location: 'LR',
    bbDown: 'ok',
    bbLr: 'cu',
    bbOut: 'uf',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '34174250-dac2-4b99-8674-345a2ae484f1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '066',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '5313',
    location: 'LR1',
    bbDown: 'ba',
    bbLr: 'xw',
    bbOut: 'so',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a97a6a4b-4869-4df4-9431-a9f62058b4fc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '203',
    name: 'Eléa',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '8629',
    location: 'LR',
    bbDown: null,
    bbLr: 'oj',
    bbOut: 'ck',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fe5d4db6-f9b1-483f-b0d7-e88610507bef',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '392',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    comments: null,
    tagNr: '7533',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mb',
    bbOut: 'cz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
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
    luggageId: 'b2f8d30c-f1e7-440a-bc0c-96467a09a329',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '347',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: 'Mauris lacinia sapien quis libero.',
    tagNr: '5374',
    location: 'LR',
    bbDown: 'nq',
    bbLr: 'vi',
    bbOut: 'yj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5826c228-63bb-44c6-b564-c36ba3614a50',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '657',
    name: 'Chloé',
    arrivalTime: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    comments: null,
    tagNr: '8960',
    location: 'LR',
    bbDown: 'hl',
    bbLr: 'bo',
    bbOut: 'ea',
    completedAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '37f6be10-1bc6-47d5-81e5-31f08a30cafb',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '477',
    name: 'Naéva',
    arrivalTime: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    comments: null,
    tagNr: '5194',
    location: 'LR',
    bbDown: 'zr',
    bbLr: 'ss',
    bbOut: 'gk',
    completedAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd08f3560-0a38-47e7-aee9-30806ec89b43',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '216',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: null,
    tagNr: '1130',
    location: 'LR',
    bbDown: 'qv',
    bbLr: 'ms',
    bbOut: 'gd',
    completedAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0577cd53-45c3-4b8d-993a-955f5f8d945d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '680',
    name: 'Zoé',
    arrivalTime: null,
    bags: '8+3',
    comments: null,
    tagNr: '1586',
    location: 'LR',
    bbDown: 'dr',
    bbLr: 'ib',
    bbOut: 'kb',
    completedAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6bb9883e-7e30-406e-804b-a35674bd381f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '643',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '1552',
    location: 'LR',
    bbDown: 'ya',
    bbLr: 'bw',
    bbOut: 'ei',
    completedAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/20/2023').setHours(
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
    luggageId: 'd6a12757-ade2-42c3-8222-34c4e4254bce',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '827',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    tagNr: '6463',
    location: 'LR',
    bbDown: 'uy',
    bbLr: 'fi',
    bbOut: 'cx',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd5074991-6f33-47fa-bc49-a55275363750',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '882',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments: null,
    tagNr: '9330',
    location: 'LR1',
    bbDown: 'nu',
    bbLr: 'gg',
    bbOut: 'kb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8890504c-5df0-469a-8101-b3f6faff20a6',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '970',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    comments: 'Duis ac nibh.',
    tagNr: '9932',
    location: 'LR',
    bbDown: null,
    bbLr: 'ld',
    bbOut: 'bx',
    completedAt: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd7a5e133-7b1d-4f2c-9cfa-a1068e8ebe96',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '921',
    name: 'Estève',
    arrivalTime: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    comments: null,
    tagNr: '6004',
    location: 'LR',
    bbDown: null,
    bbLr: 'oz',
    bbOut: 'cs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/31/2023').setHours(
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
    luggageId: 'c51db53a-29af-46a7-aecf-b9f41e5e0368',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '464',
    name: 'Torbjörn',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    tagNr: '4897',
    location: 'LR1',
    bbDown: 'jw',
    bbLr: 'bx',
    bbOut: 'xc',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9434ac05-b3ef-4a17-beb7-06a9a0c2e426',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '144',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    comments: null,
    tagNr: '0666',
    location: 'LR',
    bbDown: 'mk',
    bbLr: 'jo',
    bbOut: 'px',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3e9b2add-66d7-4456-9d09-8b4954048a83',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '470',
    name: 'Marlène',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments: null,
    tagNr: '3071',
    location: 'LR',
    bbDown: null,
    bbLr: 'hz',
    bbOut: 'og',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8144fd08-7b27-4e05-8c58-d320f4d1083d',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '522',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    comments: null,
    tagNr: '9074',
    location: 'LR1',
    bbDown: 'ze',
    bbLr: 'fq',
    bbOut: 'qf',
    completedAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bf1cf0e2-895d-4ddd-8c79-270ec536837d',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '677',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments: 'Morbi non lectus.',
    tagNr: '1084',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mk',
    bbOut: 'jh',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1156ebdc-e295-4a17-b731-03055dcde7cf',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '245',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: null,
    tagNr: '4574',
    location: 'LR1',
    bbDown: 'io',
    bbLr: 'ft',
    bbOut: 'qt',
    completedAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b19a331e-e0b6-4a57-b4f2-a6dbf371f818',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '081',
    name: 'Magdalène',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: null,
    tagNr: '7867',
    location: 'LR1',
    bbDown: 'qr',
    bbLr: 'gj',
    bbOut: 'ps',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
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
    luggageId: 'f05cf69e-d09a-4118-bf8f-3e6795648be4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '800',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments: null,
    tagNr: '7838',
    location: 'LR',
    bbDown: null,
    bbLr: 'jw',
    bbOut: 'lf',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '19093ea3-1caa-4bde-841b-fed08b07c4ad',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '562',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    tagNr: '5303',
    location: 'LR',
    bbDown: null,
    bbLr: 'cd',
    bbOut: 'nb',
    completedAt: new Date(
      new Date('03/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
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
    luggageId: 'c19d1d35-8f8c-43e3-8e87-6da9c39adeab',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '729',
    name: 'Marie-thérèse',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Morbi porttitor lorem id ligula.',
    tagNr: '0530',
    location: 'LR1',
    bbDown: 'ao',
    bbLr: 'qm',
    bbOut: 'lc',
    completedAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a57d2266-fa30-43a6-9dfc-535cd5e25297',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '760',
    name: 'Marlène',
    arrivalTime: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    comments: 'Nulla ac enim.',
    tagNr: '3612',
    location: 'LR',
    bbDown: 'ed',
    bbLr: 'ao',
    bbOut: 'rz',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '104c5ef2-e76b-4327-b771-dbaf19abc01e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '255',
    name: 'Eugénie',
    arrivalTime: null,
    bags: '6+4',
    comments: 'In eleifend quam a odio.',
    tagNr: '6529',
    location: 'LR1',
    bbDown: 'ft',
    bbLr: 'rg',
    bbOut: 'ph',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/30/2022').setHours(
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
    luggageId: '98d2d621-e723-4afc-a2c4-3acf6b7320a0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '018',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: null,
    tagNr: '5712',
    location: 'LR',
    bbDown: 'on',
    bbLr: 'ut',
    bbOut: 'wk',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/25/2022').setHours(
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
    luggageId: 'a6500fa2-5588-4f00-ba17-e5aabfd58dfe',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '599',
    name: 'Rachèle',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: null,
    tagNr: '9568',
    location: 'LR',
    bbDown: 'ir',
    bbLr: 'wh',
    bbOut: 'hw',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e85fc1e7-d5ca-42dc-88e2-ee43fbc4423c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '327',
    name: 'Aurélie',
    arrivalTime: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: null,
    tagNr: '2757',
    location: 'LR1',
    bbDown: 'ce',
    bbLr: 'ra',
    bbOut: 'os',
    completedAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '41b42c4c-bfc7-4f22-84be-c2eb84fddb76',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '435',
    name: 'Méline',
    arrivalTime: null,
    bags: '4+9',
    comments:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    tagNr: '9855',
    location: 'LR',
    bbDown: 'ny',
    bbLr: 'et',
    bbOut: 'bc',
    completedAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '659623ee-44e2-4bff-9acf-391cc15156ad',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '432',
    name: 'Marie-ève',
    arrivalTime: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    comments:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    tagNr: '2183',
    location: 'LR1',
    bbDown: 'hp',
    bbLr: 'ek',
    bbOut: 'qy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/02/2023').setHours(
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
    luggageId: '410bd0c4-5a8b-4d31-9107-deb42914dd31',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '488',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '1155',
    location: 'LR',
    bbDown: null,
    bbLr: 'ha',
    bbOut: 'dk',
    completedAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ebc821f2-1d3a-479e-9831-35c13f4cf8a0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '321',
    name: 'Léane',
    arrivalTime: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '8026',
    location: 'LR',
    bbDown: null,
    bbLr: 'is',
    bbOut: 'qn',
    completedAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c070f118-47c3-4a93-913c-d18ac55d5617',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '900',
    name: 'Cécilia',
    arrivalTime: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments: null,
    tagNr: '3254',
    location: 'LR1',
    bbDown: 'ga',
    bbLr: 'gk',
    bbOut: 'we',
    completedAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/18/2023').setHours(
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
    luggageId: '49b7313f-e232-43b3-bf86-ca75a556fd05',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '075',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: null,
    tagNr: '9431',
    location: 'LR1',
    bbDown: 'nk',
    bbLr: 'rd',
    bbOut: 'yk',
    completedAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2d77f47a-0aaf-4314-8e3e-cf20d5bf0849',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '053',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    comments: null,
    tagNr: '7740',
    location: 'LR1',
    bbDown: 'is',
    bbLr: 'ow',
    bbOut: 'kb',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7fb5d5fe-68b7-413d-bbde-fa3261d8f1e1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '317',
    name: 'Jú',
    arrivalTime: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    tagNr: '1715',
    location: 'LR1',
    bbDown: 'th',
    bbLr: 'sc',
    bbOut: 'wu',
    completedAt: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd6de549d-8abc-4939-a783-c363f26762d7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '527',
    name: 'Mélia',
    arrivalTime: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments: null,
    tagNr: '1297',
    location: 'LR',
    bbDown: null,
    bbLr: 'ic',
    bbOut: 'sc',
    completedAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/04/2023').setHours(
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
    luggageId: 'caedac6e-407f-4bdf-a576-4d4a897a9f05',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '241',
    name: 'Néhémie',
    arrivalTime: null,
    bags: '2+9',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '5907',
    location: 'LR1',
    bbDown: 'rm',
    bbLr: 'wm',
    bbOut: 'ri',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c646e121-3a44-4c12-afc7-0b3cab60f7ef',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '560',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments: null,
    tagNr: '7139',
    location: 'LR',
    bbDown: 'fs',
    bbLr: 'sq',
    bbOut: 'pj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/28/2023').setHours(
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
    luggageId: 'a1a8cc1f-f4ad-4702-998c-bb5150849b4a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '621',
    name: 'Athéna',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    comments: 'Proin eu mi.',
    tagNr: '6867',
    location: 'LR1',
    bbDown: 'ot',
    bbLr: 'kf',
    bbOut: 'es',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8b79600b-30fc-4be5-bc00-632388531948',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '214',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    comments: 'Vivamus tortor.',
    tagNr: '7435',
    location: 'LR',
    bbDown: 'uy',
    bbLr: 'vr',
    bbOut: 'vc',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e0c31f4a-e5fd-4981-90f3-47d2d14ac314',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '774',
    name: 'Faîtes',
    arrivalTime: null,
    bags: '8+4',
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    tagNr: '3106',
    location: 'LR',
    bbDown: 'oc',
    bbLr: 'gy',
    bbOut: 'tg',
    completedAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '99d8c108-6821-4d5a-bc15-0364ae272a06',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '137',
    name: 'Yóu',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    comments: null,
    tagNr: '3607',
    location: 'LR',
    bbDown: null,
    bbLr: 'gj',
    bbOut: 'dh',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '52622fe4-3239-4728-87c5-c091d8f21451',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '501',
    name: 'Adèle',
    arrivalTime: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: 'Ut tellus.',
    tagNr: '2180',
    location: 'LR',
    bbDown: 'wv',
    bbLr: 'gd',
    bbOut: 'si',
    completedAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5841a12e-3fe7-44bb-a8d4-38988965cf98',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '309',
    name: 'Lèi',
    arrivalTime: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    tagNr: '2579',
    location: 'LR',
    bbDown: 'jq',
    bbLr: 'sj',
    bbOut: 'cz',
    completedAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9b612245-78e0-4553-acd0-4ab125f092da',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '269',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '2839',
    location: 'LR1',
    bbDown: 'tn',
    bbLr: 'kk',
    bbOut: 'sy',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: 'c6e02e26-a8c7-4117-99f5-8751031e5222',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '504',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    comments: 'Quisque ut erat.',
    tagNr: '7778',
    location: 'LR1',
    bbDown: 'wm',
    bbLr: 'ok',
    bbOut: 'xk',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f8e68232-c3d4-4780-b233-a304791cdfe1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '792',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '4269',
    location: 'LR',
    bbDown: 'qc',
    bbLr: 'oe',
    bbOut: 'tl',
    completedAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7953fa60-5a21-4264-9696-9130e54727c1',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '358',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: 'Nulla suscipit ligula in lacus.',
    tagNr: '0007',
    location: 'LR',
    bbDown: 'fy',
    bbLr: 'kh',
    bbOut: 'td',
    completedAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '044c6418-152d-4f2d-8632-d844fa75763e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '443',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments: null,
    tagNr: '7331',
    location: 'LR1',
    bbDown: 'fj',
    bbLr: 'ng',
    bbOut: 'ea',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd41556c2-fa2e-4e03-bccc-15eacaf0ba02',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '257',
    name: 'Méghane',
    arrivalTime: null,
    bags: '7+1',
    comments: 'Morbi a ipsum.',
    tagNr: '0199',
    location: 'LR',
    bbDown: null,
    bbLr: 'up',
    bbOut: 'lp',
    completedAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/23/2023').setHours(
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
    luggageId: '0ab7276d-dee5-4ccc-b9eb-207ef43c5b62',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '035',
    name: 'Cécilia',
    arrivalTime: null,
    bags: '5+7',
    comments: null,
    tagNr: '5820',
    location: 'LR',
    bbDown: 'gq',
    bbLr: 'rg',
    bbOut: 'tr',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0382a9e7-e161-4c75-957e-6fb1ef91c2e5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '842',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    tagNr: '5594',
    location: 'LR1',
    bbDown: 'vt',
    bbLr: 'mv',
    bbOut: 'rs',
    completedAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/14/2023').setHours(
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
    luggageId: '6a7bf4cd-bc63-4da2-afc9-9f7b9570d59e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '043',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: 'Curabitur gravida nisi at nibh.',
    tagNr: '4308',
    location: 'LR1',
    bbDown: 'tm',
    bbLr: 'wt',
    bbOut: 'gf',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '95cf9be7-0157-42b0-92d1-c363699f0efd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '724',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments: null,
    tagNr: '7924',
    location: 'LR1',
    bbDown: 'vx',
    bbLr: 'nz',
    bbOut: 'rw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c670c68a-7be0-4b77-967e-9423c2ec1764',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '717',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments: 'Sed sagittis.',
    tagNr: '0658',
    location: 'LR1',
    bbDown: 'vk',
    bbLr: 'qy',
    bbOut: 'kl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/13/2022').setHours(
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
    luggageId: 'bb815ed4-7623-4b4a-9e6a-5d144103d57f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '453',
    name: 'Léonie',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    comments: null,
    tagNr: '5061',
    location: 'LR1',
    bbDown: 'dk',
    bbLr: 'ru',
    bbOut: 'gj',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '91fabc23-b228-4af3-8a1b-e10b1488f093',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '950',
    name: 'Lóng',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    comments: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '7567',
    location: 'LR',
    bbDown: 'fw',
    bbLr: 'mc',
    bbOut: 'uf',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
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
    luggageId: '3411cdb2-00d5-4afd-9056-7ebb491f21a7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '573',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    comments: null,
    tagNr: '4357',
    location: 'LR',
    bbDown: 'zj',
    bbLr: 'og',
    bbOut: 'db',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '373ee2ac-1948-4aab-aefb-e115c055c527',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '161',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: null,
    tagNr: '7045',
    location: 'LR',
    bbDown: null,
    bbLr: 'rk',
    bbOut: 'ms',
    completedAt: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/24/2023').setHours(
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
    luggageId: '559e9443-e82b-4490-8895-0ee4a5c7ae31',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '410',
    name: 'Lauréna',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Nulla justo.',
    tagNr: '1219',
    location: 'LR',
    bbDown: null,
    bbLr: 'kx',
    bbOut: 'pr',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '65f3e76f-d455-437c-be14-3b94b6983968',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '654',
    name: 'Céline',
    arrivalTime: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: 'In congue.',
    tagNr: '8373',
    location: 'LR1',
    bbDown: 'fo',
    bbLr: 'ac',
    bbOut: 'gz',
    completedAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b94f9ae3-993e-4921-b814-8b3694e66953',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '730',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments: null,
    tagNr: '7846',
    location: 'LR',
    bbDown: 'nh',
    bbLr: 'ck',
    bbOut: 'by',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6f49904d-adbc-442c-b97a-f7d0dd9d6d0d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '408',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments: null,
    tagNr: '6792',
    location: 'LR',
    bbDown: null,
    bbLr: 'hh',
    bbOut: 'hy',
    completedAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/01/2022').setHours(
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
    luggageId: 'd357ab93-5473-4277-8574-ac08257a51cd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '240',
    name: 'Annotés',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: null,
    tagNr: '7199',
    location: 'LR',
    bbDown: 'hf',
    bbLr: 'su',
    bbOut: 'tn',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3d72418a-5e96-4934-b700-9798b25b437e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '220',
    name: 'Styrbjörn',
    arrivalTime: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    comments: null,
    tagNr: '5493',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ou',
    bbOut: 'jq',
    completedAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '15262885-57af-49af-ac84-b6301c79deb4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '964',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '2329',
    location: 'LR1',
    bbDown: 'sb',
    bbLr: 'fm',
    bbOut: 'ju',
    completedAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd4e6f0df-4032-4344-baa4-5e7645c03d26',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '513',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '2696',
    location: 'LR1',
    bbDown: 'ji',
    bbLr: 'qm',
    bbOut: 'jw',
    completedAt: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9ee904db-5520-47f6-9f7d-f780326e7619',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '769',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '2228',
    location: 'LR1',
    bbDown: null,
    bbLr: 'dn',
    bbOut: 'lj',
    completedAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8246014d-6854-4f8e-8d18-92a209f33e67',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '415',
    name: 'Néhémie',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: null,
    tagNr: '7708',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ym',
    bbOut: 'rr',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '085c8f15-6cb5-474b-9cb2-b7d1fafbece2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '400',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    tagNr: '6481',
    location: 'LR1',
    bbDown: 'gv',
    bbLr: 'vk',
    bbOut: 'nr',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ecfb94f4-e075-4443-94b3-d32d5abfea0e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '340',
    name: 'Nadège',
    arrivalTime: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    comments: 'Nullam porttitor lacus at turpis.',
    tagNr: '1649',
    location: 'LR',
    bbDown: 'jc',
    bbLr: 'lw',
    bbOut: 'dq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/01/2023').setHours(
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
    luggageId: '83f544a5-2a39-47fd-a626-9783672e3bce',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '998',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    comments: 'Nunc purus.',
    tagNr: '3895',
    location: 'LR1',
    bbDown: 'ee',
    bbLr: 'tp',
    bbOut: 'kr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/22/2022').setHours(
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
    luggageId: '200fdff4-dad3-4dac-8f90-41d770c5ce67',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '639',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments: 'Donec vitae nisi.',
    tagNr: '3772',
    location: 'LR1',
    bbDown: 'zz',
    bbLr: 'pp',
    bbOut: 'fu',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
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
    luggageId: '3907a75f-c696-4fa9-8065-55a0e8fbd4b9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '374',
    name: 'Noémie',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments: null,
    tagNr: '9724',
    location: 'LR',
    bbDown: 'gf',
    bbLr: 'lv',
    bbOut: 'kf',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a02b1451-77de-4b65-a5ff-098af7bf9eed',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '458',
    name: 'Mélissandre',
    arrivalTime: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: null,
    tagNr: '6737',
    location: 'LR',
    bbDown: 'rs',
    bbLr: 'hz',
    bbOut: 'sp',
    completedAt: new Date(
      new Date('03/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e466a928-3e1c-4a10-b85d-5cb011e7066c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '201',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '1948',
    location: 'LR',
    bbDown: 'qo',
    bbLr: 'iv',
    bbOut: 'mo',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '522a7187-e75a-4169-8b3b-df6fc809a13a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '542',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: null,
    tagNr: '6486',
    location: 'LR1',
    bbDown: 'oo',
    bbLr: 'aw',
    bbOut: 'zc',
    completedAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6537f34b-72c9-465c-9442-5f6318b03798',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '024',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: null,
    tagNr: '7655',
    location: 'LR',
    bbDown: null,
    bbLr: 'mi',
    bbOut: 'db',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
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
    luggageId: 'a77dad53-e84e-431d-abca-9236645e5762',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '513',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    comments: null,
    tagNr: '6218',
    location: 'LR1',
    bbDown: null,
    bbLr: 'cv',
    bbOut: 'vk',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c54a15ca-72f8-49c1-83bb-4cd9e1591946',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '835',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: null,
    tagNr: '8914',
    location: 'LR',
    bbDown: 'ok',
    bbLr: 'af',
    bbOut: 'sb',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c42af307-5af2-41a0-ae98-4e8e4e2ac480',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '907',
    name: 'Jú',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '6961',
    location: 'LR1',
    bbDown: 'de',
    bbLr: 'xt',
    bbOut: 'yk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '66bf11ef-bae1-4573-ba2f-1e73062e05d2',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '476',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments: null,
    tagNr: '7259',
    location: 'LR',
    bbDown: null,
    bbLr: 'zx',
    bbOut: 'xr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/04/2023').setHours(
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
    luggageId: '09c2e5ce-5811-407e-ac6a-fa640bb41c42',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '717',
    name: 'Garçon',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    tagNr: '4902',
    location: 'LR',
    bbDown: 'tm',
    bbLr: 'sj',
    bbOut: 'zz',
    completedAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/06/2023').setHours(
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
    luggageId: '1c3ab2cc-533e-42c6-b039-82f7760c2f1a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '314',
    name: 'Valérie',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '3533',
    location: 'LR1',
    bbDown: 'pi',
    bbLr: 'th',
    bbOut: 'mw',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/17/2022').setHours(
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
    luggageId: '1180e7ec-b585-446d-a345-d25a8c42400f',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '443',
    name: 'Audréanne',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: null,
    tagNr: '5384',
    location: 'LR1',
    bbDown: 'np',
    bbLr: 'vd',
    bbOut: 'jv',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8fea82a0-2b7f-4d62-b294-6d08d2e55afa',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '326',
    name: 'Mélissandre',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: null,
    tagNr: '9883',
    location: 'LR',
    bbDown: null,
    bbLr: 'yd',
    bbOut: 'ml',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '150d6ca5-fbbc-49b2-89b0-1da673693712',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '133',
    name: 'Maëlle',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: null,
    tagNr: '5636',
    location: 'LR',
    bbDown: 'gp',
    bbLr: 'he',
    bbOut: 'cf',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5036accb-9721-4cc0-9e9e-739b560b9727',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '481',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '5631',
    location: 'LR',
    bbDown: 'uq',
    bbLr: 'hb',
    bbOut: 'mg',
    completedAt: new Date(
      new Date('03/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '30137f2b-7428-4e0c-a5ef-b04692eb6af9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '015',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    comments: null,
    tagNr: '1580',
    location: 'LR',
    bbDown: 'vu',
    bbLr: 'mw',
    bbOut: 'zn',
    completedAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/16/2023').setHours(
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
    luggageId: '4117f46e-44a9-4c76-aca6-43ee84685b41',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '385',
    name: 'Magdalène',
    arrivalTime: null,
    bags: '6+7',
    comments: null,
    tagNr: '5221',
    location: 'LR',
    bbDown: 'ft',
    bbLr: 'fv',
    bbOut: 'yn',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
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
    luggageId: '424a164c-86ba-4f7a-80aa-e0f5e7fc3109',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '557',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: 'Nunc purus.',
    tagNr: '7566',
    location: 'LR',
    bbDown: 'kh',
    bbLr: 'il',
    bbOut: 'fg',
    completedAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/05/2023').setHours(
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
    luggageId: '665fc556-57f9-4c40-ad7d-5d2ed2702185',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '479',
    name: 'Geneviève',
    arrivalTime: null,
    bags: '7+3',
    comments: 'Aliquam non mauris.',
    tagNr: '0536',
    location: 'LR',
    bbDown: 'uc',
    bbLr: 'dn',
    bbOut: 'vr',
    completedAt: null,
    dateNeeded: new Date(
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
    luggageId: 'd7f30ddb-3339-4e20-8791-167e79274181',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '137',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: 'Etiam vel augue.',
    tagNr: '2649',
    location: 'LR1',
    bbDown: null,
    bbLr: 'em',
    bbOut: 'st',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6fb78647-ffb4-4106-afa9-25a0eea2b826',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '651',
    name: 'Kévina',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '8744',
    location: 'LR1',
    bbDown: 'rv',
    bbLr: 'hc',
    bbOut: 'bw',
    completedAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/06/2023').setHours(
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
    luggageId: 'f49066b5-e06a-4586-bab2-dc3088ed30f0',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '981',
    name: 'Mårten',
    arrivalTime: null,
    bags: '1+1',
    comments: null,
    tagNr: '3328',
    location: 'LR',
    bbDown: 'gs',
    bbLr: 'as',
    bbOut: 'wv',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a675d6d4-596b-4b3d-82bb-2520bbf396e5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '200',
    name: 'Mélanie',
    arrivalTime: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'Sed sagittis.',
    tagNr: '3601',
    location: 'LR',
    bbDown: 'om',
    bbLr: 'll',
    bbOut: 'ua',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fab08fea-d3ec-4992-a3eb-4bfbdb77b7fc',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '360',
    name: 'Cléopatre',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments: null,
    tagNr: '4282',
    location: 'LR1',
    bbDown: 'zh',
    bbLr: 'uf',
    bbOut: 'sw',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6c52ffb9-bb80-44f9-98b1-f0c0097da9e5',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '126',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '0478',
    location: 'LR1',
    bbDown: 'ss',
    bbLr: 'tk',
    bbOut: 'ki',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '86bfbe39-464f-46b1-9faa-f3f5f33332fb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '956',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    tagNr: '7631',
    location: 'LR1',
    bbDown: 'ti',
    bbLr: 'bi',
    bbOut: 'im',
    completedAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a3b481de-c8bf-4b85-8439-e4ecb632d55c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '702',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: 'Aliquam erat volutpat.',
    tagNr: '4050',
    location: 'LR',
    bbDown: 'qk',
    bbLr: 'kj',
    bbOut: 'iv',
    completedAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd6c0bdab-c3c9-43ae-a00e-a170f8ec358f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '438',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: null,
    tagNr: '5938',
    location: 'LR',
    bbDown: 'jj',
    bbLr: 'fb',
    bbOut: 'kl',
    completedAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7d13d316-bf6f-46f8-a4d8-a77bd5739688',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '201',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: 'Pellentesque at nulla.',
    tagNr: '4725',
    location: 'LR',
    bbDown: null,
    bbLr: 'ff',
    bbOut: 'qh',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fffe6dc6-5dc2-4d9c-be85-e1492d6f0135',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '393',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    tagNr: '4184',
    location: 'LR1',
    bbDown: 'kg',
    bbLr: 'ic',
    bbOut: 'rt',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '75816e7f-f765-4035-98f7-0897e42c88eb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '127',
    name: 'Gösta',
    arrivalTime: null,
    bags: '6+9',
    comments: 'In eleifend quam a odio.',
    tagNr: '8807',
    location: 'LR',
    bbDown: 'ul',
    bbLr: 'ts',
    bbOut: 'fw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/07/2022').setHours(
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
    luggageId: '1761756a-c9d9-46ea-883a-208c9ff32091',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '779',
    name: 'Aurélie',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments: 'Integer ac leo.',
    tagNr: '9500',
    location: 'LR1',
    bbDown: 'hl',
    bbLr: 'nd',
    bbOut: 'fq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ca965582-f6af-4a54-b1b0-379ec91584b1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '630',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments: null,
    tagNr: '5799',
    location: 'LR',
    bbDown: 'ia',
    bbLr: 'ee',
    bbOut: 'vh',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e71a905f-fc71-4d6f-9762-0c35f2e3ac96',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '518',
    name: 'Clélia',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '5327',
    location: 'LR',
    bbDown: 'wx',
    bbLr: 'pf',
    bbOut: 'sw',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '94b596bb-37ff-44e1-994f-f92a304f07cc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '481',
    name: 'Véronique',
    arrivalTime: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    comments: 'Nulla justo.',
    tagNr: '4469',
    location: 'LR',
    bbDown: 'vn',
    bbLr: 'pe',
    bbOut: 'yu',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/11/2023').setHours(
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
    luggageId: 'b9042647-c9b6-4c93-9854-525a794e8fce',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '686',
    name: 'Dù',
    arrivalTime: null,
    bags: '8+2',
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    tagNr: '6592',
    location: 'LR1',
    bbDown: 'yi',
    bbLr: 'yz',
    bbOut: 'xg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0082143a-a25b-4322-abe1-174f83066c23',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '805',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: 'Ut at dolor quis odio consequat varius.',
    tagNr: '1562',
    location: 'LR',
    bbDown: 'zy',
    bbLr: 'ff',
    bbOut: 'sy',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: '0a8be41d-b3e0-4f9e-bf6d-2deb9c2d8071',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '597',
    name: 'Cécile',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: null,
    tagNr: '5017',
    location: 'LR',
    bbDown: 'tm',
    bbLr: 'fr',
    bbOut: 'vv',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
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
    luggageId: 'bc0de865-00ec-46d0-b0f3-73c4641a022d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '395',
    name: 'Mélina',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: null,
    tagNr: '8984',
    location: 'LR',
    bbDown: null,
    bbLr: 'zw',
    bbOut: 'sx',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '27d56fbd-4ecf-4d57-a16f-8ffc3f4373c5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '125',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    comments: 'In congue.',
    tagNr: '7117',
    location: 'LR1',
    bbDown: 'yc',
    bbLr: 'gx',
    bbOut: 'xm',
    completedAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c2845de1-0e81-46e4-9388-1c8e33e96d47',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '417',
    name: 'Maëlyss',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: 'Morbi non lectus.',
    tagNr: '9783',
    location: 'LR1',
    bbDown: 've',
    bbLr: 'sm',
    bbOut: 'fb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e6782212-7bf7-4d8e-ad66-cdce50885727',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '527',
    name: 'Magdalène',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '2006',
    location: 'LR1',
    bbDown: 'vn',
    bbLr: 'og',
    bbOut: 'kl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '95f1bf36-6eb4-4bb2-9e9e-3deb73596e68',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '179',
    name: 'Judicaël',
    arrivalTime: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '6581',
    location: 'LR',
    bbDown: 'hx',
    bbLr: 'ei',
    bbOut: 'ff',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2b5be914-839e-4c24-824d-9cb4e0bd5828',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '985',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    tagNr: '7084',
    location: 'LR1',
    bbDown: 'hh',
    bbLr: 'qg',
    bbOut: 'vs',
    completedAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0df7632e-5a45-4663-9b50-41d1acf29af6',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '517',
    name: 'Gösta',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '3661',
    location: 'LR1',
    bbDown: 'xm',
    bbLr: 'on',
    bbOut: 'il',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: 'edffa32c-101b-45fa-b65b-edb0c1f88e75',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '159',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: 'Donec semper sapien a libero.',
    tagNr: '7691',
    location: 'LR',
    bbDown: null,
    bbLr: 'mw',
    bbOut: 'sk',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '701f9bab-f1b0-45d6-9902-de86a258aeca',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '529',
    name: 'Tú',
    arrivalTime: null,
    bags: '3+3',
    comments: null,
    tagNr: '9637',
    location: 'LR1',
    bbDown: 'xl',
    bbLr: 'gx',
    bbOut: 'vu',
    completedAt: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ff2ad89f-76a1-47f4-b3fb-01a0ad4ce05c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '813',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '0797',
    location: 'LR',
    bbDown: 'hs',
    bbLr: 'ye',
    bbOut: 'gg',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6f557b2d-b962-4a70-bcd8-1dc6356013ec',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '678',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    comments: null,
    tagNr: '8145',
    location: 'LR1',
    bbDown: 'ty',
    bbLr: 'xi',
    bbOut: 'us',
    completedAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/16/2023').setHours(
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
    luggageId: 'feff5ff7-085b-4453-8914-9fc81fbccff9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '851',
    name: 'Vénus',
    arrivalTime: null,
    bags: '6+4',
    comments: null,
    tagNr: '9780',
    location: 'LR1',
    bbDown: 'ru',
    bbLr: 'nu',
    bbOut: 'nd',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6bb2337e-d34e-4356-ae06-5454654161d7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '367',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    comments: 'Nulla ac enim.',
    tagNr: '8036',
    location: 'LR1',
    bbDown: null,
    bbLr: 'iu',
    bbOut: 'xd',
    completedAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '72670dfd-f2da-4419-bef3-d44438538ef3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '040',
    name: 'Marylène',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: 'Fusce posuere felis sed lacus.',
    tagNr: '2434',
    location: 'LR',
    bbDown: 'nz',
    bbLr: 'hp',
    bbOut: 'wt',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
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
    luggageId: '4c0e7ab1-5265-4a11-afb9-fcc2ec9ac284',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '324',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    comments: 'Duis ac nibh.',
    tagNr: '6932',
    location: 'LR1',
    bbDown: 'mh',
    bbLr: 'ki',
    bbOut: 'hy',
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5d862d17-00da-4be7-a402-5c82bd08c411',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '140',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: null,
    tagNr: '8783',
    location: 'LR',
    bbDown: 'mp',
    bbLr: 'xg',
    bbOut: 'yw',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f4b8f4fe-469b-4e19-861f-8544f848fb99',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '888',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: null,
    tagNr: '0731',
    location: 'LR',
    bbDown: 'ex',
    bbLr: 'rv',
    bbOut: 'ho',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '89215fe4-05d3-47b4-b80d-43e6c9fd8499',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '396',
    name: 'Mélanie',
    arrivalTime: null,
    bags: '4+6',
    comments: 'Pellentesque at nulla.',
    tagNr: '8629',
    location: 'LR1',
    bbDown: 'pf',
    bbLr: 'fs',
    bbOut: 'gx',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '55b0ac2e-02fa-4916-ba61-85a6a5f891e6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '482',
    name: 'Loïca',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    comments: null,
    tagNr: '5733',
    location: 'LR1',
    bbDown: 'ns',
    bbLr: 'hv',
    bbOut: 'bl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1a0eabd4-24f1-4838-9d02-494426f2591a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '840',
    name: 'Eloïse',
    arrivalTime: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    comments: null,
    tagNr: '3725',
    location: 'LR',
    bbDown: null,
    bbLr: 'py',
    bbOut: 'ez',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c5791676-34d4-42d1-ac47-66a38120b8c5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '188',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: null,
    tagNr: '6780',
    location: 'LR1',
    bbDown: 'kp',
    bbLr: 'vo',
    bbOut: 'so',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '44e422fa-af26-479d-a644-81d9f6c13912',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '520',
    name: 'Maëly',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '7205',
    location: 'LR1',
    bbDown: null,
    bbLr: 'vs',
    bbOut: 'he',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '16f57664-d694-4083-b93a-58b3e740fae0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '039',
    name: 'Desirée',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '5677',
    location: 'LR',
    bbDown: null,
    bbLr: 'gb',
    bbOut: 'ut',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '90c8eefc-ded2-4bc9-bc87-46c3a0f46fa6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '364',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    comments: 'Suspendisse potenti.',
    tagNr: '3166',
    location: 'LR1',
    bbDown: 'tc',
    bbLr: 'cc',
    bbOut: 'se',
    completedAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/01/2023').setHours(
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
    luggageId: '1e0224a3-aace-4329-a058-38c8498fc0d6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '475',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments: 'Nunc purus.',
    tagNr: '3878',
    location: 'LR1',
    bbDown: 'rd',
    bbLr: 'sq',
    bbOut: 'hd',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f35b7193-fb79-4712-94f3-9b0a52c9ef2e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '412',
    name: 'Gaëlle',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: 'Donec dapibus.',
    tagNr: '9901',
    location: 'LR',
    bbDown: null,
    bbLr: 'hz',
    bbOut: 'tb',
    completedAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
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
    luggageId: 'f86feec3-360b-4723-b636-39cb3648c798',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '689',
    name: 'Céline',
    arrivalTime: null,
    bags: '9+3',
    comments: null,
    tagNr: '3651',
    location: 'LR',
    bbDown: null,
    bbLr: 'ax',
    bbOut: 'mz',
    completedAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3db55209-ffb8-4828-b6b7-346279a61a55',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '319',
    name: 'Michèle',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '8973',
    location: 'LR',
    bbDown: 'tu',
    bbLr: 'tb',
    bbOut: 'zp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '220beda9-8a4c-431e-9a3c-d6635a66aedc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '117',
    name: 'Mélina',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: null,
    tagNr: '3568',
    location: 'LR1',
    bbDown: 'ie',
    bbLr: 'pc',
    bbOut: 'om',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '80d95d80-e791-4bce-a6d2-868651201bc5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '555',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: null,
    tagNr: '8586',
    location: 'LR',
    bbDown: 'zi',
    bbLr: 'bn',
    bbOut: 'dg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9852a4af-6ff0-47ca-a168-b4e1ad36ea2a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '011',
    name: 'Andrée',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: null,
    tagNr: '2938',
    location: 'LR',
    bbDown: 'nu',
    bbLr: 'wi',
    bbOut: 'fy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7a2cd68d-e9d5-41d1-9e87-b193ca11418a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '906',
    name: 'Garçon',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: null,
    tagNr: '4822',
    location: 'LR',
    bbDown: 'cz',
    bbLr: 'ov',
    bbOut: 'vy',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e02078b7-5ad5-463a-b1f7-25d0ba302c79',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '608',
    name: 'Ruò',
    arrivalTime: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '9994',
    location: 'LR1',
    bbDown: null,
    bbLr: 'yf',
    bbOut: 'vm',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a306899a-d0ed-4b56-875a-c78e9b80895e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '219',
    name: 'Esbjörn',
    arrivalTime: null,
    bags: '5+9',
    comments: null,
    tagNr: '8897',
    location: 'LR',
    bbDown: 'iy',
    bbLr: 'cr',
    bbOut: 'ma',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8f5fd2d2-26ff-4d4f-a61a-b48a466e24e3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '429',
    name: 'Mélina',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    comments: null,
    tagNr: '8079',
    location: 'LR1',
    bbDown: 'gm',
    bbLr: 'xz',
    bbOut: 'ow',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd95b999a-8259-4d65-9253-8a2b713969ac',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '524',
    name: 'Mahélie',
    arrivalTime: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: 'Nulla mollis molestie lorem.',
    tagNr: '1588',
    location: 'LR1',
    bbDown: 'at',
    bbLr: 'ib',
    bbOut: 'fe',
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '544998a8-c378-4cee-8644-b1b0fc1c1aa3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '164',
    name: 'Loïca',
    arrivalTime: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: null,
    tagNr: '4913',
    location: 'LR',
    bbDown: 'fn',
    bbLr: 'qj',
    bbOut: 'at',
    completedAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0e78806b-bb2f-40dc-b625-2024cbe0e2cd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '028',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    comments: 'Duis bibendum.',
    tagNr: '3512',
    location: 'LR',
    bbDown: 'xv',
    bbLr: 'aj',
    bbOut: 'de',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: 'b867420d-32af-4167-8b53-38b7419f8150',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '374',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    tagNr: '0553',
    location: 'LR1',
    bbDown: 'en',
    bbLr: 'qa',
    bbOut: 'wf',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '86d7a12c-0b0e-404c-93d4-77ff6223fdc0',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '155',
    name: 'Mégane',
    arrivalTime: null,
    bags: '2+5',
    comments: 'Nulla mollis molestie lorem.',
    tagNr: '5180',
    location: 'LR1',
    bbDown: null,
    bbLr: 'rf',
    bbOut: 'zq',
    completedAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
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
    luggageId: '318666e5-5051-4ff4-a122-3ef89ab819f5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '096',
    name: 'Andréanne',
    arrivalTime: null,
    bags: '2+4',
    comments: null,
    tagNr: '5131',
    location: 'LR1',
    bbDown: 'nx',
    bbLr: 'uu',
    bbOut: 'rz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
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
    luggageId: '8c382dbb-1952-4b90-a7f8-fd844561966d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '387',
    name: 'Alizée',
    arrivalTime: null,
    bags: '5+5',
    comments: null,
    tagNr: '8560',
    location: 'LR1',
    bbDown: 'll',
    bbLr: 'wq',
    bbOut: 'hy',
    completedAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: 'a2bb5171-c8ad-4f1c-b2c5-4e6db67168b3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '207',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments: 'Ut tellus.',
    tagNr: '1296',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ux',
    bbOut: 'my',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e57d1612-be20-4131-a3bb-612846807613',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '812',
    name: 'Dorothée',
    arrivalTime: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    comments: null,
    tagNr: '0574',
    location: 'LR1',
    bbDown: null,
    bbLr: 'vs',
    bbOut: 'ql',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/28/2023').setHours(
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
    luggageId: 'd2e4e67c-4d97-43a9-b073-56aba6184f4a',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '942',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments: null,
    tagNr: '9705',
    location: 'LR',
    bbDown: null,
    bbLr: 'wn',
    bbOut: 'df',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ab5d49ea-8430-46a0-9809-c8301a10c460',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '587',
    name: 'Gaïa',
    arrivalTime: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: null,
    tagNr: '6702',
    location: 'LR1',
    bbDown: 'vu',
    bbLr: 'su',
    bbOut: 'np',
    completedAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '758663f7-445b-4184-85d6-cf7118d99535',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '228',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: null,
    tagNr: '4275',
    location: 'LR1',
    bbDown: 'qz',
    bbLr: 'ev',
    bbOut: 'ti',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6cbfdf20-ec14-4223-8571-15ef670687f0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '834',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    comments: null,
    tagNr: '1883',
    location: 'LR',
    bbDown: 'mm',
    bbLr: 'jl',
    bbOut: 'wm',
    completedAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'add6eaf5-8b8a-40d6-a078-c71aaf1b415f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '680',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    comments: 'Aliquam non mauris.',
    tagNr: '6947',
    location: 'LR1',
    bbDown: 'tr',
    bbLr: 'yi',
    bbOut: 'hc',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/10/2022').setHours(
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
    luggageId: '3416268e-24ae-4a77-9da7-ee08648c3a3e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '343',
    name: 'Géraldine',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '8100',
    location: 'LR',
    bbDown: null,
    bbLr: 'dc',
    bbOut: 'vk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/03/2023').setHours(
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
    luggageId: 'b6ea5da7-13b4-4a01-8a71-e87a469b38d4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '175',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    comments: null,
    tagNr: '4960',
    location: 'LR',
    bbDown: 'tx',
    bbLr: 'zw',
    bbOut: 'sg',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
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
    luggageId: 'a902c1ae-07c5-406f-8fbd-8705d54ba88a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '375',
    name: 'Irène',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    tagNr: '5678',
    location: 'LR',
    bbDown: null,
    bbLr: 'kk',
    bbOut: 'mc',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f3c10433-0590-42a7-8540-8633cfe6896f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '359',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments: 'Sed accumsan felis.',
    tagNr: '7785',
    location: 'LR',
    bbDown: null,
    bbLr: 'ri',
    bbOut: 'kj',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a3b42c3d-d161-42d5-b418-03ce53229a1b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '839',
    name: 'Mélodie',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: null,
    tagNr: '6613',
    location: 'LR1',
    bbDown: 'db',
    bbLr: 'eo',
    bbOut: 'qy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'de5b51d3-796f-4277-a915-1b2ae3c6e5f4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '601',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '6241',
    location: 'LR',
    bbDown: null,
    bbLr: 'ks',
    bbOut: 'fb',
    completedAt: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '55ec75fc-efa7-4e80-a18e-1493cb62760e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '654',
    name: 'Sélène',
    arrivalTime: null,
    bags: '3+3',
    comments: 'Ut at dolor quis odio consequat varius.',
    tagNr: '1781',
    location: 'LR1',
    bbDown: 'er',
    bbLr: 'ah',
    bbOut: 'zv',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '794babf0-eee1-4b9a-8fef-dce12de42965',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '673',
    name: 'Lóng',
    arrivalTime: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: null,
    tagNr: '9426',
    location: 'LR1',
    bbDown: 'ht',
    bbLr: 'pi',
    bbOut: 'xg',
    completedAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/18/2023').setHours(
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
    luggageId: '4ddef792-4285-4c44-acb6-6563bf1ecc6d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '819',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments: 'Nunc rhoncus dui vel sem.',
    tagNr: '4838',
    location: 'LR1',
    bbDown: 'nh',
    bbLr: 'wb',
    bbOut: 'th',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'abbd38cc-49a0-4943-b7b3-d52e55b903d8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '981',
    name: 'Styrbjörn',
    arrivalTime: null,
    bags: '9+7',
    comments: null,
    tagNr: '4728',
    location: 'LR1',
    bbDown: 'bt',
    bbLr: 'uw',
    bbOut: 'yo',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/10/2022').setHours(
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
    luggageId: 'cac631e0-d58d-4e2f-9968-46eba47f0f95',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '545',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    comments: 'Pellentesque at nulla.',
    tagNr: '4133',
    location: 'LR',
    bbDown: 'ho',
    bbLr: 'mz',
    bbOut: 'xd',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/21/2022').setHours(
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
    luggageId: 'ce63e155-c091-4fc1-8b0d-cc08e0b4f1fd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '253',
    name: 'Björn',
    arrivalTime: null,
    bags: '0+6',
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '7323',
    location: 'LR',
    bbDown: 'md',
    bbLr: 'rv',
    bbOut: 'rl',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd71f6b71-11aa-4dcf-8237-56ad2eae4fde',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '005',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '8423',
    location: 'LR',
    bbDown: 'ex',
    bbLr: 'wp',
    bbOut: 'wp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ccc86435-e457-466d-a6f6-a8d1e2478542',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '107',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    tagNr: '8256',
    location: 'LR1',
    bbDown: 'tt',
    bbLr: 'ok',
    bbOut: 'iu',
    completedAt: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/24/2023').setHours(
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
    luggageId: '0e52c21c-68bd-4573-91d1-48c15817ba20',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '716',
    name: 'Cléopatre',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    comments: 'Vestibulum rutrum rutrum neque.',
    tagNr: '8607',
    location: 'LR',
    bbDown: 'qy',
    bbLr: 'tq',
    bbOut: 'dq',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '64755335-ecfd-4af7-b566-e9c2f462632c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '609',
    name: 'Cécilia',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    tagNr: '8787',
    location: 'LR',
    bbDown: 'mp',
    bbLr: 'ns',
    bbOut: 'ly',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9d4f2932-75d7-4d94-bf0d-596c78c493ca',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '517',
    name: 'Chloé',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: 'Duis ac nibh.',
    tagNr: '2991',
    location: 'LR',
    bbDown: null,
    bbLr: 'mr',
    bbOut: 'qo',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: '5702154b-c5fd-4d7e-9e65-6e61b2b0ad44',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '153',
    name: 'Nuó',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    comments: 'Etiam justo.',
    tagNr: '7971',
    location: 'LR1',
    bbDown: 'yb',
    bbLr: 'uc',
    bbOut: 'jd',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cb0f2b3e-0da5-4f98-b460-03d73386dbef',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '704',
    name: 'Gaëlle',
    arrivalTime: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    tagNr: '6461',
    location: 'LR',
    bbDown: 'mk',
    bbLr: 'yw',
    bbOut: 'rm',
    completedAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/26/2023').setHours(
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
    luggageId: '20b28ba2-1623-4ee3-84df-327455b51cb5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '514',
    name: 'Edmée',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    comments: 'Donec semper sapien a libero.',
    tagNr: '0194',
    location: 'LR1',
    bbDown: 'uk',
    bbLr: 'ny',
    bbOut: 'hq',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ae7ec015-101e-4e0c-a3b2-36aeb8d8f583',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '301',
    name: 'Zoé',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: null,
    tagNr: '4651',
    location: 'LR1',
    bbDown: 'ms',
    bbLr: 'qu',
    bbOut: 'mf',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd4407fa7-9a07-4d96-9e1e-1d9e5a93c098',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '867',
    name: 'Maëlle',
    arrivalTime: null,
    bags: '1+0',
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    tagNr: '5998',
    location: 'LR1',
    bbDown: null,
    bbLr: 'gq',
    bbOut: 'fc',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/10/2022').setHours(
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
    luggageId: '01e01a3f-4a2e-4f0e-b739-17683cbdab9c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '377',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments: null,
    tagNr: '4983',
    location: 'LR',
    bbDown: 'ed',
    bbLr: 'vv',
    bbOut: 'on',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'da5332d8-5176-4c86-9c30-ce4e76378cc7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '339',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    comments: 'Ut at dolor quis odio consequat varius.',
    tagNr: '7985',
    location: 'LR1',
    bbDown: 'nc',
    bbLr: 'nx',
    bbOut: 'kt',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2045a75d-4909-4e60-ae40-8e60ae57b071',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '627',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: null,
    tagNr: '4995',
    location: 'LR1',
    bbDown: 'zj',
    bbLr: 'fv',
    bbOut: 'gk',
    completedAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'caf4c01f-06af-42dd-bc80-00a1c7de54eb',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '053',
    name: 'Uò',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: null,
    tagNr: '6700',
    location: 'LR',
    bbDown: 'ze',
    bbLr: 'hs',
    bbOut: 'vk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2c9b5c3f-49b8-437a-a49f-97e1fbc4a6f7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '815',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    comments: 'Sed ante.',
    tagNr: '0659',
    location: 'LR',
    bbDown: 'hs',
    bbLr: 'yi',
    bbOut: 'jb',
    completedAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
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
    luggageId: '156f319e-6406-4b2f-9115-c23287a16815',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '388',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    tagNr: '4290',
    location: 'LR1',
    bbDown: 'cw',
    bbLr: 'bn',
    bbOut: 'kp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ce50bd1e-068b-4daa-994b-86099fe4467f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '709',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    comments: 'Etiam faucibus cursus urna.',
    tagNr: '5354',
    location: 'LR',
    bbDown: 'vx',
    bbLr: 'zo',
    bbOut: 'lb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6394eca2-e277-4d6e-942e-4ff005d10ede',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '452',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments: 'In quis justo.',
    tagNr: '5052',
    location: 'LR1',
    bbDown: 'gn',
    bbLr: 'hx',
    bbOut: 'ci',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/03/2023').setHours(
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
    luggageId: 'e74f19dc-d1eb-488a-b08f-c83c4f43d940',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '701',
    name: 'Mélissandre',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments: 'Suspendisse potenti.',
    tagNr: '7755',
    location: 'LR1',
    bbDown: 'hi',
    bbLr: 'pr',
    bbOut: 'rk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd902cb32-36ee-4371-9e59-099a043370bb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '072',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '6227',
    location: 'LR',
    bbDown: 'xi',
    bbLr: 'ie',
    bbOut: 'qr',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'db59681d-843c-4b58-82fd-247ec932113c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '887',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: null,
    tagNr: '8620',
    location: 'LR',
    bbDown: 'ly',
    bbLr: 'mv',
    bbOut: 'sk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c3bdc862-7783-4c8a-818c-1f315c88d298',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '210',
    name: 'Frédérique',
    arrivalTime: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: 'Aenean sit amet justo.',
    tagNr: '2030',
    location: 'LR',
    bbDown: null,
    bbLr: 'ru',
    bbOut: 'bb',
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fc0a8f7e-e942-45ba-bbd5-148bc73e4ff5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '112',
    name: 'Almérinda',
    arrivalTime: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '9626',
    location: 'LR',
    bbDown: 'cu',
    bbLr: 'ly',
    bbOut: 'dc',
    completedAt: new Date(
      new Date('03/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/03/2023').setHours(
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
    luggageId: 'ff73da2e-7443-4a0a-91df-74309e3bf4bd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '434',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'Duis aliquam convallis nunc.',
    tagNr: '8974',
    location: 'LR1',
    bbDown: null,
    bbLr: 'zn',
    bbOut: 'rw',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b91da9b9-e035-4f50-8804-daa8b62c1ec9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '975',
    name: 'Laurène',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: 'Nullam varius.',
    tagNr: '5359',
    location: 'LR',
    bbDown: 'cd',
    bbLr: 'ez',
    bbOut: 'ql',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '923306ef-89b1-4de2-8690-48d2ac35d417',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '856',
    name: 'Alizée',
    arrivalTime: null,
    bags: '1+7',
    comments: 'Integer tincidunt ante vel ipsum.',
    tagNr: '8860',
    location: 'LR1',
    bbDown: 'je',
    bbLr: 'mh',
    bbOut: 'sx',
    completedAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9789fec9-a36a-4743-89e1-84de6eec8594',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '523',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: 'Quisque ut erat.',
    tagNr: '3040',
    location: 'LR1',
    bbDown: 'jt',
    bbLr: 'td',
    bbOut: 'hl',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '42d2f2c0-68e6-479e-9a3a-398148c3aaeb',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '171',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: null,
    tagNr: '6994',
    location: 'LR1',
    bbDown: 'at',
    bbLr: 'sv',
    bbOut: 'au',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e9d63fae-f2b4-4cbe-9d9b-23c17444c66b',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '821',
    name: 'Intéressant',
    arrivalTime: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments: null,
    tagNr: '7757',
    location: 'LR1',
    bbDown: null,
    bbLr: 'nv',
    bbOut: 'dk',
    completedAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/07/2023').setHours(
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
    luggageId: 'fd5d6411-f7dc-4601-901d-9140c80a74a2',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '625',
    name: 'André',
    arrivalTime: null,
    bags: '7+1',
    comments: 'Duis bibendum.',
    tagNr: '8512',
    location: 'LR1',
    bbDown: 'wk',
    bbLr: 'bf',
    bbOut: 'in',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ff9895cd-6b1b-4583-8005-e0b72554fa96',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '221',
    name: 'Dà',
    arrivalTime: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: 'Sed sagittis.',
    tagNr: '9738',
    location: 'LR1',
    bbDown: 'rh',
    bbLr: 'xh',
    bbOut: 'vv',
    completedAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '51130562-c756-42f9-9cb9-535d1dd27aad',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '272',
    name: 'Annotée',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    comments: 'Fusce posuere felis sed lacus.',
    tagNr: '8344',
    location: 'LR',
    bbDown: 'tv',
    bbLr: 'jv',
    bbOut: 'ha',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a6c429d5-49c3-4a62-8e93-4bb9ffa55d5a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '278',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: null,
    tagNr: '0683',
    location: 'LR1',
    bbDown: 'ml',
    bbLr: 'qo',
    bbOut: 'eq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5e43d52e-e1dd-4329-814a-858c29b6b952',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '490',
    name: 'Marie-thérèse',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments: null,
    tagNr: '4073',
    location: 'LR1',
    bbDown: 'nn',
    bbLr: 'lw',
    bbOut: 'ye',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0ffd9f2b-b3a6-45c3-a3b7-989ba2b07d3d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '186',
    name: 'Michèle',
    arrivalTime: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: null,
    tagNr: '2640',
    location: 'LR',
    bbDown: null,
    bbLr: 'pb',
    bbOut: 'aw',
    completedAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e4237be9-cc03-487d-a646-73ac48b4702e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '101',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: 'Ut at dolor quis odio consequat varius.',
    tagNr: '2884',
    location: 'LR',
    bbDown: 'ez',
    bbLr: 'bf',
    bbOut: 'kk',
    completedAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/19/2023').setHours(
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
    luggageId: 'c6e810a3-aeee-43d5-a309-18052d386c2d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '143',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '9504',
    location: 'LR',
    bbDown: 'cf',
    bbLr: 'tz',
    bbOut: 'nb',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: 'ec1fa7c6-e85e-4036-9244-d08ed99fa891',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '433',
    name: 'Eloïse',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    tagNr: '1179',
    location: 'LR1',
    bbDown: 'wt',
    bbLr: 'pi',
    bbOut: 'fd',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: '890114c1-1191-4aa5-8a65-9eaab26bf564',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '703',
    name: 'Andréa',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments: 'Nulla suscipit ligula in lacus.',
    tagNr: '0035',
    location: 'LR',
    bbDown: 'fs',
    bbLr: 'gm',
    bbOut: 'gk',
    completedAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '793c7dc9-aacd-4e27-a19b-6a5c3ab3dc28',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '199',
    name: 'Maéna',
    arrivalTime: null,
    bags: '2+9',
    comments: 'Suspendisse ornare consequat lectus.',
    tagNr: '0295',
    location: 'LR1',
    bbDown: 'ye',
    bbLr: 'eh',
    bbOut: 'xm',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2e6a7b27-5342-44e6-9058-38aa419296f4',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '238',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    tagNr: '9863',
    location: 'LR',
    bbDown: 'rk',
    bbLr: 'lh',
    bbOut: 'uk',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ec1436e5-b91a-4ba3-87e1-6b03d9f108dc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '183',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '8442',
    location: 'LR',
    bbDown: null,
    bbLr: 'oe',
    bbOut: 'kz',
    completedAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6e173ff2-dcf0-4ca1-b397-3db08fcb9c40',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '164',
    name: 'André',
    arrivalTime: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '0313',
    location: 'LR1',
    bbDown: 'lc',
    bbLr: 'oj',
    bbOut: 'hu',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c6b7163a-bb93-4666-839c-efa1f9892fed',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '672',
    name: 'Annotée',
    arrivalTime: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: null,
    tagNr: '3212',
    location: 'LR1',
    bbDown: 'bw',
    bbLr: 'xc',
    bbOut: 'sy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
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
    luggageId: 'e84189dd-5eb4-4bd7-8273-7ee8b93e76ef',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '486',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: null,
    tagNr: '4432',
    location: 'LR',
    bbDown: null,
    bbLr: 'oh',
    bbOut: 'cw',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5de82e0f-4ac5-4564-9593-bf877a4565ba',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '333',
    name: 'Yóu',
    arrivalTime: null,
    bags: '8+5',
    comments: 'Nunc nisl.',
    tagNr: '1530',
    location: 'LR',
    bbDown: 'jf',
    bbLr: 'vp',
    bbOut: 'rj',
    completedAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8ea44a4c-3711-4e24-a074-c39d5e9978bf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '672',
    name: 'Thérèsa',
    arrivalTime: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '7505',
    location: 'LR',
    bbDown: 'xm',
    bbLr: 'fx',
    bbOut: 'uz',
    completedAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/11/2023').setHours(
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
    luggageId: '5ee89b7c-3972-4374-95a4-00d478866577',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '957',
    name: 'Daphnée',
    arrivalTime: null,
    bags: '2+6',
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '2955',
    location: 'LR',
    bbDown: 'rg',
    bbLr: 'az',
    bbOut: 'kj',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/23/2022').setHours(
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
    luggageId: '50adf3c2-2966-44c8-99ac-50448ce5049b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '805',
    name: 'Marie-françoise',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '9851',
    location: 'LR',
    bbDown: 'fe',
    bbLr: 'al',
    bbOut: 'gl',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7f881537-c189-4a13-961f-4e1fcc95cb36',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '037',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: 'Duis at velit eu est congue elementum.',
    tagNr: '5432',
    location: 'LR1',
    bbDown: 'wo',
    bbLr: 'uv',
    bbOut: 'co',
    completedAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b1dbda48-93a5-4609-97ad-dea051e62191',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '836',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '5327',
    location: 'LR1',
    bbDown: 'zk',
    bbLr: 'dm',
    bbOut: 'oh',
    completedAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/17/2023').setHours(
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
    luggageId: '260d7de4-b7a0-48fb-bbc9-2b615a7d7c25',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '381',
    name: 'Zoé',
    arrivalTime: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    tagNr: '9086',
    location: 'LR1',
    bbDown: 'sn',
    bbLr: 'ks',
    bbOut: 'ei',
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '95ad7072-0db7-4dcc-a227-76317311095b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '675',
    name: 'Valérie',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    comments: null,
    tagNr: '3539',
    location: 'LR1',
    bbDown: 'pj',
    bbLr: 'xh',
    bbOut: 'qd',
    completedAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/05/2023').setHours(
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
    luggageId: '60177644-f2d9-4326-9591-69511fa66fb1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '325',
    name: 'Félicie',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    comments: 'Aenean fermentum.',
    tagNr: '6401',
    location: 'LR',
    bbDown: 'ah',
    bbLr: 'tn',
    bbOut: 'gz',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2acbc57c-7b96-4e54-8175-8e595d32fa6d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '654',
    name: 'Céline',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    comments: 'In quis justo.',
    tagNr: '0245',
    location: 'LR1',
    bbDown: null,
    bbLr: 'dn',
    bbOut: 'ij',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '17c96808-cda4-46a1-b079-9710aff09e87',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '819',
    name: 'Béatrice',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '6399',
    location: 'LR1',
    bbDown: 'zh',
    bbLr: 'mc',
    bbOut: 'eb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0f75fca4-1e30-4f8a-8b38-c9eca2a3a28f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '080',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '7715',
    location: 'LR',
    bbDown: null,
    bbLr: 'bm',
    bbOut: 'sl',
    completedAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bddd729c-92b0-4240-a711-48b439e9da6f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '145',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: null,
    tagNr: '4660',
    location: 'LR1',
    bbDown: 'pw',
    bbLr: 'pw',
    bbOut: 'zh',
    completedAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'eecb1fc7-8e1f-4a9f-8882-d8aa82eb64fc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '723',
    name: 'Maïté',
    arrivalTime: null,
    bags: '5+0',
    comments: null,
    tagNr: '5274',
    location: 'LR',
    bbDown: 'ch',
    bbLr: 'pb',
    bbOut: 'yk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '95388105-9842-47ec-ae0f-d0adbf09f35c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '707',
    name: 'Lauréna',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: 'Curabitur convallis.',
    tagNr: '4955',
    location: 'LR',
    bbDown: 'yf',
    bbLr: 'il',
    bbOut: 'eg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bb052f96-42fc-4405-bc59-f43b06aa062d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '617',
    name: 'Clélia',
    arrivalTime: null,
    bags: '4+6',
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '6306',
    location: 'LR1',
    bbDown: 'eb',
    bbLr: 'rx',
    bbOut: 'ws',
    completedAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '691a97a6-74ef-4071-889d-ef194ad5ac4a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '196',
    name: 'Liè',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments: 'Curabitur gravida nisi at nibh.',
    tagNr: '7738',
    location: 'LR',
    bbDown: 'sv',
    bbLr: 'bk',
    bbOut: 'pk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '98ceb2ae-6669-4bce-a727-9015b24f8241',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '318',
    name: 'Dà',
    arrivalTime: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: null,
    tagNr: '4542',
    location: 'LR',
    bbDown: 'gd',
    bbLr: 'ml',
    bbOut: 'eb',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bfd2c95d-c36c-437f-9f1e-f20182e5578e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '079',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    comments: null,
    tagNr: '5480',
    location: 'LR',
    bbDown: null,
    bbLr: 'dg',
    bbOut: 'av',
    completedAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1429b891-a353-4780-aed8-a50ae098997c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '757',
    name: 'Táng',
    arrivalTime: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'Sed sagittis.',
    tagNr: '7039',
    location: 'LR1',
    bbDown: null,
    bbLr: 'iv',
    bbOut: 'dy',
    completedAt: new Date(
      new Date('03/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c239fab6-9dc5-457e-99d7-aee390ab0d5f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '326',
    name: 'Judicaël',
    arrivalTime: null,
    bags: '4+5',
    comments: null,
    tagNr: '3070',
    location: 'LR',
    bbDown: 'dn',
    bbLr: 'jf',
    bbOut: 'hg',
    completedAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/02/2023').setHours(
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
    luggageId: 'eb34cdf7-fad4-45fb-b901-b7634b0f9e2c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '768',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    comments: 'Nunc nisl.',
    tagNr: '8730',
    location: 'LR',
    bbDown: null,
    bbLr: 'jy',
    bbOut: 'oj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c909bf90-2e1f-4478-8970-a01da025fa74',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '892',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: null,
    tagNr: '6528',
    location: 'LR',
    bbDown: 'gd',
    bbLr: 'fr',
    bbOut: 'ji',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '76e93163-0fac-4252-bdc9-484ad2076be5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '257',
    name: 'Vénus',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '4278',
    location: 'LR',
    bbDown: 'xv',
    bbLr: 'rr',
    bbOut: 'br',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e09398d7-f6b4-40d1-abc7-566228b6dca0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '723',
    name: 'Amélie',
    arrivalTime: null,
    bags: '0+6',
    comments: 'Pellentesque ultrices mattis odio.',
    tagNr: '0231',
    location: 'LR1',
    bbDown: 'ru',
    bbLr: 'gj',
    bbOut: 'gj',
    completedAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '67d1df4d-c190-4d37-9aef-65d1c6aac694',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '251',
    name: 'Eléonore',
    arrivalTime: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '4765',
    location: 'LR',
    bbDown: null,
    bbLr: 'sn',
    bbOut: 'ai',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/14/2023').setHours(
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
    luggageId: '72e6d258-68a9-493a-ac59-356da19920b2',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '461',
    name: 'Mélina',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    tagNr: '4339',
    location: 'LR',
    bbDown: 'sx',
    bbLr: 'lb',
    bbOut: 'qy',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cd35389e-d0bb-41b3-baa4-4610fa5636a3',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '972',
    name: 'Yú',
    arrivalTime: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    comments: 'Duis ac nibh.',
    tagNr: '1489',
    location: 'LR1',
    bbDown: null,
    bbLr: 'kt',
    bbOut: 'nf',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/11/2022').setHours(
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
    luggageId: '29676602-d0e3-45ee-a15d-1dede6552240',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '160',
    name: 'Yáo',
    arrivalTime: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    tagNr: '2145',
    location: 'LR',
    bbDown: 'dd',
    bbLr: 'gp',
    bbOut: 'kl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/01/2023').setHours(
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
    luggageId: 'e607fab6-8b5f-4180-b272-d1659f318b78',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '333',
    name: 'Lóng',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '5650',
    location: 'LR',
    bbDown: 'be',
    bbLr: 'ft',
    bbOut: 'ij',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: '01412c38-7f34-4260-9037-7154cf640a16',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '862',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: 'Nulla suscipit ligula in lacus.',
    tagNr: '5886',
    location: 'LR',
    bbDown: 'lu',
    bbLr: 'rq',
    bbOut: 'tk',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/23/2022').setHours(
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
    luggageId: '60b37864-7e3d-4dcf-9d34-066ff55c8830',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '401',
    name: 'Mylène',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: 'Curabitur convallis.',
    tagNr: '8465',
    location: 'LR',
    bbDown: 'uh',
    bbLr: 'hy',
    bbOut: 'xj',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f94aa9bf-6df4-4fd8-9f28-bd995de76165',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '304',
    name: 'Noémie',
    arrivalTime: null,
    bags: '5+7',
    comments: 'Maecenas rhoncus aliquam lacus.',
    tagNr: '0178',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xw',
    bbOut: 'ie',
    completedAt: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f4ca2b0c-fbe8-4a7d-b2aa-5dda8698c3fa',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '210',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    tagNr: '8890',
    location: 'LR1',
    bbDown: 'gk',
    bbLr: 'mp',
    bbOut: 'yp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'af7f1d9a-0192-4e72-afa5-c20c9777a3f1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '516',
    name: 'Magdalène',
    arrivalTime: null,
    bags: '3+3',
    comments: null,
    tagNr: '6525',
    location: 'LR1',
    bbDown: 'ci',
    bbLr: 'sq',
    bbOut: 'hj',
    completedAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6842d454-ef25-43a8-926a-bb24e9efcb37',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '640',
    name: 'Léane',
    arrivalTime: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    comments: null,
    tagNr: '5290',
    location: 'LR',
    bbDown: null,
    bbLr: 'hr',
    bbOut: 'ne',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/21/2023').setHours(
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
    luggageId: '8b45a26b-5b8c-41da-bf31-12c4b62b0a4a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '315',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: 'Integer tincidunt ante vel ipsum.',
    tagNr: '8922',
    location: 'LR',
    bbDown: null,
    bbLr: 'lk',
    bbOut: 'ye',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8daf3400-7748-4c63-b40a-0b18d4e87c9b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '027',
    name: 'Maïwenn',
    arrivalTime: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    comments: null,
    tagNr: '7654',
    location: 'LR',
    bbDown: 'gu',
    bbLr: 'yw',
    bbOut: 'mg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '456d20f0-912d-44d2-a53d-a024b90c3833',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '934',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    comments: null,
    tagNr: '0700',
    location: 'LR',
    bbDown: null,
    bbLr: 'mj',
    bbOut: 'dp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/04/2023').setHours(
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
    luggageId: '3bf29ade-50d1-4576-a9d0-4abb8d8112ca',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '321',
    name: 'Pò',
    arrivalTime: null,
    bags: '7+5',
    comments: null,
    tagNr: '8199',
    location: 'LR1',
    bbDown: 'up',
    bbLr: 'ma',
    bbOut: 'if',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '532eaa71-b799-4c09-b908-9d316b88710b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '147',
    name: 'Michèle',
    arrivalTime: null,
    bags: '6+0',
    comments: null,
    tagNr: '6193',
    location: 'LR',
    bbDown: 'rh',
    bbLr: 'wg',
    bbOut: 'zn',
    completedAt: new Date(
      new Date('03/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2f6c1bb1-addd-4b43-9152-b6958edc35ad',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '213',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '1723',
    location: 'LR',
    bbDown: 'it',
    bbLr: 'pc',
    bbOut: 'yu',
    completedAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/30/2022').setHours(
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
    luggageId: '5b6d4566-bae7-4c70-9016-3b075f32d467',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '348',
    name: 'Amélie',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    tagNr: '2120',
    location: 'LR',
    bbDown: 'kd',
    bbLr: 'tx',
    bbOut: 'sk',
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: '837368d5-465f-410d-9916-326bfcdaed5f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '089',
    name: 'Séverine',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '4698',
    location: 'LR',
    bbDown: 'od',
    bbLr: 'uh',
    bbOut: 'is',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dda37050-4779-42f2-8e91-fc9813f1b021',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '379',
    name: 'Eléa',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    comments: null,
    tagNr: '0298',
    location: 'LR1',
    bbDown: 'iq',
    bbLr: 'rr',
    bbOut: 'gm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9988ec65-9608-413b-9c37-56d75bd0446a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '537',
    name: 'Mélys',
    arrivalTime: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: 'Sed sagittis.',
    tagNr: '2868',
    location: 'LR',
    bbDown: 'px',
    bbLr: 'vo',
    bbOut: 'uf',
    completedAt: new Date(
      new Date('03/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/01/2023').setHours(
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
    luggageId: '1633db77-b9c4-4f49-908c-7f70c30c0553',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '076',
    name: 'Anaé',
    arrivalTime: null,
    bags: '6+6',
    comments: 'Morbi a ipsum.',
    tagNr: '2646',
    location: 'LR1',
    bbDown: 'ib',
    bbLr: 'wf',
    bbOut: 'pe',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: '5ad54051-7e50-429b-b47e-404269a3bc35',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '613',
    name: 'Åsa',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: null,
    tagNr: '0369',
    location: 'LR',
    bbDown: 'nf',
    bbLr: 'rm',
    bbOut: 'qr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/28/2022').setHours(
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
    luggageId: '64b40f1f-af73-48b6-8c03-065adabe95f5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '335',
    name: 'Marylène',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    comments: null,
    tagNr: '9430',
    location: 'LR1',
    bbDown: 'jc',
    bbLr: 'vl',
    bbOut: 'mp',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: 'bc03db2f-24a5-4ccf-bc91-b24a3be48db1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '607',
    name: 'Mélia',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: null,
    tagNr: '2949',
    location: 'LR1',
    bbDown: 'zw',
    bbLr: 'tl',
    bbOut: 'in',
    completedAt: null,
    dateNeeded: new Date(
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
    luggageId: '512864c4-20eb-406c-b91b-599dfea134ac',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '957',
    name: 'Geneviève',
    arrivalTime: null,
    bags: '5+8',
    comments: null,
    tagNr: '8310',
    location: 'LR',
    bbDown: 'qz',
    bbLr: 'jp',
    bbOut: 'lj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/05/2023').setHours(
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
    luggageId: '61ab52cd-c4cf-4453-9679-d6897ab25243',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '357',
    name: 'Lài',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments: 'Cras pellentesque volutpat dui.',
    tagNr: '1418',
    location: 'LR1',
    bbDown: 'vc',
    bbLr: 'jv',
    bbOut: 'pv',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'aeaead7f-c84b-4de9-8607-51ff59b7a0e3',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '947',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: 'Maecenas pulvinar lobortis est.',
    tagNr: '2118',
    location: 'LR1',
    bbDown: 'vx',
    bbLr: 'bk',
    bbOut: 'an',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8ed30aa1-21fd-487b-94d3-364afa2eb2bb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '895',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: 'Phasellus sit amet erat.',
    tagNr: '5063',
    location: 'LR',
    bbDown: 'mf',
    bbLr: 'vq',
    bbOut: 'ye',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/22/2023').setHours(
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
    luggageId: '234443a9-f9c4-4a91-b2ff-5a7105206317',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '092',
    name: 'Bécassine',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: 'Donec ut dolor.',
    tagNr: '5885',
    location: 'LR1',
    bbDown: 'ed',
    bbLr: 'yk',
    bbOut: 'qm',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9707ebcc-94fc-4fdb-b8f7-9644b3b0e3f5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '232',
    name: 'Amélie',
    arrivalTime: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: null,
    tagNr: '0267',
    location: 'LR',
    bbDown: null,
    bbLr: 'cf',
    bbOut: 'ns',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/22/2023').setHours(
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
    luggageId: '558c0467-1f5d-47e5-86e2-8f8fe72d4150',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '746',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: 'Proin eu mi.',
    tagNr: '6408',
    location: 'LR',
    bbDown: 'mb',
    bbLr: 'hf',
    bbOut: 'ad',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4b683c9b-c229-46e9-abcd-bfb6807fc8bc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '012',
    name: 'Lorène',
    arrivalTime: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    comments: null,
    tagNr: '5625',
    location: 'LR',
    bbDown: null,
    bbLr: 'if',
    bbOut: 'zl',
    completedAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8b43dd4b-8c8f-40f2-b3d1-8d3129f1b539',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '492',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: null,
    tagNr: '8871',
    location: 'LR',
    bbDown: 'tr',
    bbLr: 'ta',
    bbOut: 'cs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/29/2023').setHours(
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
    luggageId: '5719935c-bd34-4eb7-98ac-5dfa06070a3d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '717',
    name: 'Crééz',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: 'Praesent blandit lacinia erat.',
    tagNr: '8278',
    location: 'LR',
    bbDown: null,
    bbLr: 'mu',
    bbOut: 'yb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4a96f6a1-072a-4e38-ba02-b6245ba5b6ea',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '830',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    comments: 'Nulla justo.',
    tagNr: '9598',
    location: 'LR1',
    bbDown: 'oz',
    bbLr: 'gl',
    bbOut: 'ys',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/20/2023').setHours(
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
    luggageId: '5f844d32-2202-40bf-8dcb-adc50120e587',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '828',
    name: 'Zoé',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: 'Aenean lectus.',
    tagNr: '5053',
    location: 'LR',
    bbDown: 'rx',
    bbLr: 'xj',
    bbOut: 'ss',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e352627e-6e4f-4e73-929b-299125d16f33',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '366',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    comments: null,
    tagNr: '8139',
    location: 'LR1',
    bbDown: 'uh',
    bbLr: 'rr',
    bbOut: 'wh',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f97bd69b-e384-4d07-ba98-d64a6e606d73',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '345',
    name: 'Nélie',
    arrivalTime: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '0337',
    location: 'LR',
    bbDown: 'th',
    bbLr: 'jt',
    bbOut: 'xw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'af035e95-6f75-4a28-91c1-c5703d181f86',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '284',
    name: 'Loïca',
    arrivalTime: null,
    bags: '9+2',
    comments: null,
    tagNr: '8850',
    location: 'LR',
    bbDown: 'fm',
    bbLr: 'sv',
    bbOut: 'xa',
    completedAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '562ba7e9-88f1-4469-9d80-33885a8115a9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '122',
    name: 'Simplifiés',
    arrivalTime: null,
    bags: '8+4',
    comments: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '9267',
    location: 'LR',
    bbDown: 'mq',
    bbLr: 'lo',
    bbOut: 'ou',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9f47a19e-68ca-4497-95e7-fd464f74439b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '375',
    name: 'Åke',
    arrivalTime: null,
    bags: '3+3',
    comments: 'Fusce posuere felis sed lacus.',
    tagNr: '7444',
    location: 'LR1',
    bbDown: null,
    bbLr: 'jc',
    bbOut: 'ze',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5da522f9-cd0b-4594-b27f-05cabadf98a6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '511',
    name: 'Åsa',
    arrivalTime: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    comments: null,
    tagNr: '1831',
    location: 'LR1',
    bbDown: 'ol',
    bbLr: 'bs',
    bbOut: 'ps',
    completedAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/29/2023').setHours(
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
    luggageId: '1c6178da-298d-448f-bc5b-0a922b52005d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '144',
    name: 'Ophélie',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: null,
    tagNr: '6633',
    location: 'LR1',
    bbDown: 'th',
    bbLr: 'dd',
    bbOut: 'bn',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1a16dae6-9dea-4cfd-b810-3742857cb68c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '142',
    name: 'Måns',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    tagNr: '7757',
    location: 'LR1',
    bbDown: null,
    bbLr: 'yq',
    bbOut: 'yd',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '034e8722-08f5-4ad2-ab43-264bcd2ce0cd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '258',
    name: 'Pål',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments: null,
    tagNr: '0209',
    location: 'LR',
    bbDown: 've',
    bbLr: 'ta',
    bbOut: 'ov',
    completedAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8d8ec5fd-b606-4e25-9df9-e8fb46796dc5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '252',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: null,
    tagNr: '0820',
    location: 'LR',
    bbDown: 'mi',
    bbLr: 'du',
    bbOut: 'py',
    completedAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6b16780f-2223-4d49-8446-187eaceaffcb',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '961',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    comments: 'Ut at dolor quis odio consequat varius.',
    tagNr: '5143',
    location: 'LR1',
    bbDown: 'kh',
    bbLr: 'jp',
    bbOut: 'ek',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/29/2023').setHours(
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
    luggageId: 'aa6a6308-41e7-4ad6-ba28-45592637724c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '817',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'Pellentesque viverra pede ac diam.',
    tagNr: '9305',
    location: 'LR',
    bbDown: 'tj',
    bbLr: 'dv',
    bbOut: 'dd',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '945c21cb-68ae-4bc4-b205-d5006cedde17',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '958',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: null,
    tagNr: '0429',
    location: 'LR',
    bbDown: 'kt',
    bbLr: 'ah',
    bbOut: 'vp',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'aba87444-bc3d-4fc5-8514-e84cc340c4bb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '481',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: null,
    tagNr: '8751',
    location: 'LR1',
    bbDown: 'xu',
    bbLr: 'oc',
    bbOut: 'cm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/14/2023').setHours(
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
    luggageId: '4462c061-f66a-4a5b-a19f-78377bc3901d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '356',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Nam nulla.',
    tagNr: '2302',
    location: 'LR1',
    bbDown: null,
    bbLr: 'kr',
    bbOut: 'fg',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f0bcae49-cbac-4dca-a66e-e9adb81b8132',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '498',
    name: 'Clémence',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    comments: 'Cras pellentesque volutpat dui.',
    tagNr: '7837',
    location: 'LR1',
    bbDown: 'it',
    bbLr: 'nn',
    bbOut: 'tz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
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
    luggageId: '990a2034-b969-499d-9ff5-4f53afed2963',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '631',
    name: 'Gaïa',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: 'Nullam porttitor lacus at turpis.',
    tagNr: '9158',
    location: 'LR',
    bbDown: 'gw',
    bbLr: 'eo',
    bbOut: 'ph',
    completedAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '452a5b2a-a947-44ee-88cb-f330998b5875',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '828',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: null,
    tagNr: '5418',
    location: 'LR1',
    bbDown: 'ti',
    bbLr: 'df',
    bbOut: 'dd',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
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
    luggageId: '3a85d112-c2a8-4a33-9393-31f463ff21df',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '023',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '1710',
    location: 'LR1',
    bbDown: 'la',
    bbLr: 'hu',
    bbOut: 'pg',
    completedAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '94b0879a-f5d1-4601-958c-59fb03e98ec3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '667',
    name: 'Léonore',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: null,
    tagNr: '6723',
    location: 'LR1',
    bbDown: 'ol',
    bbLr: 'oz',
    bbOut: 'te',
    completedAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/06/2023').setHours(
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
    luggageId: 'e457baae-c12c-4888-b6fd-cf2a654ba85c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '038',
    name: 'Clélia',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: null,
    tagNr: '2350',
    location: 'LR1',
    bbDown: null,
    bbLr: 'vy',
    bbOut: 'he',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '996721fd-ed41-4ca6-9bf6-2639357e8ee2',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '634',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: null,
    tagNr: '3586',
    location: 'LR',
    bbDown: null,
    bbLr: 'jn',
    bbOut: 'nm',
    completedAt: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/04/2023').setHours(
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
    luggageId: '76af9a7a-c68d-4eba-aa72-5fb5642a5bcc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '465',
    name: 'Desirée',
    arrivalTime: null,
    bags: '2+2',
    comments: 'Fusce posuere felis sed lacus.',
    tagNr: '8914',
    location: 'LR1',
    bbDown: null,
    bbLr: 'sg',
    bbOut: 'ta',
    completedAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '331c91a5-47c5-442f-aa5f-567d2c88b331',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '714',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: null,
    tagNr: '3857',
    location: 'LR1',
    bbDown: 'qf',
    bbLr: 'nn',
    bbOut: 'hq',
    completedAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dc201e9e-e3b2-4438-9192-d7dfe6884190',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '421',
    name: 'Märta',
    arrivalTime: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: null,
    tagNr: '9471',
    location: 'LR',
    bbDown: 'tu',
    bbLr: 'fs',
    bbOut: 'wf',
    completedAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c4128585-dc94-450c-93ac-f6d280812de5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '533',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments: 'Nulla tellus.',
    tagNr: '0475',
    location: 'LR1',
    bbDown: 'rj',
    bbLr: 'ze',
    bbOut: 'as',
    completedAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8721732e-91fe-48d2-975e-7ea2c5bab955',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '040',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    tagNr: '1798',
    location: 'LR1',
    bbDown: 'jk',
    bbLr: 'dv',
    bbOut: 'ur',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '345592d6-b803-4663-9fd4-34b239eea8bf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '714',
    name: 'Mélanie',
    arrivalTime: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '9330',
    location: 'LR1',
    bbDown: 'os',
    bbLr: 'ax',
    bbOut: 'ob',
    completedAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c3664e8e-b578-4d62-a955-e001f9eedf96',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '961',
    name: 'Personnalisée',
    arrivalTime: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '8358',
    location: 'LR',
    bbDown: 'bm',
    bbLr: 'yv',
    bbOut: 'sc',
    completedAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '22297a2e-0a22-4c52-a9bc-c2dbf672a0ea',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '334',
    name: 'Salomé',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: 'Fusce posuere felis sed lacus.',
    tagNr: '5623',
    location: 'LR',
    bbDown: 'xr',
    bbLr: 'la',
    bbOut: 'wx',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7685109f-3619-4071-9d93-ad0ef21d6fe9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '982',
    name: 'Rachèle',
    arrivalTime: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '0868',
    location: 'LR1',
    bbDown: 'ya',
    bbLr: 'pw',
    bbOut: 'pt',
    completedAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2da2092e-d991-406c-bc0d-1bc746b3727c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '970',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '0831',
    location: 'LR',
    bbDown: 'lr',
    bbLr: 'gx',
    bbOut: 'na',
    completedAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a1f6baa5-c3e4-442b-8513-08f0d0b2317f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '859',
    name: 'Adélaïde',
    arrivalTime: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: null,
    tagNr: '8061',
    location: 'LR',
    bbDown: 'bh',
    bbLr: 'tc',
    bbOut: 'dw',
    completedAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1f8c12a2-2320-476b-b348-f387128baa28',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '959',
    name: 'Lèi',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    comments: 'Integer non velit.',
    tagNr: '7115',
    location: 'LR1',
    bbDown: 'qc',
    bbLr: 'ij',
    bbOut: 'iy',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
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
    luggageId: '3b625db9-7f5b-46d5-8b13-0354a9a58994',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '549',
    name: 'Gaétane',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: null,
    tagNr: '8504',
    location: 'LR',
    bbDown: 'ac',
    bbLr: 'nu',
    bbOut: 'yt',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '29b9ad04-0564-42b2-83f4-0bbbfd6bcccf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '338',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    comments: null,
    tagNr: '3066',
    location: 'LR1',
    bbDown: 'ws',
    bbLr: 'dq',
    bbOut: 'ar',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3bf5b38f-f493-46b4-9b8f-77bad9fe3b1e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '371',
    name: 'Cécilia',
    arrivalTime: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    comments: null,
    tagNr: '9739',
    location: 'LR1',
    bbDown: null,
    bbLr: 'kj',
    bbOut: 'fy',
    completedAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
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
    luggageId: 'a72ad8cb-8728-4642-b166-7c8bcde5f843',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '006',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments: null,
    tagNr: '9095',
    location: 'LR',
    bbDown: null,
    bbLr: 'zx',
    bbOut: 'cp',
    completedAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ffe7f506-22d1-4c00-9e91-725c26786664',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '629',
    name: 'Angèle',
    arrivalTime: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '6157',
    location: 'LR',
    bbDown: 'xp',
    bbLr: 'du',
    bbOut: 'sj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/10/2023').setHours(
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
    luggageId: 'ee6a1f45-e8de-44ab-a12c-02382adf3d34',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '207',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    comments: 'Nulla tellus.',
    tagNr: '8794',
    location: 'LR',
    bbDown: 'tl',
    bbLr: 'jr',
    bbOut: 'lw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '13534ed9-f804-4f87-9fde-18f26411cdb1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '753',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    tagNr: '1380',
    location: 'LR',
    bbDown: 'xe',
    bbLr: 'wq',
    bbOut: 'xl',
    completedAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '20e3bf27-12a7-4e20-8941-71125d692b79',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '463',
    name: 'Faîtes',
    arrivalTime: null,
    bags: '6+0',
    comments: null,
    tagNr: '5902',
    location: 'LR1',
    bbDown: 'rm',
    bbLr: 'dm',
    bbOut: 'rs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/07/2023').setHours(
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
    luggageId: '7ee0b877-09e7-4c69-a57e-cb969a47c3c0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '735',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    comments: null,
    tagNr: '3460',
    location: 'LR1',
    bbDown: 'bl',
    bbLr: 'sp',
    bbOut: 'sa',
    completedAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
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
    luggageId: '830c624d-2ebf-499f-818c-b5bca7c5e0df',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '222',
    name: 'Magdalène',
    arrivalTime: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: null,
    tagNr: '7267',
    location: 'LR',
    bbDown: null,
    bbLr: 'no',
    bbOut: 'gp',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3c040c0d-e615-4897-bc99-aa35a99facc6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '086',
    name: 'Léonie',
    arrivalTime: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    tagNr: '5928',
    location: 'LR',
    bbDown: 'wl',
    bbLr: 'tz',
    bbOut: 'gj',
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7ad8ca33-c344-4fdd-a75a-be9027c963fe',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '196',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments: null,
    tagNr: '3173',
    location: 'LR1',
    bbDown: 'mm',
    bbLr: 'yz',
    bbOut: 'oh',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/07/2022').setHours(
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
    luggageId: 'ed7fddd0-5155-4fbd-8855-268ef4ac9ed4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '847',
    name: 'Marie-françoise',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments: null,
    tagNr: '4725',
    location: 'LR',
    bbDown: 'oy',
    bbLr: 'cb',
    bbOut: 'pz',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4cb6d261-4241-47c5-a506-f30986e65637',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '092',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments: null,
    tagNr: '1081',
    location: 'LR1',
    bbDown: 'jm',
    bbLr: 'eo',
    bbOut: 'si',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/21/2023').setHours(
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
    luggageId: '26e042ad-8861-4169-a327-2725a44c3849',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '608',
    name: 'Noémie',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '6290',
    location: 'LR',
    bbDown: 'ij',
    bbLr: 'gj',
    bbOut: 'jf',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e751e323-8252-4629-9eac-df40b3715fbb',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '320',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    comments: 'Nulla justo.',
    tagNr: '4057',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ch',
    bbOut: 'rj',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3c00a076-a541-4a46-b52a-189b66e8c2e4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '265',
    name: 'Garçon',
    arrivalTime: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    comments: null,
    tagNr: '6613',
    location: 'LR',
    bbDown: 'sn',
    bbLr: 'sh',
    bbOut: 'bx',
    completedAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/16/2023').setHours(
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
    luggageId: 'dccdb52e-3139-47ef-bf00-8fa1a79b350c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '334',
    name: 'Dorothée',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: null,
    tagNr: '2924',
    location: 'LR',
    bbDown: 'yk',
    bbLr: 'bk',
    bbOut: 'jj',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd0955dc0-ae2a-4775-b727-d4b728f00d18',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '846',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '7512',
    location: 'LR',
    bbDown: 'qy',
    bbLr: 'dc',
    bbOut: 'ro',
    completedAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
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
    luggageId: '28fe63b5-071f-4976-a9b1-e4fdccff1545',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '440',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '8149',
    location: 'LR1',
    bbDown: 'jc',
    bbLr: 'ej',
    bbOut: 'ms',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3a365c67-03fc-40a6-893e-87fc05778e37',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '509',
    name: 'Médiamass',
    arrivalTime: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    comments: null,
    tagNr: '9809',
    location: 'LR1',
    bbDown: 'rk',
    bbLr: 'vj',
    bbOut: 'kz',
    completedAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3db2b68c-3a67-4348-9957-ae16ff2db3d8',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '462',
    name: 'Gaïa',
    arrivalTime: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: null,
    tagNr: '2453',
    location: 'LR1',
    bbDown: 'in',
    bbLr: 'dr',
    bbOut: 'hu',
    completedAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/26/2023').setHours(
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
    luggageId: '39cff48f-b6b6-4ed3-9e86-39a88e022a0b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '966',
    name: 'Cunégonde',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    comments: 'Nulla suscipit ligula in lacus.',
    tagNr: '6975',
    location: 'LR',
    bbDown: 'ki',
    bbLr: 'gi',
    bbOut: 'nq',
    completedAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6f58ffa2-2234-4dc8-9f41-6feaff636896',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '096',
    name: 'Göran',
    arrivalTime: null,
    bags: '1+0',
    comments: 'Duis mattis egestas metus.',
    tagNr: '2999',
    location: 'LR1',
    bbDown: 'dd',
    bbLr: 'ir',
    bbOut: 'qf',
    completedAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '70b50d83-d8ad-4755-b2c7-25eefb0ab387',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '086',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: null,
    tagNr: '8986',
    location: 'LR1',
    bbDown: 'ct',
    bbLr: 'io',
    bbOut: 'fi',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
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
    luggageId: '2f3639a6-6b32-4ae4-ba97-37c5b58d4572',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '875',
    name: 'Eloïse',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: null,
    tagNr: '9272',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mc',
    bbOut: 'sq',
    completedAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f203192b-3d03-4fff-af6a-c22dd250034c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '005',
    name: 'Danièle',
    arrivalTime: null,
    bags: '2+3',
    comments: 'Aenean auctor gravida sem.',
    tagNr: '6047',
    location: 'LR',
    bbDown: 'rt',
    bbLr: 'bi',
    bbOut: 'sv',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c0d47d0a-2d89-4386-ad37-a5f20d569b1b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '213',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: 'Proin eu mi.',
    tagNr: '6324',
    location: 'LR',
    bbDown: 'vo',
    bbLr: 'tm',
    bbOut: 'ab',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: '5ee1dddf-fe9f-4921-ab57-a9829576d7b6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '302',
    name: 'Régine',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    tagNr: '3603',
    location: 'LR1',
    bbDown: 'my',
    bbLr: 'uz',
    bbOut: 'yo',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/23/2022').setHours(
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
    luggageId: 'a42db385-2e3e-46bc-a7c2-8588f063d49c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '095',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: null,
    tagNr: '5888',
    location: 'LR',
    bbDown: 'zp',
    bbLr: 'vq',
    bbOut: 'qu',
    completedAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '96dbafc8-9f79-41fb-90d0-c2d512c124e5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '898',
    name: 'Méghane',
    arrivalTime: null,
    bags: '1+4',
    comments: 'Nam dui.',
    tagNr: '8889',
    location: 'LR',
    bbDown: 'cj',
    bbLr: 'hx',
    bbOut: 'rr',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3659d0bd-989c-4fdd-879f-b490f254e231',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '065',
    name: 'Maëlys',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    tagNr: '1395',
    location: 'LR1',
    bbDown: 'bu',
    bbLr: 'ku',
    bbOut: 'sz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '12344a50-6bd2-4a79-98a7-9d772c97d495',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '083',
    name: 'Clémentine',
    arrivalTime: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments: null,
    tagNr: '0031',
    location: 'LR',
    bbDown: 'wx',
    bbLr: 'ry',
    bbOut: 'gh',
    completedAt: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7928209a-4a99-406e-994f-2fd38d02a93a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '739',
    name: 'Néhémie',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments: null,
    tagNr: '8062',
    location: 'LR1',
    bbDown: 'tq',
    bbLr: 'vv',
    bbOut: 'kr',
    completedAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd655d219-bafd-4339-bd13-f423a664a462',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '555',
    name: 'Marie-thérèse',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    comments: 'Suspendisse potenti.',
    tagNr: '9236',
    location: 'LR',
    bbDown: null,
    bbLr: 'll',
    bbOut: 'sg',
    completedAt: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1e3302c2-32d4-484f-a04e-13dd02090283',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '341',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    comments: null,
    tagNr: '2682',
    location: 'LR1',
    bbDown: 'pe',
    bbLr: 'rt',
    bbOut: 'os',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cf86f989-0be9-4740-a174-8f1287a74244',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '029',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '6582',
    location: 'LR1',
    bbDown: 'pb',
    bbLr: 'zz',
    bbOut: 'ed',
    completedAt: new Date(
      new Date('03/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/02/2023').setHours(
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
    luggageId: 'd454d301-a155-46cf-9e0a-12fbbf0c42f0',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '236',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    comments: null,
    tagNr: '2268',
    location: 'LR1',
    bbDown: 'dv',
    bbLr: 'le',
    bbOut: 'bk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f12684ff-3d84-4d1a-bb4f-c348a23339be',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '590',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: null,
    tagNr: '9119',
    location: 'LR1',
    bbDown: null,
    bbLr: 'mp',
    bbOut: 'ri',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '45ac38a6-eacd-42bb-9d9c-c74ddc98ed36',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '215',
    name: 'Eléa',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    comments: 'Nunc nisl.',
    tagNr: '3670',
    location: 'LR',
    bbDown: null,
    bbLr: 'id',
    bbOut: 'xl',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f98bb92b-8da9-40fb-95d8-6e05d06176b5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '055',
    name: 'Crééz',
    arrivalTime: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '7375',
    location: 'LR',
    bbDown: 'rk',
    bbLr: 'pd',
    bbOut: 'fn',
    completedAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a5b261dc-3ff9-45a0-93df-0dde06bbac4e',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '987',
    name: 'Ophélie',
    arrivalTime: null,
    bags: '5+4',
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '0856',
    location: 'LR',
    bbDown: 'fj',
    bbLr: 'sm',
    bbOut: 'lq',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3707a14d-0338-48f9-8739-9f8747abb22d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '424',
    name: 'Dafnée',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: 'Donec vitae nisi.',
    tagNr: '2162',
    location: 'LR',
    bbDown: 'js',
    bbLr: 'lk',
    bbOut: 'gq',
    completedAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dc0cb9dc-f0e0-4ad9-8d72-8a94ae8eb4cb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '843',
    name: 'Kuí',
    arrivalTime: null,
    bags: '1+0',
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    tagNr: '6277',
    location: 'LR1',
    bbDown: 'ms',
    bbLr: 'ex',
    bbOut: 'kz',
    completedAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/15/2023').setHours(
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
    luggageId: '8b5650e4-c399-44d2-b05f-75cffe7000f1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '286',
    name: 'Ráo',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: 'Maecenas pulvinar lobortis est.',
    tagNr: '7916',
    location: 'LR1',
    bbDown: 'jf',
    bbLr: 'dl',
    bbOut: 'uz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/02/2023').setHours(
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
    luggageId: 'f633a1f2-dbd7-4076-bf2c-866288cb42e4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '727',
    name: 'Yè',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Nam nulla.',
    tagNr: '2010',
    location: 'LR1',
    bbDown: 'tt',
    bbLr: 'ka',
    bbOut: 'yj',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c683fc7a-d2bf-47d1-aea5-fffb3f5b474c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '470',
    name: 'Maï',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '7356',
    location: 'LR',
    bbDown: 'ij',
    bbLr: 'th',
    bbOut: 'zv',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '92e89b28-c868-498e-8a57-935722872e1c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '833',
    name: 'Félicie',
    arrivalTime: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: 'Aliquam erat volutpat.',
    tagNr: '1846',
    location: 'LR',
    bbDown: 'wj',
    bbLr: 'ww',
    bbOut: 'by',
    completedAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1421b682-e88d-45b3-85f5-8383a9c4f6de',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '283',
    name: 'Jú',
    arrivalTime: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    comments: null,
    tagNr: '4418',
    location: 'LR',
    bbDown: 'kf',
    bbLr: 'ye',
    bbOut: 'ip',
    completedAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '460e1927-0bbc-44c2-b0b4-7c97219690e2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '475',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: null,
    tagNr: '8926',
    location: 'LR1',
    bbDown: 'dy',
    bbLr: 'uz',
    bbOut: 'ge',
    completedAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/17/2023').setHours(
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
    luggageId: 'e90d14ad-a775-4bf5-a6b1-8da0570e6f48',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '840',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    comments: null,
    tagNr: '7544',
    location: 'LR',
    bbDown: 'xn',
    bbLr: 'hs',
    bbOut: 'va',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7dfc7cb4-9c88-40ca-b9b6-d956b6e52fe1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '207',
    name: 'Wá',
    arrivalTime: null,
    bags: '8+8',
    comments: 'Proin eu mi.',
    tagNr: '7383',
    location: 'LR1',
    bbDown: 'oc',
    bbLr: 'wz',
    bbOut: 'sb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '25c39278-4343-411c-b236-eafdb49653b5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '627',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: null,
    tagNr: '9723',
    location: 'LR',
    bbDown: 'jv',
    bbLr: 'es',
    bbOut: 'yx',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6bd27721-0698-4545-8413-5b725d9b56f7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '715',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments: null,
    tagNr: '0534',
    location: 'LR',
    bbDown: 'tc',
    bbLr: 'uo',
    bbOut: 'qs',
    completedAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '29650d05-4189-495c-8663-c888daa2c838',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '595',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: 'Fusce consequat.',
    tagNr: '6675',
    location: 'LR',
    bbDown: 'bl',
    bbLr: 'st',
    bbOut: 'ir',
    completedAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '530f2067-15a6-4486-a978-dcc2850f6f19',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '487',
    name: 'Marylène',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: 'Duis ac nibh.',
    tagNr: '9040',
    location: 'LR',
    bbDown: 'ze',
    bbLr: 'yw',
    bbOut: 'td',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd9b4cb2c-aaaf-4c38-a609-4c3379e5eac3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '937',
    name: 'Thérèsa',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: null,
    tagNr: '8285',
    location: 'LR',
    bbDown: 'zo',
    bbLr: 'qn',
    bbOut: 'qh',
    completedAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2813f3da-f520-4116-8620-61f8e198f20f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '768',
    name: 'Pål',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: 'Nam nulla.',
    tagNr: '7854',
    location: 'LR1',
    bbDown: 'po',
    bbLr: 'un',
    bbOut: 'jn',
    completedAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/01/2022').setHours(
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
    luggageId: 'b4ddd8c6-055b-4587-97e3-52b3c731e1be',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '860',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    comments: null,
    tagNr: '1298',
    location: 'LR1',
    bbDown: 'cv',
    bbLr: 'eo',
    bbOut: 'mt',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f03c138b-351a-4b3e-a582-f65e517204e4',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '037',
    name: 'Ophélie',
    arrivalTime: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: null,
    tagNr: '3958',
    location: 'LR',
    bbDown: 'gf',
    bbLr: 'kr',
    bbOut: 'xe',
    completedAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd31ebe74-03a4-41cf-8a64-b17ca44da284',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '100',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    tagNr: '8611',
    location: 'LR1',
    bbDown: 'xy',
    bbLr: 'rt',
    bbOut: 'hu',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '259fe099-87df-455e-98f7-f80cd5844c58',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '485',
    name: 'Céline',
    arrivalTime: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: 'Vestibulum rutrum rutrum neque.',
    tagNr: '0673',
    location: 'LR',
    bbDown: 'gr',
    bbLr: 'vs',
    bbOut: 'on',
    completedAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/07/2023').setHours(
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
    luggageId: 'e1a72f82-3843-48bc-966f-c572c9c043d2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '801',
    name: 'Gérald',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: 'Phasellus sit amet erat.',
    tagNr: '8330',
    location: 'LR',
    bbDown: null,
    bbLr: 'cr',
    bbOut: 'ci',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/16/2022').setHours(
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
    luggageId: '2423aae7-52b6-42df-8d2a-7d48b084fe75',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '254',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '1473',
    location: 'LR',
    bbDown: null,
    bbLr: 'uo',
    bbOut: 'xe',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0287bf09-d090-41bf-bf3f-b2cf2d63f152',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '029',
    name: 'Renée',
    arrivalTime: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    comments: null,
    tagNr: '7140',
    location: 'LR',
    bbDown: 'eo',
    bbLr: 'nc',
    bbOut: 'mh',
    completedAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/29/2023').setHours(
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
    luggageId: '821e09fa-a34a-4ed2-9ef4-98e4db6ab8a4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '478',
    name: 'Thérèsa',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '9805',
    location: 'LR1',
    bbDown: 'pr',
    bbLr: 'mn',
    bbOut: 'gy',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8c03da27-7ce5-453b-ac8c-27e14c057f1d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '601',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: 'Sed ante.',
    tagNr: '8025',
    location: 'LR1',
    bbDown: 'ow',
    bbLr: 'ed',
    bbOut: 'qt',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '67e15d97-ded0-4b63-b9a5-3f1e5ddce741',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '995',
    name: 'Edmée',
    arrivalTime: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '6250',
    location: 'LR',
    bbDown: 'ly',
    bbLr: 'gb',
    bbOut: 'll',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4712a8a6-73ef-43a0-887a-6df524778b97',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '282',
    name: 'Ruì',
    arrivalTime: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    comments: 'Sed accumsan felis.',
    tagNr: '9235',
    location: 'LR1',
    bbDown: null,
    bbLr: 'yj',
    bbOut: 'sy',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ea6294e5-9332-4cc2-abe0-1e781dbe8a94',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '732',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Aenean fermentum.',
    tagNr: '7260',
    location: 'LR',
    bbDown: 'sp',
    bbLr: 'mi',
    bbOut: 'yd',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/08/2023').setHours(
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
    luggageId: 'eeecff80-0b37-4ff5-879d-f5c4adc93a38',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '265',
    name: 'Ráo',
    arrivalTime: null,
    bags: '7+3',
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '0661',
    location: 'LR',
    bbDown: 'gf',
    bbLr: 'eo',
    bbOut: 'qs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/25/2022').setHours(
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
    luggageId: '8931f4cd-a00b-4068-8df9-60d255d16f14',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '762',
    name: 'Marylène',
    arrivalTime: null,
    bags: '0+9',
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '8948',
    location: 'LR',
    bbDown: null,
    bbLr: 'pl',
    bbOut: 'pz',
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '95a9e487-f8c6-435d-b7b5-ebcbdac573fb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '492',
    name: 'Mélys',
    arrivalTime: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+1',
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '2541',
    location: 'LR1',
    bbDown: 'tz',
    bbLr: 'aj',
    bbOut: 'mx',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '85f29702-d4b9-4b27-bc41-cc450c036cd8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '328',
    name: 'André',
    arrivalTime: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: null,
    tagNr: '8060',
    location: 'LR',
    bbDown: 'az',
    bbLr: 'dq',
    bbOut: 'xi',
    completedAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '35c995b5-caff-47ea-a825-2489d410c57b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '680',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    comments: 'Donec dapibus.',
    tagNr: '0747',
    location: 'LR1',
    bbDown: null,
    bbLr: 'as',
    bbOut: 'ga',
    completedAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5f01a8bb-5911-43f8-b34e-c3b8c8ef340f',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '050',
    name: 'Lài',
    arrivalTime: null,
    bags: '2+7',
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    tagNr: '5957',
    location: 'LR',
    bbDown: 'dx',
    bbLr: 'ux',
    bbOut: 'sb',
    completedAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7d6fe46d-1744-4953-b935-b81c2203aa8d',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '806',
    name: 'Rachèle',
    arrivalTime: null,
    bags: '6+5',
    comments: null,
    tagNr: '7511',
    location: 'LR',
    bbDown: 'mc',
    bbLr: 'cc',
    bbOut: 'dy',
    completedAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '44626d71-89fb-428f-a9e7-4ec0814177d6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '525',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '5119',
    location: 'LR',
    bbDown: 'vl',
    bbLr: 'zl',
    bbOut: 'bf',
    completedAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e9381c61-373f-48d0-9533-8cbb0daf8680',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '871',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: null,
    tagNr: '1782',
    location: 'LR',
    bbDown: 'mz',
    bbLr: 'iz',
    bbOut: 'xn',
    completedAt: null,
    dateNeeded: new Date(
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
    luggageId: '58060858-a1f6-4ca3-97aa-4d26d5a25698',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '297',
    name: 'Véronique',
    arrivalTime: null,
    bags: '8+2',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '5713',
    location: 'LR1',
    bbDown: 'vo',
    bbLr: 'nc',
    bbOut: 'cl',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/20/2022').setHours(
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
    luggageId: '769ae5c9-7ee1-4384-8ccf-34883e1be3b9',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '741',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    comments: null,
    tagNr: '0732',
    location: 'LR1',
    bbDown: 'br',
    bbLr: 'rg',
    bbOut: 'fb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1406cb18-7374-43fd-b25c-69f823b82dc1',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '655',
    name: 'Dà',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: null,
    tagNr: '9265',
    location: 'LR1',
    bbDown: 'so',
    bbLr: 'gz',
    bbOut: 'np',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7a9585cf-e61e-4f48-b0a1-a33d70488b75',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '346',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: 'Nunc purus.',
    tagNr: '2294',
    location: 'LR',
    bbDown: 'hy',
    bbLr: 'dd',
    bbOut: 'pl',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8c269566-d17d-41a0-aa51-11533581c0ca',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '731',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: 'Nunc nisl.',
    tagNr: '7154',
    location: 'LR1',
    bbDown: 'ih',
    bbLr: 'ej',
    bbOut: 'kk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '71c19f4c-ba64-486d-8456-5dc6f59e7aee',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '805',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: null,
    tagNr: '5350',
    location: 'LR1',
    bbDown: 'ci',
    bbLr: 'kk',
    bbOut: 'uj',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7ffd7ca2-4fed-4c3b-9174-b703675c651f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '631',
    name: 'Joséphine',
    arrivalTime: null,
    bags: '7+5',
    comments: 'Nulla mollis molestie lorem.',
    tagNr: '6462',
    location: 'LR1',
    bbDown: 'gr',
    bbLr: 'lq',
    bbOut: 'wl',
    completedAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b7e4e0bf-89ca-42a9-a34f-51bbdbfc8899',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '741',
    name: 'Annotés',
    arrivalTime: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments: null,
    tagNr: '1461',
    location: 'LR',
    bbDown: 'qa',
    bbLr: 'hh',
    bbOut: 'xz',
    completedAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/26/2023').setHours(
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
    luggageId: 'bec1941d-9ba3-467f-ad92-4ae37dbf41ab',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '181',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: null,
    tagNr: '4746',
    location: 'LR1',
    bbDown: 'dr',
    bbLr: 'ch',
    bbOut: 'pl',
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '105297f8-e5a9-4f17-a463-0d2ed0d751ac',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '434',
    name: 'Yóu',
    arrivalTime: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '0697',
    location: 'LR',
    bbDown: 'yp',
    bbLr: 'fj',
    bbOut: 'zy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'edf9faff-2904-4c94-9f98-43884ac19796',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '561',
    name: 'Lài',
    arrivalTime: null,
    bags: '6+3',
    comments: 'Morbi porttitor lorem id ligula.',
    tagNr: '1696',
    location: 'LR',
    bbDown: null,
    bbLr: 'sw',
    bbOut: 'xe',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e5332b16-5cc6-4949-a0f7-ebff1f10fc23',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '862',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    tagNr: '4529',
    location: 'LR1',
    bbDown: 'vf',
    bbLr: 'ui',
    bbOut: 'ib',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f76afe23-e448-4b64-afee-aa43d3cc6f47',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '804',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments: null,
    tagNr: '6847',
    location: 'LR',
    bbDown: 'dn',
    bbLr: 'wl',
    bbOut: 'vy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6a569f0d-a567-40cd-b85b-2dc682d3b84b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '823',
    name: 'Anaëlle',
    arrivalTime: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: null,
    tagNr: '7185',
    location: 'LR1',
    bbDown: 'xt',
    bbLr: 'yh',
    bbOut: 'an',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2b594c2c-2689-4932-9212-2f049574e61d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '290',
    name: 'Audréanne',
    arrivalTime: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '6319',
    location: 'LR',
    bbDown: 'ps',
    bbLr: 'ty',
    bbOut: 'pv',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5ecc2f42-b5f3-4d33-af01-21bfa4f94473',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '117',
    name: 'Mélissandre',
    arrivalTime: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: 'Morbi a ipsum.',
    tagNr: '5635',
    location: 'LR1',
    bbDown: null,
    bbLr: 'oy',
    bbOut: 'xx',
    completedAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/26/2023').setHours(
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
    luggageId: 'e9d4f9da-5b60-45f0-a05d-b1d944b857ed',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '856',
    name: 'Léonore',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    tagNr: '5436',
    location: 'LR1',
    bbDown: 'fs',
    bbLr: 'gr',
    bbOut: 'ia',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '38eb47f6-56cc-4416-bc27-6208b60a0f2f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '411',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments: null,
    tagNr: '0250',
    location: 'LR1',
    bbDown: 'ha',
    bbLr: 'oi',
    bbOut: 'mo',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
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
    luggageId: '2bcfccaf-7151-4f3c-b3f8-2e3059674766',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '757',
    name: 'Maëlyss',
    arrivalTime: null,
    bags: '7+6',
    comments: null,
    tagNr: '4920',
    location: 'LR1',
    bbDown: 'nx',
    bbLr: 'ai',
    bbOut: 'wm',
    completedAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/31/2022').setHours(
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
    luggageId: '2cf7581f-fbe2-4a03-bfae-1c708109e7e5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '216',
    name: 'Kévina',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '6792',
    location: 'LR1',
    bbDown: 'le',
    bbLr: 'yk',
    bbOut: 'yw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1556ac61-cd8d-4121-a581-d5b04097cc32',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '872',
    name: 'Marlène',
    arrivalTime: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    tagNr: '0634',
    location: 'LR1',
    bbDown: 'vx',
    bbLr: 'dy',
    bbOut: 'aw',
    completedAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5b0144a3-dc30-47c9-ad3f-589fc882ec30',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '682',
    name: 'Sòng',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    comments: 'Morbi porttitor lorem id ligula.',
    tagNr: '9828',
    location: 'LR1',
    bbDown: 'tn',
    bbLr: 'qa',
    bbOut: 'ip',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1f82dd57-29bc-4981-b8a5-240f9ea8bff7',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '042',
    name: 'Åslög',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    comments: null,
    tagNr: '8772',
    location: 'LR',
    bbDown: 'el',
    bbLr: 'qd',
    bbOut: 'ny',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ef95b40b-82f5-4db1-913a-cecea792d66e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '059',
    name: 'Adèle',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: null,
    tagNr: '5249',
    location: 'LR',
    bbDown: null,
    bbLr: 'ql',
    bbOut: 'mi',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
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
    luggageId: 'eee1d573-fcd7-4ee6-88ea-47253da0e16c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '414',
    name: 'Mén',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    comments: 'Phasellus sit amet erat.',
    tagNr: '3693',
    location: 'LR1',
    bbDown: null,
    bbLr: 'da',
    bbOut: 'tu',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f983e2c5-1235-4986-bc9a-f441e86d2dc7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '948',
    name: 'Lauréna',
    arrivalTime: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '9144',
    location: 'LR',
    bbDown: 'lk',
    bbLr: 'dy',
    bbOut: 'rw',
    completedAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1dd06182-2b18-4a68-a80a-6df62494c177',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '764',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments: null,
    tagNr: '4882',
    location: 'LR1',
    bbDown: null,
    bbLr: 'wn',
    bbOut: 'py',
    completedAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd0375516-df5f-48cc-a788-43e0bc9a53e2',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '806',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    comments: 'Aenean fermentum.',
    tagNr: '4118',
    location: 'LR',
    bbDown: 'ij',
    bbLr: 'gu',
    bbOut: 'oj',
    completedAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e7608432-fe80-44d6-8084-a9daf630404b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '161',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '0476',
    location: 'LR',
    bbDown: 'pa',
    bbLr: 'ww',
    bbOut: 'hf',
    completedAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4ed7b778-0e9c-49bd-8377-7a1f732d29f9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '113',
    name: 'Léane',
    arrivalTime: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments: null,
    tagNr: '2013',
    location: 'LR',
    bbDown: null,
    bbLr: 'un',
    bbOut: 'hl',
    completedAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8003d1b4-9a01-4e8c-9603-40049089f810',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '418',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: null,
    tagNr: '2831',
    location: 'LR',
    bbDown: 'lc',
    bbLr: 'mv',
    bbOut: 'og',
    completedAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '38984695-bfb8-4da3-a8df-8f846370d0f3',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '350',
    name: 'Personnalisée',
    arrivalTime: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments: 'Quisque ut erat.',
    tagNr: '1631',
    location: 'LR',
    bbDown: 'tw',
    bbLr: 'ac',
    bbOut: 'zy',
    completedAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/17/2023').setHours(
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
    luggageId: '42c3fc6d-54cb-45aa-8aa2-7d47f644112c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '258',
    name: 'Marie-josée',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    comments: 'Nam dui.',
    tagNr: '6016',
    location: 'LR',
    bbDown: 'bs',
    bbLr: 'mg',
    bbOut: 'eh',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b3c5a87e-4036-431b-84c9-4e218d5b0577',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '174',
    name: 'Rachèle',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    comments: 'Proin risus.',
    tagNr: '8182',
    location: 'LR',
    bbDown: null,
    bbLr: 'em',
    bbOut: 'ce',
    completedAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/10/2023').setHours(
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
    luggageId: 'f8c1b0e0-f4de-4601-b711-b80377886f1f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '510',
    name: 'Andrée',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments: null,
    tagNr: '3689',
    location: 'LR',
    bbDown: 'fw',
    bbLr: 'az',
    bbOut: 'vv',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '22063064-7a65-412c-9ab4-c3fef4065072',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '724',
    name: 'Aloïs',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    comments: 'Morbi non lectus.',
    tagNr: '6929',
    location: 'LR',
    bbDown: 'yd',
    bbLr: 'jl',
    bbOut: 'fj',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3161d5a3-0bea-4c1a-923a-74cd1360063a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '415',
    name: 'Judicaël',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    comments: 'Suspendisse potenti.',
    tagNr: '8394',
    location: 'LR',
    bbDown: 'bd',
    bbLr: 'qh',
    bbOut: 'gu',
    completedAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ef3a9886-7886-4495-b1cc-09b1f5e8bdfc',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '814',
    name: 'Maïly',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: null,
    tagNr: '5881',
    location: 'LR',
    bbDown: 'gg',
    bbLr: 'gs',
    bbOut: 'jw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/27/2022').setHours(
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
    luggageId: '5bcb6d60-b9e5-4431-b815-b0a74b1c0664',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '553',
    name: 'Maëline',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: 'Integer non velit.',
    tagNr: '8543',
    location: 'LR',
    bbDown: null,
    bbLr: 'rd',
    bbOut: 'gu',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '60c703ac-3fe0-4f68-9a90-01a9179d25a4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '066',
    name: 'Lài',
    arrivalTime: null,
    bags: '2+8',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '6588',
    location: 'LR1',
    bbDown: 'ml',
    bbLr: 'cv',
    bbOut: 'oj',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9a608133-0a6c-4312-a90e-ffc124310eb4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '100',
    name: 'Mégane',
    arrivalTime: null,
    bags: '3+1',
    comments: 'Duis aliquam convallis nunc.',
    tagNr: '5814',
    location: 'LR',
    bbDown: 'qi',
    bbLr: 'aj',
    bbOut: 'vu',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5674279e-ca0d-4087-b83f-1fc987a44a4a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '509',
    name: 'Lèi',
    arrivalTime: null,
    bags: '9+2',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '2657',
    location: 'LR',
    bbDown: 'ui',
    bbLr: 'nr',
    bbOut: 'dc',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0f684163-137a-476f-9370-da8015b4e241',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '802',
    name: 'Yáo',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    comments: null,
    tagNr: '5498',
    location: 'LR1',
    bbDown: 'bc',
    bbLr: 'yx',
    bbOut: 'vc',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c87434aa-e803-4566-ad70-168954c19136',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '203',
    name: 'Mylène',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments: 'Nulla justo.',
    tagNr: '1615',
    location: 'LR1',
    bbDown: 'yi',
    bbLr: 'ji',
    bbOut: 'xt',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
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
    luggageId: 'dcbc45e4-c09b-45b3-8217-d781ddf1f542',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '972',
    name: 'Marie-ève',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: null,
    tagNr: '3731',
    location: 'LR1',
    bbDown: 'tw',
    bbLr: 'fs',
    bbOut: 'tb',
    completedAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '488acf9b-3609-4c8f-b5f2-2b6a3ba3b13c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '757',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: null,
    tagNr: '5196',
    location: 'LR1',
    bbDown: 'xq',
    bbLr: 'pd',
    bbOut: 'bb',
    completedAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a652bbcd-fd1f-4bed-b85b-b04eb74601bf',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '914',
    name: 'Noémie',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: 'Ut tellus.',
    tagNr: '6819',
    location: 'LR',
    bbDown: 'eh',
    bbLr: 'sx',
    bbOut: 'qe',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '705d4b56-bec1-4bbe-aaad-38e5a3f6ff93',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '205',
    name: 'Annotée',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    comments: null,
    tagNr: '6913',
    location: 'LR1',
    bbDown: 'vl',
    bbLr: 'mp',
    bbOut: 'sg',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1988ca9e-562d-4801-818f-16c5112f01d6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '564',
    name: 'Mårten',
    arrivalTime: null,
    bags: '9+5',
    comments: 'Nulla facilisi.',
    tagNr: '6878',
    location: 'LR',
    bbDown: 'my',
    bbLr: 'db',
    bbOut: 'cn',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b62ac6cc-f37c-4778-9c0d-9b102f32ced1',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '086',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: 'Maecenas tincidunt lacus at velit.',
    tagNr: '4291',
    location: 'LR1',
    bbDown: 'rb',
    bbLr: 'no',
    bbOut: 'nx',
    completedAt: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9b347b42-5195-457a-9e01-a9a90d67a3ac',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '327',
    name: 'Lài',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '0049',
    location: 'LR',
    bbDown: 'vg',
    bbLr: 'kg',
    bbOut: 'so',
    completedAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a109ffae-bcd0-4728-945a-7ecf844ea153',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '466',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments: 'Cras in purus eu magna vulputate luctus.',
    tagNr: '5819',
    location: 'LR',
    bbDown: 'dp',
    bbLr: 'bm',
    bbOut: 'he',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
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
    luggageId: 'd7c7cceb-0312-4f9c-ad64-3b78db7e6efc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '665',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    comments:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    tagNr: '6856',
    location: 'LR',
    bbDown: 'oy',
    bbLr: 'dp',
    bbOut: 'cp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cf0c5733-9717-43c2-ac50-7c93c8584311',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '279',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: null,
    tagNr: '4342',
    location: 'LR',
    bbDown: 'tw',
    bbLr: 'dh',
    bbOut: 'kb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3d6d97cc-6cb8-4441-aa14-34e0422608aa',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '749',
    name: 'Laïla',
    arrivalTime: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    comments: 'Nam nulla.',
    tagNr: '6925',
    location: 'LR',
    bbDown: 'ky',
    bbLr: 'sw',
    bbOut: 'ey',
    completedAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '440b6b4c-6c17-48b9-9a2b-ca307214c10f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '685',
    name: 'Eléonore',
    arrivalTime: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    tagNr: '4284',
    location: 'LR',
    bbDown: 'bv',
    bbLr: 'wt',
    bbOut: 'bb',
    completedAt: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c75832d0-92b8-4ed8-8c96-917c0ccf6cc2',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '666',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    comments: null,
    tagNr: '9267',
    location: 'LR1',
    bbDown: 'kg',
    bbLr: 'ku',
    bbOut: 'wz',
    completedAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ae9fcea0-6cca-4c9c-af1d-bb5a393a4795',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '292',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    comments: null,
    tagNr: '7447',
    location: 'LR1',
    bbDown: 'xa',
    bbLr: 'op',
    bbOut: 'up',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fb32405e-bf03-44cb-88f4-c64fe18d133a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '137',
    name: 'Lóng',
    arrivalTime: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    comments: 'Mauris lacinia sapien quis libero.',
    tagNr: '2163',
    location: 'LR',
    bbDown: 'pj',
    bbLr: 'ug',
    bbOut: 'ng',
    completedAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '24267691-ecd5-4f82-84dc-c964605c6113',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '255',
    name: 'Gösta',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '6388',
    location: 'LR1',
    bbDown: 'ux',
    bbLr: 'ny',
    bbOut: 'cd',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1e3f3a59-04c3-4ccd-9673-1b3626fac441',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '441',
    name: 'Gisèle',
    arrivalTime: null,
    bags: '9+3',
    comments: 'Pellentesque at nulla.',
    tagNr: '7293',
    location: 'LR1',
    bbDown: 'za',
    bbLr: 'qk',
    bbOut: 'tf',
    completedAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/15/2023').setHours(
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
    luggageId: '315f0372-36e5-4a75-a6cd-4f13cd1fd442',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '687',
    name: 'Pélagie',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    tagNr: '6114',
    location: 'LR1',
    bbDown: 'dm',
    bbLr: 'tn',
    bbOut: 'ur',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '81936f7f-1790-4bb3-9fc0-2790f1db41d5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '752',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    comments: 'In quis justo.',
    tagNr: '5195',
    location: 'LR1',
    bbDown: 'vn',
    bbLr: 'jn',
    bbOut: 'pb',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: 'bc1941c8-78a8-49df-9c69-5f9394767737',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '817',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    comments: null,
    tagNr: '2599',
    location: 'LR1',
    bbDown: 'hp',
    bbLr: 'ic',
    bbOut: 'ir',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/23/2022').setHours(
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
    luggageId: '57070830-5725-4dcb-9c8d-923bdcd447a6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '385',
    name: 'Josée',
    arrivalTime: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    tagNr: '9553',
    location: 'LR1',
    bbDown: 'py',
    bbLr: 'qb',
    bbOut: 'fv',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/16/2022').setHours(
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
    luggageId: 'a7e6a935-1f5a-47d3-8417-0d15f2315674',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '903',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    comments: null,
    tagNr: '3311',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xb',
    bbOut: 'mm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '756947b6-d1e0-4dec-adeb-190fa9dad685',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '025',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: 'Integer a nibh.',
    tagNr: '9199',
    location: 'LR',
    bbDown: 'wq',
    bbLr: 'wa',
    bbOut: 'bx',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
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
    luggageId: 'a12e5a43-df4b-45b5-ba15-e9a2c734d881',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '855',
    name: 'Irène',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    tagNr: '9006',
    location: 'LR',
    bbDown: 'xb',
    bbLr: 'xm',
    bbOut: 'zp',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '610e2fdb-4123-4a0f-957b-4883c08125ab',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '671',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '0746',
    location: 'LR1',
    bbDown: 'tj',
    bbLr: 'cl',
    bbOut: 'np',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '054c6383-c998-4f41-baf9-cbe550533958',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '237',
    name: 'Méthode',
    arrivalTime: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: null,
    tagNr: '8228',
    location: 'LR1',
    bbDown: 'tm',
    bbLr: 'yi',
    bbOut: 'gh',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f7acb4cf-0d91-46a3-a6f2-033f57691031',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '477',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments: 'Sed ante.',
    tagNr: '2311',
    location: 'LR',
    bbDown: 'iz',
    bbLr: 'mu',
    bbOut: 'dt',
    completedAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '50dbfaa5-505f-41c9-92c2-b10c664e95ea',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '011',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    tagNr: '6445',
    location: 'LR1',
    bbDown: 'us',
    bbLr: 'wz',
    bbOut: 'dc',
    completedAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '52d6fcb3-3e0a-4b4f-86ba-09ec884e6588',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '793',
    name: 'Valérie',
    arrivalTime: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    comments: null,
    tagNr: '7432',
    location: 'LR',
    bbDown: 'aq',
    bbLr: 'ru',
    bbOut: 'mn',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
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
    luggageId: '6488eef3-bdea-4ad4-8414-fe18e0d3f244',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '201',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '8300',
    location: 'LR1',
    bbDown: 'fh',
    bbLr: 'bw',
    bbOut: 'bi',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fe64ee3e-f8ae-4f27-a3e3-bba01fe2766f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '342',
    name: 'Cécilia',
    arrivalTime: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: null,
    tagNr: '6842',
    location: 'LR1',
    bbDown: 'mc',
    bbLr: 'xn',
    bbOut: 'ar',
    completedAt: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cfa22883-04bb-44ac-8c80-a0174772730b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '063',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '3716',
    location: 'LR',
    bbDown: 'to',
    bbLr: 'pl',
    bbOut: 'xi',
    completedAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '06be7361-e288-4337-865d-636091119fea',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '061',
    name: 'Lóng',
    arrivalTime: null,
    bags: '1+4',
    comments: null,
    tagNr: '1704',
    location: 'LR1',
    bbDown: null,
    bbLr: 'fo',
    bbOut: 'mq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/17/2023').setHours(
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
    luggageId: '3c10d060-c0f6-4ee5-8190-93543d1337b6',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '072',
    name: 'Publicité',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: null,
    tagNr: '1219',
    location: 'LR',
    bbDown: 'zz',
    bbLr: 'fa',
    bbOut: 'wy',
    completedAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9c6f4f51-295e-490d-a6fc-eeba396741fb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '866',
    name: 'Mélanie',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    comments: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '7931',
    location: 'LR1',
    bbDown: 'vn',
    bbLr: 'kq',
    bbOut: 'ul',
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a2722f58-ea63-4681-afb8-1d6b72888664',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '698',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    comments: null,
    tagNr: '3328',
    location: 'LR1',
    bbDown: 'fm',
    bbLr: 'no',
    bbOut: 'zo',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a5678540-2b33-4a41-8b9b-d2a5415dc56a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '925',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    comments: 'Nam nulla.',
    tagNr: '7263',
    location: 'LR1',
    bbDown: 'mq',
    bbLr: 'km',
    bbOut: 'ho',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '34c8ee2b-0e3b-4b87-9814-a8af2c0a57a8',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '522',
    name: 'Gaétane',
    arrivalTime: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: 'Ut tellus.',
    tagNr: '3670',
    location: 'LR1',
    bbDown: 'mx',
    bbLr: 'ti',
    bbOut: 'dp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/14/2023').setHours(
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
    luggageId: 'd4618a8d-6753-46d4-b101-2013b3292b13',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '797',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    comments: 'Etiam pretium iaculis justo.',
    tagNr: '9441',
    location: 'LR',
    bbDown: 'xt',
    bbLr: 'rm',
    bbOut: 'ub',
    completedAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ae6822ab-2cdb-42d3-ac3b-fc72876af422',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '219',
    name: 'Gaëlle',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    tagNr: '0282',
    location: 'LR',
    bbDown: 'yc',
    bbLr: 'tg',
    bbOut: 'jf',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '54ae596e-cea4-4851-b35c-cdae523f5e67',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '090',
    name: 'Séverine',
    arrivalTime: null,
    bags: '2+3',
    comments: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '3173',
    location: 'LR1',
    bbDown: 'gm',
    bbLr: 'ym',
    bbOut: 'kj',
    completedAt: new Date(
      new Date('03/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
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
    luggageId: 'aa6b0da9-87fa-4e42-9207-b9f874b48c4b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '946',
    name: 'Ophélie',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    tagNr: '6344',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xw',
    bbOut: 'cd',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2601c3e9-e357-4683-b723-b2990abd108b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '313',
    name: 'Gaëlle',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '8028',
    location: 'LR1',
    bbDown: 'mm',
    bbLr: 'ch',
    bbOut: 'vw',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
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
    luggageId: 'b80755bb-3936-4e75-9910-1f6fdf944a7a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '788',
    name: 'Gaétane',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    tagNr: '9454',
    location: 'LR',
    bbDown: 'mz',
    bbLr: 'mt',
    bbOut: 'hf',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2954e1fd-a08e-4502-866b-eeb0a97ec73c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '919',
    name: 'Réjane',
    arrivalTime: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments: null,
    tagNr: '3968',
    location: 'LR',
    bbDown: 'lk',
    bbLr: 'ku',
    bbOut: 'hw',
    completedAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '32fa6598-87bf-46c3-9605-89022ff0111b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '939',
    name: 'Adèle',
    arrivalTime: null,
    bags: '6+5',
    comments: 'Pellentesque eget nunc.',
    tagNr: '8814',
    location: 'LR',
    bbDown: 'bc',
    bbLr: 'oq',
    bbOut: 'rx',
    completedAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'aac7c69f-e6b8-4444-985e-f12794dac69a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '049',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '7788',
    location: 'LR',
    bbDown: 'mv',
    bbLr: 'lh',
    bbOut: 'hv',
    completedAt: new Date(
      new Date('03/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b20dc4d0-f7c9-46dc-bf87-6e0a93d85860',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '611',
    name: 'Publicité',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '8486',
    location: 'LR1',
    bbDown: 'fk',
    bbLr: 'rh',
    bbOut: 'lo',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'da9e0adc-5a4c-438b-bcee-8fb39ef0e36b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '758',
    name: 'Yè',
    arrivalTime: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Nulla justo.',
    tagNr: '0003',
    location: 'LR',
    bbDown: 'rh',
    bbLr: 'tx',
    bbOut: 'aq',
    completedAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '21026500-5763-4421-ac96-0b4bc34ccc33',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '785',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    comments: null,
    tagNr: '4694',
    location: 'LR',
    bbDown: 'tt',
    bbLr: 'lf',
    bbOut: 'yi',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5984479f-7d50-43b3-a7bd-8da90ee1f02f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '444',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '7138',
    location: 'LR',
    bbDown: 'rr',
    bbLr: 'oi',
    bbOut: 'ee',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3b38a70b-d11c-45f1-a774-e59096babfe0',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '019',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'Maecenas pulvinar lobortis est.',
    tagNr: '0063',
    location: 'LR',
    bbDown: 'zk',
    bbLr: 'in',
    bbOut: 'hb',
    completedAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '714ae668-e734-44ab-b998-074b9e32230f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '867',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: null,
    tagNr: '4923',
    location: 'LR',
    bbDown: 'nn',
    bbLr: 'bd',
    bbOut: 'ta',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '315b80a1-7bb2-4dea-8430-10a14a0d522a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '821',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments: 'Nullam porttitor lacus at turpis.',
    tagNr: '7460',
    location: 'LR1',
    bbDown: null,
    bbLr: 'fp',
    bbOut: 'ma',
    completedAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '08d8caaf-9f0d-4cce-82aa-b20d50f4985b',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '406',
    name: 'Valérie',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: 'Proin at turpis a pede posuere nonummy.',
    tagNr: '0310',
    location: 'LR1',
    bbDown: 'cz',
    bbLr: 'cv',
    bbOut: 'ia',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '542ec53f-2d99-4dab-beb2-c2067794425b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '599',
    name: 'Léandre',
    arrivalTime: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '3695',
    location: 'LR',
    bbDown: 'mb',
    bbLr: 'kj',
    bbOut: 'df',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e1697edb-fcc8-4d1b-a43c-dc9bb14b76a0',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '895',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: null,
    tagNr: '9986',
    location: 'LR1',
    bbDown: null,
    bbLr: 'hq',
    bbOut: 'tk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
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
    luggageId: '3e5cffb3-2eeb-44b2-b26f-97999d5c8a7a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '428',
    name: 'Noémie',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments: null,
    tagNr: '4368',
    location: 'LR',
    bbDown: 'vm',
    bbLr: 'qz',
    bbOut: 'ae',
    completedAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ed4d7002-87b8-4b55-b4f9-7c59a3767354',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '039',
    name: 'Eloïse',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: 'Praesent blandit.',
    tagNr: '3257',
    location: 'LR',
    bbDown: 'cf',
    bbLr: 'xi',
    bbOut: 'dh',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c8b6da74-a109-4964-8d34-484345fd7e10',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '931',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: 'Praesent blandit.',
    tagNr: '4984',
    location: 'LR1',
    bbDown: 'eu',
    bbLr: 'wc',
    bbOut: 'rd',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '05403f63-bcc7-48f5-8ca8-48ec8a82439f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '065',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: null,
    tagNr: '0042',
    location: 'LR',
    bbDown: 'uw',
    bbLr: 'ya',
    bbOut: 'jx',
    completedAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
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
    luggageId: '85df29b9-1c16-490f-ab26-0375e027e648',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '023',
    name: 'Andrée',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: 'Aliquam non mauris.',
    tagNr: '4879',
    location: 'LR1',
    bbDown: 'io',
    bbLr: 'iw',
    bbOut: 'kl',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '21b93aa5-5289-4ab3-b3e0-887a81529b9c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '142',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: 'Pellentesque ultrices mattis odio.',
    tagNr: '9142',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ig',
    bbOut: 'wj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '68a0f0aa-2f4e-4d54-ad20-f8d7f46c3d3d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '915',
    name: 'Yè',
    arrivalTime: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: null,
    tagNr: '9730',
    location: 'LR1',
    bbDown: 'zt',
    bbLr: 'ue',
    bbOut: 'oo',
    completedAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '71c631b1-68af-4291-9b13-c00109a01c73',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '439',
    name: 'Léane',
    arrivalTime: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    comments: 'Curabitur gravida nisi at nibh.',
    tagNr: '2081',
    location: 'LR',
    bbDown: null,
    bbLr: 'yv',
    bbOut: 'yg',
    completedAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6d670fef-fe51-48c9-a278-1953ae048ef9',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '168',
    name: 'Gwenaëlle',
    arrivalTime: null,
    bags: '3+9',
    comments: null,
    tagNr: '0731',
    location: 'LR1',
    bbDown: 'na',
    bbLr: 'pv',
    bbOut: 'xo',
    completedAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/16/2023').setHours(
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
    luggageId: '00ecbd0f-d9d1-448e-a011-f2ea161568ee',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '265',
    name: 'Cunégonde',
    arrivalTime: null,
    bags: '6+6',
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '5307',
    location: 'LR1',
    bbDown: 'sd',
    bbLr: 'bo',
    bbOut: 'zs',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2326ddf9-5721-4eb0-932d-5253285c6d57',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '440',
    name: 'Åslög',
    arrivalTime: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    tagNr: '1624',
    location: 'LR1',
    bbDown: 'ea',
    bbLr: 'wp',
    bbOut: 'bb',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fad07f3f-5262-45d4-a5c3-3feaf38b11e4',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '197',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: 'Nulla justo.',
    tagNr: '9194',
    location: 'LR',
    bbDown: 'ts',
    bbLr: 'jx',
    bbOut: 'tg',
    completedAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
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
    luggageId: '58082251-93ca-43bd-9d99-efb77293642d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '303',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    comments: null,
    tagNr: '0282',
    location: 'LR1',
    bbDown: 'rx',
    bbLr: 'nw',
    bbOut: 'yd',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
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
    luggageId: '06a19963-1377-488c-a862-0000b40a5bf3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '819',
    name: 'Maïwenn',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    comments: null,
    tagNr: '8605',
    location: 'LR1',
    bbDown: 'cz',
    bbLr: 'pw',
    bbOut: 'sl',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c581f805-9ae2-4e01-a33d-5d301a080483',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '800',
    name: 'Cécile',
    arrivalTime: null,
    bags: '0+1',
    comments: null,
    tagNr: '5870',
    location: 'LR1',
    bbDown: 'mt',
    bbLr: 'nd',
    bbOut: 'ah',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '62f71c3f-4c44-450b-b167-2b3817fdcba4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '649',
    name: 'Edmée',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: null,
    tagNr: '8881',
    location: 'LR1',
    bbDown: 'ct',
    bbLr: 'vu',
    bbOut: 'tq',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'edfbebcd-cc1d-4be7-9beb-67a0fad20f5a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '125',
    name: 'Estève',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: null,
    tagNr: '4579',
    location: 'LR',
    bbDown: 'jj',
    bbLr: 'wj',
    bbOut: 'lo',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/20/2022').setHours(
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
    luggageId: '366a03d9-410c-4c05-a899-f23b5e78fbd3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '595',
    name: 'Mélina',
    arrivalTime: null,
    bags: '6+9',
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    tagNr: '4072',
    location: 'LR',
    bbDown: 'bp',
    bbLr: 'ql',
    bbOut: 'pn',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9e7dafa4-dbfa-4ed7-9e37-a1034de74100',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '294',
    name: 'Hélène',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: null,
    tagNr: '5550',
    location: 'LR',
    bbDown: null,
    bbLr: 'na',
    bbOut: 'za',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/05/2023').setHours(
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
    luggageId: 'e6b6fe68-251e-49da-a51f-971d0d4f5afc',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '524',
    name: 'Angèle',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    comments: 'Ut tellus.',
    tagNr: '1951',
    location: 'LR',
    bbDown: 'vo',
    bbLr: 'ut',
    bbOut: 'pe',
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e192cab4-73a3-4b6f-96cf-f4bfb3da5828',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '727',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments: 'Maecenas tincidunt lacus at velit.',
    tagNr: '8911',
    location: 'LR1',
    bbDown: 'fm',
    bbLr: 'bc',
    bbOut: 'on',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '721e8d2a-658d-43f9-8547-4cb074d2bfb7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '241',
    name: 'Ophélie',
    arrivalTime: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: 'Aenean lectus.',
    tagNr: '6712',
    location: 'LR1',
    bbDown: 'zu',
    bbLr: 'im',
    bbOut: 'ne',
    completedAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c98abc72-fdd4-41d4-926c-35ded3a51c9b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '827',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'Vivamus vestibulum sagittis sapien.',
    tagNr: '9687',
    location: 'LR1',
    bbDown: 'it',
    bbLr: 'fy',
    bbOut: 'mk',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a06c254f-f2d3-4125-bb6f-b260f8e5540d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '249',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments: null,
    tagNr: '8391',
    location: 'LR1',
    bbDown: 'xr',
    bbLr: 'kd',
    bbOut: 'zv',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5228f0d2-5960-4f55-bfec-6376bd68d48d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '820',
    name: 'Bénédicte',
    arrivalTime: null,
    bags: '4+6',
    comments: null,
    tagNr: '0612',
    location: 'LR1',
    bbDown: null,
    bbLr: 'jw',
    bbOut: 'dw',
    completedAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'baa133ad-ee61-4ca0-981e-17860345b991',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '900',
    name: 'Sòng',
    arrivalTime: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '8123',
    location: 'LR',
    bbDown: 'kx',
    bbLr: 'za',
    bbOut: 'ts',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '56ead5dd-00d0-47fa-b4af-654b970ee5b3',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '501',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: null,
    tagNr: '5407',
    location: 'LR1',
    bbDown: null,
    bbLr: 'sr',
    bbOut: 'bs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '18a52ce3-0380-47cd-bcd6-5d61058b429d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '848',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: 'Proin at turpis a pede posuere nonummy.',
    tagNr: '7791',
    location: 'LR1',
    bbDown: 'za',
    bbLr: 'op',
    bbOut: 'zi',
    completedAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/31/2023').setHours(
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
    luggageId: '7db6b9b1-912a-46ae-b47f-5959e591a193',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '199',
    name: 'Mégane',
    arrivalTime: null,
    bags: '0+8',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    tagNr: '8642',
    location: 'LR',
    bbDown: 'cf',
    bbLr: 'sa',
    bbOut: 'fv',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd3879530-13a3-4269-ae7b-4a894971830a',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '801',
    name: 'Cécile',
    arrivalTime: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '1220',
    location: 'LR',
    bbDown: null,
    bbLr: 'dr',
    bbOut: 'ja',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8f01ee32-e1ea-4d4b-adb8-885ab5923eee',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '322',
    name: 'Chloé',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    comments: null,
    tagNr: '3784',
    location: 'LR1',
    bbDown: null,
    bbLr: 'yz',
    bbOut: 'ih',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
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
    luggageId: '39dbded6-83d1-4e9d-bb9a-711e7cb7230f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '094',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments: 'Nulla nisl.',
    tagNr: '1935',
    location: 'LR',
    bbDown: 'nh',
    bbLr: 'zc',
    bbOut: 'at',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c720e066-d129-4919-a8a4-51520809eaef',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '364',
    name: 'Maïlys',
    arrivalTime: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '4697',
    location: 'LR1',
    bbDown: 'vs',
    bbLr: 'mm',
    bbOut: 'ro',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fbeeffe7-0024-487c-a299-261f59c343c1',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '356',
    name: 'Annotée',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    comments: null,
    tagNr: '9205',
    location: 'LR',
    bbDown: 'as',
    bbLr: 'ra',
    bbOut: 'sn',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6a72cbd5-037c-4e12-a34d-d3427cc05f54',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '775',
    name: 'Håkan',
    arrivalTime: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: null,
    tagNr: '9519',
    location: 'LR1',
    bbDown: 'xk',
    bbLr: 'wq',
    bbOut: 'bg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e6c9a255-e99d-4a61-9d6c-87788a64f729',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '273',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    comments: 'Nulla suscipit ligula in lacus.',
    tagNr: '9578',
    location: 'LR1',
    bbDown: 'dn',
    bbLr: 'qx',
    bbOut: 'oz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b52fbb8f-d129-49a3-b204-4d55cf613f07',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '738',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    comments: 'Curabitur convallis.',
    tagNr: '7832',
    location: 'LR',
    bbDown: 'hq',
    bbLr: 'pl',
    bbOut: 'oc',
    completedAt: new Date(
      new Date('03/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7a0252c8-c27c-47ab-830d-8d775e54852e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '649',
    name: 'Cloé',
    arrivalTime: null,
    bags: '2+6',
    comments: null,
    tagNr: '1078',
    location: 'LR',
    bbDown: 'tf',
    bbLr: 'mh',
    bbOut: 'yo',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9e403e5d-eb3f-4638-a901-0b4a5fa86513',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '935',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    comments: null,
    tagNr: '4836',
    location: 'LR1',
    bbDown: 'lg',
    bbLr: 'js',
    bbOut: 'ci',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/10/2022').setHours(
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
    luggageId: 'f146277f-4f62-4ec7-9b46-2d41334adafa',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '141',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: null,
    tagNr: '9319',
    location: 'LR1',
    bbDown: null,
    bbLr: 'gu',
    bbOut: 'jp',
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '72f553f4-c5f5-450b-99bb-81682e4c2f1a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '048',
    name: 'Eléa',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+4',
    comments: 'Vestibulum rutrum rutrum neque.',
    tagNr: '8231',
    location: 'LR',
    bbDown: 'sb',
    bbLr: 'mi',
    bbOut: 'uj',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8c2b5f08-94c0-483c-a995-efceae8ef39a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '258',
    name: 'Eléa',
    arrivalTime: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: null,
    tagNr: '4476',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ia',
    bbOut: 'ot',
    completedAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a2066108-85a3-4fd9-ae13-8b18c98f0dde',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '523',
    name: 'Lén',
    arrivalTime: null,
    bags: '9+5',
    comments: null,
    tagNr: '8206',
    location: 'LR',
    bbDown: 'of',
    bbLr: 'mu',
    bbOut: 'rn',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '64ab2218-ab58-441a-8b6c-2299729c42b3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '575',
    name: 'Néhémie',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '5715',
    location: 'LR1',
    bbDown: 'mq',
    bbLr: 'vj',
    bbOut: 'lh',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a46c5bc3-3f98-4e39-85f5-3d4248a5ca9a',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '189',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: 'Vivamus tortor.',
    tagNr: '9915',
    location: 'LR1',
    bbDown: 'hk',
    bbLr: 'ds',
    bbOut: 'ox',
    completedAt: new Date(
      new Date('03/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2f960a6d-193f-42ef-a30c-e470fdd919f0',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '319',
    name: 'Noémie',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    tagNr: '8717',
    location: 'LR',
    bbDown: 'mz',
    bbLr: 'jw',
    bbOut: 'wx',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'db68cb36-ee0f-4540-ac2f-3829b11eb6ee',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '385',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '0206',
    location: 'LR',
    bbDown: 'xf',
    bbLr: 'mc',
    bbOut: 'bc',
    completedAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bfbdb0aa-135b-4636-91e3-bf8ecd9b05d8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '164',
    name: 'Bérangère',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    tagNr: '3531',
    location: 'LR1',
    bbDown: null,
    bbLr: 'na',
    bbOut: 'mg',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5995ccd2-ef7b-484f-a2ee-a408e868d00a',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '773',
    name: 'Nadège',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: null,
    tagNr: '7106',
    location: 'LR1',
    bbDown: 'vl',
    bbLr: 'mh',
    bbOut: 'ck',
    completedAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/12/2023').setHours(
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
    luggageId: '0eaf3f5a-2c3b-41cd-b705-6de7ee3056d9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '108',
    name: 'Clémence',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '2393',
    location: 'LR',
    bbDown: 'sc',
    bbLr: 'py',
    bbOut: 'js',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1f5c0cc1-ad89-4fcc-b711-83d88c08f8e4',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '906',
    name: 'Táng',
    arrivalTime: null,
    bags: '1+4',
    comments: null,
    tagNr: '2865',
    location: 'LR',
    bbDown: 'no',
    bbLr: 'qu',
    bbOut: 'st',
    completedAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '55bca6a9-036c-4f0a-a84c-52f8e2315565',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '098',
    name: 'Salomé',
    arrivalTime: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: 'Aenean sit amet justo.',
    tagNr: '1789',
    location: 'LR1',
    bbDown: 'bq',
    bbLr: 'ha',
    bbOut: 'is',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '00d60027-0691-4109-8a1c-fc9b0d52e1e5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '904',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    comments: 'Nam tristique tortor eu pede.',
    tagNr: '7474',
    location: 'LR',
    bbDown: null,
    bbLr: 'lj',
    bbOut: 'ob',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bb00002b-8a18-4b0e-b2c5-bcf7577073bd',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '623',
    name: 'Cunégonde',
    arrivalTime: null,
    bags: '9+6',
    comments: 'In eleifend quam a odio.',
    tagNr: '5686',
    location: 'LR',
    bbDown: 'ii',
    bbLr: 'gw',
    bbOut: 'kw',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1b28cf40-1bbe-49d9-9110-644db9e61eec',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '186',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: null,
    tagNr: '8815',
    location: 'LR',
    bbDown: null,
    bbLr: 'ry',
    bbOut: 'ct',
    completedAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7951b0c1-ec01-4634-90b9-6c40d5cd9e95',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '354',
    name: 'Salomé',
    arrivalTime: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    comments: null,
    tagNr: '1538',
    location: 'LR',
    bbDown: null,
    bbLr: 'zu',
    bbOut: 'yr',
    completedAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ed45824f-73ae-476c-8ed0-155a26ce031a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '032',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    comments: 'Morbi porttitor lorem id ligula.',
    tagNr: '1942',
    location: 'LR1',
    bbDown: 'tm',
    bbLr: 'on',
    bbOut: 'gx',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6deb4873-f0cf-49d9-95d4-e748fb41f4fd',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '023',
    name: 'Eloïse',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments: 'Donec vitae nisi.',
    tagNr: '2900',
    location: 'LR1',
    bbDown: 'jq',
    bbLr: 'hs',
    bbOut: 'ju',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '10a03c7a-c02d-45be-a775-6436a56125b9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '128',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '0182',
    location: 'LR',
    bbDown: 'en',
    bbLr: 'pg',
    bbOut: 'zs',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: 'c8ec0920-c2b9-4d6a-8164-7c92dd47c224',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '319',
    name: 'Laurélie',
    arrivalTime: null,
    bags: '5+5',
    comments: null,
    tagNr: '2224',
    location: 'LR',
    bbDown: null,
    bbLr: 'cp',
    bbOut: 'lj',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8f49be1c-fcb6-4b38-97e8-93b5cd2985e7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '188',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: null,
    tagNr: '4465',
    location: 'LR1',
    bbDown: 'uw',
    bbLr: 'tu',
    bbOut: 'dc',
    completedAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ab9c68d3-02b8-44d8-a1df-0b4fe185dcd7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '869',
    name: 'Cléa',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: null,
    tagNr: '3842',
    location: 'LR1',
    bbDown: 'fh',
    bbLr: 'jz',
    bbOut: 'pw',
    completedAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
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
    luggageId: 'd282ce61-534c-4411-ad50-bcf79a06b8c9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '705',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+5',
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    tagNr: '3802',
    location: 'LR',
    bbDown: 'wa',
    bbLr: 'fe',
    bbOut: 'sx',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/05/2023').setHours(
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
    luggageId: 'abfbc515-94fe-4e09-87c9-fb97ece448c7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '320',
    name: 'Dafnée',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    comments: null,
    tagNr: '6143',
    location: 'LR1',
    bbDown: 'kp',
    bbLr: 'cr',
    bbOut: 'ic',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '279a2259-3ff0-445e-979a-ac1d28fca8a5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '188',
    name: 'Naéva',
    arrivalTime: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    tagNr: '4524',
    location: 'LR',
    bbDown: 'aw',
    bbLr: 'bo',
    bbOut: 'dy',
    completedAt: new Date(
      new Date('01/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '771da631-38a0-45a1-bf56-5e6e3c5ef93c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '655',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+9',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '3685',
    location: 'LR',
    bbDown: null,
    bbLr: 'bs',
    bbOut: 'zy',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '95f77860-24f9-4886-bbbc-1785b90173ef',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '446',
    name: 'Mén',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    comments: null,
    tagNr: '7779',
    location: 'LR1',
    bbDown: 'nj',
    bbLr: 'kw',
    bbOut: 'wd',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f6043ff3-103a-4b53-a134-a5c3bcf39589',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '283',
    name: 'Yóu',
    arrivalTime: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+2',
    comments: 'Nullam varius.',
    tagNr: '9934',
    location: 'LR',
    bbDown: 'hr',
    bbLr: 'bv',
    bbOut: 'gm',
    completedAt: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/28/2023').setHours(
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
    luggageId: '9c9dea08-66db-42f6-8b2c-f2d4369cb75c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '406',
    name: 'Nadège',
    arrivalTime: null,
    bags: '0+3',
    comments: 'Pellentesque at nulla.',
    tagNr: '4520',
    location: 'LR',
    bbDown: 'ls',
    bbLr: 'xz',
    bbOut: 'ld',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/01/2023').setHours(
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
    luggageId: '9f118463-e0af-4663-9f98-f16f792ab9a2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '535',
    name: 'Clélia',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '1876',
    location: 'LR',
    bbDown: 'hm',
    bbLr: 'nq',
    bbOut: 'id',
    completedAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
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
    luggageId: 'd52eb6a5-21a7-49e2-a10e-b6ab9fcd2831',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '169',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments: null,
    tagNr: '7355',
    location: 'LR1',
    bbDown: 'ed',
    bbLr: 'iu',
    bbOut: 'mr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9ae8a873-d607-4f61-87a6-f92f29c0eef3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '266',
    name: 'Léana',
    arrivalTime: null,
    bags: '5+2',
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    tagNr: '4785',
    location: 'LR',
    bbDown: null,
    bbLr: 'tq',
    bbOut: 'kb',
    completedAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '092604ec-daa5-4a8c-8f3a-08b897f22843',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '807',
    name: 'Estève',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: 'Integer ac leo.',
    tagNr: '6859',
    location: 'LR',
    bbDown: 'gb',
    bbLr: 'io',
    bbOut: 'ag',
    completedAt: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2a03453b-7241-4f11-be13-57ab08708cf5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '919',
    name: 'Garçon',
    arrivalTime: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: null,
    tagNr: '8266',
    location: 'LR',
    bbDown: null,
    bbLr: 'ny',
    bbOut: 'je',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2d022fc6-8cea-4930-9482-57a2bec6f98f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '858',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    comments: null,
    tagNr: '4443',
    location: 'LR1',
    bbDown: 'ms',
    bbLr: 'pp',
    bbOut: 'ff',
    completedAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/23/2023').setHours(
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
    luggageId: 'b8f98ad9-185e-4ec6-a407-fb461cc422a7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '518',
    name: 'Bérengère',
    arrivalTime: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    tagNr: '5636',
    location: 'LR1',
    bbDown: 'is',
    bbLr: 'lu',
    bbOut: 'mt',
    completedAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7314f36c-3fc7-4f40-9cd9-82383fe53b85',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '698',
    name: 'Renée',
    arrivalTime: null,
    bags: '2+5',
    comments: 'Aenean fermentum.',
    tagNr: '9092',
    location: 'LR1',
    bbDown: 'ep',
    bbLr: 'sl',
    bbOut: 'ws',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3f3526ad-bee9-4cc6-95d6-2b0c5e3d90a5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '773',
    name: 'Jú',
    arrivalTime: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: 'Integer ac leo.',
    tagNr: '2631',
    location: 'LR1',
    bbDown: 'bl',
    bbLr: 'ez',
    bbOut: 'ya',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'aa091601-871a-415a-8bbd-0bf9b56ec883',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '661',
    name: 'Cléopatre',
    arrivalTime: null,
    bags: '3+2',
    comments: null,
    tagNr: '6719',
    location: 'LR1',
    bbDown: 'fz',
    bbLr: 'tu',
    bbOut: 'gb',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0985267d-6ba3-4c3e-9abb-0f3216fe1af9',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '655',
    name: 'Marie-françoise',
    arrivalTime: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: 'Donec posuere metus vitae ipsum.',
    tagNr: '2515',
    location: 'LR1',
    bbDown: 'yy',
    bbLr: 'nx',
    bbOut: 'rm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/12/2022').setHours(
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
    luggageId: '6b1de946-aa1b-4547-881a-52ce46e103e1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '849',
    name: 'Marie-josée',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: 'Cras in purus eu magna vulputate luctus.',
    tagNr: '0703',
    location: 'LR',
    bbDown: 'ea',
    bbLr: 'fg',
    bbOut: 'dy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c93483fa-0858-46ac-9cfd-496051d0c2c2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '336',
    name: 'Jú',
    arrivalTime: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments: null,
    tagNr: '5849',
    location: 'LR1',
    bbDown: 'nb',
    bbLr: 'kc',
    bbOut: 'zc',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '76ed106b-7343-4aba-9461-da9e5f74203c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '856',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    tagNr: '0930',
    location: 'LR1',
    bbDown: 'qj',
    bbLr: 'ez',
    bbOut: 'ug',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8995c577-c221-4391-a643-f69507d50dc0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '677',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    comments: null,
    tagNr: '3834',
    location: 'LR1',
    bbDown: 'no',
    bbLr: 'nu',
    bbOut: 'np',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dd663009-726c-4554-89ee-f1cdf4946994',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '975',
    name: 'Naëlle',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    tagNr: '8222',
    location: 'LR1',
    bbDown: null,
    bbLr: 'li',
    bbOut: 'yj',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/10/2022').setHours(
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
    luggageId: 'b5357c44-ab88-49e5-9d10-0775ab582a74',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '665',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '7942',
    location: 'LR1',
    bbDown: 'fq',
    bbLr: 'vm',
    bbOut: 'ys',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6bf7b2fe-236c-4817-8f11-39b9e32c8ae0',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '632',
    name: 'Göran',
    arrivalTime: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '1889',
    location: 'LR',
    bbDown: null,
    bbLr: 'gd',
    bbOut: 'zz',
    completedAt: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/28/2023').setHours(
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
    luggageId: '619d8b25-3769-4168-b998-a6d38e57f25c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '403',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: null,
    tagNr: '2597',
    location: 'LR',
    bbDown: 'eb',
    bbLr: 'bi',
    bbOut: 'ea',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
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
    luggageId: '2a92f5ef-a279-4fba-be8d-27263130df85',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '220',
    name: 'André',
    arrivalTime: null,
    bags: '2+2',
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    tagNr: '1027',
    location: 'LR',
    bbDown: 'yv',
    bbLr: 'uk',
    bbOut: 'gu',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '67ef478b-92ea-4114-bea1-018093663d54',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '412',
    name: 'Mélodie',
    arrivalTime: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    comments: 'Morbi non lectus.',
    tagNr: '4608',
    location: 'LR',
    bbDown: null,
    bbLr: 'at',
    bbOut: 'vt',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a0d9638c-346a-436c-8a90-d47fc4b4782e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '206',
    name: 'Mén',
    arrivalTime: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+4',
    comments: 'Quisque porta volutpat erat.',
    tagNr: '3177',
    location: 'LR',
    bbDown: 'be',
    bbLr: 'ww',
    bbOut: 'bm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3b04a219-3c17-488b-aa64-3d0585c329d0',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '965',
    name: 'Mélina',
    arrivalTime: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: 'Donec ut mauris eget massa tempor convallis.',
    tagNr: '9650',
    location: 'LR1',
    bbDown: null,
    bbLr: 'hl',
    bbOut: 'dp',
    completedAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1968e5cb-5cc2-4113-98a2-1d319603256a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '972',
    name: 'Rachèle',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    comments: null,
    tagNr: '1523',
    location: 'LR',
    bbDown: 'ux',
    bbLr: 'mi',
    bbOut: 'ud',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/14/2022').setHours(
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
    luggageId: 'f36dc40c-25c0-49f0-81e9-4b3ccd9adca9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '901',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '3794',
    location: 'LR',
    bbDown: 'xf',
    bbLr: 'cy',
    bbOut: 'hb',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'cb25952b-0ec7-43fc-9483-c4b15256b0d0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '406',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    comments: null,
    tagNr: '4942',
    location: 'LR',
    bbDown: 'lt',
    bbLr: 'di',
    bbOut: 'pa',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7a1fa845-e0ba-43d3-9c67-4aaf0a7521b0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '677',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    comments: 'Etiam faucibus cursus urna.',
    tagNr: '8284',
    location: 'LR',
    bbDown: 'ev',
    bbLr: 'qg',
    bbOut: 'no',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c7f1ba83-c7ae-43d7-83ea-5e7fee807c6d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '780',
    name: 'Cunégonde',
    arrivalTime: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: null,
    tagNr: '7969',
    location: 'LR',
    bbDown: 'km',
    bbLr: 'tp',
    bbOut: 'xh',
    completedAt: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2ec1d17b-b9ce-4d6d-b1b9-010b7a217861',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '375',
    name: 'Håkan',
    arrivalTime: null,
    bags: '1+1',
    comments: 'Mauris lacinia sapien quis libero.',
    tagNr: '7934',
    location: 'LR',
    bbDown: 'va',
    bbLr: 'xi',
    bbOut: 'wh',
    completedAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/20/2023').setHours(
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
    luggageId: '5d5aeb85-c15f-42c3-9a77-0c7c8e460c44',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '128',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: 'Duis bibendum.',
    tagNr: '5180',
    location: 'LR',
    bbDown: 'ej',
    bbLr: 'wg',
    bbOut: 'ya',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a5bcbbfd-bd82-401a-96f9-f5cb93964252',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '606',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '3855',
    location: 'LR',
    bbDown: 'bd',
    bbLr: 'vd',
    bbOut: 'ey',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '28a84f0b-607d-460f-a468-5aaf31a2371b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '303',
    name: 'Andréanne',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+7',
    comments: null,
    tagNr: '3207',
    location: 'LR',
    bbDown: 'gq',
    bbLr: 'sb',
    bbOut: 'zw',
    completedAt: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
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
    luggageId: '2ead6f0e-e706-4997-b7c4-eb3d30edaa73',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '678',
    name: 'Véronique',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: null,
    tagNr: '3434',
    location: 'LR1',
    bbDown: 'kl',
    bbLr: 'jb',
    bbOut: 'fm',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
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
    luggageId: 'bf016f19-628d-45de-b6e9-c23c303a0721',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '379',
    name: 'Lèi',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    tagNr: '3025',
    location: 'LR1',
    bbDown: 'qi',
    bbLr: 'wn',
    bbOut: 'op',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4bc3faf2-243f-47b2-94ea-5b8a940055ca',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '072',
    name: 'Bécassine',
    arrivalTime: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments: null,
    tagNr: '2089',
    location: 'LR1',
    bbDown: null,
    bbLr: 'hk',
    bbOut: 'uw',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd6c96c29-37e1-455e-82d7-34916640efe4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '224',
    name: 'Frédérique',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments: null,
    tagNr: '1756',
    location: 'LR',
    bbDown: 'da',
    bbLr: 'ls',
    bbOut: 'of',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '71ccadf6-da93-4a5f-9141-85b874884ec6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '849',
    name: 'Aimée',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    comments: 'Aenean sit amet justo.',
    tagNr: '8964',
    location: 'LR1',
    bbDown: 'mc',
    bbLr: 'cu',
    bbOut: 'ch',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '030a2803-3d9e-420a-97b7-cf28987589f8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '642',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    comments: null,
    tagNr: '8796',
    location: 'LR1',
    bbDown: 'uo',
    bbLr: 'cu',
    bbOut: 'dy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6493c4f6-ff33-49ec-a94e-6c7061a15d16',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '277',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+9',
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    tagNr: '9622',
    location: 'LR',
    bbDown: 'hs',
    bbLr: 'kn',
    bbOut: 'wx',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b46405f0-cbeb-4888-9b20-c8513347be8f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '849',
    name: 'Vénus',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '3334',
    location: 'LR',
    bbDown: 'fk',
    bbLr: 'hm',
    bbOut: 'ly',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '551f9b0d-8601-4f9b-bd69-b750b5bed51b',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '991',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '0731',
    location: 'LR1',
    bbDown: null,
    bbLr: 'no',
    bbOut: 'kk',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '167b5c5d-b234-40e2-9a83-13d8eccaacef',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '480',
    name: 'Léa',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: null,
    tagNr: '9311',
    location: 'LR1',
    bbDown: 'ix',
    bbLr: 'lj',
    bbOut: 'ih',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '989cfd16-7c63-47d2-9e65-7e3495bbf09c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '405',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: 'Nulla ac enim.',
    tagNr: '2692',
    location: 'LR',
    bbDown: 'cd',
    bbLr: 'av',
    bbOut: 'ws',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/11/2023').setHours(
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
    luggageId: '4376027b-201f-4348-a63a-d1295a3287d5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '640',
    name: 'Garçon',
    arrivalTime: null,
    bags: '9+5',
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    tagNr: '2919',
    location: 'LR',
    bbDown: 'vv',
    bbLr: 'wh',
    bbOut: 'ff',
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6fb1aa70-3780-4589-9ff8-c69e8fc2b468',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '161',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '5179',
    location: 'LR1',
    bbDown: 'bb',
    bbLr: 'vk',
    bbOut: 'pm',
    completedAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b0c6265b-4a6b-4a4b-8582-012583151d2d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '131',
    name: 'Vérane',
    arrivalTime: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: 'Proin eu mi.',
    tagNr: '8193',
    location: 'LR',
    bbDown: null,
    bbLr: 'ev',
    bbOut: 'ce',
    completedAt: new Date(
      new Date('03/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c9e8d6ca-86fb-4034-8c36-e75b26f23d57',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '277',
    name: 'Angélique',
    arrivalTime: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: null,
    tagNr: '9307',
    location: 'LR1',
    bbDown: 'qc',
    bbLr: 'fw',
    bbOut: 'dv',
    completedAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '78406e89-bb04-488f-adf1-542d520df248',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '704',
    name: 'Aloïs',
    arrivalTime: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: 'Nulla ac enim.',
    tagNr: '2097',
    location: 'LR',
    bbDown: 'nm',
    bbLr: 'kl',
    bbOut: 'dr',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f94ef1c2-3f03-4ea0-b4aa-f39885aec96a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '342',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    comments: null,
    tagNr: '0886',
    location: 'LR',
    bbDown: 'pj',
    bbLr: 'wq',
    bbOut: 'nm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/19/2023').setHours(
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
    luggageId: '9c541c25-0402-42b5-b129-95dd8ca82311',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '119',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    comments: 'Duis ac nibh.',
    tagNr: '3754',
    location: 'LR',
    bbDown: 'un',
    bbLr: 'jz',
    bbOut: 'kq',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd85b3701-e699-46dc-9c8d-78e7fc07f169',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '919',
    name: 'Célestine',
    arrivalTime: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: null,
    tagNr: '6274',
    location: 'LR',
    bbDown: 'zl',
    bbLr: 'fq',
    bbOut: 'co',
    completedAt: new Date(
      new Date('03/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8e7a95f5-70a1-4e89-b62e-29347071f9f5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '029',
    name: 'Anaé',
    arrivalTime: null,
    bags: '6+5',
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    tagNr: '0641',
    location: 'LR',
    bbDown: 'qj',
    bbLr: 'vs',
    bbOut: 'bm',
    completedAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c575ffe6-2ac3-4867-90a6-be6bf34d3c68',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '478',
    name: 'Séverine',
    arrivalTime: null,
    bags: '7+9',
    comments: 'Curabitur convallis.',
    tagNr: '6221',
    location: 'LR',
    bbDown: 'gu',
    bbLr: 'zd',
    bbOut: 'yl',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/25/2022').setHours(
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
    luggageId: '6996f16d-fd44-4288-bc14-1fcd0eea5ab0',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '638',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    comments: null,
    tagNr: '1109',
    location: 'LR1',
    bbDown: 'ol',
    bbLr: 'hf',
    bbOut: 'yn',
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b5be9765-5468-4755-ab28-aeb1d4b28de6',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '325',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: 'Suspendisse potenti.',
    tagNr: '9479',
    location: 'LR',
    bbDown: 'lo',
    bbLr: 'wd',
    bbOut: 'rg',
    completedAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/24/2023').setHours(
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
    luggageId: 'a69a6835-8a9b-4f44-aff9-e30c6e3119ad',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '488',
    name: 'Stévina',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments: 'Mauris lacinia sapien quis libero.',
    tagNr: '2460',
    location: 'LR',
    bbDown: 'nk',
    bbLr: 'rj',
    bbOut: 'rh',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '737dc4ea-7146-49d5-95cb-2e0ece1f4bb4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '678',
    name: 'Amélie',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    comments: 'Duis at velit eu est congue elementum.',
    tagNr: '1984',
    location: 'LR',
    bbDown: 'oi',
    bbLr: 'rp',
    bbOut: 'gp',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '014e9993-6d46-4635-a971-d06a9c922f08',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '013',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: 'Integer a nibh.',
    tagNr: '1754',
    location: 'LR1',
    bbDown: 'hu',
    bbLr: 'dp',
    bbOut: 'fy',
    completedAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '329bfb68-d027-4d79-9514-7f4fb7ffd2d1',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '429',
    name: 'Océanne',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    comments: null,
    tagNr: '1351',
    location: 'LR1',
    bbDown: null,
    bbLr: 'jo',
    bbOut: 'kz',
    completedAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7a69c71a-2607-4efc-b8ad-f288af2bb1e2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '977',
    name: 'Kévina',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '4129',
    location: 'LR',
    bbDown: 'we',
    bbLr: 'rj',
    bbOut: 'ay',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '216b85e5-0462-401a-881e-575229d0500c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '190',
    name: 'Faîtes',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: null,
    tagNr: '1746',
    location: 'LR1',
    bbDown: 'yg',
    bbLr: 'mm',
    bbOut: 'nu',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
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
    luggageId: '81cf2585-7177-490b-8c33-52489d417577',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '831',
    name: 'Ruì',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments: null,
    tagNr: '3901',
    location: 'LR',
    bbDown: null,
    bbLr: 'be',
    bbOut: 'ol',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b601215b-a6fd-4635-a1ea-4a9b922de497',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '411',
    name: 'Annotés',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    tagNr: '2308',
    location: 'LR1',
    bbDown: 'kg',
    bbLr: 'ew',
    bbOut: 'gw',
    completedAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '24343768-bdeb-4160-b537-77deb9bbba2e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '397',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: 'Phasellus sit amet erat.',
    tagNr: '5828',
    location: 'LR',
    bbDown: 'uu',
    bbLr: 'hw',
    bbOut: 'as',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/31/2023').setHours(
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
    luggageId: 'c956f23f-ee02-4d7b-a5a9-89b95be7f0e8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '266',
    name: 'Yú',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    tagNr: '3418',
    location: 'LR',
    bbDown: 'xp',
    bbLr: 'jg',
    bbOut: 'xm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2534e51a-fa6f-4940-836c-66297ef74101',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '988',
    name: 'Sélène',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    comments: null,
    tagNr: '6065',
    location: 'LR',
    bbDown: 'dg',
    bbLr: 'qv',
    bbOut: 'xb',
    completedAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fea407dc-8c80-4fdd-8168-9c5ca059e031',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '016',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: null,
    tagNr: '2624',
    location: 'LR',
    bbDown: 'kt',
    bbLr: 'vm',
    bbOut: 'hy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
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
    luggageId: 'a1da5c78-da76-4191-b026-c5281997e69d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '847',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '6853',
    location: 'LR',
    bbDown: 'dj',
    bbLr: 'tx',
    bbOut: 'pi',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/25/2022').setHours(
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
    luggageId: '2cbcec17-b561-434e-bb9e-744f83a8a133',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '469',
    name: 'Marylène',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '3710',
    location: 'LR1',
    bbDown: 'ic',
    bbLr: 'wb',
    bbOut: 'wl',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b4b396e3-2f20-4155-b3d7-84721ba695ae',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '515',
    name: 'Börje',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: null,
    tagNr: '8120',
    location: 'LR',
    bbDown: 'bi',
    bbLr: 'yl',
    bbOut: 'sc',
    completedAt: null,
    dateNeeded: new Date(
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
    luggageId: '59cba6bc-49ac-4286-907d-aa51228df257',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '118',
    name: 'Lén',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    comments: null,
    tagNr: '6719',
    location: 'LR',
    bbDown: 'na',
    bbLr: 'xu',
    bbOut: 'oz',
    completedAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
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
    luggageId: '6adf6ad2-0ee0-451a-a376-aa3ccd823422',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '413',
    name: 'Nuó',
    arrivalTime: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments: null,
    tagNr: '1603',
    location: 'LR1',
    bbDown: 'gu',
    bbLr: 'lj',
    bbOut: 'qg',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/29/2022').setHours(
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
    luggageId: 'b5472f28-f4ce-446c-afc6-b106cbb04991',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '434',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    comments: 'Nam nulla.',
    tagNr: '4794',
    location: 'LR1',
    bbDown: 'ok',
    bbLr: 'ek',
    bbOut: 'cz',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3907deda-de9b-4311-93d2-4cfde06e2b22',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '787',
    name: 'Mélia',
    arrivalTime: null,
    bags: '6+6',
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    tagNr: '1597',
    location: 'LR',
    bbDown: 'vx',
    bbLr: 'zm',
    bbOut: 'hb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c68357fb-fd49-4fb3-abfa-cf9bab347f33',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '580',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    tagNr: '0508',
    location: 'LR',
    bbDown: 'se',
    bbLr: 'xa',
    bbOut: 'eo',
    completedAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
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
    luggageId: '4f14cdc7-1b06-4243-9b18-c57b7071aeec',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '908',
    name: 'Ruò',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+1',
    comments: null,
    tagNr: '4835',
    location: 'LR1',
    bbDown: 'nx',
    bbLr: 'cc',
    bbOut: 'up',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'bf9d8284-b72d-4505-bf10-453976f4304d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '838',
    name: 'Åsa',
    arrivalTime: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    comments: null,
    tagNr: '7684',
    location: 'LR1',
    bbDown: 'iy',
    bbLr: 'nd',
    bbOut: 'ew',
    completedAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4f98ba42-d8f4-45b3-92da-efaf9d73b860',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '053',
    name: 'Dafnée',
    arrivalTime: null,
    bags: '3+6',
    comments: null,
    tagNr: '3784',
    location: 'LR1',
    bbDown: 'hh',
    bbLr: 'es',
    bbOut: 'qq',
    completedAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7559cc4d-191a-4bab-b6b6-ca5d4f6012d5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '676',
    name: 'Léandre',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    comments: null,
    tagNr: '9300',
    location: 'LR',
    bbDown: 'ec',
    bbLr: 'ok',
    bbOut: 'cn',
    completedAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '22e1fa49-eac2-4379-a6c5-9bdb3abf05ca',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '260',
    name: 'Annotée',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    tagNr: '2263',
    location: 'LR',
    bbDown: 'kr',
    bbLr: 'ir',
    bbOut: 'hr',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '674574b1-2e3a-4c7b-b413-87bd51f2fd80',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '072',
    name: 'Irène',
    arrivalTime: null,
    bags: '7+3',
    comments: 'Nunc nisl.',
    tagNr: '0808',
    location: 'LR1',
    bbDown: 'bm',
    bbLr: 'af',
    bbOut: 'tp',
    completedAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b0a2bbe4-ded4-41ab-a8df-9ca0c4ef8549',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '112',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '4946',
    location: 'LR1',
    bbDown: null,
    bbLr: 'dr',
    bbOut: 'am',
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b9ba1168-345a-4cf4-ae92-d2daa9e7688c',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '814',
    name: 'Mårten',
    arrivalTime: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    comments: 'Duis at velit eu est congue elementum.',
    tagNr: '3328',
    location: 'LR1',
    bbDown: 'ay',
    bbLr: 'sq',
    bbOut: 'pe',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '501d68bd-8d37-49ab-bc7a-2b4a1351826f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '530',
    name: 'Adélie',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments: null,
    tagNr: '5727',
    location: 'LR',
    bbDown: 'ts',
    bbLr: 'kz',
    bbOut: 'xp',
    completedAt: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'aede88dd-f962-46b3-86c4-11dac0cd706a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '416',
    name: 'Irène',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: 'Pellentesque viverra pede ac diam.',
    tagNr: '1034',
    location: 'LR',
    bbDown: 'on',
    bbLr: 'qp',
    bbOut: 'le',
    completedAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c94ebb10-a364-4996-9f09-30c8fd481816',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '161',
    name: 'Jú',
    arrivalTime: null,
    bags: '1+0',
    comments: 'Fusce consequat.',
    tagNr: '6374',
    location: 'LR',
    bbDown: 'rp',
    bbLr: 'eq',
    bbOut: 'vv',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4348ade5-1c69-4043-88cc-5a76e93ee1c2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '930',
    name: 'Annotés',
    arrivalTime: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    tagNr: '5604',
    location: 'LR',
    bbDown: 'ar',
    bbLr: 'wx',
    bbOut: 'df',
    completedAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3e378dbf-13e1-4635-87be-718adf16ffd3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '478',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: null,
    tagNr: '4487',
    location: 'LR',
    bbDown: 'dn',
    bbLr: 'cj',
    bbOut: 'ge',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fdb2cc0d-1096-41f5-a57c-95e07a38974b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '886',
    name: 'Léonore',
    arrivalTime: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    comments: null,
    tagNr: '8942',
    location: 'LR',
    bbDown: 'vg',
    bbLr: 'vp',
    bbOut: 'ut',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '33e19ad0-0ae5-41a6-bbad-8f5a32243616',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '189',
    name: 'Pål',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: null,
    tagNr: '8263',
    location: 'LR1',
    bbDown: 'dw',
    bbLr: 'xk',
    bbOut: 'dg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '32d9c665-e6a7-408f-8abb-cf7363a010c8',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '773',
    name: 'Pénélope',
    arrivalTime: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments: 'Nam nulla.',
    tagNr: '1007',
    location: 'LR1',
    bbDown: 'em',
    bbLr: 'ui',
    bbOut: 'pg',
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/10/2022').setHours(
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
    luggageId: 'ca0ce4e5-24e4-45ac-b6b5-dcf7bd38b20b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '113',
    name: 'Solène',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: null,
    tagNr: '9810',
    location: 'LR',
    bbDown: 'fo',
    bbLr: 'fr',
    bbOut: 'qb',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7bf830c0-ec01-4789-b47e-94bc269380e4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '974',
    name: 'Uò',
    arrivalTime: null,
    bags: '8+8',
    comments: null,
    tagNr: '3806',
    location: 'LR1',
    bbDown: 'zg',
    bbLr: 'co',
    bbOut: 'sg',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b96ebcb9-65c8-4016-b97a-1fbebb0436d4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '497',
    name: 'Anaé',
    arrivalTime: null,
    bags: '1+0',
    comments: 'Donec ut dolor.',
    tagNr: '8259',
    location: 'LR',
    bbDown: 'ex',
    bbLr: 'gu',
    bbOut: 'sm',
    completedAt: new Date(
      new Date('03/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '86e202dd-0ab9-4eb2-9ea2-eb5c4d2262c4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '672',
    name: 'Loïca',
    arrivalTime: null,
    bags: '6+2',
    comments: 'Integer a nibh.',
    tagNr: '0765',
    location: 'LR',
    bbDown: 'mj',
    bbLr: 'rv',
    bbOut: 'oa',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5054bfa4-35b9-4b08-9b98-405f8ddf602c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '747',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: 'Nulla tellus.',
    tagNr: '8194',
    location: 'LR',
    bbDown: null,
    bbLr: 'cn',
    bbOut: 'ui',
    completedAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/21/2023').setHours(
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
    luggageId: '6a793e9c-3a2e-4d6c-9b2e-f02aa4726e43',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '673',
    name: 'Réjane',
    arrivalTime: null,
    bags: '3+5',
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '6525',
    location: 'LR1',
    bbDown: null,
    bbLr: 'bt',
    bbOut: 'hj',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '79daa0fc-08ce-4efc-8929-be95404aab04',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '404',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+2',
    comments: 'Vestibulum rutrum rutrum neque.',
    tagNr: '8804',
    location: 'LR1',
    bbDown: 'rv',
    bbLr: 'gj',
    bbOut: 'qp',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fd168023-09bd-4bb9-94d7-60a9e8c4b464',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '325',
    name: 'Clélia',
    arrivalTime: null,
    bags: '6+4',
    comments: 'Morbi non lectus.',
    tagNr: '3443',
    location: 'LR1',
    bbDown: 'iz',
    bbLr: 'fn',
    bbOut: 'jk',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '76290626-3c3c-47ae-a3cc-70a6800e4e30',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '119',
    name: 'Josée',
    arrivalTime: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments: 'Nunc purus.',
    tagNr: '4729',
    location: 'LR1',
    bbDown: 'bz',
    bbLr: 'ro',
    bbOut: 'hy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/11/2023').setHours(
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
    luggageId: 'a22e0ba4-e12a-438d-952e-acfe84985e92',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '331',
    name: 'Laurélie',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments: null,
    tagNr: '0464',
    location: 'LR1',
    bbDown: 'zd',
    bbLr: 'cn',
    bbOut: 'hp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd01ac6eb-912e-4fd6-b1bb-3814666f697a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '737',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: null,
    tagNr: '4757',
    location: 'LR',
    bbDown: 'uq',
    bbLr: 'yr',
    bbOut: 'yj',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9d851e01-67fa-4ed7-8d68-92550ca652ae',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '511',
    name: 'Liè',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: 'Quisque porta volutpat erat.',
    tagNr: '9504',
    location: 'LR1',
    bbDown: 'lt',
    bbLr: 'ok',
    bbOut: 'kb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c3af06d8-de2c-4074-88e1-317b16b2a02a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '803',
    name: 'Erwéi',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    comments: 'In quis justo.',
    tagNr: '8165',
    location: 'LR',
    bbDown: 'pe',
    bbLr: 'br',
    bbOut: 'fg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
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
    luggageId: 'd2fddfb6-5740-4867-a797-5f628cb524de',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '536',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: null,
    tagNr: '0153',
    location: 'LR1',
    bbDown: 'ho',
    bbLr: 'sd',
    bbOut: 'iz',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd89ee1b7-1148-47b8-b96c-14ef59b2ffb0',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '852',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: 'Praesent lectus.',
    tagNr: '7664',
    location: 'LR',
    bbDown: null,
    bbLr: 'hu',
    bbOut: 'yk',
    completedAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '34a11533-3c25-4ed9-973e-7b53cfd93a53',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '036',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: 'Mauris sit amet eros.',
    tagNr: '5988',
    location: 'LR',
    bbDown: null,
    bbLr: 'll',
    bbOut: 'tl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/13/2022').setHours(
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
    luggageId: '27544618-5bb7-4bae-84aa-c60a947a9919',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '000',
    name: 'Réservés',
    arrivalTime: null,
    bags: '8+8',
    comments: null,
    tagNr: '4991',
    location: 'LR',
    bbDown: 'rk',
    bbLr: 'ue',
    bbOut: 'mn',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/27/2022').setHours(
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
    luggageId: 'a39f92bb-8db0-4f97-ad3f-6e56a63d716f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '345',
    name: 'Andréa',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+2',
    comments: null,
    tagNr: '5410',
    location: 'LR1',
    bbDown: 'hm',
    bbLr: 'kx',
    bbOut: 'wb',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/17/2022').setHours(
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
    luggageId: '44a7d2ca-7a1c-4dc9-b341-99698f353c25',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '700',
    name: 'Geneviève',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: null,
    tagNr: '9950',
    location: 'LR',
    bbDown: null,
    bbLr: 'qk',
    bbOut: 'fw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
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
    luggageId: 'af63a929-5b8e-48a4-ab02-7f9b975c228a',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '820',
    name: 'Håkan',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: null,
    tagNr: '2445',
    location: 'LR',
    bbDown: 'mj',
    bbLr: 'lo',
    bbOut: 'zq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8e9cd5c7-b49f-4f94-aa07-b5985389a2ab',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '393',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: null,
    tagNr: '8980',
    location: 'LR',
    bbDown: 'jz',
    bbLr: 'yu',
    bbOut: 'li',
    completedAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c96d0f34-dca5-48fa-b821-aa12f158fc35',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '473',
    name: 'Publicité',
    arrivalTime: null,
    bags: '0+5',
    comments: null,
    tagNr: '4053',
    location: 'LR',
    bbDown: null,
    bbLr: 'yn',
    bbOut: 'jr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2b8eec36-ec64-4ab2-9e76-e1c609faf0fd',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '597',
    name: 'Dafnée',
    arrivalTime: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    comments: 'Praesent lectus.',
    tagNr: '9693',
    location: 'LR1',
    bbDown: 'qw',
    bbLr: 'jw',
    bbOut: 'bh',
    completedAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3674b74a-1536-4442-8a46-f5f7bf8b299a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '204',
    name: 'Josée',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    tagNr: '5715',
    location: 'LR',
    bbDown: null,
    bbLr: 'gx',
    bbOut: 'dd',
    completedAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ffb5d079-e0d0-4162-80e9-a7465a098abe',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '816',
    name: 'Océane',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    comments: null,
    tagNr: '9053',
    location: 'LR1',
    bbDown: 'he',
    bbLr: 'ca',
    bbOut: 'tc',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e781dd10-bb77-4357-9e2a-2b3bc85aaf7d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '222',
    name: 'Marie-josée',
    arrivalTime: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: null,
    tagNr: '2617',
    location: 'LR',
    bbDown: 'qf',
    bbLr: 'lt',
    bbOut: 'ts',
    completedAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'afb14f7f-a031-4a5c-b186-5f37abaa7442',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '929',
    name: 'Lucrèce',
    arrivalTime: null,
    bags: '6+3',
    comments: null,
    tagNr: '3125',
    location: 'LR',
    bbDown: 'cb',
    bbLr: 'dp',
    bbOut: 'xq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8e79d170-de5d-4c5e-a380-1285a26a4a1a',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '866',
    name: 'Maéna',
    arrivalTime: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+9',
    comments: 'Integer ac leo.',
    tagNr: '1437',
    location: 'LR1',
    bbDown: 'dj',
    bbLr: 'mr',
    bbOut: 'cq',
    completedAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '936e1eb5-b315-4485-badd-6698638a4c85',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '198',
    name: 'Maëlys',
    arrivalTime: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: 'Proin risus.',
    tagNr: '0677',
    location: 'LR1',
    bbDown: 'ld',
    bbLr: 'ro',
    bbOut: 'ib',
    completedAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '90eb674f-fddb-4eea-aa42-2679fa4953c6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '017',
    name: 'Célestine',
    arrivalTime: null,
    bags: '5+2',
    comments: 'Maecenas tincidunt lacus at velit.',
    tagNr: '2581',
    location: 'LR',
    bbDown: null,
    bbLr: 'kd',
    bbOut: 'pf',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a1194f5c-639e-45e1-a1c9-b45aca31fc77',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '614',
    name: 'Yóu',
    arrivalTime: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: null,
    tagNr: '3028',
    location: 'LR',
    bbDown: 'kd',
    bbLr: 'or',
    bbOut: 'sk',
    completedAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '162140dd-b2ae-478e-a017-565ec15f289d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '562',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '1005',
    location: 'LR1',
    bbDown: 'fa',
    bbLr: 'bw',
    bbOut: 'xu',
    completedAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c051d748-99e6-412d-9c1e-dacf30c0f2d4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '118',
    name: 'Mén',
    arrivalTime: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Mauris sit amet eros.',
    tagNr: '9843',
    location: 'LR',
    bbDown: 'bk',
    bbLr: 'sc',
    bbOut: 'ul',
    completedAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a4cc9f63-3997-4970-b1c1-161c7ef28c7c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '324',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    comments: null,
    tagNr: '7811',
    location: 'LR1',
    bbDown: 'bu',
    bbLr: 'sb',
    bbOut: 'at',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
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
    luggageId: 'b10bc50a-9268-47d9-9ee9-3457f0c30c2b',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '938',
    name: 'Crééz',
    arrivalTime: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    comments: 'Fusce posuere felis sed lacus.',
    tagNr: '1629',
    location: 'LR1',
    bbDown: 'he',
    bbLr: 'th',
    bbOut: 'yl',
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/28/2022').setHours(
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
    luggageId: '62c4e7bb-a159-4023-b9b0-5be5edbe3699',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '415',
    name: 'Anaël',
    arrivalTime: null,
    bags: '9+7',
    comments: null,
    tagNr: '4262',
    location: 'LR1',
    bbDown: 'mx',
    bbLr: 'mb',
    bbOut: 'ld',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a1a667e3-02fb-40f7-94e0-5601ec0f35de',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '066',
    name: 'Mà',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: null,
    tagNr: '9034',
    location: 'LR1',
    bbDown: 'xi',
    bbLr: 'cd',
    bbOut: 'ad',
    completedAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '748dfb0e-6faa-454b-87bc-604a94deeb1a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '946',
    name: 'Loïc',
    arrivalTime: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    comments: null,
    tagNr: '2969',
    location: 'LR1',
    bbDown: 'ss',
    bbLr: 'qc',
    bbOut: 'zm',
    completedAt: new Date(
      new Date('03/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ab6bf290-eba2-41bc-a288-53ce24c0660a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '424',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: 'Quisque porta volutpat erat.',
    tagNr: '8527',
    location: 'LR1',
    bbDown: 'wt',
    bbLr: 'jm',
    bbOut: 'yq',
    completedAt: new Date(
      new Date('03/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '47da234e-39d0-4000-bc1c-25521c09746c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '664',
    name: 'Daphnée',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments: null,
    tagNr: '0582',
    location: 'LR',
    bbDown: 'cg',
    bbLr: 'vn',
    bbOut: 'ae',
    completedAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
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
    luggageId: '0ab9a551-3a63-42ae-b7ff-856f8b667222',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '901',
    name: 'Bérangère',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    comments: 'Etiam faucibus cursus urna.',
    tagNr: '9979',
    location: 'LR',
    bbDown: 'id',
    bbLr: 'df',
    bbOut: 'zv',
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b6652003-c918-4a55-9ecf-a84737a66497',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '205',
    name: 'Eloïse',
    arrivalTime: null,
    bags: '5+8',
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    tagNr: '8052',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ep',
    bbOut: 'rm',
    completedAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
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
    luggageId: '0ca0824a-3b54-4c6c-a911-2cc1f1825f79',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '180',
    name: 'Noëlla',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: 'Nunc nisl.',
    tagNr: '0132',
    location: 'LR',
    bbDown: 'jl',
    bbLr: 'sj',
    bbOut: 'nd',
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4e96e57c-33da-4c6d-baa8-be3d8f63661a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '297',
    name: 'Sélène',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: null,
    tagNr: '0612',
    location: 'LR1',
    bbDown: 'jo',
    bbLr: 'hd',
    bbOut: 'gz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '83b6cd65-3fd8-4767-b165-9037f835282c',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '574',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments: 'Duis aliquam convallis nunc.',
    tagNr: '3082',
    location: 'LR',
    bbDown: null,
    bbLr: 'hr',
    bbOut: 'kp',
    completedAt: new Date(
      new Date('03/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/03/2023').setHours(
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
    luggageId: '2df1ba57-113b-4ac6-9cf1-415f435e8a63',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '338',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '0918',
    location: 'LR',
    bbDown: null,
    bbLr: 'xx',
    bbOut: 'iq',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
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
    luggageId: '364c5f13-2c06-4906-a488-fe1582eab236',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '124',
    name: 'Maëly',
    arrivalTime: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+0',
    comments: 'Nulla tempus.',
    tagNr: '1437',
    location: 'LR1',
    bbDown: 'eo',
    bbLr: 'uw',
    bbOut: 'yl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2f366e62-21d4-4aa8-ab12-93aed81943b9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '487',
    name: 'Andrée',
    arrivalTime: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments: 'Praesent blandit.',
    tagNr: '7673',
    location: 'LR1',
    bbDown: 'ch',
    bbLr: 'eb',
    bbOut: 'bw',
    completedAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/08/2022').setHours(
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
    luggageId: '7eb042dc-b2f2-4814-8232-241338eeba74',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '213',
    name: 'Cinéma',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+1',
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    tagNr: '3121',
    location: 'LR',
    bbDown: 'zr',
    bbLr: 'cp',
    bbOut: 'df',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a5245e04-7929-4c0e-a055-7eebbc1e8894',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '263',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+9',
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    tagNr: '4194',
    location: 'LR',
    bbDown: 'al',
    bbLr: 'rk',
    bbOut: 'dm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/09/2023').setHours(
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
    luggageId: '4273a611-bcfa-41f4-9c1e-2a94ba2663c1',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '207',
    name: 'Garçon',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: 'Sed accumsan felis.',
    tagNr: '6127',
    location: 'LR1',
    bbDown: null,
    bbLr: 'un',
    bbOut: 'zv',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'da51fc94-dc9e-4940-b81a-9f2c613432ca',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '643',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '0162',
    location: 'LR',
    bbDown: 'qu',
    bbLr: 'rl',
    bbOut: 'hf',
    completedAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/08/2023').setHours(
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
    luggageId: '69e2a833-bd66-4401-8065-8bc7aacf52b8',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '616',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: 'Maecenas tincidunt lacus at velit.',
    tagNr: '0503',
    location: 'LR',
    bbDown: 'ep',
    bbLr: 'bm',
    bbOut: 'nw',
    completedAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '76a6f29b-5e7f-44a0-bf39-96ef210061eb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '113',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: null,
    tagNr: '5551',
    location: 'LR',
    bbDown: 'jt',
    bbLr: 'or',
    bbOut: 'ue',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
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
    luggageId: 'a207c52a-d968-42b7-ad7a-0c50616e464b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '287',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+1',
    comments: null,
    tagNr: '2726',
    location: 'LR1',
    bbDown: 'bg',
    bbLr: 'gl',
    bbOut: 'co',
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '197ce6d1-38dc-402b-9a2e-e0bcbf846a25',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '345',
    name: 'Océanne',
    arrivalTime: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '2661',
    location: 'LR',
    bbDown: 'bn',
    bbLr: 'nj',
    bbOut: 'vv',
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/16/2022').setHours(
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
    luggageId: '128dcb53-fff7-4a8f-8d83-93a0ff9af590',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '831',
    name: 'Östen',
    arrivalTime: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    comments: 'Nullam porttitor lacus at turpis.',
    tagNr: '8117',
    location: 'LR1',
    bbDown: null,
    bbLr: 'tg',
    bbOut: 'jv',
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ba5a3638-533c-4bbb-8418-f4635841a05c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '848',
    name: 'Lorène',
    arrivalTime: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments: 'Praesent lectus.',
    tagNr: '3208',
    location: 'LR1',
    bbDown: 'al',
    bbLr: 'em',
    bbOut: 'vr',
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/13/2022').setHours(
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
    luggageId: '025aafed-b060-4f32-9938-7844deaae4ac',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '514',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+8',
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    tagNr: '4699',
    location: 'LR',
    bbDown: null,
    bbLr: 'zy',
    bbOut: 'oy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5817ca26-e8c3-49f8-af48-ab5e1af73466',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '370',
    name: 'Cléopatre',
    arrivalTime: null,
    bags: '7+3',
    comments: null,
    tagNr: '2250',
    location: 'LR',
    bbDown: null,
    bbLr: 'sd',
    bbOut: 'yo',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a286adb1-526b-4e70-8711-32cdf20eee65',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '568',
    name: 'Mélanie',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments: 'Vestibulum rutrum rutrum neque.',
    tagNr: '5069',
    location: 'LR',
    bbDown: 'eb',
    bbLr: 'lz',
    bbOut: 'im',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/13/2023').setHours(
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
    luggageId: 'b54c3b4f-1190-488b-b039-cb714bd8ee06',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '912',
    name: 'Maëlys',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: 'Maecenas pulvinar lobortis est.',
    tagNr: '3706',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xg',
    bbOut: 'wq',
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/25/2022').setHours(
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
    luggageId: '136d4031-cb28-4753-8ea3-6a8dc886f9f6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '798',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+9',
    comments: 'Etiam pretium iaculis justo.',
    tagNr: '2248',
    location: 'LR',
    bbDown: 'is',
    bbLr: 'hv',
    bbOut: 'zl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'aca59dac-8f3e-4d41-902f-0b41a5691aef',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '691',
    name: 'Méryl',
    arrivalTime: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: null,
    tagNr: '1100',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xi',
    bbOut: 'qt',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/17/2023').setHours(
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
    luggageId: '02ac96b6-10de-4042-9333-efb010f38c74',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '348',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments: 'Quisque porta volutpat erat.',
    tagNr: '9380',
    location: 'LR1',
    bbDown: null,
    bbLr: 'xi',
    bbOut: 'jm',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
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
    luggageId: '3558c9b5-1b9b-44bc-ba7c-f87cb5ad12d2',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '437',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '9642',
    location: 'LR',
    bbDown: null,
    bbLr: 'oz',
    bbOut: 'ob',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2741fa49-d432-46b4-8b08-b72490b59a1f',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '510',
    name: 'Audréanne',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+5',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '5814',
    location: 'LR',
    bbDown: 'rg',
    bbLr: 'cv',
    bbOut: 'ub',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e1c5e98c-087e-4d6d-8770-c927903849fe',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '260',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    tagNr: '7329',
    location: 'LR1',
    bbDown: 'mi',
    bbLr: 'tn',
    bbOut: 'bi',
    completedAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/22/2023').setHours(
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
    luggageId: '08ba89e4-baa3-4352-b5a4-1313adc12192',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '514',
    name: 'Clélia',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: 'Phasellus sit amet erat.',
    tagNr: '9002',
    location: 'LR1',
    bbDown: null,
    bbLr: 'wq',
    bbOut: 'gf',
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2b181f88-c1ee-433b-91ee-8990c3620c99',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '523',
    name: 'Maëlle',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: null,
    tagNr: '3164',
    location: 'LR1',
    bbDown: 'yv',
    bbLr: 'vm',
    bbOut: 'dv',
    completedAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b5c21a39-8bdc-4210-9a5d-e7b63b9c6e18',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '617',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    tagNr: '7417',
    location: 'LR1',
    bbDown: null,
    bbLr: 'oj',
    bbOut: 'ym',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4e34ba94-148a-4988-a8bb-e6993a5e5f0e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '493',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: 'Nullam varius.',
    tagNr: '4094',
    location: 'LR',
    bbDown: null,
    bbLr: 'rv',
    bbOut: 'xk',
    completedAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f82c5cf2-f1a9-4b8b-a1a9-10d2575a9c27',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '324',
    name: 'Aurélie',
    arrivalTime: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '6394',
    location: 'LR1',
    bbDown: null,
    bbLr: 'dq',
    bbOut: 'rc',
    completedAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/29/2023').setHours(
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
    luggageId: '60aa4418-cc72-4d8a-813d-9a7822610b17',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '407',
    name: 'Almérinda',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+6',
    comments: null,
    tagNr: '3655',
    location: 'LR',
    bbDown: 'po',
    bbLr: 'ca',
    bbOut: 'np',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '560a5db4-fadc-4776-83d9-4d4e6ed48710',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '474',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+6',
    comments: null,
    tagNr: '7681',
    location: 'LR',
    bbDown: 'lj',
    bbLr: 'it',
    bbOut: 'fa',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '31bc74b1-40d4-44ea-b86d-115f92aa9486',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '698',
    name: 'Réjane',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+1',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tagNr: '1200',
    location: 'LR',
    bbDown: 'qy',
    bbLr: 'bl',
    bbOut: 'ur',
    completedAt: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '94b3e05a-2526-46a6-95d6-065a65f932f5',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '983',
    name: 'Camélia',
    arrivalTime: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    comments: 'Nulla facilisi.',
    tagNr: '9543',
    location: 'LR1',
    bbDown: 'fv',
    bbLr: 'jw',
    bbOut: 'xs',
    completedAt: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/09/2023').setHours(
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
    luggageId: '71133c7e-33ee-4cdb-99aa-57afdc419704',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '939',
    name: 'Örjan',
    arrivalTime: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    comments: 'Pellentesque ultrices mattis odio.',
    tagNr: '7515',
    location: 'LR',
    bbDown: 'bk',
    bbLr: 'di',
    bbOut: 'hy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6105a7f0-4095-4539-af63-8f35d6f9fc09',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '962',
    name: 'Néhémie',
    arrivalTime: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: 'Etiam justo.',
    tagNr: '5662',
    location: 'LR1',
    bbDown: 'sx',
    bbLr: 'qi',
    bbOut: 'ng',
    completedAt: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '60f826b1-03b3-4d40-883c-d9651c738a39',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '677',
    name: 'Stéphanie',
    arrivalTime: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: 'Phasellus in felis.',
    tagNr: '9589',
    location: 'LR1',
    bbDown: 'gv',
    bbLr: 'iu',
    bbOut: 'yv',
    completedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/27/2022').setHours(
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
    luggageId: '2b09281a-0be4-40dc-85aa-867547b9f6bc',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '045',
    name: 'Mégane',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: 'Aenean sit amet justo.',
    tagNr: '8837',
    location: 'LR',
    bbDown: null,
    bbLr: 'ey',
    bbOut: 'sa',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1314f344-9ea0-4e8d-a864-6d004cc2ebe3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '987',
    name: 'Åke',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: 'Ut at dolor quis odio consequat varius.',
    tagNr: '1986',
    location: 'LR',
    bbDown: 'tj',
    bbLr: 'mb',
    bbOut: 'cv',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '09534108-b2c0-4f3f-aac9-5070aa1e3069',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '156',
    name: 'Estée',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: null,
    tagNr: '7549',
    location: 'LR',
    bbDown: null,
    bbLr: 'iq',
    bbOut: 'si',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a92b9651-b6e3-4c67-868e-723c6b2efc94',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '106',
    name: 'Lèi',
    arrivalTime: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    comments: 'Nulla facilisi.',
    tagNr: '4239',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ot',
    bbOut: 'kv',
    completedAt: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6b0665f3-075e-40d5-b9d1-f33be5ebf036',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '311',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: 'Donec ut dolor.',
    tagNr: '9466',
    location: 'LR1',
    bbDown: 'zy',
    bbLr: 'zn',
    bbOut: 'zz',
    completedAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd73605e8-1d7d-470d-8099-dfb4af20e051',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '721',
    name: 'Cloé',
    arrivalTime: null,
    bags: '5+8',
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    tagNr: '7769',
    location: 'LR',
    bbDown: null,
    bbLr: 'nx',
    bbOut: 'pb',
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '09415966-64e1-423b-a29b-e4c37c0fa29c',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '769',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    comments: 'Vivamus tortor.',
    tagNr: '0969',
    location: 'LR',
    bbDown: 'az',
    bbLr: 'ah',
    bbOut: 'pk',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd82d3946-acaa-4e1e-bef0-c38026f857b7',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '144',
    name: 'Nadège',
    arrivalTime: null,
    bags: '5+6',
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    tagNr: '7967',
    location: 'LR',
    bbDown: 'cv',
    bbLr: 'hp',
    bbOut: 'pv',
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '478527a1-6ef7-4d81-9aa8-9ec28214c798',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '767',
    name: 'Görel',
    arrivalTime: null,
    bags: '6+9',
    comments: 'Mauris lacinia sapien quis libero.',
    tagNr: '0201',
    location: 'LR1',
    bbDown: 'iz',
    bbLr: 'ra',
    bbOut: 'mi',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/12/2022').setHours(
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
    luggageId: 'ca47eb82-20a4-48a6-b695-00639526a228',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '811',
    name: 'Ráo',
    arrivalTime: null,
    bags: '2+8',
    comments: null,
    tagNr: '6999',
    location: 'LR1',
    bbDown: 'ju',
    bbLr: 'rb',
    bbOut: 'lo',
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '86418cf7-3f2c-422d-97b2-c168a104206b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '687',
    name: 'Geneviève',
    arrivalTime: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    comments: null,
    tagNr: '3099',
    location: 'LR',
    bbDown: 'yq',
    bbLr: 'tf',
    bbOut: 'vv',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '45116a78-b836-4fe4-b781-c514398e0d8a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '851',
    name: 'Clémence',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: null,
    tagNr: '9727',
    location: 'LR1',
    bbDown: 'qf',
    bbLr: 'xj',
    bbOut: 'zy',
    completedAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd99bb08a-fff0-4f80-95de-fc202560f0de',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '534',
    name: 'Edmée',
    arrivalTime: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    comments: 'Duis mattis egestas metus.',
    tagNr: '2452',
    location: 'LR',
    bbDown: 'tp',
    bbLr: 'zn',
    bbOut: 'hi',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dc86e14f-2c33-4006-bfc9-1146a126c55c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '983',
    name: 'Mélys',
    arrivalTime: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+0',
    comments: 'Nulla facilisi.',
    tagNr: '2447',
    location: 'LR',
    bbDown: 'cm',
    bbLr: 'zq',
    bbOut: 'pf',
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '06e76adc-b32e-4fde-8097-1711d5162cc5',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '403',
    name: 'Magdalène',
    arrivalTime: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+9',
    comments: 'Suspendisse potenti.',
    tagNr: '4647',
    location: 'LR1',
    bbDown: 'zg',
    bbLr: 'eg',
    bbOut: 'pl',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '98e58a19-6436-4057-b232-93f588a1ee49',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '863',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+0',
    comments: 'Suspendisse potenti.',
    tagNr: '2305',
    location: 'LR',
    bbDown: 'll',
    bbLr: 'lb',
    bbOut: 'dw',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
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
    luggageId: '22beb1ac-2b5d-4b05-86ee-6a8031da171e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '310',
    name: 'Judicaël',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: 'Sed sagittis.',
    tagNr: '8523',
    location: 'LR',
    bbDown: null,
    bbLr: 'bk',
    bbOut: 'es',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '915992bd-3b48-4e56-b5f2-312c17085c9a',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '735',
    name: 'Kallisté',
    arrivalTime: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: null,
    tagNr: '9171',
    location: 'LR1',
    bbDown: null,
    bbLr: 'lz',
    bbOut: 'qc',
    completedAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/03/2023').setHours(
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
    luggageId: '318b1267-c5f3-4cec-863e-0a31a99dfd56',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '590',
    name: 'Inès',
    arrivalTime: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: 'Pellentesque at nulla.',
    tagNr: '1798',
    location: 'LR1',
    bbDown: 'rm',
    bbLr: 'ei',
    bbOut: 'lq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '947ca94b-6d9d-42a1-b1d4-a419c6daca54',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '521',
    name: 'Marie-ève',
    arrivalTime: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    comments: 'Aenean fermentum.',
    tagNr: '1748',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ph',
    bbOut: 'cr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '9c7e7e21-6445-4ea6-9b3e-be38a54de198',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '797',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: 'Nullam varius.',
    tagNr: '1480',
    location: 'LR',
    bbDown: 'lo',
    bbLr: 'ha',
    bbOut: 'iy',
    completedAt: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/01/2023').setHours(
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
    luggageId: '8779922c-3a6f-4bfa-95ad-d5f96496e6e1',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '909',
    name: 'Béatrice',
    arrivalTime: null,
    bags: '1+1',
    comments: null,
    tagNr: '5637',
    location: 'LR1',
    bbDown: 'dm',
    bbLr: 'xm',
    bbOut: 'al',
    completedAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'dc1a5b55-c9a8-43de-adb4-98e77af8dfbe',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '615',
    name: 'Rébecca',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: null,
    tagNr: '3687',
    location: 'LR1',
    bbDown: null,
    bbLr: 'aw',
    bbOut: 'vi',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
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
    luggageId: '71d5b379-b813-4b65-b2f1-e3f010f9e9fa',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '923',
    name: 'Pénélope',
    arrivalTime: null,
    bags: '2+3',
    comments: null,
    tagNr: '8620',
    location: 'LR1',
    bbDown: 'iv',
    bbLr: 'ix',
    bbOut: 'eq',
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/29/2022').setHours(
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
    luggageId: 'd5760c15-b392-497c-a36f-d7f2438f57be',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '327',
    name: 'Anaé',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+3',
    comments: null,
    tagNr: '1600',
    location: 'LR',
    bbDown: 'dk',
    bbLr: 'py',
    bbOut: 'qf',
    completedAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c809b76c-1548-4d09-9756-fdbab975e0f3',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '600',
    name: 'Cléa',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    comments: null,
    tagNr: '8084',
    location: 'LR1',
    bbDown: 'ly',
    bbLr: 'mm',
    bbOut: 'zx',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '603f5431-cc49-440f-ba2f-4ac80a5da53b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '887',
    name: 'Annotée',
    arrivalTime: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: null,
    tagNr: '1984',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ol',
    bbOut: 'mb',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '13d1875e-218d-4c7e-9dd3-c7c0c88709a5',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '475',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments: 'Phasellus in felis.',
    tagNr: '7078',
    location: 'LR',
    bbDown: 'pi',
    bbLr: 'fv',
    bbOut: 'hr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
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
    luggageId: '38399d02-1a42-476f-abd1-44a9fb2fc943',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '179',
    name: 'Vénus',
    arrivalTime: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+7',
    comments: null,
    tagNr: '3390',
    location: 'LR1',
    bbDown: 'xn',
    bbLr: 'lo',
    bbOut: 'jc',
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '32ca9cca-a05e-4ab9-82e6-5a6ed5ed5dfd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '002',
    name: 'Eléonore',
    arrivalTime: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: null,
    tagNr: '1996',
    location: 'LR1',
    bbDown: 'to',
    bbLr: 'ha',
    bbOut: 'hx',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ff4afcfd-a9ae-4ec9-b4e1-52362097cf04',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '447',
    name: 'Françoise',
    arrivalTime: null,
    bags: '8+6',
    comments: null,
    tagNr: '5166',
    location: 'LR',
    bbDown: 'vw',
    bbLr: 're',
    bbOut: 'oe',
    completedAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '960916a5-e051-47af-b578-ef18dd0edbf2',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '838',
    name: 'Ruì',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Sed sagittis.',
    tagNr: '6589',
    location: 'LR1',
    bbDown: 'ty',
    bbLr: 'sz',
    bbOut: 'jz',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5a3b407f-93f5-4bc5-aacf-cd86093cf30f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '023',
    name: 'Liè',
    arrivalTime: new Date(
      new Date('11/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: null,
    tagNr: '4440',
    location: 'LR',
    bbDown: 'jd',
    bbLr: 'ui',
    bbOut: 'sj',
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2d6e1aee-976f-4a8b-9c3c-79959283556c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '434',
    name: 'Dù',
    arrivalTime: null,
    bags: '1+3',
    comments: 'Duis mattis egestas metus.',
    tagNr: '6464',
    location: 'LR',
    bbDown: 'rn',
    bbLr: 'vu',
    bbOut: 'wx',
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8d7c875c-d10b-479b-ae90-e28e1b706fde',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '174',
    name: 'Gisèle',
    arrivalTime: new Date(
      new Date('11/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+4',
    comments: 'Praesent blandit.',
    tagNr: '0506',
    location: 'LR',
    bbDown: 'gl',
    bbLr: 'tz',
    bbOut: 'hl',
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd83f7268-06e8-42eb-963e-51375e8dbd9a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '902',
    name: 'Léane',
    arrivalTime: null,
    bags: '6+5',
    comments: 'Aliquam non mauris.',
    tagNr: '8673',
    location: 'LR',
    bbDown: 'ci',
    bbLr: 'fm',
    bbOut: 'cm',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3bb4c371-5247-4e7a-8f6b-c8da7408d0d9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '513',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+8',
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    tagNr: '0130',
    location: 'LR1',
    bbDown: 'dh',
    bbLr: 'pu',
    bbOut: 'vs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ef41a83b-754f-4dd1-b2ea-4c34efdb15ca',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '626',
    name: 'Adèle',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: null,
    tagNr: '7476',
    location: 'LR',
    bbDown: 'jq',
    bbLr: 'nr',
    bbOut: 'en',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '211ca73c-1ea6-4d1a-9f6e-2b9fcff18b22',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '928',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: 'Vivamus tortor.',
    tagNr: '7970',
    location: 'LR',
    bbDown: 'ms',
    bbLr: 'xj',
    bbOut: 'nj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/01/2023').setHours(
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
    luggageId: 'b08eca8a-0198-46a9-80fb-3c37d65510c1',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '116',
    name: 'Görel',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: 'Sed accumsan felis.',
    tagNr: '8660',
    location: 'LR',
    bbDown: 'nw',
    bbLr: 'qd',
    bbOut: 'ix',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '88d4c100-340f-400b-a1d0-7fa9cf32fc16',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '964',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+8',
    comments: null,
    tagNr: '1754',
    location: 'LR',
    bbDown: 'hl',
    bbLr: 'oq',
    bbOut: 'bk',
    completedAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fd201cd3-f790-438a-a527-c7d2482ba7be',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '690',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    tagNr: '0594',
    location: 'LR',
    bbDown: 'eb',
    bbLr: 'kq',
    bbOut: 'fx',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '1b359ae9-6dd1-4c5a-9b4c-36af134cacbc',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '523',
    name: 'Hélèna',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: null,
    tagNr: '7750',
    location: 'LR',
    bbDown: null,
    bbLr: 'qn',
    bbOut: 'jb',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ea76b658-0e67-48a2-89f3-0be21bfb9477',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '320',
    name: 'Maëlann',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+2',
    comments: null,
    tagNr: '8909',
    location: 'LR1',
    bbDown: 'xq',
    bbLr: 'gx',
    bbOut: 'fe',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '15081a27-99a9-4a20-aa4e-7f6c3d2cfaf4',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '793',
    name: 'Tú',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    comments: null,
    tagNr: '7315',
    location: 'LR',
    bbDown: 'gw',
    bbLr: 'az',
    bbOut: 'zr',
    completedAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '3c886c91-b719-4997-be74-4f815e399f89',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '443',
    name: 'Zhì',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    comments: null,
    tagNr: '6224',
    location: 'LR',
    bbDown: null,
    bbLr: 'ga',
    bbOut: 'kg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ec98185b-f25d-47c5-9beb-7b96304707cf',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '608',
    name: 'Aí',
    arrivalTime: null,
    bags: '9+1',
    comments: null,
    tagNr: '9996',
    location: 'LR',
    bbDown: 'pi',
    bbLr: 'wb',
    bbOut: 'ku',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
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
    luggageId: 'efc0abf8-6d71-4475-8bd5-7a664c2286f2',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '176',
    name: 'Bérangère',
    arrivalTime: null,
    bags: '9+4',
    comments: 'Nulla justo.',
    tagNr: '7288',
    location: 'LR',
    bbDown: 'js',
    bbLr: 'mh',
    bbOut: 'tj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6815c37f-c2bb-404f-86ca-4fdacce39495',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '417',
    name: 'Athéna',
    arrivalTime: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: null,
    tagNr: '1200',
    location: 'LR1',
    bbDown: 'cj',
    bbLr: 'yv',
    bbOut: 'so',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f4b6db8e-2d59-4656-b6f8-7980d54b4d09',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '044',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    comments: 'Praesent blandit lacinia erat.',
    tagNr: '9001',
    location: 'LR',
    bbDown: 'fd',
    bbLr: 'la',
    bbOut: 'xx',
    completedAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0f598926-bba6-43e6-9474-c1bfe9d5cc6c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '159',
    name: 'Lorène',
    arrivalTime: null,
    bags: '1+7',
    comments: 'Nullam varius.',
    tagNr: '4747',
    location: 'LR1',
    bbDown: null,
    bbLr: 'pk',
    bbOut: 'je',
    completedAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/21/2023').setHours(
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
    luggageId: '62b50c5e-b896-4fc0-be8b-33629eb020e6',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '592',
    name: 'Märta',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+0',
    comments: null,
    tagNr: '5564',
    location: 'LR1',
    bbDown: 'ld',
    bbLr: 'eb',
    bbOut: 'kk',
    completedAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
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
    luggageId: 'dd1d2fbb-cd9c-469a-b244-72777617a8b6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '168',
    name: 'Cécile',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments: 'Fusce consequat.',
    tagNr: '3085',
    location: 'LR1',
    bbDown: 'rf',
    bbLr: 'tl',
    bbOut: 'fb',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7c198cdc-ec7f-4635-ac49-792643b5a6f8',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '086',
    name: 'Esbjörn',
    arrivalTime: new Date(
      new Date('01/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: null,
    tagNr: '2128',
    location: 'LR1',
    bbDown: 'ut',
    bbLr: 'np',
    bbOut: 'jg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/03/2023').setHours(
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
    luggageId: '594746da-32d2-4d05-a1d3-5fae89eda14b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '596',
    name: 'Fèi',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    comments: 'Vestibulum rutrum rutrum neque.',
    tagNr: '7384',
    location: 'LR',
    bbDown: null,
    bbLr: 'pd',
    bbOut: 'ha',
    completedAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
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
    luggageId: 'f025f461-f222-4496-8f77-04a44445cc7b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '657',
    name: 'Gérald',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    tagNr: '9455',
    location: 'LR1',
    bbDown: 'gl',
    bbLr: 'kq',
    bbOut: 'ub',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '63341609-0cf7-411b-8fa6-2a953cc290e7',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '175',
    name: 'Maëly',
    arrivalTime: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments: 'Curabitur gravida nisi at nibh.',
    tagNr: '9179',
    location: 'LR',
    bbDown: 'yd',
    bbLr: 'sx',
    bbOut: 'gh',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8c58e5c6-6fa4-4f93-bb03-1ae09c67b6f5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '566',
    name: 'Cloé',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: null,
    tagNr: '3793',
    location: 'LR1',
    bbDown: 'hi',
    bbLr: 'og',
    bbOut: 'sv',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e3b3e69b-0953-4ce2-add6-c466ac88691a',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '723',
    name: 'Ruì',
    arrivalTime: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: null,
    tagNr: '2578',
    location: 'LR1',
    bbDown: 'ci',
    bbLr: 'mf',
    bbOut: 'sz',
    completedAt: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a5678730-1520-4f4a-94d0-1c3cff219d64',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '482',
    name: 'Célia',
    arrivalTime: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+3',
    comments: null,
    tagNr: '2986',
    location: 'LR',
    bbDown: 'lf',
    bbLr: 'fw',
    bbOut: 'sd',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4087928c-2b02-4f4b-964f-46009dbd1a3c',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '955',
    name: 'Simplifiés',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '4905',
    location: 'LR1',
    bbDown: 'vn',
    bbLr: 'oj',
    bbOut: 'jk',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '75774516-3c1c-4ed0-a78b-40d717daccd6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '767',
    name: 'Tán',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: null,
    tagNr: '6210',
    location: 'LR1',
    bbDown: 'yb',
    bbLr: 'ze',
    bbOut: 'qa',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '77831222-3641-48b9-9580-524f445012d3',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '031',
    name: 'Françoise',
    arrivalTime: null,
    bags: '8+8',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '3139',
    location: 'LR',
    bbDown: 'gv',
    bbLr: 'rp',
    bbOut: 'bx',
    completedAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '890e489a-0605-4b90-9246-9413ff7ed4b7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '960',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: null,
    tagNr: '3592',
    location: 'LR1',
    bbDown: 'hf',
    bbLr: 'hc',
    bbOut: 'rd',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/24/2023').setHours(
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
    luggageId: '530f9cc0-b251-4b6f-8f86-3e8ce3ad32ed',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '577',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: 'Ut tellus.',
    tagNr: '5917',
    location: 'LR1',
    bbDown: 'td',
    bbLr: 'vx',
    bbOut: 'sj',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd9ee3d25-0e9d-45e2-9ec9-633807eda672',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '132',
    name: 'Zhì',
    arrivalTime: null,
    bags: '1+7',
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    tagNr: '3513',
    location: 'LR1',
    bbDown: 'ry',
    bbLr: 'ma',
    bbOut: 'jl',
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/26/2022').setHours(
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
    luggageId: '3fe2eeb5-a8c4-4fad-ae4c-9b582f8768d4',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '523',
    name: 'Örjan',
    arrivalTime: null,
    bags: '1+2',
    comments: null,
    tagNr: '1267',
    location: 'LR',
    bbDown: 'ff',
    bbLr: 'gx',
    bbOut: 'xj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7edd4f35-6bcb-46c5-81cf-398309f116da',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '507',
    name: 'Kuí',
    arrivalTime: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    comments: 'Duis ac nibh.',
    tagNr: '7327',
    location: 'LR1',
    bbDown: 'hc',
    bbLr: 'fe',
    bbOut: 'wg',
    completedAt: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '244833a6-174f-42d8-aaf9-a16f7c55f74b',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '976',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+7',
    comments: null,
    tagNr: '4165',
    location: 'LR',
    bbDown: null,
    bbLr: 'dk',
    bbOut: 'ao',
    completedAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/25/2023').setHours(
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
    luggageId: '1bd57ce2-a615-418a-8bef-40416233b8ca',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '515',
    name: 'Aí',
    arrivalTime: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+4',
    comments: 'Suspendisse ornare consequat lectus.',
    tagNr: '3481',
    location: 'LR1',
    bbDown: 'jl',
    bbLr: 'fy',
    bbOut: 'jn',
    completedAt: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/31/2022').setHours(
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
    luggageId: 'ca592e98-b460-4aff-8435-038f59377d6a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '989',
    name: 'Anaé',
    arrivalTime: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+1',
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    tagNr: '4518',
    location: 'LR',
    bbDown: 'kc',
    bbLr: 'pv',
    bbOut: 'em',
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '055b5886-4c53-42e7-b5a1-01287534591f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '548',
    name: 'Nadège',
    arrivalTime: new Date(
      new Date('01/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+1',
    comments: 'In congue.',
    tagNr: '8683',
    location: 'LR',
    bbDown: null,
    bbLr: 'nq',
    bbOut: 'mp',
    completedAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5f37157e-8353-4fa7-8c33-faa65ccd6d0a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '161',
    name: 'Bécassine',
    arrivalTime: new Date(
      new Date('01/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    comments: null,
    tagNr: '7649',
    location: 'LR1',
    bbDown: null,
    bbLr: 'fl',
    bbOut: 'iy',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c288ffb6-faba-46d8-8e96-8e6f924afb2b',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '695',
    name: 'Miléna',
    arrivalTime: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments: null,
    tagNr: '8193',
    location: 'LR',
    bbDown: 'au',
    bbLr: 'sm',
    bbOut: 'ak',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4a1b5a4d-5b4b-4995-b314-da1ee98a9a6f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '440',
    name: 'Cécile',
    arrivalTime: null,
    bags: '7+0',
    comments: null,
    tagNr: '8901',
    location: 'LR',
    bbDown: null,
    bbLr: 'ov',
    bbOut: 'hn',
    completedAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a2a32499-1d91-4c41-ad2b-a4ce76e1f1d0',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '354',
    name: 'Athéna',
    arrivalTime: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    comments: 'Duis ac nibh.',
    tagNr: '7768',
    location: 'LR',
    bbDown: 'ql',
    bbLr: 'mo',
    bbOut: 'xe',
    completedAt: new Date(
      new Date('01/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '417802c4-8e4f-496b-9c06-58632c6e6959',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '236',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Ut tellus.',
    tagNr: '7705',
    location: 'LR',
    bbDown: null,
    bbLr: 'xu',
    bbOut: 'qj',
    completedAt: new Date(
      new Date('01/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/04/2023').setHours(
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
    luggageId: '03fa36e4-1717-4ae1-8db0-17fc55a202d7',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '276',
    name: 'Lucrèce',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    comments: 'Aenean fermentum.',
    tagNr: '8809',
    location: 'LR1',
    bbDown: 'hn',
    bbLr: 'je',
    bbOut: 'uv',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a3a92fc1-c956-4a38-af9c-7540c2309023',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '171',
    name: 'Loïca',
    arrivalTime: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+4',
    comments: null,
    tagNr: '4167',
    location: 'LR',
    bbDown: 'ym',
    bbLr: 'wh',
    bbOut: 'hg',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/14/2023').setHours(
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
    luggageId: '1ef4f691-14e1-423a-bfcb-2e214ff325fc',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '494',
    name: 'Léana',
    arrivalTime: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments: null,
    tagNr: '7235',
    location: 'LR',
    bbDown: 'yn',
    bbLr: 'op',
    bbOut: 'zf',
    completedAt: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c97e697f-3f77-4178-b085-7f927a2fb7b6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '987',
    name: 'Maïlis',
    arrivalTime: new Date(
      new Date('01/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+0',
    comments: 'Praesent id massa id nisl venenatis lacinia.',
    tagNr: '0800',
    location: 'LR',
    bbDown: 'of',
    bbLr: 'bd',
    bbOut: 'yx',
    completedAt: new Date(
      new Date('01/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '900e0cf6-7509-4966-906f-10245624ed18',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '671',
    name: 'Maïté',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: 'Aenean sit amet justo.',
    tagNr: '8574',
    location: 'LR',
    bbDown: 'yt',
    bbLr: 'hc',
    bbOut: 'gl',
    completedAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b9f20007-de13-48c9-86f7-08fd2a0417bf',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '942',
    name: 'Geneviève',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+9',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    tagNr: '9749',
    location: 'LR',
    bbDown: null,
    bbLr: 'ea',
    bbOut: 'sq',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '83fcd1b9-6680-4d9b-b863-d810bcfd5e18',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '591',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+5',
    comments: null,
    tagNr: '7663',
    location: 'LR',
    bbDown: null,
    bbLr: 'vc',
    bbOut: 'am',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd786f03b-1050-4bcf-a661-63a64a486c5d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '692',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+9',
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    tagNr: '7800',
    location: 'LR1',
    bbDown: 'xt',
    bbLr: 'hz',
    bbOut: 'ec',
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2549e76d-be2c-43de-84c7-8828cc7209ac',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '063',
    name: 'Mélia',
    arrivalTime: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments: null,
    tagNr: '7612',
    location: 'LR1',
    bbDown: 'uh',
    bbLr: 'gr',
    bbOut: 'wc',
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a49a65ec-0d24-47c6-89bb-e7e1b087f9d3',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '070',
    name: 'Yú',
    arrivalTime: null,
    bags: '0+2',
    comments: null,
    tagNr: '9699',
    location: 'LR1',
    bbDown: null,
    bbLr: 'io',
    bbOut: 'bx',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'caec43bb-cebf-450f-bb94-6e2f954b3965',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '580',
    name: 'Maéna',
    arrivalTime: null,
    bags: '8+7',
    comments: null,
    tagNr: '1740',
    location: 'LR1',
    bbDown: 'ad',
    bbLr: 'ar',
    bbOut: 'dw',
    completedAt: new Date(
      new Date('01/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b264aba7-dfb8-419c-aa62-b376668b70f9',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '232',
    name: 'Marylène',
    arrivalTime: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+3',
    comments: null,
    tagNr: '9501',
    location: 'LR1',
    bbDown: null,
    bbLr: 'rq',
    bbOut: 'ok',
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/12/2022').setHours(
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
    luggageId: '7f0dcbb2-0123-46e0-80c3-b9507ede6b7f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '122',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: 'Duis ac nibh.',
    tagNr: '4328',
    location: 'LR1',
    bbDown: 'xy',
    bbLr: 'dn',
    bbOut: 'tn',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
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
    luggageId: '12425bc3-d48c-4f77-99d5-29d8fe4001a0',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '446',
    name: 'Naéva',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+8',
    comments: 'Etiam pretium iaculis justo.',
    tagNr: '6654',
    location: 'LR1',
    bbDown: 'rn',
    bbLr: 'ko',
    bbOut: 'qv',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'fc98ca98-81b0-4b7a-9488-7ae4038b341f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '035',
    name: 'Pélagie',
    arrivalTime: null,
    bags: '4+1',
    comments: null,
    tagNr: '8462',
    location: 'LR',
    bbDown: null,
    bbLr: 'yw',
    bbOut: 'ke',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b46ddf7a-8b61-4ef1-9a6c-11d6ea423b3a',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '807',
    name: 'Eloïse',
    arrivalTime: null,
    bags: '0+8',
    comments: 'Donec dapibus.',
    tagNr: '4009',
    location: 'LR',
    bbDown: 'dm',
    bbLr: 'je',
    bbOut: 'xp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/02/2023').setHours(
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
    luggageId: '4d88fe54-2387-4a3c-a192-554811901602',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '585',
    name: 'Maëlla',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    comments: 'Nulla nisl.',
    tagNr: '9233',
    location: 'LR1',
    bbDown: 'va',
    bbLr: 'jw',
    bbOut: 'nt',
    completedAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '164ac5c7-4376-416f-a943-77780b00826f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '446',
    name: 'Rachèle',
    arrivalTime: new Date(
      new Date('01/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+6',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '2381',
    location: 'LR1',
    bbDown: 'yq',
    bbLr: 'sx',
    bbOut: 'or',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8e657759-22ef-45a6-8181-affa4b719f19',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '540',
    name: 'Léonie',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+6',
    comments: null,
    tagNr: '2927',
    location: 'LR',
    bbDown: 'xr',
    bbLr: 'jh',
    bbOut: 'fh',
    completedAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e94746ab-867e-468d-8962-34c934808f17',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '388',
    name: 'Joséphine',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: null,
    tagNr: '2365',
    location: 'LR1',
    bbDown: 'vo',
    bbLr: 'vl',
    bbOut: 'xd',
    completedAt: null,
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd730fb31-b9e5-4b2e-8888-0e121c39364f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '871',
    name: 'Danièle',
    arrivalTime: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: null,
    tagNr: '5952',
    location: 'LR',
    bbDown: 'co',
    bbLr: 'le',
    bbOut: 'hr',
    completedAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/08/2022').setHours(
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
    luggageId: '51c8d347-9260-4df9-8450-475798075826',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '245',
    name: 'Gwenaëlle',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+3',
    comments: null,
    tagNr: '5882',
    location: 'LR',
    bbDown: 'tt',
    bbLr: 'yu',
    bbOut: 'mo',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
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
    luggageId: '5d803037-74f4-4f5e-bf9e-5a15f5c4280c',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '687',
    name: 'Ophélie',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+9',
    comments: 'Nullam molestie nibh in lectus.',
    tagNr: '4851',
    location: 'LR',
    bbDown: 'uk',
    bbLr: 'do',
    bbOut: 'ta',
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8f97b181-b132-4833-901b-efada915c6c1',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '115',
    name: 'Andrée',
    arrivalTime: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+3',
    comments: null,
    tagNr: '7170',
    location: 'LR',
    bbDown: null,
    bbLr: 'cg',
    bbOut: 'ub',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a0615cad-036e-4e66-9ced-bc303eb1238f',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '030',
    name: 'Véronique',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+2',
    comments: 'Nulla ac enim.',
    tagNr: '0869',
    location: 'LR',
    bbDown: 'yk',
    bbLr: 'ej',
    bbOut: 'vw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '849f08c5-37ad-43d4-80ab-fa0302cca9b6',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '147',
    name: 'Bérangère',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+2',
    comments: null,
    tagNr: '3462',
    location: 'LR1',
    bbDown: 'lk',
    bbLr: 'au',
    bbOut: 'gw',
    completedAt: new Date(
      new Date('02/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '5232fc8f-4b0f-4458-9bcd-40b692ef7aec',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '743',
    name: 'Yóu',
    arrivalTime: null,
    bags: '6+2',
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tagNr: '5101',
    location: 'LR1',
    bbDown: 'zb',
    bbLr: 'ka',
    bbOut: 'tg',
    completedAt: new Date(
      new Date('01/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/21/2023').setHours(
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
    luggageId: '9831df38-1600-4106-a350-b2a6475793db',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '266',
    name: 'Eliès',
    arrivalTime: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+7',
    comments: 'Nullam varius.',
    tagNr: '6154',
    location: 'LR',
    bbDown: 'ml',
    bbLr: 'ug',
    bbOut: 'nq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/05/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '8f1b87bd-7489-4b2e-84d6-298dc4eb3cbe',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '413',
    name: 'Michèle',
    arrivalTime: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+8',
    comments: 'Donec dapibus.',
    tagNr: '3326',
    location: 'LR1',
    bbDown: 'ph',
    bbLr: 'bx',
    bbOut: 'mo',
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/14/2022').setHours(
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
    luggageId: 'a8eb9d71-b0bf-4f41-bc86-0f105d61cb7d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '659',
    name: 'Edmée',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+5',
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    tagNr: '9449',
    location: 'LR1',
    bbDown: 'al',
    bbLr: 'hx',
    bbOut: 'xh',
    completedAt: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '36209dfc-6ef4-482d-826b-24e9ccef014a',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '572',
    name: 'Wá',
    arrivalTime: new Date(
      new Date('01/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+5',
    comments: null,
    tagNr: '8260',
    location: 'LR1',
    bbDown: 'sq',
    bbLr: 'lm',
    bbOut: 'gu',
    completedAt: new Date(
      new Date('02/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '0c2d3250-d6f4-403e-9a7c-beabe897208e',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '153',
    name: 'Mélissandre',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+0',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tagNr: '8330',
    location: 'LR1',
    bbDown: 'kl',
    bbLr: 'kp',
    bbOut: 'jx',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
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
    luggageId: '497c42ce-1129-4d8d-b9c9-0f08dca4dafd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '090',
    name: 'Séverine',
    arrivalTime: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+6',
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    tagNr: '4810',
    location: 'LR1',
    bbDown: 'zt',
    bbLr: 'lo',
    bbOut: 'yj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/03/2022').setHours(
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
    luggageId: '8d8348b5-ffae-4ecf-be0b-2359e9c2f6fe',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '381',
    name: 'Märta',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+5',
    comments: 'Integer non velit.',
    tagNr: '2456',
    location: 'LR1',
    bbDown: 'vp',
    bbLr: 'xf',
    bbOut: 'qi',
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
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
    luggageId: '8a74fd62-f055-4de0-96ff-ddca214efc52',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '956',
    name: 'Mélina',
    arrivalTime: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+2',
    comments: null,
    tagNr: '2906',
    location: 'LR1',
    bbDown: 'yk',
    bbLr: 'ln',
    bbOut: 'bi',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd9bc5fa0-9d2f-4568-ba38-5f4d77fedc91',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '555',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+0',
    comments: null,
    tagNr: '9193',
    location: 'LR',
    bbDown: 'sg',
    bbLr: 'pm',
    bbOut: 'ex',
    completedAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2c3e5e90-c011-4044-b2b9-b075d0b2d65a',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '761',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    comments: null,
    tagNr: '6211',
    location: 'LR',
    bbDown: 'nq',
    bbLr: 'zb',
    bbOut: 'zw',
    completedAt: new Date(
      new Date('01/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '6b4701f7-9e4d-4722-a2c3-2abd15044f3e',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '357',
    name: 'Méline',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+5',
    comments: null,
    tagNr: '8166',
    location: 'LR',
    bbDown: 'lh',
    bbLr: 'we',
    bbOut: 'ag',
    completedAt: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
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
    luggageId: 'dd4e13a9-4095-4fdb-bedf-a3ef7b77ed68',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '963',
    name: 'Cléa',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+8',
    comments: null,
    tagNr: '6064',
    location: 'LR',
    bbDown: 'lu',
    bbLr: 'en',
    bbOut: 'jr',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '783ab4d3-4e01-4498-a946-03d09be7ba07',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '542',
    name: 'Pål',
    arrivalTime: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: 'Donec ut dolor.',
    tagNr: '8774',
    location: 'LR',
    bbDown: 'im',
    bbLr: 'th',
    bbOut: 'cg',
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/15/2022').setHours(
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
    luggageId: 'f5701778-f299-4495-9e9e-8fd4a68e5cff',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '166',
    name: 'Dù',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+3',
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    tagNr: '4947',
    location: 'LR1',
    bbDown: 'om',
    bbLr: 'sd',
    bbOut: 'zv',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
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
    luggageId: '586e7878-9878-4b3f-8aa3-67db97397611',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '313',
    name: 'Séverine',
    arrivalTime: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    tagNr: '1830',
    location: 'LR1',
    bbDown: 'zy',
    bbLr: 'jo',
    bbOut: 'hr',
    completedAt: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a5d5d1e9-7134-455b-a846-7253cdc66e5d',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '859',
    name: 'Björn',
    arrivalTime: new Date(
      new Date('12/04/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+6',
    comments: null,
    tagNr: '3510',
    location: 'LR1',
    bbDown: 'tn',
    bbLr: 'ql',
    bbOut: 'fs',
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7d395750-52eb-4141-9e22-126eb6b2db29',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '974',
    name: 'Bénédicte',
    arrivalTime: new Date(
      new Date('12/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+6',
    comments: 'Mauris sit amet eros.',
    tagNr: '8464',
    location: 'LR',
    bbDown: 'fo',
    bbLr: 'ub',
    bbOut: 'zw',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '477e6475-1d6b-4ff3-b6ce-f76e764cca22',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '461',
    name: 'Maëlyss',
    arrivalTime: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+3',
    comments: null,
    tagNr: '1864',
    location: 'LR1',
    bbDown: 'zq',
    bbLr: 'gs',
    bbOut: 'ci',
    completedAt: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e228f72a-d2d8-4f3f-8506-10f5b0844ae2',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '770',
    name: 'Intéressant',
    arrivalTime: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+1',
    comments: 'Etiam faucibus cursus urna.',
    tagNr: '8542',
    location: 'LR',
    bbDown: 'vi',
    bbLr: 'bc',
    bbOut: 'lj',
    completedAt: null,
    dateNeeded: new Date(
      new Date('03/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c4405f97-00d9-4a62-9abf-75fc69cb825d',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '591',
    name: 'Vénus',
    arrivalTime: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+7',
    comments: 'Curabitur gravida nisi at nibh.',
    tagNr: '5327',
    location: 'LR1',
    bbDown: 'in',
    bbLr: 'pe',
    bbOut: 'rt',
    completedAt: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('11/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'b1dd7d1f-c174-4f80-8e16-3f297a51c8a8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '096',
    name: 'Lauréna',
    arrivalTime: new Date(
      new Date('11/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+6',
    comments: null,
    tagNr: '4927',
    location: 'LR1',
    bbDown: null,
    bbLr: 'lz',
    bbOut: 'tr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/08/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2a5446d0-6203-48fe-a088-e5a660a475f0',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '635',
    name: 'Esbjörn',
    arrivalTime: null,
    bags: '3+0',
    comments: null,
    tagNr: '8510',
    location: 'LR1',
    bbDown: 'wq',
    bbLr: 'co',
    bbOut: 'vm',
    completedAt: new Date(
      new Date('02/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '2996c0f0-26df-41ca-844d-e04320496a18',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '729',
    name: 'Adélaïde',
    arrivalTime: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+5',
    comments: null,
    tagNr: '0595',
    location: 'LR',
    bbDown: 'af',
    bbLr: 'pi',
    bbOut: 'gr',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/22/2023').setHours(
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
    luggageId: 'c688bce5-e5a1-4129-b1df-b11cb32a914f',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '436',
    name: 'Lài',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+0',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    tagNr: '2450',
    location: 'LR1',
    bbDown: null,
    bbLr: 'jj',
    bbOut: 'ij',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'e208faa2-ee05-434e-b9ab-f1dae84d13c5',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '792',
    name: 'André',
    arrivalTime: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    comments: 'Nulla facilisi.',
    tagNr: '6818',
    location: 'LR',
    bbDown: 'zz',
    bbLr: 'qf',
    bbOut: 'ti',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '177ce33f-ef73-42f9-bb82-e4a0d35396a8',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '626',
    name: 'Alizée',
    arrivalTime: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+4',
    comments: null,
    tagNr: '5122',
    location: 'LR1',
    bbDown: 'xm',
    bbLr: 'ot',
    bbOut: 'te',
    completedAt: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '376e83ed-7fc9-4ba3-aa22-c57c00a8a8b6',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '184',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+4',
    comments: null,
    tagNr: '1698',
    location: 'LR1',
    bbDown: 'aq',
    bbLr: 'lj',
    bbOut: 'tm',
    completedAt: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
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
    luggageId: 'c94bffe6-d290-446f-94ee-7d17680f0c31',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '510',
    name: 'Thérèse',
    arrivalTime: new Date(
      new Date('01/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+7',
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    tagNr: '2226',
    location: 'LR',
    bbDown: 'jp',
    bbLr: 'uv',
    bbOut: 'wm',
    completedAt: new Date(
      new Date('01/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/06/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/09/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'a8e1d430-bb04-4a49-9423-f3be93c36d7a',
    luggageType: LuggageType.CHECKOUT,
    roomReady: true,
    room: '254',
    name: 'Séréna',
    arrivalTime: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+7',
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    tagNr: '0360',
    location: 'LR',
    bbDown: 'sp',
    bbLr: 'pn',
    bbOut: 'ql',
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/15/2022').setHours(
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
    luggageId: '3cde9400-1ba5-45af-8502-aec5d5efefb9',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '860',
    name: 'Réservés',
    arrivalTime: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+4',
    comments: null,
    tagNr: '4640',
    location: 'LR1',
    bbDown: null,
    bbLr: 'wp',
    bbOut: 'xw',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4665ac0f-d7d2-45ac-a829-86874fd385d0',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '011',
    name: 'Intéressant',
    arrivalTime: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '8+3',
    comments: null,
    tagNr: '7466',
    location: 'LR1',
    bbDown: 'xg',
    bbLr: 'gy',
    bbOut: 'hs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/04/2022').setHours(
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
    luggageId: 'cbd2bc11-2bc9-49c0-bc6a-a79a35c889ca',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '854',
    name: 'Illustrée',
    arrivalTime: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+4',
    comments: null,
    tagNr: '8975',
    location: 'LR',
    bbDown: 'xb',
    bbLr: 'fy',
    bbOut: 'ou',
    completedAt: new Date(
      new Date('01/04/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '78973eb8-beb3-4719-8c6b-53da9bc78d3f',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '257',
    name: 'Agnès',
    arrivalTime: new Date(
      new Date('02/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+6',
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    tagNr: '6853',
    location: 'LR',
    bbDown: null,
    bbLr: 'ch',
    bbOut: 'oo',
    completedAt: new Date(
      new Date('02/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/27/2023').setHours(
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
    luggageId: 'a85b7eec-e533-4051-863a-580ea76af1f9',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '841',
    name: 'Célestine',
    arrivalTime: new Date(
      new Date('12/01/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+2',
    comments: 'Integer ac neque.',
    tagNr: '3654',
    location: 'LR',
    bbDown: 'bk',
    bbLr: 'mh',
    bbOut: 'lm',
    completedAt: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/06/2022').setHours(
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
    luggageId: '67db8098-f4bd-4a2c-a610-2ad66bea6bea',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '724',
    name: 'Geneviève',
    arrivalTime: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+1',
    comments: 'Pellentesque at nulla.',
    tagNr: '8056',
    location: 'LR',
    bbDown: 'bz',
    bbLr: 'bw',
    bbOut: 'wn',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('01/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '77bab166-b2e6-44a5-b28b-da84b9a0baf5',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '034',
    name: 'Anaël',
    arrivalTime: new Date(
      new Date('01/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '0+6',
    comments: null,
    tagNr: '1361',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ih',
    bbOut: 'hd',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/05/2023').setHours(
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
    luggageId: '60e84431-c22d-4ca2-b2c5-82884199c0b3',
    luggageType: LuggageType.CHECKIN,
    roomReady: null,
    room: '903',
    name: 'Garçon',
    arrivalTime: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+4',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    tagNr: '9472',
    location: 'LR1',
    bbDown: 'lj',
    bbLr: 're',
    bbOut: 'ij',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '7ac42f53-7a26-469f-9dd4-099c2456775e',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '898',
    name: 'Léone',
    arrivalTime: new Date(
      new Date('02/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+7',
    comments: 'Donec ut dolor.',
    tagNr: '3112',
    location: 'LR',
    bbDown: 'en',
    bbLr: 'zq',
    bbOut: 'ph',
    completedAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'ef2c3eb0-95a5-4569-b846-cee757f0137d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '275',
    name: 'Marie-noël',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '4+8',
    comments: null,
    tagNr: '4802',
    location: 'LR1',
    bbDown: 'dx',
    bbLr: 'dc',
    bbOut: 'cr',
    completedAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '96be390c-d74e-4d7e-bac6-6562e54541bb',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '218',
    name: 'Åsa',
    arrivalTime: new Date(
      new Date('02/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+0',
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    tagNr: '6256',
    location: 'LR',
    bbDown: null,
    bbLr: 'xv',
    bbOut: 'wa',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'beab114e-84e5-426a-bc62-800008647998',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '181',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('02/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+0',
    comments: null,
    tagNr: '3960',
    location: 'LR1',
    bbDown: 'km',
    bbLr: 'jo',
    bbOut: 'qw',
    completedAt: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/01/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '91da5c80-2898-4079-b3c0-2dc96f7b9283',
    luggageType: LuggageType.LONG_TERM,
    roomReady: false,
    room: '074',
    name: 'Loïs',
    arrivalTime: new Date(
      new Date('02/02/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '3+2',
    comments: null,
    tagNr: '0920',
    location: 'LR1',
    bbDown: null,
    bbLr: 'ny',
    bbOut: 'ar',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/09/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'd86b35f4-c629-48bd-860b-42e6009cb493',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '510',
    name: 'Yáo',
    arrivalTime: new Date(
      new Date('02/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+3',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    tagNr: '7331',
    location: 'LR1',
    bbDown: 'ke',
    bbLr: 'ju',
    bbOut: 'fe',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/15/2023').setHours(
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
    luggageId: 'f31cdc2d-99be-4ab4-920b-e4326ab23644',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '327',
    name: 'Françoise',
    arrivalTime: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+5',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    tagNr: '6273',
    location: 'LR',
    bbDown: 'bx',
    bbLr: 'pp',
    bbOut: 'ko',
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '64ebd70e-6e03-4d4c-b391-ab42a3282a34',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '951',
    name: 'Börje',
    arrivalTime: new Date(
      new Date('02/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+8',
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    tagNr: '5193',
    location: 'LR',
    bbDown: 'ri',
    bbLr: 'kd',
    bbOut: 'hj',
    completedAt: new Date(
      new Date('03/05/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/04/2023').setHours(
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
    luggageId: '6c776130-5459-4077-830c-9d7442bbee36',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '806',
    name: 'Lorène',
    arrivalTime: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+2',
    comments: 'In hac habitasse platea dictumst.',
    tagNr: '8153',
    location: 'LR1',
    bbDown: 'kp',
    bbLr: 'wo',
    bbOut: 'ws',
    completedAt: new Date(
      new Date('12/03/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/02/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'c7a9c554-3a8e-4682-9e29-6cde53fa3d6d',
    luggageType: LuggageType.CHECKOUT,
    roomReady: false,
    room: '746',
    name: 'Aimée',
    arrivalTime: new Date(
      new Date('02/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+8',
    comments: 'Suspendisse accumsan tortor quis turpis.',
    tagNr: '1309',
    location: 'LR',
    bbDown: 'tg',
    bbLr: 'rs',
    bbOut: 'us',
    completedAt: new Date(
      new Date('03/03/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('03/02/2023').setHours(
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
    luggageId: 'a6f0fdbd-1ed9-4a79-b87a-4daf3807d046',
    luggageType: LuggageType.LONG_TERM,
    roomReady: null,
    room: '129',
    name: 'Athéna',
    arrivalTime: null,
    bags: '2+6',
    comments: null,
    tagNr: '7011',
    location: 'LR',
    bbDown: 'dh',
    bbLr: 'ff',
    bbOut: 'xe',
    completedAt: null,
    dateNeeded: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/07/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '81a1f203-7975-4d62-b0f5-b81b04d78bda',
    luggageType: LuggageType.CHECKIN,
    roomReady: true,
    room: '512',
    name: 'Dafnée',
    arrivalTime: new Date(
      new Date('02/08/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+7',
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    tagNr: '7539',
    location: 'LR1',
    bbDown: 'cp',
    bbLr: 'no',
    bbOut: 'wq',
    completedAt: null,
    dateNeeded: new Date(
      new Date('02/13/2023').setHours(
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
    luggageId: 'cdaa3482-e540-496c-9586-00dab71f9adb',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '838',
    name: 'Pò',
    arrivalTime: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '6+9',
    comments: 'Suspendisse potenti.',
    tagNr: '1122',
    location: 'LR1',
    bbDown: 'ag',
    bbLr: 'hv',
    bbOut: 'hs',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/24/2022').setHours(
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
    luggageId: '66e72f8a-1fd2-4c47-a82e-1d42fc4eea1b',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '789',
    name: 'Yénora',
    arrivalTime: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '9+8',
    comments: null,
    tagNr: '8256',
    location: 'LR1',
    bbDown: 'zh',
    bbLr: 'tp',
    bbOut: 'lr',
    completedAt: null,
    dateNeeded: null,
  },
  {
    createdAt: new Date(
      new Date('01/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '068b06ba-7c7d-47bd-87bb-3f433b5f383f',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '802',
    name: 'Desirée',
    arrivalTime: new Date(
      new Date('01/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '2+3',
    comments: 'Etiam vel augue.',
    tagNr: '2212',
    location: 'LR1',
    bbDown: 'ma',
    bbLr: 'xe',
    bbOut: 'of',
    completedAt: new Date(
      new Date('01/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('01/23/2023').setHours(
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
    luggageId: '43595797-45d9-4168-9b01-c2af1b4d3f04',
    luggageType: LuggageType.LONG_TERM,
    roomReady: true,
    room: '110',
    name: 'Estée',
    arrivalTime: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '7+7',
    comments: 'Phasellus sit amet erat.',
    tagNr: '3560',
    location: 'LR',
    bbDown: 'tn',
    bbLr: 'hm',
    bbOut: 'gp',
    completedAt: null,
    dateNeeded: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('12/06/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: 'f850e423-8c4d-461e-ad2b-7c6cd451f2fd',
    luggageType: LuggageType.CHECKOUT,
    roomReady: null,
    room: '531',
    name: 'Marie-hélène',
    arrivalTime: new Date(
      new Date('12/07/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '5+5',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    tagNr: '4985',
    location: 'LR1',
    bbDown: 'zc',
    bbLr: 'gu',
    bbOut: 'fq',
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    createdAt: new Date(
      new Date('02/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    luggageId: '4568960a-8920-4975-9201-e13b7fd4f14a',
    luggageType: LuggageType.CHECKIN,
    roomReady: false,
    room: '246',
    name: 'Kù',
    arrivalTime: new Date(
      new Date('02/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    bags: '1+1',
    comments: null,
    tagNr: '3224',
    location: 'LR',
    bbDown: 'oo',
    bbLr: 'ym',
    bbOut: 'wb',
    completedAt: new Date(
      new Date('02/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    dateNeeded: new Date(
      new Date('02/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
];
