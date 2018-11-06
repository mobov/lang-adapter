/**
 * 业务多语言适配器
 * 
 * @param {string} lang 需要被适配的语言字符串 ,为空则返回英语
 * @returns 适配结果，没有适配结果则返回输入的字符串
 * 
 * @author nocoolyoyo
 * @since 2018-05-23
 */
import LANG_MAP from './map'
import adapter from './adapter'

export default adapter

export {
	adapter,
	LANG_MAP
}
