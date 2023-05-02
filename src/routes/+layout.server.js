/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const response = await fetch('https://gist.githubusercontent.com/geraldo72/57ec0c42828c2d3409f9995cad0da13c/raw/');
    return await response.json();
}