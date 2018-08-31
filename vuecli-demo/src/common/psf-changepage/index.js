import Vue from 'vue'
import changepage from './psf-changepage.vue'
const components = [changepage]
components.map(function(component) {
    Vue.component(component.name, component);
});