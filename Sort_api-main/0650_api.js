function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
         getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}

async function getResponce() {

    let responce = await fetch("shop.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 9)
    //content.sort()
    console.log(content)
    let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/
    content_price=content.sort((a, b) => a.price - b.price);

    let node_for_insert = document.getElementById("node_for_insert")
    //node_for_insert.innerHTML='';
    for (key in content_price) {
                node_for_insert.innerHTML += `
                <li style="width: 280px">
                <img style="width: 240px" class="align-self-center" src=${content[key].img}>
                <h4 class="card-title">${content[key].date}</h4>
                <h5 class="card-title">${content[key].title}</h5>
                <p class="card-text">${content[key].description}</p>
                </li>
                        `
            }

}
async function getResponce1() {
   // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
//    let responce = await fetch("shop.json")
    let responce = await fetch("shop.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 9)
    //content.sort()
    console.log(content)
    let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/

    // sort by name
    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

   // node_for_insert.innerHTML='';
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_title) {
                node_for_insert.innerHTML += `
                <li style="width: 280px">
                <img style="width: 240px" class="align-self-center" src=${content[key].img}>
                <h4 class="card-title">${content[key].date}</h4>
                <h5 class="card-title">${content[key].title}</h5>
                <p class="card-text">${content[key].description}</p>
                </li>
                        `
            }

}

sort()
