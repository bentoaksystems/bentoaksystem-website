# bos-website
## Firebase Setup
```bash
# install firebase
$ yarn add global firebase-tools

# or if you need permissions:
$ sudo yarn add global firebase-tool

# then in the project folder:
$ firebase login
``` 
## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate # creates files in the 'dist' directory
```
# to deploy
```bash
# After generating static project ('dist' directory)
$ fireabse deploy --only hosting
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
