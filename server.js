const express = require('express') // Hier wird Express als Libray geladen
const app = express() //meint unseren Server, in dem wir App als Funktion aufrufen

const data = {
  cards: [
    {
      title: 'Foo',
      content: 'lorem',
      id: 1,
      tags: ['html', 'css', 'java script'],
    },
    {
      title: 'Bar',
      content: 'lorem',
      id: 2,
      tags: ['html', 'css', 'java script'],
    },
    {
      title: 'Dies',
      content: 'lorem',
      id: 3,
      tags: ['html', 'css', 'java script'],
    },
    {
      title: 'Das',
      content: 'lorem',
      id: 4,
      tags: ['html', 'css', 'java script'],
    },
  ],
}

app.use(express.json())

app.get('/cards', (req, res) => {
  res.json(data)
})

app.post('/cards', (req, res) => {
  const newCard = req.body
  const isTitleEqual = user => user.title === newCard.title
  let card = data.cards.find(isTitleEqual)
  if (card) {
    card = { ...card, ...newCard.content, ...newCard.tags }
  } else {
    const newId = Math.random()
    const newCardWithId = { ...newCard, id: newId }
    data.cards.push(newCardWithId)
  }
  res.json(data)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server ready on port 3000')
})
