import { darken } from "color2k"
import { myProps } from "../types"
export function genStyles(){
    const objs : myProps[] = [
        {name:"primary",value:"#4c98c2"},
        {name:"secondary",value:"#D4B483"},
        {name:"danger",value:"#C1666B"},
        {name:"info",value:"#7EE8FA"},
        {name:"pink",value:"#EAC4D5"},
        {name:"warning",value:"#F15156"},
        {name:"success",value:"#82D173"},
        {name:"yellow",value:"#D4B483",color:'black'},
        {name:"orange",value:"#FB6107"},
        {name:"teritary",value:"#48A9A6"},
    ]
    let arr : string[] = [`
    :host button{
        all:unset;
        padding:10px 20px;
        cursor:pointer;
        border-radius:30px;
        transition:all 200ms ease-in-out;
      }
      `]
    for (var obj of objs) {
        arr.push(`
        :host > .${obj.name} {
            background:${obj.value};
            ${obj.color ? `color: ${obj.color}` : 'null'}
          }
          :host > .${obj.name}:hover {
            background:${darken(obj.value,0.2)};
          }
          :host > .${obj.name}:active {
            transform:scale(0.9)
          }
        `)
    }
    return arr.join('\n')
}


