const node_insert_img = document.getElementById("insert_img")

function insert_img() {
    // Создаем элемент изображения
    const img = document.createElement("img");

    // Устанавливаем путь к изображению
    img.src = "cat.jpg";

    // Устанавливаем альтернативный текст для изображения
    img.alt = "Описание изображения";
    img.height = "200";
    img.width = "200";

    // Получаем контейнер, куда нужно вставить изображение
    //const container = document.querySelector('#image-container');
    //const container = document.getElementById("image-container");

    // Вставляем изображение в контейнер
    container.append(img);

    document.getElementsByTagName("div")[1].appendChild(img); // вставили в div 1(внизу)
}
node_insert_img.addEventListener("click", insert_img)