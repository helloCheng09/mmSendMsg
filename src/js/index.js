import _ from 'lodash'

import '../index.html'
import '../detail_msg.html'
import '../detail_msg_teacher.html'

import '../css/index.css';
import 'expose-loader?$!jquery'

// import delegate from './delegate.js'
// import tools from './tools.js'

/***
 * 入口
 */
(function () {

    if (document.getElementById('guanliIndex')) {
        console.log("发送通知")
        import( /* webpackChunkName: "tools" */ './tools').then(module => {
            var tools = module.default;
            // 设置textarea
            var textEleOne = document.getElementById('text_one')
            tools.autoTextarea(textEleOne)
        });
        import( /* webpackChunkName: "delegate" */ './delegate').then(module => {
            var delegate = module.default;
            // main screen
            delegate.listToggle()
            // 选择教师
            delegate.selectTeacher()
            // 提交通知
            delegate.submitForm()
        });
    } else if (document.getElementById('msgDetWrap')) {
        $('.det_p').on('click', function () {
            import( /* webpackChunkName: "delegate" */ './delegate').then(module => {
                var delegate = module.default;
                delegate.init()
            });
        })
    } else if (document.getElementById('tcMsgDet')){
        
    }

}())