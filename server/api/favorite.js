import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from "uuid";

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const qty = query?.qty || 1
  const data = []

  for (let i = 0; i < qty; i++) {
    data.push({
      id: uuidv4(),
      link: '#',
      image: faker.image.abstract(72, 72, true),
      name: faker.company.name(),
    })
  }

  return data
})
