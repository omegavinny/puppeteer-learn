const fs = require('fs');

module.exports = {
    async waitForSeconds(delay = 1) {
        return await new Promise(resolve => setTimeout(resolve, delay * 1000));
    },
    async waitForFile(filename, attempts = 3, delay = 5) {
        return new Promise(async (resolve, reject) => {
            let attempt = 1;
            while(attempt <= attempts) {
                await new Promise(resolve => setTimeout(resolve, delay * 1000));
                if (fs.existsSync(filename)) {
                    return resolve(true);
                }
                attempt++;
            }
            return reject(false);
        }, attempts, delay, filename);
    }
}
