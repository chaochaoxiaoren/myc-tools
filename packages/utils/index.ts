// 使用export是为了单测方便
export const unshiftMore = (array: Array<string|number>, ...args: (string | number)[]) => {
    if (array) {
        for(let i = args.length - 1; i >= 0; i--) {
            array.splice(0, 0, args[i])
        }
        return array
    }
    return;
}

// 使用export default 是为了向外导出，方便多个同类型项目聚合在一起
export default {
    unshiftMore
}
