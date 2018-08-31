import Vue from 'vue'
Vue.directive('scrollHeight', (el, binding, vnode, oldnode) => {
    let resizeTo = () => {
        console.log('directive')
        let defaultheight = binding.value || 0;
        let winhtight = document.documentElement.clientHeight
        let offTop = el.offsetTop;

        el.style.height = winhtight - offTop - defaultheight + 'px';
        el.style.overflow = 'auto'
    }
    setTimeout(() => {
        resizeTo()
    });
    window.addEventListener('resize', () => {
        resizeTo()
    }, false)
})