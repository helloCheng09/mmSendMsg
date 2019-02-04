// 构造函数
function Delegate() {
    // 加属性
    this.isFirst = true //首次加载
    this.relH = $('.det_p').height() + 20 + 'px' // 获取通知内容实际高度
}
// 原型加方法
Delegate.prototype = {
    init: function () {
        if (this.isFirst) {
            $('.det_p').css({
                'height':this.relH
            })
            this.showMsgDet(this.relH)
            this.isFirst = false
        }
        var that = this
        $('.det_p').off()
        $('.det_p').on('click', function () {
            that.showMsgDet(that.relH)
        })
    },
    selectTeacher: function () {
        var _that = this
        $('.select_bar ').on('click', function () {
            var text = $(this).find('label').text()
            var _this = $(this)
            _that.showSelected.apply(_this)
        })
    },
    showSelected: function () {
        $('.select_bar').find('.teacher-radio').removeAttr('checked')
        $('.select_bar').find('.default_icon').show()
        $('.select_bar').find('.select_icon').hide()
        $(this).find('.teacher-radio').attr('checked', 'checked')
        $(this).find('.select_icon').show()
    },
    submitForm: function () {
        var ifSubmit = false
        $('form').submit(function () {
            if(!ifSubmit){
                console.log('提交')
                console.log($(this).serializeArray())
                var formIptData = $(this).serializeArray()
                for (var i = 0; i < formIptData.length; i++) {
                    // $.each(formIptData[i], function (index, item) {
                        if (formIptData[i].value == '') {
                            layer.confirm('请完善通知内容')
                            return false
                        }
                    // })
                }
                ifSubmit = true
            }
            return false
        })
    },
    listToggle: function () {
        var lastIndex = 0
        $('.m_screen_tag').on('click', function () {
            var curIndex = $(this).index()
            if (curIndex != lastIndex) {
                // $('.m_screen_tag').find('.tag-text').toggleClass('select')
                $('.m_screen_tag').eq(0).find('.btn-bx img').toggle()
                $('.m_screen_tag').eq(1).find('.btn-bx img').toggle()
            }
            $('.main-screen').toggle()
            lastIndex = curIndex
        })
    },
    showMsgDet: function (relH) {
        if ($('.sh_btn').attr('data-status') == 'hid') {
            $('.det_p').css({
                'height': relH
            })
            $('.con-bx p').removeClass('one-ellipsis').css({
                'white-space': 'initial',
                'width': 'auto',
                'padding-bottom': '2px'
            })
            $('.sh_btn').attr('data-status', 'show')
        } else {
            $('.det_p').css({
                'height': '60px'
            })
            setTimeout(() => {
                $('.con-bx p').addClass('one-ellipsis').css({
                    'white-space': 'nowrap',
                    'width': '80%',
                    'padding-bottom': '10px'
                })
            }, 200);
            $('.sh_btn').attr('data-status', 'hid')
        }
    }
}

// 实例化
var delegate = new Delegate()

// 输出
module.exports = delegate