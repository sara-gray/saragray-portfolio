import client, { getClient } from './sanity'



/**
 * * getSkills
 * 
 * @returns {array} skills to display
 */
export async function getSkills() {
	const skills = await getClient().fetch(
		`*[_type == "skills"] | order(displayOrder asc, asc) {
      ...
	    }`
	)
	return skills
}



/**
 * * getExamples
 * 
 * @returns {array} portfolio examples
 */
export async function getExamples() {
	const examples = await getClient().fetch(
		`*[_type == "examples"] | order(displayOrder asc) {
      ...
	    }`
	)
	return examples
}



/**
 * * getPost
 * 
 * @param {string} slug - slug to fetch
 * @returns {object} post contents
 */
export async function getPost(slug) {
	const post = await getClient().fetch(
		`*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
      ...
	    }`,
		{ slug }
	)
	return post
}



/**
 * * getAllPosts
 * 
 * @returns {array} all posts
 */
export async function getAllPosts() {
	const posts = await getClient().fetch(
		`*[_type == "post"] | order(_updatedAt desc){
			title, 'slug':slug.current, mainImage
		}`
	)
	return posts
}



/**
 * * getAllPostsWithSlug
 * 
 * @returns {array} - array containing all the posts with a particular slug
 */
export async function getAllPostsWithSlug() {
	const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
	return data
}



/**
 * * gePreviousAndNextPost
 * 
 * @param {string} slug - slug of currant post
 * @returns {object} containing slugs for the previous and next post to the current post, null if at the start or end
 */
export async function gePreviousAndNextPost(slug) {
	let allPosts = await getAllPosts()
	let previousPost = null
	let nextPost = null

	allPosts.forEach((post, index) => {
		if (post.slug === slug) {
			if (index > 0) previousPost = allPosts[index - 1].slug
			if (index + 1 < allPosts.length) nextPost = allPosts[index + 1].slug
		}
	})

	return {
		previousPost,
		nextPost,
	}
}