import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
let Highlight = {}
Highlight.install = function (Vue, options) {
    Vue.directive('highlight',{
    		bind: function (el, data) {
        		let blocks = el.querySelectorAll('pre code');
			 blocks.forEach((block) => {
			    Hljs.highlightBlock(block)
			 })
	    },
	    update: function (el,data) {
	    		let blocks = el.querySelectorAll('pre code');
	    		Highlight.data = []
    			blocks.forEach((block) => {
    				let obj = Hljs.highlightAuto(data.value).value;
    				Highlight.data.push(block.innerText.replace(data.value,obj));
			    Hljs.highlightBlock(block)
			 })	    		
	    }
    })
}
export default Highlight