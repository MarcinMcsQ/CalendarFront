
export const useFetch = async (method:string,address:string,dataSend:object) => {
    return  await (await fetch(`http://localhost:3001/${address}`, {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
    })).json();
}

