# todo-finder

## Requirement

- Nodejs
- Docker
- Jest

## Instructions

1. npm install
2. Run `sh ./scripts/devstart.sh` to build up docker container
3. Type localhost:8080 on any broswer to see directory with the word 'todo'

### Optional

- You can play around with it by adding folders or files inside the src folder and editing any files inside it (All files in src is for tryouts)

## Commands

1. `node index.js` => To run locally without any docker containers running
2. `npm run test` => For unit test using Jest
3. `sh ./scripts/devstart.sh` => For moving repo to a docker container
4. `sh ./scripts/remove.sh` => Remove all image and container of this app
