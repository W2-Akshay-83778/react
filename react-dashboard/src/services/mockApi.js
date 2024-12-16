import { faker } from '@faker-js/faker';

// Simulate fetching data from an API using Faker.js
export const fetchDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = {
        totalUsers: faker.number.int({ min: 100, max: 1000 }),  // Use 'faker.number.int' in the new version
        totalOrders: faker.number.int({ min: 50, max: 500 }),    // Same for 'totalOrders'
        revenue: faker.commerce.price(1000, 10000, 2, '$'),
        recentTransactions: Array.from({ length: 5 }, () => ({
          id: faker.string.uuid(),  // Use 'faker.string.uuid()' for generating UUID
          name: faker.name.fullName(),
          date: faker.date.recent().toLocaleDateString(),
          amount: faker.commerce.price(50, 500, 2, '$'),
        })),
      };

      console.log("Mock data generated:", mockData); // Log mock data
      resolve(mockData);
    }, 1000); // Simulate a delay
  });
};
