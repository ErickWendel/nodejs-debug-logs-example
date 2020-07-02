const log = require('debug')('api:math')

module.exports = {
    sum(...args) {
        log('ruuning sum on', ...args)
        return args.reduce((prev, next) => prev + next, 0)
    }
}