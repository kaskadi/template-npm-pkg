![](https://img.shields.io/github/package-json/v/kaskadi/template-npm-pkg)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/template-npm-pkg?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/template-npm-pkg/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/template-npm-pkg/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/template-npm-pkg/build?label=build&logo=mocha)](https://github.com/kaskadi/template-npm-pkg/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/template-npm-pkg/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/template-npm-pkg/actions?query=workflow%3Asyntax-check)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/template-npm-pkg?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-npm-pkg)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/template-npm-pkg?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-npm-pkg)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/template-npm-pkg?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-npm-pkg)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/template-npm-pkg?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/template-npm-pkg/?mode=list&logo=LGTM)

:point_right: **Badges here** :point_left:

****

❌ **This section can be deleted when done with all the preliminary work** ❌

# :computer: Creating a new NPM package from this template :computer:

**Checklist (delete items when done)**
- create a new repository and choose this repository as template
- clone the new repository to a local working copy
- add the new repository to:
  - _CodeClimate_ ([help](#Add-the-NPM-package-repository-on-CodeClimate))
  - _LGTM_ ([help](#Add-the-NPM-package-repository-on-LGTM))
- install all dependencies via `npm i`
- develop your package and when you will push it to master it'll get deployed if your version is different than the one already on NPM

**Attention:**
- if you wish to use kaskadi's CLI tools, make sure to have `kaskadi-cli` installed globally (`npm i -g kaskadi-cli`)
- for your first package publishing, please publish the package manually via NPM CLI

## Add the NPM package repository on [_CodeClimate_](https://codeclimate.com)

**Steps:**
1. log into your dashboard on [_CodeClimate_](https://codeclimate.com/dashboard)
2. pick the correct organization
  - kaskadi for closed source projects
  - Open source otherwise
3. click on `Add a repository`
4. once the list of repositories is visible, click on `Add Repo` next to the repository you would like to add on _CodeClimate_

**But, how can I find my reporter ID?**

1. go into the repository you would like to set test coverage reporting for
2. click on `Repo Settings` in the top navigation bar
3. click on `Test coverage` in the menu on the left side
4. you can now copy the _TEST REPORTER ID_ and use it as secrets (`REPORTER_ID`) in your repository to setup automated test coverage reporting!

## Add the NPM package repository on [_LGTM_](https://lgtm.com)

1. log into your dashboard on [_LGTM_](https://lgtm.com/dashboard)
2. review if the repository you would like to add is already tracked
3. **if the repo is not added automatically**: copy the URL of your repository root and paste it on your _LGTM_ dashboard in the `Follow a project from a repository host` field.

**Note:** By following a repository, this should setup a watcher on your GitHub account/organization and automatically add any active repositories on your _LGTM_ dashboard. This is why your newly created repository may already be tracked on your _LGTM_ tracker.

****

:point_down: **Your documentation here** :point_down:
