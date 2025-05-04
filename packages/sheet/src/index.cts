import { readFile, utils, writeFile } from 'xlsx';
import { getAllPermutations, targets_obj } from './enum';
import { charDiffSafe } from './util';

// 1. 读取文件
const workbook = readFile('./demo.xlsx');

// 2. 获取工作表名称
const sheetName = workbook.SheetNames[0];

// 3. 获取工作表内容
const worksheet = workbook.Sheets[sheetName];

// 4. 将工作表转换为 JSON（方便处理）
const data = utils.sheet_to_json<Record<string, any>>(worksheet, { defval: '' });

let last_ele = data[data.length - 1];

console.log(last_ele);


// ✅ 示例：修改第一行第一列的值
console.log(data, data.length);

console.log(last_ele);
/** 商品名称 */
const [good_name] = [Object.keys(last_ele as object)[1]];

const [key_val, sku_num, first, good_brand_id] = [Object.keys(last_ele as object)[3], Object.keys(last_ele as object)[7], Object.keys(last_ele as object)[0], Object.keys(last_ele as object)[11]];
const keys_array = Object.keys(last_ele as object);

last_ele[sku_num] = ''

const good_main = ['鸡胸肉', '鸡腿肉', '鲜活虾仁', '鲜切牛肉'] as const;
// const good_main = ['牛肉'];

const source_name_list = ['芝麻沙拉酱', '千岛酱', '双椒酱', '油醋汁'] as const;

/**
 * 
 * @param ref_ele 
 * @param main_food 
 * @param source_name 
 * @param good_price 
 * @param store_spu 
 * @returns 
 */
const generate_rice_source = (ref_ele: typeof last_ele, main_food: typeof good_main[number], source_name: typeof source_name_list[number], good_price: number = 20, store_spu: string, classify_name: string) => {
    let item = JSON.parse(JSON.stringify(ref_ele));
    item[good_name] = `${main_food}${classify_name}`;
    item[first] = ''
    item[key_val] = 31149;
    item[good_brand_id] = 240118;
    item[sku_num] = ``;
    item[keys_array[charDiffSafe('f')]] = '分量#酱料'

    item[keys_array[charDiffSafe('g')]] = `420g#${source_name}`
    item[keys_array[charDiffSafe('c')]] = `百分百手工${item[good_name]}`
    // todo: add the store spu
    // item[keys_array[charDiffSafe('e')]] = `${store_spu}`
    item[keys_array[charDiffSafe('m')]] = classify_name
    item[keys_array[charDiffSafe('i')]] = 500
    item[keys_array[charDiffSafe('j')]] = good_price
    return item;
}

let res_list: any[] = []
/* good_main.forEach((main_food) => {
    let time_stamp = Date.now();
    let good_price = 0;
    if (main_food === '鸡胸肉' || main_food === '鸡腿肉') {
        good_price = 18;
    } else {
        good_price = 22;
    }
    
    source_name_list.forEach((source_name) => {
        let item = generate_rice_source(last_ele, main_food, source_name, good_price, time_stamp.toString(), '杂粮饭');
        res_list.push(item);
    })
}) */
good_main.forEach((main_food) => {
    let time_stamp = Date.now();
    let good_price = 0;
    if (main_food === '鸡胸肉' || main_food === '鸡腿肉') {
        good_price = 18;
    } else {
        good_price = 28.8;
    }

    source_name_list.forEach((source_name) => {
        let item = generate_rice_source(last_ele, main_food, source_name, good_price, time_stamp.toString(), '荞麦面');
        res_list.push(item);
    })
})
good_main.forEach((main_food) => {
    let time_stamp = Date.now();
    let good_price = 0;
    if (main_food === '鸡胸肉' || main_food === '鸡腿肉') {
        good_price = 18;
    } else {
        good_price = 22;
    }

    source_name_list.forEach((source_name) => {
        let item = generate_rice_source(last_ele, main_food, source_name, good_price, time_stamp.toString(), '意面');
        res_list.push(item);
    })
})
console.log(res_list);

/* let to_add_array = new Array(2).fill(last_ele).map((_item, index) => {
    // console.log(Object.keys(item));
    let item = JSON.parse(JSON.stringify(_item));
    item[first] = ''
    // console.log(key_val);
    item[key_val] = 31149;
    item[good_brand_id] = 240118;
    item[sku_num] = ``;
    // item[good_name] = `手工鸡胸肉${index + 3}`;
    return item;
    // return `${10000 + index}`;
    // item['商品类目（末级类目ID）*'] = 10000 + index
})
 */

// res[0]
/* to_add_array[0][key_val] = 36596;
to_add_array[1][key_val] = 31149; */

// console.log(to_add_array);

/* let results = getAllPermutations(targets_obj)

console.log(results);
 */

// 5. 将修改后的数据重新转换为工作表
data.pop();
res_list[0][keys_array[0]] = '请从这一行开始填写'
const values = [...data, ...res_list]
console.log(values);

/* const newWorksheet = utils.json_to_sheet(values);

// 6. 替换原工作表
workbook.Sheets[sheetName] = newWorksheet;

// 7. 写入新文件（或覆盖原文件）
let path_name = `C:\\Users\\miner\\Downloads\\`;
writeFile(workbook, `${path_name}result.xlsx`);
 */