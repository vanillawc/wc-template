// node_modules/@vanillaes/interpolate/index.js
function interpolate(template, tags = {}) {
  const keys = Object.keys(tags);
  const values = Object.values(tags);
  try {
    return new Function(...keys, `return \`${template}\`;`)(...values);
  } catch (e) {
    throw new TemplateException(template, tags, e);
  }
}
var TemplateException = class extends Error {
  constructor(template, tags, message) {
    super();
    this.name = "TemplateError";
    let msg = "\n------------------\n";
    msg += `Template: \`${template}\``;
    msg += "\n------------------\n";
    msg += `Tags: ${JSON.stringify(tags, null, 2)}`;
    msg += "\n------------------\n";
    msg += message;
    this.message = msg;
  }
};

// src/wc-template.js
var WCTemplate = class extends HTMLElement {
  static get observedAttributes() {
    return ["src", "context"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.__initialized) {
      return;
    }
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }
  get src() {
    return this.getAttribute("src");
  }
  set src(value) {
    this.setAttribute("src", value);
    this.setSrc();
    this.render();
  }
  get context() {
    return this.getAttribute("context");
  }
  set context(value) {
    this.setAttribute("context", value);
    this.setContext();
    this.render();
  }
  constructor() {
    super();
    this.__initialized = false;
    this.__template = "";
    this.__context = {};
  }
  async connectedCallback() {
    if (this.hasAttribute("src")) {
      await this.setSrc();
    }
    if (this.hasAttribute("context")) {
      await this.setContext();
    }
    this.render();
    this.__initialized = true;
  }
  async setSrc() {
    const path = this.getAttribute("src");
    this.__template = await this.fetchSrc(path);
  }
  async fetchSrc(src) {
    const response = await fetch(src);
    if (response.status !== 200)
      throw Error(`ERR ${response.status}: ${response.statusText}`);
    return response.text();
  }
  async setContext() {
    const path = this.getAttribute("context");
    this.__context = await this.fetchContext(path);
  }
  async fetchContext(src) {
    const response = await fetch(src);
    if (response.status !== 200)
      throw Error(`ERR ${response.status}: ${response.statusText}`);
    return response.json();
  }
  render() {
    this.innerHTML = interpolate(this.__template, this.__context);
  }
};
customElements.define("wc-template", WCTemplate);
export {
  WCTemplate
};
