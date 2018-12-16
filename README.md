# Gatsby Webapp Starter
![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)

Open-source Gatsby starter used internally at [OpenUp](#) for webapp projects.

## 📚 Table of Contents

- [Architecture Summary](#architecture-summary)
- [Getting Started](#getting-started)
  - [Start new project](#new-project)
  - [Contribute to existing project](#existing)
- [Technologies](#technologies)
- [Integrations](#integrations)
- [Feature checklist](#feature-checklist)

## <span id="architecture-summary"></span>⭐️ Architecture Summary:

#### Built with the following [technologies](#technologies):
- Markup and interactivity: 
  - [Gatsby](#gatsby)
  - [Redux](#redux)
- Styling:
  - [Material UI](#material-ui)
- Testing: 
  - [Cypress](#cypress)
  - [Jest](#jest)
  - [Enzyme](#enzyme)
  - [ESLint](#eslint)
  - [Husky](#husky)

#### Assumes the following [integrations](#):
- Deployment:
  - [Github](#github) 
  - [Netlify](#netlify)
- Testing:
  - [Travis](#travis)
- Reporting:
  - [Google Analytics](#google-analytics)
  - [Sentry](#sentry)
  - [Hotjar](#hotjar)

## <span id="getting-started"></span>🚀 Getting Started

### <span id="new-project"></span>Start New Project

1. Clone this starter repo by running `git clone https://github.com/schalkventer/gatsby-webapp-starter`.
2. Configure `app.json` file with required information
3. Replace `src/assets/meta/icon.png` with custom `.png` image to use for favicon and to launch app.
4. 

### <span id="existing"></span>Existing Project

#### Local development
1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository from Github.
2. Make sure you have the latest [NodeJS](https://nodejs.org/en/) installed.
3. Run `npm install` in the root folder of the repository.
4. Run `npm start` to spin up the development server.*
5. Open `localhost:8000` in your browser.


#### Pushing Code
1. If you have write access to the repo use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), if you do not then use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
2. Run `npm test` to ensure that all tests pass before running `git push`. [<sup>*</sup>](#footnote-1)
3. Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) on [Github](#github) to the `master` branch.
4. The owner of the repository will automatically be tagged in pull requests via the `docs/CODEOWNERS` file.
5. If your code has been reviewed and merged  into `master` then [Netlify](#netlify) will automatically deploy the changes to the production environment.

<span id="footnote-1"><sup>*</sup></span> Husky prevents pushing to git unless `npm test` passes. In emergencies [Husky](https://www.npmjs.com/package/husky) can be bypassed by running `git push --no-verify` or `npm run deploy:no-verify`.


## 🔧 Tech stack

....

### Markup and interactivity

...

#### Gatsby
...

The base [Gatsby](https://www.gatsbyjs.org/) configuration is extended as follows:

|Name|Purpose|
|---|---|
|[gatsby-plugin-material-ui](@wapps/gatsby-plugin-material-ui)| Adds Material UI styling during static page generation. This means that Gatsby static HTML files have Material UI even before JSS loads client-side.|
|[gatsby-plugin-manifest](https://www.npmjs.com/package/gatsby-plugin-manifest)|Creates [web app manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest) based on the following values in the `.ENV` file: `PRODUCT_NAME`, `PRODUCT_HEX_COLOR`, `PRODUCT_PNG_ICON_PATH`|
|[gatsby-plugin-offline](https://www.npmjs.com/package/gatsby-plugin-offline)|x|
|[gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)|x|
|[gatsby-plugin-google-analytics](https://www.npmjs.com/package/gatsby-plugin-google-analytics)|x|
|[gatsby-plugin-hotjar](https://www.npmjs.com/package/gatsby-plugin-hotjar)|x|
|[gatsby-plugin-sentry](https://github.com/octalmage/gatsby-plugin-sentry)|x|


#### Redux

...

[Redux](https://redux.js.org/) is integrated into Gatsby as per [Gatsby Starter Redux](https://github.com/caki0915/gatsby-starter-redux). This is primary through modification of the `gatsby-ssr.js` file.

Core Redux is extended in the following manner:

|Name|Purpose|
|---|---|
|[react-redux](https://www.npmjs.com/package/react-redux)|x|
|[redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)|x|
|[redux-thunk](https://www.npmjs.com/package/redux-thunk)|x|

The following conventions are used in all Redux files:

- All Redux files corresponds to [Ducks](https://github.com/erikras/ducks-modular-redux) convention.
- All Redux actions correspond to [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) convention.

### Markup and interactivity

...

#### Material UI

...

[Material UI](https://material-ui.com/) is integrated into Gatsby by means of [gatsby-plugin-material-ui](@wapps/gatsby-plugin-material-ui).

The following Material UI modules are used:
|Name|Purpose|
|---|---|
|[@material-ui/core](https://www.npmjs.com/package/@material-ui/core)|x|
|[@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons)|x|
|[@material-ui/lab](https://www.npmjs.com/package/@material-ui/lab)|x|

The following conventions are used when overriding any Material UI styling:

- All custom CSS to be done via [JSS](https://cssinjs.org/) as [outline in the Material UI docs](https://material-ui.com/customization/overrides/).


### Testing
Linting is done through [ESLint](https://eslint.org/) (JavaScript) and enforced by [Husky](https://material-ui.com/)

**Core ESLint rules are extended as follows**:
  - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - [babel-eslint](https://www.npmjs.com/package/babel-eslint)


## Analytics and Error Reporting



## Browser Support
- Browser support defined via [Browserslist](http://browserl.ist/) conventions in `package.json`.
- Browser support currently correspond with the following Browserslist rules:
  - `last 12 chrome versions`
  - `last 12 firefox versions`
  - `last 6 safari versions`
  - `explorer >= 10`
  - `edge > 0`
- Browserslist integration with Gatsby and linting via [Browserslist package](https://www.npmjs.com/package/browserslist).