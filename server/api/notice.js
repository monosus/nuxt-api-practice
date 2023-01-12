import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from "uuid";
import { format } from 'date-fns'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const qty = query?.qty || 1
  const data = []

  for (let i = 0; i < qty; i++) {
    data.push({
      id: uuidv4(),
      link: '#',
      date: format(faker.date.past(), 'yyyy.MM.dd'),
      text: faker.lorem.sentence(),
    })
  }

  return data
})
