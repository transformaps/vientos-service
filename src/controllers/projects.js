const Boom = require('boom')
const Project = require('./../models/project')

function list (request, reply) {
  Project.find({})
    .then(projects => reply(projects))
}

function view (request, reply) {
  Project.findById(request.params.projectId)
    .then(project => reply(project))
}

function create (request, reply) {
  Project.create({
    name: request.payload.name,
    admins: [ request.auth.credentials.id ]
  }).then(project => {
    return reply().code(201).header('location', '/projects/' + project._id)
  })
}

function update (request, reply) {
  Project.findById(request.params.projectId)
    .then(project => {
      if (!project.admins.find(personId => {
        return personId.equals(request.auth.credentials.id)
      })) {
        reply(Boom.forbidden())
        return null
      } else {
        // do updates
        project.name = request.payload.name
        return project.save()
      }
    }).then(project => {
      if (project) return reply().code(204)
    })
}

module.exports = {
  list,
  view,
  create,
  update
}
