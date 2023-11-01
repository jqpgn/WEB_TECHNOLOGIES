const node_for_click_name = document.getElementById('for_click_eng')

function find_edit_eng() {
    const div4 = document.getElementsByTagName('div')[4]
    console.log(div4.innerText)
    div4.innerText = 'Primachenko'

    const div5 = document.getElementsByTagName('div')[5]
    console.log(div5.innerText)
    div5.innerText = 'Anastasiya'

    const div6 = document.getElementsByTagName('div')[6]
    console.log(div6.innerText)
    div6.innerText = 'Andreevna'
    document.getElementsByTagName('div')[0].innerText = 'Main Directorate of the Ministry of Internal Affairs'
    document.getElementsByTagName('div')[1].innerText = 'of Russia for the N-SKY DISTRICT '
    document.getElementsByTagName('div')[7].innerText = 'female'
    document.getElementsByTagName('div')[9].innerText = 'Moscow'
}
node_for_click_name.addEventListener('click', find_edit_eng)

const node_for_click_first_page = document.getElementById('for_click_rus')
function find_edit_rus() {
    document.getElementsByTagName('div')[4].innerText = 'Примаченко'
    document.getElementsByTagName('div')[5].innerText = 'Анастасия'
    document.getElementsByTagName('div')[6].innerText = 'Андреевна'
    document.getElementsByTagName('div')[0].innerText = 'УФМС РОССИИ ПО ГОР. МОСКВЕ'
    document.getElementsByTagName('div')[1].innerText = 'ПО N-СКОМУ РАЙОНУ'
    document.getElementsByTagName('div')[7].innerText = 'жен.'
    document.getElementsByTagName('div')[9].innerText = 'гор. Москва'
}
node_for_click_first_page.addEventListener('click', find_edit_rus)