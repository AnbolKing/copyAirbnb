<?php
	$number = $_POST['book'];

	$books = array();
	$books['1001'] = array("name"=>"三国演义","author"=>"罗贯中","type"=>"古典文学","price"=>"100￥");
	$books['1002'] = array("name"=>"三体","author"=>"刘欣慈","type"=>"科幻文学","price"=>"90￥");
	$books['1003'] = array("name"=>"哈利波特","author"=>"JK.Rolling","type"=>"儿童文学","price"=>"80￥");
	$books['1004'] = array("name"=>"计算机网络","author"=>"王子安","type"=>"计算机技术","price"=>"70￥");
	
	if(array_key_exists($number,$books) == 1)
	{
		echo json_encode($books[$number]);
	}
	else
	{
		echo '{"flag":0}';
	}
?>