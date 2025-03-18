'use strict'

module.exports = (components) => {
  const order = [
    'media', 'media-sdk', 'media-api',
    'studio',
    'manager', 'manager-sdk', 'manager-api',
    'welcome',
  ]
  const score = ([name]) => order.indexOf(name)
  const sorted = Object.fromEntries(
    Object.entries(components).sort((a, b) => score(a) - score(b))
  )
  return sorted
}
