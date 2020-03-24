import { MInputComponent } from "./m-input/m-input.component"
import { MButtonComponent } from "./m-button/m-button.component"
import { MSlideComponent } from "./m-slide/m-slide.component"
import { CmpCardComponent } from "./cmp-card/cmp-card.component"
import { MDateComponent } from "./m-date/m-date.component"
import { MSelectComponent } from "./m-select/m-select.component"
import { MHeadingComponent } from "./m-heading/m-heading.component"
import { MInfoComponent } from "./m-info/m-info.component"
import { MLinkageSelectComponent } from "./m-linkage-select/m-linkage-select.component"
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
        lineProportion:"100%",
        configuable:true
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
  {
    content: {
      type: "info",
      component: MInfoComponent,
      attr: {
        title:"当前信息",
        value:"neal",
        lineProportion:"100%",
        infotype:"time"//time company usertype
      }
    },
    effectAllowed: "move",
    disable: false,
    handle: false,
    title: "当前信息"
  },
  {
    content: {
      type: "linkage",
      component: MLinkageSelectComponent,
      attr: {
        title:"单位组织",
        lineProportion:"100%",
        linkagetype:"company"//time company usertype
      }
    },
    effectAllowed: "move",
    disable: false,
    handle: false,
    title: "单位组织"
  },
]

export default cmpConfig