<template>
    <div class="mapPage">
        <div class="seacherBox">
            <input type="text" id="tipinput" v-model="secherVal" @input="getSeacherDataByInputText" placeholder="请输入地址">
            <button>搜索</button>
        </div>
        <div v-show="!seacherDataByInputVal.length>0">
            <div class="mapBox">
                <div id="map" ref="Mymap"></div>
                <div class="marker-static"></div>
            </div>
            <div class="dataListBox" v-if="pageData.length>0" :style="'height:'+listHeight+'px;'">
                <ul class="_listBox">
                    <li class="_item" v-for="item in pageData" @click="showItem(item)">
                        <h4>{{item.name}}</h4>
                        <p>{{item.address}}</p>
                        <span class="_addrTag"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="seacherDataListBox" v-if="seacherDataByInputVal.length>0">
            <ul class="_list">
                <li class="_item" v-for="item in seacherDataByInputVal" @click="selectSeachDataItem(item)">
                    <h4>{{item.name}}</h4>
                    <p>{{item.address}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {getMapData,getSeacherData} from '../../api/map'
    export default {
        data() {
            return {
                map: null,
                pageData:[],
                listHeight:0,
                secherVal:'',
                seacherDataByInputVal:[]
            }
        },
        props: {
            mapHeight: {
                type: Number,
                default: 300
            },
            keyWord:{
                type: String,
                default:'大楼|广场|小区'
            },
            lat:{
                type: Number,
                default:116.397428
            },
            lng:{
                type: Number,
                default:39.90923
            },
            types:{
                type: String,
                default:'教育机构'
            },
            cityName:{
                type: String,
                default:'北京'
            },
            getCityMapBy:{
                type: String,
                default:'cityName'
            }
        },
        mounted() {
            this.$refs.Mymap.style.height = this.mapHeight + 'px';
            this.listHeight = document.body.clientHeight - this.mapHeight - 40;
            this.map = new AMap.Map('map', {
                resizeEnable: true,
                zoom:12,
            });
            if(this.getCityMapBy === 'cityName'){
                this.map.setCity(this.cityName);
            }else{
                this.map.setCenter([this.lat,this.lng]);
            }
            this._getMapDate();
            this._dragend();
        },
        methods: {
            getSeacherDataByInputText(){
                this._getSeacherData();
            },
            selectSeachDataItem(item){
                this.seacherDataByInputVal = [];
                this.secherVal = '';
                let itemLatLng = item.location.split(',')
                this.lat =itemLatLng[0];
                this.lng =itemLatLng[1];
                this._getMapDate();
                this.map.setZoomAndCenter(12, [this.lat,this.lng]);
            },
            _getSeacherData(){
                getSeacherData({
                    keyWord:this.secherVal,
                }).then((res) => {
                    this.seacherDataByInputVal = res.tips;
                })
            },
            _getMapDate() {
                getMapData({
                    lat:this.lat,
                    lng:this.lng,
                    keyWord:this.keyWord,
                    types:this.types
                }).then((res) => {
                    this.pageData = res.pois;
                })
            },
            _dragend() {
                this.map.on('dragend', (e) => {
                    let _C = this.map.getCenter();
                    this.lat = _C.lat;
                    this.lng = _C.lng;
                    this._getMapDate();
                });
            },
            showItem(item){
                this.$emit('changeAddr',item)
            }
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .mapPage {
        background-color: #f8f8f8;
        .seacherBox {
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            box-sizing: border-box;
            border-bottom:1px solid #ccc;
            position: relative;
            input {
                border: 1px solid #ccc;
                width: 100%;
                height: 30px;
                border-radius: 5px;
                padding-left: 10px;
                box-sizing: border-box;
                font-size: 12px;
            }
            button{
                position: absolute;
                right:10px;
                top:5px;
                height:30px;
                background:none;
                border:none;
                border-left:1px solid #ddd;
                width:60px;
                font-size: 14px;
            }
        }
        .mapBox {
            position: relative;
            .marker-static {
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 9999;
                width: 18px;
                height: 30px;
                background: url(../../assets/marker_01.png) no-repeat;
                background-size: 18px 30px;
                margin-top: -29px;
                margin-left: -9px;
            }
        }
        .dataListBox{
           padding:10px;
            box-sizing: border-box;
            height:200px;
            ul._listBox{
                height:100%;
                overflow-y:scroll;
                li._item{
                    padding-left:35px;
                    box-sizing: border-box;
                    padding-bottom:5px;
                    border-bottom:1px solid #ddd;
                    position: relative;
                    >h4{
                        font-size: 14px;
                        line-height: 28px;
                    }
                    >p{
                        font-size: 12px;
                        line-height: 18px;
                        color:#999;
                    }
                    ._addrTag{
                        display: inline-block;
                        width:15px;
                        height:30px;
                        background:url(../../assets/poi_icon.png) no-repeat;
                        background-size: 100%;
                        position: absolute;
                        left:5px;
                        top:15px;

                    }
                }
            }
        }
        .seacherDataListBox{
            ._list{
                ._item{
                    padding:5px 10px;
                    border-bottom:1px solid #ccc;
                    >h4{
                        font-size:15px;
                        line-height: 28px;
                    }
                    >p{
                        font-size: 12px;
                        line-height: 20px;
                        color:#999;
                    }
                }
            }
        }
    }
</style>
