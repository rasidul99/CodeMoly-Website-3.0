/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import configPromise from '../../../../payload.config'

type Args = {
  params: Promise<{
    segments?: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({
    params: params as any,
    searchParams,
    config: configPromise,
  })

const Page = ({ params, searchParams }: Args) =>
  NotFoundPage({
    params: params as any,
    searchParams,
    config: configPromise,
    importMap,
  })

export default Page
