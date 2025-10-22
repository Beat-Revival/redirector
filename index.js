import { createServer } from 'node:http'

const hostname = 'localhost'
const blazePort = 25565

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
<ip>null</ip>\
<port>${blazePort}</port>\
</valu>\
</address>\
<secure>0</secure>\
<trialservicename></trialservicename>\
<defaultdnsaddress>0</defaultdnsaddress>\
</serverinstanceinfo>`

const server = createServer((req, res) => {
  if (req.url === '/em/v2/messages') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(msgData))
    console.log('Message Request')
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.end(xml)
    console.log('Redirected')
  }
})

server.listen(42230, () =>
  console.log('Redirector started on port 42230')
)
