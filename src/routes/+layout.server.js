/** @type {import('./$types').PageLoad} */
export const prerender = true;

export async function load({ url, fetch }) {
    const language = url.searchParams.get('language') ?? 'en';
    const response = await fetch(`https://resume-back.vercel.app/resume/1?language=${language}`);
    return await response.json();
}