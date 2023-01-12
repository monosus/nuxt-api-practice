import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from "uuid";

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const qty = query?.qty || 1
  const data = []

  for (let i = 0; i < qty; i++) {
    data.push({
      id: uuidv4(),
      href: '#',
      src: faker.image.abstract(256, 144, true),
      title: faker.lorem.sentence(),
      tagText: 'WORK',
      tagStyle: 'gradient-blue',
      date: faker.date.past().toLocaleDateString().replace(),
    })
  }

  return data
})
