import { env } from "../env.mjs";

export default async function graphqlRequest(query) {
    const url = `${env.WP_ENDPOINT}/graphql`;    
    const headers = { 'Content-Type': 'application/json' };

    // if(env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    //     headers[
    //         'Authorization'
    //     ] = `Bearer ${env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    // }

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query),
        next: {
            tags: ['graphql'],
            revalidate: 4500,
        }
    });

    const resJson = await res.json();
    return resJson;
}