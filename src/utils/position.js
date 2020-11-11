export const position = (element, anchor, offsetY = 0) => {
    element.style.top = `calc(${anchor.offsetTop}px + ${offsetY}px)`;
    element.style.left = `${anchor.offsetLeft}px`;

    element.setAttribute('data-positioned', 'true');
}