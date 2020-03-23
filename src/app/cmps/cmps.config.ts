import { MInputComponent } from "./m-input/m-input.component"
import { MButtonComponent } from "./m-button/m-button.component"
import { MSlideComponent } from "./m-slide/m-slide.component"
import { CmpCardComponent } from "./cmp-card/cmp-card.component"
import { MDateComponent } from "./m-date/m-date.component"
import { MSelectComponent } from "./m-select/m-select.component"
import { MHeadingComponent } from "./m-heading/m-heading.component"
let cmpConfig = [
  {
    content: {
      type: "heading",
      component:MHeadingComponent,
      attr: {
        width: "100px",
        title: "标题",
        lineProportion:"100%"
      }
    },
    effectAllowed: "move",
    disable: false,
    handle: false,
    title: "标题"
  },
  {
    content: {
      type: "button",
      component: MButtonComponent,
      attr: {
        width: "100px",
        title: "按钮",
        value:"提交",
        lineProportion:"100%"
      }
    },
    effectAllowed: "move",
    disable: false,
    handle: false,
    title: "按钮"
  },
  {
    content: {
      type: "date",
      component: MDateComponent,
      attr: {
        title:"日期框",
        lineProportion:"100%"
      }
    },
    effectAllowed: "move",
    disable: false,
    handle: false,
    title: "时间选择器"
  },
  {
    content: {
      type: "input",
      component: MInputComponent,
      attr: {
        width: "100px",
        title: "你最喜欢的食物",
        placeholder: "默认placeholder",
        lineProportion:"100%"
      }
    },
    effectAllowed: "move",
    disable: false,
    handle: false,
    title: "输入框"
  },
  {
    content: {
      type: "slide",
      component: MSlideComponent,
      attr: {
        width: "100px",
        title:"滑块选择器",
        value:true,
        lineProportion:"100%"
      }
    },
    effectAllowed: "move",
    disable: false,
    handle: false,
    title: "滑块选择器"
  },
  // {
  //   content: {
  //     type: "antd-select",
  //     component: MSelectComponent,
  //     attr: {
  //       width: "100px",
  //       options: [
  //         {
  //           nzValue: "jack",
  //           nzLabel: "姓名"
  //         },
  //         {
  //           nzValue: "jack",
  //           nzLabel: "姓别"
  //         }
  //       ]
  //     }
  //   },
  //   effectAllowed: "move",
  //   disable: false,
  //   handle: false,
  //   title: "选择器"
  // }
]

export default cmpConfig