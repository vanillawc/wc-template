/* eslint no-undef: 0 */
import Interpolate from '../node_modules/interpolate-es/index.js';

export class WCTemplate extends HTMLElement {
  static get observedAttributes () {
    return ['src', 'context'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (!this.__initialized) { return; }
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get src () { return this.getAttribute('src'); }
  set src (value) {
    this.setAttribute('src', value);
    this.setSrc();
    this.render();
  }

  get context () { return this.getAttribute('context'); }
  set context (value) {
    this.setAttribute('context', value);
    this.setContext();
    this.render();
  }

  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    this.__initialized = false;
    this.__template = '';
    this.__context = {};
  }

  async connectedCallback () {
    if (this.hasAttribute('src')) {
      await this.setSrc();
    }

    if (this.hasAttribute('context')) {
      await this.setContext();
    }

    this.render();
    this.__initialized = true;
  }

  async setSrc () {
    const path = this.getAttribute('src');
    this.__template = await this.fetchSrc(path);
  }

  async fetchSrc (src) {
    const response = await fetch(src);
    if (response.status !== 200) throw Error(`ERR ${response.status}: ${response.statusText}`);
    return response.text();
  }

  async setContext () {
    const path = this.getAttribute('context');
    this.__context = await this.fetchContext(path);
  }

  async fetchContext (src) {
    const response = await fetch(src);
    if (response.status !== 200) throw Error(`ERR ${response.status}: ${response.statusText}`);
    return response.json();
  }

  render () {
    this.shadowRoot.innerHTML = Interpolate(this.__template, this.__context);
  }
}

customElements.define('wc-template', WCTemplate);
