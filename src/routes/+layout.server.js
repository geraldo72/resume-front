/** @type {import('./$types').PageLoad} */
export const prerender = true;

export async function load({params}) {
    const response = await fetch('https://resume-back.vercel.app/resume/1');
    return await response.json();
}