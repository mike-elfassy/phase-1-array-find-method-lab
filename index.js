// const superbowlWin = superbowl => superbowl.result === 'W'
// console.log(record.find(superbowl => superbowl.result === 'W'))

const superbowlWin = function(record) {
    let result = record.find(record => record.result === 'W')
    if (typeof result === "undefined") {return undefined}
    else {return result.year}
}