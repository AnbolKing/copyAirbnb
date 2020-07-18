import $ from 'jquery'
import './css/index.css'
import './js/func.js'
$(function() {
    $('li:odd').css('backgroundColor', 'orange');
    $('li:even').css('backgroundColor', 'skyblue');
})