module.exports = {
  apps: [
    {
      name: "cv-2019",
      script: "./server/index.js",
      env: {
        REACT_APP_CUSTOM_ENV: "production",
        COMMON_VARIABLE: "true",
        NODE_ENV: "production",
        DEPLOYMENT: "true"
      },
      env_production: {
        REACT_APP_CUSTOM_ENV: "production",
        NODE_ENV: "production",
        DEPLOYMENT: "true"
      },
      env_staging: {
        REACT_APP_CUSTOM_ENV: "staging",
        NODE_ENV: "production",
        DEPLOYMENT: "true"
      },
      env_development: {
        REACT_APP_CUSTOM_ENV: "development",
        NODE_ENV: "production",
        DEPLOYMENT: "true"
      }
    }
  ],

  deploy: {
    production: {
      key: "./keys/something.pem",
      user: "ubuntu",
      host: ["some ip"],
      ref: "origin/master",
      repo: "git@github.com:hashHan/cv-2019.git",
      path: "/home/ubuntu/production",
      "pre-deploy-local": "echo 'cv-2019: Deploying production server'",
      "post-deploy":
        "yarn install --check-files && yarn build:production && pm2 startOrRestart ecosystem.config.js --env production",
      env: {
        NODE_ENV: "production",
        REACT_APP_CUSTOM_ENV: "production"
      }
    },

    staging: {
      key: "./keys/something.pem",
      user: "ubuntu",
      host: ["some ip"],
      ref: "origin/master",
      repo: "git@github.com:hashHan/cv-2019.git",
      path: "/home/ubuntu/staging",
      "pre-deploy-local": "echo 'cv-2019: Deploying staging server'",
      "post-deploy":
        "yarn install --check-files && yarn build:staging && pm2 startOrRestart ecosystem.config.js --env staging",
      env: {
        NODE_ENV: "production",
        REACT_APP_CUSTOM_ENV: "staging"
      }
    },

    development: {
      key: "./keys/something.pem",
      user: "ubuntu",
      host: ["some ip"],
      ref: "origin/master",
      repo: "git@github.com:hashHan/cv-2019.git",
      path: "/home/ubuntu/development",
      "pre-deploy-local": "echo 'cv-2019: Deploying development server'",
      "post-deploy":
        "yarn install --check-files && yarn build:development && pm2 startOrRestart ecosystem.config.js --env development",
      env: {
        NODE_ENV: "production",
        REACT_APP_CUSTOM_ENV: "development"
      }
    }
  }
};
