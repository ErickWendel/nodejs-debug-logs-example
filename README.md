# Using Debug package instead of console.log example

## Running

Restore dependencies: `npm install`

- To see all internal logs run:
`DEBUG=* node index.js`

- To see only all API logs run:
`DEBUG=api:* node index.js`

- To see only specific file logs run:
`DEBUG=api:main node index.js`

To test results run:
`curl localhost:3000/`
