class TextArea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        textarea {
          resize: none;
          width: 100%;
        }
      </style>
      <textarea autocapitalize="none" autocomplete="off" autocorrect="off" cols="30" defaultValue="" rows="30" spellcheck="false" wrap="off"></textarea>
    `;
  }
}

customElements.define("text-area", TextArea);
