function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Помилка: ${response.status}`);
            }
            return response.json();
        });
}

fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Помилка при отриманні даних:', error);
    });