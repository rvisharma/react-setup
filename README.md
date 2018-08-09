# Webpack Configuration for React

## includes production level configurations.

### scripts

```
start - starts dev server
build - production build
analyze:p - Bundle Analyzer for Production build
analyze:d - Bundle Analyzer for Development build
```

- [ ] Docker
- [x] env modes setup
- [x] Babel
  - [x] env preset
  - [x] Babel Dynamic Imports
- [ ] Alias to ~
- [ ] Prettier
  - [ ] Hook
  - [ ] config file
- [x] Bundle analyzer script
- [x] Ramda
  - [x] babel ramda plugin
- [ ] Loaders
  - [x] SCSS
  - [x] CSS
  - [x] File Loader (fonts and images)
  - [x] HTMLWebpackPlugin (auto index)
    - [x] html web pack template (better templates)
  - [x] clean web pack plugin (clean dist folder)
  - [ ] https://github.com/tcoopman/image-webpack-loader (image optimisation)
  - [ ] Url loader (base64)
- [x] Caching
- [x] Code Splitting
- [x] Source Maps - eval-source-map (dev) && source-map (production)
- [x] Webpack dev server
- [x] HMR config
- [x] MiniCSSExtract
- [x] Webpack Merge
- [ ] React
  - [ ] react-hot-loader (HMR)
  - [ ] Redux
  - [ ] Redux-saga
