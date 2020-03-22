import { MInputComponent } from "./m-input/m-input.component"
import { MButtonComponent } from "./m-button/m-button.component"
import { MSlideComponent } from "./m-slide/m-slide.component"
import { CmpCardComponent } from "./cmp-card/cmp-card.component"
import { MDateComponent } from "./m-date/m-date.component"
let cmpConfig = [
    {
      content: {
        type:"mat-button",
        component:MButtonComponent,
        attr:{
          width:"100px",
          title:"这是一个按钮"
        }
      },
      effectAllowed: "move",
      disable: false,
      handle: false,
      title:"按钮"
    },
    {
      content: {
        type:"antd-date_picker",
        component:MDateComponent,
        attr:{
        }
      },
      effectAllowed: "move",
      disable: false,
      handle: false,
      title:"时间选择器"
    },
    {
      content: {
        type:"mat-input",
        component: MInputComponent,
        attr:{
          width:"100px",
          title:"你最喜欢的食物",
          placeholder:"默认placeholder"
        }
      },
      effectAllowed: "move",
      disable: false,
      handle: false,
      title:"输入框"
    },
    {
      content: {
        type:"mat-slide",
        component: MSlideComponent,
        attr:{
          width:"100px"
        }
      },
      effectAllowed: "link",
      disable: false,
      handle: false,
      title:"滑块选择器"
    }
]

export default cmpConfig