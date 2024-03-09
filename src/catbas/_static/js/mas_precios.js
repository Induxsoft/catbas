var mas_precios = 
{
    init()
    {
        const ultCosto = document.querySelector('input[name="costoultimo"]');

        const util1 = document.querySelector('input[name="util1"]');
        const util2 = document.querySelector('input[name="util2"]');
        const util3 = document.querySelector('input[name="util3"]');
        const util4 = document.querySelector('input[name="util4"]');
        const util5 = document.querySelector('input[name="util5"]');
        const util106 = document.querySelector('input[name="util106"]');
        const util107 = document.querySelector('input[name="util107"]');
        const util108 = document.querySelector('input[name="util108"]');
        const util109 = document.querySelector('input[name="util109"]');
        const util110 = document.querySelector('input[name="util110"]');
        const util111 = document.querySelector('input[name="util111"]');
        const util112 = document.querySelector('input[name="util112"]');
        const util113 = document.querySelector('input[name="util113"]');
        const util114 = document.querySelector('input[name="util114"]');
        const util115 = document.querySelector('input[name="util115"]');
        const util116 = document.querySelector('input[name="util116"]');
        const util117 = document.querySelector('input[name="util117"]');
        const util118 = document.querySelector('input[name="util118"]');
        const util119 = document.querySelector('input[name="util119"]');
        const util120 = document.querySelector('input[name="util120"]');

        const desc2 = document.querySelector('input[name="desc2"]');
        const desc3 = document.querySelector('input[name="desc3"]');
        const desc4 = document.querySelector('input[name="desc4"]');
        const desc5 = document.querySelector('input[name="desc5"]');

        const precio2 = document.querySelector('input[name="precio2"]').value;
        const precio3 = document.querySelector('input[name="precio3"]').value;
        const precio4 = document.querySelector('input[name="precio4"]').value;
        const precio5 = document.querySelector('input[name="precio5"]').value;

        if (util1 && ultCosto) util1.addEventListener('keyup', e => this.calcular_utilidad(util1,ultCosto,"precio1"));
        if (util2 && ultCosto) util2.addEventListener('keyup', e => this.calcular_utilidad(util2,ultCosto,"precio2"));
        if (util3 && ultCosto) util3.addEventListener('keyup', e => this.calcular_utilidad(util3,ultCosto,"precio3"));
        if (util4 && ultCosto) util4.addEventListener('keyup', e => this.calcular_utilidad(util4,ultCosto,"precio4"));
        if (util5 && ultCosto) util5.addEventListener('keyup', e => this.calcular_utilidad(util5,ultCosto,"precio5"));
        if (util106 && ultCosto) util106.addEventListener('keyup', e => this.calcular_utilidad(util106,ultCosto,"precio106"));
        if (util107 && ultCosto) util107.addEventListener('keyup', e => this.calcular_utilidad(util107,ultCosto,"precio107"));
        if (util108 && ultCosto) util108.addEventListener('keyup', e => this.calcular_utilidad(util108,ultCosto,"precio108"));
        if (util109 && ultCosto) util109.addEventListener('keyup', e => this.calcular_utilidad(util109,ultCosto,"precio109"));
        if (util110 && ultCosto) util110.addEventListener('keyup', e => this.calcular_utilidad(util110,ultCosto,"precio110"));
        if (util111 && ultCosto) util111.addEventListener('keyup', e => this.calcular_utilidad(util111,ultCosto,"precio111"));
        if (util112 && ultCosto) util112.addEventListener('keyup', e => this.calcular_utilidad(util112,ultCosto,"precio112"));
        if (util113 && ultCosto) util113.addEventListener('keyup', e => this.calcular_utilidad(util113,ultCosto,"precio113"));
        if (util114 && ultCosto) util114.addEventListener('keyup', e => this.calcular_utilidad(util114,ultCosto,"precio114"));
        if (util115 && ultCosto) util115.addEventListener('keyup', e => this.calcular_utilidad(util115,ultCosto,"precio115"));
        if (util116 && ultCosto) util116.addEventListener('keyup', e => this.calcular_utilidad(util116,ultCosto,"precio116"));
        if (util117 && ultCosto) util117.addEventListener('keyup', e => this.calcular_utilidad(util117,ultCosto,"precio117"));
        if (util118 && ultCosto) util118.addEventListener('keyup', e => this.calcular_utilidad(util118,ultCosto,"precio118"));
        if (util119 && ultCosto) util119.addEventListener('keyup', e => this.calcular_utilidad(util119,ultCosto,"precio119"));
        if (util120 && ultCosto) util120.addEventListener('keyup', e => this.calcular_utilidad(util120,ultCosto,"precio120"));

        if (desc2 && precio2) desc2.addEventListener('keyup', e => this.calcular_descuento(precio2,desc2,"precio2"));
        if (desc3 && precio3) desc3.addEventListener('keyup', e => this.calcular_descuento(precio3,desc3,"precio3"));
        if (desc4 && precio4) desc4.addEventListener('keyup', e => this.calcular_descuento(precio4,desc4,"precio4"));
        if (desc5 && precio5) desc5.addEventListener('keyup', e => this.calcular_descuento(precio5,desc5,"precio5"));
    },

    calcular_utilidad(util,ultCosto,field)
    {
        let utilidad = Number(util.value);
        let ultimoCosto = Number(ultCosto.value);
        let percent = (utilidad/100) * ultimoCosto;
        let precio = document.querySelector(`input[name="${field}"]`);

        precio.value = ultimoCosto + percent;
    },

    calcular_descuento(precioInicial,desc,field)
    {
        let descuento = desc.value;
        let precioFinal = document.querySelector(`input[name="${field}"]`);

        if (descuento > 0) {
            let percent = (descuento / 100) * precioInicial;
            precioFinal.value = precioInicial - percent;
        } else {
            precioFinal.value = precioInicial;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mas_precios.init()
});