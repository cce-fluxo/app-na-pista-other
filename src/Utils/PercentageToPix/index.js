export default function percentageToPx(...args) {
    return args.map((subArr) => `${subArr[0]}: ${subArr[1]}px;`).join('\n');
 }