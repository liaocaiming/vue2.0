#### 1. 将---hostName---替换成特定的域名

\`\`\`

function replaceHostName\(folderPath, hostName\) {

    const replacePath = path.join\(\_\_dirname, folderPath\);

    fs.readdir\(replacePath, \(err, files\) =&gt; {

        if \(err\) {

            throw err;

        }

        files.forEach\(\(file, fileIndex\) =&gt; {

            const replaceFilePath = \`${folderPath}/${file}\`;

            fs.stat\(replaceFilePath, \(err, stats\) =&gt; {

                let hostReg = /---hostName---/g;

                let str = fs.readFileSync\(replaceFilePath\).toString\(\);

                if \(str.match\(hostReg\)\) {

                    str = str.replace\(hostReg, hostName\);

                    fs.writeFileSync\(replaceFilePath, str\);

                }

            }\)





        }\)

    }\)

}

\`\`\`



