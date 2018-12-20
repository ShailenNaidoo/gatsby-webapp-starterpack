const createReadmeContent = (props) => {
  const {
    ownerId,
    projectId,
    name,
    description,
    travisUrl,
    stabilityState,
    uptimeRobotKey,
    publicContributions,
  } = props;

  const starterpackVersionShield = '[![](https://img.shields.io/badge/Gatsby_Webapp_Starterpack-0.0.1-lightgray.svg)](https://github.com/OpenUpSA/gatsby-webapp-starterpack)';
  const stabilityStateShield = `![](https://img.shields.io/badge/${stabilityState}.svg)`;
  const uptimeRobotShield = `![](https://img.shields.io/uptimerobot/ratio/${uptimeRobotKey}.svg)`;
  const travisShield = `[![](${travisUrl}.svg?branch=master)];(https://travis-ci.com/OpenUpSA/gatsby-webapp-starterpack)`;
  const publicContributionsShield = publicContributions ? '[![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributions)' : '';

  return `
# ${name}

${starterpackVersionShield} ${stabilityStateShield} ${uptimeRobotShield} ${travisShield} ${publicContributionsShield}

${description}

- _Interested in [contributing to Living Wage Project](#contribute)?_
- _This project is built on the open-source [Gatsby Webapp Starterpack](https://github.com/OpenUpSA/gatsby-webapp-starterpack)._

## 📚 Table of Contents[*](#note-0)

- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Integrations](#integrations)
- [Add remote API](#api)
- [Deploy Checklist](#feature-checklist)

<span id="note-0"></span>
\* _Note that this \`README.md\` file only covers the technologies, integrations and workflow associated with this project. If you want to learn more about the code or how components, files and folders are structured inside the project visit the [project's code documentation](http://${projectId}-docs.netlify.com)_. 

## <span id="getting-started"></span>🚀 Getting Started

### 1. Local Development
1. [Clone](https://help.github.com/${ownerId}/${projcetId}/) this repository from Github.
2. Make sure you have the latest [NodeJS](https://nodejs.org/en/) installed.
3. Run \`npm install\` in the root folder of the repository.
4. Run \`npm start\` to spin up the development server. [*](#note-3)
5. Open \`localhost:8000\` in your browser.

<span id="note-3">*</span> Run \`npm run docs\` to generate local copy of code documentation based of all \`.md\` and \`.mdx\` files in \`/src\`. Once intialised, you can view all documentation for this project at http://localhost:3000.

### 2. Deploying Code
1. If you have write access to the repo use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), if you do not then use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
2. Run \`npm test\` to ensure that all tests pass before running \`git push\`. [<sup>*</sup>](#footnote-1)
3. Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) via the [Github](#github) dashboard to the \`master\` branch.
4. Confirm that you have completed all tasks as outlined in the [deploy checklist](#deploy-checklist).
5. The owner of the repository will automatically be tagged in pull requests via the \`docs/CODEOWNERS\` file.
6. If your code has been reviewed and merged into \`master\` then [Netlify](#netlify) will automatically deploy the changes to [http://${projectId}.netlify.com](http://${projectId}.netlify.com).

<span id="footnote-1"><sup>*</sup></span> Husky prevents pushing to git unless \`npm test\` passes. In emergencies [Husky](#husky) can be bypassed by running \`git push --no-verify\` or \`npm run deploy:no-verify\`.

## <span id="technologies"></span>🔨 Technologies

This project is built on the following technologies:
- [Markup and interactivity](#markup): 
  - [Gatsby](#gatsby)
  - [Redux](#redux)
  - [Axios](#axios)
  - [Lodash](#lodash)
- [Styling](#styling):
  - [Material UI](#material-ui)
  - [JSS](#jss)
- [Testing](#testing): 
  - [Cypress](#cypress)
  - [Jest](#jest)
  - [Enzyme](#enzyme)
  - [ESLint](#eslint)
  - [Husky](#husky)
- [Documentation](#documentation)
  - [Docz](#docz)

### <span id="markup"></span> Markup and interactivity

This project is built on [JAMStack principles](https://jamstack.org/):

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
>
> \- [https://jamstack.org](https://jamstack.org/)

In other words, there is [no server powering the front-end in production](https://en.wikipedia.org/wiki/Serverless_computing).[*](#note-4) This means that a user receives static \`.html\`, \`.css\` and \`.js\` files straight from the host ([Netlify](#netlify) in our case). This has various benefits such as improved security, reduced hosting costs and increased performance. To this end this project heavily relies on [Gatsby](https://www.gatsbyjs.org/) to generate prebuilt assets and [Redux](https://redux.js.org/) to change data once JavaScript loads.

In addition [Axios](#axios) is also included as way to standardise HTTP requests from the project to remote sources. While [Lodash](#) is included as a way to standardise basic low-level data manipulation. For predicatability, these should always be used in favour of bespoke solutions (even if the bespoke solution in question is more performant or technically more 'correct').

As an aside, [Axios](#axios) might possibly be replaced by [Apollo](#) or [Relay](#) in future versions of this project if the relevant [API](#api) endpoints are configured to support GraphQL.

<span id="note-4"></span>
\* _Note that this means any server-side functionality should be added either as a decoupled third-party or custom API endpoint. This might require coordination with a back-end developer._

#### <span id="gatsby"></span>Gatsby

The base [Gatsby](https://www.gatsbyjs.org/) configuration is extended as follows:

|Name|Purpose|
|---|---|
|[gatsby-plugin-manifest](https://www.npmjs.com/package/gatsby-plugin-manifest)|Creates [web app manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest) based on the \`name\` and \`color\` values in the \`app.json\` file. The value of \`name\` is used for both the \`name\` and \`short_name\` values in the manifest. In addition, \`color\` is used for both \`background_color\` and \`theme_color\` in the manifest. |
|[gatsby-plugin-offline](https://www.npmjs.com/package/gatsby-plugin-offline)|Creates and automatically updates the [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) file everytime \`npm run build\` runs. This ensure that new content can be synced locally by newer browsers to reduce mobile data cost, guard against unstable internet connectivity and allow complete offline usage.|
|[gatsby-plugin-material-ui](@wapps/gatsby-plugin-material-ui)| Adds [Material UI](#material-ui) styling during static page generation. This means that static-generated Gatsby files have [Material UI](#material-ui) styles applied inline before JavaScript loads client-side. Otherwise, the styling would only kick in once JavaScript runs. Uses [react-jss](https://www.npmjs.com/package/react-jss) under the hood.|
|[gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)|Adds [react-helmet](https://www.npmjs.com/package/react-helmet) integration for static-generated Gatsby files. This means that \`<helmet>\` information is already present in files before JavaScript loads.|
|[gatsby-plugin-hotjar](https://www.npmjs.com/package/gatsby-plugin-hotjar)| Automatically adds the required Hotjar script to each page. No further integration is needed after the \`HOTJAR_ID\` and \`HOTJAR_SNIPPET_VERSION\` [environment variables]((https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)) are added to [Netlify](#netlify). Learn more about this project's Hotjar integration at the [Hotjar section](#hotjar) in this \`README.md\` file. |
|[gatsby-plugin-google-analytics](https://www.npmjs.com/package/gatsby-plugin-google-analytics)|Automatically inserts a Google Analytics initialisation script in each page. Apart from initialising GA (needed for custom events), it also automatically sends 'pageview' events to GA. Note that [react-ga](https://www.npmjs.com/package/react-ga) has also been included in this project for custom event tracking (requiring no initialisation or integration). To learn more about this project's Google Analytics integration you skip directly to the [Google Analytics](#google-analytics) section.
|[gatsby-plugin-sentry](https://www.npmjs.com/package/gatsby-plugin-sentry)|Automatically adds the required Sentry script to each page. This means that \`Sentry\` is now available in the \`window\` global scope. This plugin only initialises Sentry in your project. You need to manually add Sentry events via the \`Sentry\` object. To learn more you skip directly to the [Sentry](#sentry) section. Uses [Raven.js](https://www.npmjs.com/package/raven-js) under the hood.|

#### <span id="redux"></span>Redux

[Redux](https://redux.js.org/) is integrated into Gatsby as per [Gatsby Starter Redux](https://github.com/caki0915/gatsby-starter-redux). This is primary through modification of the \`gatsby-ssr.js\` file.

Core Redux is extended in the following manner:

|Name|Purpose|
|---|---|
|[react-redux](https://www.npmjs.com/package/react-redux)|x|
|[redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)|x|
|[redux-thunk](https://www.npmjs.com/package/redux-thunk)|x|
|[redux-localstorage](https://www.npmjs.com/package/redux-localstorage)|x|

The following conventions are used in all Redux files:

- All Redux files corresponds to [Ducks](https://github.com/erikras/ducks-modular-redux) convention.
- All Redux actions correspond to [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) convention.

#### <span id="axios"></span>Axios

...

#### <span id="lodash"></span>Lodash

...

### <span id="styling"></span>Styling

This project's approach to styling (as well as extending the current design) is heavily inspired by [Brad Frost](http://bradfrost.com/)'s thinking on the subject of [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) and the principles of [Style Guide Driven Development](http://www.styleguidedrivendevelopment.com/).

In short:

>Design systems speed up your team’s workflow. Rather than reinventing the wheel every time a new request comes through, teams can reuse already established UI puzzle pieces to roll out new pages and features faster than ever before.
>
> \- [Atomic Design (2016)](http://atomicdesign.bradfrost.com/chapter-4/)

In the interest of speed, a third-party [React component-based](https://reactjs.org/docs/react-component.html) library called [Material UI](https://material-ui.com/) has been pre-selected to underpin all styling in this project. 

[Material UI](https://material-ui.com/) is an unofficially implementation of the [Material Design Spec](https://material.io/) (an extremely comprehensive and well-documented UI design system). It is important to note that the team behind the [Material Design Spec](https://material.io/) have their own implementation of their principles via [React components](https://github.com/material-components/material-components-web-react) library. 

However, the unofficial [Material UI](https://material-ui.com/) implementation has been in development since 2017, while the [official Material Design](https://github.com/material-components/material-components-web-react) implementation only started development in 2018. At the time of writing [Material UI](https://material-ui.com/) is still considerably more comprehensive and well-documented than the [official React implementation of Material Design](https://github.com/material-components/material-components-web-react).

As an aside, should the [official implementation of Material Design Spec](https://github.com/material-components/material-components-web-react) overtake [Material UI](https://material-ui.com/) in popularity and production-ready components it will be re-evaulated as an option for implementation into this project.

#### <span id="material-ui"></span>Material UI

[Material UI](https://material-ui.com/) is integrated into Gatsby by means of [gatsby-plugin-material-ui](@wapps/gatsby-plugin-material-ui).

The following [Material UI](https://material-ui.com/) modules are used:
|Name|Purpose|
|---|---|
|[@material-ui/core](https://www.npmjs.com/package/@material-ui/core)|This package includes all core Material Design components and services found at [https://material-ui.com](https://material-ui.com). These can be imported directly into the project as [React components](https://reactjs.org/docs/react-component.html). For example: \`import Card from '@material/icons/Card'\`. Visit [https://material-ui.com/getting-started/usage/](https://material-ui.com/getting-started/usage/) for more details.|
|[@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons)|This package contains all standard SVG Material Design icons as listed on [https://material.io/tools/icons](https://material.io/tools/icons). Icons can be imported into the project via their name (converted into [pascal case](Pascal,_Modula-2_and_Oberon)) as [React component](https://reactjs.org/docs/react-component.html). For example: \`import AddToQueueIcon from '@material/icons/AddToQueue'\`. Visit [https://material-ui.com/style/icons/](https://material-ui.com/style/icons/) for more details.|
|[@material-ui/lab](https://www.npmjs.com/package/@material-ui/lab)|This package contains [Material UI](https://material-ui.com/) components that are still under development, and have not been moved into \`@material/core\` yet. Note that their API might be updated in future versions of [Material UI](https://material-ui.com/), however they are considered production-ready in the current version. Visit [https://material-ui.com/lab/about/](https://material-ui.com/lab/about/) for more details.|

All custom CSS styling and Material UI overrides are done via [JSS](https://cssinjs.org/) as [outline in the Material UI docs](https://material-ui.com/customization/overrides/). Learn more about [JSS](#jss) in the next section.

#### <span id="jss"></span>JSS

For the sake of consistency all custom styling should be done via [JSS](https://cssinjs.org/) (even if outside [Material UI](https://material-ui.com/)).

[JSS](https://cssinjs.org/) provide a lot of the [same benefits](https://cssinjs.org/benefits/) attributed to similar libraries like [Styled Components](https://www.styled-components.com/) or [Emotion](https://emotion.sh/) (but with a smaller footprint). Furthermore, with [code-splitting](https://webpack.js.org/guides/code-splitting/) built natively into [Gatsby](#gatsby), [JSS](https://cssinjs.org/) should actually be more performant than adding raw CSS.

The [react-jss](#) NPM package has been included for usage of [JSS](https://cssinjs.org/) outside of [Material UI](https://material-ui.com/). Visit [https://github.com/cssinjs/jss/tree/master/packages/react-jss](https://github.com/cssinjs/jss/tree/master/packages/react-jss) for documentation and more information.

### Testing

...

#### <span id="cypress"></span>Cypress

...

#### <span id="jest"></span>Jest

...

#### <span id="eslint"></span>ESLint

...

The core [ESLint](https://eslint.org/) module is extended as follows:

|Name|Purpose|
|---|---|
|[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)|x|
|[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)|x|
|[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)|x|
|[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)|x|
|[eslint-plugin-compat](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)|x|
|[babel-eslint](https://www.npmjs.com/package/babel-eslint)|x|

#### <span id="eslint"></span>Husky

...

## <span id="integrations"></span>🔌 Integrations

- Version control and deployment:
  - [Github](#github) 
  - [Netlify](#netlify)
- Testing:
  - [Travis](#travis)
- Reporting:
  - [Google Analytics](#google-analytics)
  - [Sentry](#sentry)
  - [Hotjar](#hotjar)






## Browser Support
- Browser support defined via [Browserslist](http://browserl.ist/) conventions in \`package.json\`.
- Browser support currently correspond with the following Browserslist rules:
  - \`last 12 chrome versions\`
  - \`last 12 firefox versions\`
  - \`last 6 safari versions\`
  - \`explorer >= 10\`
  - \`edge > 0\`
- Browserslist integration with Gatsby and linting via [Browserslist package](https://www.npmjs.com/package/browserslist).


## Feature Branch checklist

### Browser Support

...


 Sentry is used to track production errors in your project. It is great free alternative to enteprise tools like [New Relic](https://newrelic.com/).
`;
};
