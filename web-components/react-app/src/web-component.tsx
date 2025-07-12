import ReactDOM from "react-dom/client";
import App from "./App";
import indexCss from './index.css?inline';
import appCss from './app.css?inline';

// export const normalizeAttribute = (attribute: string) => {
//     return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
// };

class AppWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const indexStyle = document.createElement('style');
        indexStyle.textContent = indexCss;
        indexStyle.setAttribute("data-injected", "true");
        (this.shadowRoot as ShadowRoot).appendChild(indexStyle);

        const appStyle = document.createElement('style');
        appStyle.textContent = appCss;
        appStyle.setAttribute("data-injected", "true");
        (this.shadowRoot as ShadowRoot).appendChild(appStyle);

        // const props = this.getPropsFromAttributes<IAppProps>(); // If you want to add inputs to your web component, then you should add this
        const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
        // root.render(<App {...props} />); // Use this line when you want to use inputs for you web component
        root.render(<App />);
    }

    // private getPropsFromAttributes<T>(): T {
    //     const props: Record<string, string> = {};

    //     for (let index = 0; index < this.attributes.length; index++) {
    //         const attribute = this.attributes[index];
    //         props[normalizeAttribute(attribute.name)] = attribute.value;
    //     }

    //     return props as T;
    // }
}

export default AppWebComponent;