fetch('https://api.coindesk.com/v1/bpi/currentprice.json')

.then((value) => {
    console.log(value.status)
    console.log(value.ok)
    return value.json()
}).then((value2) => {
    console.log(value2)//here i got the value of api as a object

    write = ''
    for (key in value2) {//used for in loop to get the value of that api object 
        console.log(value2[key].bpi)//checking the value 

        //write will take the value of  html and in the end we can give  it to the div as a inner html
        write += `

    
        
        
        <div class="col-md-6 mb-md-0 p-md-4">
<img src="image/pexels-markus-spiske-3671148.jpg" class="w-100" alt="This is image">
</div>
<div class="col-md-6 p-4 ps-md-0">
<h5 class="mt-0 allhead" >${value2['bpi']['EUR'].code}</h5>


<p class="para_tag">The euro (symbol: €; code: EUR) is the official currency of 20 of the 27 member states of the European Union (EU). This group of states is known as the eurozone or, officially, the euro area, and includes about 344 million citizens as of 2023. The euro is divided into 100 cents.</p>
<div class="info-box">
<h3 class="all_info">More Info :</h3>
<p><span class="inside_info">Code:</span> ${value2.bpi.EUR.code}</p>
<p> <span class="inside_info">Symbol:</span> ${value2.bpi.EUR.symbol}</p>
<p> <span class="inside_info">Rate:</span> ${value2.bpi.EUR.rate}</p>
<p><span class="inside_info">Rate_float:</span> ${value2.bpi.EUR.rate_float}</p>
<h3 class= "all_info">Time Zone:</h3>
<div class="time_zone">
<span> <span class="inside_info">Updated Universal : </span> ${value2[key].updated} </span>
<span> <span class="inside_info">Updated ISO :</span> ${value2[key].updatedISO}</span>
<span> <span class="inside_info">Updated BST : </span> ${value2[key].updateduk}</span>
</div>
</div>

</div>

<div class="col-md-6 mb-md-0 p-md-4">
<img src="image/pexels-tibor-szabo-16956699.jpg" class="w-100" alt="This is image">
</div>
<div class="col-md-6 p-4 ps-md-0">
<h5 class="mt-0 allhead" >${value2['bpi']['GBP'].code}</h5>


<p class="para_tag">GBP is the abbreviation for the British pound sterling, the official currency of the United Kingdom, the British Overseas Territories of South Georgia, the South Sandwich Islands, and British Antarctic Territory and the U.K. crown dependencies the Isle of Man and the Channel Islands.</p>
<div class="info-box">
<h3 class="all_info">More Info :</h3>
<p><span class="inside_info">Code:</span> ${value2.bpi.GBP.code}</p>
<p> <span class="inside_info">Symbol:</span> ${value2.bpi.GBP.symbol}</p>
<p> <span class="inside_info">Rate:</span> ${value2.bpi.GBP.rate}</p>
<p><span class="inside_info">Rate_float:</span> ${value2.bpi.GBP.rate_float}</p>
<h3 class= "all_info">Time Zone:</h3>
<div class="time_zone">
<span> <span class="inside_info">Updated Universal : </span> ${value2[key].updated} </span>
<span> <span class="inside_info">Updated ISO : </span>  ${value2[key].updatedISO}</span>
<span> <span class="inside_info">Updated BST : </span> ${value2[key].updateduk}</span>
</div>
</div>

</div>


<div class="col-md-6 mb-md-0 p-md-4">
<img src="image/pexels-sergei-starostin-6590646.jpg" class="w-100" alt="This is image">
</div>
<div class="col-md-6 p-4 ps-md-0">
<h5 class="mt-0 allhead" >${value2['bpi']['USD'].code}</h5>


<p class="para_tag">The USD is the currency abbreviation for the U.S. dollar ($), the official currency of the United States of America and the world's primary reserve currency over the past several decades. It is managed by the Federal Reserve, America's central bank.

In foreign exchange (forex) markets, the USD is the most common pairing in exchange with other currencies; for instance, EUR/USD, USD/JPY, and GBP/USD. The U.S. dollar is also the official currency for a small number of other nations such as The Marshall Islands, Panama and Ecuador, and is unofficially accepted in local exchange in several other countries around the world.</p>
<div class="info-box">
<h3 class="all_info">More Info :</h3>
<p><span class="inside_info">Code:</span> ${value2.bpi.USD.code}</p>
<p> <span class="inside_info">Symbol:</span> ${value2.bpi.USD.symbol}</p>
<p> <span class="inside_info">Rate:</span> ${value2.bpi.USD.rate}</p>
<p><span class="inside_info">Rate_float:</span> ${value2.bpi.USD.rate_float}</p>
<h3 class= "all_info">Time Zone:</h3>
<div class="time_zone">
<span> <span class="inside_info">Updated Universal : </span> ${value2[key].updated} </span>
<span><span class="inside_info">Updated ISO : </span> ${value2[key].updatedISO}</span>
<span><span class="inside_info">Updated BST : </span> ${value2[key].updateduk}</span>
</div>
</div>







</div>
`

    }





  let div =   document.getElementById('div').innerHTML = write//Here i write the value of api inside the html
 

  //remove some unwanted elements 
  document.getElementById('div').lastElementChild.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  document.getElementById('div').lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('remove')
  

})












