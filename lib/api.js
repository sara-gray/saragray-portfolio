import client, { getClient } from './sanity'

const getUniquePosts = (posts) => {
	const slugs = new Set()
	return posts.filter((post) => {
		if (slugs.has(post.slug)) {
			return false
		} else {
			slugs.add(post.slug)
			return true
		}
	})
}

const postFields = `
  _id,
  title,
  'date': publishedAt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`

export async function getAllPostsWithSlug() {
	const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
	return data
}

export async function getAllPostsForHome() {
	const results = await getClient()
		.fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
	return getUniquePosts(results)
}

export async function getPostAndMorePosts(slug) {
	const curClient = getClient()
	const [post, morePosts] = await Promise.all([
		curClient
			.fetch(
				`*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        }
      }`,
				{ slug }
			)
			.then((res) => res?.[0]),
		curClient.fetch(
			`*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
			{ slug }
		),
	])
	return { post, morePosts: getUniquePosts(morePosts) }
}

export async function getPost(slug) {
	const post = await getClient().fetch(
		`*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
      ...
	    }`,
		{ slug }
	)
	return post
}

export async function getSkills() {
	const skills = await getClient().fetch(
		`*[_type == "skill"] | order(displayOrder asc) {
      ...
	    }`
	)
	return skills
}
