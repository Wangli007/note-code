import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'
// 不想只写业务代码啊啊啊啊啊啊啊

const Page = ({ children, title = 'This is the default title' }) => {
  useEffect(()=>{
    console.log(children,"children");
  })
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <nav>
          <Link href='/example'><a onClick={()=>{console.log('home')}}>Home</a></Link> |
          <Link href='/example1'><a>About</a></Link> |
          <Link href='/example2'><a>Contact</a></Link>
        </nav>
      </header>
      <div>头部</div>
      { children }
  </div>
  )
}

export default Page