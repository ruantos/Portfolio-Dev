function callWhatsapp(dev_num, dev_name) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const my_number = dev_num;
    const my_name = dev_name;

    const contactor_msg = `Olá, ${my_name}. Eu me chamo ${nome}. Segue o motivo do contato: ${mensagem}`;

    const url = `https://wa.me/${my_number}?text=${encodeURIComponent(contactor_msg)}`;

    window.open(url, '_blank');
    document.getElementById('whatsappForm').reset();
}
