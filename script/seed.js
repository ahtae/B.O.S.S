const db = require('../server/db');
const { Business, User, Comment } = require('../server/db/models');
const faker = require('faker');

const businessesToCreate = require('./businessesToCreate');

const usersToCreate = [
  {
    firstName: 'Jane',
    lastName: 'Jones',
    email: 'jane@email.com',
    password: '123',
    isBusinessOwner: 'true',
    profile:
      "Hi, my name is Jane Jones. Welcome to my profile. Ever since I was a wee little Jane, I wanted to own my own business. Now I do, and I couldn't be happier!"
  },
  {
    firstName: 'John',
    lastName: 'Jones',
    email: 'john@email.com',
    password: '123',
    isBusinessOwner: 'true',
    profile:
      'Greetings! My wife Jane and I are very successful business owners. Thank you for taking the time to visit my profile. The support my business has been receiving has been amazing.'
  },
  {
    firstName: 'Henry',
    lastName: 'Smith',
    email: 'henry@email.com',
    password: '123',
    isBusinessOwner: 'true',
    profile: faker.random.words(25)
  },
  {
    firstName: 'Greg',
    lastName: 'Johnson',
    email: 'greg@email.com',
    password: '123',
    isBusinessOwner: 'true',
    image:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
  },
  {
    firstName: 'Sara',
    lastName: 'Gene',
    email: 'sara@email.com',
    password: '123',
    isBusinessOwner: 'true',
    profile: "Hi, I'm Sara Gene! " + faker.random.words(15)
  },
  {
    firstName: 'Sample',
    lastName: 'Consumer1',
    email: 'consumer1@email.com',
    password: '123',
    image:
      'https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png'
  },
  {
    firstName: 'Sample',
    lastName: 'Consumer2',
    email: 'consumer2@email.com',
    password: '123',
    image:
      'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805__480.png'
  },
  {
    firstName: 'Sample',
    lastName: 'Consumer3',
    email: 'consumer3@email.com',
    password: '123',
    image:
      'https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783__480.png'
  },
  {
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@email.com',
    password: '123',
    isBusinessOwner: 'false',
    isAdmin: true
  }
];

const commentsToCreate = [
  {
    title: 'Awesome!',
    comment:
      'My experience here was great! I would totally recommend visiting :)',
    userId: 1,
    businessId: 1,
    stars: 5
  },
  {
    title: 'Interesting to say the least',
    comment:
      'The service was really good, but the other patrons were noisy, making the atmosphere a little hard to enjoy. I would still recommend visiting to experience it yourself!',
    userId: 1,
    businessId: 2,
    stars: 4
  },
  {
    title: 'It was okay',
    comment:
      'Would still recommend but did not have that great of an experience. The service time could be improved.',
    userId: 2,
    businessId: 3,
    stars: 3
  },
  {
    title: faker.random.words(2),
    comment: faker.random.words(15),
    userId: 2,
    businessId: 4,
    stars: 4
  },
  {
    title: faker.random.words(3),
    comment: faker.random.words(25),
    userId: 3,
    businessId: 5,
    stars: 5
  },
  {
    title: faker.random.words(5),
    comment: faker.random.words(15),
    userId: 3,
    businessId: 6,
    stars: 5
  },
  {
    title: faker.random.words(2),
    comment: faker.random.words(30),
    userId: 4,
    businessId: 7,
    stars: 4
  },
  {
    title: faker.random.words(5),
    comment: faker.random.words(20),
    userId: 5,
    businessId: 8,
    stars: 3
  },
  {
    title: faker.random.words(3),
    comment: faker.random.words(20),
    userId: 4,
    businessId: 9,
    stars: 2
  },
  {
    title: faker.random.words(3),
    comment: faker.random.words(40),
    userId: 3,
    businessId: 9,
    stars: 1
  }
];

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await User.bulkCreate(usersToCreate);
  console.log(`seeded ${users.length} users successfully`);

  const businesses = await Promise.all(
    businessesToCreate.map(
      (
        {
          name,
          photos,
          coordinates,
          location,
          phone,
          hours,
          is_closed,
          categoryFilter
        },
        index
      ) => {
        return Business.create({
          name,
          images: photos,
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          phone,
          hours: JSON.stringify(hours),
          isClosed: is_closed,
          address: location.address1,
          city: location.city,
          postalCode: location.zip_code,
          state: location.state,
          ownerId: index < 5 ? index + 1 : null,
          type: categoryFilter
        });
      }
    )
  );

  console.log(`seeded ${businesses.length} businesses`);

  const comments = await Comment.bulkCreate(commentsToCreate);
  console.log(`seeded ${comments.length} comments successfully`);

  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}
