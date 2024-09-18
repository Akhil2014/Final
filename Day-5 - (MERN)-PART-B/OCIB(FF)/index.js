
function iPhone1(ASIN, color, display, camera) {
    return {
      ASIN: ASIN,
      color: color,
      display: display,
      camera: camera,
      dial: function() {
        return "tring.. tring...";
      },
      sendMessage: function() {
        return "Sending message...";
      },
      cameraClick: function() {
        return "Camera clicked";
      }
    };
  }

  let i1 = iPhone1(1, "B09X67JBQV", 7.8, "IOS");
  
  console.log(i1.ASIN);           
  console.log(i1.color);          
  console.log(i1.display);        
  console.log(i1.camera);         
  
  console.log(i1.dial());        
  console.log(i1.sendMessage());  
  console.log(i1.cameraClick());  
  
function iPhone2(ASIN, color, display, camera, bluetooth) {
    return {
      ASIN: ASIN,
      color: color,
      display: display,
      camera: camera,
      bluetooth: bluetooth,
      dial: function() {
        return "tring.. tring...";
      },
      sendMessage: function() {
        return "Sending message...";
      },
      cameraClick: function() {
        return "Camera clicked";
      },
      connectBluetooth: function() {
        return "Bluetooth connected successfully...";
      }
    };
  }

  let i2 = iPhone2(1, "B09X67JBQV", 7.8, "IOS", "5.1");
  
  console.log(i2.ASIN);            
  console.log(i2.color);            
  console.log(i2.display);          
  console.log(i2.camera);            
  console.log(i2.bluetooth);        
  
  console.log(i2.dial());            
  console.log(i2.sendMessage());     
  console.log(i2.cameraClick());    
  console.log(i2.connectBluetooth());
  