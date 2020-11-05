import { createApp } from 'vue'
import Message from './Message.vue'
export type MessageType = 'success' | 'error' | 'default'

/**
 * 组件是函数式使用的
 */
const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  /**
   * 第一个参数传组件
   *第二个参数传props
   */
  const messageInstance = createApp(Message, {
    message,
    type
  })
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  messageInstance.mount(mountNode)
  setTimeout(() => {
    messageInstance.unmount(mountNode)
    document.body.removeChild(mountNode)
  }, timeout)
}

export default createMessage
