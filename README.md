![](https://img.shields.io/github/package-json/v/kaskadi/template-npm-pkg)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/template-npm-pkg?color=blue)

**GitHub Actions workflows status**

[![Build workflow status](https://img.shields.io/github/workflow/status/kaskadi/template-npm-pkg/build?label=build&logo=mocha)](https://github.com/kaskadi/template-npm-pkg/actions?query=workflow%3Abuild)
[![Publish workflow status](https://img.shields.io/github/workflow/status/kaskadi/template-npm-pkg/publish?label=publish&logo=npm)](https://github.com/kaskadi/template-npm-pkg/actions?query=workflow%3Apublish)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/template-npm-pkg?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-npm-pkg)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/template-npm-pkg?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-npm-pkg)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/template-npm-pkg?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-npm-pkg)

<!-- You can add badges inside of this section if you'd like -->

****

# Repository initialization

When creating a repository from this template an `init` workflow (see [here](./.github/workflows/init.yml)) will run. This workflow uses [`kaskadi-cli`](https://www.npmjs.com/package/kaskadi-cli) in order to properly initialize your repository by:
- updating the names refering to the template in relevant files (for example `package.json`, `package-lock.json`, etc.) and renaming some files if need be
- automatically adding your repository to _Code Climate_
- automatically setting `REPORTER_ID` secret inside of your repository for test coverage upload to _Code Climate_. This may fail because of _Code Climate_ infrastructure latency in setting up your repository. In such case your workflow will emit a warning telling you to set `REPORTER_ID` manually

# Testing

`mocha`, `chai`, `nyc`, `dotenv` & `standard` are available as dev dependencies.

A `build` workflow (see [here](./.github/workflows/build.yml)) is running on `pull request` and will execute your test suite before allowing you to merge your PR. It also has a `coverage` job already prepared that you can comment out as soon as your testing is in place and your `REPORTER_ID` is in the repository secrets. This is the ID on _Code Climate_ used for uploading code coverage reports.

Beside running your unit tests, this workflow also runs a static code analysis to find any vulnerability in your code. If a vulnerability is found, a notification will appear in the `Security` tab of your repository.

****

# Documentation

This repository comes with a `generate-docs` job inside of the `publish` workflow that generates documentation automatically for you using [`JSDOC`](https://jsdoc.app/). It'll check all your `.js` files for `JSDOC`-like comments in order to build its documentation. See [here](https://github.com/kaskadi/action-generate-docs) for more information.

If you would like to see the workflow configuration, head [here](./.github/workflows/publish.yml).

You can configure the template used to generate the action documentation [here](./docs/template.md).

****

# Publishing

Publishing to NPM is done automatically via a `publish` workflow (see [here](./.github/workflows/publish.yml)). This workflow will run on `push`. It checks the currently published version versus the one in `package.json` and if those versions differ then it publishes to NPM.

Before publishing, this workflow also runs a static code analysis to find any vulnerability in your code. If a vulnerability is found, a notification will appear in the `Security` tab of your repository.

Beside this analysis, the workflow will run your unit tests right before publishing to make sure that no bugs have been introduced.

**Warning: in order for this workflow to work properly, you'll have to manually publish your package on initial publish.**

****

<!-- automatically generated documentation will be placed in here -->
# Installation

```
npm i template-npm-pkg
```

# API documentation

## help

You can use JSDoc comments in your `.js` files to generate automatically documentation for your package via the `generate-docs` workflow.

<!-- LINKS -->
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->