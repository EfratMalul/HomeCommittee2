
export function formatters(obj) {

 

    if (Array.isArray(obj)) {

        return obj.map((item: any) => { return formatters(item) })

        // return obj;

    }

    else {

        const newKeys = Object.keys(obj);

 

        const newObject = {};

        for (let i = 0; i < newKeys.length; i++) {

            obj[newKeys[i]] && typeof obj[newKeys[i]] == 'object' ?

                newObject[newKeys[i].charAt(0).toLowerCase() + newKeys[i].slice(1)] = formatters(obj[newKeys[i]]) :

                newObject[newKeys[i].charAt(0).toLowerCase() + newKeys[i].slice(1)] = obj[newKeys[i]];

 

        }

        return newObject;

    }

};

 