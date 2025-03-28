import"./assets/main-DzBLoxNU.js";function o(){return fetch("https://jsonplaceholder.typicode.com/todos/1").then(t=>{if(!t.ok)throw new Error(`Помилка: ${t.status}`);return t.json()})}o().then(t=>{console.log(t)}).catch(t=>{console.error("Помилка при отриманні даних:",t)});
//# sourceMappingURL=fetch.js.map
