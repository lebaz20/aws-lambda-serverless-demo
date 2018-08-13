Get latest node:
- Install nvm via https://github.com/creationix/nvm#install-script
- Use latest stable node (8 at the moment) : nvm install 8

Sign-up for aws:
- Visit https://aws.amazon.com/ for more info

Create aws access identity for serverless:
- Visit https://console.aws.amazon.com/iam/home#/users
- Add new user:
-- Set username: 'serverless-admin'
-- Set access type: 'Programmatic access'
-- Set permissions: 'Attach existing policies directly'
--- Check 'AdminstratorAccess' (First option in the policies list)

Install serverless:
- Run : npm i -g serverless
- Check https://serverless.com/framework/docs/getting-started/ for more info

Setup serverless credentials:
- Run : sls config credentials --provider aws --key {key} --secret {secret} --profile serverless-admin

Create first serverless service:
- Run : sls create --template aws-nodejs-ecma-script --path hello-world-node
- Run : cd hello-world-node

Update serverless config:
- Make sure you have something similar inside serverless.yml:
````
provider:
  name: aws
  runtime: nodejs8.10
  profile: serverless-admin
  region: eu-central-1
````

Install needed dependencies:
- Run : yarn add serverless-webpack --dev

Deploy created service:
- Run : sls deploy -v

Invoke created function locally:
- Run : sls invoke -f first -l
