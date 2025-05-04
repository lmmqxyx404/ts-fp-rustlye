const targets_obj = {
    '酱料': ['千岛酱', '沙拉酱', '番茄酱'],
    /* '蛋白质': ['水煮熟鸡蛋', '香煎鸡蛋', '溏心蛋', '五香茶叶蛋'],
    '主食': ['糙米饭', '意面', '荞麦面'] */
} as const;

// 自动推导 key
type TargetKeyType = keyof typeof targets_obj;

// 需要的话可以生成 keys 数组
const enumKeys = Object.keys(targets_obj) as TargetKeyType[];

function getAllPermutations(targets: typeof targets_obj): string[] {
    const keys = Object.keys(targets) as TargetKeyType[];

    const lists = keys.map(key => targets[key]);

    // 笛卡尔积
    function cartesian(arr: string[][]): string[][] {
        return arr.reduce((a, b) => {
            const result: string[][] = [];
            a.forEach(aItem => {
                b.forEach(bItem => {
                    result.push([...aItem, bItem]);
                });
            });
            return result;
        }, [[]] as string[][]);
    }

    const permutations = cartesian(lists as any);

    // 拼接成字符串
    return permutations.map(items => items.join('#'));
}

export { getAllPermutations, targets_obj }
// console.log();
