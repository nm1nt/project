const API_URL = 'https://fakestoreapi.com/products?limit=8'

const getProducts = async () => {
    const response = await axios.get(API_URL)
    const data = response.data
    // console.log(data)
    mapDataFromApi(data)
}

getProducts()

const productsQuery = document.querySelector('#products')

const truncate = (string, length) => {
    if (string.length > length) {
        return string.substring(0, length) + '...'
    } else {
        return string
    }
}

const mapDataFromApi = (params) => {
    const products = params?.map((item, index) => {
    console.log(item)
    return `
    <div class="card w-[300px] bg-base-100 shadow-xl image-full">
    <figure><img src=${item.image} alt="Shoes" class='w-[300px] h-[150px] object-cover ' /></figure>
    <div class="card-body w-[300px] h-[300px]">
      <h2 class="card-title">${truncate(item.title, 25)}</h2>
      <p>${truncate(item.description, 80)}</p>
      <div class="card-actions justify-end">
        <button onclick="handleBuying()" class="btn btn-primary"> $ ${item.price}</button>
      </div>
    </div>
  </div>
        `
    })

    productsQuery.innerHTML = products.join('')
}