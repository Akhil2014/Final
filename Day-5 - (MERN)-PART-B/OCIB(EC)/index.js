class Iphone4 {
    constructor(ASIN, color, display, camera, bluetooth) {
      this.ASIN = ASIN;
      this.color = color;
      this.display = display;
      this.camera = camera;
      this.bluetooth = bluetooth;
    }
  
    dial() {
      return "tring.. tring...";
    }
  
    sendMessage() {
      return "Sending message...";
    }
  
    cameraClick() {
      return "Camera clicked";
    }
  
    connectBluetooth() {
      return "Bluetooth connected successfully...";
    }
  }
  
  let i4 = new Iphone4(1, "B09X67JBQV", 7.8, "2.0 MP", "Bluetooth 5.1");
  
  console.log(i4.ASIN);
  console.log(i4.color);
  console.log(i4.display);
  console.log(i4.camera);
  console.log(i4.bluetooth);
  
  console.log(i4.dial());
  console.log(i4.sendMessage());
  console.log(i4.cameraClick());
  console.log(i4.connectBluetooth());
  