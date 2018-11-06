/**
 * Created by nocoolyoyo on 2018/10/18.
 */
import adapter from '../src/index'

const $input = document.querySelector('.input')
const $result = document.querySelector('.result')
$input.addEventListener('change', function () {
	$result.value = adapter($input.value)
})




