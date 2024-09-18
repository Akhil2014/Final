
function iPhone3(ASIN, color, display, camera, bluetooth) {
   
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;

    this.dial = function() {
      return "tring.. tring...";
    };
  
    this.sendMessage = function() {
      return "Sending message...";
    };
  
    this.cameraClick = function() {
      return "Camera clicked";
    };
  
    this.connectBluetooth = function() {
      return "Bluetooth connected successfully...";
    };
  }
  
  let i3 = {};
  
  iPhone3.call(i3, 1, "B09X67JBQV", 7.8, "2.0 MP", "Bluetooth 5.1");
  
  console.log(i3.ASIN);          
  console.log(i3.color);         
  console.log(i3.display);       
  console.log(i3.camera);        
  console.log(i3.bluetooth);     

  console.log(i3.dial());       
  console.log(i3.sendMessage());  
  console.log(i3.cameraClick());  
  console.log(i3.connectBluetooth()); 
  