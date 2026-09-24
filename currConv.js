
const populate = async ( value, currency) => {
   let myStr = ""
   URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_vT0M1ueDqiJGLqFRb7kzyuyVml2k4qghVnVQ2L6c&base_currency="+ currency;
   let response = await fetch(URL)
   let rjson = await response.json();
   console.log(rjson)
   document.querySelector(".output").style.display = "block"

   for(let key of Object.keys(rjson["data"])) {
      myStr += `
         <tr>
            <td>${key}</td>
            <td>${key}</td>
            <td>${rjson.data[key]*value}</td>
         </tr>
      `
   }
   const tableBody = document.querySelector("tbody");
   tableBody.innerHTML= myStr
   
}

const btn = document.querySelector('.btn')
btn.addEventListener("click" , (e) => {
   e.preventDefault()
   console.log("button is clicked")
   const value = parseInt(document.querySelector("input[name='quantity']").value)
   const currency = document.querySelector("select[name='country']").value;
   
   populate(value, currency);

})
