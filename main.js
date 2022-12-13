let productNameInp = document.getElementById('productNameInp')
let productPriceInp = document.getElementById('productPriceInp')
let productCategoryInp = document.getElementById('productCategoryInp')
let productDesInp = document.getElementById('productDesInp')
let currentIndex;
let producontainer = []

if (localStorage.getItem('products') != null) {
    producontainer = JSON.parse(localStorage.getItem('products'))
    displayData()
}

function addProduct() {
    let product = {
        name: productNameInp.value,
        price: productPriceInp.value,
        Category: productCategoryInp.value,
        desc: productDesInp.value
    }

    producontainer.push(product)
    localStorage.setItem('products', JSON.stringify(producontainer))
    // console.log(producontainer);

    clearData()
    displayData()
}


function clearData() {
    productNameInp.value = ''
    productPriceInp.value = ''
    productCategoryInp.value = ''
    productDesInp.value = ''
}


function displayData() {
    var content = ``
    for (let i = 0; i < producontainer.length; i++) {
        content += `<tr>
        <td>${[i]}</td>

        <td>${producontainer[i].name}</td>
        <td>${producontainer[i].price}</td>
        <td>${producontainer[i].Category}</td>
        <td>${producontainer[i].desc}</td>
        <td><button onclick='deleteData(${i})' class='btn btn-sm btn-outline-danger'>Delete</button></td>
        <td><button onclick='updateDate(${i})' class='btn btn-sm btn-outline-info'>update</button></td>
    </tr>`
    }
    document.getElementById('table').innerHTML = content
}


function deleteData(index) {
    producontainer.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(producontainer))
    displayData()

}
// deleteData(1)

function search(term) {
    var content = ``

    for (i = 0; i < producontainer.length; i++) {
        if (producontainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            content += `<tr>
        <td>${[i]}</td>

        <td>${producontainer[i].name}</td>
        <td>${producontainer[i].price}</td>
        <td>${producontainer[i].Category}</td>
        <td>${producontainer[i].desc}</td>
        <td><button onclick='deleteData(${i})' class='btn btn-sm btn-outline-danger'>Delete</button></td>
        <td><button onclick='updateDate(${i})' class='btn btn-sm btn-outline-info'>update</button></td>
    </tr>`
        }
        document.getElementById('table').innerHTML = content

    }

}

function updateDate(index) {

    currentIndex = index

    productNameInp.value = producontainer[index].name
    productPriceInp.value = producontainer[index].price
    productCategoryInp.value = producontainer[index].Category
    productDesInp.value = producontainer[index].desc
    document.getElementById('update').classList.replace("d-none", "d-inline-block")
    document.getElementById('add').classList.add('d-none')

}

function saveChange() {
    producontainer[currentIndex].name = productNameInp.value
    producontainer[currentIndex].price = productPriceInp.value
    producontainer[currentIndex].Category = productPriceInp.value
    producontainer[currentIndex].Category = productCategoryInp.value
    producontainer[currentIndex].desc = productDesInp.value

    localStorage.setItem('products', JSON.stringify(producontainer))
    displayData()
    clearData()
    document.getElementById('add').classList.replace("d-none", "d-inline-block")
    document.getElementById('update').classList.add('d-none')


}