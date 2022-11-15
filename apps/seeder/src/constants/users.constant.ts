import { IUser, Role } from '@hems/interfaces';

// password: abcDEF123
export const users: IUser[] = [
  {
    userId: '9a4c374c-4b8d-436c-bf9e-94f435c8fee5',
    email: 'user@example.com',
    password: '$2b$10$QItH8MlMrmcye0WB1n4SuuMyRAv2gR66C/qpzXAoeTgAI7Ew2dr0K',
    role: Role.user,
  },
  {
    userId: '2370d90d-2825-40aa-9a8b-d3be4131b3fc',
    email: 'user2@example.com',
    password: '$2b$10$QItH8MlMrmcye0WB1n4SuuMyRAv2gR66C/qpzXAoeTgAI7Ew2dr0K',
    role: Role.user,
  },
  {
    userId: 'abe222df-a26d-4bfe-8276-a4f7b2a5ed9f',
    email: 'admin@example.com',
    password: '$2b$10$QItH8MlMrmcye0WB1n4SuuMyRAv2gR66C/qpzXAoeTgAI7Ew2dr0K',
    role: Role.admin,
  },
];
