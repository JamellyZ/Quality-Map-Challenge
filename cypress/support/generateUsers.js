import { faker } from '@faker-js/faker';

function createRandomUser() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const companyName = faker.person.firstName()
  const password = faker.internet.password();

  return {
    birthday: faker.date.birthdate().toLocaleDateString('pt-BR'),
    email,
    firstName,
    lastName,
    sex,
    companyName,
    password
  };
}

const user = createRandomUser();

export{user}

