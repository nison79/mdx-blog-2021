import React from 'react'
import {MDXProvider} from '@mdx-js/react'

const components = {
  // all the logic here
  
}

export const wrapMDX  = ({element}) => {
  return <MDXProvider components={components}></MDXProvider>
}