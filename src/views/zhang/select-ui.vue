<template>
	<el-form-item label="Activity zone">
        <el-select v-model="msg" @change="backvalue" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
    </el-form-item>
</template>

<script>
	export default {
		data() {
			return {
				msg:this.massage
				
				
			}
		},
		props: ['massage'],
		methods: {
			backvalue() {
				alert(this.massage)
				this.$emit("childwatch",this.msg);
			}
		}
	}
</script>

<style>
</style>