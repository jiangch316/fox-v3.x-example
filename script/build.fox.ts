/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-23 10:16:33
 */
/**
 * fox打包
 */
import { join } from 'path'
import { rollup, OutputOptions } from 'rollup'
import minimist from 'minimist'
import chalk from 'chalk'
import ora from 'ora'
import dotenv from 'dotenv'
import { options, dtsOptions } from './rollup.fox.config'

dotenv.config({ path: join(__dirname, '../.env') })

const argv = minimist(process.argv.slice(2))
const opt = options(argv.env)
const dtsOpt = dtsOptions()
const TAG = '[script/fox]'
const spinner = ora(`${TAG} build...\n`)

/**
 * build
 */
async function build(){
    //打开spinner
    spinner.start()
    let name:string|undefined
    try{
        //编译结果
        let result:any
        //编译fox-libs文件
        name = 'fox'
        result = await rollup(opt)
        result.write(opt.output as OutputOptions)
        console.log(TAG, chalk.green(`${name} build successed\n`))

        //编译fox.d.ts文件
        name = 'fox.d.ts'
        result = await rollup(dtsOpt)
        result.write(dtsOpt.output as OutputOptions)
        console.log(TAG, chalk.green(`${name} build successed\n`))
        //关闭spinner
        spinner.stop()
        return true
    }catch(error){
        spinner.stop()
        console.log(`\n${TAG} ${name}${chalk.red('构建报错')}\n`, error, '\n')
    }
    return false
}
//执行build
build()
