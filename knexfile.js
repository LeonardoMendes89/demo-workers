
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'worker_admintest',
      user:     'admin',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    }
  }

};
