export default {
    beforeMount(el, binding) {
        const [srcOnHover, srcOnOut] = binding.value;

        const handleMouseOver = () => {
            el.src = srcOnHover;
        };

        const handleMouseOut = () => {
            el.src = srcOnOut;
        };

        el.addEventListener('mouseover', handleMouseOver);
        el.addEventListener('mouseout', handleMouseOut);

        el.__handleMouseOver = handleMouseOver;
        el.__handleMouseOut = handleMouseOut;
    },
    unmounted(el) {
        el.removeEventListener('mouseover', el.__handleMouseOver);
        el.removeEventListener('mouseout', el.__handleMouseOut);
    },
};