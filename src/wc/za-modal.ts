import {LitElement, css,html, CSSResultGroup} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import { BtnType } from '../types';
import { genStyles } from '../utils/genBtnStyles';
@customElement('za-modal')
export class ZaBtn extends LitElement { 
    constructor(){
        super()
        this.addEventListener('ToggleModal',this._Modal)
        this.addEventListener('CloseModal',this._CloseModal)
        this.addEventListener('OpenModal',this._OpenModal)
    }
  @property({type:String})
    readonly type: BtnType = ""
  @property({type:String})
    readonly modalstyle : string = ""
    @property({type:String})
    readonly style : string = ""
 @state({})
    protected _isOpen = false;
  data = genStyles()
  static connectedCallback():void{
    console.log("hello world")
  }
  _Modal(){
    this._isOpen = !this._isOpen
  }
  _CloseModal(){
    this._isOpen = false
  }
  _OpenModal(){
    this._isOpen = true
  }
  static styles?: CSSResultGroup = css`
  /* The Modal (background) */
.modal {
    width:100vw;
    height:100vh;
    background:#00000099;
    position:fixed;
    top:0;
    backdrop-filter:blur(10px);
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0;
    z-index:-1;
    transition:all 400ms ease-in-out
  }
  .active{
    opacity:1;
    z-index:1
  }
  .active-modal{
    transform:scale(1) !important;
  }
  .modal-content{
    background:white;
    color:black;
    padding:30px;
    border-radius:20%;
    transition:all 400ms ease-in-out;
    transform:scale(0);
  }
  
`
  render() { 
    
    return html`
      <div style="${this.modalstyle}" class="modal ${this._isOpen ? "active" : ""}">
        <div style="${this.style}" class="modal-content ${this._isOpen ? "active-modal" : ""}">
            <slot/>
        </div>
      </div>
    `;
  }
}