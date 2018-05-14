# html5-css3
主要设计html5+css3部分的功能的demo
1、介绍了一个animation.min.css，通过选择众多的css类名样式，来完成你所需要的animation功能
e.g.
document.querySelector("input[type=button]").onclick = function(){
	document.querySelector("div").classList.add("swing");
}
以及宇宙特效和支付宝特效的小demo
2、geolocation
  第一步：引入百度地图地址并申请密钥
  <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=您的密钥"></script>
  第二步：使用百度地图的API，创建实例，可以在开发文档中查找地图生成器，输入你所在的位置 初始化地图,设置中心点坐标和地图级别
  var map = new BMap.Map("allmap");
  map.centerAndZoom(new BMap.Point(118.791895, 32.047041), 15);
  第三步：添加地图控件
  map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
 备注：移动端可以直接获取地址
 //用于移动端
        //function showPosition(position){
        //  var wd = position.coords.latitude;
        //  var jd = position.coords.longitude
        // }
        //window.navigator.geolocation.getCurrentPosition(showPosition);
        //pc端百度地图
        //获取经纬度，调用百度地图，搜索百度地图api，开发文档中，选择web js api
        //申请密钥 选择合适的demo，复制提供的api链接
3、localStorage
//以键值对的方式去存储
        window.localStorage.setItem("color", color);
//获取
        window.localStorage.getItem("color");
