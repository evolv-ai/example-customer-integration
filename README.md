# example-customer-integration

## Basic Steps to Update an Integration
* Create a repo that looks like this repo. Required is the package.json and index.js entry point. This help page gives details on the required format https://support.evolv.ai/hc/en-us/articles/4403940021651-Creating-a-custom-integration
* When your code is ready, publish a tag with
```
git tag vX.Y.Z
git push --tags
```
You can set up cicd process to automate this process when a PR is merged
* If you have not yet created it, create your integration in Manager (app.evolv.ai)
* Create an Integration Connector for github, configured for your org, repo, and published tag
* Add the Integration to you chosen Environment and publish
