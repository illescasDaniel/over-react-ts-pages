export default class Log {

  public static out(message?: any, ...optionalParams: any[]) {
    Log.globalConsole.log(message, ...optionalParams)
  }

  public static inspect(message?: any, ...optionalParams: any[]) {
    Log.globalConsole.dir(message, ...optionalParams)
  }

  //

  public static info(message?: any, ...optionalParams: any[]) {
    Log.globalConsole.info(message, ...optionalParams)
  }

  public static warning(message?: any, ...optionalParams: any[]) {
    Log.globalConsole.warn(message, ...optionalParams)
  }

  public static error(message?: any, ...optionalParams: any[]) {
    Log.globalConsole.error(message, ...optionalParams)
  }

  //

  public static trace(message?: any, ...optionalParams: any[]) {
    Log.globalConsole.trace(message, ...optionalParams)
  }

  private static globalConsole = global.console
}
