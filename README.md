# deviceFootprint

## Front-End

Here is the two cdn's to be used on the front end
 
     <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Godfadatun/dannyuuid/device-uuid.js"></script>
     <script type="text/javascript" src="https://wurfl.io/wurfl.js"></script>


also add this file "deviceFootprint/blob/master/plugin/main.js" in your code as a script in your index.html 

Go to this line [#97](https://github.com/Cheetah-Speed-Technology/deviceFootprint/blob/78873a965f062548825ccb8340f1c7348983c8bd/plugin/main.js#L97) and put in the api link where the derived data would be pushed to at the back end

> Note: The post is dependent on axios so deal with your **CORS**


## Back-End

For the backend I believe a controller file should be built to handle this singular Task
  1. For [encryption](https://github.com/Cheetah-Speed-Technology/deviceFootprint/blob/78873a965f062548825ccb8340f1c7348983c8bd/controllers/encriptController.js#L18) of the incoming data here is how is it.
  2. For decryption this is what you need ` Buffer.from(res, 'base64').toString('ascii')` 


> I used SQL for this code but i believe this [Model file](https://github.com/Cheetah-Speed-Technology/deviceFootprint/blob/78873a965f062548825ccb8340f1c7348983c8bd/models/device_footprint.js#L16) should give you an idea of what it should look like
