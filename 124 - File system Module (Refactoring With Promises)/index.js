const fs = require('fs').promises;

async function filesystem(){
    // await fs.writeFile('./app.md','Hello my dear princess Candle!');
    // await fs.rename('./app.md', 'text.txt');
    // let data = await fs.readFile('./text.txt','utf-8');
    // console.log(data);
    await fs.unlink('./text.txt');
}
filesystem();