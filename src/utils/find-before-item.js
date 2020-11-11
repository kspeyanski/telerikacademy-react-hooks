export const findBeforeItem = (all, current) => {
    let found = false;

    const array = Array
        .from(all, ([name, value]) => value)
        .filter((item, index) => {
            if (item === current) {
                found = true;
            }

            return !found;
        })

    return array;
}