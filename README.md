# 🎁 Gatsby Webapp Starterpack

<!-- ![](https://img.shields.io/badge/Gatsby_Webapp_Starter-0.0.1-lightgray.svg) ![](https://img.shields.io/badge/....svg) ![](https://img.shields.io/uptimerobot/ratio/....svg) ![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![](https://img.shields.io/badge/slack%20channel-%23....svg)](https://openupsa.slack.com) -->

Open-source [Gatsby](https://www.gatsbyjs.org/) starter used internally at [OpenUp](#) for interactive webapp projects.

## 📚 Table of Contents [*](#note-0)

- [Goals](#goals)
- [Getting Started](#getting-started)
- [Architecture Summary](#architecture-summary)
- [Technologies](#technologies)
- [Integrations](#integrations)
- [Feature branch checklist](#feature-checklist)

<span id="note-0"></span>\* Note that this `README.md` file only covers the technologies, integrations and workflow associated with this starter. If you want to learn more about how files/folders are structured inside `src/` you need to clone this repository and then run `npm install & npm run docs` in the root of the project.

## <span id="goals"></span>⭐️ Goals

**This starter is meant to establish a standardised and documented foundation for OpenUp upon which to build interactive-heavy webapp projects. The creation (and all further iterations) of this starter are driven by the following broad goals:** [*](#note-1)

### 1. Self-driven Onboarding

After reading the `README.md` file, contributors should be able to jump straight into projects without guidance/instruction from the existing project team.

It is essential that the technologies and conventions used in this starter be popular/well-used and extensively documented online. 

In addition, the starter should also include tooling that makes it easy to document components and services with minimal effort while developing.

### 2. Comprehensive

This starter should be infinitely scaleable and usable in a wide range of projects without the introduction of additional technologies and/or modification to the existing stack.

Therefore, any overrides or tweaks to the current system should be considered as a code smells.

### 3. Accessible

Although specifically built for front-end developers, non-FEDs should be able to make basic changes to existing projects and/or bootstrap simple projects themselves.

This means that no enviroment-specific hacks or additional steps should be required to get the starter (or projects built on the starter) running on different operating systems.

The starter should (to this end) be continually and extensively tested in different environments.

### 4. Encourages Iteration

...

<span id="note-1"></span>\* This starter has specifically been designed for internal use at Openup. However it is licensed under [MIT](https://opensource.org/licenses/MIT). If you are interested in using it in your own project let us know at schalk@openup.org.za

## <span id="getting-started"></span>🚀 Getting Started

### 1. Create Project

- Clone this starter repo by running `git clone https://github.com/openupsa/gatsby-webapp-starter`.
- Replace `src/assets/meta/icon.png` with custom `.png` image to use for favicon and app logo.
- Configure `app.json` file with required information. [*](#note-2)
- Update `name`, `description` and `author` in `package.json`.
- Create a new Github repository and push your code.

<span id="note-2">*</span> Note that when the app is launched the logo will be overlayed over a background of `color`. It is a good idea to have a bit of contrast between `color` and the colors used in `icon.png`.

### 2. Deploy Code

- Create [Netlify](https://www.netlify.com/) account and link to Github (only give permissions to the repository, not the entire account).
- If site is being automatically deployed you can cancel it (we need to do some configuration first).
- Create a `CYPRESS_INSTALL_BINARY` [enviroment variable](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables) and set it to `0`. The binary is very helpful in local development, but takes a while to install and not needed in on Netlify.
- You can then manually trigger a re-deploy.
- Once repository is deployed to Netlify, you can configure a custom domain. (This will look something like `https://mydomain.netlify.com`).
- Go to custom domain in your browser to confirm that it deployed correctly.

### 3. Add Integrations

- Create [Travis](https://travis-ci.org/) account and link to Github (only give permissions to the repository, not the entire account).
- Create a `CYPRESS_INSTALL_BINARY` [enviroment variable](https://docs.travis-ci.com/user/environment-variables/) and set it to `0`. The binary is very helpful in local development, but takes a while to install and not needed in on Netlify.
- Setup up and configure the following accounts:
  - [Google Analytics](https://analytics.google.com/analytics/web/)
  - [Sentry](https://sentry.io)
  - [Hotjar](https://www.hotjar.com/)
- Add the following [enviroment variables](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables) and values to Netlify.
  - `HOTJAR_ID`: Value can be obtained from the snippet provided on https://hotjar.com. This is the value assigned to the `hjid` property in the snippet. The value is the specific numeric ID assigned to the project. For example: `1234567`.
  - `HOTJAR_SNIPPET_VERSION`: Value can be obtained from the snippet provided on https://hotjar.com. This is the value assigned to the `hjsv` property in the snippet. The value is the version of Hotjar that should be used (most recent is `6`).
  - `GOOGLE_ANALYTICS_ID`: Value can be obtained from https://analytics.google.com. This is the ID assigned to the property used for the project. The value usually starts with `UA-` and contains a series of numbers. For example: `UA-123456789-0` 
  - `SENTRY_DNS`: Value can be obtained from https://sentry.io. The value is stored under _Client Keys (DNS)_ and takes the form of a URL. For example: `https://123@sentry.io/456`

### 4. Update `README.md`

- Change title and first introductory sentence.
- Un-comment and configure shields at the top:
  - Configure the _stability_ shield to one of the [7 pre-selected states](https://github.com/orangemug/stability-badges).
  - Create [Uptime Robot](https://uptimerobot.com/) monitor and add monitor API key as name of `.svg` file in the path.
  - If public contributions are allowed do not remove the _'PRs Welcome'_ shield.
  - If project has a designated Slack channel then add the name of the channel to the shield (if workspace is not OpenUp, then change link to relevant workspace URL).
- Un-comment the new instructions below title _Local Development_ and _Pushing Code_.
- Remove _Create Project_, _Deploy Code_, _Add intergrations_ and this _Update `README.md`_ sections from file.

<!--

### 1. Local Development
1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository from Github.
2. Make sure you have the latest [NodeJS](https://nodejs.org/en/) installed.
3. Run `npm install` in the root folder of the repository.
4. Run `npm start` to spin up the development server. [*](#note-3)
5. Open `localhost:8000` in your browser.

<span id="note-3">*</span> Run `npm run docs` in order to initialise documentation based of all `.md` and `.mdx` files in `/src`. Once intialised, you can view all documentation for this project at http://localhost:3000.


### 2. Deploying Code
1. If you have write access to the repo use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), if you do not then use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
2. Run `npm test` to ensure that all tests pass before running `git push`. [<sup>*</sup>](#footnote-1)
3. Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) via the [Github](#github) dashboard to the `master` branch.
4. The owner of the repository will automatically be tagged in pull requests via the `docs/CODEOWNERS` file.
5. If your code has been reviewed and merged  into `master` then [Netlify](#netlify) will automatically deploy the changes to the production environment.

<span id="footnote-1"><sup>*</sup></span> Husky prevents pushing to git unless `npm test` passes. In emergencies [Husky](https://www.npmjs.com/package/husky) can be bypassed by running `git push --no-verify` or `npm run deploy:no-verify`.

-->

## <span id="technologies"></span>🔧 Technologies

This project is built on the following technologies:
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
- Documentation
  - [Docz](#docz)

### Markup and interactivity

...

#### <span id="gatsby"></span>Gatsby
...

The base [Gatsby](https://www.gatsbyjs.org/) configuration is extended as follows:

|Name|Purpose|
|---|---|
|[gatsby-plugin-material-ui](@wapps/gatsby-plugin-material-ui)| Adds Material UI styling during static page generation. This means that static generated Gatsby files have Material UI applied before JavaScript loads client-side. Otherwise, [JSS](https://cssinjs.org/) CSS-in-JSS would only kick in when JavaScript runs.|
|[gatsby-plugin-manifest](https://www.npmjs.com/package/gatsby-plugin-manifest)|Creates [web app manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest) based on the `name` and `color` values in the `app.json` file. The value of `name` is used for both the `name` and `short_name` values in the manifest. In addition, `color` is used for both `background_color` and `theme_color` in the manifest. |
|[gatsby-plugin-offline](https://www.npmjs.com/package/gatsby-plugin-offline)|Creates and updates the [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) file used by Gatsby content generated content, allowing it to be viewed offline.|
|[gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)|Adds [react-helmet](https://www.npmjs.com/package/react-helmet) integration for static generated Gatsby content. This means that meta information is already present on the rendered page before JavaScript loads.|
|[gatsby-plugin-google-analytics](https://www.npmjs.com/package/gatsby-plugin-google-analytics)|Automatically inserts a Google Analytics initialisation script (at the end of the body) for each page. Apart from initialising GA (needed for custom events), it also automatically sends pageviews to GA. Note that [react-ga](https://www.npmjs.com/package/react-ga) has also been include in this project for custom event tracking. To learn more you skip directly to the [Google Analytics](#google-analytics) section.
|[gatsby-plugin-hotjar](https://www.npmjs.com/package/gatsby-plugin-hotjar)|x|
|[gatsby-plugin-sentry](https://www.npmjs.com/package/gatsby-plugin-sentry)|x|
|[gatsby-plugin-mdx](https://www.npmjs.com/package/gatsby-plugin-sentry)|x|
|[gatsby-source-filesystem](https://www.npmjs.com/package/gatsby-source-filesystem)|x|

#### <span id="redux"></span>Redux

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

#### <span id="material-ui"></span>Material UI

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

...

#### <span id="cypress"></span>Cypress

...

#### <span id="jest"></span>Jest

...

#### <span id="enzyme"></span>Enzyme

...

#### <span id="eslint"></span>ESLINT

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
- Browser support defined via [Browserslist](http://browserl.ist/) conventions in `package.json`.
- Browser support currently correspond with the following Browserslist rules:
  - `last 12 chrome versions`
  - `last 12 firefox versions`
  - `last 6 safari versions`
  - `explorer >= 10`
  - `edge > 0`
- Browserslist integration with Gatsby and linting via [Browserslist package](https://www.npmjs.com/package/browserslist).


## Feature Branch checklist

### Browser Support

...
