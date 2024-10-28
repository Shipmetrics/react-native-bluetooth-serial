const ReactNative = require('react-native')
const { Buffer } = require('buffer')
const { NativeModules, NativeEventEmitter } = ReactNative
const BluetoothSerial = NativeModules.RCTBluetoothSerial

const BluetoothSerialEmitter = new NativeEventEmitter(BluetoothSerial)

class BluetoothManager {
  /**
   * Add listener for available events
   * @param  {String} eventName Name of event, one of connectionSuccess, connectionLost, data, rawData
   * @param  {Function} handler Event handler
   */
  static on(eventName, handler) {
    BluetoothSerialEmitter.addListener(eventName, handler)
  }

  /**
   * Remove listener for an event
   * @param  {String} eventName Name of event, one of connectionSuccess, connectionLost, data, rawData
   * @param  {Function} handler Event handler
   */
  static removeListener(eventName, handler) {
    BluetoothSerialEmitter.removeListener(eventName, handler)
  }

  /**
   * Write data to device, accepts string or buffer.
   * Converts data to base64, as React Native does not directly support buffers.
   * @param  {Buffer|String} data
   * @return {Promise<Boolean>}
   */
  static async write(data) {
    if (typeof data === 'string') {
      data = Buffer.from(data)
    }
    return BluetoothSerial.writeToDevice(data.toString('base64'))
  }

  static module() {
    console.log("Module", BluetoothSerial)
    return BluetoothSerial
  }
}

module.exports = BluetoothManager
