import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';


export const GET: APIRoute = async ({ site }) => {
    const blogPosts = await getCollection('blog');
    // console.log({blogPosts});

    return rss({
        // stylesheet: '/styles/rss.xsl',
        title: 'Mono Blog',
        description: 'Un simplre blog de monito',
        site: site ?? '',
        items: blogPosts.map( ({ data, slug }) => ({
            title: data.title,
            pubDate: data.date,
            descripcion: data.description,
            link: `/posts/${slug}`
        })),
        customData: `<language>es-mx</language>`,
    });    
}
