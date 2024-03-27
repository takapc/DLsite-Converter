const before = [
    "ざぁ〜こ♡",
    "合意なし",
    "ひよこ",
    "ひよこババア",
    "閉じ込め",
    "超ひどい",
    "逆レ",
    "命令/無理矢理",
    "近親もの",
    "責め苦",
    "トランス/暗示",
    "動物なかよし",
    "精神支配",
    "秘密さわさわ",
    "しつけ",
    "下僕",
    "屈辱",
    "回し",
    "虫えっち",
    "モブおじさん",
    "異種えっち",
    "機械責め",
    "すやすやえっち",
    "トランス/暗示ボイス",
];
const after = [
    "メスガキ",
    "レイプ",
    "ロリ",
    "ロリババア",
    "監禁",
    "鬼畜",
    "逆レイプ",
    "強制/無理矢理",
    "近親相姦",
    "拷問",
    "催眠",
    "獣姦",
    "洗脳",
    "痴漢",
    "調教",
    "奴隷",
    "陵辱",
    "輪姦",
    "蟲姦",
    "モブ姦",
    "異種姦",
    "機械姦",
    "睡眠姦",
    "催眠音声",
];

function replace(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        for (let i = 0; i < 24; i++) {
            node.textContent = node.textContent.replace(
                new RegExp(before[i], "g"),
                after[i]
            );
        }
    } else {
        node.childNodes.forEach(replace);
    }
}

window.onload = function () {
    replace(document.body);
};
