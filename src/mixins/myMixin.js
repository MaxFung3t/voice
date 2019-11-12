const myMixin ={
    data (){
        return {

        }
    },
    methods:{
        deepCopy(obj){
			var result;
			if(Object.prototype.toString.call(obj) == '[object Array]'){
				result = [];
				for(var i;i<obj.length;i++){
					result[i] = this.deepCopy(obj[i]);
				}
			}else if(Object.prototype.toString.call(obj) == '[object Object]'){
				result = {};
				for(var key in obj){
					result[key] = this.deepCopy(obj[key]);
				}
			}else {
				return obj;
			}
			return result;
		}
    }
} 
export default myMixin;