import { readFile, utils, WorkBook, writeFile } from 'xlsx';

const readFileToJson = (filePath: string) => {
    // todo0. check the path.

    // 1. 读取文件
    const workbook = readFile(filePath);

    // 2. 获取工作表名称
    const sheetName = workbook.SheetNames[0];

    // 3. 获取工作表内容
    const worksheet = workbook.Sheets[sheetName];

    // 4. 将工作表转换为 JSON（方便处理）
    const data = utils.sheet_to_json<Record<string, any>>(worksheet, { defval: '' });
    return {
        data: data,
        workbook: workbook,
        sheetName: sheetName
    }
}

const readJsonToFile = (data: Array<any>, workbook: WorkBook, sheetName: string, targetFilePath: string) => {

    const newWorksheet = utils.json_to_sheet(data);

    // 6. 替换原工作表
    workbook.Sheets[sheetName] = newWorksheet;

    // 7. 写入新文件（或覆盖原文件）
    let path_name = `C:\\Users\\miner\\Downloads\\`;
    writeFile(workbook, `${path_name}result.xlsx`);
}

export {
    readFileToJson, readJsonToFile
}