import {
  SanityPageWrapper,
  getSanityStaticPaths,
  ns as sanityNs,
} from 'site/components/sanity/page-wrapper.mjs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { sanityLoader, sanitySiteImage } from 'site/components/sanity/utils.mjs'

const namespaces = [...sanityNs]

const BlogPostPage = (props) => {
  return <SanityPageWrapper {...props} namespaces={namespaces} />
}

/*
 * getStaticProps() is used to fetch data at build-time.
 *
 * On this page, it is loading the blog content from strapi.
 *
 * This, in combination with getStaticPaths() below means this
 * page will be used to render/generate all blog content.
 *
 * To learn more, see: https://nextjs.org/docs/basic-features/data-fetching
 */
export async function getStaticProps({ params, locale }) {
  const { slug } = params
  const post = await sanityLoader({ type: 'blog', language: locale, slug })
    .then((data) => data[0])
    .catch((err) => console.log(err))

  return {
    props: {
      post: {
        slug,
        body: post.body,
        title: post.title,
        date: post.date,
        caption: post.caption,
        image: sanitySiteImage(post.image),
      },
      // FIXME load the author separately
      author: {
        displayname: post.author,
        // slug: post.author.slug,
        // about: post.author.about,
        // image: strapiImage(post.author.picture, ['small']),
        // about: post.author.about,
      },
      ...(await serverSideTranslations(locale, namespaces)),
      page: {
        locale,
        title: post.title,
        path: ['blog', slug],
      },
    },
  }
}

export const getStaticPaths = getSanityStaticPaths('blog')

export default BlogPostPage
