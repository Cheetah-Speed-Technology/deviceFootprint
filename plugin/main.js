
//HEADER+++++++
// function dynamicallyLoadScript(url) {
//   var scriptTag = document.createElement("script");
//   scriptTag.setAttribute('src', url);
//   scriptTag.async = true
//   document.head.appendChild(scriptTag);
// }
// // this is not needed for you as your framework should have axios already
// dynamicallyLoadScript('https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js')




// DATA========
var uuid = new DeviceUUID().get();
var du = new DeviceUUID().parse();
const thedata = {
  myUrl: (new URL(window.location.href)).hostname,
  browserInfo: {
    browser_name: navigator.product,
    browser_appName: navigator.appName,
    browser_appVersion: navigator.appVersion,
    browser_userAgent: navigator.userAgent,
    browser_platform: navigator.platform,
    browser_language: navigator.language,
    browser_appCodeName: navigator.appCodeName,
    browser_buildID: navigator.buildID,
    browser_keyboard: navigator.keyboard,
  },
  device:{
    device_logicalProcessors: navigator.hardwareConcurrency,
    device_Memory: navigator.deviceMemory,
    device_oscpu: navigator.oscpu || navigator.platform,
    device_name: WURFL.complete_device_name,
    device_form_factor: WURFL.form_factor,
    device_is_mobile: du.is_mobile?'yes':'no',
    device_y: navigator.mimeTypes.length,
    device_pixelDepth: du.pixelDepth,
    device_isTouchScreen: du.isTouchScreen?'yes':'no',
    device_uuid: uuid,
  },
  country:'',
  ip: '',
  location: ''
}


window.onload = alldata()

function alldata() {
  browserName()
  getMyIP ()
  getLocation()
}

function browserName() {
  var nAgt = navigator.userAgent;
  thedata.browserInfo.browser_name  = navigator.appName;
  var nameOffset,verOffset;


  // thedata.browserInfo.browser_name
  if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
    thedata.browserInfo.browser_name = "Opera";
   }
   // In older Opera, the true version is after "Opera" or after "Version"
   else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
    thedata.browserInfo.browser_name = "Opera";
   }
   // In MSIE, the true version is after "MSIE" in userAgent
   else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
    thedata.browserInfo.browser_name = "Microsoft Internet Explorer";
   }
   // In Chrome, the true version is after "Chrome"
   else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
    thedata.browserInfo.browser_name = "Chrome";
   }
   // In Safari, the true version is after "Safari" or after "Version"
   else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
    thedata.browserInfo.browser_name = "Safari";
   }
   // In Firefox, the true version is after "Firefox"
   else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    thedata.browserInfo.browser_name = "Firefox";
   }
   // In most other browsers, "name/version" is at the end of userAgent
   else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
             (verOffset=nAgt.lastIndexOf('/')) )
   {
    thedata.browserInfo.browser_name = nAgt.substring(nameOffset,verOffset);
   }
}


async function posttoencript(){
  axios.post('http://localhost:3000/api/encript', thedata)
  .then(response => {
    console.log('response: ', response.data.data)
  })
  .catch(error=>{
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  })
}


// var sas = 'asas'
function showPosition(position) {
  // console.log(sas)
    var myPosition = {
      Latitude:  position.coords.latitude,
      Longitude:  position.coords.longitude,
      accuracy:  position.coords.accuracy,
      altitude:  position.coords.altitude,
      altitudeAccuracy:  position.coords.altitudeAccuracy,
      heading:  position.coords.heading,
      speed:  position.coords.speed,
      timestamp:  position.timestamp,
    }
    thedata.location = myPosition
    posttoencript()
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        thedata.location = "User denied the request for Geolocation."
        posttoencript()
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        thedata.location = "Location information is unavailable."
        posttoencript()
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        thedata.location = "The request to get user location timed out."
        posttoencript()
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        thedata.location ="An unknown error occurred."
        posttoencript()
        console.log("An unknown error occurred.");
        break;
    }
  }

  function getLocation() {
    console.log("started");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

function getMyIP () {
  axios.get('https://ipapi.co/json/')
    .then(response => {
      thedata.ip = response.data.ip
      thedata.country_name = response.data.country_name
      thedata.timezone = response.data.utc_offset
    })
  .catch(err=>{
    console.log('err: ', err)
  })
};

async function myIP() {
  axios.get('http://ipinfo.io')
    .then(response => {
      console.table(response.data)
    })
  .catch(err=>{
    console.log('err: ', err)
  })
}

// ACTIONS++++++++
async function getData() {
  axios.get('http://localhost:3000/api/encript')
    .then(response => {
      console.log('response: ', response)
    })
  .catch(err=>{
    console.log('err: ', err)
  })
}


