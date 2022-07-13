export const fetchFunc = async (domain: string, port: string, address: string, method: string, dataSend: object | '') => {

    const optionsFunc = (met: string):any=> {

        const option = {
            GET: {
                method: 'GET',
                credentials: "include",
            },
            POST: {
                method: 'POST',
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataSend),
            },
            PATCH: {
                method: 'PATCH',
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataSend),
            },
            DELETE: {
                method: 'DELETE',
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataSend),
            }
        }

        switch (met) {
            case 'GET':
                return option.GET
            case 'POST':
                return option.POST
            case 'PATCH':
                return option.PATCH
            case 'DELETE':
                return option.DELETE
            default:
                return option.GET
        }

    }

    return await (await fetch(`http://${domain}:${port}/${address}`, optionsFunc(method)

    )).json();
}

