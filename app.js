const btn = document.getElementById('add-new-task');
const btnMobile = document.getElementById('add-new-task-mobile')
const newInput = document.getElementById('newInput');
const listView = document.getElementById('list');
const list = [];

document.getElementById('totalList').innerHTML = `Total List: ${list.length}`
const viewList = () => {
    let data = '';
    list.map((item, index) => {
        data += `<p>${item} <button onclick="remove('${index}')"><img src="./assets/closeBtn.png"/></button></p>`
    })
    listView.innerHTML = data;
    document.getElementById('totalList').innerHTML = `Total List: ${list.length}`
}

const remove = (index) => {
    list.splice(index, 1);
    console.log(list);
    viewList()
}

btn.addEventListener("click", () => {
    if(newInput.value !== ''){
        list.push(newInput.value)
        newInput.value = '';
        viewList()
    }
})

btnMobile.addEventListener('click', () => {
    if(newInput.value !== ''){
        list.push(newInput.value)
        newInput.value = '';
        viewList()
    }
})