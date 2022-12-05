import { IAssignment } from '@hems/interfaces';

export const assignments: IAssignment[] = [
  {
    assignmentId: '7fb26c0c-5244-4801-9705-5837d0ef9466',
    room: '961',
    task: null,
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    receivedBy: 'reception',
    performedBy: 'mt',
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '21dfc44f-a5f9-4383-af04-9bc415d69867',
    room: '817',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'yv',
    receivedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd8698c8b-c2bd-4e2d-940f-1bf508b9cdb0',
    room: null,
    task: 'RM',
    comments: 'Aenean fermentum.',
    receivedBy: 'guest',
    performedBy: 'ut',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2a0a3a2d-a09b-4b9f-a5de-9b99f2de0ba9',
    room: '974',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'sg',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cd750ab6-93af-4b2d-96c9-a779515303a3',
    room: '869',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ge',
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd8979496-bd0a-4135-a3f4-cad76d46ed3f',
    room: '916',
    task: 'RA',
    comments: 'Maecenas tincidunt lacus at velit.',
    receivedBy: 'guest',
    performedBy: 'lb',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7e0d5150-be2a-4f50-a3cf-289cb3c83255',
    room: '669',
    task: 'RA',
    comments: 'Pellentesque viverra pede ac diam.',
    receivedBy: 'reception',
    performedBy: 'cw',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '120fb693-2a6a-4724-b7e6-f5320c071aa4',
    room: '201',
    task: 'RA',
    comments: 'Sed ante.',
    receivedBy: 'reception',
    performedBy: 'ki',
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'aac921b3-1f61-4dbf-9ce6-eb3da27d2de4',
    room: '459',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'eg',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '811ba73e-25c0-468d-a603-2415b9484d57',
    room: '496',
    task: 'RM',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'reception',
    performedBy: 'zj',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fe3fd2b0-90f6-4aaa-aeef-80341b5a9e9f',
    room: '113',
    task: 'RM',
    comments: 'Pellentesque at nulla.',
    receivedBy: 'guest',
    performedBy: 'hs',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a7c2e3b9-ca94-43ea-8bf6-48c0da98ecff',
    room: '701',
    task: 'RA',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '101a74a6-d085-4dbe-be38-42d5b99c625b',
    room: null,
    task: null,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '585fc61c-025c-4866-b47b-28b779025f01',
    room: '926',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '07592483-8284-4ace-bcbc-687bb21c08b5',
    room: '926',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '81337443-9f5e-4e80-8db1-80f9b6dab572',
    room: '421',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6f02d539-5c02-46a7-9f90-62326bc4c535',
    room: '491',
    task: 'RM',
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '234937e0-de0c-49f6-bb37-400702463027',
    room: '795',
    task: 'RM',
    comments: 'Integer a nibh.',
    receivedBy: 'reception',
    performedBy: 'zw',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ced61b54-7800-46e7-a0a7-ee1e987e79b6',
    room: '626',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'la',
    receivedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '536723bd-4e98-4a79-a1ba-6b93a601a2cc',
    room: '784',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'vh',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5876c6be-e114-4040-b8a5-cab5da80ab09',
    room: '910',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bv',
    receivedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '697922cf-e46b-4bff-b79f-797a4b5d38e0',
    room: '502',
    task: 'RA',
    comments: 'Duis ac nibh.',
    receivedBy: 'reception',
    performedBy: 'cl',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '20e1673f-7d77-4631-9c08-d4c4c354d333',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'lr',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8abf9863-5063-404d-9fe5-087a9fef85b6',
    room: null,
    task: null,
    comments: 'Suspendisse potenti.',
    receivedBy: 'guest',
    performedBy: 've',
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a76d485c-5d48-4a46-ace3-46c990b0beac',
    room: null,
    task: 'RM',
    comments: 'Integer ac leo.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8a7efe17-a621-41a9-b69f-d8bf8983a268',
    room: '747',
    task: null,
    comments: 'Morbi non lectus.',
    receivedBy: 'reception',
    performedBy: 'ug',
    receivedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b8db21ec-889d-4d7a-881b-3f79ba4677c8',
    room: '980',
    task: 'RA',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    receivedBy: 'guest',
    performedBy: 'qo',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9f8b586b-fede-44cf-8e82-c4b6a593453f',
    room: '055',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'lk',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a7b8d521-daa8-4224-a3b5-e453302d8401',
    room: '040',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ml',
    receivedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f3962d95-466b-4daa-83e5-85328bb103e6',
    room: '228',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bv',
    receivedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '707bbaed-8aa3-4baf-92df-4c5d54f97f90',
    room: '794',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'mh',
    receivedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b8076d4f-850d-47be-842e-152ae322f1ae',
    room: null,
    task: 'RA',
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    receivedBy: 'reception',
    performedBy: 'mg',
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '35df99ea-86d6-4e48-a93d-3afe26171701',
    room: '016',
    task: 'RM',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'reception',
    performedBy: 'vz',
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '03496ba3-424c-4589-9ac9-95e812cd5b0c',
    room: '379',
    task: null,
    comments: 'Nam nulla.',
    receivedBy: 'guest',
    performedBy: 'xh',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2bec2521-4989-47c2-9f33-a8f50e892ea6',
    room: '340',
    task: 'RM',
    comments: 'Donec semper sapien a libero.',
    receivedBy: 'reception',
    performedBy: 'wv',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '625bc818-c9e4-4365-8e96-971e392930ca',
    room: '667',
    task: 'RM',
    comments: 'Nulla justo.',
    receivedBy: 'reception',
    performedBy: 'li',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '587245d3-e358-4a3c-9817-a47136f5dd45',
    room: '908',
    task: 'RM',
    comments: 'Donec dapibus.',
    receivedBy: 'reception',
    performedBy: 'in',
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'dade9b38-ebce-48e7-9423-368d77f66840',
    room: '141',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'qx',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '56688227-e3d8-4af0-87c9-9010f047b49d',
    room: '079',
    task: null,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    receivedBy: 'guest',
    performedBy: 'vt',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9c9ee4c4-8351-4774-adbb-ba9489dc008e',
    room: null,
    task: 'RA',
    comments: 'Mauris sit amet eros.',
    receivedBy: 'reception',
    performedBy: 'yq',
    receivedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '172059e1-c46f-414e-aa21-f66dc4648e06',
    room: '626',
    task: null,
    comments: 'Donec vitae nisi.',
    receivedBy: 'guest',
    performedBy: 'uq',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9ca61862-003d-4917-a21a-4fdab740f2bc',
    room: '717',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '26457216-feef-416f-96f3-d3ec2545a1fa',
    room: null,
    task: 'RM',
    comments: 'Nulla justo.',
    receivedBy: 'guest',
    performedBy: 'tq',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '31a61147-75df-47f1-ba09-85227ca024c6',
    room: '680',
    task: null,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5f606170-1e21-487b-9fb5-a02bc87def4b',
    room: '065',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'gs',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '996cc079-674a-4253-85c8-951aea87866b',
    room: '649',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'wa',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '08ead690-2604-4e55-b746-b35c8929ebdb',
    room: '728',
    task: null,
    comments: 'Ut at dolor quis odio consequat varius.',
    receivedBy: 'reception',
    performedBy: 'me',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b18733ab-2658-4d80-95e5-e79bff123cba',
    room: '064',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'qw',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '64e7a713-bfbb-4413-bbaa-773ad51f9ce2',
    room: '676',
    task: 'RA',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    receivedBy: 'reception',
    performedBy: 'ot',
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cdc9e692-53ee-4513-8b3f-8228ef3d9236',
    room: '129',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '961e5edc-d8eb-4553-b8c9-55e6613fdb85',
    room: '541',
    task: 'RA',
    comments: 'Aenean fermentum.',
    receivedBy: 'reception',
    performedBy: 'rb',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4ef05604-0ae0-4141-bad7-2e04455f5bab',
    room: '801',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'zf',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1d7aa637-43d8-4a70-9aa3-135f6b3fce7c',
    room: '892',
    task: 'RM',
    comments: 'Nulla tempus.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a71523f0-9b00-4e51-90fc-a670b180d10f',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'aw',
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '06253669-9a16-4e33-9601-d7c438a5c47d',
    room: '845',
    task: 'RA',
    comments:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    receivedBy: 'guest',
    performedBy: 'ua',
    receivedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '17b9c7b4-cc11-49b0-a9e0-27cd9d40abb6',
    room: '094',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'gn',
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b8309f9d-7cef-48ca-8657-4f840ff16d00',
    room: '176',
    task: 'RM',
    comments: 'Proin risus.',
    receivedBy: 'reception',
    performedBy: 'cx',
    receivedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '07985b4f-9a90-4119-9b68-6d3017d3106a',
    room: '751',
    task: 'RM',
    comments: 'Fusce consequat.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0fe5195b-7f6e-4dec-91a8-8f5751b0a02f',
    room: null,
    task: null,
    comments: 'Proin eu mi.',
    receivedBy: 'guest',
    performedBy: 'ro',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd722104c-3e9e-4d2f-808b-776d0b73c24c',
    room: '590',
    task: 'RA',
    comments: 'Ut tellus.',
    receivedBy: 'reception',
    performedBy: 'ly',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3a35d322-2e5f-408a-b37b-08a0399ea967',
    room: '444',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'xp',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b3afe30f-0740-4197-b1bd-9234e333213e',
    room: null,
    task: 'RA',
    comments: 'Vivamus tortor.',
    receivedBy: 'reception',
    performedBy: 'mm',
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c1ed56c9-fd80-4dc3-aea8-0625c3e17899',
    room: '480',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hq',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '06f66b38-8fef-48b8-9cf4-42bddfad6532',
    room: '650',
    task: null,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'guest',
    performedBy: 'lq',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9be9f4dd-92d9-4861-8d60-e513919bdf26',
    room: '832',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'wf',
    receivedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f90a7b51-069b-490f-9920-200c742b8d19',
    room: '706',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'wt',
    receivedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5733de5b-4335-4f46-86f3-4f86e24036ca',
    room: '288',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'dq',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b94f17ec-7951-42b7-8bd2-41ede51ab504',
    room: '003',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'av',
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '671d0abc-95c3-4179-930d-d11d5cfac319',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'wy',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2bbf79fc-9b47-4d6b-8b77-edb6cd3f039c',
    room: '104',
    task: null,
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a0d2f4aa-4acc-4362-a519-29feded24fb6',
    room: '796',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '68f7b792-b7d0-4568-b9d7-b174c9510c3e',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'co',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '54be1cd6-1d2f-4ce6-86ef-28112b2e763a',
    room: '744',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6e76d45e-7649-45eb-b6e0-140fdfca0596',
    room: '810',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'lz',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c36c10ee-93ac-41f5-b837-2c75a4c42bc4',
    room: '923',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'yg',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '08c7ed6d-2306-402f-8003-0f7a63585e41',
    room: '406',
    task: 'RA',
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    receivedBy: 'reception',
    performedBy: 'fy',
    receivedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '192d352f-b049-4ae0-adc3-b6d22f166bf5',
    room: null,
    task: null,
    comments: 'Nullam varius.',
    receivedBy: 'reception',
    performedBy: 'ql',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7111394c-a1f1-4779-9c24-3ada12460306',
    room: '475',
    task: null,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2ad90211-b22a-4395-a4c6-e1930733f147',
    room: '171',
    task: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    receivedBy: 'reception',
    performedBy: 'cl',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8714cd3c-39a1-4481-b3b1-dd82411b7036',
    room: null,
    task: 'RM',
    comments: 'Quisque porta volutpat erat.',
    receivedBy: 'reception',
    performedBy: 'tp',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6c3e5889-03c1-40e2-9fd0-b944b3875adf',
    room: '745',
    task: 'RM',
    comments: 'Ut at dolor quis odio consequat varius.',
    receivedBy: 'reception',
    performedBy: 'kz',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a558d196-c839-4713-aca7-96ae44984ce8',
    room: '529',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'mr',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '531e9a7c-4714-4b30-9c14-8ff748bfac6a',
    room: null,
    task: null,
    comments: 'Morbi ut odio.',
    receivedBy: 'reception',
    performedBy: 'zw',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9890c47e-dc38-4de4-aefd-89768a5ee19f',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fm',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '495eb97f-d30c-4778-ab9f-72781213bf52',
    room: '893',
    task: 'RA',
    comments: 'In blandit ultrices enim.',
    receivedBy: 'reception',
    performedBy: 'op',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0c8ce112-7f2c-4015-a161-0c820288f54d',
    room: '702',
    task: 'RM',
    comments: 'Donec ut dolor.',
    receivedBy: 'reception',
    performedBy: 'wd',
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f6d0995c-745e-4d33-8579-c8efc81893dd',
    room: '353',
    task: 'RM',
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    receivedBy: 'guest',
    performedBy: 'kf',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ccf03d2b-000b-483b-a44c-38a2cc606272',
    room: '015',
    task: 'RA',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'guest',
    performedBy: 'vs',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '69d76c9b-4e8e-4527-a5ce-d7caee78f115',
    room: '722',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'my',
    receivedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '81124fb1-e21b-463f-864d-32dd37f6a875',
    room: '298',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ay',
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '99367968-49c2-42c0-9d02-1c21aab568d5',
    room: '238',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'pv',
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bf3dfc38-4597-4c17-82e3-c69fce7cec6e',
    room: '196',
    task: 'RM',
    comments: 'Nunc rhoncus dui vel sem.',
    receivedBy: 'reception',
    performedBy: 'oh',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '542008d5-8cf2-4f6c-8e46-b0657f2e4bc3',
    room: null,
    task: null,
    comments: 'Nunc nisl.',
    receivedBy: 'reception',
    performedBy: 'za',
    receivedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '552362bc-3c9c-4357-b7ad-d2b28f47e1e4',
    room: '210',
    task: 'RM',
    comments: 'Sed ante.',
    receivedBy: 'reception',
    performedBy: 'gn',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '47067ccc-d31a-4d8d-bf12-54054c243c97',
    room: '402',
    task: 'RA',
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    receivedBy: 'reception',
    performedBy: 'if',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'dea4ec63-7a91-479c-877c-f16534cb55db',
    room: '391',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ye',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '99a2f48d-fdc3-48b0-9bb5-eb5dc4cad2a0',
    room: '516',
    task: 'RA',
    comments: 'Proin at turpis a pede posuere nonummy.',
    receivedBy: 'guest',
    performedBy: 'gl',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ec01a786-00c7-45e3-8951-e6b07e487590',
    room: '727',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6f5407f8-ff60-47bc-af2d-48df7668ca5a',
    room: '361',
    task: 'RM',
    comments: 'Pellentesque eget nunc.',
    receivedBy: 'guest',
    performedBy: 'eu',
    receivedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '90c090d9-068a-41bd-afde-05e6471df423',
    room: '050',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1dd7a36c-48a0-4c80-8c32-0d6af094ef27',
    room: '801',
    task: 'RM',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'reception',
    performedBy: 'th',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9beff2cc-0ef4-40fb-93fe-c3494f62c1d5',
    room: '421',
    task: 'RM',
    comments: 'Pellentesque eget nunc.',
    receivedBy: 'reception',
    performedBy: 'rh',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1c8c164b-c1b2-4a5c-96c7-0aa3d9c07baf',
    room: '662',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fs',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7417c25c-ec35-4ae7-b5f4-57f5fecddced',
    room: '738',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'oo',
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1a3c6bf3-72e2-4628-8341-bf2a8c385fcb',
    room: '818',
    task: 'RA',
    comments: 'Integer tincidunt ante vel ipsum.',
    receivedBy: 'reception',
    performedBy: 'fk',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0e5f85b5-24de-4913-a4c0-245e50082178',
    room: '937',
    task: 'RA',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    receivedBy: 'reception',
    performedBy: 'df',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1719f70a-8e4c-42c9-90da-3687bf164c42',
    room: null,
    task: 'RA',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'guest',
    performedBy: 'uh',
    receivedAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '507566e3-0bed-46e4-a090-a1eba86bcdb5',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'jo',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2513f08c-3c22-415d-8ab6-fd855f85e873',
    room: '539',
    task: 'RA',
    comments: 'Fusce consequat.',
    receivedBy: 'reception',
    performedBy: 'tq',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5b1a1fb5-c6ab-4e4f-b010-6a561adff11a',
    room: '088',
    task: null,
    comments: 'Donec vitae nisi.',
    receivedBy: 'reception',
    performedBy: 'it',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bb2d2288-f68e-4b15-a279-158de47df4b6',
    room: '332',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ud',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'af8f03d8-e4e4-416d-857a-06d3c8ff43c5',
    room: null,
    task: 'RM',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    receivedBy: 'reception',
    performedBy: 'yw',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd846abc5-52b6-4871-bd65-7f7f858d145d',
    room: '655',
    task: 'RM',
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    receivedBy: 'guest',
    performedBy: 'st',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8244d2b4-5e9f-4d23-8f6f-d8928df1ca7a',
    room: '424',
    task: null,
    comments: 'Nulla ac enim.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd68c6079-ce7c-4482-ad17-57edf70ae3fe',
    room: '893',
    task: 'RA',
    comments: 'Donec ut dolor.',
    receivedBy: 'guest',
    performedBy: 'hp',
    receivedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ee0af08b-99b9-41f9-ab39-a438559abae3',
    room: '302',
    task: null,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3eef1910-a5c4-40ff-8d45-124374872ce1',
    room: '168',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rp',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bd1273e9-6301-462d-8c00-1316e774c107',
    room: '538',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'rz',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '97ddefb5-1df2-472a-8d4d-dd0339860325',
    room: '051',
    task: null,
    comments: 'Maecenas pulvinar lobortis est.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '36630090-7d1a-4f18-847c-f0a095215443',
    room: null,
    task: null,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'reception',
    performedBy: 'cd',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f41ba4a3-6b48-4bc2-8a10-59a2a3ce5467',
    room: '251',
    task: 'RM',
    comments: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    receivedBy: 'guest',
    performedBy: 'fj',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e0d151d8-a9f9-4c42-a9ba-54ecf5dd7613',
    room: '424',
    task: 'RM',
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fcef8805-96af-4190-898a-bb6bf11e4303',
    room: '083',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'cd',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fec156c1-13ff-4244-bf14-a824a35f8d04',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4d61f8b4-dded-4620-938b-b6182fccedad',
    room: '080',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'lk',
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2459dd6b-f9aa-4e54-9b3b-99924a27d01a',
    room: '187',
    task: 'RM',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7849e153-1e0f-4d72-8a39-821f05d4f2cd',
    room: '751',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7b7e4476-c3da-401c-9eb3-9eccc736e40a',
    room: null,
    task: 'RA',
    comments: 'Donec semper sapien a libero.',
    receivedBy: 'guest',
    performedBy: 'we',
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '82a22388-d475-40ce-ad0a-290e8079ef94',
    room: '378',
    task: 'RA',
    comments: 'Etiam vel augue.',
    receivedBy: 'reception',
    performedBy: 'ac',
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '06534b9a-df1e-4bcb-9a57-2bada275e4bf',
    room: '572',
    task: null,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    receivedBy: 'reception',
    performedBy: 'zr',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c53de46f-0514-4d2f-96b3-4aba460bbea1',
    room: '019',
    task: 'RM',
    comments: 'Maecenas rhoncus aliquam lacus.',
    receivedBy: 'guest',
    performedBy: 'vm',
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '33cdea7d-9e64-40d7-a3c8-0f5465f41251',
    room: '892',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '33256031-2e78-42dd-9ac3-2417cecc3f90',
    room: null,
    task: 'RA',
    comments: 'Fusce posuere felis sed lacus.',
    receivedBy: 'reception',
    performedBy: 'xc',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '547d187c-9545-434c-b58e-9bd4025fa8dd',
    room: '104',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rd',
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0f35ca00-5f16-40f2-beb9-1e857422807f',
    room: '362',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'mi',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4be1582e-6e87-4112-ae36-22e408029cb0',
    room: '239',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'mt',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '212816b1-2a42-456b-9db9-72ab557850ff',
    room: '804',
    task: 'RA',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4a313627-3a3a-4705-9aa5-7ca7fec7d1f0',
    room: '552',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'sp',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bd47a05c-228f-493d-acd9-0d864e0c0f7f',
    room: '974',
    task: 'RM',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'reception',
    performedBy: 'aw',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cd2ffcf5-71d1-4a6f-bf31-47300c82f63f',
    room: '290',
    task: 'RM',
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    receivedBy: 'guest',
    performedBy: 'iz',
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '783f097a-f320-4bee-94be-7f3bf1636dec',
    room: null,
    task: null,
    comments: 'Duis at velit eu est congue elementum.',
    receivedBy: 'reception',
    performedBy: 'hs',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0d8eb430-9047-4c68-b64f-32ca558934fb',
    room: '721',
    task: null,
    comments: 'Nulla justo.',
    receivedBy: 'guest',
    performedBy: 'im',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '62cfa633-b984-4bc8-a523-c947a30677dd',
    room: '363',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'sv',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '047c4bef-165f-4a03-bfdf-1dc2a2c3fdf9',
    room: '461',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e5b4ee3d-6a4a-4432-bb0f-1dcd71d4026d',
    room: '722',
    task: 'RM',
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '77df36d5-7a4e-4642-ade5-86d191617640',
    room: '709',
    task: 'RA',
    comments: 'Pellentesque at nulla.',
    receivedBy: 'guest',
    performedBy: 'sb',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '930beefd-9f71-4d83-9748-6afa136c957b',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'di',
    receivedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '04a6ad18-32a0-4c94-bfbb-e57099b2fe8f',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'de',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0088a652-9719-429c-810e-f3efb2d78743',
    room: '797',
    task: 'RA',
    comments: 'Integer ac leo.',
    receivedBy: 'guest',
    performedBy: 'bi',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ae23698a-b3d4-4ccf-b09d-8bac90e81f1c',
    room: '886',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'we',
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'df68b61a-0d32-41c8-a0a2-0e31af2e20c9',
    room: '258',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dp',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6f074e8b-b6d0-452b-b7b6-ee706e9f2960',
    room: '660',
    task: 'RM',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'guest',
    performedBy: 'mk',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8918e83d-7724-4936-ba1e-1381f9b58f10',
    room: '821',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f17a83df-a5fd-404c-a32c-0ac382fe5294',
    room: '178',
    task: null,
    comments: 'Curabitur gravida nisi at nibh.',
    receivedBy: 'guest',
    performedBy: 'br',
    receivedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2bf0f835-95a0-4de5-b59b-cbb0c3058a70',
    room: '224',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'sc',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '01e9afd4-33db-403f-adf2-31b2f5dc7578',
    room: '188',
    task: null,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    receivedBy: 'guest',
    performedBy: 'kj',
    receivedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4f384eca-518d-49bc-a61e-cef18c025bd8',
    room: '448',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'cg',
    receivedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fedffa08-003d-4ebc-88bc-a0fcfcb65d16',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'yd',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4945a1de-8220-4c2a-bfbb-a2ff8797d9a3',
    room: '636',
    task: null,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0d1d44a9-8ccd-405a-98f6-9f2dc2d7b8a3',
    room: null,
    task: 'RA',
    comments: 'Donec ut dolor.',
    receivedBy: 'guest',
    performedBy: 'ke',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f3070e7e-37e5-45b5-8b37-bb27c6434e68',
    room: '617',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'qa',
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '020180bd-38d6-4f24-8bba-b44c707bce5a',
    room: '849',
    task: 'RA',
    comments: 'Duis aliquam convallis nunc.',
    receivedBy: 'guest',
    performedBy: 'tt',
    receivedAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5fcb4c10-0072-467d-9fb6-639fc4e03bb7',
    room: '080',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'gc',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bc64346c-0929-4fbd-8bc6-8c246b0a2b70',
    room: '024',
    task: 'RA',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'guest',
    performedBy: 'iy',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e4fae1a9-d981-43ae-a80f-572974fc967e',
    room: '330',
    task: 'RM',
    comments: 'Nullam varius.',
    receivedBy: 'reception',
    performedBy: 'tt',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2c082579-1580-4ba2-876c-572a6bac1aad',
    room: '130',
    task: 'RM',
    comments: 'Nulla nisl.',
    receivedBy: 'reception',
    performedBy: 'tv',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e41a2dd2-4c9f-411e-ada4-a8e40a810628',
    room: '849',
    task: null,
    comments: 'Cras pellentesque volutpat dui.',
    receivedBy: 'reception',
    performedBy: 'px',
    receivedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a674c24d-4444-4607-863d-60acb335d9f9',
    room: '480',
    task: 'RA',
    comments: 'Nullam porttitor lacus at turpis.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2b69660e-78bc-4d99-915c-01515cb62d9c',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'kc',
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0a0c2963-7bf1-4c33-9863-0aadb509d746',
    room: '626',
    task: null,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    receivedBy: 'reception',
    performedBy: 'nt',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd85d1e08-b0a7-44cd-b7d5-0ddb43cbabb6',
    room: null,
    task: null,
    comments: 'Cras in purus eu magna vulputate luctus.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2c0cd937-caa1-49ef-8131-68fe6c33c80a',
    room: '014',
    task: null,
    comments: 'Morbi a ipsum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b198ccff-a1ba-401e-9e63-6d0db34675ac',
    room: '365',
    task: null,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    receivedBy: 'reception',
    performedBy: 'st',
    receivedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1e1ba647-60bc-44d3-8a57-1d2fef5def8b',
    room: '248',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fi',
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '339b5235-e8c0-4412-a226-c9cd3a69e372',
    room: '055',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'wv',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ee33c458-987f-4632-b187-b1798c586aff',
    room: '704',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'su',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '841c0cfb-0388-4289-babc-ee1b7c54efda',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fr',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c038e34d-f564-4c62-b058-c2efa017ee3f',
    room: '087',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'mf',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8145911d-476b-42ca-b90b-6af2a6d572e3',
    room: '019',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'me',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '07e15496-e540-4004-901e-8a08371237c7',
    room: '698',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vk',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '90849955-ffd1-4daa-a3b7-680239e86e44',
    room: '865',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'oe',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f116edb0-eb3b-45f3-b011-f939a2c5d1f9',
    room: '353',
    task: null,
    comments: 'Duis mattis egestas metus.',
    receivedBy: 'guest',
    performedBy: 'xd',
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c3817fa0-442d-4aee-9c29-ce44de2708ba',
    room: '462',
    task: 'RA',
    comments: 'Proin risus.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd9c8f3ec-f64c-480a-b89f-f481c1e32b77',
    room: '660',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '14a582ab-c358-4dc2-9cb5-2974ce3bdace',
    room: '345',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hb',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '61b39162-5fe0-41b3-82e5-c55b208e6ff0',
    room: '799',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'dz',
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9bd02b44-6238-4e73-a4a8-3be53dc85ea7',
    room: '499',
    task: 'RA',
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    receivedBy: 'guest',
    performedBy: 'fg',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '83e288b7-05fc-403c-9737-e31ecc7358f0',
    room: '810',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'va',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8f0f67f0-ccdd-4a18-ab13-13a4c190533c',
    room: null,
    task: null,
    comments: 'Quisque ut erat.',
    receivedBy: 'reception',
    performedBy: 'xg',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4f09c185-0106-46f1-9b2b-ff9b156fe205',
    room: '295',
    task: 'RA',
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0427fa21-904a-43f8-9e7e-3bf465892351',
    room: '249',
    task: 'RA',
    comments: 'Nulla facilisi.',
    receivedBy: 'reception',
    performedBy: 'sg',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4d62802e-f92f-44a1-8032-b3b816dd2ad4',
    room: '816',
    task: 'RM',
    comments: 'Duis ac nibh.',
    receivedBy: 'reception',
    performedBy: 'xu',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '780298d9-3df4-49ca-98b6-565c294f5e7e',
    room: null,
    task: 'RM',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e85fb714-bec5-4237-8da2-3968ada977bb',
    room: '887',
    task: 'RA',
    comments: 'Pellentesque viverra pede ac diam.',
    receivedBy: 'reception',
    performedBy: 'gh',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '661467b8-2fdd-4221-93e9-07f49843ea4a',
    room: '421',
    task: 'RM',
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7e322f69-5d60-4b95-8caa-7a232332f793',
    room: '551',
    task: 'RA',
    comments: 'Morbi non lectus.',
    receivedBy: 'guest',
    performedBy: 'gs',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f8a4f6a7-813b-4213-833d-9496f90cb65d',
    room: '051',
    task: 'RM',
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    receivedBy: 'guest',
    performedBy: 'mt',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f5231040-603a-47bd-b72f-6d1e73c58a1f',
    room: '714',
    task: null,
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    receivedBy: 'guest',
    performedBy: 'sv',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f3d71682-3c19-4cdc-9727-e41a4a35af91',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rd',
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2ddd01a1-76d2-4e48-9836-d984cce10703',
    room: null,
    task: null,
    comments: 'Nam nulla.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '55b97c61-08a0-4961-8cd8-4adf2e397d90',
    room: null,
    task: null,
    comments: 'Nulla suscipit ligula in lacus.',
    receivedBy: 'reception',
    performedBy: 'cm',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5a401837-e7db-4a92-938a-af8a17dee517',
    room: '935',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'oo',
    receivedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5cc8ec43-4a81-43f1-88b6-01f12b0a6ed8',
    room: '213',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ta',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '689f71a1-f945-4813-9b0e-40a3556b489e',
    room: '168',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 've',
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b2ec75f4-c806-4a73-b98e-59b0fda52543',
    room: '376',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ld',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fe1e62b1-18ce-41db-be8a-f5cfcf51b2fe',
    room: '557',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bn',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6b736e1c-5f7a-4094-b1b9-fc6c0268deab',
    room: '880',
    task: null,
    comments: 'Etiam justo.',
    receivedBy: 'guest',
    performedBy: 'wm',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cd1214cf-463a-4897-ad63-31a0d06f149e',
    room: '084',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'qj',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '07539038-4c89-4d5d-91f9-40bfeee391e5',
    room: '810',
    task: 'RM',
    comments: 'Aenean fermentum.',
    receivedBy: 'guest',
    performedBy: 'hf',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b2e423bb-6c33-4f25-bd72-264623ea841a',
    room: '224',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'uv',
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '80fad502-1614-4441-8fe5-8d0147cbe2aa',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '16a00e24-2462-4e1f-a22f-549bea08196f',
    room: '983',
    task: null,
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    receivedBy: 'guest',
    performedBy: 'hg',
    receivedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fd9157ce-a61a-48ae-9f1a-25440e2c2135',
    room: null,
    task: 'RA',
    comments: 'Donec posuere metus vitae ipsum.',
    receivedBy: 'guest',
    performedBy: 'jh',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f6ff79af-f25e-49e8-807d-79bcf8e09f6c',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'wh',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0b25f077-730d-47e7-a212-74595af68fd2',
    room: null,
    task: 'RA',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'reception',
    performedBy: 'rn',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '45d57277-1db5-4a6c-9b1e-1ea008039d99',
    room: '344',
    task: 'RM',
    comments: 'Proin eu mi.',
    receivedBy: 'reception',
    performedBy: 'zg',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd90b02c3-a5dc-4119-a862-4931fce30aa4',
    room: '572',
    task: null,
    comments: 'Quisque porta volutpat erat.',
    receivedBy: 'reception',
    performedBy: 'wz',
    receivedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd646afc3-232b-4bf2-82a1-f5109db11c58',
    room: '174',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '398c0b0a-46c4-48b9-8b97-be7fa4998f4a',
    room: '934',
    task: 'RM',
    comments: 'In eleifend quam a odio.',
    receivedBy: 'reception',
    performedBy: 'yq',
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '30f07a1e-84bf-42bc-8f90-f225601b7cbc',
    room: '523',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'km',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '76be01a3-d755-426f-bc31-66fa216cb6d6',
    room: '412',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'rw',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e4f46a48-dae4-4f4a-a42e-2f0b14a6131c',
    room: '477',
    task: null,
    comments: 'Etiam justo.',
    receivedBy: 'guest',
    performedBy: 'po',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'faf45c7d-2761-43bf-ad18-bfa198944acf',
    room: '101',
    task: null,
    comments: 'Integer ac neque.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '27edbc24-adba-47b5-88f7-d7a1dfb5ff63',
    room: '983',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '067e5214-84ef-4d8d-b28b-36bb9f2b80ae',
    room: '953',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'sp',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2e230fb2-c7dd-44b9-ad7d-bde1f2830c23',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'gb',
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '96d8d546-4bb7-43da-8038-8eb285b0d929',
    room: '159',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bde4f0b8-4a89-44de-9c81-ed4da75094c9',
    room: '830',
    task: 'RM',
    comments: 'Nulla tellus.',
    receivedBy: 'reception',
    performedBy: 'ga',
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7961b5e6-19f6-4b01-8639-2f8b2250caee',
    room: '861',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vl',
    receivedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '518d55ea-c635-4936-b5a2-e789b8e312a2',
    room: '167',
    task: null,
    comments: 'Donec vitae nisi.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e7ed03b7-2e83-4c72-b7c6-23b0a14fa660',
    room: '558',
    task: 'RA',
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    receivedBy: 'reception',
    performedBy: 'np',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd8346e39-f1c7-4aa4-8ae9-cc7474192646',
    room: '196',
    task: 'RM',
    comments: 'Sed accumsan felis.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8910ceee-e929-4e49-aafa-f6e176d83e77',
    room: '466',
    task: null,
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    receivedBy: 'guest',
    performedBy: 'fy',
    receivedAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '161b160a-6184-40ee-b965-2187bae32c5c',
    room: '541',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'lb',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3edbd1a1-5716-495c-82e2-e6b252eb3a7c',
    room: '942',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4ce47da6-c035-44d8-8a45-6bc45bd94356',
    room: '034',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'te',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '355e45c4-7052-4a64-b56a-0a7cb1bc9748',
    room: null,
    task: 'RM',
    comments: 'Vestibulum rutrum rutrum neque.',
    receivedBy: 'reception',
    performedBy: 'kj',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '918b4f02-ae2f-4246-af0e-ede075e47269',
    room: '598',
    task: 'RM',
    comments: 'Etiam vel augue.',
    receivedBy: 'guest',
    performedBy: 'ik',
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '486da418-f926-4b24-820f-d3d874815b42',
    room: null,
    task: null,
    comments: 'Nulla mollis molestie lorem.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2f9b61cc-4106-474e-a944-92ffab57df72',
    room: '636',
    task: null,
    comments: 'Phasellus id sapien in sapien iaculis congue.',
    receivedBy: 'guest',
    performedBy: 'hd',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '55c08246-b20c-42f0-afe7-ada211dfa0e5',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'og',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'df1c7118-3fb5-4ede-9056-9f6a07e4ff37',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bb',
    receivedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f9e5cdd5-13bc-475c-8449-96de2f3be8d1',
    room: '517',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'tc',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ffdf1a49-00ee-44ce-8d6e-7e023b054869',
    room: '004',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dn',
    receivedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '81112e1a-3111-47bf-9d82-5c2e71772233',
    room: '297',
    task: null,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    receivedBy: 'guest',
    performedBy: 'he',
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '889746fa-7664-4438-a55a-d886404c6806',
    room: '247',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'nf',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8fd0bfc5-ef43-40e2-93a1-0239ac07beb1',
    room: '217',
    task: 'RA',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    receivedBy: 'reception',
    performedBy: 'ww',
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2742dfc0-1cb5-4286-8b87-8b0c7a022d31',
    room: null,
    task: 'RM',
    comments: 'Suspendisse potenti.',
    receivedBy: 'guest',
    performedBy: 'en',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '47125cc5-85e6-48a6-8f1f-4c82ae9c243b',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'yc',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3881a755-e2df-49c4-8ac5-63ec40d87603',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'nu',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '60761d9f-98ae-4410-b343-ebf12b3f028f',
    room: '625',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'qg',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '203d3f0a-48c5-4bb8-93f4-c960d221f01b',
    room: '115',
    task: null,
    comments: 'Donec vitae nisi.',
    receivedBy: 'reception',
    performedBy: 'yd',
    receivedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b15b51ad-b890-4b19-b57e-97f31e5a0031',
    room: null,
    task: 'RA',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'guest',
    performedBy: 'qf',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '36f95a44-a3b0-489c-ab25-135809129f66',
    room: '901',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'lv',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f980ec42-8a31-4d35-907a-4e70f0652451',
    room: '539',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'oc',
    receivedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ccb57653-fdaa-4594-8219-321bff0b13d6',
    room: '093',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4380406b-1df2-4dd6-a44a-9f48b5bc145b',
    room: null,
    task: null,
    comments: 'Nullam porttitor lacus at turpis.',
    receivedBy: 'reception',
    performedBy: 'qu',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '330c1be7-c393-4647-ab53-cac18208ea9d',
    room: '062',
    task: null,
    comments: 'Sed accumsan felis.',
    receivedBy: 'reception',
    performedBy: 'io',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7c063622-41ab-4493-8314-7f550c8d836a',
    room: '478',
    task: null,
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    receivedBy: 'guest',
    performedBy: 'ch',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c2043f0e-1e08-46fa-9b6d-33744fff4090',
    room: '780',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'tk',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1d41698f-7b47-45fd-979c-83d401f6a3cb',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bf',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f929bfa5-081c-4939-82de-034b287ead07',
    room: '562',
    task: 'RM',
    comments: 'Aenean sit amet justo.',
    receivedBy: 'guest',
    performedBy: 'ut',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b7a7b069-e7d5-4516-9920-dbea71ba5a4f',
    room: '738',
    task: 'RM',
    comments: 'Proin risus.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c5f3cb9c-583c-457a-8838-9e83c17475fb',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'zo',
    receivedAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd1a0e346-bb0e-41cd-9685-afd5c3d0f07e',
    room: '450',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vm',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5003faa6-1202-4f33-bf7a-557bcbe59e47',
    room: '568',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'yq',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '00453a70-13b6-4dc0-bd20-8864de54dfdc',
    room: '573',
    task: 'RM',
    comments: 'Morbi a ipsum.',
    receivedBy: 'guest',
    performedBy: 'gq',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'dc8a5f5b-625d-446f-9960-f29f8d4c9f76',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'eo',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6ab338de-6d11-4e32-afbe-7c9b76cf6c07',
    room: null,
    task: 'RM',
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    receivedBy: 'guest',
    performedBy: 'sn',
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b48c6c0a-06eb-44e1-be9e-6ddb25a88842',
    room: '166',
    task: null,
    comments: 'Aenean auctor gravida sem.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '29a1c3cc-e69b-4b94-8497-564199527af7',
    room: '394',
    task: null,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    receivedBy: 'reception',
    performedBy: 'rh',
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9c9542f9-6573-471e-89ab-e0dde0ac8d2f',
    room: null,
    task: 'RM',
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9d1ccbc2-9ae2-4f33-bba0-5aa7128ac47d',
    room: '666',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'lk',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0368745c-c803-490e-b42b-4372f844aacb',
    room: '894',
    task: 'RA',
    comments: 'Suspendisse accumsan tortor quis turpis.',
    receivedBy: 'guest',
    performedBy: 'ue',
    receivedAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5392dd88-b60c-4f86-bd40-7d77451a8177',
    room: '021',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bt',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '20ee3fda-5e69-4efe-8177-dd4ba7181093',
    room: '336',
    task: 'RM',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    receivedBy: 'reception',
    performedBy: 'ab',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4c5aba49-e162-4807-879e-71ce585e9776',
    room: '128',
    task: 'RA',
    comments: 'Integer non velit.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b71b17de-0901-4637-a113-4bf90a27dc3a',
    room: '901',
    task: null,
    comments: 'Nam nulla.',
    receivedBy: 'guest',
    performedBy: 'er',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd29ed623-b082-46d9-8964-6dafdd793207',
    room: '514',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'tx',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '71835782-9c71-4467-9457-24d3d2e35be2',
    room: '008',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'lk',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0f137c5b-9a58-46ae-9941-5033b3c351da',
    room: '600',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fs',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4523cd4f-f48b-4b62-a5e9-6514e165b26b',
    room: '460',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'tg',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1a867002-d19d-44d9-a64c-687838736898',
    room: null,
    task: null,
    comments:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    receivedBy: 'guest',
    performedBy: 'fo',
    receivedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '40bb250a-a5f7-4ef7-afad-67d5d9f163f9',
    room: '529',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3f2134e5-e5cb-4291-9ea5-2983325fff0b',
    room: '421',
    task: null,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    receivedBy: 'reception',
    performedBy: 'cq',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '48be15a8-51fb-41f5-ac9b-abcfa47bf7c0',
    room: '256',
    task: 'RA',
    comments: 'Nunc nisl.',
    receivedBy: 'guest',
    performedBy: 'iq',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b3d2796c-b969-45e0-b836-17e5f7334996',
    room: null,
    task: 'RA',
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    receivedBy: 'reception',
    performedBy: 'xo',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0b0465a3-dd38-4a40-b0c5-43a147d5451b',
    room: '550',
    task: null,
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    receivedBy: 'reception',
    performedBy: 'yd',
    receivedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7f5be0f3-c42f-401a-8817-c82d4ab6a5ea',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'wa',
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e3cc6f00-8643-4991-ab8e-08fc25759e1e',
    room: null,
    task: null,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '799c267b-b01f-4efd-8484-4e103e4c9635',
    room: '739',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'zi',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ac010d19-93fe-46a2-89f5-e446233bd863',
    room: '155',
    task: 'RA',
    comments: 'Fusce posuere felis sed lacus.',
    receivedBy: 'reception',
    performedBy: 'lx',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '10b12f43-74b2-4850-9e43-96505f1b366c',
    room: '434',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ha',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7634a6f8-61aa-4104-aabe-db56cc1ca5d5',
    room: '674',
    task: null,
    comments: 'Donec posuere metus vitae ipsum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ebc2a545-a5b4-4090-b302-849117f69160',
    room: '272',
    task: 'RM',
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    receivedBy: 'reception',
    performedBy: 'rq',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '60f8b342-8da3-48fa-8417-8413fb6709c3',
    room: '395',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '751d49d1-b2cb-4b46-a68e-4f6b8ea71937',
    room: '080',
    task: 'RM',
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    receivedBy: 'guest',
    performedBy: 'ho',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6a70c38f-376f-4795-888b-f4324f5c90be',
    room: null,
    task: null,
    comments: 'Proin at turpis a pede posuere nonummy.',
    receivedBy: 'reception',
    performedBy: 'um',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3a280cc9-efc2-43b4-8f33-d586f9daf996',
    room: '288',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '67e5e2a5-b13b-4bf5-a56d-22e4dc28ffaf',
    room: '252',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ce',
    receivedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8a3526a8-d42c-43af-85c6-d9fe29d1e059',
    room: null,
    task: null,
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'guest',
    performedBy: 'lk',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a7a1304b-8a95-472f-ad15-addfad6981ad',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ey',
    receivedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3e5f2271-46f2-4a90-bc90-9a4c3dcf2083',
    room: '532',
    task: 'RM',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '755a1ed8-606d-4962-b8ab-1768d1933941',
    room: '054',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'pj',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '93456c15-9ad4-44bd-aa58-0831540968b3',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'mr',
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0c5bcc9c-7cf6-4dc7-aa43-68306cd1d1ac',
    room: '356',
    task: 'RM',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    receivedBy: 'guest',
    performedBy: 'dw',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '03e2c832-4a04-46e7-b719-2c020d628e6f',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bb',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c278f6b2-1fc8-4076-9b39-8785c752ab12',
    room: '058',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'si',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f2c82cad-91f5-4696-bef3-00217774d89a',
    room: '127',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hp',
    receivedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '566e7b11-6800-403b-b5ed-b7cf1f5a3178',
    room: '490',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'nj',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0691cdd1-5dce-4d3f-95bb-235300b2c572',
    room: null,
    task: 'RA',
    comments: 'Quisque porta volutpat erat.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '23b53202-8bdc-4f17-8e0a-1ff3f0156f78',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'nv',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '027fb26e-a5a9-4b25-badd-35f1f5f21aba',
    room: '184',
    task: 'RA',
    comments: 'Nam dui.',
    receivedBy: 'guest',
    performedBy: 'go',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4bc2deed-d433-4fe3-9383-1fdce9665f44',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'oy',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a190e64e-49cd-4a93-aead-803044143b59',
    room: '478',
    task: null,
    comments: 'Maecenas pulvinar lobortis est.',
    receivedBy: 'guest',
    performedBy: 'ys',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1ae86d59-0453-483d-a824-d38b46daf08f',
    room: '843',
    task: null,
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: 'wn',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cc4603e4-b37d-4e2c-87fb-47f8fbb8b90b',
    room: '740',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ka',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '43bc4eec-17cf-42e9-8f60-3d8ec3dfd22b',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'tx',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fb4dc3ff-8c0a-4dbc-b2f0-eaf324e12c05',
    room: '532',
    task: 'RM',
    comments: 'Suspendisse accumsan tortor quis turpis.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ae385a8a-638e-452b-b068-504357750f90',
    room: '213',
    task: 'RM',
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    receivedBy: 'reception',
    performedBy: 'yh',
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2331820c-9e57-43cd-999d-569667516255',
    room: '568',
    task: 'RM',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    receivedBy: 'guest',
    performedBy: 'za',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '96dc8080-ebce-4615-a752-1a4a1d6dd2b5',
    room: '106',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ai',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '31cd5572-49a1-4de1-9d03-3778b81fb09e',
    room: '133',
    task: 'RA',
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    receivedBy: 'reception',
    performedBy: 'dw',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ee2ea781-b812-4abf-9373-1bc1f8aaba89',
    room: '687',
    task: 'RA',
    comments: 'Suspendisse potenti.',
    receivedBy: 'guest',
    performedBy: 'pu',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2f18fb30-430d-42d8-98a0-c79144cfe136',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hs',
    receivedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3f5f326b-2a41-404d-893b-1d7a39eb4f00',
    room: '253',
    task: 'RA',
    comments: 'Duis ac nibh.',
    receivedBy: 'guest',
    performedBy: 'jq',
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '58861a88-c378-49ed-a6fb-81e77d6ee070',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'mf',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd350dba3-b864-469d-a49e-01ab2e559afc',
    room: '881',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9a8e9666-9779-48b0-b7dd-79a44771b015',
    room: '257',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'xo',
    receivedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '97839d3d-e93d-47ba-afd7-1e7d296aa564',
    room: '591',
    task: 'RM',
    comments: 'Etiam vel augue.',
    receivedBy: 'reception',
    performedBy: 'ch',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '75fd0def-0974-49da-8e3a-b15fff253055',
    room: '663',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'us',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '26370aea-f289-421c-b5e2-4b0929722e0f',
    room: '510',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dx',
    receivedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c1949ead-9597-4a7c-9e81-d41eb92bde6d',
    room: null,
    task: null,
    comments: 'Nam tristique tortor eu pede.',
    receivedBy: 'reception',
    performedBy: 'zb',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ffd45c02-27ce-4cd7-b602-b6e892271e86',
    room: '101',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2cf8d44f-cca3-4d85-9340-fa3a9ffa7d6b',
    room: null,
    task: 'RM',
    comments: 'Donec vitae nisi.',
    receivedBy: 'reception',
    performedBy: 'mg',
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c16d89c1-9d9a-40ff-bd81-92b1cd1f41f8',
    room: '449',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hw',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '50bcc00c-4ebe-4bb6-83b9-8048fe257c0d',
    room: null,
    task: 'RM',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'guest',
    performedBy: 'mc',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a04293da-95de-4dfb-b516-9f02898aecf8',
    room: '819',
    task: null,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    receivedBy: 'guest',
    performedBy: 'nx',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'dc6711a0-02c8-4ce9-8f47-6161be2ffdd1',
    room: null,
    task: 'RA',
    comments: 'Curabitur convallis.',
    receivedBy: 'reception',
    performedBy: 'yb',
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c722d63b-d16b-424b-8dde-71d56049a54f',
    room: '459',
    task: null,
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: 'zv',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9a3466d0-a950-42ae-ad7b-ea9d29c70b80',
    room: '682',
    task: 'RA',
    comments: 'Nullam porttitor lacus at turpis.',
    receivedBy: 'guest',
    performedBy: 'gg',
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4e3f78fb-596f-435a-8152-cb514ed25ed9',
    room: '906',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6304f13c-2321-4370-9773-e90455119fcc',
    room: null,
    task: 'RM',
    comments: 'Morbi porttitor lorem id ligula.',
    receivedBy: 'reception',
    performedBy: 'er',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '02b95d92-c0a1-46f4-981c-0108c4c288d6',
    room: '354',
    task: null,
    comments: 'Quisque ut erat.',
    receivedBy: 'reception',
    performedBy: 'dq',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9c71b497-5658-4831-861e-bac48ed3cd19',
    room: '565',
    task: null,
    comments: 'Nulla ac enim.',
    receivedBy: 'reception',
    performedBy: 'mq',
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'de71b931-104a-4dd0-b191-70bb44322ef7',
    room: '523',
    task: 'RA',
    comments: 'Pellentesque ultrices mattis odio.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f169d16d-c7b8-4228-81a1-0e7f84124354',
    room: '342',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ev',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '923c81dd-6851-40bd-b178-9316f87f4f9f',
    room: '206',
    task: null,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    receivedBy: 'reception',
    performedBy: 'ay',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd2b49524-44e2-4bba-ac49-2571e2511177',
    room: '013',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'mp',
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9123336a-d0e4-4c57-8535-cb43f7934d39',
    room: null,
    task: null,
    comments: 'Nunc nisl.',
    receivedBy: 'guest',
    performedBy: 'rj',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '693b3398-5b74-4288-a887-590708e4692d',
    room: '028',
    task: null,
    comments: 'Nulla justo.',
    receivedBy: 'guest',
    performedBy: 'pn',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '872ea285-0951-4f68-9ee3-21cb39c7d191',
    room: '181',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dd',
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e5df581c-943e-41ad-a9c0-b29a597cc420',
    room: '436',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '259abf17-c06c-43f3-85f7-0218e8f98805',
    room: '224',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c96e5bf0-81c3-47f5-b5be-43ce1ddd9a43',
    room: '273',
    task: null,
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    receivedBy: 'guest',
    performedBy: 'ns',
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b51c3ce3-c1ff-4668-aef7-b168acaae6e0',
    room: '228',
    task: 'RM',
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    receivedBy: 'guest',
    performedBy: 'li',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '753fcf2d-1352-4983-84a4-08f35e7e7432',
    room: null,
    task: null,
    comments: 'Donec dapibus.',
    receivedBy: 'guest',
    performedBy: 'rg',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1d2536bf-b1a3-4d74-9f18-fae1069a64f3',
    room: '423',
    task: 'RM',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    receivedBy: 'reception',
    performedBy: 'mn',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '98c3b52b-8c68-4acc-b8dc-f233900e6c9e',
    room: '692',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'da',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '11b250a5-7bdc-4a63-ad88-b9ce8b5c7bb2',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'js',
    receivedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'caac5184-cb81-4823-a83f-499c59d1fa28',
    room: '849',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'at',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a8f672a5-ba9c-426c-a36c-9ac35d6134d4',
    room: null,
    task: null,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'guest',
    performedBy: 'yw',
    receivedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c789beee-450c-49cf-857f-24ded2d51406',
    room: null,
    task: 'RA',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    receivedBy: 'guest',
    performedBy: 'ns',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8d1e1bc0-5e47-4a65-a5a4-b97e46e2deac',
    room: '880',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '73e3464a-4441-42ce-950c-9be081a2f38a',
    room: '056',
    task: 'RA',
    comments: 'Nam nulla.',
    receivedBy: 'reception',
    performedBy: 'ke',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd6f5d619-fd5f-4f39-ae3d-98aa18a986b4',
    room: '235',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dd',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'df96399e-ad14-432b-bc53-7f3d1cb5f0d2',
    room: '911',
    task: 'RA',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    receivedBy: 'reception',
    performedBy: 'fx',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '273b565f-15ce-4624-b380-fd94d1dd84bf',
    room: '178',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ks',
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '55a2f4b2-36de-400d-9e84-4d8cd998e904',
    room: '520',
    task: 'RM',
    comments: 'Maecenas tincidunt lacus at velit.',
    receivedBy: 'reception',
    performedBy: 'sd',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'abf16285-0075-4f2f-af45-0371391b0007',
    room: '434',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ae',
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b08b52a6-48e1-4265-8bbd-cc9b98949587',
    room: '441',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'yb',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c004c894-0ca1-45b3-9fe1-5a3be22e5c4d',
    room: '629',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'tp',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd236695d-a10b-4312-87e6-537d2b472d70',
    room: '470',
    task: 'RM',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    receivedBy: 'reception',
    performedBy: 'nn',
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2b000231-b716-4de7-b5ae-31c980d5dedd',
    room: '810',
    task: 'RM',
    comments: 'Nulla tellus.',
    receivedBy: 'reception',
    performedBy: 'xc',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5b889877-443d-4c8a-9cb1-bc6e779f4542',
    room: '855',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'yv',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '298c5925-5d1a-4df3-8e2d-4b916ca263f2',
    room: '686',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1d0b703c-448c-48de-8978-95b26d61818f',
    room: null,
    task: 'RM',
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    receivedBy: 'guest',
    performedBy: 'bh',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e66da024-fc79-4c6b-b385-88087994d29a',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ny',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd3479d83-1765-4e78-8734-3a2cff2905e4',
    room: null,
    task: 'RA',
    comments: 'Mauris ullamcorper purus sit amet nulla.',
    receivedBy: 'guest',
    performedBy: 'cy',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '92f7055c-91c6-45f6-b176-ad83241d380e',
    room: '092',
    task: 'RA',
    comments: 'Aenean lectus.',
    receivedBy: 'reception',
    performedBy: 'hx',
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0727a62b-e957-49c9-9c38-e99a5288d4a5',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'xz',
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '995ba8c4-ee48-42d1-bc76-21086b616f9c',
    room: '276',
    task: 'RM',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    receivedBy: 'guest',
    performedBy: 'oc',
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '45d5fd52-67b7-4ef9-a494-7a6001f3c18f',
    room: '535',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'cn',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3dcf3a3e-71a4-4a95-a007-d42dd3cd6a36',
    room: '264',
    task: null,
    comments: 'Donec vitae nisi.',
    receivedBy: 'guest',
    performedBy: 'oz',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e6c387c7-965b-4f38-9cde-3e4a1df3e0f5',
    room: '174',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ln',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4fa92e43-3eb7-4ed0-9d0b-2f8a9966da49',
    room: '744',
    task: 'RA',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'reception',
    performedBy: 'rt',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '666f91e5-286d-41cf-b2db-3404616178f9',
    room: '251',
    task: null,
    comments: 'Integer tincidunt ante vel ipsum.',
    receivedBy: 'guest',
    performedBy: 'yc',
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '815e56b2-77eb-4797-acc3-6fc2ca1178ff',
    room: '339',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dk',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3f2ada0c-12b5-4279-bc4e-2d8b4bf58796',
    room: '017',
    task: 'RM',
    comments: 'In sagittis dui vel nisl.',
    receivedBy: 'reception',
    performedBy: 'bf',
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '90f6130c-b498-4081-a09b-6159cd4cea2a',
    room: null,
    task: 'RA',
    comments: 'Quisque ut erat.',
    receivedBy: 'reception',
    performedBy: 'ye',
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '053353e9-0e80-4b55-9582-eb98cb5cedf4',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'xn',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c7c44121-ad62-4e17-9a0b-1b7397571b4d',
    room: '943',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4fe44e90-e261-4fad-bf47-67fca9ea6cc7',
    room: '818',
    task: 'RA',
    comments: 'In eleifend quam a odio.',
    receivedBy: 'guest',
    performedBy: 'mf',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f684bbe0-b817-49a9-8421-498a92878876',
    room: null,
    task: 'RM',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    receivedBy: 'guest',
    performedBy: 'ip',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0eb275de-64fe-4982-8610-058913e29850',
    room: '657',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c6774e10-c531-42cd-8009-08737d2c3813',
    room: '206',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2e3bf65f-c010-4e45-aeca-f58d19d99062',
    room: '119',
    task: null,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    receivedBy: 'reception',
    performedBy: 'do',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f55bcdc8-c3d5-4b8f-8987-11a6661f8738',
    room: '061',
    task: null,
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    receivedBy: 'guest',
    performedBy: 'vc',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '255760f5-b5b4-4f95-9a03-5af0c26c6c75',
    room: '230',
    task: 'RA',
    comments: 'Vivamus vestibulum sagittis sapien.',
    receivedBy: 'guest',
    performedBy: 'af',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '623af4f1-d3ef-4b01-bc63-71c4993e3761',
    room: '176',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fl',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5e87c17f-865b-4060-be8f-1ead784b8d63',
    room: '988',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'cb',
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a5bc1c2a-7f5e-4e00-8566-e010269d0e94',
    room: '239',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'iq',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e7e7c1ed-a254-413d-af7e-b3cb167a227e',
    room: '826',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'oi',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b9dc4ca9-1242-4afc-b64e-60d5502351bd',
    room: '395',
    task: null,
    comments: 'Maecenas ut massa quis augue luctus tincidunt.',
    receivedBy: 'guest',
    performedBy: 'ed',
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e7490467-1c70-4a26-90e6-935b14192306',
    room: '080',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rh',
    receivedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1b4a9b02-7681-45f2-b2e2-40876938bdd9',
    room: '383',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'yd',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e1621819-e54d-4d1f-9735-cc264083a0e5',
    room: '155',
    task: null,
    comments: 'In blandit ultrices enim.',
    receivedBy: 'reception',
    performedBy: 'mt',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'df398cd4-cbe1-4660-9793-235c675d8597',
    room: '721',
    task: 'RM',
    comments: 'Aenean sit amet justo.',
    receivedBy: 'reception',
    performedBy: 'kk',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'edda49d0-426b-4d9b-9984-c784adee30d6',
    room: '841',
    task: 'RA',
    comments: 'Sed ante.',
    receivedBy: 'reception',
    performedBy: 'ly',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '632f1226-a1d4-4150-bbdf-a579776d224e',
    room: '770',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'nd',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6b52850b-7af3-4936-840f-72b8d33ebe48',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'zl',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8ff78d93-1eaa-4813-a7ff-ba93ed0a40e9',
    room: '067',
    task: 'RM',
    comments: 'Cras in purus eu magna vulputate luctus.',
    receivedBy: 'guest',
    performedBy: 'nz',
    receivedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '09bf7cab-9821-43e4-b938-bda5739e438e',
    room: '640',
    task: 'RM',
    comments:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0569910d-51d0-4000-8208-c0cf9b43b74c',
    room: null,
    task: null,
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    receivedBy: 'guest',
    performedBy: 'of',
    receivedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a8be3720-0425-4808-acf0-f96c31204a3d',
    room: '076',
    task: 'RM',
    comments: 'Morbi non lectus.',
    receivedBy: 'reception',
    performedBy: 'sw',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '894306f5-3806-4cb9-a5d1-c436df55f29a',
    room: '606',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bc',
    receivedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2be95641-a931-4cce-8030-07a5fd1e9e5b',
    room: '928',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'sq',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7da168cc-9edd-47d4-97c8-b92c8863f416',
    room: '631',
    task: null,
    comments: 'Duis aliquam convallis nunc.',
    receivedBy: 'guest',
    performedBy: 'ii',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4bba034b-e3cd-4e8b-bec9-bec7c14c6158',
    room: '846',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'zk',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '76d134ed-6861-4702-876f-8a79c1bac511',
    room: '150',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ai',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0ca55bf9-0762-4f95-93b6-b3af5c403e30',
    room: '993',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'se',
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f13be1d0-e4ca-4478-aa4c-3b9d5942bf1b',
    room: '063',
    task: 'RA',
    comments: 'Morbi quis tortor id nulla ultrices aliquet.',
    receivedBy: 'guest',
    performedBy: 'aa',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0ae684f5-e47d-4a13-9554-3d50e7dc1553',
    room: '353',
    task: 'RM',
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    receivedBy: 'reception',
    performedBy: 'sp',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9a41d517-477d-46df-9110-f6fb727e92cd',
    room: '520',
    task: 'RM',
    comments: 'Quisque porta volutpat erat.',
    receivedBy: 'reception',
    performedBy: 'rq',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3c479a04-f987-414b-97e4-2f4024ad9b8e',
    room: '154',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'il',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4397798b-e0f8-4145-8b90-b88dfdab0510',
    room: null,
    task: null,
    comments: 'Integer a nibh.',
    receivedBy: 'guest',
    performedBy: 'zy',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3768268f-6692-4544-8e06-25a818f4150e',
    room: '516',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'yx',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '630f2173-d32b-4436-88e4-58a869e3036a',
    room: '495',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'xa',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd242eb6e-7eb8-4c71-89a6-62fd69e7ec65',
    room: null,
    task: null,
    comments: 'Nunc rhoncus dui vel sem.',
    receivedBy: 'guest',
    performedBy: 'aa',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '734dd4c8-f6dc-4cb6-9311-fd892d8b722e',
    room: '797',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'oe',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '15c12bf9-72d8-4e14-924c-aef46549119a',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'et',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fad6d918-feec-4858-9056-eb178c807a4d',
    room: '169',
    task: 'RM',
    comments: 'Mauris sit amet eros.',
    receivedBy: 'guest',
    performedBy: 'vh',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7cacf153-0573-42c2-84c0-f30c5ef401f6',
    room: '110',
    task: null,
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    receivedBy: 'reception',
    performedBy: 'fo',
    receivedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '181ccabc-68ad-4da4-a3d9-cccd3cab1128',
    room: null,
    task: 'RA',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    receivedBy: 'guest',
    performedBy: 'rq',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2cc8ede4-4f9e-452b-bf36-a3fecbc351dd',
    room: '281',
    task: 'RM',
    comments: 'Suspendisse ornare consequat lectus.',
    receivedBy: 'guest',
    performedBy: 'ep',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b320184a-44c5-4088-95f3-733a37bd270c',
    room: '935',
    task: null,
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    receivedBy: 'reception',
    performedBy: 'oj',
    receivedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2627da93-ca04-44bc-8564-313655ab9bc1',
    room: '078',
    task: 'RA',
    comments: 'Nunc purus.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fb4bd4f6-1a16-4916-b548-fe741ae3b853',
    room: '667',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'kr',
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a6b69c49-9402-46e6-a011-98bd595bba86',
    room: '317',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f394c12b-9b7a-4ed8-8688-0baf9d1240f1',
    room: null,
    task: 'RA',
    comments: 'Pellentesque at nulla.',
    receivedBy: 'guest',
    performedBy: 'll',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ea6dcc44-3922-4cb6-91e8-124e9f3ca747',
    room: '822',
    task: 'RM',
    comments: 'Nulla tellus.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '16af9008-eb59-476b-88e2-2e2a8de435ea',
    room: '632',
    task: null,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    receivedBy: 'reception',
    performedBy: 'pt',
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'de425d55-27fb-44d9-bae0-941b096d84c6',
    room: '031',
    task: 'RM',
    comments: 'Aenean fermentum.',
    receivedBy: 'guest',
    performedBy: 'ot',
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fa29a671-368d-4d53-be58-e95b732aaefb',
    room: null,
    task: null,
    comments: 'Mauris sit amet eros.',
    receivedBy: 'guest',
    performedBy: 'dj',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '067448aa-6b9c-4f8d-8478-eb63b115dbe4',
    room: '046',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b517a638-e9b5-4a52-bda6-3bad2c3f7608',
    room: '537',
    task: 'RM',
    comments: 'Suspendisse potenti.',
    receivedBy: 'guest',
    performedBy: 'uc',
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b1560a25-8b2e-498b-8809-5dccfd7b0d56',
    room: '944',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'fs',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3325d5a1-2ddb-4136-a723-b19f1a586363',
    room: '096',
    task: null,
    comments: 'Integer a nibh.',
    receivedBy: 'guest',
    performedBy: 'se',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a1b29ea0-7388-42f6-9cde-cfb81c270873',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'hu',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '62cf4fce-c34c-4f40-b8fd-1f532527f294',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ih',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd2579d4e-27c1-4ef1-a00d-0caebcf2227c',
    room: '787',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'hj',
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6fe822e2-438b-4bf1-837e-da47e83773d4',
    room: '206',
    task: 'RM',
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    receivedBy: 'reception',
    performedBy: 'ta',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f236ce1b-4aa1-4585-8782-179df874ba24',
    room: '004',
    task: 'RA',
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    receivedBy: 'guest',
    performedBy: 'mo',
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '906c3908-ea13-47d8-814b-160ee18cb242',
    room: '997',
    task: null,
    comments: 'Aenean auctor gravida sem.',
    receivedBy: 'guest',
    performedBy: 'or',
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8cc0695d-a551-43a9-8639-ad02393834ab',
    room: '387',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'es',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '67766e1c-aaad-4774-808e-601847d6af15',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'nv',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '65fc2479-2129-44f5-8f19-9b15ead552b5',
    room: '743',
    task: null,
    comments: 'Etiam pretium iaculis justo.',
    receivedBy: 'reception',
    performedBy: 'gw',
    receivedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b88ba9e7-dfcc-43ac-81b4-478e39436ea5',
    room: '510',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'qq',
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e56ccb1a-9ae3-4095-afa3-af4f0441f3ba',
    room: '485',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ya',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '36be1294-e930-47f8-8146-bcb606b953f4',
    room: '272',
    task: 'RA',
    comments: 'In blandit ultrices enim.',
    receivedBy: 'reception',
    performedBy: 'bf',
    receivedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '13136133-40ad-4013-bd4f-232c10c5a5da',
    room: '020',
    task: 'RA',
    comments: 'Ut tellus.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '528f72bb-4713-4337-8d5f-90bdc1ff6f63',
    room: '415',
    task: 'RA',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7b35cbdc-c5da-4ba6-a9a8-c6c62fec04e9',
    room: '886',
    task: 'RA',
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    receivedBy: 'guest',
    performedBy: 'mm',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7a1e9c0f-fc4d-43a4-bc60-fea5dc359c12',
    room: '880',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'zl',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b2661a04-e0f5-4d82-9991-9dd1de416e59',
    room: '101',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'sw',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '93abacce-51b1-4fbd-9a84-3f4aa265bb99',
    room: '350',
    task: null,
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    receivedBy: 'reception',
    performedBy: 'gd',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2a6ad08c-04fd-4fde-98f1-d2fafc932c42',
    room: '703',
    task: 'RA',
    comments: 'Nam tristique tortor eu pede.',
    receivedBy: 'guest',
    performedBy: 'hg',
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '00fabcc1-db1b-485c-9bf1-1c5b9de10a79',
    room: null,
    task: null,
    comments: 'Duis aliquam convallis nunc.',
    receivedBy: 'reception',
    performedBy: 'em',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '62826c03-a6fb-4ef0-a3f6-9f6710befb88',
    room: '022',
    task: null,
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: 'iv',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '31ced80c-2456-4edc-ad98-bfa22b1e1919',
    room: '776',
    task: 'RM',
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b18feb4b-9061-4c0a-af7c-b5e87e38ef90',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'sy',
    receivedAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '12464e4c-01ad-4f3a-9c5a-5f2cd5b8d15b',
    room: '893',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hw',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '78e081e5-b6fa-405f-b527-0cc5b4b5d7ff',
    room: '653',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vv',
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e9d32664-185e-49bc-b173-1acafd7b9028',
    room: '860',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'mp',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9f2753ee-c7a4-470c-9762-808ca92c5242',
    room: '473',
    task: 'RA',
    comments: 'Proin eu mi.',
    receivedBy: 'guest',
    performedBy: 'tb',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '973f8f6d-41a5-4a54-b4fd-171c1b331770',
    room: '408',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bs',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2116574d-bbbc-43c2-9065-b2247c27a841',
    room: null,
    task: 'RA',
    comments: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    receivedBy: 'reception',
    performedBy: 'oi',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '25af0805-9244-44f9-ab23-b3db926e49c1',
    room: '607',
    task: null,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    receivedBy: 'reception',
    performedBy: 'pa',
    receivedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '39890f8d-8987-4da6-b193-329cf0a190b8',
    room: '983',
    task: null,
    comments: 'Pellentesque viverra pede ac diam.',
    receivedBy: 'reception',
    performedBy: 'zt',
    receivedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9bdbe35c-c4a0-42e8-b953-7f2d81ca61d1',
    room: null,
    task: 'RA',
    comments: 'Vivamus in felis eu sapien cursus vestibulum.',
    receivedBy: 'reception',
    performedBy: 'sk',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4d9400f6-51d7-445b-8983-3c87319665db',
    room: '344',
    task: 'RA',
    comments: 'Maecenas tincidunt lacus at velit.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd38e7742-3d71-4e1c-b7c3-37bfe15b0c8d',
    room: '886',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'nv',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1cfd5014-e56f-4006-b149-16282d47a223',
    room: '559',
    task: 'RM',
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '23aedf5d-53ed-4618-b417-f41fa0f0fb2f',
    room: '834',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'mh',
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '53b45a90-09a8-44c1-9898-08de0a3f57c2',
    room: null,
    task: 'RM',
    comments: 'Pellentesque at nulla.',
    receivedBy: 'guest',
    performedBy: 'pn',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'eba5706e-5cb6-473e-8483-f3bf8ddfd810',
    room: '050',
    task: null,
    comments: 'Curabitur gravida nisi at nibh.',
    receivedBy: 'reception',
    performedBy: 'na',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '77936687-f9e1-40f3-b389-3f4ddc9997f1',
    room: '151',
    task: null,
    comments: 'Proin at turpis a pede posuere nonummy.',
    receivedBy: 'reception',
    performedBy: 'ma',
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9371d34e-6c82-46a4-97ac-998e97e7001f',
    room: '526',
    task: 'RA',
    comments: 'Etiam faucibus cursus urna.',
    receivedBy: 'reception',
    performedBy: 'bd',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e228da43-0b30-4ce4-b467-ce4b89452b4d',
    room: '430',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ne',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'da35707b-70fd-44f2-839c-92d8af9418cb',
    room: '713',
    task: 'RM',
    comments: 'Nunc purus.',
    receivedBy: 'reception',
    performedBy: 'ny',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e44cc199-a632-4c80-9a54-05a93da441d7',
    room: '033',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3e3757dd-994e-4a84-85e2-8fcbafea1129',
    room: '723',
    task: 'RA',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5093bb37-d677-4b11-b20b-9d20d3275224',
    room: '444',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd865242a-9785-4171-8aea-b26461863656',
    room: null,
    task: null,
    comments: 'Nulla mollis molestie lorem.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a7c7d58d-bf44-4fa3-8f79-470757aa8ad3',
    room: '419',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'fw',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b97b4642-3f5d-441d-a8e1-5610c20a1c95',
    room: '930',
    task: null,
    comments: 'Nunc nisl.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'edd59d8a-e745-42a5-b054-768a1761deb5',
    room: '079',
    task: 'RM',
    comments: 'Nulla facilisi.',
    receivedBy: 'guest',
    performedBy: 'ng',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ea9a46b1-1de3-4bf5-b05a-1c7f5ecab125',
    room: '460',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a2edad8a-abc4-4627-8ad4-c7b9fa85d937',
    room: '440',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'vg',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '62b99825-acf1-4a65-af77-7c0f7a96833b',
    room: '342',
    task: 'RM',
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: 'yf',
    receivedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4b5022cb-73df-4bf6-ad61-8b6a98a7d2b3',
    room: '585',
    task: 'RM',
    comments: 'Nunc nisl.',
    receivedBy: 'guest',
    performedBy: 'us',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bba802fd-64c1-493e-a155-f2ef2f934c03',
    room: '132',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ae',
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '01665d6c-7e2c-4262-a5a2-d50dafc8fd3c',
    room: null,
    task: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    receivedBy: 'reception',
    performedBy: 'na',
    receivedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fe758d20-0030-437c-8012-c57ad34ffb90',
    room: '572',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a106a124-be0d-4bc6-8f3a-9d524ef9becc',
    room: '213',
    task: 'RM',
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    receivedBy: 'guest',
    performedBy: 'kl',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '35b98679-f0cc-4400-a7c0-4393d2950ebb',
    room: '230',
    task: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd82799be-50d9-4141-9fef-9deda6378e7a',
    room: null,
    task: null,
    comments: 'Aenean fermentum.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '37d8359a-0a27-4ca2-b28e-651dcc2bf4df',
    room: '766',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'dt',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b30c547f-d88b-4a78-a8c2-23885dfa053d',
    room: '373',
    task: 'RA',
    comments: 'Aenean lectus.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cab34b2c-ecff-47dc-91a6-32fdadeece47',
    room: '788',
    task: 'RM',
    comments: 'Cras pellentesque volutpat dui.',
    receivedBy: 'guest',
    performedBy: 'jb',
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4f5e9980-0aca-4212-8471-56c491341be1',
    room: '215',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ej',
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b8f85ff7-7db0-4227-8302-56ef738020e2',
    room: '070',
    task: 'RA',
    comments: 'Donec vitae nisi.',
    receivedBy: 'reception',
    performedBy: 'nu',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '813156f3-57c4-4625-bcbc-9f688b239323',
    room: '314',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'pz',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '56b0dcdc-a918-4433-ae37-492e86971868',
    room: '252',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'un',
    receivedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b9fba921-64f2-499a-bffa-1ab3ccdc6a07',
    room: '622',
    task: 'RA',
    comments: 'Nulla nisl.',
    receivedBy: 'reception',
    performedBy: 'uu',
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8fe541fc-0e2a-4278-8566-3e4068c6dc12',
    room: null,
    task: 'RA',
    comments: 'Nunc rhoncus dui vel sem.',
    receivedBy: 'reception',
    performedBy: 'yk',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b88f4e59-7c05-4887-8295-2b7d34a5f0ac',
    room: '159',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fs',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c16f808b-290f-4b68-8965-85762d098223',
    room: '193',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'kg',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7727fdfc-f058-429e-ae07-0f4d175673f9',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ae68096e-e1a1-4aa6-bc2d-b73a4dca7d0c',
    room: null,
    task: 'RA',
    comments: 'Donec semper sapien a libero.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2f6d424b-e30c-4519-a9b8-510b24cc302f',
    room: '151',
    task: null,
    comments: 'Praesent blandit.',
    receivedBy: 'guest',
    performedBy: 'is',
    receivedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7dcb7128-6817-404b-8843-6b9186e37e50',
    room: null,
    task: null,
    comments: 'Nulla ac enim.',
    receivedBy: 'guest',
    performedBy: 'ah',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f41e4517-0ef3-443f-8f2b-9fb6ddc635b4',
    room: '298',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'hb',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c81d84e3-7f40-4ef8-9497-49dc5966b66d',
    room: '497',
    task: null,
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    receivedBy: 'guest',
    performedBy: 'ov',
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8a467f47-cf93-4f83-ab78-d368a4e3e3ed',
    room: '760',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'xh',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'aabe868c-3e21-4677-8eac-517579f2729e',
    room: '955',
    task: 'RM',
    comments: 'Pellentesque viverra pede ac diam.',
    receivedBy: 'guest',
    performedBy: 'qe',
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '89dca31c-adbd-4281-80e4-0986539aefd3',
    room: null,
    task: null,
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: 'im',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0148d169-0820-46b5-bfcf-d6947a3a8596',
    room: null,
    task: 'RA',
    comments: 'Mauris lacinia sapien quis libero.',
    receivedBy: 'reception',
    performedBy: 'vl',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '598ca947-d3a7-4df0-ab0e-baeefb5a323e',
    room: null,
    task: 'RM',
    comments:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    receivedBy: 'reception',
    performedBy: 'ob',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd1ae2242-0a97-4223-b523-d2a407476d25',
    room: '194',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bw',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f8640d65-e2be-4349-8aa4-cdf2af72dd74',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'rf',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '31db1fde-a083-495c-a0ac-b04b6144b5d5',
    room: '728',
    task: 'RA',
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    receivedBy: 'reception',
    performedBy: 'dz',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1c1d4e75-c33b-4988-a8ae-ef8d1832d060',
    room: '678',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'kk',
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ae256ad7-7c4e-4882-9fd6-2d826691aa04',
    room: '481',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9bc6681c-fcb5-42d4-9292-f15b68bfa384',
    room: '113',
    task: null,
    comments: 'Etiam faucibus cursus urna.',
    receivedBy: 'guest',
    performedBy: 'iw',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b63df37e-1f4e-40bc-879d-9365f8c7679c',
    room: '777',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vd',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '325a1c7d-1804-4afe-a7c2-470b0fc9fc77',
    room: '017',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'cu',
    receivedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f8d5c5d6-b018-4962-bd94-c0575a3f995c',
    room: '767',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ap',
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd5717efa-d9c4-4cb9-8755-dbd2ec04d33f',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ia',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3e7ecfbe-eed3-450a-85b4-832d91c2dab0',
    room: '679',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'qs',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cd9144a0-fc42-4207-8f2d-7a7bfec43d19',
    room: '993',
    task: null,
    comments:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    receivedBy: 'reception',
    performedBy: 'sz',
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '94d653d1-e250-47ef-9c61-13792bf141a6',
    room: '267',
    task: 'RM',
    comments: 'Mauris lacinia sapien quis libero.',
    receivedBy: 'guest',
    performedBy: 'yu',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3ba793f9-5603-4906-9452-33adcf65b7e7',
    room: '401',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'pu',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0b077884-ddea-40d4-b438-ae843c884f77',
    room: null,
    task: 'RM',
    comments: 'Nam dui.',
    receivedBy: 'reception',
    performedBy: 'bm',
    receivedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd173c746-9798-44e7-9fa0-6c88f64cfb0f',
    room: '674',
    task: 'RA',
    comments: 'Pellentesque eget nunc.',
    receivedBy: 'reception',
    performedBy: 'cr',
    receivedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd4fea7a1-dec9-4aa9-bf97-05541e892562',
    room: null,
    task: null,
    comments: 'Morbi non lectus.',
    receivedBy: 'guest',
    performedBy: 'os',
    receivedAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3beabe6d-a195-441c-9029-ef2d4c654983',
    room: '171',
    task: null,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    receivedBy: 'guest',
    performedBy: 'er',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '40de1917-cc0d-4c85-831c-de8783336c97',
    room: '709',
    task: 'RA',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'guest',
    performedBy: 'zc',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e00dceff-f6ef-4efe-8d2f-f42a5159b9e9',
    room: '471',
    task: 'RA',
    comments: 'Cras pellentesque volutpat dui.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b3aebcc9-8b97-4eb2-87e9-6ac0abcb6fec',
    room: '825',
    task: 'RA',
    comments: 'Morbi a ipsum.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f8efe26a-d968-489e-9dbb-adcc6bc34aa0',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'qt',
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '65dd0e28-b0c8-4c5a-bd99-029929dc20aa',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ek',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '817006b5-eeb1-4fee-9aed-99b1cc9cff79',
    room: '361',
    task: 'RA',
    comments: 'Maecenas tincidunt lacus at velit.',
    receivedBy: 'guest',
    performedBy: 'qi',
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '83ee3317-b684-4c21-affc-1b11608c27b9',
    room: '630',
    task: null,
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    receivedBy: 'guest',
    performedBy: 'yj',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1c5f73db-c289-43e2-a635-07e5bb7e9cc3',
    room: '518',
    task: null,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'reception',
    performedBy: 'qc',
    receivedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8a9f3076-6cdb-49de-b1d6-b12e89fea7e4',
    room: null,
    task: 'RA',
    comments: 'Donec semper sapien a libero.',
    receivedBy: 'guest',
    performedBy: 'sj',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '880a5743-f04b-4a7d-96f5-d7d0e3564776',
    room: '585',
    task: 'RM',
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    receivedBy: 'guest',
    performedBy: 'hz',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c1672edd-382d-4f0b-97f7-1051cd63b492',
    room: '597',
    task: 'RA',
    comments: 'Nunc purus.',
    receivedBy: 'guest',
    performedBy: 'un',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '15edf89a-c3a1-4499-ad9a-9981a67ce6f8',
    room: '401',
    task: 'RM',
    comments:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    receivedBy: 'reception',
    performedBy: 'gs',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bd72ae67-acdb-4e08-8198-bc09f0ef562c',
    room: '386',
    task: 'RA',
    comments: 'Morbi a ipsum.',
    receivedBy: 'reception',
    performedBy: 'wt',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a536ecc7-c6cf-478a-a059-5ce80851bf5e',
    room: '056',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'pz',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '94ecd6f4-0c9e-49b7-acd1-3b90cc290e0c',
    room: '638',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bg',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e099ff7f-08b0-4dd6-9cad-46fd3ffafa0b',
    room: '281',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vs',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '75b5a190-0938-4b82-b1f5-aeaed6f5486f',
    room: '579',
    task: null,
    comments: 'Donec ut dolor.',
    receivedBy: 'reception',
    performedBy: 'tq',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '01261740-ae0c-44fb-9f39-2e796d46d6a1',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'jb',
    receivedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd00b3844-aa78-4473-8e9c-6d4141e983b5',
    room: '389',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'xi',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5c3542c5-fa16-4ec9-83f3-e6dcefeab880',
    room: '293',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'debbaca5-9abb-4bbd-bb52-046e6a1c1ebe',
    room: '474',
    task: null,
    comments: 'Ut at dolor quis odio consequat varius.',
    receivedBy: 'guest',
    performedBy: 'ql',
    receivedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '819c3251-4446-41bb-87b5-86d6801f3d28',
    room: '717',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'zp',
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '56d56a2e-ddb2-494b-a790-bd299b6b4c2d',
    room: '384',
    task: 'RA',
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    receivedBy: 'guest',
    performedBy: 'cn',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'aa3ccff6-729d-465d-a4e6-c3b4f19a9c53',
    room: '722',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rw',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c7bb0d2d-5700-48c4-b0bb-fa0c9984f2cc',
    room: '408',
    task: 'RM',
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd1de20a0-fc7f-481e-b8ef-58148d00bf30',
    room: '160',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'dc',
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a538355f-eb0c-4d95-b05f-45c9d44724a9',
    room: '650',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ou',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1c739f57-face-46fb-83ab-45004f2d4f53',
    room: '830',
    task: null,
    comments: 'Donec ut mauris eget massa tempor convallis.',
    receivedBy: 'guest',
    performedBy: 'jx',
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '047b0c4a-0a33-4a50-8caa-7413927ecdc3',
    room: '161',
    task: null,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'reception',
    performedBy: 'he',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '27a1ecc9-a095-403f-8cda-d46c17b0a497',
    room: '073',
    task: null,
    comments: 'Integer ac neque.',
    receivedBy: 'guest',
    performedBy: 'az',
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '54a0915f-8b24-45d6-a7e2-91394764b5fc',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'cm',
    receivedAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'de82d4f7-60d7-475c-b7fa-6dfef210d74d',
    room: '963',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'rw',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5e215e7c-0047-46fd-bf3d-376b3a4f9431',
    room: '763',
    task: null,
    comments: 'Etiam vel augue.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e0bf689e-f3cb-434a-ab6f-c7fc0e8be1ad',
    room: '663',
    task: 'RM',
    comments: 'Nulla ac enim.',
    receivedBy: 'reception',
    performedBy: 'hi',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4585042e-3ab1-4fed-8221-c2230e573604',
    room: '755',
    task: null,
    comments: 'Maecenas rhoncus aliquam lacus.',
    receivedBy: 'guest',
    performedBy: 'rz',
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '282f9d20-662b-41d0-a4b7-219acf2fb84f',
    room: '147',
    task: 'RA',
    comments: 'Duis ac nibh.',
    receivedBy: 'reception',
    performedBy: 'iw',
    receivedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5df7d90b-836c-4522-bac3-fb2614b53ba6',
    room: '175',
    task: 'RA',
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    receivedBy: 'guest',
    performedBy: 'xy',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f48676c1-0cee-4724-a884-ddaaaae7e873',
    room: '217',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'on',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2205ce1a-0245-4990-a889-27f9f75a9d69',
    room: '500',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'up',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b3598a83-be27-43a5-a7eb-aed7ec847279',
    room: '638',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'wm',
    receivedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7c9bca66-73cc-4f2d-aa51-1f542260afa7',
    room: '674',
    task: 'RM',
    comments: 'Donec ut mauris eget massa tempor convallis.',
    receivedBy: 'guest',
    performedBy: 'mn',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c9693c27-0bb8-4c15-836c-191e3a06e86f',
    room: '849',
    task: 'RM',
    comments: 'Praesent blandit lacinia erat.',
    receivedBy: 'guest',
    performedBy: 'le',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '24d2792a-8847-4e14-9f19-5af80f56b90c',
    room: '765',
    task: null,
    comments: 'Nulla mollis molestie lorem.',
    receivedBy: 'guest',
    performedBy: 'is',
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a9d6a1a4-2347-407e-b93e-b5fc210449af',
    room: '513',
    task: 'RA',
    comments: 'Nulla nisl.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1225296e-28a1-4cab-b95a-8b1046d1ce79',
    room: '440',
    task: 'RM',
    comments: 'Sed accumsan felis.',
    receivedBy: 'reception',
    performedBy: 'xr',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8d101b25-2d3a-42e1-a2eb-1c8ef67cd458',
    room: '473',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bm',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c7b7223f-635c-4e7d-8774-26bd13b9d8ee',
    room: '483',
    task: 'RA',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    receivedBy: 'guest',
    performedBy: 'ej',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '73ebd98e-55a4-429f-bcd6-ec0c4d9d38ff',
    room: '602',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'pi',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6872d15c-aaeb-4549-9b43-fd491762318d',
    room: '919',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'lj',
    receivedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '814fd011-214f-47c2-9e21-a51ae4e008c8',
    room: '120',
    task: 'RA',
    comments: 'Integer tincidunt ante vel ipsum.',
    receivedBy: 'guest',
    performedBy: 'ch',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fe242a6d-468f-4a04-9dfb-6710ab22b11f',
    room: '082',
    task: 'RM',
    comments:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '57381157-a0aa-4e96-ab7f-29f75bd715fa',
    room: '751',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'te',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b1ee81fc-2846-40a9-9744-439039c4dfb5',
    room: '577',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a84f8240-a2ee-4da6-9bc2-cb151d250227',
    room: '479',
    task: null,
    comments: 'Etiam pretium iaculis justo.',
    receivedBy: 'reception',
    performedBy: 'fi',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '682a4e8f-ac31-4af8-84fa-ea4fc3e8e5e7',
    room: '228',
    task: 'RM',
    comments: 'Sed vel enim sit amet nunc viverra dapibus.',
    receivedBy: 'guest',
    performedBy: 'kf',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1bb8083d-402c-4266-87b4-c428f8059968',
    room: '322',
    task: null,
    comments: 'Etiam vel augue.',
    receivedBy: 'reception',
    performedBy: 'wz',
    receivedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '55522af8-4293-450e-b855-2e54c30a9187',
    room: null,
    task: 'RA',
    comments: 'Pellentesque viverra pede ac diam.',
    receivedBy: 'guest',
    performedBy: 'yt',
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '49be160a-e033-4eb5-8b9c-a05edfb8942e',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'tu',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'abfb05f9-4009-4ba0-8e41-c2ef9efb5662',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'kh',
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f26e3c66-3b6c-4be1-b800-19c55d46894e',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'rh',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '468a1f5b-4d8b-4fd8-87d9-92b60e8e7dfa',
    room: '869',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f65c4ce0-966d-4d09-a58f-e2618939b7f2',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'zg',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '37875aa0-1425-4af7-9525-35347ab52812',
    room: '500',
    task: 'RA',
    comments: 'Sed sagittis.',
    receivedBy: 'reception',
    performedBy: 'ha',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '65cb246a-1e99-477a-8ca6-91ac03d61b74',
    room: '307',
    task: 'RM',
    comments: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    receivedBy: 'reception',
    performedBy: 'mu',
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b6e6d77c-b2cf-4eec-b162-954494365840',
    room: '376',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'zt',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7ad1ceb4-f887-41fe-9626-428ae076c628',
    room: '613',
    task: 'RA',
    comments: 'Etiam justo.',
    receivedBy: 'reception',
    performedBy: 'rd',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7fbfe3e3-23fe-41dd-aaec-d44f2950b495',
    room: '687',
    task: 'RM',
    comments: 'Phasellus in felis.',
    receivedBy: 'reception',
    performedBy: 'qj',
    receivedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '450020b3-8280-4279-8310-9aa0c7625002',
    room: '264',
    task: 'RM',
    comments: 'Quisque ut erat.',
    receivedBy: 'guest',
    performedBy: 'zx',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b2663de7-84b9-4ffd-a5e7-26213606e0c5',
    room: '056',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'lx',
    receivedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1a5f47d2-1db5-4a18-908e-cd75cfd473a3',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'wl',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'da8cb4a4-d97f-4707-b86e-b4a18d007993',
    room: null,
    task: null,
    comments: 'Integer tincidunt ante vel ipsum.',
    receivedBy: 'reception',
    performedBy: 'xb',
    receivedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9bc7a3d1-9a70-4d97-951b-69bc969da73a',
    room: '914',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ut',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7750612c-7cc7-4e57-97be-46270b5d3d2b',
    room: '981',
    task: null,
    comments: 'Morbi vel lectus in quam fringilla rhoncus.',
    receivedBy: 'guest',
    performedBy: 'rt',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '435d2962-e496-40c3-a1ab-6a8f2c1741a3',
    room: '981',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '88f1ac19-87bc-4b9e-8800-eabdd2c5bc67',
    room: '356',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7ea44202-759b-499c-8ab4-bd016069d9af',
    room: '274',
    task: 'RA',
    comments:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    receivedBy: 'guest',
    performedBy: 'ug',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c6f1af4b-02b2-443f-b0f2-3ae6195e7acd',
    room: '119',
    task: 'RM',
    comments: 'Morbi porttitor lorem id ligula.',
    receivedBy: 'reception',
    performedBy: 'ae',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '25e1cd75-47ec-40d9-aa76-211c63e9649f',
    room: '412',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '37b8d46a-7e62-4add-b5fa-5146fb31f7c8',
    room: '962',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'gm',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ce7d318a-f682-434d-b8b2-391e0e806f74',
    room: '440',
    task: 'RA',
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    receivedBy: 'reception',
    performedBy: 'jh',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a3058009-b5ef-4f30-bfd8-5a8f059afdc2',
    room: '378',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'vx',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'eb32e6c3-b725-4950-8407-16b96371e842',
    room: '052',
    task: 'RA',
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    receivedBy: 'guest',
    performedBy: 'wd',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3c6dc12a-1b6d-478a-a26b-f92f404db71f',
    room: null,
    task: null,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    receivedBy: 'guest',
    performedBy: 'gy',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e535e864-86d7-4d7b-8338-96dc47900fbb',
    room: '141',
    task: 'RA',
    comments: 'Etiam faucibus cursus urna.',
    receivedBy: 'reception',
    performedBy: 'us',
    receivedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8e22942e-4579-4ca8-94d2-f27ddf17ad60',
    room: '743',
    task: 'RM',
    comments: 'Praesent blandit.',
    receivedBy: 'guest',
    performedBy: 'xv',
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '17a3f592-f62e-44f7-9688-ea046e26098d',
    room: '316',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'jg',
    receivedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '363f68be-a276-4d23-a6e7-7ddc76738373',
    room: '951',
    task: 'RM',
    comments: 'Nunc purus.',
    receivedBy: 'reception',
    performedBy: 'xx',
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6979396b-6e0e-440e-a21b-b2cbd5141cde',
    room: '896',
    task: 'RA',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'guest',
    performedBy: 'hw',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '47905c0f-426a-4bd9-8dc2-d56cb2fa153e',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'lu',
    receivedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd75d3864-bd98-4e7c-8636-939537cac50d',
    room: null,
    task: null,
    comments: 'Nam nulla.',
    receivedBy: 'reception',
    performedBy: 'bu',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0836fa08-077c-469f-8326-f6ae9ad174a6',
    room: '765',
    task: 'RM',
    comments: 'Cras non velit nec nisi vulputate nonummy.',
    receivedBy: 'reception',
    performedBy: 'ox',
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1c7cc7cf-5524-4a10-adc1-e39643f9af20',
    room: '304',
    task: 'RM',
    comments: 'Pellentesque ultrices mattis odio.',
    receivedBy: 'reception',
    performedBy: 'jw',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '845fc836-8756-445e-b19d-59f359cc13a9',
    room: null,
    task: 'RM',
    comments: 'Morbi porttitor lorem id ligula.',
    receivedBy: 'guest',
    performedBy: 'wl',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f6f7b43d-4dc3-4347-a49d-5c1bf3125c61',
    room: '733',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ns',
    receivedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ed5451cc-6ade-457b-8bda-b39fb489e968',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ro',
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'df939045-a90b-435a-b5ef-e59f06bffe17',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'zq',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c65c1a8d-2291-4dbc-9d8e-2cb98547058b',
    room: '477',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'uw',
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0be5065e-8b9b-459e-bc3b-4498a0478240',
    room: '822',
    task: 'RM',
    comments: 'Ut at dolor quis odio consequat varius.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '05f6dcc3-b5b5-4a1e-a051-15c21274f9ad',
    room: '476',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'rw',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '516f07f5-9ed6-4eb7-9ea1-c22920bcbe3d',
    room: '741',
    task: 'RM',
    comments: 'Nulla mollis molestie lorem.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6052f2c6-5447-4247-889d-f2228cf98943',
    room: '091',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'qb',
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '53c36463-69d3-440e-aec7-699ae8388b01',
    room: '793',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'pn',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2f48b2b8-0f76-456c-b50a-9ed7deee63a4',
    room: '162',
    task: 'RM',
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '38027677-a467-43dd-bdac-899782261077',
    room: '348',
    task: 'RM',
    comments: 'Etiam vel augue.',
    receivedBy: 'guest',
    performedBy: 'sn',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2540c5ab-c4a6-4078-89f7-5984c231aaaa',
    room: '225',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ii',
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '88d84d1a-fca6-4731-ab0f-cd8bb4aae80e',
    room: '494',
    task: 'RA',
    comments: 'Sed sagittis.',
    receivedBy: 'reception',
    performedBy: 'ae',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '88712018-a85e-4377-a76d-f20da222d178',
    room: '089',
    task: 'RA',
    comments: 'Sed ante.',
    receivedBy: 'guest',
    performedBy: 'lc',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ed5adb5d-e339-4a9c-a7f1-2216176f5687',
    room: '548',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bx',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '06873982-6a28-4005-896e-87a93f761be7',
    room: '089',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hg',
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '29f8e8df-3f62-4f74-bb73-8a6b1a93ae91',
    room: '043',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'wo',
    receivedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0aa0d5bb-467f-4a0a-b428-ca51fe2b267c',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'uf',
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e92efc3a-ff65-4e73-bac0-d65d71b6aaad',
    room: '641',
    task: 'RA',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'reception',
    performedBy: 'ns',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '971d44e5-fd59-48d3-94cd-1b4a2dba6792',
    room: '493',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ao',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8dc8d822-7186-46e4-a519-c46321c4949d',
    room: '361',
    task: 'RM',
    comments: 'Phasellus sit amet erat.',
    receivedBy: 'reception',
    performedBy: 'pb',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '421d850c-3c65-4146-8a1d-bbcb2a36f1cb',
    room: '687',
    task: null,
    comments: 'Praesent lectus.',
    receivedBy: 'reception',
    performedBy: 'su',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e4e8a8f0-1b7f-484b-bd57-45b68fd4963d',
    room: '677',
    task: 'RM',
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    receivedBy: 'guest',
    performedBy: 'wy',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ec2a4c9d-75bb-48cc-9826-9b9b7e91efab',
    room: '255',
    task: 'RA',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    receivedBy: 'guest',
    performedBy: 're',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '23e2f8c9-a4ae-4254-b86d-8f169a27f41d',
    room: '811',
    task: 'RA',
    comments: 'Vestibulum sed magna at nunc commodo placerat.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9675e017-ac30-4439-8f23-6d3feeb105b4',
    room: '870',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'cf',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6ee2918a-eeb2-4dcd-a0ad-6a72e96e158b',
    room: '393',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cad49e5e-d34c-4238-94a0-9ffa0b777b66',
    room: '307',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dc',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c8fe7cf6-d19f-4cf4-8de4-dabd2df8d874',
    room: '703',
    task: 'RA',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'guest',
    performedBy: 'bd',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'edfd497f-3d48-46f0-923f-21cd6acd3233',
    room: '072',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6f74927c-ab2a-41f1-8516-646dc644d909',
    room: '356',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'kl',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '562a1415-54ae-4c97-b03d-c1c46e1f36aa',
    room: '059',
    task: 'RM',
    comments: 'Donec posuere metus vitae ipsum.',
    receivedBy: 'guest',
    performedBy: 'kc',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9f2c7956-31d6-4f44-93d7-b1d1f271ee89',
    room: '169',
    task: 'RA',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    receivedBy: 'reception',
    performedBy: 'ge',
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ca4176b0-0198-481d-9f46-2cebd1494017',
    room: '751',
    task: null,
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'reception',
    performedBy: 'kh',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '63fefef2-1834-4bd8-8119-8c0802bbde77',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'yc',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8828deab-f728-4b37-a216-acb3829a886f',
    room: '560',
    task: 'RA',
    comments: 'Vestibulum rutrum rutrum neque.',
    receivedBy: 'reception',
    performedBy: 'sv',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6e11b994-0078-4b7d-9d00-f18858f518ee',
    room: '877',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vt',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1111cb85-bee8-4810-b57d-3c2bd19eae0d',
    room: '265',
    task: 'RA',
    comments: 'Integer non velit.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd4b70c75-e806-49de-91cf-780e85b1b759',
    room: '989',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'wq',
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '337e3db7-3642-4302-b869-18ed5b315edc',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'sa',
    receivedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '440fb551-042f-482a-aba1-01dfa9fa0d6b',
    room: '246',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '664bd6b6-cfdb-4040-8c45-9c7cfb453e32',
    room: '987',
    task: 'RA',
    comments: 'Proin eu mi.',
    receivedBy: 'guest',
    performedBy: 'bu',
    receivedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ea1682c3-60bd-45e1-b495-f7a9d73f963a',
    room: '654',
    task: 'RM',
    comments: 'Ut at dolor quis odio consequat varius.',
    receivedBy: 'reception',
    performedBy: 'jp',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '49f59f53-f19f-477a-ad35-41d63b084b57',
    room: '774',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'zs',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6db2e7c2-7fe8-4b4a-93f8-220d55943090',
    room: '923',
    task: 'RM',
    comments: 'Ut at dolor quis odio consequat varius.',
    receivedBy: 'reception',
    performedBy: 'ek',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '26b89af3-2aaf-4a77-8507-a3c0fbd7b706',
    room: '710',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e9478692-5dcc-420a-a59d-a0ca64434f7e',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bw',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5eceabe8-a4e1-421c-9cbf-ba44630a4afa',
    room: null,
    task: 'RM',
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    receivedBy: 'reception',
    performedBy: 'mk',
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6c3b44ae-aa45-44fe-a687-b0b67f25003d',
    room: '096',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hj',
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7196ccf2-6437-434b-bae2-be89e1a0eef3',
    room: '368',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'nn',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b90c7e2b-da70-4e62-a716-18dd28a2e5a8',
    room: '285',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fm',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd77e1253-f3e6-4ea3-98b3-8e8a16041514',
    room: '378',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '70a19b54-1ad8-4559-a8ea-20d03dff38ae',
    room: '389',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'qy',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6ea2f00f-3fb3-4642-8c6e-03ad7b4f5e50',
    room: '012',
    task: 'RA',
    comments: 'Nulla nisl.',
    receivedBy: 'reception',
    performedBy: 'bf',
    receivedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fe224fe7-5c73-47ce-b7cc-388a1b1425e8',
    room: '941',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'pv',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0a040e04-b3d6-4261-b331-60e51db34df7',
    room: '771',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'id',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '988ebdbe-8c33-4176-ae44-0da1d2d40e0d',
    room: '043',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'xo',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '22e365ba-2b2a-40b8-8e56-35418f370bae',
    room: '964',
    task: 'RM',
    comments: 'Etiam pretium iaculis justo.',
    receivedBy: 'guest',
    performedBy: 'vi',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '29440d45-05a0-4da1-a2a4-48e2b273daea',
    room: '504',
    task: 'RA',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    receivedBy: 'reception',
    performedBy: 'wn',
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a957ffc9-b08d-4aa1-a9b4-c995551cc212',
    room: '870',
    task: 'RM',
    comments: 'Pellentesque at nulla.',
    receivedBy: 'reception',
    performedBy: 'km',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd3ea909c-24fe-4be1-b9bf-1c65a5508238',
    room: '708',
    task: 'RA',
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    receivedBy: 'reception',
    performedBy: 'fk',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4752b01f-c6d5-480f-a9e4-68e8f00972fb',
    room: '969',
    task: null,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'db05a453-7bde-4555-b9f3-e7786ee678d7',
    room: '070',
    task: null,
    comments: 'Donec ut dolor.',
    receivedBy: 'guest',
    performedBy: 'jw',
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '67cdde61-b3cb-466e-bb3e-18167aabcffb',
    room: '965',
    task: 'RA',
    comments: 'Aliquam non mauris.',
    receivedBy: 'reception',
    performedBy: 'xy',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5df58a48-0489-4029-a7ab-609099d4240a',
    room: null,
    task: null,
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    receivedBy: 'reception',
    performedBy: 'iu',
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ae272312-a05a-4dc5-98a4-e6c3a7cec928',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'cg',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '82c10582-0e25-42cb-8eb9-9c9661cb1f61',
    room: '135',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'nr',
    receivedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e6129fc1-4a67-4f21-9673-3a4bc3dfbbec',
    room: '669',
    task: null,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    receivedBy: 'reception',
    performedBy: 'ns',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fce6f133-ffdc-4e64-8dc2-c2b7f683655d',
    room: '059',
    task: 'RM',
    comments: 'In hac habitasse platea dictumst.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '18c1b797-df75-49fc-b432-d4c18bbdd087',
    room: '328',
    task: 'RA',
    comments: 'Integer ac leo.',
    receivedBy: 'guest',
    performedBy: 'dd',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7763fb76-4bc7-4111-a002-ac16ed515ee1',
    room: '297',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'vg',
    receivedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3a997093-998e-4c99-b746-55d5f676eb9f',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'eu',
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'af626ccb-a3d9-44b4-a26d-bae4a96f2c2c',
    room: '858',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'lk',
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ca181072-44bf-4ad8-84fc-878ad6706558',
    room: '114',
    task: null,
    comments: 'Nulla mollis molestie lorem.',
    receivedBy: 'reception',
    performedBy: 'vb',
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5965eb3c-dae5-45c5-a623-bc5e37738607',
    room: null,
    task: 'RM',
    comments: 'Nulla ut erat id mauris vulputate elementum.',
    receivedBy: 'reception',
    performedBy: 'qz',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'decd1c7c-1738-41fc-96c0-56adef52c31a',
    room: '427',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9cc1426e-d37e-4cac-bf84-5ae11dcbb7ca',
    room: '887',
    task: 'RA',
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    receivedBy: 'reception',
    performedBy: 'lr',
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bafdac4b-c730-4f3e-bf9c-d580d08b1a70',
    room: null,
    task: 'RA',
    comments: 'Sed sagittis.',
    receivedBy: 'guest',
    performedBy: 'tw',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '71f5f161-a755-4cd9-8e97-30f059a41586',
    room: '358',
    task: 'RA',
    comments: 'Donec ut mauris eget massa tempor convallis.',
    receivedBy: 'guest',
    performedBy: 'cx',
    receivedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0356ab2d-540f-4a75-bb67-9ac877887ba0',
    room: '622',
    task: null,
    comments: 'Nulla facilisi.',
    receivedBy: 'guest',
    performedBy: 'dr',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0aac5b12-f6a7-4d0c-a0ab-b73f7f87d765',
    room: '159',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1ff0f26b-3ff1-4799-ac2c-f09dbdcc9811',
    room: '946',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'sv',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6d0675cd-ce3c-441b-96ce-7cf2694e1519',
    room: '142',
    task: 'RA',
    comments: 'Duis mattis egestas metus.',
    receivedBy: 'reception',
    performedBy: 'jy',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a204c0d3-410c-4a71-9e6b-117456bde090',
    room: '071',
    task: 'RM',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    receivedBy: 'reception',
    performedBy: 'hl',
    receivedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '937832bd-e950-423e-b129-f8a6b91a88d5',
    room: '623',
    task: 'RM',
    comments: 'Nulla facilisi.',
    receivedBy: 'guest',
    performedBy: 'pq',
    receivedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '230752c2-5382-478f-817f-c1187509693c',
    room: '336',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vj',
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '02db23af-b30a-4520-b6f4-f507e99cf40e',
    room: '908',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fg',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '36e6f6c5-37b8-4090-9a57-5db3663813ff',
    room: null,
    task: 'RA',
    comments: 'Ut tellus.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '78a63047-b7b4-408e-98c5-4979e6e2bd1b',
    room: null,
    task: 'RA',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '25257572-4e84-4953-9a02-df37b2ff9ec4',
    room: '564',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'pn',
    receivedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '625ee11a-1341-48d3-a90b-869ec3332781',
    room: '584',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3f323c9f-1a8e-4cf0-a21b-a5c26e82b48d',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ff1e34a7-3ad6-4195-a6b2-3883407d19d8',
    room: null,
    task: 'RM',
    comments: 'In congue.',
    receivedBy: 'reception',
    performedBy: 'jg',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4b27c645-1d1a-49fd-8b7e-ac7fb68e2d5a',
    room: null,
    task: 'RA',
    comments: 'Praesent lectus.',
    receivedBy: 'reception',
    performedBy: 'cm',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1ac407cb-46a9-41ba-9d73-d08e214bf38a',
    room: '433',
    task: 'RA',
    comments: 'Etiam vel augue.',
    receivedBy: 'guest',
    performedBy: 'xc',
    receivedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '36574112-bad3-4948-95dc-28d1f22b2fc1',
    room: '964',
    task: 'RA',
    comments: 'Duis mattis egestas metus.',
    receivedBy: 'reception',
    performedBy: 'ep',
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ea588e8a-ac8a-44cd-95bf-77c890cf644c',
    room: '586',
    task: 'RA',
    comments: 'Ut at dolor quis odio consequat varius.',
    receivedBy: 'reception',
    performedBy: 'ka',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0bc9a185-3b9f-4058-bec1-5ce246af7839',
    room: '575',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1bf82088-575c-4dde-86b3-db608ad9cd4f',
    room: '074',
    task: 'RM',
    comments: 'Fusce posuere felis sed lacus.',
    receivedBy: 'guest',
    performedBy: 'vq',
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '00803e08-27ce-4a31-8cc7-d7f4e66c76a5',
    room: '667',
    task: null,
    comments: 'Ut tellus.',
    receivedBy: 'reception',
    performedBy: 'cg',
    receivedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2ae5dff6-0387-44bf-b8a0-cc5ed19acd5c',
    room: null,
    task: null,
    comments: 'Donec semper sapien a libero.',
    receivedBy: 'reception',
    performedBy: 'iu',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9f13bece-78ed-4267-9e7b-e8af2c98c8c2',
    room: '697',
    task: 'RA',
    comments: 'Donec dapibus.',
    receivedBy: 'reception',
    performedBy: 'ga',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4db1dc53-c49d-4dd0-bc54-e69611954ce8',
    room: '137',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'as',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3ec29bd0-1ff8-4635-8bf4-e484e15a562c',
    room: null,
    task: 'RA',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    receivedBy: 'guest',
    performedBy: 'sl',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4c052f46-406e-427f-8c96-ce9eab9c8e4b',
    room: '138',
    task: null,
    comments: 'Aliquam erat volutpat.',
    receivedBy: 'guest',
    performedBy: 're',
    receivedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '65866938-06b1-4412-986f-6284ea4d5fd6',
    room: '066',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'cd',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '076f6c65-25e0-4cfb-abfe-d4a820279b5a',
    room: '325',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ca',
    receivedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '055a32b8-04c1-4526-8288-83acbce6b895',
    room: '841',
    task: 'RM',
    comments: 'Fusce consequat.',
    receivedBy: 'guest',
    performedBy: 'wu',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bb490f02-06bd-46d0-995d-44a20cf92a8d',
    room: null,
    task: 'RM',
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: 'en',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '987125dc-d9e7-4233-a510-25812c7bd150',
    room: '195',
    task: 'RM',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'guest',
    performedBy: 'ks',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '534d7595-f4da-4ffe-a31b-58363b84d97c',
    room: '237',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'nz',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5c57a7b7-b189-4666-82ba-4b85d4eb36d7',
    room: '978',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'sz',
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '29b0dbf6-8e83-4087-95a7-cc4798877d30',
    room: '897',
    task: null,
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e9e3efb8-4a06-43fb-997b-af11dfcff1f0',
    room: '355',
    task: 'RA',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    receivedBy: 'reception',
    performedBy: 'oc',
    receivedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '486768b6-364d-4d0e-b747-f1878946c3b7',
    room: '126',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hy',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ec1e7a52-6d89-496d-9c09-85af8447771e',
    room: '260',
    task: 'RA',
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    receivedBy: 'guest',
    performedBy: 'ea',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c967556c-8679-44f8-a033-34a34fa5acf0',
    room: '119',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'kl',
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bfa81bef-4916-4d3a-8630-d3508b4a5e30',
    room: '344',
    task: 'RM',
    comments: 'Praesent blandit lacinia erat.',
    receivedBy: 'guest',
    performedBy: 'ti',
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '823a6751-75a9-4dd1-a0c9-262eaa52d257',
    room: '385',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dv',
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/12/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fcf98b27-1db2-4727-b752-c7d5e67246e4',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'as',
    receivedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2f40f943-1471-4dc4-9a44-9ff786b9a014',
    room: '705',
    task: 'RA',
    comments:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    receivedBy: 'guest',
    performedBy: 'ea',
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '19269146-8cbf-4033-88fc-b77c5f6e4956',
    room: '111',
    task: 'RM',
    comments: 'Morbi ut odio.',
    receivedBy: 'reception',
    performedBy: 'an',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c9fa74b9-2f9d-4fd4-9e41-f3e3fc40a540',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'om',
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '851954a3-6c7c-4667-836d-4ebadd32dc44',
    room: '073',
    task: 'RA',
    comments: 'Fusce consequat.',
    receivedBy: 'guest',
    performedBy: 'tb',
    receivedAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '53317538-844e-4c4b-9446-f79bad98e29d',
    room: null,
    task: 'RM',
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    receivedBy: 'reception',
    performedBy: 'tf',
    receivedAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '119d0e76-70ef-486a-bfdc-ba57f196a391',
    room: '015',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hj',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '30210151-c9e9-47b0-b469-148307cec6e3',
    room: null,
    task: null,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    receivedBy: 'guest',
    performedBy: 'ik',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c58504c6-6a66-494c-802f-92f2ea9407dd',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'zz',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd7e7dc17-0cda-4ef7-b320-d7e91125dd41',
    room: '558',
    task: null,
    comments: 'Morbi a ipsum.',
    receivedBy: 'guest',
    performedBy: 'ue',
    receivedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '31c660ba-8a47-4eec-b99c-542068a2685b',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'fw',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd0500fb9-8e87-4b94-bf27-8b86aef915f2',
    room: '287',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'vc',
    receivedAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '136f1863-bce9-47c7-a242-057ba442b14f',
    room: '086',
    task: null,
    comments: 'Proin risus.',
    receivedBy: 'reception',
    performedBy: 'ix',
    receivedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5a34cef1-bfe4-4deb-9c7e-87f80a2b6945',
    room: '322',
    task: 'RM',
    comments: 'Duis bibendum.',
    receivedBy: 'guest',
    performedBy: 'hq',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '294179b6-ab6e-4a03-91f9-762c354e78b1',
    room: null,
    task: 'RM',
    comments: 'In quis justo.',
    receivedBy: 'guest',
    performedBy: 're',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '78a7a965-1b95-4bc4-a29d-b151b20463e7',
    room: '509',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'jv',
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2adcf94a-32c6-4c3b-acb9-2cc7107b29f8',
    room: '416',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ep',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4a2d377e-05b0-4cd4-a559-2a7064ebb606',
    room: '741',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '450fb764-4f0d-4b08-86b7-bdfe899a87eb',
    room: null,
    task: 'RM',
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    receivedBy: 'guest',
    performedBy: 'uv',
    receivedAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0efa1026-0ab1-4242-98dd-0c72647061a7',
    room: '382',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'nx',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fd02ef73-016e-4553-ad35-0285872c8529',
    room: '494',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f498d858-3945-4605-8c65-18c8bc1cb562',
    room: '555',
    task: 'RM',
    comments: 'Praesent blandit.',
    receivedBy: 'reception',
    performedBy: 'nm',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6261c7fe-7c58-4e0c-8324-ae6e11fd2680',
    room: '477',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ba',
    receivedAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '55759a1e-33fb-422e-97b1-030d90c48e6d',
    room: '331',
    task: null,
    comments: 'Nunc purus.',
    receivedBy: 'reception',
    performedBy: 'ec',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '345005a3-c387-4af8-96f6-308be17923f5',
    room: null,
    task: 'RM',
    comments: 'Curabitur convallis.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6ac82d6c-bfae-43c1-a028-7a0c1e374eae',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'iw',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2c2b1ea9-67f0-4c83-acff-2b317ab07897',
    room: '934',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'jt',
    receivedAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '25583877-9bdb-4d4d-be28-e69caeb32d03',
    room: '253',
    task: null,
    comments:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    receivedBy: 'guest',
    performedBy: 'pi',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '912ab38a-034a-462f-9234-344a9bcabb45',
    room: '143',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'xh',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd1531951-299b-48bf-afc5-853d8d2535b1',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'el',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f1bbdc71-5429-4f8a-8b78-c08843d11921',
    room: null,
    task: null,
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    receivedBy: 'guest',
    performedBy: 'wy',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '11373c2b-77e5-41a1-95e7-cc8f2e3bdf68',
    room: '337',
    task: null,
    comments:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    receivedBy: 'reception',
    performedBy: 'dm',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8b990629-7c23-463b-bf07-8b007b7b9919',
    room: '382',
    task: null,
    comments:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    receivedBy: 'guest',
    performedBy: 'wu',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f334fe58-abd2-44b2-8e74-167ecdc5ebef',
    room: '611',
    task: 'RA',
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    receivedBy: 'reception',
    performedBy: 'ka',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f68ec2a8-655a-460a-b812-f00ae0d5a70f',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'mz',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6424897c-5244-4c8e-bdd3-2b01c715a103',
    room: '066',
    task: null,
    comments: 'Nulla mollis molestie lorem.',
    receivedBy: 'guest',
    performedBy: 've',
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '44dc8929-4944-43b7-899e-48d24508d9aa',
    room: '865',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'rd',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ef40101d-32c1-4522-be42-328cbe0d4d1d',
    room: '266',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'fq',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '30da7d4b-0453-4c6a-a2e6-5a59226536ce',
    room: '924',
    task: 'RA',
    comments: 'Pellentesque eget nunc.',
    receivedBy: 'reception',
    performedBy: 'il',
    receivedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fa94900d-c602-4055-b1c4-adc546290643',
    room: '465',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ei',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a8c7243a-2f6b-40be-a3fa-8eba4dd5c1b0',
    room: '416',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fp',
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2c2b7dba-20f1-42ea-8f0e-0e42ec4b7be1',
    room: '205',
    task: 'RA',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    receivedBy: 'guest',
    performedBy: 'ld',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0c1200d6-dc04-4cb3-9964-b4274792a8ef',
    room: '083',
    task: 'RA',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    receivedBy: 'reception',
    performedBy: 'lh',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '19b129fe-8003-493f-8c1e-54e239b7a052',
    room: '437',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'jw',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'da533016-4a35-4b78-829d-8281332e3616',
    room: '618',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'yb',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '310de9f5-94a8-40bc-806b-9c366e9a630e',
    room: '282',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'id',
    receivedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'afe3f395-16d0-4476-8b07-6a024db7b975',
    room: '653',
    task: null,
    comments: 'Phasellus in felis.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '84327c3f-e6b1-42fd-b1b4-66f5b33fc600',
    room: '431',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'lr',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7c7c038c-ae0f-485c-9611-7ca0ed1fb1f2',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ak',
    receivedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2b409946-c5fe-4247-9129-f8960c6e2bfd',
    room: '063',
    task: 'RM',
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    receivedBy: 'reception',
    performedBy: 'ct',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '68e470b5-02e7-4228-adfe-1dd92e07a41c',
    room: '545',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'py',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '40b6452f-3982-47ef-b3e8-6f63c13a2f9c',
    room: '005',
    task: null,
    comments: 'Integer tincidunt ante vel ipsum.',
    receivedBy: 'reception',
    performedBy: 'dh',
    receivedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fd44de45-4ed9-48d4-a92b-d43360c2b3fc',
    room: '223',
    task: null,
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: 'mg',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1a2fe552-1b1e-482c-b112-844b7d2714e2',
    room: '435',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'hw',
    receivedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6c06a310-a63d-4778-bb42-7ea0481b9708',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'av',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7a37eadb-6c0a-4ae8-9217-40f5c0e5e56a',
    room: '182',
    task: null,
    comments: 'Duis bibendum.',
    receivedBy: 'reception',
    performedBy: 'ws',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '65ca1ef6-d4f7-4f9e-bcf8-58603ca88120',
    room: '621',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ms',
    receivedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'da4fa81b-88f4-4993-a539-b3a27039fd4f',
    room: '308',
    task: null,
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '86d9e22b-1d35-4bc6-a580-fa4e329e8ff2',
    room: '474',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6e6d626b-603f-4b2d-9af5-d0e865c4b583',
    room: '122',
    task: 'RA',
    comments:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    receivedBy: 'guest',
    performedBy: 'vy',
    receivedAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0ae76dc4-d557-4ced-bdcd-86031880b3d3',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ed',
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4b6d5998-2cea-4a81-ab22-4e483cc035da',
    room: '055',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ro',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '655945fc-9b82-4320-902f-e36834523d23',
    room: '151',
    task: 'RA',
    comments: 'Phasellus sit amet erat.',
    receivedBy: 'reception',
    performedBy: 'yj',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8ea15e3c-ded6-48f2-91ef-24133e8be146',
    room: '977',
    task: 'RM',
    comments: 'Donec semper sapien a libero.',
    receivedBy: 'reception',
    performedBy: 'sd',
    receivedAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '44d2ead9-be6e-4872-99a3-2c59c7fc95ef',
    room: '658',
    task: 'RM',
    comments: 'Donec dapibus.',
    receivedBy: 'guest',
    performedBy: 'tb',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '89e9a429-cd4e-4fcd-961a-a7e55eb39a15',
    room: '543',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'tm',
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd46a98dd-5f11-495e-9bd4-e38ca67c20c1',
    room: '737',
    task: 'RA',
    comments: 'Suspendisse potenti.',
    receivedBy: 'guest',
    performedBy: 'bc',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c19fbc81-f2e8-41b3-88a4-7ee8383ca91b',
    room: '685',
    task: 'RM',
    comments:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    receivedBy: 'reception',
    performedBy: 'mj',
    receivedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6d20023d-85bf-428a-9128-232c75dd8507',
    room: '619',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rb',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '12a55693-9249-4f9e-a56c-1b197c0a5874',
    room: '464',
    task: 'RA',
    comments: 'In congue.',
    receivedBy: 'reception',
    performedBy: 'bf',
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0763c1db-fd4d-4ea7-85a4-536accc19d78',
    room: null,
    task: null,
    comments: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '188a5578-4587-492a-894f-ed70a6988b63',
    room: '097',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rt',
    receivedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bc4136ee-94fa-45fd-aaec-9d42e7da7f00',
    room: '821',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cf59adc1-d624-42c7-ae5f-59fd068dc288',
    room: '139',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'gf',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a09607ed-bd0c-419e-b158-2f66f21efdfb',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'du',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8aa8a617-f0a3-4c82-8477-11831c802d39',
    room: '664',
    task: 'RM',
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    receivedBy: 'reception',
    performedBy: 'kq',
    receivedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0494289f-ca77-4ac9-93a2-79493756d505',
    room: '522',
    task: 'RM',
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b2f8910e-a69e-4656-92fa-0c6585eb5c11',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rf',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e126ea67-589f-41d7-95cb-21b0fd05aeb1',
    room: '283',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9d19f558-2cf1-41f3-8313-39afea3c9c22',
    room: '875',
    task: null,
    comments: 'Nulla ac enim.',
    receivedBy: 'reception',
    performedBy: 'az',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1d3cda6c-11e8-4f1b-8224-c23e4ce9b2d3',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/27/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3255e169-d6db-4435-b24c-4250d5fdac02',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'mg',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd0c59cd4-c848-4031-86c2-2a794e497b45',
    room: '210',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ar',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '36ceb949-c01c-426b-afdc-9a86c6a5d275',
    room: '801',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'mu',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f88c152a-71a5-4e87-bb9c-67c26d3a7d4f',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bj',
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '41f0c624-2eed-499b-a9b0-0b748fed6d63',
    room: '954',
    task: null,
    comments: 'Duis mattis egestas metus.',
    receivedBy: 'reception',
    performedBy: 'kt',
    receivedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fa2c0db1-6b8e-4d67-830c-02c3a7d16d50',
    room: '600',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'cz',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '320e7caa-ce28-4bc9-8d60-5e25c0fcf496',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'kr',
    receivedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fd703af8-c233-4354-bb86-46ce2bbdd98a',
    room: '212',
    task: 'RM',
    comments: 'Vestibulum rutrum rutrum neque.',
    receivedBy: 'guest',
    performedBy: 'oh',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '449c19e7-ec33-4e6d-83ef-415ae4788303',
    room: '568',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'dj',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'eb54844f-ad50-43ed-932b-e4953b4d8d48',
    room: null,
    task: 'RM',
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    receivedBy: 'reception',
    performedBy: 'ld',
    receivedAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '36c8e20f-468a-4f8b-9e66-7eb4eb0e7a02',
    room: '046',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'se',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '55d6bb6a-3922-486c-98d6-fcf0504c0797',
    room: '108',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'yg',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '07bc0c10-ff98-4ed1-a666-62b9734a3d9b',
    room: '338',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '29679ee2-24de-46a7-b92e-0624e9b58f16',
    room: '067',
    task: null,
    comments: 'Aliquam non mauris.',
    receivedBy: 'reception',
    performedBy: 'ho',
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bf23e88b-5173-4bd3-9367-2b523c19e74d',
    room: '859',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'hw',
    receivedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4ac9e44f-5e7d-406e-a5fa-26d41cf4f755',
    room: '979',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'gz',
    receivedAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '747f0074-0392-4d59-a0ca-e69faba3841a',
    room: '555',
    task: null,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1dcb785b-e49c-4a68-ab45-95ac6c9b8956',
    room: '328',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bi',
    receivedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '63ad86c7-46d1-466f-81d2-d43406269fd0',
    room: '348',
    task: 'RM',
    comments: 'Nulla tempus.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '78e39255-c519-46ec-a2ea-5663f9973e3c',
    room: '918',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'bp',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '762cfe0d-3186-4d09-83e8-0bab1eff773d',
    room: '183',
    task: null,
    comments: 'Morbi a ipsum.',
    receivedBy: 'reception',
    performedBy: 'xz',
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a4510712-f795-426c-8106-8dde6dec23cb',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'pr',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9a150074-22e1-438d-8108-1f3b3b430515',
    room: '395',
    task: 'RM',
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    receivedBy: 'reception',
    performedBy: 'nl',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0c1a2b99-3cdd-4710-a10f-d7464db440d1',
    room: '695',
    task: 'RA',
    comments: 'Maecenas tincidunt lacus at velit.',
    receivedBy: 'reception',
    performedBy: 'wz',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e5e3bf6b-3ef3-4174-b559-4e255454d1d2',
    room: '625',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'sc',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a4a87715-07fb-4bd1-bcd2-ea5f7feb1a4d',
    room: '088',
    task: null,
    comments: 'Vivamus vel nulla eget eros elementum pellentesque.',
    receivedBy: 'guest',
    performedBy: 'hw',
    receivedAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/4/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f036c7d9-1fba-464e-8f3f-756787659e85',
    room: '542',
    task: null,
    comments: 'Aliquam erat volutpat.',
    receivedBy: 'guest',
    performedBy: 'dy',
    receivedAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/29/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3f716304-9110-4e14-9b0e-0c0cee92ad16',
    room: '336',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ku',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '82e2a4a2-8c53-420a-99b7-f977c588f64a',
    room: '420',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'wz',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5d732971-c512-4399-b1a7-a8286c10d13f',
    room: '435',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'vx',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9c0e5cf0-9fb0-44d2-b678-af8cd28d6a3e',
    room: '424',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ak',
    receivedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9ee77c27-c2fc-49f7-a052-815944b5736f',
    room: '349',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'hu',
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0c297884-d684-4e2c-8c2c-8ae1af0d825f',
    room: '869',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'qp',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f623b418-c247-48bb-bcb2-33819c8d71f4',
    room: '784',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'pv',
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5499d6d0-3b16-47a0-af34-8dab65afcdfe',
    room: '912',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'uq',
    receivedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd9019dcd-e96c-45a8-bc20-a3b3de8adf8c',
    room: null,
    task: null,
    comments: 'Maecenas rhoncus aliquam lacus.',
    receivedBy: 'guest',
    performedBy: 'xw',
    receivedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '402e9eb8-ab17-4247-b8a6-198d1ffdd25e',
    room: '900',
    task: 'RA',
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    receivedBy: 'guest',
    performedBy: 'gg',
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '897fadf6-1439-4136-ac45-0febdb5f99b4',
    room: '400',
    task: 'RA',
    comments: 'Pellentesque eget nunc.',
    receivedBy: 'guest',
    performedBy: 'ts',
    receivedAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd58f663a-20b7-4919-9ecd-f23333d7c015',
    room: '954',
    task: 'RA',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    receivedBy: 'guest',
    performedBy: 'pt',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '66667dd0-6cc7-41e4-8c08-b205150c3d09',
    room: '611',
    task: 'RA',
    comments: 'Integer a nibh.',
    receivedBy: 'reception',
    performedBy: 'as',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9b17f1b7-2818-4570-b3b1-e6b53ed6c232',
    room: '850',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'on',
    receivedAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '055c39b9-2aaf-4ed7-a04f-8b1d90c32048',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'my',
    receivedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4bd1d4be-e24f-472d-97f6-0f386c2b1846',
    room: null,
    task: null,
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    receivedBy: 'guest',
    performedBy: 'jz',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b4ca12df-e527-4455-90f9-27ee433f53e0',
    room: '611',
    task: 'RM',
    comments: 'Etiam pretium iaculis justo.',
    receivedBy: 'guest',
    performedBy: 'tj',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a50c39ee-4c5e-4faa-ba98-01ce5c2ec743',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'sh',
    receivedAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cc0ac4cc-edaa-4b95-b7f0-9bf5fb9df46d',
    room: '459',
    task: 'RM',
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    receivedBy: 'reception',
    performedBy: 'ap',
    receivedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7b6032d3-1c12-4c53-b039-8d31bbbdbc69',
    room: '183',
    task: null,
    comments: 'Nullam molestie nibh in lectus.',
    receivedBy: 'guest',
    performedBy: 'mv',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4a7cdbb4-dc67-4a38-8609-28f9bb211604',
    room: '025',
    task: null,
    comments:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    receivedBy: 'reception',
    performedBy: 'nb',
    receivedAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '04138c06-779f-4aa5-9344-37f8a8476305',
    room: null,
    task: 'RA',
    comments: 'Morbi a ipsum.',
    receivedBy: 'reception',
    performedBy: 'ht',
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '713f31f5-f971-4bd5-86be-354390511600',
    room: '312',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3bda9243-9626-469a-b3d8-91f4dcc84f83',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'dp',
    receivedAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/27/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/20/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6c1f4813-33fa-47aa-9ae1-2586632f2b70',
    room: '500',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ew',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'f0c15277-2443-47d6-97e2-b94a9414c946',
    room: '200',
    task: null,
    comments: 'Phasellus in felis.',
    receivedBy: 'guest',
    performedBy: 'hy',
    receivedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0fc8cd49-84b0-4fff-9dc1-f78a0af51c4e',
    room: null,
    task: 'RA',
    comments: 'Integer ac leo.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2e33220c-f6e1-487f-8984-758506cc4df5',
    room: '364',
    task: 'RA',
    comments: 'Pellentesque eget nunc.',
    receivedBy: 'reception',
    performedBy: 'ey',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '76477c1a-c0fd-4cab-895f-f2b98b8696a7',
    room: null,
    task: null,
    comments: 'Ut tellus.',
    receivedBy: 'guest',
    performedBy: 'bd',
    receivedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '074aa88a-949c-400f-9af0-d0898b53e16f',
    room: '431',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'sr',
    receivedAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4e9946af-db46-483c-86b6-75e1dafd80fb',
    room: '288',
    task: null,
    comments: 'Integer ac neque.',
    receivedBy: 'reception',
    performedBy: 'jq',
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2bed4db4-2753-431b-9c21-2b3f0a35bddd',
    room: '041',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'cy',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6a1107d5-46e5-4c53-a3c4-6abd226eeada',
    room: '207',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'bj',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fa8074bf-d7a7-42e2-9c07-14365b036455',
    room: null,
    task: 'RM',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    receivedBy: 'reception',
    performedBy: 'mf',
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1a14fd39-840d-4d8b-a08e-b197bb1a55c2',
    room: '126',
    task: null,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    receivedBy: 'reception',
    performedBy: 'uc',
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9277ecf1-69bd-44e3-95fc-ab9877790342',
    room: '750',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'qw',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9b417fc1-0e55-458d-9939-1dba4abd6aa9',
    room: '948',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'zo',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd2b5adca-0964-4b5e-a706-798f7aead2f5',
    room: '946',
    task: 'RA',
    comments: 'Sed accumsan felis.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '838cf7a4-65b0-4f13-96f9-104539dc5b72',
    room: '572',
    task: 'RA',
    comments: 'Nam dui.',
    receivedBy: 'guest',
    performedBy: 'oy',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '55bb4f2f-e820-492a-ae33-5715700654d6',
    room: null,
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'yd',
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b2b10379-007f-46ef-bcd5-72d133e0960e',
    room: null,
    task: null,
    comments: 'Suspendisse accumsan tortor quis turpis.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fddfefd4-e850-4256-885b-ccab9db2e7e4',
    room: '704',
    task: 'RM',
    comments: 'Etiam vel augue.',
    receivedBy: 'reception',
    performedBy: 'yf',
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a2f33a84-3fdb-449f-8d76-d8c59eeae8fd',
    room: '776',
    task: null,
    comments:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    receivedBy: 'reception',
    performedBy: 'yf',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '37c1fbb6-67f1-4a3b-bdcb-87b79417dde5',
    room: '045',
    task: 'RA',
    comments: 'In blandit ultrices enim.',
    receivedBy: 'guest',
    performedBy: 'qg',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '807757e5-c9b0-4481-9ffb-9e83c96d242c',
    room: '217',
    task: 'RM',
    comments: 'Proin risus.',
    receivedBy: 'reception',
    performedBy: 'ah',
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3a3888de-79d1-426a-9bcd-033f4b8bfd56',
    room: '514',
    task: 'RA',
    comments: 'Morbi non lectus.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/31/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'dcab7f61-be76-43ce-aaf3-153436dfe63e',
    room: '834',
    task: 'RM',
    comments: 'Donec vitae nisi.',
    receivedBy: 'guest',
    performedBy: 'oy',
    receivedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd0fd7471-8111-4894-a269-630234a94d36',
    room: '338',
    task: 'RA',
    comments: 'Donec dapibus.',
    receivedBy: 'reception',
    performedBy: 'uh',
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd99a690f-12d2-428a-9ec0-336ebf635668',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ec',
    receivedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '43455134-2257-4900-8d60-5a1e4b7d404a',
    room: '902',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '0b9b3ed8-e227-4e43-b181-c0dadf54438d',
    room: '930',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'wc',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '889dd8bd-ee53-48fe-811f-0734ba55a809',
    room: '249',
    task: 'RA',
    comments:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    receivedBy: 'reception',
    performedBy: 'vx',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '7fab6e5a-87c2-4814-982d-29190acdea26',
    room: '081',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'qh',
    receivedAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '72a5ed5c-5e55-4c4a-86c2-c7d07440123f',
    room: '574',
    task: null,
    comments: 'In congue.',
    receivedBy: 'reception',
    performedBy: 'rf',
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5550b607-66a4-472c-88a1-8e17d81b5410',
    room: '954',
    task: 'RA',
    comments: 'Suspendisse accumsan tortor quis turpis.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'eb4f51cf-c5f9-4134-8c92-60b46d01ba77',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'kv',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd0e19cd6-d268-4a01-8ae1-1703b57a0e26',
    room: null,
    task: null,
    comments:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    receivedBy: 'reception',
    performedBy: 'ym',
    receivedAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1ae5f56a-3e04-4b0c-9172-87a6d9241306',
    room: null,
    task: 'RA',
    comments: 'Nam tristique tortor eu pede.',
    receivedBy: 'guest',
    performedBy: 'gh',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6ca5b1f1-a86b-427e-9783-b3c25aa6aa8b',
    room: '271',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'xk',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1181b545-4c45-4596-b49b-ad97606b9384',
    room: '856',
    task: 'RA',
    comments: 'Suspendisse accumsan tortor quis turpis.',
    receivedBy: 'reception',
    performedBy: 'ij',
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '8d62d105-556d-42f0-8870-7a9c49aa5831',
    room: '956',
    task: null,
    comments: 'Mauris sit amet eros.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/20/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd89cace4-a722-49cc-a922-9b2212ae2114',
    room: '147',
    task: 'RM',
    comments: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    receivedBy: 'reception',
    performedBy: 'cf',
    receivedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/26/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9cd0cee5-7ca4-40a9-95d9-de5533e0bbf2',
    room: '397',
    task: 'RM',
    comments: 'Duis mattis egestas metus.',
    receivedBy: 'guest',
    performedBy: 'bt',
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'abd77cec-8b57-4273-83b6-ae4eae595daa',
    room: '439',
    task: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    receivedBy: 'guest',
    performedBy: 'wa',
    receivedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5a40363e-26c4-4115-912c-4dc13f48fe06',
    room: null,
    task: 'RA',
    comments: 'In quis justo.',
    receivedBy: 'guest',
    performedBy: 'qu',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c552540a-abb8-4490-9044-f675d13505c3',
    room: '414',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ct',
    receivedAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/19/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/12/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fa8b8637-bb5b-4fb6-b37c-1b12585d2964',
    room: '723',
    task: 'RA',
    comments:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    receivedBy: 'reception',
    performedBy: 'ak',
    receivedAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/16/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'acdf5b25-5689-4814-9be0-9d49714d2430',
    room: '650',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rq',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9bcd7fc5-e10f-4cbe-9e23-38a169b51ee7',
    room: '387',
    task: 'RM',
    comments: 'Proin interdum mauris non ligula pellentesque ultrices.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/2/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c1b97840-189b-4321-916f-0c3b9d8d3607',
    room: '402',
    task: 'RM',
    comments: 'Sed accumsan felis.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '810af8ab-5226-4230-82f1-6f8fbe02ee61',
    room: '104',
    task: 'RM',
    comments: 'In blandit ultrices enim.',
    receivedBy: 'guest',
    performedBy: 'cx',
    receivedAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/31/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e5dbfd7b-2b71-49a5-85b6-b69a7fc1b78e',
    room: '644',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'zl',
    receivedAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '390615f6-75a8-4379-bcca-4e725a1b4e85',
    room: '910',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'se',
    receivedAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/26/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/19/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e32d3570-6532-4911-91c5-317bcf0588d7',
    room: '446',
    task: 'RA',
    comments: 'Nulla tellus.',
    receivedBy: 'reception',
    performedBy: 'hm',
    receivedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'caa09811-ee1a-4a03-bfd2-8e035dd7d557',
    room: '963',
    task: 'RM',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'reception',
    performedBy: 'lg',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/25/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '75da7ad4-611c-4139-ae9c-80b3fd76d65f',
    room: '722',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'ci',
    receivedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/14/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'abcd61bd-3cd3-4669-b4b0-05a0003ee898',
    room: '457',
    task: 'RM',
    comments: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    receivedBy: 'reception',
    performedBy: 'dx',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4260e83d-460c-4232-946e-3254f7726325',
    room: '732',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rz',
    receivedAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/10/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/3/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'cc08162a-2723-419a-a0eb-1211f025b5e5',
    room: '984',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ih',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd36d45da-62d1-4ab6-9331-71a1653c4c9e',
    room: null,
    task: null,
    comments:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    receivedBy: 'reception',
    performedBy: 'oc',
    receivedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '208bfd26-d379-4d34-98e4-1c9b3f20d183',
    room: '775',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'cj',
    receivedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4d62995b-36fc-4c7e-9583-6b1a1d85ac3a',
    room: '313',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'tr',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '6a4862fa-3c3e-4d04-bbbc-3b2358c298ae',
    room: null,
    task: 'RM',
    comments: 'Suspendisse potenti.',
    receivedBy: 'guest',
    performedBy: 'oh',
    receivedAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/29/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e5bd7bd0-87a7-48fa-82a1-9502bdbf91fa',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/5/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '753fd520-ab6c-4f2f-aa82-5c76809b3f37',
    room: '892',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'wa',
    receivedAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/8/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '54dffc18-e2a8-44ba-8dea-38d6807f7091',
    room: '612',
    task: null,
    comments: 'In eleifend quam a odio.',
    receivedBy: 'reception',
    performedBy: 'hu',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '986ff199-3944-49b3-8491-3b4c3da99091',
    room: '582',
    task: null,
    comments: 'Curabitur in libero ut massa volutpat convallis.',
    receivedBy: 'guest',
    performedBy: 'kf',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '33b04640-4131-42b8-9771-bad44fb537e1',
    room: '549',
    task: 'RM',
    comments: 'Donec posuere metus vitae ipsum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd2870516-4da0-4697-8a6c-ff76f4c59dae',
    room: '946',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'qe',
    receivedAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4b7afac6-6db2-4228-9d73-e6fb2ee55bbc',
    room: '901',
    task: null,
    comments: 'Vivamus tortor.',
    receivedBy: 'guest',
    performedBy: 'oj',
    receivedAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/5/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '99152186-5d7c-49fc-a4a4-3636f5540dcd',
    room: '415',
    task: 'RM',
    comments: 'Nunc purus.',
    receivedBy: 'guest',
    performedBy: 'tu',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '04e2ecd4-55ca-4843-9738-0bb4a0c3654b',
    room: '979',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '66a803cf-909b-490a-b257-03d1f1791bbb',
    room: '694',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ok',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a9d99f76-1771-4a9f-b556-214aaa1e0314',
    room: '444',
    task: null,
    comments: 'Aenean sit amet justo.',
    receivedBy: 'guest',
    performedBy: 'gy',
    receivedAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/23/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e2dceed0-1106-446c-bdab-4c733ce20270',
    room: '350',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ot',
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3242bb6e-f8f3-4c19-b1f6-9f2886578996',
    room: null,
    task: 'RM',
    comments: 'Curabitur convallis.',
    receivedBy: 'reception',
    performedBy: 'kb',
    receivedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '747c6c8b-3e82-4815-ae2c-5bb8548afac2',
    room: '994',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'oz',
    receivedAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/1/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/25/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a7e846b9-93a0-4dae-99ce-d89397c1c7a4',
    room: '352',
    task: null,
    comments: 'Proin risus.',
    receivedBy: 'reception',
    performedBy: 'gl',
    receivedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/28/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '134f4b37-4de1-4479-a630-09f17ee93807',
    room: null,
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/22/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '174efb23-e0e6-43ed-b013-4af16169ec4b',
    room: null,
    task: null,
    comments: 'Curabitur convallis.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/17/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a2f2a331-d15a-4480-80a5-8965087eefa2',
    room: '319',
    task: 'RM',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'mq',
    receivedAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/18/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/11/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fab38a92-afc5-41ce-82c6-99ab07d26810',
    room: '751',
    task: 'RA',
    comments:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    receivedBy: 'reception',
    performedBy: 'wu',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '3c49437a-be0e-4170-931d-a1d5981d7c49',
    room: '373',
    task: 'RM',
    comments: 'Suspendisse potenti.',
    receivedBy: 'reception',
    performedBy: 'xm',
    receivedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4cf07475-a095-40b9-844c-04ee07012281',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'oe',
    receivedAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/13/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/6/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd8ce0115-cc93-4090-9c63-764d0c6f8414',
    room: '008',
    task: null,
    comments: 'Nulla suscipit ligula in lacus.',
    receivedBy: 'guest',
    performedBy: 'wm',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '22af9c7f-5938-4fe9-b7c0-47a6bcd10171',
    room: '710',
    task: 'RA',
    comments: 'Donec posuere metus vitae ipsum.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a4b4c65d-151b-440e-aca9-831b4e5ee0cb',
    room: '766',
    task: 'RM',
    comments: 'Morbi non quam nec dui luctus rutrum.',
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/13/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'bd4e3409-c30e-482f-a9f4-a89406a8be82',
    room: '663',
    task: 'RM',
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/24/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '26328b82-f1fe-4972-bfa7-bd03fe4d797e',
    room: '270',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'ct',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd5b95456-4aa1-4477-8735-00ac697825e1',
    room: '615',
    task: null,
    comments: null,
    receivedBy: 'reception',
    performedBy: 'fb',
    receivedAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/9/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/2/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '9d782192-b8ec-46fb-91fd-cb9647717f78',
    room: '567',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ee6fe1c0-1315-4198-b624-d9c5abb8710a',
    room: '671',
    task: null,
    comments: null,
    receivedBy: 'guest',
    performedBy: 'xq',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5ee275f0-2006-4d54-8263-d2f5781dcf52',
    room: '646',
    task: 'RM',
    comments:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    receivedBy: 'reception',
    performedBy: 'nc',
    receivedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '13200049-8678-43b6-8489-da2602543644',
    room: '693',
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: 'tq',
    receivedAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/18/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'd6c36bbe-aedb-4eb4-8005-36a25667b370',
    room: null,
    task: null,
    comments: 'Duis bibendum.',
    receivedBy: 'reception',
    performedBy: 'nn',
    receivedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '60ff3041-abb8-440b-9834-5a0ae04c438b',
    room: '750',
    task: 'RM',
    comments: 'Duis bibendum.',
    receivedBy: 'reception',
    performedBy: 'nj',
    receivedAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'c9d50ba7-e783-4e28-8b18-18fcb50960f8',
    room: '443',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'wb',
    receivedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/21/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'fee60aa1-6c22-4b8a-adae-a2a9dcb5be5d',
    room: '529',
    task: 'RA',
    comments: 'Donec quis orci eget orci vehicula condimentum.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/30/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/23/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '01c4a54b-39f9-4053-b604-fb95d6e6c6ed',
    room: '856',
    task: 'RA',
    comments: null,
    receivedBy: 'guest',
    performedBy: 'rv',
    receivedAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'ca7b4537-212f-4d7a-90d6-c6557f00bead',
    room: null,
    task: 'RM',
    comments: 'Curabitur at ipsum ac tellus semper interdum.',
    receivedBy: 'reception',
    performedBy: 'uy',
    receivedAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/1/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2adbca5e-578f-4dc0-ba9b-006c0c5f0f13',
    room: '789',
    task: 'RM',
    comments: 'Aliquam quis turpis eget elit sodales scelerisque.',
    receivedBy: 'reception',
    performedBy: 'ct',
    receivedAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/21/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '5425f036-6331-42c2-bdf6-32aaa965ef4a',
    room: '724',
    task: 'RM',
    comments: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    receivedBy: 'reception',
    performedBy: 'mg',
    receivedAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('12/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'b6c16e6d-202f-4c19-8467-871cf701273f',
    room: '198',
    task: 'RA',
    comments: 'Donec posuere metus vitae ipsum.',
    receivedBy: 'reception',
    performedBy: 'rf',
    receivedAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/22/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/15/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '1bd982f0-7956-4e2f-8645-cbde9657c94b',
    room: null,
    task: null,
    comments: 'Proin eu mi.',
    receivedBy: 'reception',
    performedBy: 'yk',
    receivedAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/14/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/7/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '2b44c44d-e899-4eff-b770-77e703d71241',
    room: null,
    task: 'RA',
    comments: null,
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/10/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/3/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '751d8955-bcfa-454d-a08f-8f4e2f5dd920',
    room: '348',
    task: 'RM',
    comments: 'Aenean auctor gravida sem.',
    receivedBy: 'guest',
    performedBy: 'ou',
    receivedAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/9/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'a6b255ec-5846-4af1-bdff-8fd5903e68bc',
    room: '486',
    task: 'RA',
    comments: 'Aenean fermentum.',
    receivedBy: 'guest',
    performedBy: 'yv',
    receivedAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('11/15/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('11/8/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '4d8f6624-d9f0-4d71-9eac-41aec275b5a1',
    room: '254',
    task: null,
    comments:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    receivedBy: 'guest',
    performedBy: 'ok',
    receivedAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('11/16/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'e50d6c7b-dbbe-45df-a022-e34d595afbee',
    room: '842',
    task: null,
    comments: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    receivedBy: 'reception',
    performedBy: 'sz',
    receivedAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/28/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '53f88226-98d9-4a66-8096-3a246a3c431e',
    room: '053',
    task: null,
    comments:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    receivedBy: 'reception',
    performedBy: 'gx',
    receivedAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('2/6/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/30/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '220c3dba-d9ea-4048-b6d9-6f1dd50ad506',
    room: null,
    task: 'RM',
    comments: 'Duis consequat dui nec nisi volutpat eleifend.',
    receivedBy: 'guest',
    performedBy: 'ft',
    receivedAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('12/11/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('12/4/2022').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: 'edfad0b1-dba4-41c9-9fbe-7be90f49ef8e',
    room: '490',
    task: 'RA',
    comments: 'Etiam justo.',
    receivedBy: 'reception',
    performedBy: 'og',
    receivedAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: new Date(
      new Date('1/24/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    createdAt: new Date(
      new Date('1/17/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
  {
    assignmentId: '954142f4-b336-4680-9d7f-e604b8b782e1',
    room: '697',
    task: 'RM',
    comments: 'Proin risus.',
    receivedBy: 'reception',
    performedBy: null,
    receivedAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
    completedAt: null,
    createdAt: new Date(
      new Date('1/7/2023').setHours(
        Math.random() * (23 - 2) + 2,
        Math.random() * (59 - 1) + 1
      )
    ),
  },
];
