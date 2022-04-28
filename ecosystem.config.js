module.exports = {
    apps : [{
      name:'ta-presence-gateaway',
      script: 'server.js',
      watch: '.',
      ignore_watch: ['api/logapi','tmp','upload'],
      env: {
        "NODE_ENV": "development",
        "PORT": 1100,
      },
      env_production: {
        "NODE_ENV": "production",
        "PORT": 1100,
      }
    }],
  
    deploy : {
      production : {
        user : 'SSH_USERNAME',
        host : 'SSH_HOSTMACHINE',
        ref  : 'origin/master',
        repo : 'GIT_REPOSITORY',
        path : 'DESTINATION_PATH',
        'pre-deploy-local': '',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
        'pre-setup': ''
      }
    }
  };
  