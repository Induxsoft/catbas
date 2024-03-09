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
        const util06 = document.querySelector('input[name="util06"]');
        const util07 = document.querySelector('input[name="util07"]');
        const util08 = document.querySelector('input[name="util08"]');
        const util09 = document.querySelector('input[name="util09"]');
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

        if (util1 && ultCosto) util1.addEventListener('keyup', e => this.calcular_utilidad(util1,ultCosto));
    },

    calcular_utilidad(util, ultimoCosto)
    {
        let utilidad = Number(util.value);
        let precio = Number(ultimoCosto.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mas_precios.init()
});