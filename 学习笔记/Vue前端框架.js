/*
        Vue.js框架的主要操作：不进行DOM，也就是说没有了DOM操作
        后端MVC架构：M：model：职能单一，只操作数据库；
                       controller：业务逻辑，封装了具体的业务代码和逻辑代码；
                       view：视图层，进行业务处理，并发起对网络/服务器的请求和访问；
        前端MVVM：   M:每个页面单独的数据;
                    V:就是每个页面的HTML结构，也即每个页面的视图;
                    VM:调度者，分隔了M层和V层。当V层需要获取或保存数据的时候，都需要VM层进行中间的处理。
                              数据的双向绑定也是VM层进行操作。

********************************************Vue基本操作语法********************************************
********************************************Vue基本操作语法********************************************
    ·声明式渲染：首先new一个Vue对象，里面储存作用的标签，等待渲染的数据对象data，然后子啊DOM中使用{{"变量名"}}，则对应的数据就会渲染到DOM中
    ·指令:带有前缀“v-”的语句，他们是Vue提供的具有特殊属性的语句，可以对于DOM表现出特殊的反应行为。
    ·Vue实例
        ·创建:var vm = new Vue({...})
        ·数据与方法:数据存放在data中,data是一个对象;
        ·在Vue中使用Vue实例中data里面的数据和methods中的方法,不能直接用变量名/函数名，而是需要用this进行访问。
        ·var实例会监听自己身上data中所有数据的改变，一旦变化令人DOM中的数据也会随之自动改变
        ·computed:在computed中定义计算属性的方法，返回值会返回到html页面中。如页面中有{{persons}}，而在methods中也有一个计算方法persons:function(),则persons里面的方法的返回值则对应于{{persons}}
                 通过getter和setter实现对数据的显示和监视

                 tip1:可以在computed中定义属性，叫做【计算属性】，这些属性本质是一个方法，使用时是把 他们的 名称，直接当作 属性 使用，并不会作为 方法 调用。同时这个属性后面的方法有返回值，则这个值会像data中的数据一样回到html中。
                 tip2:使用格式为:'计算属性':function() {};
                 tip3:只要计算属性 后面的function中用到的任何data数据发生了改变，则都会触发计算属性的函数重新计算。
                 tip4:计算属性存在缓存，多次读取只执行一次getter计算。

                get():返回值，返回得到的值。需要读取当前属性值时回调，并返回当前属性值
                get() {
                    return 。。。
                }

              set():当属性值发生改变时回调，并更新。
                set(value) {   //value就是最新的/更改后的属性值
                    ...
                }
              监听函数放在watch中,对数据进行实时监视并更新返回
              即：监视data中的指定数据的变化，然后触发watch中对应的function函数进行处理。模式为--'data数据变量': function() {}
                  每个function中都有两个参数，newVal和oldVal，表示新得参数和旧的参数

        ·components:定义实例内部私有组件
                    组件中也有data和methods,但是组件的data必须是一个函数而且必须返回一个对象，即data: funciton({  return {}   }),这个data数据可以放在组件的template结构中
                    ***为什么组件的data是一个函数且必须返回对象：
                            保证各个组件之间不会相互影响而是互相独立的。
                            JavaScript里面的原型继承以及对象是引用数据类型，导致必须使用函数而不能使用对象，
                            每个组件相当于是Vue构造函数的一个实例，而data是Vue构造函数原型上的一个属性，
                            每创建一个组件，就会继承构造函数原型上的这个data属性。
                            如果这个data属性是个对象的话，那么所有组件的data会指向同一个内存地址。
                            而如果data是一个函数，函数内部返回一个对象的话，每个组件的data就相互独立了，不再相互影响。
        ·router:将路由规则对象注册到vue实例上用来监听URL地址变化然后进行组件跳转
        ·is=""属性：直接把模板套进去
        ·.native属性：绑定原生事件
        ·非父子组件传值（发布订阅模式）
                通过bus总线：
                Vue.prototype.bus = new Vue()；
                this.bus.$emit触发事件，并把参数进行传递
                this.bus.$on回应事件，进行相关操作
        ·指令(用在html的标签内如<div v-text = "我好帅"></div>)
        1.v-cloak:解决插值表达式闪烁的问题
        2.v-text:会覆盖元素中原本的内容，但是插值表达式只会替换自己的占位符（{{}}），不会把整个元素清空
        3.v-html:可以把数据渲染成html格式的数据嵌入到html结构中
        4.v-bind:(单向)绑定属性要用数组，即v-bind:class["..","..."]，对于style属性也是如此
        5.v-on:提供事件绑定机制.可以简写为@如@cli的变量。如v-bind:title="mytitle",则会把mytitle中的变量绑定至title这个属性中。并且支持字符串的加减。可以将v-bind简写为:
            绑定class类样式时，class需ck = "show" == var on:click="show"
        5.事件修饰符:在事件后面通过“.修饰词”即可达到修饰目的，如.stop(阻止冒泡)等修饰符
        6.v-model:唯一的一个双向数据绑定指令,即v-model=“msg”,即可实现表单元素和MODEL元素中的双向绑定。
                且v-model只能用在表单元素中如input，select，checkbox等
        7.v-for:循环数组、对象、数组对象、迭代数字这类东西如v-for="item in list",后面输出item就行
                循环时候key的值需要进行v-bind绑定，且一般key通过数字去获得字符串
        8.v-if&&v-show:控制元素的显示
                而v-if时每次都会重新删除或创建元素；而v-show不会进行DOM操作，只是切换了元素的display:none属性
        过渡与动画：使用<transition name="XXX">,然后在style中使用.XXX-???进行动画和过渡的设置，其中有6大类：
                   v-enter ||  v-enter-active ||  v-enter-to
                   v-leave ||  v-leave-active ||  v-leave-active-to
        过滤器:页面渲染形式是：{{变量名 | 过滤器名字}}
                             过滤器的创建：Vue.filter(过滤器名字,function(value) {})   value则是变量
        提交表单：表单每一项数据都使用v-model，进行数据双向绑定使得data数据得到更新
        ·生命周期:产生实例 ==》 调用beforeCreate() ==》监视数据 ==》 初始化事件 ==》 判断是el属性是否有值 ==》 是否有模板值 ==》 挂载 ---完成第一部分 初始化
                               监测数据是否发生变化 ==》 进行数据处理 --- 完成第二部分 更新
                               vm.$destroy()执行    ---完成第三部分 死亡

                初始化  beforeCreate()   ->     created()
                        beforeMount()    ->     mounted()
                更新     beforeUpdate()   ->     updated()
                死亡   beforeDestory()    ->     destoryed()


                在beforeCreate()执行时，data和method中的变量和方法都没有被初始化；而在created()执行的时候data和methods里面的东西完成了初始化
                  beforeMount()执行时表示模板已经在内存中编译完成但是并没有渲染到页面中，而在Mounted()执行时内存中的模板已经真实挂载到页面中
                  beforeUpdate()执行时数据已经更新了，data中数据更新了，但是页面上的数据还没有更新还是旧的，而Updated()执行时页面中的数据也更新完毕
                  beforeDestory()执行时实例仍处于可用状态，而destoryed()执行时所有组件都已被销毁，组件中所有东西均不可用
                常用：mounted():发送ajax请求，启动定时器等    beforeDestory():收尾工作
        ·Vue进行数据请求
                使用Vue-resource;
                Vue实例中
                GET:this.$http.get(url,[options]).then(success,error)
                POST:this.$http.post(url,data,[options]).then(success,error)

                全局中：
                Vue.http
                .................等等..............
        ·组件的创建方式(组件存在于Vue实例内):
                使用组件时，直接把组件的名称以html形式嵌入其中,若组件时驼峰命名法，作为标签时单词之间用-连接
                vue实例时需要制定应用的dom元素的范围，因为有可能同一个页面中应用多个vue实例，且该DOM元素应有相关的Vue实例
                无论哪种方式创建（注册）组件，组件的templat模板有且只能由一个根元素
                1.var tem = Vue.extend({
                    template:组件要展现的html结构,
                });
                  Vue.component("组件名称",创建出来的模板对象)

                2.得到ViewModel
                  Vue.compenent('组件名字',{
                      template:模板
                  })

                3.<template></template>作为template中的模板结构
                4.最常用！！！
                  在一个Vue实例中：
                  components : {
                    //  '组件名称':组件模板对象
                    或者
                    // 组件模板对象，此时这个对象名字也就是组件名称。如这里是login，html中直接用<login></login>
                  }
                1、使用 $on(eventName) 监听事件
                2、使用 $emit(eventName) 触发事件
                ***子组件中默认无法访问父组件中data的数据或是methods中的方法。
                    要想访问需要：  在引用子组件的时候通过属性绑定（v-bind）的形式进行传递,同时在子组件中的props数组中定义一下数据名称;
                    props中的数据是只读的，而data中的数据可读可写;
                ***子组件向父组件传值：由于子组件可以通过v-bind绑定父组件方法。所以在子组件调用父组件的时候通过自定义事件，将自身数据作为这个方法的参数，实现了传值给父组件.
        ·获取DOM元素：使用ref，即在需要获得的标签中加上ref="";使用时为：this.$refs."***".innerTEXT/以及数据、方法
        ·插件：使用script导入js文件后，声明插件:Vue.use(插件名)
        ·Vue路由 Vue-router。导入了相关的包后，会在全局形成一个构造函数，就是VueRouter
        var obj = new VueRouter({
              routes:[ //路由匹配规则
                  path:监听路由地址
                  component:前面path所匹配的组件.component的属性值只能是模板对象而不能是引用名称
                  redirect:重定向路由地址，即默认的地址
                  children:子路由。子路由中的path不加/,否则是以根目录为基准
             ]
        })
        ==》此时需要一个容器放组件，就是<router-view></router-view>,其中有一个参数是name，则name的值就是组件的键值。在route中可以写成
            components，里面存放多个组件，采用键值对的形式。
        ==》地址跳转：<a href='#/。。。'>    <router-link to='/。。。'>;
        ==》在路由中使用查询字符串给路由传递参数，
           1.使用query-----不需要改变路由规则的path属性,其属性都在query中，访问方法为：this.$route.query.属性
           2.使用params-----需要改变路由规则path：/。。。/：id/:name。。。。，访问方法为this.$route.params.属性。访问路由时为直接/+值，但是在规则里面要有键比如id，name之类的，然后回存在params中
        ·使用脚手架开始Vue项目：vue init install -g webpack 名字   ==>>  跟着流程就行
        ·进行Vue.js项目编写：
                使用组件:1.引入组件：import ？？ from ？？
                        2.映射组件标签：export default {
                            components:{
                                名字
                            }
                        }
                        3.使用组件：<名字/>



                        模板：
                        <!DOCTYPE html>
                        <html lang="en">

                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Vue的基本使用</title>
                            <!-- 导包 -->
                            <script src="./lib/vue.js"></script>
                        </head>

                        <body>
                            <div id="app">

                            </div>
                            <script>
                                var vm = new Vue({
          