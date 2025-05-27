function callWhatsapp(dev_num, dev_name){
    
    const name;
    const contact;
    const message;
    const my_number = dev_num;
    const my_name = dev_name

    contactor_msg = "Olá, ${my_name}. Eu me chamo ${name}. %0A%0ASegue o motivo do contato: ${message}"
    const url = "https://wa.me/${my_number}?text=${encodeURIComponent(contactor_msg)}";
    window.open(urlWhatsApp, '_blank');
    document.getElementById('whatsappForm').reset();
}
