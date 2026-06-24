const express = require('express')
const morgan = require('morgan')

const app = express()

const hostname = process.env.HOSTNAME || 'localhost'
const ip = process.env.SERVER_IP || 2130706433
const blazePort = process.env.PORT || 42127

const msgData = {
  messages: [
    {
      destination: '16679',
      text: 'Welcome, Runner! Directly from the DICE developers, here are 3 great tips that will help you out in the city of Glass:\n1) Attacks from above, ziplines, or swingbars always deal much higher damage to enemies.\n2) The Disruptor is great for taking down those pesky security cameras.\n3) The unlockable movement skills will greatly help when trying to beat timed missions.\n\nFor more tips see mirrorsedge.com',
      url: 'http://media.mirrorsedge.com/background.png',
      'tracking-tag': '1337',
      data: [
        {
          Key: 'TitleCaption',
          Value: 'Welcome, Runner'
        },
        {
          Key: 'Subcaption',
          Value: 'We look forward to seeing you in the city of Glass'
        },
        {
          Key: 'ActionLabel',
          Value: 'Top 3 Tips & Tricks'
        },
        {
          Key: 'PopupActionLabel',
          Value: ''
        },
        {
          Key: 'ActionPath',
          Value: ''
        }
      ]
    }
  ]
}

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
app.use(express.static('public'))

app.get('/redirector/getServerInstance', (req, res) => {
  res.type('xml')
  res.send(xml)
})

app.get('/em/v2/messages', (req, res) => {
  res.json(msgData)
})

app.listen(42230, () => {
  console.log('Redirector started on port 42230')
})
