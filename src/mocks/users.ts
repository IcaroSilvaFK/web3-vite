import { faker } from '@faker-js/faker'

export const users = [
  {
    email: faker.internet.email(),
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
  },
  {
    email: faker.internet.email(),
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
  },
  {
    email: faker.internet.email(),
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
  },
  {
    email: faker.internet.email(),
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
  },
  {
    email: faker.internet.email(),
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
  },
]
