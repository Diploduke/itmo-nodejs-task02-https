const [{ Server: h1 }, x] = [require('http'), require('express')];
// const x = require('express');
const app = x();
// const router = x.Router();
const PORT = 4321;
// const { log } = console;
const huc = { 
  'Content-Type': 'text/html; charset=utf-8',
  'Access-Control-Allow-Origin': '*'
};
const tuc = { 
  'Content-Type': 'text/plain; charset=utf-8',
  'Access-Control-Allow-Origin': '*' 
};

app
  .get('/', (r, rs) => { rs.status(200).set(tuc).end('79213589765') })
  .get('/login/', (r, rs) => { rs.status(200).set(tuc).end('79213589765') })
  .get('/sample/', (r, rs) => { 
    const textFunction = `function task(x) {
        return x * Math.pow(this, 2);
      }`;
    rs.status(200).set(tuc).end(textFunction)
  })

  .use((r, rs, n) => { r.errorMessage = 'Не найдено!'; next(); })
  .use(r => r.res.status(404).set(huc).send(r.errorMessage))
  .use((e, r, rs, n) => rs.status(500).set(huс).send(`Ошибка: ${e}`))

  .listen(4321);
// module.exports = h1(app)
//   .listen(process.env.PORT || PORT, () => log(process.pid));
