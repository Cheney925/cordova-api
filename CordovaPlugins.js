/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('onResume', this.onResume, false);
        document.addEventListener('online', this.onOnline, false);
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener('backbutton', this.onBackKeyDown, false);
        document.addEventListener('batterycritical', this.onBatteryCritical, false);
        document.addEventListener('batterylow', this.onBatteryLow, false);
        document.addEventListener('batterystatus', this.onBatteryStatus, false);
        document.addEventListener('menubutton', this.onMenuKeyDown, false);
        document.addEventListener('searchbutton', this.onSearchKeyDown, false);
        document.addEventListener('startcallbutton', this.onStartCallKeyDown, false);
        document.addEventListener('endcallbutton', this.onEndCallKeyDown, false);
        document.addEventListener('volumedownbutton', this.onVolumeDownKeyDown, false);
        document.addEventListener('volumeupbutton', this.onVolumeUpKeyDown, false);
    },
    /*
     ** deviceready Event Handler
     **
     ** The event fires when Cordova is fully loaded.
     */
    onDeviceReady: function() {
        console.log('Device ready!');
    },
    /*
     ** pause Event Handler
     **
     ** The event fires when an application is put into the background.
     */
    onPause: function() {
        console.log('Device paused!');
    },
    /*
     ** resume Event Handler
     **
     ** The event fires when an application is retrieved from the background.
     */
    onResume: function() {
        console.log('Device resumed!');
        setTimeout(function() {
            // TODO: do your thing!
        }, 0);
    },
    /*
     ** online Event Handler
     **
     ** This event fires when an application goes online,
     ** and the device becomes connected to the Internet.
     */
    onOnline: function() {
        console.log('Device connected!');
    },
    /*
     ** backbutton Event Handler
     **
     ** The event fires when the user presses the back button.
     */
    onBackKeyDown: function() {
        console.log('Back button pressed!');
    },
    /*
     ** batterycritical Event Handler
     **
     ** The event fires when the battery has reached the critical level threshold.
     **
     ** @callback {
     **      info                                {Object}    电池信息
     **          .level                          {Number}    电池容量百分比值
     **          .isPlugged                      {Boolean}   是否充电
     ** }
     */
    onBatteryCritical: function(info) {
        console.log('Battery Level Critical ' + info.level + '%\nRecharge Soon!');
    },
    /*
     ** batterylow Event Handler
     **
     ** The event fires when the battery has reached the low level threshold.
     **
     ** @callback {
     **      info                                {Object}    电池信息
     **          .level                          {Number}    电池容量百分比值
     **          .isPlugged                      {Boolean}   是否充电
     ** }
     */
    onBatteryLow: function(info) {
        console.log('Battery Level Low ' + info.level + '%');
    },
    /*
     ** batterylow Event Handler
     **
     ** The event fires when there is a change in the battery status.
     **
     ** @callback {
     **      info                                {Object}    电池信息
     **          .level                          {Number}    电池容量百分比值
     **          .isPlugged                      {Boolean}   是否充电
     ** }
     */
    onBatteryStatus: function(info) {
        console.log('Level: ' + info.level + ' isPlugged: ' + info.isPlugged);
    },
    /*
     ** menubutton Event Handler
     **
     ** The event fires when the user presses the menu button.
     */
    onMenuKeyDown: function() {
        console.log('Menu button pressed');
    },
    /*
     ** searchbutton Event Handler
     **
     ** The event fires when the user presses the search button on Android.
     */
    onSearchKeyDown: function() {
        console.log('Search button pressed');
    },
    /*
     ** startcallbutton Event Handler
     **
     ** The event fires when the user presses the start call button.
     */
    onStartCallKeyDown: function() {
        console.log('Start call button pressed');
    },
    /*
     ** endcallbutton Event Handler
     **
     ** This event fires when the user presses the end call button.
     */
    onEndCallKeyDown: function() {
        console.log('End call button pressed');
    },
    /*
     ** volumedownbutton Event Handler
     **
     ** The event fires when the user presses the volume down button.
     */
    onVolumeDownKeyDown: function() {
        console.log('Volume down button pressed');
    },
    /*
     ** volumeupbutton Event Handler
     **
     ** The event fires when the user presses the volume up button.
     */
    onVolumeUpKeyDown: function() {
        console.log('Volume up button pressed');
    }
};

