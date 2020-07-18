### 升级pip：python -m pip install --upgrade pip -i https://pypi.douban.com/simple  
### 下载包：pip install 包名 -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
# webpack的一些内容了解：
## webpack打包命令：webpack 要打包的文件路径 打包好的输出文件的路径

>> 1.main.js
>>> 1.整个项目js文件的入口，通常放一些导入模块的一些语句（ES6导入模块方式：import *** from ***）
>>> 2.可以直接import导入某一个模块（自己写的）
>> 2.配置webpack.config.js文件
>>> 1.使用Node语句导入相关的包
>>> 2.model.expotrs暴露相关接口，内容为：
      + entry:等待打包的文件路径（入口文件）
      + output:输出文件配置
        - path:路径
        - filename:输出文件名称
      ### 以上两条是webpack的自动打包
      + devServer:配置webpack-dev-server的命令参数
        - open：是否自动打开页面（true自动打开）
        - port：端口号
        - contentBase：指定托管根目录
        - hot：启用热更新(true启用)
      + plugins:(数组)插件配置
      + module:(对象)通过加载器处理文件如css、less，css文件中引入别的目录的图片字体等
        - rules:处理第三方文件的匹配和处理规则
          [test:正则匹配相关文件，use:处理方法（包）（数组）]
    最后执行命令---“webpack”即可
>> 3.webpack-dev-server的使用
>>> 1.必须局部安装webpack
>>> 2.使用webpack-dev-server得到的输出文件不在物理磁盘中而是在内存中，因此在html中导入的地址为http://localhost:8081/bundle.js（具体参考命令执行情况）
>>> 3.webpack-dev-server相关指令（存放在package.json的dev中）
     + webpack-dev-server  --open 打开网页
>> 4.html-webpack-plugin插件使用
>>> 1.在config中导入这个插件
>>> 2.new对象：new htmlWebpackPlugin(),会自动创建script标签
>>> 3.注意下载合适的版本，其他包也是如此
>> 5.导入其他js文件
>>> 1.将需要导入的js文件导入到入口js文件中即可。
