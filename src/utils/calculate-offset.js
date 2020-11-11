export const calculateOffset = (elements) => {
    let result = 0;

    elements.forEach((el) => {
        console.log(el);
        result += el.element.offsetHeight;
    })

    return result;
}