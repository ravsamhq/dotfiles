module.exports = {
  apps: [
    {
      name: '<project-name>',
      script: 'npm',
      args: 'start',
      max_memory_restart: '320M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
