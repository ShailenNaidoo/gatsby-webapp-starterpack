# 🎁 Gatsby Webapp Starterpack

Open-source [Gatsby](https://www.gatsbyjs.org/) starter used internally at [civic-tech](https://en.wikipedia.org/wiki/Civic_technology) non-profit organisation, [OpenUp](https://openup.org.za). 

Built specifically to allow open-source contributors to make meaningful pull-requests in a matter of minutes and aid the core team in merging (highly testable) code with confidence.

- _Current production-ready version is 0.0.1_

## 📚 Table of Contents[*](#note-0)

- [Goals](#goals)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Integrations](#integrations)
- [Add remote API](#api)
- [Deploy Checklist](#feature-checklist)

<span id="note-0"></span>
\* _Note that this `README.md` file only covers the technologies, integrations and workflow associated with this starter. If you want to learn more about the code or how components, files and folders are structured inside the project visit the [project's code documentation](http://gatsby-webapp-starterpack-docs.netlify.com)_. 

## <span id="goals"></span>⭐️ Goals

**This starter is meant to establish a standardised and documented foundation for [OpenUp](https://openup.org.za) upon which to build interactive-heavy webapp projects.[*](#note-1) The creation (and all further iterations) of this starter are driven by the following broad goals:** 

### 1. Self-driven Onboarding

After reading the `README.md` file and [project's code documentation](http://gatsby-webapp-starterpack-docs.netlify.com)., contributors should be able to jump straight into any project built on this starter without guidance/instruction from the existing project team.

It is essential that the [technologies](#technologies), [integrations](#integrations) and conventions used in this starter be popular/well-used and extensively documented online. In addition, the starter should also include tooling that encourages [code documentation](#documentation) and creation of [tests](#tests) alongside normal day-to-day development.

### 2. Comprehensive

This starter should be infinitely scaleable and usable in a wide range of projects without the introduction of additional [technologies](#technologies) and/or modification to the existing stack.

Therefore, any overrides or tweaks to the current system on a per-project basis should be considered as a code smells.

### 3. Accessible

Although specifically built for front-end developers, non-FEDs should be able to make basic changes to existing projects and/or [bootstrap simple projects](#get-started) themselves.

This means that no enviroment-specific hacks or additional steps should be required to get the starter (or projects built on the starter) running on different operating systems. The starter should (to this end) be continually tested in different environments and by developers of different backgrounds/skill levels.

### 4. Encourages Iteration

Not only should the structure of this starter aid and encourage quick iteration cycles, but the starter itself should be built/developed in a manner that allows iteration on the starter itself.

All [technology](#technologies) and [integrations](#integrations) underpinning the starter should be siloed from one another and have minimal custom configuration. Adherence to this should allow the team to easily swap out/update existing technologies.

<span id="note-1"></span>
\* _This starter has specifically been designed for internal use at Openup. However it is licensed under [MIT](https://opensource.org/licenses/MIT). If you are interested in using it in your own project send an email to [schalk@openup.org.za](mailto:schalk@openup.org.za)._

## <span id="getting-started"></span>🚀 Getting Started

### 1. Create Project

- Clone this starter repo by running `git clone https://github.com/openupsa/gatsby-webapp-starterpack`.
- Run `npm install`.
- Run `npm run starterpack` and follow instructions.
- Replace `src/assets/meta/icon.png` with a custom `.png` image to use as a favicon and desktop/mobile app icon.[<sup>1</sup>](#note-2)
- Create a new Github repository with the same name as the `name` property in the `package.json` file.
- Run `git remote add origin https://github.com/<ACCOUNT>/<REPOSITORY_NAME>.git && git push -u origin master`[<sup>2</sup>](#note-d)

<span id="note-2"></span>
<sup>1</sup> _Note that when the app is launched the logo will be overlayed over a background of `color` passed during `npm run starterpack`. It is a good idea to have a bit of contrast between `color` and the colors used in `icon.png`. You can run `npm run starterpack:update` if you want to change the initial `color` value._

<span id="note-d"></span>
<sup>2</sup> _Remember to replace the `<ACCOUNT>` and `<REPOSITORY_NAME>` placeholders with your own details and not use the placeholders themselves!_

### 2. Deploy Code

- Create a free [Netlify](#netlify) project (at https://netlify.com) and link to the [Github](#github) repository you just created (only give permissions to the repository, not the entire account). Note that on the third (`3. Build options, and deploy!`) step you can use the default populated values.
- The first deploy (that should start running automatically) takes a very long time. It might even fail. Do not worry this is expected and will be fixed in the next upcoming steps).
- In the mean-time you should configure a custom domain on [Netlify](#netlify) that coincides with the `name` property in the `package.json` file . (This will look something like `https://my-package-json-name-property.netlify.com`).
- Then repeat the last three steps again (create a brand new project), but change the following:
  - On the `3. Build options, and deploy!` step replace `gatsby build` with `npm run build:docs` and `public` with `.docz/dist/`.
  - Affix `-docs` to the new custom domain name. For example `https://my-package-json-name-property-docs.netlify.com`.
- Do not wait for deployment on any of the above to finish, proceed to next step.

### 3. Add Integrations

- Create a free [Travis](https://travis-ci.org/) project and link to [Github](#github) (only give permissions to this project's repository, not the entire account).
- Run `npm run starterpack:update`, select `Travis key` and follow instructions.
- Create a `CYPRESS_INSTALL_BINARY` as a [Travis enviroment variable](https://docs.travis-ci.com/user/environment-variables/) on [Travis](https://travis-ci.org/) itself and set it to `0`. (This step should also be done for both [Netlify](#netlify) projects you just created via the [Netlify environmental variables](#)). [*](#note-a)
- Setup up and configure the following free accounts:
  - [Google Analytics](#google-analytics) via [https://analytics.google.com/analytics/web/](https://analytics.google.com/analytics/web/)
  - [Sentry](#sentry) via [https://sentry.io](https://sentry.io)
  - [Hotjar](#hotjar) via [https://www.hotjar.com/](https://www.hotjar.com/)
- Add the following [enviroment variables](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables) and values (only needed for the first [Netlify](#) project and not for [Travis](#travis) or the second `-docs` [Netlify](#netlify) project created).
  - `HOTJAR_ID`: Value can be obtained from the snippet provided on https://hotjar.com. This is the value assigned to the `hjid` property in the snippet. This value expresses the specific numeric ID assigned to the project on [Hotjar](#hotjar). For example: `1234567`.
  - `HOTJAR_SNIPPET_VERSION`: Value can be obtained from the snippet provided on https://hotjar.com. This is the value assigned to the `hjsv` property in the snippet. The value is the version of Hotjar that should be used (most recent is `6`).
  - `GOOGLE_ANALYTICS_ID`: Value can be obtained from https://analytics.google.com. This value expresses the ID assigned to the property on [Google Analytics](#google-analytics). The value usually starts with `UA-` and contains a series of numbers. For example: `UA-123456789-0` 
  - `SENTRY_DNS`: Value can be obtained from https://sentry.io. The value is stored on the _Client Keys (DNS)_ page and takes the form of a URL. For example: `https://123@sentry.io/456`
- Now that everything is set up go to both projects on https://netlify.com dashboard and manually trigger a redeploy (clear the cache if option is present).
- Once both are deployed go to each domain in your browser to confirm that they deployed correctly.

\* _<span id="note-a"></span> The binary is very helpful in local development, but takes a very long time to install and not needed in [Travis](#travis) or [Netlify](#netlify)._

### 4. Configure Github

- Go to the `settings` page for the project on https://github.com.
- Make sure that `wikis` and `projects` are unselected.
- Add collaborators under the `collaborators & teams` page as needed.
- Go to the `branches` page and click `add rule`.
  - Type `master` into the section that says `Apply rule to`.
  - Select `Require pull request reviews before merging` and select all sub-options under it.
  - Select the `Include administrators` option. [*](#note-c)
  - Click `Save changes`.

<span id="note-c"></span>
\* _In emergencies administrators can do forced merges by going into settings and disabling `Include administrators`. However, remember to select it again once the PR in question has been merged._

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

In other words, there is [no server powering the front-end in production](https://en.wikipedia.org/wiki/Serverless_computing).<sup>[1](#note-4)</sup> This means that a user receives static `.html`, `.css` and `.js` files straight from the host ([Netlify](#netlify) in our case). This has various benefits such as improved security, reduced hosting costs and increased performance. To this end this project heavily relies on [Gatsby](https://www.gatsbyjs.org/) to generate prebuilt assets and [Redux](https://redux.js.org/) <sup>[2](#note-b)</sup> to change data once JavaScript loads.

In addition [Axios](#axios) is also included as way to standardise HTTP requests from the project to remote sources. While [Lodash](#) is included as a way to standardise basic low-level data manipulation. For predicatability, these should always be used in favour of bespoke solutions (even if the bespoke solution in question is more performant or technically more 'correct').

As an aside, [Axios](#axios) might possibly be replaced by [Apollo](#) or [Relay](#) in future versions of this project if the relevant [API](#api) endpoints are configured to support GraphQL.

<span id="note-4"></span>
<sup>1</sup> _Note that this means any server-side functionality should be added either as a decoupled third-party or custom API endpoint. This might require coordination with a back-end developer._

<span id="note-b"></span>
<sup>2</sup> _Redux has a bit of a steep learning curve due to its uncompromising adherence to [functional programming principles](https://en.wikipedia.org/wiki/Functional_programming). However, this adherence to FP allows us to implement some super-powerful patterns (most notably [time travel](https://redux.js.org/recipes/implementing-undo-history) and [action composition](https://redux.js.org/api/compose))._

#### <span id="gatsby"></span>Gatsby

The base [Gatsby](https://www.gatsbyjs.org/) configuration is extended as follows:

|Name|Purpose|
|---|---|
|[gatsby-plugin-manifest](https://www.npmjs.com/package/gatsby-plugin-manifest)|Creates [web app manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest) based on the `name` and `color` values in the `app.json` file. The value of `name` is used for both the `name` and `short_name` values in the manifest. In addition, `color` is used for both `background_color` and `theme_color` in the manifest. |
|[gatsby-plugin-offline](https://www.npmjs.com/package/gatsby-plugin-offline)|Creates and automatically updates the [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) file everytime `npm run build` runs. This ensure that new content can be synced locally by newer browsers to reduce mobile data cost, guard against unstable internet connectivity and allow complete offline usage.|
|[gatsby-plugin-material-ui](@wapps/gatsby-plugin-material-ui)| Adds [Material UI](#material-ui) styling during static page generation. This means that static-generated Gatsby files have [Material UI](#material-ui) styles applied inline before JavaScript loads client-side. Otherwise, the styling would only kick in once JavaScript runs. Uses [react-jss](https://www.npmjs.com/package/react-jss) under the hood.|
|[gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)|Adds [react-helmet](https://www.npmjs.com/package/react-helmet) integration for static-generated Gatsby files. This means that `<helmet>` information is already present in files before JavaScript loads.|
|[gatsby-plugin-hotjar](https://www.npmjs.com/package/gatsby-plugin-hotjar)| Automatically adds the required Hotjar script to each page. No further integration is needed after the `HOTJAR_ID` and `HOTJAR_SNIPPET_VERSION` [environment variables]((https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)) are added to [Netlify](#netlify). Learn more about this project's Hotjar integration at the [Hotjar section](#hotjar) in this `README.md` file. |
|[gatsby-plugin-google-analytics](https://www.npmjs.com/package/gatsby-plugin-google-analytics)|Automatically inserts a Google Analytics initialisation script in each page. Apart from initialising GA (needed for custom events), it also automatically sends 'pageview' events to GA. Note that [react-ga](https://www.npmjs.com/package/react-ga) has also been included in this project for custom event tracking (requiring no initialisation or integration). To learn more about this project's Google Analytics integration you skip directly to the [Google Analytics](#google-analytics) section.
|[gatsby-plugin-sentry](https://www.npmjs.com/package/gatsby-plugin-sentry)|Automatically adds the required Sentry script to each page. This means that `Sentry` is now available in the `window` global scope. This plugin only initialises Sentry in your project. You need to manually add Sentry events via the `Sentry` object. To learn more you skip directly to the [Sentry](#sentry) section. Uses [Raven.js](https://www.npmjs.com/package/raven-js) under the hood.|

#### <span id="redux"></span>Redux

[Redux](https://redux.js.org/) is integrated into Gatsby as per [Gatsby Starter Redux](https://github.com/caki0915/gatsby-starter-redux). This is primary through modification of the `gatsby-ssr.js` file.

Core Redux is extended in the following manner:

|Name|Purpose|
|---|---|
|[react-redux](https://www.npmjs.com/package/react-redux)|An official package mantained by the core [Redux](https://redux.js.org/) team. Includes a wrapper `<Provider />` component that exposes the [Redux store](https://redux.js.org/api/store) and selected [actions](https://redux.js.org/basics/actions) to its [children](https://reactjs.org/docs/react-api.html#reactchildren). Also includes low-level performance optimizations between [Redux](#redux) and the [React virtual DOM](https://reactjs.org/docs/faq-internals.html). |
|[redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)| [Middleware](https://redux.js.org/advanced/middleware) that exposes the data needed by Redux development/debugging tools (available for Chrome, Firefox, Electron and mobile devices as [per the following instructions](https://github.com/zalmoxisus/redux-devtools-extension#installation). Is removed in production.|
|[redux-thunk](https://www.npmjs.com/package/redux-thunk)| [Middleware](https://redux.js.org/advanced/middleware) that consumes [thunks](https://en.wikipedia.org/wiki/Thunk) returned from [Redux actions](https://redux.js.org/basics/actions). This allows us to chain actions together and initialise asynchronous [Redux actions](https://redux.js.org/basics/actions). The latter is something that is not provided in [Redux](#redux) out of the box. A smaller and simpler to alernative to solutions like [Redux Saga](https://redux-saga.js.org/) and [Redux Observables](https://redux-observable.js.org/) |
|[redux-localstorage](https://www.npmjs.com/package/redux-localstorage)|[Middleware](https://redux.js.org/advanced/middleware) that automatically saves the [Redux store](https://redux.js.org/api/store) to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) each time an [action](https://redux.js.org/basics/actions) is submitted. Also hydrates the  [Redux store](https://redux.js.org/api/store) from [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) when Redux is initialised (if saved). By default no data from the [Redux store](https://redux.js.org/api/store) is saved to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). The names of the root keys [store](https://redux.js.org/api/store) can be passed as an array of Strings to flag them for persistance. Furthermore, `null` can be passed instead of an array to flag entire [store](https://redux.js.org/api/store) to persist. The latter is not recommended due to the risk of accidently syncing sensitive user information.|

The following conventions are used in all Redux files:

- All Redux files corresponds to [Ducks](https://github.com/erikras/ducks-modular-redux) convention.
- All Redux actions correspond to [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) convention.

#### <span id="axios"></span>Axios

The native [JavaScript fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (introduced in the [ES2015 spec](http://www.ecma-international.org/ecma-262/6.0/index.html)) more often than not negates the need for additional libraries to handle HTTP requests (for example the `$.ajax()` method in [jQuery](https://jquery.com/)). Furthermore, with the widespread use of the [WHATWG fetch polyfill](https://www.npmjs.com/package/whatwg-fetch) the cross-browser nightmare that was HTTP requests a couple of years ago are a thing of the past.

Regardless, there are still benefits to including a very thin abstraction over the `fetch` API. For example, the widely popular [Axios](https://www.npmjs.com/package/axios) (included in this project) wraps the `fetch` API 
some in some [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) and helpful JavaScript [utilities](https://en.wikipedia.org/wiki/Helper_class).

Some of these, amongst other, are:
- A single method to do HTTP request in both the browser and NodeJS (on which [Gatsby](#gatsby)'s static asset generation is built).
- Allows the [cancellation of HTTP requests](https://github.com/axios/axios#cancellation) (which is not production ready in native JavaScript by means of [AbortionController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) yet).
- Built-in protection against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery).
- Automatic JSON [parsing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [serialization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
- Abstracting away error handling into a single `.catch()` method.
- Setting default [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) and [parameters](https://en.wikipedia.org/wiki/Query_string).
- Plug a normalisation function straight into either the [HTTP request](https://developer.mozilla.org/en-US/docs/Web/API/Request) or [HTTP response](https://developer.mozilla.org/en-US/docs/Web/API/Response).

Have a look at the [Axios repository on Github](https://github.com/axios/axios
) for the offical documentation.


#### <span id="lodash"></span>Lodash

...

### <span id="styling"></span>Styling

**This project's approach to styling (as well as methods of extending the current design) is heavily inspired by [Brad Frost](http://bradfrost.com/)'s thinking on the subject of [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) and the principles of [Style Guide Driven Development](http://www.styleguidedrivendevelopment.com/).**

In short:

>Design systems speed up your team’s workflow. Rather than reinventing the wheel every time a new request comes through, teams can reuse already established UI puzzle pieces to roll out new pages and features faster than ever before.
>
> \- [Atomic Design (2016)](http://atomicdesign.bradfrost.com/chapter-4/)

In the interest of speed, a third-party [React component-based](https://reactjs.org/docs/react-component.html) library called [Material UI](https://material-ui.com/) has been pre-selected to underpin all styling in this project. [Material UI](https://material-ui.com/) is an unofficially implementation of the [Material Design Spec](https://material.io/) (an extremely comprehensive and well-documented UI design system). 

It is important to note that the team behind the [Material Design Spec](https://material.io/) have their own implementation of their principles via [Material Components Web for React](https://github.com/material-components/material-components-web-react) library. However, the unofficial [Material UI](https://material-ui.com/) implementation has been in development since 2017, while the [official Material Design](https://github.com/material-components/material-components-web-react) implementation only started development in 2018. 

At the time of writing [Material UI](https://material-ui.com/) is still considerably more comprehensive and well-documented than the [official React implementation of Material Design](https://github.com/material-components/material-components-web-react). Should the [official implementation of Material Design Spec](https://github.com/material-components/material-components-web-react) overtake [Material UI](https://material-ui.com/) in popularity and production-ready components it will be re-evaulated as an option for implementation into this project.

#### <span id="material-ui"></span>Material UI

[Material UI](https://material-ui.com/) is integrated into Gatsby by means of [gatsby-plugin-material-ui](@wapps/gatsby-plugin-material-ui).

The following [Material UI](https://material-ui.com/) modules are used:

|Name|Purpose|
|---|---|
|[@material-ui/core](https://www.npmjs.com/package/@material-ui/core)|This package includes all core Material Design components and services found at [https://material-ui.com](https://material-ui.com). These can be imported directly into the project as [React components](https://reactjs.org/docs/react-component.html). For example: `import Card from '@material/icons/Card'`. Visit [https://material-ui.com/getting-started/usage/](https://material-ui.com/getting-started/usage/) for more details.|
|[@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons)|This package contains all standard SVG Material Design icons as listed on [https://material.io/tools/icons](https://material.io/tools/icons). Icons can be imported into the project via their name (converted into [pascal case](Pascal,_Modula-2_and_Oberon)) as [React component](https://reactjs.org/docs/react-component.html). For example: `import AddToQueueIcon from '@material/icons/AddToQueue'`. Visit [https://material-ui.com/style/icons/](https://material-ui.com/style/icons/) for more details.|
|[@material-ui/lab](https://www.npmjs.com/package/@material-ui/lab)|This package contains [Material UI](https://material-ui.com/) components that are still under development, and have not been moved into `@material/core` yet. Note that their API might be updated in future versions of [Material UI](https://material-ui.com/), however they are considered production-ready in the current version. Visit [https://material-ui.com/lab/about/](https://material-ui.com/lab/about/) for more details.|

All custom CSS styling and Material UI overrides are done via [JSS](https://cssinjs.org/) as [outline in the Material UI docs](https://material-ui.com/customization/overrides/). Learn more about [JSS](#jss) in the next section.

#### <span id="jss"></span>JSS

For the sake of consistency all custom styling should be done via [JSS](https://cssinjs.org/) (even if outside [Material UI](https://material-ui.com/)).

[JSS](https://cssinjs.org/) provide a lot of the [same benefits](https://cssinjs.org/benefits/) attributed to similar libraries like [Styled Components](https://www.styled-components.com/) or [Emotion](https://emotion.sh/) but with a considerably smaller footprint. Furthermore, with [code-splitting](https://webpack.js.org/guides/code-splitting/) built natively into [Gatsby](#gatsby), [JSS](https://cssinjs.org/) should actually be more performant than adding raw CSS.

The [react-jss](#) package has been included for usage of [JSS](https://cssinjs.org/) outside of [Material UI](https://material-ui.com/). Visit [https://github.com/cssinjs/jss/tree/master/packages/react-jss](https://github.com/cssinjs/jss/tree/master/packages/react-jss) for documentation and more information.

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

- Deployment:
  - [Github](#github) 
  - [Netlify](#netlify)
- Testing:
  - [Travis](#travis)
- Reporting:
  - [Google Analytics](#google-analytics)
  - [Hotjar](#hotjar)
  - [Sentry](#sentry)

### <span id="deployment"></span> Deployment

...

#### <span id="cypress"></span> Github

...

#### <span id="jest"></span>Jest

...

#### <span id="eslint"></span>ESLint

...

### <span id="testing"></span> Testing

...

#### <span id="cypress"></span> Travis

...


### <span id="testing"></span> Reporting

...

#### <span id="cypress"></span> Google Analytics

...

#### <span id="cypress"></span> Hotjar

...

#### <span id="cypress"></span> Sentry

...

## <span id="deploy-checklist"></span> Deploy Checklist

...

### <span id="unit-tests"></span> Unit Tests

...

### <span id="unit-tests"></span> Integration Tests

...

### <span id="unit-tests"></span> Code Documentation

...

### <span id="unit-tests"></span> Sentry Integration

...

### <span id="unit-tests"></span> Crossbrowser Testing

...

- Browser support defined via [Browserslist](http://browserl.ist/) conventions in `package.json`.
- Browser support currently correspond with the following Browserslist rules:
  - `last 12 chrome versions`
  - `last 12 firefox versions`
  - `last 6 safari versions`
  - `explorer >= 10`
  - `edge > 0`
- Browserslist integration with Gatsby and linting via [Browserslist package](https://www.npmjs.com/package/browserslist).


## Contributions

Thank you to the following non-OpenUp individuals for input, feedback and volunteering to test the starter:

- [Shailen Naido](https://github.com/ShailenNaidoo)
