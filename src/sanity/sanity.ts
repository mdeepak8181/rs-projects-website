import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from './env'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
