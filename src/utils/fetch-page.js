export const fetchPage = async (page = 0) => {
    const data = await fetch(`https://reqres.in/api/users?page=${page}`)
    const json = await data.json();
    return json;
}