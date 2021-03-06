const IntentsController = require('./../controllers/intents')

module.exports = [
  {
    method: 'GET',
    path: '/intents',
    config: {
      handler: IntentsController.list,
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/intents/{intentId}',
    config: {
      handler: IntentsController.view,
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/intents',
    config: {
      handler: IntentsController.create
    }
  },
  {
    method: 'PUT',
    path: '/intents/{intentId}',
    config: {
      handler: IntentsController.update
    }
  },
  {
    method: 'DELETE',
    path: '/intents/{intentId}',
    config: {
      handler: IntentsController.remove
    }
  }
]
