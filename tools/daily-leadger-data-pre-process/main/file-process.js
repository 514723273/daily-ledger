const readline = require('readline');
const path = require('path');
const fs = require('fs');
const linesProcess = require('./lines-process');

const getReadLine = fileName => {
    const filePath = path.join(__dirname, fileName);
    const fileInput = fs.createReadStream(filePath);

    return readline.createInterface({
        input: fileInput
    });
}

/**
 * 入口!!!
 */
function readToday(TODAY_FILE_PATH, DATA_FILE_PATH) {
    const todayReadLine = getReadLine(`../${TODAY_FILE_PATH}`);
    const lines = [];
    todayReadLine.on('line', line => {
        lines.push(line);
    });
    todayReadLine.on('close', () => {
        record(...linesProcess(lines), DATA_FILE_PATH);
    });
}

function record(today, todayEvents, DATA_FILE_PATH) {
    const fileName = `../${DATA_FILE_PATH}/${today.year}/${today.month}.json`;
    const monthReadLine = getReadLine(fileName);
    // 先读取原文件的内容（当月）
    let content = '';
    monthReadLine.on('line', line => {
        content = `${content}${line}`;
    });
    monthReadLine.on('close', () => {
        let monthData = null;
        if(content.length === 0) {
            monthData = [];
        } else {
            monthData = JSON.parse(content);
        }
        // 添加新的一天，再整体覆盖写回
        monthData[today.date - 1] = todayEvents;
        fs.writeFile(path.join(__dirname, fileName), JSON.stringify(monthData), err => {
            if(err == null) {
                console.log('everythintg is OK!');
                return;
            }
            console.log(err);
        });
    })
}

module.exports = readToday;