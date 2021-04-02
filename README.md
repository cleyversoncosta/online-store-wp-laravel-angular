# Online Store (Laravel + Angular + Woocommerce)

Este projeto serviu como experimento para uma loja virtual, em busca de melhor performance em relação ao tradicional Wordpress + Woocommerce.

Observou-se uma renderização mais otimizada (rápida) para o usuário, porém com o ônus de um pior SEO se comparado ao Woocommerce tradicional.

## O que foi utilizado
Abaixo descrevo brevemente as ferramentas e tecnologias utilizadas

### Laravel 7 - Framework Base + pacotes adicionais
1. correios-consulta - para consulta de CEP e preenchimento do formulário de checkout
2. mautic/api-library - para criação de lista para email marketing
3. pagarme/pagarme-php - integração com gateway de pagamento Pagar.me
4. pixelpeter/laravel5-woocommerce-api-client - wrapper do woocommerce para comunicação REST
5. jgrossi/corcel - wrapper para comunicação com o wordpress direto via Eloquent

### Angular 9
Na ocasião do desenvolvimento desta Loja Online, a última release disponível era o Angular 9. Nenhum pacote em especial foi adicionado.

### Woocommerce/Wordpress
Foi utilizao a API do woocommerce e toda estrtutura de loja online que ele oferece. Tendo sido necessário focar apenas no font-end e na comunicação com o woocommerce.

### Ordem de comunicação

**Request:** Usuário >> Angular (front-end) >> API Laravel (back-end) >> API Woocommerce (back-end)

**Response:** Woocommerce >> Laravel >> Angular >> Usuário

### Imagens Demonstração

[Loja Online]()