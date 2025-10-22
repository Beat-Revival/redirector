# Redirector

This is the all-important redirector which serves as the initial connection between EA games and their servers. The redirector sets up the connection and informs the game client of where to locate the Blaze server. Also included is functionality replicating the engagement manager which allows you to display news posts in-game.

There are zero external libraries and the application is contained in a single file, making it ready to run on any embedded server or serverless platform such as Cloudflare Workers.

### Replaces these components

- Redirector aka `winter15.gosredirector.ea.com`
- Engagement manager aka `emapi.prm.data.ea.com`

## Setup

Launch with `node index.js`

If you want the game to fetch news posts, configure the following option in the `CONF` section of the Blaze server:

```
engagementManagerApiEndpointUrlBase: 'http://[hostname]:42230'
```

### Notes

- Background images are **480x144** pixels in size and must be at least 5 KB
- PNG or JPG
- Image URLs must be HTTP only