app.initialize();

/*
 **  Cordova plugins API package
 */
var CDP = {
    /* Device information
     **
     ** @property {
     **      model       the name of device's model or product.
     **      cordova     the version of Cordova running on the device.
     **      platform    the device's operating system name.
     **      uuid        the device's Universally Unique Identifier(UUID).
     **      version     the operating system version.
     **      name        is deprecated as of version 2.3.0. Use device.model instead.
     ** }
     */
    // device: device || {},
    // Get device connection information
    getConnectionType: function() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';

        return states[networkState] || states[Connection.NONE];
    },
    // 设备传感器
    accelerometer: {
        /*
         ** Get the current acceleration along the x, y, and z axes.
         **
         ** @params {
         **     successCallback(acceleration)   {Function}  成功回调
         **         - acceleration              {Object}    传感器
         **             .x                      {Float}     x轴坐标
         **             .y                      {Float}     y轴坐标
         **             .z                      {Float}     z轴坐标
         **             .timestamp              {Float}     时间戳
         **     errorCallback                   {Function}  错误回调
         ** }
         */
        getCurrentAcceleration: function(successCallback, errorCallback) {
            navigator.accelerometer.getCurrentAcceleration(successCallback, errorCallback);
        },
        /*
         ** At a regular interval, get the acceleration along the x, y, and z axis.
         **
         ** @params {
         **     successCallback(acceleration)   {Function}  成功回调
         **         - acceleration              {Object}    传感器
         **             .x                      {Float}     x轴坐标
         **             .y                      {Float}     y轴坐标
         **             .z                      {Float}     z轴坐标
         **             .timestamp              {Float}     时间戳
         **     errorCallback                   {Function}  错误回调
         **     options                         {Object}    配置参数
         **         - frequency                 {Int}       频率（毫秒）
         ** }
         **
         ** @return
         **     watchID                         {String}    监听器ID
         */
        watchAcceleration: function(successCallback, errorCallback, options) {
            navigator.accelerometer.watchAcceleration(successCallback, errorCallback, options);
        },
        /* 
         ** Stop watching the Acceleration referenced by the watchID parameter.
         ** @params {
         **      watchID                         {String}    监听器ID
         ** }
         */
        clearWatch: function(watchID) {
            navigator.accelerometer.clearWatch(watchID);
        }
    },
    /*
     ** 设备照相机
     **
     ** cameraOptions                        {Object}    照片配置参数
     ** @properties {
     **      quality                         {Number}    照片质量0-100
     **      destinationType                 {Number}    返回的照片格式
     **          navigator.camera.DestinationType
     **              .DATA_URL           [0]     return image as base64-encoded string
     **              .FILE_URI           [1]     return image file URI
     **              .NATIVE_URI         [2]     return image native URI
     **                  (e.g., assets-library:// on iOS or content:// on Android)
     **      sourceType                      {Number}    照片源类别
     **          navigator.camera.PictureSourceType
     **              .PHOTOLIBRARY       [0]     图库
     **              .CAMERA             [1]     相机
     **              .SAVEDPHOTOALBUM    [2]     相册
     **      allowEdit                       {Boolean}   允许选择照片后进行编辑
     **      encodingType                    {Bumer}     照片文件编码类别
     **          navigator.camera.EncodingType
     **              .JPEG               [0]     return JPEG encoded image
     **              .PNG                [0]     return PNG encoded image
     **      targetWidth                     {Number}    设置照片像素宽度
     **      targetHeight                    {Number}    设置照片像素高度
     **      mediaType                       {Number}    媒体类型
     **          navigator.camera.MediaType
     **              .PICTURE            [0]     照片
     **              .VIDEO              [1]     视频
     **              .ALLMEDIA           [2]     全部类别
     **      correctOrientation              {Boolean}   在拍摄时旋转照片以适应设备
     **      saveToPhotoAlbum                {Boolean}   将拍摄的照片保存至相册
     **      popoverOptions                  {Object}    iOS独有iPad使用{CameraPopoverOptions}
     **      cameraDirectin                  {Number}    使用前置或后置摄像头
     **          navigator.camera.Direction
     **              .BACK               [0]     后置摄像头
     **              .FRONT              [1]     前置摄像头
     ** }
     **
     ** CameraPopoverOptions
     ** @properties {
     **      x                               {Number}    浮窗显示在屏幕位置的x轴坐标
     **      y                               {Number}    浮窗显示在屏幕位置的y轴坐标
     **      width                           {Number}    浮窗显示的宽度
     **      height                          {Number}    浮窗显示的高度
     **      arrowDir                        {Number}    浮窗的显示方向，由箭头确定
     **          navigator.camera.PopoverArrowDirection
     **              .ARROW_UP           [1]     上
     **              .ARROW_DOWN         [2]     下
     **              .ARROW_LEFT         [4]     左
     **              .ARROW_RIGHT        [8]     右
     **              .ARROW_ANY          [15]    任意
     ** }
     ** ex., CameraPopoverHandle.setPosition(CameraPopoverOptions);
     */
    camera: {
        /*
         ** Take picture using device camera and
         ** retrieve image as base64-encoded string
         **
         ** @params {
         **     onPhotoDataSuccess(imageData)   {Function}  成功回调
         **         - imageData                 {base64}    base64-encoded image data
         **     onFail(message)                 {Function}  错误回调
         **         - message                   {String}    错误消息
         **     options                         {Object}    配置参数
         **         - quality                   {Int}       图片质量
         **             [0-100]
         **         - destinationType           {String}    图片数据类型
         **             [navigator.camera.DestinationType.DATA_URL]
         ** }
         */
        capturePhoto: function(onPhotoDataSuccess, onFail, options) {
            var defaults = {
                quality: 50,
                destinationType: navigator.camera.DestinationType.DATA_URL
            };

            var newOptions = mergeOptions(options, defaults);

            navigator.camera.getPicture(onPhotoDataSuccess, onFail, newOptions);
        },
        /*
         ** Take picture using device camera, allow edit, and
         ** retrieve image as base64-encoded string
         **
         ** @params {
         **     onPhotoDataSuccess(imageData)   {Function}  成功回调
         **         - imageData                 {base64}    base64-encoded image data
         **     onFail(message)                 {Function}  错误回调
         **         - message                   {String}    错误消息
         **     options                         {Object}    配置参数
         **         - quality                   {Int}       图片质量
         **             [0-100]
         **         - allowEdit                 {Boolean}   允许编辑
         **         - destinationType           {String}    图片数据类型
         **             [navigator.camera.DestinationType.DATA_URL]
         ** }
         */
        capturePhotoEdit: function(onPhotoDataSuccess, onFail, options) {
            var defaults = {
                quality: 20,
                allowEdit: true,
                destinationType: navigator.camera.DestinationType.DATA_URL
            };

            var newOptions = mergeOptions(options, defaults);

            navigator.camera.getPicture(onPhotoDataSuccess, onFail, newOptions);
        },
        /*
         ** Retrieve image file location from specified source
         **
         ** @params {
         **     onPhotoURISuccess(imageURI)     {Function}  成功回调
         **         - imageData                 {String}    image file URI
         **     onFail(message)                 {Function}  错误回调
         **         - message                   {String}    错误消息
         **     options                         {Object}    配置参数
         **         - quality                   {Int}       图片质量
         **             [0-100]
         **         - sourceType                {String}    图片源
         **             [navigator.camera.PictureSourceType.PHOTOLIBRARY] 照片库
         **             [navigator.camera.PictureSourceType.SAVEDPHOTOALBUM] 相册
         **         - destinationType           {String}    图片数据类型
         **             [navigator.camera.DestinationType.FILE_URI]
         ** }
         */
        getPhoto: function(onPhotoURISuccess, onFail, options) {
            var defaults = {
                quality: 50,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
            };

            var newOptions = mergeOptions(options, defaults);

            navigator.camera.getPicture(onPhotoURISuccess, onFail, newOptions);
        }
    },
    // Compass 罗盘
    compass: {
        /*
         ** Get the current compass heading.
         **
         ** @params {
         **     successCallback(heading)        {Function}  成功回调
         **         - heading                   {Object}    朝向对象
         **             .magneticHeading        {Number}    朝向值(度数，北360)
         **             .trueHeading            {Number}    真实的朝向值(可能为负值)
         **             .headingAccuracy        {Number}    与真实值偏差
         **             .timestamp              {Number}    时间戳
         **     errorCallback                   {Function}  错误回调
         ** }
         */
        getCurrentHeading: function(successCallback, errorCallback) {
            navigator.compass.getCurrentHeading(successCallback, errorCallback);
        },
        /*
         ** At a regular interval, get the compass heading in degrees.
         **
         ** @params {
         **     successCallback(heading)        {Function}  成功回调
         **         - heading                   {Object}    朝向对象
         **             .magneticHeading        {Number}    朝向值(度数，北360)
         **             .trueHeading            {Number}    真实的朝向值(可能为负值)
         **             .headingAccuracy        {Number}    与真实值偏差
         **             .timestamp              {Number}    时间戳
         **     errorCallback                   {Function}  错误回调
         **     options                         {Object}    配置参数
         **         - frequency                 {Int}       频率（毫秒）
         ** }
         **
         ** @return
         **     watchID                         {String}    监听器ID
         */
        watchHeading: function(successCallback, errorCallback, options) {
            navigator.compass.watchHeading(successCallback, errorCallback, options);
        },
        /* 
         ** Stop watching the compass referenced by the watch ID parameter.
         **
         ** @params {
         **      watchID                         {String}    监听器ID
         ** }
         */
        clearWatch: function(watchID) {
            navigator.compass.clearWatch(watchID);
        }
    },
    /*
     ** Returns the device's current position as a Position object.
     **
     ** @params {
     **     successCallback(position)       {Function}  成功回调
     **         - position                  {Object}    返回的坐标对象
     **             .coords                 {Object}    横纵坐标
     **                 .latitude           {String}    纬度
     **                 .longitude          {String}    经度
     **                 .altitude           {String}    海拔高度
     **                 .accuracy           {String}    精确度
     **                 .altitudeAccuracy   {String}    海拔高度的准确度
     **                 .heading            {String}    朝向
     **                 .speed              {String}    移动速度
     **             .timestamp              {String}    时间戳
     **     errorCallback                   {Function}  错误回调
     **     options                         {Object}    配置选项
     ** }
     */
    getCurrentPosition: function(successCallback, errorCallback, options) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
    },
    /*
     ** File System
     **
     ** FileEntry
     ** @properties {
     **      isFile                          {Boolean}   是否为文件，默认true
     **      isDirectory                     {Boolean}   是否为文件目录，默认false
     **      name                            {String}    文件名，不包括路径
     **      fullPath                        {String}    root绝对地址
     **      filesystem                      {Object}    FileSystem对象
     **          - name                      {String}    文件系统名
     **          - root                      {Object}    root目录，DirectoryEntry对象
     ** }
     */
    file: {
        /* 
         ** Download a file from a server
         **
         ** @params {
         **      source                         {String}    文件地址（encodeURI）
         **      target                         {String}    设备上的存储地址
         **      successCallback(entry)         {Function}  成功回调
         **         - entry                     {Object}    下载的文件对象FileEntry
         **             .fullPath               {String}    文件地址
         **      errorCallback(error)           {Function}  错误回调
         **         - error                     {Object}    错误对象FileTransferError
         **             .source                 {String}    文件地址
         **             .target                 {String}    存储地址
         **             .code                   {String}    错误代码
         **      trustAllHosts                  {Boolean}   安全认证
         **      options                        {Object}    附加配置
         **         - headers                   {Object}    文件头信息
         **             .Authorization          {String}    授权信息
         ** }
         */
        download: function(source, target, successCallback, errorCallback, trustAllHosts, options) {
            var fileTransfer = new FileTransfer(),
                uri = encodeURI(source);

            fileTransfer.download(uri, target, successCallback, errorCallback, trustAllHosts, options);

        },
        /* 
         ** Upload a file on the device
         **
         ** @params {
         **      filePath                       {String}    设备上的文件地址
         **      server                         {String}    服务器上的文件（encodeURI）
         **      successCallback(data)          {Function}  成功回调
         **         - data                      {Object}    回调数据对象
         **             .responseCode           {String}    响应代码
         **             .response               {String}    响应消息
         **             .bytesSent              {Number}    发送的字符长度
         **      errorCallback(error)           {Function}  错误回调
         **         - error                     {Object}    错误对象FileTransferError
         **             .source                 {String}    文件地址
         **             .target                 {String}    存储地址
         **             .code                   {String}    错误代码
         **      options                        {Object}    附加配置FileUploadOptions
         **         .fileKey                    {String}    文件
         **         .fileName                   {String}    文件名
         **         .mimeType                   {String}    文件类型
         **         .params                     {Object}    请求参数(key/value)
         **         .chunkedMode                {Boolean}   断点传输模式
         **         .headers                    {Object}    头信息
         **      trustAllHosts                  {Boolean}   安全认证
         ** }
         */
        upload: function(filePath, server, successCallback, errorCallback, options, trustAllHosts) {
            var fileTransfer = new FileTransfer(),
                uri = encodeURI(server);

            fileTransfer.upload(filePath, uri, successCallback, errorCallback, options, trustAllHosts);
        },
        /*
         ** The FileReader allows basic access to a file.
         **
         ** read method
         ** @params {
         **      fileName                       {Object}    文件地址
         **      options                        {Object}    读取文件的选项
         **          - type                     {String}    读取文件的方式
         **          - encoding                 {String}    文件编码默认UTF8
         **      successCallback(file)          {Function}  成功回调
         **          - file                     {Object}    读取成功的文件内容
         **      errorCallback(error)           {Function}  错误回调
         **          - error                    {Object}    错误对象
         **             .code                   {Number}    错误代码
         ** }
         **
         ** FileReader
         ** @properties {
         **      readyState                     {String}    文件读取状态
         **          [EMPTY/LOADING/DONE]
         **      result                         {String}    文件内容
         **      error                          {Object}    读取错误对象FileError
         **      onloadstart                    {Function}  读取开始
         **      onload                         {Function}  读取成功
         **      onabort                        {Function}  读取中止
         **      onerror                        {Function}  读取失败
         **      onloadend                      {Function}  读取请求完成
         **      onprogress                     {Function}  读取中
         ** }
         */
        read: function(fileName, successCallback, errorCallback, options) {

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);

            function onFileSystemSuccess(fileSystem) {
                fileSystem.root.getFile(fileName, null, gotFileEntry, fail);
            }

            function gotFileEntry(fileEntry) {
                fileEntry.file(gotFile, fail);
            }

            function gotFile(file) {
                var reader = new FileReader();
                reader.onloadend = function(event) {
                    console.log('read success');
                    successCallback(event.target.result);
                };
                if (options != null && typeof options === 'object') {
                    switch (options.type) {
                        case 'text':
                            reader.readAsText(file);
                            break;
                        case 'dataURL':
                            reader.readAsDataURL(file);
                            break;
                        case 'binaryString':
                            reader.readAsBinaryString(file);
                            break;
                        case 'arrayBuffer':
                            reader.readAsArrayBuffer(file);
                            break;
                        default:
                            reader.readAsText(file);
                            break;
                    }
                }
            }

            function fail(error) {
                console.log(error.code);
                errorCallback(error);
            }
        },
        /*
         ** eidt a file or create it
         **
         ** read method
         ** @params {
         **      data                           {String}    写入内容
         **      directory                      {String}    文件目录
         **      fileName                       {String}    文件名
         ** }
         */
        write: function(data, directory, fileName) {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFileSystemFail);

            //获取目录，如果不存在则创建该目录  
            function onFileSystemSuccess(fileSystem) {
                newFile = fileSystem.root.getDirectory(directory, {
                    create: true,
                    exclusive: false
                }, onDirectorySuccess, onFileSystemFail);
            }
            //获取目录下面指定文件，如果不存在则创建此文件  
            function onDirectorySuccess(newFile) {
                newFile.getFile(fileName, {
                    create: true,
                    exclusive: false
                }, onFileSuccess, onFileSystemFail);
            }
            /** 
             * 获取FileWriter对象，用于写入数据
             * @param fileEntry
             */
            function onFileSuccess(fileEntry) {
                fileEntry.createWriter(onFileWriterSuccess, onFileSystemFail);
            }

            /** 
             * write datas
             * @param writer
             */
            function onFileWriterSuccess(writer) {
                //  log("fileName="+writer.fileName+";fileLength="+writer.length+";position="+writer.position);  
                writer.onwrite = function(evt) { //当写入成功完成后调用的回调函数  
                    console.log("write success");
                };
                writer.onerror = function(evt) { //写入失败后调用的回调函数  
                    console.log("write error");
                };
                writer.onabort = function(evt) { //写入被中止后调用的回调函数，例如通过调用abort()  
                    console.log("write abort");
                };
                // 快速将文件指针指向文件的尾部 ,可以append  
                writer.seek(writer.length);
                writer.write(data); //向文件中写入数据  
                //  writer.truncate(11);//按照指定长度截断文件  
                //  writer.abort();//中止写入文件  
            }

            function onFileSystemFail(error) {
                console.log("Failed to retrieve file:" + error.code);
            }
        },
        /*
         ** remove a file
         **
         ** read method
         ** @params {
         **      data                           {String}    写入内容
         **      directory                      {String}    文件目录
         **      successCallback(entry)         {Function}  成功回调
         **         - entry                     {Object}    文件对象
         **      errorCallback(error)           {Function}  错误回调
         **         - error                     {Object}    错误对象
         ** }
         */
        remove: function(directory, fileName, successCallback, errorCallback) {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFileSystemFail);

            //获取目录 
            function onFileSystemSuccess(fileSystem) {
                newFile = fileSystem.root.getDirectory(directory, null, onDirectorySuccess, onFileSystemFail);
            }
            //获取目录下面指定文件，如果不存在则创建此文件  
            function onDirectorySuccess(newFile) {
                newFile.getFile(fileName, null, onFileSuccess, onFileSystemFail);
            }
            /** 
             * 获取FileWriter对象，用于写入数据
             * @param fileEntry
             */
            function onFileSuccess(fileEntry) {
                fileEntry.remove(successCallback, errorCallback);
            }
        }
    },
    /*
     ** Contacts
     **
     ** Contact                             {Object}    联系人对象{Contact}
     ** @properties {
     **     id                              {String}    联系人唯一标示ID
     **     displayName                     {String}    用于显示的联系人名称
     **     name                            {Object}    联系人名称对象{ContactName}
     **         .formatted                  {String}    全称
     **         .familyName                 {String}    姓
     **         .givenName                  {String}    名
     **         .middleName                 {String}    中间名
     **         .honorificPrefix            {String}    字首（ex. Mr. or Dr.）
     **         .honorificSuffix            {String}    后缀（ex. Esq.先生）
     **     nickname                        {String}    昵称
     **     phoneNumbers                    {Object}    电话号码{ContactField}
     **     emails                          {Object}    邮件{ContactField}
     **     addresses                       {Object}    地址{ContactAddress}
     **     ims                             {Object}    地址{ContactField}
     **     organizations                   {Object}    地址{ContactOrganization}
     **     birthday                        {Date}      生日
     **     note                            {String}    便签描述
     **     photos                          {Object}    照片{ContactField}
     **     categories                      {Object}    分组{ContactField}
     **     urls                            {Object}    个人网址{ContactField}
     ** }
     ** @methods {
     **     clone                           {Function}  复制
     **     remove                          {Function}  移除
     **     save                            {Function}  保存
     ** }
     **
     ** ContactField                        {Array}  分组对象{ContactField}
     ** @properties {
     **     type                            {String}    类型（ex. 家）
     **     value                           {String}    值（电话号码或邮件地址）
     **     pref                            {Boolean}   是否设置为首选
     ** }
     **
     ** ContactAddress                      {Object[]}  地址对象{ContactAddress}
     ** @properties {
     **     pref                            {Boolean}   是否设置为首选
     **     type                            {String}    类型（ex. 家）
     **     formatted                       {String}    地址全称
     **     streetAddress                   {String}    街道地址
     **     locality                        {String}    城市
     **     region                          {String}    地区
     **     postalCode                      {String}    邮编
     **     country                         {String}    国家
     ** }
     **
     ** ContactOrganization                 {Array}  工作机构
     ** @properties {
     **     pref                            {Boolean}   是否设置为首选
     **     type                            {String}    类型（ex. 家）
     **     name                            {String}    机构名称
     **     department                      {String}    部门
     **     title                           {String}    机构标题
     ** }
     */
    contacts: {
        /* 
         ** Returns a new Contact object.
         **
         ** @params {
         **     properties                      {Object}    设备上的文件地址
         ** }
         **
         ** @returns {
         **     contact                         {Object}    联系人对象Contct
         ** }
         */
        create: function(properties) {
            return navigator.contacts.create(properties);
        },
        /* 
         ** Returns contacts array.
         **
         ** @params {
         **     contactFields                   {Array}     要查找的域
         **     successCallback                 {Function}  成功回调
         **         - contacts                  {Array}     成功匹配的联系人数组
         **     errorCallback                   {Function}  错误回调
         **         - error
         **     contactFindOptions              {Object}    查找条件{ContactFindOptions}
         **         - filter                    {String}    过滤值
         **         - multiple                  {Boolean}   是否将返回的联系人信息合并
         ** }
         */
        find: function(contactFields, contactFindOptions, successCallback, successCallback) {
            navigator.contacts.find(contactFields, successCallback, successCallback, contactFindOptions);
        },
        /* 
         ** Open contacts.
         **
         ** @params {
         **     successCallback                 {Function}  成功回调
         **     errorCallback                   {Function}  错误回调
         ** }
         */
        pickContact: function(successCallback, errorCallback) {
            navigator.contacts.pickContact(successCallback, errorCallback);
        }
    },
    /*
     **  Capture
     **  Provides access to the device's audio, image, and video capture capabilities.
     */
    capture: {
        /* 
         ** Encapsulates image capture configuration options.
         **
         ** @params {
         **     successCallback(mediaFiles)     {Function}  成功回调
         **         - mediaFiles                {Array}     图片文件
         **     errorCallback(error)            {Function}  错误回调
         **         - error                     {Object}    错误对象
         **             .code                   {Number}    错误代码
         **     options                         {Object}    配置项
         **         - limit                     {Number}    允许拍取的最大数量，默认1
         ** }
         */
        captureImage: function(successCallback, errorCallback, options) {
            navigator.device.capture.captureImage(successCallback, errorCallback, options);
        },
        /* 
         ** Start the audio recorder application and
         ** return information about captured audio clip files.
         **
         ** @params {
         **     successCallback(mediaFiles)     {Function}  成功回调
         **         - mediaFiles                {Array}     音频文件
         **     errorCallback(error)            {Function}  错误回调
         **         - error                     {Object}    错误对象
         **             .code                   {Number}    错误代码
         **     options                         {Object}    配置项
         **         - limit                     {Number}    允许录取的最大数量，默认1
         **         - duration                  {Number}    允许录取的最大秒数
         ** }
         */
        captureAudio: function(successCallback, errorCallback, options) {
            navigator.device.capture.captureAudio(successCallback, errorCallback, options);
        },
        /* 
         ** Start the video recorder application and
         ** return information about captured video clip files.
         **
         ** @params {
         **     successCallback(mediaFiles)     {Function}  成功回调
         **         - mediaFiles                {Array}     视频文件
         **     errorCallback(error)            {Function}  错误回调
         **         - error                     {Object}    错误对象
         **             .code                   {Number}    错误代码
         **     options                         {Object}    配置项
         **         - limit                     {Number}    允许拍取的最大数量，默认1
         **         - duration                  {Number}    允许拍摄的最大秒数
         ** }
         */
        captureVideo: function(successCallback, errorCallback, options) {
            navigator.device.capture.captureVideo(successCallback, errorCallback, options);
        }
    },
    /*
     ** Send Email
     **
     ** @params {
     **     options                         {JSON Object}   参数配置
     **         - app                       {String}
     **         - subject                   {String}        标题
     **         - body                      {String}        正文
     **         - to                        {Array/String}  收件人
     **         - cc                        {Array/String}  抄送
     **         - bcc                       {Array/String}  密件抄送
     **         - attachments               {Array/String}  附件
     **         - isHtml                    {Boolean}       内容是否为HTML
     **     callback                        {Function}      回调
     ** }
     */
    sendEmail: function(options, callback) {
        cordova.plugins.email.open(options, callback);
    },
    /*
     ** Take picture using device camera and
     ** retrieve image as base64-encoded string
     **
     ** @params {
     **     phoneNumber                     {String}    电话号码
     **     message                         {String}    短信内容
     **     options                         {String}
     **         [string] 文字短信
     **         [object] 彩信
     **     successCallback                 {Function}  成功回调
     **     errorCallback                   {Function}  错误回调
     ** }
     */
    sendMessage: function(phoneNumber, message, options, successCallback, errorCallback) {
        window.sms.send(phoneNumber, message, options, successCallback, errorCallback);
    },
    /*
     ** Take picture using device camera and
     ** retrieve image as base64-encoded string
     **
     ** @params {
     **     phoneNumber                     {String}    电话号码
     **     successCallback                 {Function}  成功回调
     **     errorCallback                   {Function}  错误回调
     ** }
     */
    callNumber: function(phoneNumber, successCallback, errorCallback) {
        window.plugins.CallNumber.callNumber(successCallback, errorCallback, phoneNumber);
    },
    /*
     ** PDF Reader
     **
     ** @params {
     **     url                             {String}    PDF地址
     ** }
     */
    openPDF: function(url) {
        window.pdfreader.pdfshow(url);
    },
    /*
     ** Wechat share API
     **
     ** @params {
     **     options                         {String}    配置选项
     **         - message                   {Object}    分享的消息配置
     **             .title                  {String}    标题
     **             .description            {String}    描述
     **             .mediaTagName           {String}    分享
     **             .thumb                  {}
     **             .media                  {Object}    媒体类型
     **                 .type               {String}    类型
     **                     [Wechat.Type]
     **                         .APP        [1]         应用
     **                         .EMOTION    [1]         表情
     **                         .FILE       [1]         文件
     **                         .IMAGE      [1]         图片
     **                         .MUSIC      [1]         音乐
     **                         .VIDEO      [1]         视频
     **                         .WEBPAGE    [1]         网址
     **         - scene                     {String}    分享到位置
     **             [Wechat.Scene.TIMELINE]     朋友圈
     **             [Wechat.Scene.SESSION]      微信好友
     **             [Wechat.Scene.FAVORITE]     微信好友
     **     successCallback                 {Function}  成功回调
     **     errorCallback(reason)           {Function}  成功回调
     **         - reason                    {String}    失败原因
     ** }
     */
    wechatShare: function(options, successCallback, errorCallback) {
        Wechat.share(options, successCallback, errorCallback);
    }
};

// merge options with default options
function mergeOptions(options, defaults) {
    if (options != null && typeof options === 'object') {
        for (var key in defaults) {
            if (!options.hasOwnProperty(key)) {
                options[key] = defaults[key];
                continue;
            }

            var custom_ = options[key],
                default_ = defaults[key];

            if (custom_ === null || custom_ === undefined) {
                options[key] = default_;
                continue;
            }

            if (typeof default_ != typeof custom_) {
                if (typeof default_ == 'string') {
                    options[key] = custom_.join('');
                } else if (typeof default_ == 'object') {
                    options[key] = [custom_.toString()];
                }
            }
        }

        return options;
    } else {
        return defaults;
    }
};
