/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */

import config from '@payload-config'
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import { NotFoundPage } from '@payloadcms/next/views'

type Args = {
  params: {
    segments: string[]
  }
  searchParams: {
    [key: string]: string | string[]
  }
}

const NotFound = ({ params, searchParams }: Args) => NotFoundPage({ config, params, searchParams })

export default NotFound
