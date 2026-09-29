export async function GET(request) {
    const url = new URL(request.url);
    // till the line below is how we get the params from the client end
    const { searchParams } = url;

    const apiUrl = new URL("https://jsonplaceholder.typicode.com/todos");
    // now we will see how to append the params we got from the client to the url
    searchParams.forEach((value, key) => {
        apiUrl.searchParams.append(key, value);
    })

    const res = await fetch(apiUrl);
    const data = await res.json();

    return Response.json({
        success: true,
        data: data
    })
}

