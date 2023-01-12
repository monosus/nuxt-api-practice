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
      src: faker.image.abstract(256, 144, true),
      tags: [{ style: 'black', text: 'お知らせ' }],
      text: faker.lorem.sentences(),
      date: format(faker.date.past(), 'yyyy.MM.dd'),
    })
  }

  return data
})
