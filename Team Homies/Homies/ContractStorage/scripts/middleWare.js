// setInterval(function () { console.log("Hello") }, 3000000);
// import { main } from './deploy.js'

const m = require("./deploy");
const fetch = require("node-fetch");
const api_url = "https://dhanrakshak-production-0b5f.up.railway.app/block";

setInterval(()=>check(api_url),60000);

async function check(url) {
  const response = await fetch(url);
  const data = await response.json();
  // Create an array of promises that will add each item to the database
  console.log(data.transaction);
  if (data.transaction) {
    const res = await m.main(data.transaction)
    console.log(res);
     fetch("https://dhanrakshak-production-0b5f.up.railway.app/block",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    transaction_id:data.transaction.transaction_id,
                    sender_id:data.transaction.sender_id ,
                    receiver_id:data.transaction.receiver_id ,
                    amount:data.transaction.amount,
                    timestamp:data.transaction.timestamp,
                    contract_address:res
            })
          }).then((response) => console.log(response))
      .catch((error) => {
        console.error(
          "An error occurred while adding items to the database",
          error
        );
      });
  }
}

// check();
