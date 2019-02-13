const express = require('express') // Hier wird Express als Libray geladen
const app = express() //meint unseren Server, in dem wir App als Funktion aufrufen

app.listen(process.env.PORT || 3000, () => {
  console.log('Server ready on port 3000')
})
