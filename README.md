### Start with this

`@types/cors @types/dotenv @types/express cors dotenv express mongoose ts-node-dev typescript`

```
git clone https://github.com/sumoncse19/mongoose-typescript-starter.git
```

```
yarn install
```

### Manual
```
yarn init -y
```

```
tsc --init
```

```
yarn add express @types/express ts-node-dev typescript cors @types/cors mongoose dotenv @types/dotenv
```

"rootDir": "./src",

"outDir": "./dist",

Add those in scripts:

```
"dev": "ts-node-dev --respawn --transpile-only"
"build": "tsc",
"start": "node ./dist/index.js"
```

or,

```
"dev": "ts-node-dev --rs --poll"
"build": "tsc",
"start": "node ./dist/index.js"
```
