const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
// 打開側列
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})
// 關閉側列
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})

// 換色
// classList.toggle 沒有這個class時新增，有的話就移除
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
    
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})

Orders.forEach(order =>{
    const tr=document.createElement('tr');
    const trContent=`
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger':order.shipping==='pending'? 'warning':'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})