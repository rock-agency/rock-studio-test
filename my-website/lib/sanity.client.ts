// lib/sanity.client.ts
import { createClient } from '@sanity/client'

export const projectId = '1uk9rgzk'
export const dataset = 'production' // <-- Put your dataset here
const apiVersion = '2023-05-03' // Use a recent date

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // `false` for fresh data in dev, `true` for prod
})