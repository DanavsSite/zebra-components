import {LitElement, css,html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { BtnType } from '../types';
import { genStyles } from '../utils/genBtnStyles';
@customElement('za-btn')
export class ZaBtn extends LitElement { 
  @property({type:String})
    readonly type: BtnType = ""
  @property({type:String})
    readonly btnstyle : string = ""
  data = genStyles()
  static connectedCallback():void{
    console.log("hello world")
  }
  static readonly styles = css`:host button{
     all:unset;
      padding:10px 20px;
       cursor:pointer;
        border-radius:30px;
         transition:all 200ms ease-in-out;
         font-size:180%;
         display:flex;
         align-items:center;
         gap:.19em
    } 
    :host{
    }
    :host > .primary { background:#4c98c2; null } :host > .primary:hover { background:hsla(201, 49%, 33%, 1); } :host > .primary:active { transform:scale(0.9) } :host > .secondary { background:#D4B483; null } :host > .secondary:hover { background:hsla(36, 49%, 47%, 1); } :host > .secondary:active { transform:scale(0.9) } :host > .danger { background:#C1666B; null } :host > .danger:hover { background:hsla(357, 42%, 38%, 1); } :host > .danger:active { transform:scale(0.9) } :host > .info { background:#7EE8FA; null } :host > .info:hover { background:hsla(189, 93%, 54%, 1); } :host > .info:active { transform:scale(0.9) } :host > .pink { background:#EAC4D5; null } :host > .pink:hover { background:hsla(333, 47%, 64%, 1); } :host > .pink:active { transform:scale(0.9) } :host > .warning { background:#F15156; null } :host > .warning:hover { background:hsla(358, 85%, 43%, 1); } :host > .warning:active { transform:scale(0.9) } :host > .success { background:#82D173; null } :host > .success:hover { background:hsla(110, 51%, 44%, 1); } :host > .success:active { transform:scale(0.9) } :host > .yellow { background:#D4B483; color: black } :host > .yellow:hover { background:hsla(36, 49%, 47%, 1); } :host > .yellow:active { transform:scale(0.9) } :host > .orange { background:#FB6107; null } :host > .orange:hover { background:hsla(22, 97%, 31%, 1); } :host > .orange:active { transform:scale(0.9) } :host > .teritary { background:#48A9A6; null } :host > .teritary:hover { background:hsla(178, 40%, 27%, 1); } :host > .teritary:active { transform:scale(0.9) } 
      `
      
  render() { 
    return html`
    
      <button type="button" style="${this.btnstyle}" class="${this.type}">
        <slot/>
      </button>
    `;
  }
}