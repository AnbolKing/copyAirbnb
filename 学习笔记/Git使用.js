/*
    ***********************************Git教程*****************************
    ***********************************Git账号：272344341@qq.com***********
    ***********************************Git密码：wzazawestlife928***********
    ***********************************Git教程*****************************
    1.初始化Git仓储(仓库)
        git init ==>>  回车键(该初始化文件是隐藏文件)
    2.设置Github用户
        git config --global user.name "用户名"
        git config --global user.email "邮箱"
    3.将代码放进暂存区
        git add <name>
                <文件路径>
        git add ./  ==>>可以添加所有的东西进暂存区
    4.git提交文件至仓储(版本库)中
         git commit -m "add a function in test.java"
        -m表示注释，为提交时的说明，必须要有！
        
        git commit --all  -m ""  ==>>可以直接放到版本库,一次性操作
    5.查看git状态
        git status
        //modified红色表示为放到暂存区，绿色为放到了暂存区未提交
        一般来说会显示需要提交的文件（uncommited）和未追踪的文件（untracked）
        uncommited：已有的，刚被修改尚未提交的
        untracked：原先没有的，新建的 
    6.查看设置
        git config --list
        user.name=xxx
        user.email=xxx@foxmail.com
    7.查看日志、提交记录
        git log
    8.忽略文件
        gitignore <文件路径>
        将不会把设置的文件提交至仓库
    9.将代码提交到Github网站上
        使用ssh方式上传：
            生成公钥：打开命令输入 ==>>  ssh-keygen -t rsa -C "邮箱"  ==>>进入用户文件打开pub文件，复制黏贴就可
    ***********************************将本地文件上传至Github*****************************
    ***********************************将本地文件上传至Github*****************************
    1.进入Githib官网，登录，然后点击“+”，选择new repository
    2.补充仓储信息，完成创建
    3.打开git bush，输入命令：ssh-keygen -t rsa -C "XXXXXX@XXXX.com"       
      其中双引号中是你注册github时用的邮箱。 一直回车，选择默认路径，和空密码。最后会在默认路径下生成.ssh文件夹，打开.ssh里面有两个文件，打开id_rsa.pub复制里面的密钥。
    4.打开github，选择setting，点击ssh and gpg keys,选择ssh keys 右边的new ssh key。出现下面绿色框的内容，填写标题，并将自己刚才复制的密钥粘贴到key中。最后点击add ssh key.
    5.查看是否成功。在git bash中输入命令：
      ssh -T git@github.com
      会提示，是否continue，输入yes。后就会看到：
      Warning:Permanently added 'github.com,207.97.227.239' (RSA) to the list of known hosts.
    　Hi zhangsiyao11! You've successfully authenticated, but GitHub does not provide shell access.
      这样就成功了，不用理会warning。
    6.克隆你刚才新建的仓库到本地，输入命令：
      git clone “仓库地址”
      后面的http是你的仓库的地址。
    7.此时会在git bush打开的地方生成以仓库名为名字的文件。然后把要上传的文件放到这个文件夹中
    8.打开git bush，输入以下一命令：
        git init
        git add "文件名"                              ----------必须----------
        git commit -m "文件名"                        ----------必须----------
        如果出现让你设置用户名和用户邮箱的提示，就按照提示上给的命令输入即可。后再次执行上面commit的命令。


        git remote add origin https://github.com/zhangsiyao11/chat       http为你自己仓库的地址
        如果出现错误：
        fatal: remote origin already exists
        则执行以下语句：
        git remote rm origin
        再执行git remote add origin https://github.com/zhangsiyao11/chat即可。


        git pull origin master                        ----------必须----------
        git push origin master                        ----------必须----------


        完成，再打开自己的仓库就会出现刚刚上传的项目文件:

*/