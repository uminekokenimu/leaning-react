# learning-react

## Set up

### Check environment
```
$ npm -v
x.x.x

$ node -v
x.x.x
```

### Install vite and start
```
$ npm create vite
Project name: learning-react
Select a framework: React
Select a variant: TypeScript

$ cd learning-react
$ npm i
$ npm run dev
```

### Install Chakra
```
$ npm i @chakra-ui/react @emotion/react
$ npx @chakra-ui/cli snippet add
```

#### change main.tsx
```
...
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";  // Add

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>  // Add
      <App />
    </ChakraProvider>  // Add
  </StrictMode>,
)
```

### Install json-server
```
$ npm i json-server
$ touch db.json
$ npm run json-server
```

check json-server
```
curl localhost:3000/records
```

chenge `package.json`
```
...
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "json-server": "json-server --watch db.json"  // Add
  },
...
```