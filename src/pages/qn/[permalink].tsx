import type { ReactElement } from 'react'

import { useMediaQuery, useTheme } from '@mui/material'
import Head from 'next/head'

import { Layout } from '@modules/layout'
import { PermalinkContainer, MPermalinkContainer } from '@modules/permalink/components/container'

import type { NextPageWithLayout } from '@src/types'

// import { createContextInner } from '@src/server/trpc/context'
// import { appRouter } from '@src/server/trpc/router/_app'
// import { createProxySSGHelpers } from '@trpc/react-query/ssg'
// import superjson from 'superjson'
// import type { GetStaticProps } from 'next'

// export const getStaticProps: GetStaticProps = async () => {
//   const ssg = createProxySSGHelpers({
//     router: appRouter,
//     ctx: await createContextInner({ session: null }),
//     transformer: superjson,
//   })

//   await ssg.question.list.prefetchInfinite({ limit: 15 })

//   return {
//     props: { trpcState: ssg.dehydrate() },
//     revalidate: 10,
//   }
// }

export function PermalinkContent() {
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <Head>
        <title>Auxilium</title>
        <meta name='description' content='Auxilium' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {isSmUp ? <PermalinkContainer /> : <MPermalinkContainer />}
    </>
  )
}

const Permalink: NextPageWithLayout = () => {
  return <PermalinkContent />
}

Permalink.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Permalink
