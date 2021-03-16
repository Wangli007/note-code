// ant.design 的进度条组件 关联 动态刻度 

// >Html   react写的  变量对着下面的js看

// import { Progress  } from 'antd';
<div className="credit_chart">
    <div className="credit_chart_box">
        <svg style={{width:185*2+'px',height:185*2+'px',position:"relative"}} id="svg" width="100%" height="100%" version="1.1">
            {lines.map((item,index)=>(
                <line  key={index} x1={item.x1} y1={item.y1} x2={item.x2} y2={item.y2} style={{strokeWidth:2,stroke:item.color}}/>
            ))}
        </svg>
        <div className="circle">
            <Progress type="dashboard" width={260} gapPosition="right" percent={creditList.credit_score} gapDegree={0} />
        </div>
        <div className="look_rule">
            <a onClick={()=>{
                setVisible_rule(true)
            }}>
                查看信用评估规则 <Icon name="arrow-right"></Icon> 
            </a> 
        </div>
    </div>
</div>


{/* <style>
            .credit_chart{
                padding: 10px 28px 32px;
                position: relative;
                height: 495px;
                .ant-btn{
                    position: absolute;
                }
                .circle{
                    position: absolute;
                    top: 25%;
                    left: 50%;
                    transform: translate(-50%,-25%);
                }
                .credit_chart_box{
                    position: absolute;
                    left: 50%;
                    top: 25%;
                    transform: translate(-50%,-25%);
                    .look_rule{
                        text-align: center;
                        font-size:16px;
                        margin-top: 56px;
                        a{
                            color: #333333;
                        }
                    }
                }
            }
</style> */}


let indicator = {
    x: 0,
    y: 0,
    radius: 5
}
let currentAngle = 0;
let lines = [];
let label = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
};
function init() {
    //起始角度
    let startAngle = 0;
    //结束角度
    let endAngle = 359;
    //步长
    let step = 6;
    //半径
    let r1 = 185;
    //半径2
    let r2 = r1 - 20;
    let defaultColor = "rgba(72, 126, 251, 0.3)"; //"#487EFB"
    let activeColor = "rgba(247, 181, 0)";//rgba(247, 181, 0, 0.3) "#F7B500"
    let labelColor = "#535353";
    let progress = 0.5;   //进度

    let range = endAngle - startAngle;
    let currentAngle = range * progress + startAngle;
    currentAngle = currentAngle;
    if (currentAngle < startAngle) {
        currentAngle = startAngle
    }
    if (currentAngle > endAngle) {
        currentAngle = endAngle
    }

    indicator.x = (r1 + (r1 - 5) * Math.cos(currentAngle * Math.PI / 180));
    indicator.y = (r1 + (r1 - 5) * Math.sin(currentAngle * Math.PI / 180));

    for (let i = startAngle; i <= endAngle; i += step) {
        let color = defaultColor;
        if (i <= currentAngle) {
            color = activeColor;
        } else {
            color = defaultColor;
        }
        let x = (r1 + (r1 - 11) * Math.cos(i * Math.PI / 180));
        let y = (r1 + (r1 - 11) * Math.sin(i * Math.PI / 180));

        let x2 = (r1 + (r2 - 11) * Math.cos(i * Math.PI / 180));
        let y2 = (r1 + (r2 - 11) * Math.sin(i * Math.PI / 180));

        lines.push({
            angle: i,
            x1: x,
            y1: y,
            x2: x2,
            y2: y2,
            color: color
        })
    }
    label.x1 = (r1 + r1 * Math.cos(startAngle * Math.PI / 180));
    label.y1 = (r1 + r1 * Math.sin(startAngle * Math.PI / 180)) + 20;

    label.x2 = (r1 + r1 * Math.cos(endAngle * Math.PI / 180)) - 20;
    label.y2 = (r1 + r1 * Math.sin(endAngle * Math.PI / 180)) + 20;
}
init();

// 参考：[https://blog.csdn.net/u012282382/article/details/83687959](https://blog.csdn.net/u012282382/article/details/83687959)