function openPagarMeCheckout(encryptionKey, param) {
  return new Promise((resolve, reject) => {
    param.billingShipping.customer_pagarme.external_id = param.customerID.toString();

    //console.log(encryptionKey)
    //console.log(param)

    // INICIAR A INSTÂNCIA DO CHECKOUT
    // declarando um callback de sucesso
    var checkout = new PagarMeCheckout.Checkout({
      encryption_key: encryptionKey,
      success: function (data) {
        //console.log('success: openPagarMeCheckout: ' + JSON.stringify(data));

        resolve(data.token);
      },
      error: function (data) {
        //console.log('error: openPagarMeCheckout: ' + JSON.stringify(data));
      },
    });

    // DEFINIR AS OPÇÕES
    // e abrir o modal
    // É necessário passar os valores boolean em "var params" como string
    var paramsPagarme = {
      uiColor: "#bababa", //Cor primária da interface de Checkout.
      amount: param.totalsToPay * 100, //Valor da transação (em centavos) a ser capturada pelo Checkout
      buttonText: "Pagar", //Define o texto do botão final de pagamento.
      customerData: "false", // Caso não deseje capturar dados do cliente pelo Checkout, setar como false.
      paymentMethods: "credit_card",
      maxInstallments: param.maxInstallments, //Número máximo de parcelas aceitas, de 1 a 12.
      freeInstallments: param.maxInstallments, //Número de parcelas que não terão juros cobrados
      defaultInstallment: 1, //Define a parcela padrão selecionada ao abrir o checkout
      interestRate: 0, //Taxa de juros a ser cobrada na transação
      //"postbackUrl": "https://dominiodaloja.com.br/", //Endereço da URL de POSTback do seu sistema, que receberá as notificações das alterações de status das transações
      createToken: "true", //Habilita a geração do token para autorização da transação. Obs.: Caso você queira apenas pegar os dados do cliente, deixe esse atributo com o valor false, e realize a transação normalmente no seu backend, com os dados informados no callback do checkout.
      headerText: "",

      customerName: param.billingShipping.customer_pagarme.name,
      customerDocumentNumber:
        param.billingShipping.customer_pagarme.documents[0].number,
      customerEmail: param.billingShipping.customer_pagarme.email,
      customerPhoneDdd: param.billingShipping.customer_pagarme.phone_numbers[0].substr(
        3,
        2
      ),
      customerPhoneNumber: param.billingShipping.customer_pagarme.phone_numbers[0].substr(
        5,
        9
      ),

      customerAddressStreet:
        param.billingShipping.billing_pagarme.address.street,
      customerAddressStreetNumber:
        param.billingShipping.billing_pagarme.address.street_number,
      customerAddressComplementary: "",
      customerAddressNeighborhood:
        param.billingShipping.billing_pagarme.address.neighborhood,
      customerAddressCity: param.billingShipping.billing_pagarme.address.city,
      customerAddressState: param.billingShipping.billing_pagarme.address.state,
      customerAddressZipcode:
        param.billingShipping.billing_pagarme.address.zipcode,

      customer: param.billingShipping.customer_pagarme,
      billing: param.billingShipping.billing_pagarme,
      shipping: param.billingShipping.shipping_pagarme,
      items: param.lineItems,
      metadata: {
        customerID: param.customerID,
        orderID: param.orderID,
      },
    };

    //console.log(paramsPagarme);

    checkout.open(paramsPagarme);
  });
}

function getScrollPosition() {
  bodyScrollHeight = document.body.scrollHeight * 0.8;

  scrollTop = document.body.scrollTop;

  var scrollPercent = (scrollTop * 100) / bodyScrollHeight;

  return scrollPercent;
}

function hideCookieConsent() {
  var e = document.getElementsByClassName("cc-color-override--807104874")[0];
  e.style.display = "none";
}

function fbViewContent(product) {
  let data = {
    content_name: product.title,
    content_category: product.categories[0].name,
    content_ids: product.id,
    content_type: "product",
    value: product.price,
    currency: "BRL",
  };

  fbq("track", "ViewContent", data);
}

function fbAddToCart(product) {
  var data = {
    content_ids: product.id,
    content_type: "product",
    num_items: 1,
    content_name: product.name,
    value: product.price,
    currency: "BRL",
  };

  fbq("track", "AddToCart", data);
}

function fbInitiateCheckout(ids, contents, value) {
  var data = {
    content_ids: ids,
    content_type: "product",
    value: value,
    currency: "BRL",
    num_items: ids.lenght,
    contents: contents,
  };

  fbq("track", "InitiateCheckout", data);
}

function fbPurchase(ids, contents, value) {
  let data = {
    content_ids: ids,
    content_type: "product",
    value: value,
    currency: "BRL",
    num_items: ids.lenght,
    contents: contents,
  };

  fbq("track", "Purchase", data);
}

function fbCompleteRegistration(ids, contents, value) {
  let data = {
    value: value,
    currency: "BRL",
  };

  fbq("track", "CompleteRegistration", data);
}
