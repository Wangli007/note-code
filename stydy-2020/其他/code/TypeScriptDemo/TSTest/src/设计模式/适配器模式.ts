/**
 * 适配器模式
 * 在软件工程中，适配器模式的作用是解决两个软件实体间的接口不兼容的问题  原本由于接口不兼容而不能工作的两个软件实体就可以一起工作。
 */

/**
 * <>定义泛型用到的
 * implements  合并接口
 * 静态的方法或者属性  不需要实例化就能访问到的
 */

interface Logger1 {
  info(message: string): Promise<void>;
}

interface CloudLogger {
  sendToServer(message: string, type: string): Promise<void>;
}

class AliLogger implements CloudLogger {
  // implements 重写了sendToServer 方法   然后让Logger 和 CloudLogger都能跑
  public async sendToServer(message: string, type: string): Promise<void> {
    console.info(message);
    console.info("This Message was saved with AliLogger");
  }
}

class CloudLoggerAdapter implements Logger1 {
  protected cloudLogger: CloudLogger;

  constructor(cloudLogger: CloudLogger) {
    this.cloudLogger = cloudLogger;
  }

  public async info(message: string): Promise<void> {
    await this.cloudLogger.sendToServer(message, "info");
  }
}

class NotificationService {
  protected logger: Logger1;

  constructor(logger: Logger1) {
    this.logger = logger;
  }

  public async send(message: string): Promise<void> {
    await this.logger.info(`Notification sended: ${message}`);
  }
}

(async () => {
  const aliLogger = new AliLogger();
  const cloudLoggerAdapter = new CloudLoggerAdapter(aliLogger);
  const notificationService = new NotificationService(cloudLoggerAdapter);
  await notificationService.send("Hello semlinker, To Cloud");
  await cloudLoggerAdapter.info("Hello semlinker, To Cloud");
})();

/**
 * 以前开发的系统存在满足新系统功能需求的类，但其接口同新系统的接口不一致。
 * 使用第三方提供的组件，但组件接口定义和自己要求的接口定义不同。
 */
