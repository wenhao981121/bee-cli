const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const { getTemplate } = require('./store')
const downloadGitRepo = require('download-git-repo')
// https://git.mucang.cn/html5page-webfront/jiaxiaozhijia-gongjuhao.git
module.exports = async function (name) {

    const cwd = process.cwd()
    const targetDir = path.join(cwd, name)
    if (fs.existsSync(targetDir)) {
        const { action } = await inquirer.prompt([{
            name: 'action',
            type: 'list',
            message: '文件夹已经,请选择操作：',
            choices: [{
                name: '重写',
                value: 'overwrite',
            }, {
                name: '取消',
                value: false
            }]
        }])
        if (action) {
            await fs.remove(targetDir)
            console.log('已移除存在目录');
        }
    }
    fs.mkdirp(targetDir)
    downloadGitRepo('direct:git地址', 'test', { clone: true }, function (err) {
        console.log(err ? 'Error' : 'Success')
    })
    // const data = await getTemplate()
    // console.log(1111, data.data);

    console.log('成功拉');
}