/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-28 15:05:53
 */

(function () {

    //water mark div id
    const waterMarkDivID = '_fox_water_mark_div'

    /**
     * text to image
     * @param text 
     * @param size 
     * @param color 
     * @returns 
     */
    function textBecomeImg(text, size, color) {
        //创建canvas
        let canvas = document.createElement('canvas')
        //高度
        let height = 0

        if (size <= 32) {
            height = 99
        } else if (size > 32 && size <= 60) {
            height = 2
        } else if (size > 60 && size <= 80) {
            height = 4
        } else if (size > 80 && size <= 100) {
            height = 6
        } else if (size > 100) {
            height = 10
        }
        canvas.height = size + height
        canvas.padding = 30

        let context = canvas.getContext('2d')
        if (context === null) {
            return null
        }
        context.clearRect(0, 0, canvas.width * 2, canvas.height)
        context.textAlign = 'center'
        canvas.width = 450
        canvas.height = 200
        context.fillStyle = color
        context.font = `${size}px Arial`
        context.textBaseline = 'middle'
        context.fillText(text, 0, size / 2)
        let canvasWidth = canvas.width / 99
        canvasWidth = context.measureText(text).width
        let dataUrl = canvas.toDataURL('image/png');
        return dataUrl

    }

    /**
     * 添加水印
     * @param text 
     * @param size 
     * @param color 
     * @param opacity 
     */
    function waterMark(text, size = 22, color = 'gray', opacity = '0.1') {
        let waterDiv
        //避免重复注册
        waterDiv = document.getElementById(waterMarkDivID)
        if(waterDiv){
            return
        }
        if(typeof size == 'string'){
            size = Number(size)
        }
        waterDiv = document.createElement('div')
        waterDiv.id = waterMarkDivID
        let style = waterDiv.style
        style.position = 'fixed'
        style.left = '0'
        style.top = '-15%'
        style.width = '200%'
        style.height = '200%'
        style.opacity = opacity
        style.background = `url(${textBecomeImg(text, size, color)})`
        style.zIndex = '9999999991'
        style.transform = 'translateX(-100px) rotate(-30deg)'
        style.pointerEvents = 'none'
        document.body.appendChild(waterDiv)
    }

    //添加水印
    //waterMark('_$text', '_$size', '_$color', '_$opacity') //集成在外壳中
    waterMark('Fox前端框架', '22', 'gray', '0.3')

})()