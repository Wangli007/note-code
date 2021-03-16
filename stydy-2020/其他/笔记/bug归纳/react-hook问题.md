### React-hook

参考 : https://juejin.cn/post/6844903954539626510#heading-2



父组件引入子组件,往往会造成组件一些不需要的渲染.

#### memo  

父组件没有传递给子组件状态时

````javascript
const Child = (props) => {
    return(
        <div>我是一个子组件</div>
    );
}
const ChildMemo = memo(Child);

const Page = (props) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={(e) => { setCount(count+1) }}>加1</button>
            <p>count:{count}</p>
            <ChildMemo />
        </>
    )
}
````

`当父组件传递状态给子组件的时候，memo好像没什么效果，子组件还是执行了，这时候我们就要引入hooks的useCallback、useMemo这两个钩子了。`



#### `useCallBack`   

````javascript
//子组件没有必要渲染的例子
interface ChildProps {
    name: string;
    onClick: Function;
}
const Child = ({ name, onClick}: ChildProps): JSX.Element => {
    console.log('子组件?')
    return(
        <>
            <div>我是一个子组件，父级传过来的数据：{name}</div>
            <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
        </>
    );
}
const ChildMemo = memo(Child);

const Page = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Child组件');
    
    return (
        <>
            <button onClick={(e) => { setCount(count+1) }}>加1</button>
            <p>count:{count}</p>
            <ChildMemo name={name} onClick={ useCallback((newName: string) => setName(newName), []) }/>
            {/* useCallback((newName: string) => setName(newName),[]) */}
            {/* 这里使用了useCallback优化了传递给子组件的函数，只初始化一次这个函数，下次不产生新的函数
        </>
    )
}
````



#### 使用`useMemo`

````javascript
//子组件会有不必要渲染的例子
interface ChildProps {
    name: { name: string; color: string };
    onClick: Function;
}
const Child = ({ name, onClick}: ChildProps): JSX.Element => {
    console.log('子组件?')
    return(
        <>
            <div style={{ color: name.color }}>我是一个子组件，父级传过来的数据：{name.name}</div>
            <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
        </>
    );
}
const ChildMemo = memo(Child);

const Page = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Child组件');
    
    return (
        <>
            <button onClick={(e) => { setCount(count+1) }}>加1</button>
            <p>count:{count}</p>
            <ChildMemo 
                name={{ name, color: name.indexOf('name') !== -1 ? 'red' : 'green'}} 
                onClick={ useCallback((newName: string) => setName(newName), []) }
            />
        </>
    )
}
````

传递的状态为对象类型时



解决这个问题，使用name参数使用useMemo，依赖于State.name数据的变化进行更新

```javascript
interface ChildProps {
    name: { name: string; color: string };
    onClick: Function;
}
const Child = ({ name, onClick}: ChildProps): JSX.Element => {
    console.log('子组件?')
    return(
        <>
            <div style={{ color: name.color }}>我是一个子组件，父级传过来的数据：{name.name}</div>
            <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
        </>
    );
}
const ChildMemo = memo(Child);

const Page = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Child组件');
    
    return (
        <>
            <button onClick={(e) => { setCount(count+1) }}>加1</button>
            <p>count:{count}</p>
            <ChildMemo 
                //使用useMemo，返回一个和原本一样的对象，第二个参数是依赖性，当name发生改变的时候，才产生一个新的对象
                name={
                    useMemo(()=>({ 
                        name, 
                        color: name.indexOf('name') !== -1 ? 'red' : 'green'
                    }), [name])
                } 
                onClick={ useCallback((newName: string) => setName(newName), []) }
                {/* useCallback((newName: string) => setName(newName),[]) */}
                {/* 这里使用了useCallback优化了传递给子组件的函数，只初始化一次这个函数，下次不产生新的函数
            />
        </>
    )
}
```

