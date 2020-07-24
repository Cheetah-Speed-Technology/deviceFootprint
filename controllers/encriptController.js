var device_footprint = require('../models').device_footprint;

exports.decrypt = (req, res, nex)=>{

  // this is fot decription
  // Buffer.from(res, 'base64').toString('ascii')
  device_footprint.findAll()
  .then(response => {
    res.json({
      status: "success",
      message: "success",
      data: response,
    })
  })

}

exports.encrypt = (req, res, next)=>{
  let thebrowser = req.body.browserInfo
  let data2Encode = req.body.device.device_logicalProcessors + req.body.device.device_oscpu + thebrowser.browser_name + req.body.device.device_uuid + thebrowser.browser_appName + req.body.device.device_pixelDepth + req.body.device.device_form_factor+ req.body.device.device_name;
  let b64 = Buffer.from(data2Encode).toString('base64');

  device_footprint.create({
    ip_address: req.body.ip,
    browser: thebrowser.browser_name + thebrowser.browser_appCodeName + thebrowser.browser_appName,
    os: req.body.browserInfo.browser_platform || req.body.device.device_oscpu,
    currenturl:req.body.myUrl,
    location: req.body.location,
    useragent: req.body.browserInfo.browser_userAgent,
    encription: b64,
    country:req.body.country_name,
    timezone:req.body.timezone
  })

  .then(response=>{
    res.json({
      status: "success",
      message: "success",
      data: response,
    })
  })



}

