import { headers, cookies } from "next/headers";

export async function GET(request) {
    const reqHeaders = await headers();

    // we can get and set both using nextjs cookies
    const cookiesStore = await cookies();

    cookiesStore.set('theme', 'dark');

    const theme = cookiesStore.get('theme');

    console.log(theme);

    return new Response("<h1> Hello world </h1>", {
        headers: {
            "content-type": "text/html",
            "set-cookie": "username=suraj"
        }
    });
}

