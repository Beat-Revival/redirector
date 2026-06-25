const express = require('express')
const morgan = require('morgan')
const msgData = require('./messages.json')

const app = express()

const hostname = process.env.HOSTNAME || 'localhost'
const ip = process.env.SERVER_IP || 2130706433
const blazePort = process.env.PORT || 42127

const xml = `<?xml version="1.0" encoding="UTF-8"?>\
<serverinstanceinfo>\
<address member="0">\
<valu>\
<hostname>${hostname}</hostname>\
<ip>${ip}</ip>\
<port>${blazePort}</port>\
</valu>\
</address>\
<secure>0</secure>\
<trialservicename></trialservicename>\
<defaultdnsaddress>0</defaultdnsaddress>\
</serverinstanceinfo>`

app.use(morgan('short'))
app.use(express.json())
app.use(express.static('public'))

app.post('/redirector/getServerInstance', (req, res) => {
  res.type('xml')
  res.send(xml)
})

app.post('/em/v2/messages', (req, res) => {
  const destination = req.body['destination-list'][0]
  let data = {}

  msgData['messages'].forEach(message => {
    if (message['destination'] === destination) {
      data = { messages: [ message ] }
    }
  })

  res.json(data)
})

app.listen(42230, () => {
  console.log('Redirector started on port 42230')
})
