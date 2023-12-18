const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function dataRender() {
   const datas = [
      {
         Date: "18-06-2017 12:38:42",
         Market: "ETH/USDT",
         Side: "Buy",
         Price: 3582.18,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Open",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Buy",
         Price: 4030.4,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Open",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "ETH/USDT",
         Side: "Buy",
         Price: 3582.18,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "100%",
         Status: "Filled",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Buy",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Open",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Canceled",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Open",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Canceled",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Open",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Canceled",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Open",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Canceled",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Open",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Canceled",
      },
      {
         Date: "18-06-2017 12:38:42",
         Market: "BTC/USDT",
         Side: "Sell",
         Price: 54332.31,
         Amount: 4030.4,
         Value: 4030.4,
         Filled: "0%",
         Status: "Open",
      },
   ];

   const tbodyEl = $(".table-wrapper table tbody");

   const htmls = datas.map(
      (item) => `
        <tr>
            <td class="p-16-24 fz-14 fw-500">${item.Date}</td>
            <td class="p-16-24 fz-14 fw-500">${item.Market}</td>
            <td class="${item.Side === "Buy" ? "cl-quaternary" : "cl-tertiary"} p-16-24 fz-14 fw-500">${item.Side}</td>
            <td class="p-16-24 fz-14 fw-500">${item.Price}</td>
            <td class="p-16-24 fz-14 fw-500">${item.Amount}</td>
            <td class="p-16-24 fz-14 fw-500">${item.Value}</td>
            <td class="p-16-24 fz-14 fw-500">${item.Filled}</td>
            <td class="status-col p-16-24 fz-14 fw-500">
                <p class="status-col__text d-flex justify-center align-center p-2-10 b-radius-500 d-inline-block ${
                   item.Status === "Open"
                      ? "cl-quaternary bg-quaternary"
                      : item.Status === "Filled"
                      ? "cl-quinary bg-quinary"
                      : "cl-tertiary bg-tertiary"
                }">${item.Status}</p>
            </td>
            <td class="p-16-24 fz-14 fw-500">
                ${
                   item.Status === "Open"
                      ? `
                <button class="d-flex align-center lh-20">
                    <p class="cl-tertiary">Cancel</p>
                    <img class="ml-6" src="./assets/icons/cancel-icon.svg" alt="" />
                </button>
                `
                      : ""
                }
            </td>
        </tr>
        `,
   );

   tbodyEl.innerHTML = htmls.join("\n");
}

window.document.addEventListener("DOMContentLoaded", dataRender);
