const test = require('../utils/test');

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
function findDuplicate(pathList) {
  const filesMap = new Map();
  for (const path of pathList) {
    const [folderPath, ...files] = path.split(' ');
    files.forEach((file) => {
      const [_, fileName, fileContent] = parseFile(file);
      if (!filesMap.has(fileContent)) {
        filesMap.set(fileContent, []);
      }
      filesMap.get(fileContent).push(`${folderPath}/${fileName}`);
    });
  }
  return Array.from(filesMap.values()).filter(
    (fileArray) => fileArray.length > 1
  );
}

function parseFile(file = '') {
  return file.match(/(.+)\((.+)\)/);
}

// function findDuplicate(paths) {
//   let contMap = new Map(),
//     ans = [];
//   for (let pStr of paths) {
//     let i = 0,
//       j,
//       k;
//     while (pStr.charAt(i) !== ' ') i++;
//     let path = pStr.slice(0, i);
//     for (j = ++i; i < pStr.length; i++)
//       if (pStr.charAt(i) === '(') k = i;
//       else if (pStr.charAt(i) === ')') {
//         let pathfile = path + '/' + pStr.slice(j, k),
//           cont = pStr.slice(k + 1, i);
//         if (!contMap.has(cont)) contMap.set(cont, [pathfile]);
//         else contMap.get(cont).push(pathfile);
//         j = i + 2;
//       }
//   }
//   for (let v of contMap.values()) if (v.length > 1) ans.push(v);
//   return ans;
// }

test(
  [],
  findDuplicate([
    'root/a 1.txt(abcd) 2.txt(efsfgh)',
    'root/c 3.txt(abdfcd)',
    'root/c/d 4.txt(efggdfh)',
  ])
);
