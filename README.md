# Async imports' child imports do not end up in async imports chunk

This is a simple repo to recreate the Webpack bug reported here: https://github.com/webpack/webpack/issues/6359

## Run
1. `yarn` 
2. `yarn run build` 
3. Inspect the web browser window that opens and shows the stuff 


## Conclusion 
Chunking of dynamic imports and their children end up where they should. Peachy!  Dropping "sideEffects" in `package.json`, tho,  does seem to bloat the build. 
