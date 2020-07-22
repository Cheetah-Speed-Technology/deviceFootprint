

async function dynamicallyLoadScript() {
  var scriptTag = document.createElement("script");  // create a script DOM node
  scriptTag.setAttribute('src', 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js');
  scriptTag.async = true
  document.head.appendChild(scriptTag);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
window.onload = dynamicallyLoadScript()


axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common.accept = 'application/json';
axios.defaults.crossDomain = true;


async function getData() {
  console.log('hello');

  axios.get('http://localhost:3000/api/device_footprint')
    .then(response => {
      console.log('response: ', response)
    })
  .catch(err=>{
    console.log('err: ', err)
  })
}



async function getLocation() {
  console.log("started");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
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
  console.log("myposition: " + myPosition);
  // console.log("Longitude: " + position.coords.longitude);
  // console.log("accuracy: " + position.coords.accuracy);
  // console.log("altitude: " + position.coords.altitude);
  // console.log("altitudeAccuracy: " + position.coords.altitudeAccuracy);
  // console.log("heading: " + position.coords.heading);
  // console.log("speed: " + position.coords.speed);
  // console.log("timestamp: " + position.timestamp);
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}


function getsiteInfo() {
  const browserInfo = {
    browser_name: navigator.product,
    browser_appName: navigator.appName,
    browser_appVersion: navigator.appVersion,
    browser_userAgent: navigator.userAgent,
    browser_platform: navigator.platform,
    browser_language: navigator.language,
    browser_appCodeName: navigator.appCodeName,
  }
  console.log('browser_name: '+navigator.product);
  console.log('browser_appName: '+navigator.appName);
  console.log('browser_appVersion: '+navigator.appVersion);
  console.log('browser_userAgent: '+navigator.userAgent);
  console.log('browser_platform: '+navigator.platform);
  console.log('browser_language: '+navigator.language);
  console.log('browser_appCodeName: '+navigator.appCodeName);
  console.log('browser_buildID: '+navigator.buildID);
  console.log('browser_keyboard: '+navigator.keyboard);
  console.log('device_logicalProcessors: '+navigator.hardwareConcurrency);
  console.log('device_id: '+navigator.id);
  console.log('device_Memory*: '+navigator.deviceMemory);
  console.log('device_oscpu *: '+navigator.oscpu );
  console.log('device_screenHeight *: '+window.innerHeight );
  console.log('device_screenWidth: '+screen.availWidth );


}

// function getLocation() {
//   var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };

//   function success(pos) {
//     var crd = pos.coords;

//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }

//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
//   navigator.geolocation.getCurrentPosition(success, error, options);
// }

