import nextMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'monokai'
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    recmaPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX(nextConfig)
