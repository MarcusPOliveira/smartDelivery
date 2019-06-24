/*cliente = gasto mensal 30 dias;

se cliente agenda pedido {
    escolhe produto
    escolhe data e horario -> chosenData e chosenHour
    carrinho();
    pagamento();
    se cliente confirma pagamento/pedido {
        chosenData é settado no database desse cliente
        pedido é enviado
    }
}

30 dias depois

notificação é enviada;
se cliente confirma {
    seleciona horario;
    carrinho();
    pagamento();
    chosenData não se altera no database
    pedido é enviado
}
se cliente reagenda {
    escolhe data e horario -> chosenData e chosenHour
    notificação vai ser enviada novamente nessa data nova data
}
*/