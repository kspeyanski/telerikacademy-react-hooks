export const align = (element, offsetY = 0) => {
    element.style.top = `calc(50% + ${offsetY}px)`;
    element.style.left = `50%`;
}