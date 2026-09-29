export async function GetUserList() {
    const response = await fetch(
        "https://6a1c06078858a003817b74cf.mockapi.io/api/users/users", {
        next: {
            tags: ["users"]
        }
    });

    const data = await response.json();
    return data;
}
