# This is now a simple webpack config minimum for...
* Async and entry style js split 
* SCSS extraction to async and entry
* Tree shaking with side effects preserved (and working scss)

See also https://github.com/webpack/webpack/issues/7300.


# (Previously) Async imports' child imports do not end up in async imports chunk

This was a simple repo that attempted to recreate the Webpack bug reported here: https://github.com/webpack/webpack/issues/6359. 

## Run
1. `yarn` 
2. `yarn run build` 
3. Inspect the web browser window that opens and shows the stuff 


# Conclusion 
Chunking of dynamic imports and their children end up where they should. Peachy!  Dropping "sideEffects" in `package.json`, tho,  does  bloat the build. 
