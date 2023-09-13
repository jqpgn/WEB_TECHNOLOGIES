const node_for_click_name = document.getElementById('for_click_name')

function find_edit_name() {
    const div4 = document.getElementsByTagName('div')[4]
    console.log(div4.innerText)
    div4.innerText = 'Primachenko'

    const div5 = document.getElementsByTagName('div')[5]
    console.log(div5.innerText)
    div5.innerText = 'Anastasia'

    const div6 = document.getElementsByTagName('div')[6]
    console.log(div6.innerText)
    div6.innerText = 'Andreevna'
}
node_for_click_name.addEventListener('click', find_edit_name)

const node_for_click_first_page = document.getElementById('for_click_first_page')
function find_edit_first_page() {
    document.getElementsByTagName('div')[0].innerText = 'ГУ МВД РОССИИ ПО N-СКОМУ РАЙОНУ'
    document.getElementsByTagName('div')[1].innerText = ' '
    document.getElementsByTagName('div')[2].innerText = '25.08.2016'
    document.getElementsByTagName('div')[3].innerText = '290-921'
}

node_for_click_first_page.addEventListener('click', find_edit_first_page)

const node_for_click_sex = document.getElementById('for_click_sex')

function find_edit_sex() {
    document.getElementsByTagName('div')[7].innerText = 'муж.'
    document.getElementsByTagName('div')[8].innerText = '13.08.2005'
}
node_for_click_sex.addEventListener('click', find_edit_sex)