import '@webcomponents/webcomponentsjs'
class CustomElement extends HTMLElement {
    constructor(el) {
        super()
        this.appendChild(el)
    }
}

export default class WebComponent {
    constructor({ app, name }) {
        window.customElements.define(name, CustomElement)
        this.el = new CustomElement(app.$el)
    }

    mount(selector) {
        setTimeout(() => {
            document.body.appendChild(this.el)
        }, 500)
        return this
    }
}
