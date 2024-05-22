import type { H3Event } from 'h3'
import { createError, eventHandler, getRequestHeader } from 'h3'
import { HttpStatusCode } from 'axios'
import { sessionStore } from '~/server/sessionStore'

const TOKEN_TYPE = 'Bearer'

const extractToken = (authHeaderValue: string) => {
  const [, token] = authHeaderValue.split(`${TOKEN_TYPE} `)

  return token
}

const ensureAuth = (event: H3Event) => {
  const authHeaderValue = getRequestHeader(event, 'authorization')

  if (typeof authHeaderValue === 'undefined') {
    throw createError({ statusCode: HttpStatusCode.Forbidden, statusMessage: 'Need to pass valid Bearer-authorization header to access this endpoint' })
  }

  const sessionId = extractToken(authHeaderValue)

  try {
    return sessionStore[sessionId]
  }
  catch (error) {
    console.error('Login failed. Here\'s the raw error:', error)
    throw createError({ statusCode: HttpStatusCode.Forbidden, statusMessage: 'You must be logged in to use this endpoint' })
  }
}

export default eventHandler((event) => {
  const user = ensureAuth(event)

  return user
})
