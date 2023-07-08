# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

https://prnt.sc/vvN3RJkGyJL4
node index.js --action="list"

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

https://prnt.sc/HHs4HZwBLY6p
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

https://prnt.sc/EwZh1oLm1crO
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

https://prnt.sc/fNbmxsIfcJsQ
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
